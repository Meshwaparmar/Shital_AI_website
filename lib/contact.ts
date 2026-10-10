import { z } from 'zod';
import { BUSINESS_TYPES, INTERESTED_IN_OPTIONS } from '@/lib/content';

const optionalEmail = z.union([
  z.literal(''),
  z.string().trim().email('Please enter a valid email address').max(254),
]);

export const contactFormSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Please enter your full name')
      .max(100, 'Name is too long'),
    company: z.string().trim().max(200, 'Company name is too long').optional().default(''),
    email: optionalEmail.optional().default(''),
    phone: z.string().trim().max(30, 'Phone number is too long').optional().default(''),
    businessType: z
      .string()
      .refine(
        (value) => BUSINESS_TYPES.includes(value as (typeof BUSINESS_TYPES)[number]),
        'Please select a valid business type'
      ),
    interestedIn: z
      .string()
      .refine(
        (value) =>
          INTERESTED_IN_OPTIONS.includes(
            value as (typeof INTERESTED_IN_OPTIONS)[number]
          ),
        'Please select a valid area of interest'
      ),
    message: z
      .string()
      .trim()
      .min(10, 'Please tell us a bit more about your needs (at least 10 characters)')
      .max(2000, 'Message is too long'),
    website: z.string().max(200).optional().default(''),
  })
  .refine((data) => Boolean(data.email || data.phone), {
    message: 'Please enter a business email or phone number',
    path: ['email'],
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;
