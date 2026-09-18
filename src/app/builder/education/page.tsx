"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Plus,
  Trash2,
  Wrench,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalInput } from "@/components/ui/brutal-input";
import { BrutalTextarea } from "@/components/ui/brutal-textarea";
import { BrutalSelect } from "@/components/ui/brutal-select";
import { BrutalCard, BrutalCardTitle } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { useCVStore, type Education, type Skill } from "@/store/cv-store";

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}



export default function EducationPage() {
  const {
    education,
    skills,
    addEducation,
    updateEducation,
    removeEducation,
    reorderEducation,
    addSkill,
    updateSkill,
    removeSkill,
    reorderSkill,
  } = useCVStore();

  const handleAddEducation = () => {
    addEducation({
      id: generateId(),
      institution: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
      description: "",
    });
  };

  const handleUpdateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    updateEducation(id, { [field]: value });
  };

  const handleAddSkill = () => {
    addSkill({
      id: generateId(),
      name: "",
    });
  };

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <BrutalBadge variant="green" className="mb-3">
          <GraduationCap size={14} strokeWidth={3} className="mr-1" />
          Langkah 3 dari 5
        </BrutalBadge>
        <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
          Pendidikan & Keahlian
        </h1>
        <p className="font-body text-gray-500">
          Tambahkan riwayat pendidikan dan keahlian yang Anda miliki.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-4 flex items-center gap-2">
          <GraduationCap size={24} strokeWidth={2.5} />
          Pendidikan
        </h2>

        <div className="space-y-6 mb-4">
          {education.length === 0 && (
            <BrutalCard className="text-center py-10">
              <GraduationCap size={40} className="mx-auto text-gray-300 mb-3" />
              <p className="font-heading font-bold text-base uppercase text-gray-400 mb-4">
                Belum ada pendidikan
              </p>
              <BrutalButton
                variant="secondary"
                size="md"
                onClick={handleAddEducation}
              >
                <Plus size={18} strokeWidth={3} />
                Tambah Pendidikan
              </BrutalButton>
            </BrutalCard>
          )}

          {education.map((edu, index) => (
            <BrutalCard key={edu.id} accentColor="green" className="pt-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <BrutalCardTitle className="mb-0">Pendidikan #{index + 1}</BrutalCardTitle>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => reorderEducation(index, "up")}
                    disabled={index === 0}
                    className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ArrowUp size={16} strokeWidth={3} />
                  </button>
                  <button
                    onClick={() => reorderEducation(index, "down")}
                    disabled={index === education.length - 1}
                    className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ArrowDown size={16} strokeWidth={3} />
                  </button>
                  <button
                    onClick={() => removeEducation(edu.id)}
                    className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-pink shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ml-2"
                  >
                    <Trash2 size={16} strokeWidth={3} />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <BrutalInput
                  label="Nama Institusi"
                  placeholder="Contoh: Universitas Indonesia"
                  value={edu.institution}
                  onChange={(e) =>
                    handleUpdateEducation(edu.id, "institution", e.target.value)
                  }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BrutalInput
                    label="Gelar"
                    placeholder="Contoh: Sarjana (S1)"
                    value={edu.degree}
                    onChange={(e) =>
                      handleUpdateEducation(edu.id, "degree", e.target.value)
                    }
                  />
                  <BrutalInput
                    label="Jurusan"
                    placeholder="Contoh: Teknik Informatika"
                    value={edu.field}
                    onChange={(e) =>
                      handleUpdateEducation(edu.id, "field", e.target.value)
                    }
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BrutalInput
                    label="Tahun Mulai"
                    placeholder="Contoh: 2018"
                    value={edu.startYear}
                    onChange={(e) =>
                      handleUpdateEducation(edu.id, "startYear", e.target.value)
                    }
                  />
                  <BrutalInput
                    label="Tahun Selesai"
                    placeholder="Contoh: 2022"
                    value={edu.endYear}
                    onChange={(e) =>
                      handleUpdateEducation(edu.id, "endYear", e.target.value)
                    }
                  />
                </div>
                <BrutalTextarea
                  label="Keterangan (opsional)"
                  placeholder="IPK, prestasi, organisasi..."
                  value={edu.description}
                  onChange={(e) =>
                    handleUpdateEducation(edu.id, "description", e.target.value)
                  }
                  rows={2}
                />
              </div>
            </BrutalCard>
          ))}

          {education.length > 0 && (
            <BrutalButton
              variant="ghost"
              size="md"
              onClick={handleAddEducation}
            >
              <Plus size={18} strokeWidth={3} />
              Tambah Pendidikan Lain
            </BrutalButton>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-4 flex items-center gap-2">
          <Wrench size={24} strokeWidth={2.5} />
          Keahlian
        </h2>

        <div className="space-y-4 mb-4">
          {skills.length === 0 && (
            <BrutalCard className="text-center py-10">
              <Wrench size={40} className="mx-auto text-gray-300 mb-3" />
              <p className="font-heading font-bold text-base uppercase text-gray-400 mb-4">
                Belum ada keahlian
              </p>
              <BrutalButton
                variant="primary"
                size="md"
                onClick={handleAddSkill}
              >
                <Plus size={18} strokeWidth={3} />
                Tambah Keahlian
              </BrutalButton>
            </BrutalCard>
          )}

          {skills.map((skill, index) => (
            <BrutalCard key={skill.id} className="!p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4 w-full">
                  <span className="font-heading font-bold text-sm text-gray-400 w-8 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <BrutalInput
                      placeholder="Nama keahlian (misal: React.js, Figma, dsb)"
                      value={skill.name}
                      onChange={(e) =>
                        updateSkill(skill.id, { name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => reorderSkill(index, "up")}
                    disabled={index === 0}
                    className="w-8 h-8 flex items-center justify-center border-3 border-brutal-black bg-brand-yellow hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                  >
                    <ArrowUp size={14} strokeWidth={3} />
                  </button>
                  <button
                    onClick={() => reorderSkill(index, "down")}
                    disabled={index === skills.length - 1}
                    className="w-8 h-8 flex items-center justify-center border-3 border-brutal-black bg-brand-yellow hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                  >
                    <ArrowDown size={14} strokeWidth={3} />
                  </button>
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="w-8 h-8 flex items-center justify-center border-3 border-brutal-black bg-brand-pink hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 ml-1"
                  >
                    <Trash2 size={14} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </BrutalCard>
          ))}

          {skills.length > 0 && (
            <BrutalButton variant="ghost" size="md" onClick={handleAddSkill}>
              <Plus size={18} strokeWidth={3} />
              Tambah Keahlian Lain
            </BrutalButton>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-8">
        <Link href="/builder/organization" className="w-full sm:w-auto">
          <BrutalButton
            variant="ghost"
            size="lg"
            className="w-full justify-center"
            icon={<ArrowLeft size={20} strokeWidth={3} />}
          >
            Kembali
          </BrutalButton>
        </Link>
        <Link href="/builder/preview" className="w-full sm:w-auto">
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
