import Image from 'next/image';

interface EditorialImageProps {
  src: string;
  alt: string;
  label: string;
  credit: string;
  creditUrl: string;
  disclosure: string;
  className?: string;
  objectPosition?: string;
}

export function EditorialImage({
  src,
  alt,
  label,
  credit,
  creditUrl,
  disclosure,
  className = '',
  objectPosition = 'center',
}: EditorialImageProps) {
  return (
    <figure
      className={`group overflow-hidden rounded-2xl border border-border/80 bg-white shadow-xl shadow-navy-900/10 ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 1152px, (min-width: 768px) 90vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
          style={{ objectPosition }}
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-navy-950/70 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-md">
          {label}
        </span>
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
      <figcaption className="flex flex-col gap-1 border-t border-border/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <span>{disclosure}</span>
        <a
          href={creditUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 font-semibold text-blue-700 underline-offset-4 transition-colors hover:text-blue-900 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Photo: {credit} / Unsplash
        </a>
      </figcaption>
    </figure>
  );
}
