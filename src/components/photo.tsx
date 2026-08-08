type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  ratio?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Framed studio photograph: navy hairline frame, brand-tinted overlay and a
 * slow zoom on hover so imagery feels kinetic without distracting motion.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  ratio = "aspect-[4/3]",
  className = "",
  priority = false,
}: PhotoProps) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[4px] border border-navy-line ${ratio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-blue to-orange opacity-70"
        aria-hidden="true"
      />
    </figure>
  );
}
