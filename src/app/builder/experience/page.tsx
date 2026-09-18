"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Briefcase, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalInput } from "@/components/ui/brutal-input";
import { BrutalTextarea } from "@/components/ui/brutal-textarea";
import { BrutalCard, BrutalCardTitle } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { useCVStore, type Experience } from "@/store/cv-store";

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

export default function ExperiencePage() {
  const { experiences, addExperience, updateExperience, removeExperience, reorderExperience } =
    useCVStore();

  const handleAdd = () => {
    addExperience({
      id: generateId(),
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      description: "",
    });
  };

  const handleUpdate = (
    id: string,
    field: keyof Experience,
    value: string | boolean
  ) => {
    updateExperience(id, { [field]: value });
  };

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <BrutalBadge variant="blue" className="mb-3">
          <Briefcase size={14} strokeWidth={3} className="mr-1" />
          Langkah 2 dari 5
        </BrutalBadge>
        <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
          Pengalaman Kerja
        </h1>
        <p className="font-body text-gray-500">
          Tambahkan riwayat pekerjaan Anda. Mulai dari yang terbaru.
        </p>
      </div>

      {/* Experience entries */}
      <div className="space-y-6 mb-8">
        {experiences.length === 0 && (
          <BrutalCard className="text-center py-12">
            <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="font-heading font-bold text-lg uppercase text-gray-400 mb-4">
              Belum ada pengalaman kerja
            </p>
            <BrutalButton variant="primary" size="md" onClick={handleAdd}>
              <Plus size={18} strokeWidth={3} />
              Tambah Pengalaman Pertama
            </BrutalButton>
          </BrutalCard>
        )}

        {experiences.map((exp, index) => (
          <BrutalCard key={exp.id} accentColor="blue" className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <BrutalCardTitle>Pengalaman #{index + 1}</BrutalCardTitle>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => reorderExperience(index, "up")}
                  disabled={index === 0}
                  className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <ArrowUp size={16} strokeWidth={3} />
                </button>
                <button
                  onClick={() => reorderExperience(index, "down")}
                  disabled={index === experiences.length - 1}
                  className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <ArrowDown size={16} strokeWidth={3} />
                </button>
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-pink shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ml-2"
                >
                  <Trash2 size={16} strokeWidth={3} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BrutalInput
                  label="Jabatan"
                  placeholder="Contoh: Web Developer"
                  value={exp.jobTitle}
                  onChange={(e) =>
                    handleUpdate(exp.id, "jobTitle", e.target.value)
                  }
                />
                <BrutalInput
                  label="Perusahaan"
                  placeholder="Contoh: PT Teknologi Indonesia"
                  value={exp.company}
                  onChange={(e) =>
                    handleUpdate(exp.id, "company", e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BrutalInput
                  label="Tanggal Mulai"
                  type="month"
                  value={exp.startDate}
                  onChange={(e) =>
                    handleUpdate(exp.id, "startDate", e.target.value)
                  }
                />
                <BrutalInput
                  label="Tanggal Selesai"
                  type="month"
                  value={exp.isCurrent ? "" : exp.endDate}
                  disabled={exp.isCurrent}
                  placeholder={exp.isCurrent ? "Saat ini" : ""}
                  onChange={(e) =>
                    handleUpdate(exp.id, "endDate", e.target.value)
                  }
                />
              </div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-6 h-6 border-4 border-brutal-black flex items-center justify-center transition-colors ${exp.isCurrent ? "bg-brand-blue" : "bg-brutal-white"
                    }`}
                  onClick={() =>
                    handleUpdate(exp.id, "isCurrent", !exp.isCurrent)
                  }
                >
                  {exp.isCurrent && (
                    <span className="text-brutal-white font-bold text-xs">✓</span>
                  )}
                </div>
                <span
                  className="font-body text-sm"
                  onClick={() =>
                    handleUpdate(exp.id, "isCurrent", !exp.isCurrent)
                  }
                >
                  Saya masih bekerja di sini
                </span>
              </label>
              <BrutalTextarea
                label="Deskripsi Pekerjaan"
                placeholder="Gunakan baris baru (enter) atau strip (-) untuk membuat poin-poin. Contoh:
- Memimpin tim developer
- Mengoptimalkan database"
                value={exp.description}
                onChange={(e) =>
                  handleUpdate(exp.id, "description", e.target.value)
                }
                rows={3}
              />
            </div>
          </BrutalCard>
        ))}

        {experiences.length > 0 && (
          <BrutalButton variant="ghost" size="md" onClick={handleAdd}>
            <Plus size={18} strokeWidth={3} />
            Tambah Pengalaman Lain
          </BrutalButton>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Link href="/builder/personal">
          <BrutalButton
            variant="ghost"
            size="lg"
            icon={<ArrowLeft size={20} strokeWidth={3} />}
          >
            Kembali
          </BrutalButton>
        </Link>
        <Link href="/builder/organization">
          <BrutalButton
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} strokeWidth={3} />}
            iconPosition="right"
          >
            Lanjut: Organisasi
          </BrutalButton>
        </Link>
      </div>
    </div>
  );
}
