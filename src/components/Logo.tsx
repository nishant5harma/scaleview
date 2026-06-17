import Image from "next/image";
import Link from "next/link";

export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-[10px] shadow-[0_6px_18px_-6px_rgba(11,92,255,0.7)]">
        <Image
          src="/images/logo.png"
          alt="ScaleView logo"
          fill
          sizes="36px"
          className="object-cover"
          priority
        />
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Scale<span className="text-brand">View</span>
      </span>
    </Link>
  );
}
