import { cn } from "@/lib/utils";

const variants = {
  default: "bg-surface-700 text-text-secondary",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  beginner: "bg-beginner/10 text-beginner",
  intermediate: "bg-intermediate/10 text-intermediate",
  advanced: "bg-advanced/10 text-advanced",
} as const;

type BadgeProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

export function Badge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
