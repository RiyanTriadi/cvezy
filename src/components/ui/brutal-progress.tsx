"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrutalProgressProps {
  value?: number; // 0-100
  steps?: { label: string; completed: boolean }[];
  accentColor?: "yellow" | "blue" | "pink" | "green";
  className?: string;
}

const colorMap: Record<string, string> = {
  yellow: "bg-brand-yellow",
  blue: "bg-brand-blue",
  pink: "bg-brand-pink",
  green: "bg-brand-green",
};

export function BrutalProgress({
  value,
  steps,
  accentColor = "yellow",
  className,
}: BrutalProgressProps) {
  if (steps) {
    const completedCount = steps.filter((s) => s.completed).length;
    const progressPercent = (completedCount / steps.length) * 100;

    return (
      <div className={cn("w-full", className)}>
        {/* Step indicators */}
        <div className="flex items-center justify-between mb-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              {/* Step circle */}
              <div
                className={cn(
                  "w-10 h-10 flex items-center justify-center",
                  "border-4 border-brutal-black rounded-none",
                  "font-heading font-bold text-sm",
                  "transition-all duration-300",
                  step.completed
                    ? cn(colorMap[accentColor], "text-brutal-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]")
                    : "bg-brutal-white text-gray-400"
                )}
              >
                {step.completed ? "✓" : i + 1}
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-1 mx-2 border-2 border-brutal-black",
                    step.completed ? colorMap[accentColor] : "bg-gray-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        {/* Labels */}
        <div className="flex justify-between">
          {steps.map((step, i) => (
            <span
              key={i}
              className={cn(
                "text-xs font-heading font-bold uppercase tracking-wide",
                step.completed ? "text-brutal-black" : "text-gray-400",
                i === 0 && "text-left",
                i === steps.length - 1 && "text-right",
                i > 0 && i < steps.length - 1 && "text-center"
              )}
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full h-6 border-4 border-brutal-black bg-brutal-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out",
            colorMap[accentColor]
          )}
          style={{ width: `${Math.min(100, Math.max(0, value ?? 0))}%` }}
        />
      </div>
    </div>
  );
}
