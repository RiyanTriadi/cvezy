"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Briefcase,
  Users,
  GraduationCap,
  Eye,
  FileText,
  ArrowLeft,
} from "lucide-react";
import { BrutalProgress } from "@/components/ui/brutal-progress";
import { cn } from "@/lib/utils";

const builderSteps = [
  {
    href: "/builder/personal",
    label: "Data Diri",
    icon: User,
    description: "Nama, kontak, ringkasan",
  },
  {
    href: "/builder/experience",
    label: "Pengalaman",
    icon: Briefcase,
    description: "Riwayat pekerjaan",
  },
  {
    href: "/builder/organization",
    label: "Organisasi",
    icon: Users,
    description: "Pengalaman organisasi",
  },
  {
    href: "/builder/education",
    label: "Pendidikan",
    icon: GraduationCap,
    description: "Pendidikan & keahlian",
  },
  {
    href: "/builder/preview",
    label: "Preview",
    icon: Eye,
    description: "Lihat & unduh PDF",
  },
];

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentStepIndex = builderSteps.findIndex(
    (step) => pathname === step.href
  );

  const steps = builderSteps.map((step, i) => ({
    label: step.label,
    completed: i < currentStepIndex || (i === currentStepIndex && false),
  }));

  // Mark previous steps as completed
  const progressSteps = builderSteps.map((step, i) => ({
    label: step.label,
    completed: i <= currentStepIndex,
  }));

  return (
    <div className="min-h-screen bg-brutal-bg print:bg-white print:min-h-0">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-brutal-white border-b-4 border-brutal-black print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wide hover:text-brand-blue transition-colors"
            >
              <ArrowLeft size={18} strokeWidth={3} />
              Kembali
            </Link>

            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-yellow border-3 border-brutal-black flex items-center justify-center">
                <FileText size={16} strokeWidth={3} />
              </div>
              <span className="font-heading font-bold text-lg tracking-tight uppercase">
                Cvezy
              </span>
            </Link>

            <div className="w-20" /> {/* Spacer */}
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-4 sm:px-6 lg:px-8 pb-4 max-w-3xl mx-auto">
          <BrutalProgress steps={progressSteps} accentColor="yellow" />
        </div>
      </header>

      <div className="flex print:block">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 min-h-[calc(100vh-8rem)] border-r-4 border-brutal-black bg-brutal-white p-6 sticky top-[8rem] self-start print:hidden">
          <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">
            Langkah Pembuatan
          </h3>
          <nav className="space-y-2">
            {builderSteps.map((step, i) => {
              const isActive = pathname === step.href;
              const isCompleted = i < currentStepIndex;

              return (
                <Link
                  key={step.href}
                  href={step.href}
                  className={cn(
                    "flex items-center gap-3 p-3 border-4 rounded-none transition-all duration-150",
                    isActive
                      ? "border-brutal-black bg-brand-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold"
                      : isCompleted
                      ? "border-brutal-black bg-brand-green/20 hover:translate-x-[1px] hover:translate-y-[1px]"
                      : "border-gray-200 bg-brutal-white hover:border-brutal-black hover:translate-x-[1px] hover:translate-y-[1px]"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 flex items-center justify-center border-3",
                      isActive
                        ? "border-brutal-black bg-brutal-black text-brand-yellow"
                        : isCompleted
                        ? "border-brutal-black bg-brand-green text-brutal-black"
                        : "border-gray-300 bg-gray-50 text-gray-400"
                    )}
                  >
                    {isCompleted ? (
                      <span className="font-bold text-sm">✓</span>
                    ) : (
                      <step.icon size={18} strokeWidth={2.5} />
                    )}
                  </div>
                  <div>
                    <p
                      className={cn(
                        "font-heading text-sm uppercase tracking-wide",
                        isActive
                          ? "font-bold text-brutal-black"
                          : "font-medium text-gray-600"
                      )}
                    >
                      {step.label}
                    </p>
                    <p className="font-body text-xs text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full print:p-0 print:max-w-none print:w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
