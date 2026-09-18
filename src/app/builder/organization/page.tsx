"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Users, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalInput } from "@/components/ui/brutal-input";
import { BrutalTextarea } from "@/components/ui/brutal-textarea";
import { BrutalCard, BrutalCardTitle } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { useCVStore, type Organization } from "@/store/cv-store";

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

export default function OrganizationPage() {
  const { organizations, addOrganization, updateOrganization, removeOrganization, reorderOrganization } =
    useCVStore();

  const handleAdd = () => {
    addOrganization({
      id: generateId(),
      role: "",
      organizationName: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      description: "",
    });
  };

  const handleUpdate = (
    id: string,
    field: keyof Organization,
    value: string | boolean
  ) => {
    updateOrganization(id, { [field]: value });
  };

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <BrutalBadge variant="yellow" className="mb-3">
          <Users size={14} strokeWidth={3} className="mr-1" />
          Langkah 3 dari 5
        </BrutalBadge>
        <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
          Pengalaman Organisasi
        </h1>
        <p className="font-body text-gray-500">
          Tambahkan riwayat organisasi Anda (opsional).
        </p>
      </div>

      {/* Organization entries */}
      <div className="space-y-6 mb-8">
        {organizations.length === 0 && (
          <BrutalCard className="text-center py-12">
            <Users size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="font-heading font-bold text-lg uppercase text-gray-400 mb-4">
              Belum ada riwayat organisasi
            </p>
            <BrutalButton variant="primary" size="md" onClick={handleAdd}>
              <Plus size={18} strokeWidth={3} />
              Tambah Organisasi
            </BrutalButton>
          </BrutalCard>
        )}

        {organizations.map((org, index) => (
          <BrutalCard key={org.id} accentColor="yellow" className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <BrutalCardTitle>Organisasi #{index + 1}</BrutalCardTitle>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => reorderOrganization(index, "up")}
                  disabled={index === 0}
                  className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <ArrowUp size={16} strokeWidth={3} />
                </button>
                <button
                  onClick={() => reorderOrganization(index, "down")}
                  disabled={index === organizations.length - 1}
                  className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <ArrowDown size={16} strokeWidth={3} />
                </button>
                <button
                  onClick={() => removeOrganization(org.id)}
                  className="w-10 h-10 flex items-center justify-center border-4 border-brutal-black bg-brand-pink shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ml-2"
                >
                  <Trash2 size={16} strokeWidth={3} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BrutalInput
                  label="Jabatan / Peran"
                  placeholder="Contoh: Ketua Divisi"
                  value={org.role}
                  onChange={(e) =>
                    handleUpdate(org.id, "role", e.target.value)
                  }
                />
                <BrutalInput
                  label="Nama Organisasi"
                  placeholder="Contoh: BEM Fakultas"
                  value={org.organizationName}
                  onChange={(e) =>
                    handleUpdate(org.id, "organizationName", e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BrutalInput
                  label="Tanggal Mulai"
                  type="month"
                  value={org.startDate}
                  onChange={(e) =>
                    handleUpdate(org.id, "startDate", e.target.value)
                  }
                />
                <BrutalInput
                  label="Tanggal Selesai"
                  type="month"
                  value={org.isCurrent ? "" : org.endDate}
                  disabled={org.isCurrent}
                  placeholder={org.isCurrent ? "Saat ini" : ""}
                  onChange={(e) =>
                    handleUpdate(org.id, "endDate", e.target.value)
                  }
                />
              </div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-6 h-6 border-4 border-brutal-black flex items-center justify-center transition-colors ${
                    org.isCurrent ? "bg-brand-yellow" : "bg-brutal-white"
                  }`}
                  onClick={() =>
                    handleUpdate(org.id, "isCurrent", !org.isCurrent)
                  }
                >
                  {org.isCurrent && (
                    <span className="text-brutal-black font-bold text-xs">✓</span>
                  )}
                </div>
                <span
                  className="font-body text-sm"
                  onClick={() =>
                    handleUpdate(org.id, "isCurrent", !org.isCurrent)
                  }
                >
                  Saya masih aktif di organisasi ini
                </span>
              </label>
              <BrutalTextarea
                label="Deskripsi / Kontribusi"
                placeholder="Gunakan baris baru (enter) atau strip (-) untuk membuat poin-poin. Contoh:
- Memimpin 10 anggota divisi
- Menyelenggarakan acara tahunan"
                value={org.description}
                onChange={(e) =>
                  handleUpdate(org.id, "description", e.target.value)
                }
                rows={3}
              />
            </div>
          </BrutalCard>
        ))}

        {organizations.length > 0 && (
          <BrutalButton variant="ghost" size="md" onClick={handleAdd}>
            <Plus size={18} strokeWidth={3} />
            Tambah Organisasi Lain
          </BrutalButton>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Link href="/builder/experience">
          <BrutalButton
            variant="ghost"
            size="lg"
            icon={<ArrowLeft size={20} strokeWidth={3} />}
          >
            Kembali
          </BrutalButton>
        </Link>
        <Link href="/builder/education">
          <BrutalButton
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} strokeWidth={3} />}
            iconPosition="right"
          >
            Lanjut: Pendidikan
          </BrutalButton>
        </Link>
      </div>
    </div>
  );
}
