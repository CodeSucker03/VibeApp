import Image from "next/image";

export function LandingImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1124}
      height={640}
      className={`w-full ${className}`}
    />
  );
}
