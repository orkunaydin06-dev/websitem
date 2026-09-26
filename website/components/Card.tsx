import clsx from "clsx";

// Çerçeveli kart: ince mürekkep çerçeve, açık yüzey, isteğe bağlı köşe üçgeni.
export function Card({
  children,
  corner,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  corner?: boolean;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={clsx(
        "rounded-[3px] border border-ink/85 bg-card p-6 sm:p-9",
        corner && "corner",
        className
      )}
    >
      {children}
    </Tag>
  );
}
