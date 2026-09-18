"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/builder/personal", label: "Buat CV" },
  { href: "/dashboard", label: "CV Saya" },
  { href: "/help", label: "Bantuan" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-brutal-bg border-b-4 border-brutal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-yellow border-4 border-brutal-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
              <FileText size={20} strokeWidth={3} />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight uppercase">
              Cvezy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading font-bold text-sm uppercase tracking-wide hover:text-brand-blue transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/builder/personal">
              <BrutalButton
                variant="primary"
                size="sm"
                icon={<Sparkles size={16} strokeWidth={3} />}
              >
                Mulai Buat CV
              </BrutalButton>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden w-12 h-12 flex items-center justify-center",
              "border-4 border-brutal-black bg-brutal-white",
              "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
              "hover:translate-x-[2px] hover:translate-y-[2px]",
              "hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
              "transition-all duration-150"
            )}
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={3} />
            ) : (
              <Menu size={24} strokeWidth={3} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t-4 border-brutal-black bg-brutal-white"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-heading font-bold text-lg uppercase tracking-wide p-3 border-4 border-brutal-black bg-brutal-bg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/builder/personal"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                <BrutalButton variant="primary" size="lg" className="w-full">
                  <Sparkles size={20} strokeWidth={3} />
                  Mulai Buat CV
                </BrutalButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
