"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Lock, User } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalInput } from "@/components/ui/brutal-input";
import { BrutalCard } from "@/components/ui/brutal-card";
import { FileText } from "lucide-react";

export default function LoginPage() {
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

        <BrutalCard accentColor="blue" className="pt-8">
          <h1 className="font-heading font-bold text-2xl uppercase tracking-tight mb-2 text-center">
            Masuk ke Akun
          </h1>
          <p className="font-body text-sm text-gray-500 text-center mb-8">
            Masuk untuk mengakses CV tersimpan Anda.
          </p>

          <div className="space-y-4 mb-6">
            <BrutalInput
              label="Email"
              type="email"
              placeholder="Masukkan email Anda"
            />
            <BrutalInput
              label="Kata Sandi"
              type="password"
              placeholder="Masukkan kata sandi"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 border-3 border-brutal-black bg-brutal-white" />
              <span className="font-body text-sm">Ingat saya</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="font-body text-sm text-brand-blue font-bold hover:underline"
            >
              Lupa kata sandi?
            </Link>
          </div>

          <BrutalButton variant="primary" size="lg" className="w-full mb-4">
            <Lock size={18} strokeWidth={3} />
            Masuk
          </BrutalButton>

          <p className="font-body text-sm text-center text-gray-500">
            Belum punya akun?{" "}
            <Link
              href="/auth/register"
              className="text-brand-blue font-bold hover:underline"
            >
              Daftar sekarang
            </Link>
          </p>
        </BrutalCard>
      </div>
    </div>
  );
}
