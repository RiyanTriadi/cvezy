"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Download, FileCheck2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalCard, BrutalCardTitle } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { useCVStore } from "@/store/cv-store";
import { cn } from "@/lib/utils";

// Make sure to install this first if not present
// npm install react-to-print
import { useReactToPrint } from "react-to-print";

const renderDescription = (text: string) => {
  if (!text) return null;
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  
  const isList = lines.some(line => line.trim().startsWith('-') || line.trim().startsWith('•'));
  
  if (isList) {
    return (
      <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginTop: "0.25rem", marginBottom: "0.25rem" }}>
        {lines.map((line, i) => {
          const content = line.trim().replace(/^[-•]\s*/, '');
          if (!content) return null;
          return (
            <li key={i} style={{ fontSize: "14px", color: "#000", lineHeight: "1.5" }}>
              {content}
            </li>
          );
        })}
      </ul>
    );
  }
  
  return (
    <div style={{ marginTop: "0.25rem" }}>
      {lines.map((line, i) => (
        <p key={i} style={{ fontSize: "14px", color: "#000", lineHeight: "1.5", marginBottom: "0.25rem" }}>
          {line.trim()}
        </p>
      ))}
    </div>
  );
};

export default function PreviewPage() {
  const { personalInfo, experiences, organizations, education, skills } = useCVStore();
  const componentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `CV_${personalInfo.fullName.replace(/\s+/g, '_') || 'ATS'}`,
  });

  // ATS Checker Logic
  const atsAnalysis = React.useMemo(() => {
    let score = 100;
    const issues: { type: 'error' | 'warning' | 'success', text: string }[] = [];
    
    if (!personalInfo.fullName) { score -= 15; issues.push({ type: 'error', text: "Nama lengkap wajib diisi." }); }
    if (!personalInfo.email) { score -= 10; issues.push({ type: 'error', text: "Email belum diisi." }); }
    if (!personalInfo.phone) { score -= 10; issues.push({ type: 'error', text: "Nomor telepon belum diisi." }); }
    
    if (!personalInfo.summary || personalInfo.summary.length < 50) {
      score -= 5;
      issues.push({ type: 'warning', text: "Ringkasan profil terlalu singkat. Tambahkan sedikit penjelasan objektif karir." });
    }

    if (experiences.length === 0 && organizations.length === 0) {
      score -= 20;
      issues.push({ type: 'error', text: "Belum ada pengalaman kerja atau organisasi." });
    } else {
      experiences.forEach(exp => {
        if (!exp.description || exp.description.length < 50) {
          score -= 5;
          issues.push({ type: 'warning', text: `Deskripsi pada ${exp.company} terlalu singkat. Tambahkan poin kontribusi (action verbs).` });
        }
        if (exp.description && !exp.description.includes('-') && !exp.description.includes('•')) {
           issues.push({ type: 'warning', text: `Sangat disarankan menggunakan bullet points (-) pada pengalaman ${exp.company} agar mudah di-scan ATS.` });
        }
      });
    }
    
    if (education.length === 0) { score -= 10; issues.push({ type: 'error', text: "Data pendidikan belum diisi." }); }
    if (skills.length === 0) { score -= 10; issues.push({ type: 'error', text: "Belum ada keahlian (skills) yang ditambahkan." }); }
    
    if (score === 100) {
      issues.push({ type: 'success', text: "CV Anda sudah sangat terstruktur dan siap lolos ATS!" });
    }
    
    return { score: Math.max(0, score), issues };
  }, [personalInfo, experiences, organizations, education, skills]);

  const contactArray = [
    personalInfo.address,
    personalInfo.email,
    personalInfo.phone,
    personalInfo.linkedin,
    personalInfo.website
  ].filter(Boolean);

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left: CV Preview Area */}
      <div className="flex-1">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <BrutalBadge variant="cyan" className="mb-3">
              <Eye size={14} strokeWidth={3} className="mr-1" />
              Langkah 5 dari 5
            </BrutalBadge>
            <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
              Preview & Unduh
            </h1>
            <p className="font-body text-gray-500">
              Format ini 100% dioptimalkan untuk dibaca oleh mesin ATS.
            </p>
          </div>
        </div>

        {/* The ATS Printable CV Container */}
        <div 
          className="bg-white border-4 border-brutal-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto print:border-none print:shadow-none print:overflow-visible"
        >
          {/* A4 Document styling wrapper */}
          <div 
            ref={componentRef} 
            className="ats-document bg-white min-w-[700px] max-w-[800px] min-h-[1000px] mx-auto text-black print:min-w-0 print:max-w-none print:min-h-0"
            style={{ padding: "40px 60px", boxSizing: "border-box" }}
          >
            {/* Header / Contact Info */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h1 style={{ fontSize: "24px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "8px", color: "#000" }}>
                {personalInfo.fullName || "NAMA LENGKAP"}
              </h1>
              {contactArray.length > 0 && (
                <p style={{ fontSize: "12px", color: "#000", marginBottom: "4px" }}>
                  {contactArray.join(" • ")}
                </p>
              )}
            </div>

            {/* Summary */}
            {personalInfo.summary && (
              <div style={{ marginBottom: "16px" }}>
                <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#000", textAlign: "left" }}>
                  {personalInfo.summary}
                </p>
              </div>
            )}

            {/* Experience */}
            {experiences.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: "4px", marginBottom: "8px", color: "#000" }}>
                  Pengalaman Kerja
                </h2>
                {experiences.map((exp) => (
                  <div key={exp.id} style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2px" }}>
                      <div style={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}>{exp.company}</div>
                      <div style={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}>
                        {exp.startDate} — {exp.isCurrent ? "Sekarang" : exp.endDate}
                      </div>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "bold", fontStyle: "italic", color: "#000", marginBottom: "4px" }}>
                      {exp.jobTitle}
                    </div>
                    {renderDescription(exp.description)}
                  </div>
                ))}
              </div>
            )}

            {/* Organizations */}
            {organizations.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: "4px", marginBottom: "8px", color: "#000" }}>
                  Pengalaman Organisasi
                </h2>
                {organizations.map((org) => (
                  <div key={org.id} style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2px" }}>
                      <div style={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}>{org.organizationName}</div>
                      <div style={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}>
                        {org.startDate} — {org.isCurrent ? "Sekarang" : org.endDate}
                      </div>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "bold", fontStyle: "italic", color: "#000", marginBottom: "4px" }}>
                      {org.role}
                    </div>
                    {renderDescription(org.description)}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: "4px", marginBottom: "8px", color: "#000" }}>
                  Pendidikan
                </h2>
                {education.map((edu) => (
                  <div key={edu.id} style={{ marginBottom: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2px" }}>
                      <div style={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}>{edu.institution}</div>
                      <div style={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}>
                        {edu.startYear} — {edu.endYear}
                      </div>
                    </div>
                    <div style={{ fontSize: "14px", color: "#000", marginBottom: "2px" }}>
                      {edu.degree} {edu.field && `— ${edu.field}`}
                    </div>
                    {edu.description && (
                      <div style={{ fontSize: "14px", color: "#000" }}>
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", margin: 0 }}>
                          <li>{edu.description}</li>
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: "4px", marginBottom: "8px", color: "#000" }}>
                  Keahlian
                </h2>
                <div style={{ fontSize: "14px", color: "#000", lineHeight: "1.5" }}>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "4px" }}>
                    {skills.map(s => (
                      <li key={s.id}>{s.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Empty state instruction */}
            {!personalInfo.fullName && experiences.length === 0 && education.length === 0 && (
              <div style={{ textAlign: "center", color: "#888", marginTop: "100px", fontSize: "14px" }}>
                Belum ada data. Silakan isi form di langkah sebelumnya.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: Sidebar / ATS Checker & Actions */}
      <div className="w-full lg:w-80 flex flex-col gap-6">
        {/* ATS Checker Panel */}
        <BrutalCard className="pt-6" accentColor={atsAnalysis.score >= 80 ? "green" : atsAnalysis.score >= 50 ? "yellow" : "pink"}>
          <div className="flex items-center gap-2 mb-4">
            <FileCheck2 size={24} strokeWidth={3} />
            <BrutalCardTitle className="mb-0">ATS Checker</BrutalCardTitle>
          </div>
          
          <div className="mb-6 flex items-end gap-2 border-b-4 border-brutal-black pb-4">
            <span className="font-heading font-bold text-5xl tracking-tighter leading-none">
              {atsAnalysis.score}
            </span>
            <span className="font-body text-gray-500 font-bold mb-1">/ 100</span>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {atsAnalysis.issues.map((issue, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "p-3 border-2 border-brutal-black font-body text-sm flex items-start gap-2",
                  issue.type === 'error' ? "bg-brand-pink text-brutal-black font-bold" :
                  issue.type === 'warning' ? "bg-brand-yellow text-brutal-black font-medium" :
                  "bg-brand-green text-brutal-black font-bold"
                )}
              >
                {issue.type === 'error' && <AlertTriangle size={16} className="shrink-0 mt-0.5" />}
                {issue.type === 'warning' && <AlertTriangle size={16} className="shrink-0 mt-0.5" />}
                {issue.type === 'success' && <CheckCircle2 size={16} className="shrink-0 mt-0.5" />}
                <span>{issue.text}</span>
              </div>
            ))}
          </div>
        </BrutalCard>

        {/* Actions */}
        <BrutalCard className="pt-6">
          <BrutalCardTitle className="mb-4">Tindakan</BrutalCardTitle>
          <div className="flex flex-col gap-3">
            <BrutalButton
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={<Download size={20} strokeWidth={3} />}
              onClick={() => handlePrint()}
            >
              Unduh PDF (ATS)
            </BrutalButton>
            
            <Link href="/dashboard" className="w-full">
              <BrutalButton variant="secondary" size="lg" className="w-full justify-center">
                Simpan ke Dashboard
              </BrutalButton>
            </Link>

            <Link href="/builder/education" className="w-full mt-2">
              <BrutalButton variant="ghost" size="md" className="w-full justify-center" icon={<ArrowLeft size={16} strokeWidth={3} />}>
                Kembali Edit
              </BrutalButton>
            </Link>
          </div>
        </BrutalCard>
      </div>
    </div>
  );
}
