"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalInput } from "@/components/ui/brutal-input";
import { BrutalTextarea } from "@/components/ui/brutal-textarea";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { useCVStore } from "@/store/cv-store";

export default function PersonalInfoPage() {
  const { personalInfo, setPersonalInfo } = useCVStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPersonalInfo({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <BrutalBadge variant="yellow" className="mb-3">
          <User size={14} strokeWidth={3} className="mr-1" />
          Langkah 1 dari 5
        </BrutalBadge>
        <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
          Data Diri & Kontak
        </h1>
        <p className="font-body text-gray-500">
          Isi informasi dasar tentang diri Anda. Data ini akan muncul di bagian
          atas CV.
        </p>
      </div>

      {/* Form */}
      <BrutalCard className="mb-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BrutalInput
              label="Nama Lengkap"
              name="fullName"
              placeholder="Contoh: Budiyono Siregar"
              value={personalInfo.fullName}
              onChange={handleChange}
            />
            <BrutalInput
              label="Email"
              name="email"
              type="email"
              placeholder="Contoh: budiyono@email.com"
              value={personalInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BrutalInput
              label="Nomor Telepon"
              name="phone"
              type="tel"
              placeholder="Contoh: 081234567890"
              value={personalInfo.phone}
              onChange={handleChange}
            />
            <BrutalInput
              label="Alamat"
              name="address"
              placeholder="Contoh: Banten, Indonesia"
              value={personalInfo.address}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BrutalInput
              label="LinkedIn (opsional)"
              name="linkedin"
              placeholder="Contoh: linkedin.com/in/budiyono"
              value={personalInfo.linkedin}
              onChange={handleChange}
            />
            <BrutalInput
              label="Website (opsional)"
              name="website"
              placeholder="Contoh: budiyono.dev"
              value={personalInfo.website}
              onChange={handleChange}
            />
          </div>

          <BrutalTextarea
            label="Ringkasan Profesional"
            name="summary"
            placeholder="Ceritakan secara singkat tentang diri Anda, pengalaman, dan tujuan karir Anda..."
            hint="Tulis 2-3 kalimat yang menggambarkan diri Anda secara profesional."
            value={personalInfo.summary}
            onChange={handleChange}
            rows={4}
          />
        </div>
      </BrutalCard>

      {/* Navigation */}
      <div className="flex justify-end mt-8 w-full">
        <Link href="/builder/experience" className="w-full sm:w-auto">
          <BrutalButton
            variant="primary"
            size="lg"
            className="w-full justify-center"
            icon={<ArrowRight size={20} strokeWidth={3} />}
            iconPosition="right"
          >
            Lanjut
          </BrutalButton>
        </Link>
      </div>
    </div>
  );
}
