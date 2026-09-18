"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowLeft, FileText } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalInput } from "@/components/ui/brutal-input";
import { BrutalCard } from "@/components/ui/brutal-card";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-brutal-bg bg-grid-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-brand-yellow border-4 border-brutal-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <FileText size={24} strokeWidth={3} />
          </div>
          <span className="font-heading font-bold text-3xl tracking-tight uppercase">
            Cvezy
          </span>
        </Link>

        <BrutalCard accentColor="yellow" className="pt-8">
          <h1 className="font-heading font-bold text-2xl uppercase tracking-tight mb-2 text-center">
            Lupa Kata Sandi
          </h1>
          <p className="font-body text-sm text-gray-500 text-center mb-8">
            Masukkan email Anda dan kami akan mengirimkan link untuk reset kata sandi.
          </p>

          <div className="space-y-4 mb-6">
            <BrutalInput
              label="Email"
              type="email"
              placeholder="Masukkan email yang terdaftar"
            />
          </div>

          <BrutalButton variant="primary" size="lg" className="w-full mb-4">
            <Mail size={18} strokeWidth={3} />
            Kirim Link Reset
          </BrutalButton>

          <Link
            href="/auth/login"
            className="flex items-center justify-center gap-2 font-body text-sm text-gray-500 hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke halaman masuk
          </Link>
        </BrutalCard>
      </div>
    </div>
  );
}
