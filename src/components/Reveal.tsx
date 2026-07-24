import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  img?: boolean;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLDivElement>, "style">;

/**
 * Reveal — wraps children with the scroll-reveal animation.
 * Stagger siblings with the `delay` prop (ms). Set `img` for the
 * image (scale-in) variant.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  img = false,
  style,
  ...rest
}: RevealProps) {
  return (
    <div
      className={cn(img ? "reveal-img" : "reveal", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}
