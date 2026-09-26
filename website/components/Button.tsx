import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-moss text-paper border-moss hover:bg-moss-deep hover:border-moss-deep",
  secondary:
    "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  light:
    "bg-paper text-moss border-paper hover:bg-linen hover:border-linen",
};

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={clsx("transition-transform duration-200", className)}
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  arrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] font-semibold tracking-[-0.005em] transition-colors duration-200",
    size === "md" ? "px-6 py-3.5 text-[0.95rem]" : "px-4 py-2 text-sm",
    variants[variant],
    className
  );
  const content = (
    <>
      {children}
      {arrow && <Arrow className="group-hover:translate-x-0.5" />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = clsx(
    "group inline-flex items-center gap-2 font-semibold text-moss underline decoration-moss/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-moss",
    className
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <Arrow className="group-hover:translate-x-0.5" />
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      <Arrow className="group-hover:translate-x-0.5" />
    </Link>
  );
}
