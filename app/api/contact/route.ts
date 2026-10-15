import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/contact';

export const runtime = 'nodejs';
export const maxDuration = 15;

const MAX_REQUEST_LENGTH = 20_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  attempts: number;
  resetAt: number;
};

const globalRateLimitStore = globalThis as typeof globalThis & {
  contactRateLimitStore?: Map<string, RateLimitEntry>;
};

const rateLimitStore =
  globalRateLimitStore.contactRateLimitStore ?? new Map<string, RateLimitEntry>();
globalRateLimitStore.contactRateLimitStore = rateLimitStore;

function jsonResponse(body: object, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function clientIdentifier(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  return (
    forwardedFor?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    'unknown'
  );
}

function rateLimit(request: Request) {
  const now = Date.now();
  const identifier = clientIdentifier(request);
  const existing = rateLimitStore.get(identifier);

  if (!existing || existing.resetAt <= now) {
    if (rateLimitStore.size >= 1_000) {
      rateLimitStore.forEach((entry, key) => {
        if (entry.resetAt <= now) rateLimitStore.delete(key);
      });
    }

    if (rateLimitStore.size >= 1_000) {
      const oldestKey = rateLimitStore.keys().next().value;
      if (oldestKey) rateLimitStore.delete(oldestKey);
    }

    rateLimitStore.set(identifier, {
      attempts: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return null;
  }

  existing.attempts += 1;
  if (existing.attempts > RATE_LIMIT_MAX_REQUESTS) {
    return Math.max(1, Math.ceil((existing.resetAt - now) / 1_000));
  }

  return null;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_REQUEST_LENGTH) {
    return jsonResponse({ error: 'Request is too large.' }, 413);
  }

  const rawBody = await request.text();
  if (rawBody.length > MAX_REQUEST_LENGTH) {
    return jsonResponse({ error: 'Request is too large.' }, 413);
  }

  let submittedData: unknown;
  try {
    submittedData = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  const parsed = contactFormSchema.safeParse(submittedData);
  if (!parsed.success) {
    return jsonResponse({ error: 'Please check the submitted fields.' }, 400);
  }

  if (parsed.data.website) {
    return jsonResponse({ error: 'Please check the submitted fields.' }, 400);
  }

  const retryAfter = rateLimit(request);
  if (retryAfter !== null) {
    return NextResponse.json(
      { error: 'Too many enquiries. Please try again later.' },
      {
        status: 429,
        headers: {
          'Cache-Control': 'no-store',
          'Retry-After': String(retryAfter),
        },
      }
    );
  }

  return jsonResponse(
    {
      error:
        'Customer enquiry delivery is not configured yet. Please try again later.',
    },
    503
  );
}
