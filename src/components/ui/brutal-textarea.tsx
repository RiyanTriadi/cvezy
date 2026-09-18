"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrutalTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const BrutalTextarea = React.forwardRef<
  HTMLTextAreaElement,
  BrutalTextareaProps
>(({ label, error, hint, className, id, ...props }, ref) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block font-heading font-bold text-sm uppercase tracking-wide mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(
          "w-full px-4 py-3 min-h-[120px] resize-y",
          "font-body text-base text-brutal-black",
          "bg-brutal-white",
          "border-4 border-brutal-black rounded-none",
          "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
          "focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          "focus:border-brand-yellow",
          "transition-all duration-150",
          "placeholder:text-gray-400 placeholder:font-normal",
          error &&
            "border-brand-pink focus:border-brand-pink shadow-[3px_3px_0px_0px_#FF69B4]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100",
          className
        )}
        {...props}
      />
      {hint && !error && (
        <p className="mt-1.5 text-sm text-gray-500 font-body">{hint}</p>
      )}
      {error && (
        <p className="mt-1.5 text-sm text-brand-pink font-bold font-body">
          ⚠ {error}
        </p>
      )}
    </div>
  );
});

BrutalTextarea.displayName = "BrutalTextarea";
