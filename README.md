# Cvezy

Cvezy adalah aplikasi web berbasis generator yang dirancang untuk membantu pengguna membuat CV **ATS-Friendly** (Applicant Tracking System) yang rapi, profesional, dan siap kirim dalam waktu singkat. 

Berbeda dengan aplikasi lain, Cvezy **100% gratis**, **tanpa perlu mendaftar akun**, dan langsung bisa digunakan. Antarmuka (UI) aplikasi menggunakan gaya desain **Neo-Brutalism** yang berani dan menyenangkan, namun **hasil output CV-nya didesain bersih, minimalis, dan 100% ATS-Friendly** (single-column, hitam putih, tanpa grafis).

## ✨ Fitur Utama

- **Langsung Pakai Tanpa Login**: Tidak perlu mendaftar akun, data langsung disimpan di memori lokal peramban (Local Storage).
- **Auto-Save**: Semua perubahan form akan otomatis tersimpan. Tidak perlu takut kehilangan data jika tidak sengaja menutup tab.
- **Reorder Fleksibel**: Anda dapat dengan mudah mengubah urutan riwayat Pengalaman, Pendidikan, Organisasi, maupun Keahlian.
- **Live Preview & ATS Checker**: Lihat hasil CV secara real-time. Sistem juga akan memeriksa (ATS Checker) apakah CV Anda sudah rapi dan memberi peringatan/skor jika ada data penting yang belum terisi.
- **Ekspor PDF Sempurna**: Hasil akhir dapat langsung diunduh menjadi format PDF dengan tata letak *(layout)*, margin, dan pagination yang teroptimasi untuk mesin ATS.

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (dengan *Persist Middleware*)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Print/PDF Export**: [react-to-print](https://github.com/gregnb/react-to-print)

## 🚀 Menjalankan Secara Lokal

Pertama, jalankan *development server*:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di peramban Anda untuk melihat hasilnya. Anda bisa mulai menyunting dengan mengubah `src/app/page.tsx`. Halaman akan otomatis diperbarui.

## 📄 Lisensi
Dikembangkan secara mandiri (Solo Developer). Hak cipta © Riyan Triadi.
