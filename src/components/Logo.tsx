import { cn } from "../utils/cn";

/**
 * Amigo wordmark lockup — an italic serif monogram,
 * the "AMIGO" display wordmark, and the Cantonese name 雅谷.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Amigo — home"
      className={cn("group flex items-center gap-3", className)}
    >
      <Monogram className="h-9 w-9 sm:h-10 sm:w-10 transition-transform duration-700 ease-out group-hover:rotate-[8deg]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] sm:text-[1.6rem] font-medium tracking-[0.34em] text-cream pl-[0.34em]">
          AMIGO
        </span>
        <span className="mt-1 font-cn text-[0.62rem] sm:text-[0.66rem] tracking-[0.32em] text-gold/85 pl-[0.32em]">
          雅&nbsp;谷&nbsp;&nbsp;·&nbsp;&nbsp;EST. 1976
        </span>
      </span>
    </a>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        stroke="#b8902f"
        strokeWidth="1"
        opacity="0.9"
      />
      <rect x="6" y="6" width="36" height="36" stroke="#b8902f" strokeWidth="0.6" opacity="0.45" />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        fontWeight="500"
        fontSize="26"
        fill="#c9a23f"
      >
        A
      </text>
    </svg>
  );
}
