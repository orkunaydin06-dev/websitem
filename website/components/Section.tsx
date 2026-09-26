import clsx from "clsx";

const tones = {
  paper: "bg-paper text-ink",
  linen: "bg-linen text-ink",
  moss: "bg-moss text-paper",
  ink: "bg-ink text-paper",
};

export function Container({
  children,
  className,
  narrow,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-8",
        narrow ? "max-w-[760px]" : "max-w-[1200px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "paper",
  id,
  className,
  narrow,
  bordered,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  id?: string;
  className?: string;
  narrow?: boolean;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-section-sm md:py-section",
        tones[tone],
        bordered && "border-t border-rule",
        className
      )}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={clsx(
        "display font-medium leading-[1.08]",
        Tag === "h1"
          ? "text-[2.75rem] sm:text-6xl md:text-7xl"
          : "text-[2.1rem] sm:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
