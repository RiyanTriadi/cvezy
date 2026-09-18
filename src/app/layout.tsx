import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cvezy — Buat CV Profesional dalam 5 Menit",
  description:
    "Platform pembuat CV profesional gratis. Isi data lalu unduh PDF. Buat CV yang rapi dan siap kirim untuk lamaran kerja Anda.",
  keywords: ["CV", "resume", "generator", "pembuat CV", "CV profesional", "lamaran kerja"],
  openGraph: {
    title: "Cvezy — Buat CV Profesional dalam 5 Menit",
    description: "Platform pembuat CV profesional gratis. Buat CV yang rapi dan siap kirim.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brutal-bg text-brutal-black font-body">
        {children}
      </body>
    </html>
  );
}
