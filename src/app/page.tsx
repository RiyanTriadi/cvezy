"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Palette,
  Download,
  Save,
  Zap,
  Layout,
  Sparkles,
  CheckCircle,
  Star,
  Clock,
  Shield,
} from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalCard, BrutalCardTitle, BrutalCardContent } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/* ============================================
   HERO SECTION
   ============================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brutal-bg bg-dots-pattern">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-brand-yellow border-4 border-brutal-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 left-8 w-16 h-16 bg-brand-blue border-4 border-brutal-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-20 h-20 bg-brand-pink border-4 border-brutal-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-12 h-12 bg-brand-green border-4 border-brutal-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hidden lg:block"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <BrutalBadge variant="yellow" className="mb-6">
                <Zap size={14} strokeWidth={3} className="mr-1" />
                CV Generator
              </BrutalBadge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tighter mb-6"
            >
              Buat CV
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Profesional</span>
                <span className="absolute bottom-1 left-0 w-full h-4 md:h-5 bg-brand-yellow -z-0" />
              </span>
              <br />
              Dalam{" "}
              <span className="text-brand-blue">5 Menit</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-body text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Isi data lalu unduh PDF. Semudah itu. Tanpa ribet,
              tanpa desain grafis, langsung rapi dan siap kirim.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/builder/personal">
                <BrutalButton
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} strokeWidth={3} />}
                  iconPosition="right"
                >
                  Mulai Buat CV
                </BrutalButton>
              </Link>
              <Link href="#cara-kerja">
                <BrutalButton variant="ghost" size="lg">
                  Lihat Cara Kerja
                </BrutalButton>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {["bg-brand-blue", "bg-brand-pink", "bg-brand-green", "bg-brand-yellow"].map((color, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 ${color} border-3 border-brutal-black rounded-none flex items-center justify-center font-heading font-bold text-xs`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                <p className="font-body text-sm text-gray-500">
                  <span className="font-bold text-brutal-black">2,500+</span> CV dibuat bulan ini
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — CV Preview Mock */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main CV Card */}
            <div className="relative bg-brutal-white border-4 border-brutal-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* CV Header */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b-4 border-brutal-black">
                <div className="w-20 h-20 bg-brand-blue border-4 border-brutal-black flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-brutal-white">AS</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl uppercase">Riyan Triadi</h3>
                  <p className="font-body text-sm text-gray-500">Web Developer</p>
                  <p className="font-body text-xs text-gray-400 mt-1">Banten, Indonesia</p>
                </div>
              </div>
              {/* CV Body */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-blue mb-2">Pengalaman</h4>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded-none w-full" />
                    <div className="h-3 bg-gray-200 rounded-none w-4/5" />
                    <div className="h-3 bg-gray-200 rounded-none w-3/5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-pink mb-2">Pendidikan</h4>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded-none w-full" />
                    <div className="h-3 bg-gray-200 rounded-none w-3/4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-green mb-2">Keahlian</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Python", "SQL"].map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs font-bold bg-brand-yellow border-2 border-brutal-black">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative stacked cards behind */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-yellow border-4 border-brutal-black -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-brand-blue border-4 border-brutal-black -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   HOW IT WORKS
   ============================================ */
const steps = [
  {
    number: "01",
    title: "Isi Data",
    description:
      "Isi formulir terstruktur: data diri, pengalaman kerja, pendidikan, dan keahlian. Dipandu langkah demi langkah.",
    icon: FileText,
    color: "yellow" as const,
    bgColor: "bg-brand-yellow",
  },
  {
    number: "02",
    title: "Optimasi ATS",
    description:
      "Format 100% ATS-Friendly otomatis. Dilengkapi dengan ATS Checker cerdas untuk memastikan CV Anda mudah dibaca mesin.",
    icon: CheckCircle,
    color: "blue" as const,
    bgColor: "bg-brand-blue",
  },
  {
    number: "03",
    title: "Unduh PDF",
    description:
      "Pratinjau hasilnya secara langsung, lalu unduh sekali klik. CV siap dikirim ke perusahaan impian.",
    icon: Download,
    color: "green" as const,
    bgColor: "bg-brand-green",
  },
];

function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-brutal-white border-t-4 border-brutal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <BrutalBadge variant="dark" className="mb-4">Cara Kerja</BrutalBadge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tighter"
          >
            3 Langkah Mudah
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <BrutalCard
                variant="interactive"
                className="h-full text-center group"
              >
                {/* Step number */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 ${step.bgColor} border-4 border-brutal-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-all duration-150`}
                >
                  <span className="font-heading font-bold text-xl">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon size={32} strokeWidth={2.5} className="mx-auto text-gray-700" />
                </div>

                <BrutalCardTitle className="text-2xl mb-3">{step.title}</BrutalCardTitle>
                <BrutalCardContent>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </BrutalCardContent>
              </BrutalCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   FEATURES SECTION
   ============================================ */
const features = [
  {
    icon: Zap,
    title: "Wizard Langkah-demi-Langkah",
    description: "Dipandu dari awal sampai akhir. Tidak perlu bingung mau mulai dari mana.",
    color: "yellow" as const,
  },
  {
    icon: CheckCircle,
    title: "Format ATS Otomatis",
    description: "Satu format standar yang sudah terbukti lolos filter ATS tanpa perlu pusing memilih desain.",
    color: "blue" as const,
  },
  {
    icon: Download,
    title: "PDF Sekali Klik",
    description: "Unduh langsung dalam format PDF berkualitas tinggi, siap cetak dan kirim.",
    color: "pink" as const,
  },
  {
    icon: Save,
    title: "Simpan & Pakai Ulang",
    description: "Simpan draf CV dan duplikat untuk lamaran berbeda. Tidak perlu mulai ulang.",
    color: "green" as const,
  },
  {
    icon: Clock,
    title: "Cepat & Efisien",
    description: "Selesai dalam 5 menit. Auto-save memastikan data Anda tidak pernah hilang.",
    color: "cyan" as const,
  },
  {
    icon: Shield,
    title: "Data Aman",
    description: "Data Anda tersimpan dengan aman dan hanya bisa diakses oleh Anda sendiri.",
    color: "purple" as const,
  },
];

function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-brutal-bg bg-grid-pattern border-t-4 border-brutal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <BrutalBadge variant="blue" className="mb-4">Fitur Unggulan</BrutalBadge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tighter"
          >
            Semua yang Kamu Butuhkan
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              transition={{ duration: 0.5 }}
            >
              <BrutalCard
                variant="colored"
                accentColor={feature.color}
                className="h-full pt-8"
              >
                <div className="mb-4 w-12 h-12 bg-brutal-black text-brutal-white border-4 border-brutal-black flex items-center justify-center">
                  <feature.icon size={24} strokeWidth={2.5} />
                </div>
                <BrutalCardTitle className="text-lg mb-2">{feature.title}</BrutalCardTitle>
                <BrutalCardContent>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </BrutalCardContent>
              </BrutalCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



/* ============================================
   STATS SECTION
   ============================================ */
function StatsSection() {
  const stats = [
    { value: "10,000+", label: "CV Dibuat", color: "text-brand-yellow" },
    { value: "4.9/5", label: "Rating Pengguna", color: "text-brand-blue" },
    { value: "5 Menit", label: "Rata-rata Waktu", color: "text-brand-pink" },
    { value: "100%", label: "Gratis", color: "text-brand-green" },
  ];

  return (
    <section className="py-16 bg-brutal-black border-t-4 border-brutal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className={`font-heading font-bold text-3xl md:text-5xl ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="font-body text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   CTA FINAL SECTION
   ============================================ */
function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-brand-yellow border-t-4 border-brutal-black relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-diagonal-pattern" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn} transition={{ duration: 0.5 }}>
            <div className="inline-block bg-brutal-black text-brand-yellow border-4 border-brutal-black p-3 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
              <CheckCircle size={40} strokeWidth={3} />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter mb-6"
          >
            Siap Membuat CV yang Memukau?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-body text-lg md:text-xl text-brutal-black/70 mb-10 max-w-2xl mx-auto"
          >
            Bergabung dengan ribuan pengguna yang sudah berhasil membuat CV profesional
            dan mendapatkan pekerjaan impian mereka.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Link href="/builder/personal">
              <BrutalButton
                variant="dark"
                size="xl"
                icon={<ArrowRight size={24} strokeWidth={3} />}
                iconPosition="right"
                className="text-lg"
              >
                Buat CV Gratis Sekarang
              </BrutalButton>
            </Link>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-6 font-body text-sm text-brutal-black/50"
          >
            Tidak perlu daftar akun. Langsung mulai.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   MAIN PAGE
   ============================================ */
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
