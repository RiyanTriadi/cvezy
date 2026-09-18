"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrutalModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap: Record<string, string> = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export function BrutalModal({
  open,
  onClose,
  title,
  children,
  size = "md",
  className,
}: BrutalModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, handleEscape]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brutal-black/60"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative w-full",
              "bg-brutal-white border-4 border-brutal-black rounded-none",
              "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
              sizeMap[size],
              className
            )}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between p-6 pb-0">
                <h2 className="font-heading font-bold text-xl uppercase tracking-tight">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center",
                    "border-4 border-brutal-black bg-brand-pink",
                    "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                    "hover:translate-x-[2px] hover:translate-y-[2px]",
                    "hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
                    "active:translate-x-[3px] active:translate-y-[3px]",
                    "active:shadow-none",
                    "transition-all duration-150"
                  )}
                >
                  <X size={18} strokeWidth={3} />
                </button>
              </div>
            )}

            {/* Body */}
            <div className="p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
