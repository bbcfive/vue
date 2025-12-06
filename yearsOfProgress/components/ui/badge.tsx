import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-gradient-to-r from-[hsl(var(--primary))]/30 to-[hsl(var(--secondary))]/25 text-[hsl(var(--foreground))] border border-[hsla(0,0%,100%,0.08)]",
        variant === "outline" &&
          "border border-[hsla(0,0%,100%,0.2)] text-[hsl(var(--foreground))] bg-transparent",
        className
      )}
      {...props}
    />
  );
}
