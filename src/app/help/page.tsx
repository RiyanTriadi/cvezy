"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  Copy,
  Check,
} from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalCard, BrutalCardTitle, BrutalCardContent } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Example sentences
const exampleSentences = [
  {
    category: "Ringkasan Profesional",
    sentences: [
      "Profesional berpengalaman 5 tahun di bidang pengembangan web dengan keahlian dalam React.js dan Node.js.",
      "Lulusan baru yang antusias dengan dasar kuat di bidang analisis data dan machine learning.",
      "Manajer proyek bersertifikasi PMP dengan rekam jejak keberhasilan mengelola tim lintas fungsi.",
    ],
  },
  {
    category: "Deskripsi Pekerjaan",
    sentences: [
      "Mengembangkan dan memelihara aplikasi web yang melayani 10.000+ pengguna aktif harian.",
      "Memimpin tim beranggotakan 5 orang dalam proyek redesign yang meningkatkan konversi sebesar 35%.",
      "Mengoptimalkan query database yang mengurangi waktu respons API sebesar 60%.",
    ],
  },
];

// FAQ data
const faqs = [
  {
    q: "Apakah Cvezy gratis?",
    a: "Ya! Cvezy sepenuhnya gratis untuk digunakan. Anda bisa membuat dan mengunduh CV tanpa biaya apapun.",
  },
  {
    q: "Apakah data saya aman?",
    a: "Data CV Anda tersimpan secara lokal di browser Anda (localStorage). Saat fitur akun tersedia, data akan dienkripsi dan disimpan di server yang aman.",
  },
  {
    q: "Bisakah saya membuat lebih dari satu CV?",
    a: "Tentu saja! Anda bisa membuat sebanyak mungkin CV dan menyesuaikan masing-masing untuk lamaran yang berbeda.",
  },
  {
    q: "Format apa yang didukung untuk download?",
    a: "Saat ini kami mendukung format PDF yang merupakan standar industri untuk pengiriman CV.",
  },
  {
    q: "Apakah CV bisa diedit setelah disimpan?",
    a: "Ya, selama Anda tidak menghapus data browser, Anda bisa kembali mengedit CV kapan saja dengan masuk ke menu 'Buat CV'.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-4 border-brutal-black bg-brutal-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-brand-yellow/10 transition-colors"
      >
        <span className="font-heading font-bold text-sm uppercase">{q}</span>
        <ChevronDown
          size={20}
          strokeWidth={3}
          className={`transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 border-t-2 border-brutal-black pt-3">
          <p className="font-body text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="w-8 h-8 flex items-center justify-center border-2 border-brutal-black bg-brutal-white hover:bg-brand-yellow transition-colors shrink-0"
      title="Salin"
    >
      {copied ? <Check size={14} strokeWidth={3} /> : <Copy size={14} strokeWidth={3} />}
    </button>
  );
}

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brutal-bg">
        {/* Hero */}
        <section className="bg-brand-blue border-b-4 border-brutal-black py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BrutalBadge variant="yellow" className="mb-4">
              <HelpCircle size={14} strokeWidth={3} className="mr-1" />
              Pusat Bantuan
            </BrutalBadge>
            <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tighter text-brutal-white mb-4">
              Tips & Bantuan
            </h1>
            <p className="font-body text-lg text-blue-100 max-w-2xl mx-auto">
              Panduan lengkap untuk membuat CV yang menarik dan profesional.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Example Sentences */}
          <motion.section
            id="contoh"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb size={28} strokeWidth={2.5} className="text-brand-yellow" />
                <h2 className="font-heading font-bold text-2xl uppercase tracking-tight">
                  Contoh Kalimat Siap Pakai
                </h2>
              </div>
              <p className="font-body text-gray-500">
                Gunakan contoh kalimat ini sebagai inspirasi untuk mengisi CV Anda.
              </p>
            </motion.div>

            {exampleSentences.map((category) => (
              <motion.div key={category.category} variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-8">
                <BrutalCard accentColor="yellow" className="pt-8">
                  <BrutalCardTitle className="mb-4">{category.category}</BrutalCardTitle>
                  <BrutalCardContent>
                    <div className="space-y-3">
                      {category.sentences.map((sentence, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 bg-brand-yellow-light border-2 border-brutal-black"
                        >
                          <span className="font-body text-sm text-gray-700 flex-1">
                            &ldquo;{sentence}&rdquo;
                          </span>
                          <CopyButton text={sentence} />
                        </div>
                      ))}
                    </div>
                  </BrutalCardContent>
                </BrutalCard>
              </motion.div>
            ))}
          </motion.section>

          {/* Guide */}
          <motion.section
            id="panduan"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={28} strokeWidth={2.5} className="text-brand-blue" />
                <h2 className="font-heading font-bold text-2xl uppercase tracking-tight">
                  Panduan Singkat
                </h2>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <BrutalCard accentColor="blue" className="pt-8">
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Mulai dengan Data Diri",
                      desc: "Isi nama, email, dan nomor telepon. Pastikan informasi ini selalu up-to-date.",
                    },
                    {
                      step: "02",
                      title: "Tulis Pengalaman yang Relevan",
                      desc: "Fokus pada pengalaman yang relevan dengan posisi yang dilamar. Gunakan kata kerja aktif.",
                    },
                    {
                      step: "03",
                      title: "Highlight Keahlian Utama",
                      desc: "Cantumkan keahlian teknis dan soft skill yang paling relevan. Jangan terlalu banyak.",
                    },
                    {
                      step: "04",
                      title: "Cek Skor ATS",
                      desc: "Gunakan fitur ATS Checker di halaman preview untuk memastikan kelengkapan CV Anda optimal.",
                    },
                    {
                      step: "05",
                      title: "Review Sebelum Unduh",
                      desc: "Periksa typo, konsistensi format, dan pastikan CV tidak lebih dari 2 halaman.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-12 h-12 bg-brand-blue text-brutal-white border-4 border-brutal-black flex items-center justify-center shrink-0">
                        <span className="font-heading font-bold text-sm">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base uppercase mb-1">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </BrutalCard>
            </motion.div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle size={28} strokeWidth={2.5} className="text-brand-pink" />
                <h2 className="font-heading font-bold text-2xl uppercase tracking-tight">
                  Pertanyaan Umum (FAQ)
                </h2>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Contact */}
          <BrutalCard accentColor="pink" className="pt-8 text-center">
            <MessageCircle size={40} className="mx-auto mb-4 text-brand-pink" />
            <BrutalCardTitle className="text-xl mb-2">
              Masih Butuh Bantuan?
            </BrutalCardTitle>
            <p className="font-body text-gray-500 mb-6">
              Hubungi developer untuk pertanyaan atau laporan masalah.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/RiyanTriadi" target="_blank" rel="noopener noreferrer">
                <BrutalButton variant="dark" size="md">
                  GitHub
                </BrutalButton>
              </a>
              <a href="https://linkedin.com/in/riyantriadi" target="_blank" rel="noopener noreferrer">
                <BrutalButton variant="primary" size="md">
                  LinkedIn
                </BrutalButton>
              </a>
              <a href="https://instagram.com/riyantriadi" target="_blank" rel="noopener noreferrer">
                <BrutalButton variant="secondary" size="md" className="bg-brand-pink hover:bg-brand-pink/90">
                  Instagram
                </BrutalButton>
              </a>
            </div>
          </BrutalCard>
        </div>
      </main>
      <Footer />
    </>
  );
}
