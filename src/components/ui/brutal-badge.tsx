"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrutalBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "yellow" | "blue" | "pink" | "green" | "cyan" | "orange" | "purple" | "dark";
  size?: "sm" | "md";
}

const badgeVariants: Record<string, string> = {
  yellow: "bg-brand-yellow text-brutal-black",
  blue: "bg-brand-blue text-brutal-white",
  pink: "bg-brand-pink text-brutal-black",
  green: "bg-brand-green text-brutal-black",
  cyan: "bg-brand-cyan text-brutal-black",
  orange: "bg-brand-orange text-brutal-white",
  purple: "bg-brand-purple text-brutal-white",
  dark: "bg-brutal-black text-brutal-white",
};

const badgeSizes: Record<string, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function BrutalBadge({
  variant = "yellow",
  size = "md",
  className,
  children,
  ...props
}: BrutalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-heading font-bold uppercase tracking-wider",
        "border-2 border-brutal-black rounded-none",
        "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
