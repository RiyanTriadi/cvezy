"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface BrutalSelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

export function BrutalSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Pilih...",
  error,
  className,
}: BrutalSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("w-full", className)} ref={ref}>
      {label && (
        <label className="block font-heading font-bold text-sm uppercase tracking-wide mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full px-4 py-3 text-left",
            "font-body text-base",
            "bg-brutal-white",
            "border-4 border-brutal-black rounded-none",
            "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
            "flex items-center justify-between gap-2",
            "transition-all duration-150",
            isOpen && "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-brand-yellow",
            error && "border-brand-pink",
            "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          )}
        >
          <span className={selectedOption ? "text-brutal-black" : "text-gray-400"}>
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDown
            size={20}
            strokeWidth={3}
            className={cn(
              "transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            className={cn(
              "absolute z-50 w-full mt-2",
              "bg-brutal-white border-4 border-brutal-black rounded-none",
              "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
              "max-h-60 overflow-y-auto"
            )}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-3 text-left font-body text-base",
                  "border-b-2 border-brutal-black last:border-b-0",
                  "transition-colors duration-100",
                  "hover:bg-brand-yellow hover:text-brutal-black",
                  value === option.value && "bg-brand-yellow font-bold"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-brand-pink font-bold font-body">
          ⚠ {error}
        </p>
      )}
    </div>
  );
}
