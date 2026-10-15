import { z } from 'zod';
import { BUSINESS_TYPES, INTERESTED_IN_OPTIONS } from '@/lib/content';

export const PROJECT_BUDGET_OPTIONS = [
  'Under ₹1 lakh',
  '₹1 lakh – ₹5 lakh',
  '₹5 lakh – ₹15 lakh',
  '₹15 lakh+',
  'Not sure yet',
] as const;

export const contactFormSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Please enter your full name')
      .max(100, 'Name is too long'),
    company: z.string().trim().max(200, 'Company name is too long').optional().default(''),
    email: z
      .string()
      .trim()
      .email('Please enter a valid business email address')
      .max(254),
    phone: z
      .string()
      .trim()
      .min(8, 'Please enter a phone number with country code')
      .max(30, 'Phone number is too long')
      .regex(/^\+\d[\d\s().-]{6,28}$/, 'Start the phone number with a country code, for example +91'),
    subject: z.string().trim().max(150, 'Subject is too long').optional().default(''),
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
    projectBudget: z
      .union([z.literal(''), z.enum(PROJECT_BUDGET_OPTIONS)])
      .optional()
      .default(''),
    message: z
      .string()
      .trim()
      .min(10, 'Please tell us a bit more about your needs (at least 10 characters)')
      .max(2000, 'Message is too long'),
    consent: z.boolean().refine((value) => value, {
      message: 'Please confirm that Shital AI LLP may contact you about your enquiry',
    }),
    website: z.string().max(200).optional().default(''),
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;
