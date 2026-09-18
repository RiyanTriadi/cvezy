"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Plus, Copy, Trash2, Clock } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalCard, BrutalCardTitle, BrutalCardFooter } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Mock data for placeholder
const mockCVs = [
  {
    id: "1",
    title: "CV Web Developer",
    format: "ATS Friendly",
    updatedAt: "2 jam yang lalu",
    color: "yellow" as const,
  },
  {
    id: "2",
    title: "CV Data Analyst",
    format: "ATS Friendly",
    updatedAt: "1 hari yang lalu",
    color: "blue" as const,
  },
  {
    id: "3",
    title: "CV Product Manager",
    format: "ATS Friendly",
    updatedAt: "3 hari yang lalu",
    color: "pink" as const,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brutal-bg bg-dots-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
                Daftar CV Saya
              </h1>
              <p className="font-body text-gray-500">
                Kelola semua CV yang pernah Anda buat.
              </p>
            </div>
            <Link href="/builder/personal">
              <BrutalButton
                variant="primary"
                size="lg"
                icon={<Plus size={20} strokeWidth={3} />}
              >
                Buat CV Baru
              </BrutalButton>
            </Link>
          </div>

          {/* CV Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mockCVs.map((cv) => (
              <motion.div key={cv.id} variants={fadeInUp} transition={{ duration: 0.5 }}>
                <BrutalCard variant="interactive" accentColor={cv.color} className="pt-8">
                  <div className="mb-4 w-full h-32 bg-gray-100 border-4 border-brutal-black flex items-center justify-center">
                    <FileText size={40} className="text-gray-300" />
                  </div>
                  <BrutalCardTitle className="mb-1">{cv.title}</BrutalCardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <BrutalBadge variant={cv.color} size="sm">
                      {cv.format}
                    </BrutalBadge>
                    <span className="font-body text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12} /> {cv.updatedAt}
                    </span>
                  </div>
                  <BrutalCardFooter>
                    <BrutalButton variant="ghost" size="sm" className="flex-1">
                      <Copy size={14} strokeWidth={3} />
                      Duplikat
                    </BrutalButton>
                    <BrutalButton variant="danger" size="sm">
                      <Trash2 size={14} strokeWidth={3} />
                    </BrutalButton>
                  </BrutalCardFooter>
                </BrutalCard>
              </motion.div>
            ))}

            {/* Add new card */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <Link href="/builder/personal" className="block h-full">
                <div className="h-full min-h-[300px] border-4 border-dashed border-gray-300 flex flex-col items-center justify-center gap-4 hover:border-brutal-black hover:bg-brutal-white transition-all duration-300 cursor-pointer p-6">
                  <div className="w-16 h-16 bg-gray-100 border-4 border-gray-300 flex items-center justify-center">
                    <Plus size={32} className="text-gray-400" />
                  </div>
                  <p className="font-heading font-bold text-sm uppercase text-gray-400">
                    Buat CV Baru
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Info banner */}
          <div className="mt-12 bg-brand-yellow border-4 border-brutal-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-lg uppercase">
                💡 Tip: Buat beberapa versi CV
              </h3>
              <p className="font-body text-sm">
                Sesuaikan CV untuk setiap lamaran agar lebih relevan dengan posisi yang dilamar.
              </p>
            </div>
            <Link href="/help">
              <BrutalButton variant="dark" size="sm">
                Pelajari Tips
              </BrutalButton>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
