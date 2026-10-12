/**
 * Responsive photo using pre-optimized WebP renditions.
 * `src` is the base path without size suffix, e.g. "/images/generator-engine"
 * which maps to /images/generator-engine-800.webp and -1600.webp.
 */
type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function Photo({ src, alt, className, sizes = "100vw", priority = false }: PhotoProps) {
  return (
    <img
      src={`${src}-1600.webp`}
      srcSet={`${src}-800.webp 800w, ${src}-1600.webp 1600w`}
      sizes={sizes}
      alt={alt}
      width={1600}
      height={1600}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}
