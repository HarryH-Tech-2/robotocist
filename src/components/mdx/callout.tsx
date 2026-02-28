import { cn } from "@/lib/utils";

const variants = {
  info: {
    border: "border-l-primary",
    bg: "bg-primary/5",
    icon: "\u2139\uFE0F",
    title: "Info",
  },
  warning: {
    border: "border-l-amber-500",
    bg: "bg-amber-500/5",
    icon: "\u26A0\uFE0F",
    title: "Warning",
  },
  danger: {
    border: "border-l-red-500",
    bg: "bg-red-500/5",
    icon: "\uD83D\uDEA8",
    title: "Danger",
  },
  tip: {
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/5",
    icon: "\uD83D\uDCA1",
    title: "Tip",
  },
};

interface CalloutProps {
  type?: keyof typeof variants;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const variant = variants[type];
  return (
    <div
      className={cn(
        "my-6 rounded-r-lg border-l-4 p-4",
        variant.border,
        variant.bg
      )}
    >
      <div className="flex items-center gap-2 font-semibold">
        <span>{variant.icon}</span>
        <span>{title || variant.title}</span>
      </div>
      <div className="mt-2 text-text-dark-secondary">{children}</div>
    </div>
  );
}
