import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "secondary" | "ghost" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          variant === "default" &&
            "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-[hsl(var(--primary-foreground))] shadow-lg shadow-[rgba(0,0,0,0.25)] hover:opacity-95",
          variant === "secondary" &&
            "bg-[hsl(var(--card))] border border-[hsla(0,0%,100%,0.08)] text-[hsl(var(--foreground))] hover:border-[hsla(0,0%,100%,0.15)]",
          variant === "ghost" && "bg-transparent text-[hsl(var(--foreground))] hover:bg-white/5",
          variant === "outline" &&
            "border border-[hsla(0,0%,100%,0.15)] bg-transparent text-[hsl(var(--foreground))] hover:bg-white/5",
          "px-4 py-2",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
