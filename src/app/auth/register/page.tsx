"use client";

import React from "react";
import Link from "next/link";
import { UserPlus, FileText } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalInput } from "@/components/ui/brutal-input";
import { BrutalCard } from "@/components/ui/brutal-card";

export default function RegisterPage() {
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

        <BrutalCard accentColor="green" className="pt-8">
          <h1 className="font-heading font-bold text-2xl uppercase tracking-tight mb-2 text-center">
            Daftar Akun Baru
          </h1>
          <p className="font-body text-sm text-gray-500 text-center mb-8">
            Buat akun untuk menyimpan dan mengelola CV Anda.
          </p>

          <div className="space-y-4 mb-6">
            <BrutalInput
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
            />
            <BrutalInput
              label="Email"
              type="email"
              placeholder="Masukkan email Anda"
            />
            <BrutalInput
              label="Kata Sandi"
              type="password"
              placeholder="Buat kata sandi (min. 8 karakter)"
            />
            <BrutalInput
              label="Konfirmasi Kata Sandi"
              type="password"
              placeholder="Ulangi kata sandi"
            />
          </div>

          <BrutalButton variant="secondary" size="lg" className="w-full mb-4">
            <UserPlus size={18} strokeWidth={3} />
            Daftar Sekarang
          </BrutalButton>

          <p className="font-body text-sm text-center text-gray-500">
            Sudah punya akun?{" "}
            <Link
              href="/auth/login"
              className="text-brand-blue font-bold hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </BrutalCard>
      </div>
    </div>
  );
}
