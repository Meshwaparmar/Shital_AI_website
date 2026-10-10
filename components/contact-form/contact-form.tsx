'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { INTERESTED_IN_OPTIONS, BUSINESS_TYPES } from '@/lib/content';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name')
    .max(100, 'Name is too long'),
  company: z.string().max(200, 'Company name is too long').optional().or(z.literal('')),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  phone: z
    .string()
    .max(30, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  businessType: z.string().min(1, 'Please select a business type'),
  interestedIn: z.string().min(1, 'Please select what you are interested in'),
  message: z
    .string()
    .min(10, 'Please tell us a bit more about your needs (at least 10 characters)')
    .max(2000, 'Message is too long'),
}).refine((data) => Boolean(data.email || data.phone), {
  message: 'Please enter a business email or phone number',
  path: ['email'],
});

type FormValues = z.infer<typeof formSchema>;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      businessType: '',
      interestedIn: '',
      message: '',
    },
  });

  const businessType = watch('businessType');
  const interestedIn = watch('interestedIn');

  const onSubmit = async (data: FormValues) => {
    setSubmitState('submitting');
    try {
      const body = new URLSearchParams({
        'form-name': 'business-enquiry',
        fullName: data.fullName,
        company: data.company || '',
        email: data.email || '',
        phone: data.phone || '',
        businessType: data.businessType,
        interestedIn: data.interestedIn,
        message: data.message,
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error('Submission failed');
      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border/80 bg-white p-8 text-center soft-shadow sm:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
          <CheckCircle2 className="h-7 w-7 text-blue-600" strokeWidth={1.8} />
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy-700">
          Enquiry submitted
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Thank you for sharing your requirement. The Shital AI LLP team can now review it and follow up using the contact details you provided.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitState('idle')}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="business-enquiry"
      method="POST"
      action="/contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      className="rounded-xl border border-border/80 bg-white p-6 soft-shadow sm:p-8 lg:p-10"
      aria-label="Business enquiry form"
    >
      <input type="hidden" name="form-name" value="business-enquiry" />
      <p className="hidden" aria-hidden="true">
        <label>Do not fill this field<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      {submitState === 'error' && (
        <div
          className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-semibold text-red-800">
              Something went wrong
            </p>
            <p className="mt-0.5 text-sm text-red-700">
              We couldn&apos;t send your enquiry right now. Please try again
              later.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <FormField
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName?.message}
        >
          <Input
            id="fullName"
            placeholder="John Smith"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            {...register('fullName')}
          />
        </FormField>

        {/* Company Name */}
        <FormField
          id="company"
          label="Company Name"
          error={errors.company?.message}
        >
          <Input
            id="company"
            placeholder="Your company"
            {...register('company')}
          />
        </FormField>

        {/* Email */}
        <FormField
          id="email"
          label="Business Email"
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
        </FormField>

        {/* Phone */}
        <FormField
          id="phone"
          label="Phone"
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            placeholder="Your phone number"
            {...register('phone')}
          />
        </FormField>

        {/* Business Type */}
        <FormField
          id="businessType"
          label="Business Type"
          required
          error={errors.businessType?.message}
        >
          <Select
            value={businessType}
            onValueChange={(val) => setValue('businessType', val, { shouldValidate: true })}
          >
            <SelectTrigger
              id="businessType"
              aria-invalid={!!errors.businessType}
              className="w-full"
            >
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              {BUSINESS_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>

        {/* Interested In */}
        <FormField
          id="interestedIn"
          label="Interested In"
          required
          error={errors.interestedIn?.message}
        >
          <Select
            value={interestedIn}
            onValueChange={(val) => setValue('interestedIn', val, { shouldValidate: true })}
          >
            <SelectTrigger
              id="interestedIn"
              aria-invalid={!!errors.interestedIn}
              className="w-full"
            >
              <SelectValue placeholder="Select what you're interested in" />
            </SelectTrigger>
            <SelectContent>
              {INTERESTED_IN_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      </div>

      {/* Message */}
      <div className="mt-5">
        <FormField
          id="message"
          label="Message"
          required
          error={errors.message?.message}
        >
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us about your business and what you're looking for..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
        </FormField>
      </div>

      {/* Submit */}
      <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          Fields marked with <span className="text-red-500">*</span> are required.
        </p>
        <Button
          type="submit"
          disabled={submitState === 'submitting'}
          className="min-h-11 w-full rounded-full bg-[linear-gradient(to_bottom,#3a3f5c_0%,#1e2033_100%)] px-6 text-white hover:brightness-110 sm:w-auto sm:min-w-[210px]"
        >
          {submitState === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Discuss Your Requirement'
          )}
        </Button>
      </div>
    </form>
  );
}

function FormField({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm font-semibold text-navy-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </Label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className={cn('text-xs font-medium text-red-600')}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
