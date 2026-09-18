"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "colored" | "interactive";
  accentColor?: "yellow" | "blue" | "pink" | "green" | "cyan" | "orange" | "purple";
  noPadding?: boolean;
}

const accentColorMap: Record<string, string> = {
  yellow: "bg-brand-yellow",
  blue: "bg-brand-blue",
  pink: "bg-brand-pink",
  green: "bg-brand-green",
  cyan: "bg-brand-cyan",
  orange: "bg-brand-orange",
  purple: "bg-brand-purple",
};

const cardBgMap: Record<string, string> = {
  yellow: "bg-brand-yellow-light",
  blue: "bg-brand-blue-light",
  pink: "bg-brand-pink-light",
  green: "bg-brand-green-light",
  cyan: "bg-brand-cyan/10",
  orange: "bg-brand-orange/10",
  purple: "bg-brand-purple/10",
};

export function BrutalCard({
  variant = "default",
  accentColor,
  noPadding = false,
  className,
  children,
  ...props
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        // Base
        "relative border-4 border-brutal-black rounded-none",
        "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        "bg-brutal-white",
        // Padding
        !noPadding && "p-6",
        // Colored variant
        variant === "colored" && accentColor && cardBgMap[accentColor],
        // Interactive variant
        variant === "interactive" && [
          "transition-all duration-150 ease-in-out cursor-pointer",
          "hover:translate-x-[2px] hover:translate-y-[2px]",
          "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          "active:translate-x-[4px] active:translate-y-[4px]",
          "active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        ],
        className
      )}
      {...props}
    >
      {/* Accent stripe */}
      {accentColor && (
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-2 -mt-[4px] -ml-[4px] -mr-[4px]",
            "border-x-4 border-t-4 border-brutal-black",
            accentColorMap[accentColor]
          )}
        />
      )}
      {children}
    </div>
  );
}

export function BrutalCardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function BrutalCardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-heading font-bold text-xl uppercase tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function BrutalCardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function BrutalCardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-4 pt-4 border-t-4 border-brutal-black flex items-center gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
