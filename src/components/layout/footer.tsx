"use client";

import React from "react";
import Link from "next/link";
import { FileText, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brutal-black text-brutal-white border-t-4 border-brutal-black">
      {/* Marquee band */}
      <div className="bg-brand-yellow border-b-4 border-brutal-black overflow-hidden">
        <div className="marquee-container py-2">
          <div className="marquee-content">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="inline-block font-heading font-bold text-sm uppercase tracking-widest text-brutal-black mx-8"
              >
                ★ BUAT CV PROFESIONAL ★ GRATIS ★ CEPAT ★ MUDAH
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-yellow border-4 border-brutal-white flex items-center justify-center">
                <FileText size={20} strokeWidth={3} className="text-brutal-black" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight uppercase">
                Cvezy
              </span>
            </Link>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Platform pembuat CV profesional dengan format standar ATS. 
              Buat dan unduh CV Anda dengan mudah dalam hitungan menit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-brand-yellow">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/builder/personal", label: "Buat CV Baru" },
                { href: "/help", label: "Bantuan & Tips" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-brand-blue">
              Sumber Daya
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/help#panduan", label: "Panduan Singkat" },
                { href: "/help#contoh", label: "Contoh Kalimat" },
                { href: "/help#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t-2 border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-gray-500 flex items-center gap-1">
            Dibuat oleh Riyan Triadi © {new Date().getFullYear()}
          </p>
          <a
            href="https://github.com/RiyanTriadi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-brutal-white border-4 border-brutal-white flex items-center justify-center text-brutal-black hover:bg-brand-yellow transition-colors"
          >
            <ExternalLink size={20} strokeWidth={3} />
          </a>
        </div>
      </div>
    </footer>
  );
}
