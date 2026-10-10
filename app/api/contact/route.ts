import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/contact';

export const runtime = 'nodejs';
export const maxDuration = 10;

const MAX_REQUEST_LENGTH = 20_000;
const WEBHOOK_TIMEOUT_MS = 8_000;

function jsonResponse(body: object, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
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
    return jsonResponse({ ok: true }, 200);
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  if (!webhookUrl) {
    return jsonResponse({ error: 'Contact service is not configured.' }, 503);
  }

  let webhook: URL;
  try {
    webhook = new URL(webhookUrl);
  } catch {
    return jsonResponse({ error: 'Contact service is not configured.' }, 503);
  }

  if (webhook.protocol !== 'https:') {
    return jsonResponse({ error: 'Contact service is not configured.' }, 503);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    const authToken = process.env.CONTACT_FORM_WEBHOOK_AUTH_TOKEN;
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    const response = await fetch(webhook, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        event: 'business_enquiry',
        submittedAt: new Date().toISOString(),
        source: 'Shital AI LLP website',
        data: {
          fullName: parsed.data.fullName,
          company: parsed.data.company,
          email: parsed.data.email,
          phone: parsed.data.phone,
          businessType: parsed.data.businessType,
          interestedIn: parsed.data.interestedIn,
          message: parsed.data.message,
        },
      }),
      cache: 'no-store',
      signal: controller.signal,
    });

    if (!response.ok) {
      return jsonResponse({ error: 'Contact service is temporarily unavailable.' }, 502);
    }

    return jsonResponse({ ok: true }, 200);
  } catch {
    return jsonResponse({ error: 'Contact service is temporarily unavailable.' }, 502);
  } finally {
    clearTimeout(timeout);
  }
}
