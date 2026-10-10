import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  variant = 'dark',
  className,
  width = 116,
  height = 44,
}: LogoProps) {
  return (
    <div
      className={cn('relative shrink-0', className)}
      style={{ width, height }}
    >
      <Image
        src="/images/brand/Company_logo_transparent.png"
        alt="Shital AI LLP"
        fill
        priority
        sizes={`${width}px`}
        className={cn('object-contain object-center', variant === 'dark' && 'brightness-0')}
      />
    </div>
  );
}

export function LogoMark({
  className,
  size = 44,
}: {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark';
}) {
  return (
    <div
      className={cn('relative shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/brand/Company_logo_transparent.png"
        alt="Shital AI LLP"
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </div>
  );
}
