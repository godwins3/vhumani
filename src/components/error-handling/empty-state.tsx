import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface EmptyStateAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost" | "link";
}

interface EmptyStateProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  iconClassName?: string;
  action?: EmptyStateAction;
  className?: string;
}

export const EmptyState = ({
  title,
  description,
  icon: Icon,
  iconClassName,
  action,
  className,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50/50 p-8 text-center",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-full bg-gray-100 p-3 text-gray-500",
          iconClassName,
        )}
      >
        <Icon size={24} />
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>

      {description && (
        <p className="mt-2 max-w-sm text-sm text-gray-500">{description}</p>
      )}

      {action && (
        <div className="mt-6">
          {action.href ? (
            <Button asChild variant={action.variant || "default"}>
              <Link href={action.href}>{action.label}</Link>
            </Button>
          ) : (
            <Button
              onClick={action.onClick}
              variant={action.variant || "default"}
            >
              {action.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
