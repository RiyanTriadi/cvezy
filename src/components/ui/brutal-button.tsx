"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrutalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-brand-yellow text-brutal-black hover:bg-yellow-400 active:bg-yellow-500",
  secondary:
    "bg-brand-blue text-brutal-white hover:bg-blue-500 active:bg-blue-600",
  danger:
    "bg-brand-pink text-brutal-black hover:bg-pink-400 active:bg-pink-500",
  ghost:
    "bg-transparent text-brutal-black border-4 border-brutal-black hover:bg-brutal-black hover:text-brutal-white",
  dark: "bg-brutal-black text-brutal-white hover:bg-gray-800 active:bg-gray-900",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

export function BrutalButton({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  className,
  children,
  disabled,
  ...props
}: BrutalButtonProps) {
  return (
    <button
      className={cn(
        // Base
        "relative inline-flex items-center justify-center gap-2",
        "font-heading font-bold uppercase tracking-wide",
        "border-4 border-brutal-black rounded-none",
        "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        // Transition
        "transition-all duration-150 ease-in-out",
        // Hover — press effect
        "hover:translate-x-[2px] hover:translate-y-[2px]",
        "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        // Active — fully pressed
        "active:translate-x-[4px] active:translate-y-[4px]",
        "active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        // Disabled
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0",
        "disabled:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        // Variant + Size
        variantStyles[variant],
        sizeStyles[size],
        // Ghost variant already has border
        variant !== "ghost" && "border-4 border-brutal-black",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {icon && iconPosition === "left" && !loading && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
