# Context: Cvezy

## 📌 Project Overview
**Cvezy** adalah aplikasi web berbasis generator yang dirancang untuk membantu pengguna membuat CV **ATS-Friendly** (Applicant Tracking System) yang rapi, profesional, dan siap kirim dalam waktu singkat. Aplikasi ini menyediakan alur pembuatan CV yang terstruktur, validasi ATS, dan ekspor ke PDF. Tampilan aplikasi (UI) mengusung gaya desain **Neo-Brutalism** yang berani, namun **hasil output CV-nya didesain bersih, minimalis, dan 100% ATS-Friendly** (single-column, hitam putih, tanpa grafik).

## 🎯 Target Pengguna
- Fresh graduate yang belum pernah membuat CV.
- Profesional yang ingin memastikan CV mereka lolos filter ATS.
- Pencari kerja yang butuh CV standar industri yang bersih dan rapi.

## 🛠️ Rekomendasi Tech Stack
- **Frontend:** Next.js (App Router) / React.js
- **Styling UI Aplikasi:** Tailwind CSS + shadcn/ui (Gaya Neo-Brutalism)
- **Styling Output CV:** Standard HTML/CSS (Clean, Single Column, Black & White)
- **State Management:** Zustand atau React Context
- **Form & Validation:** React Hook Form + Zod
- **PDF Export:** react-to-print / @react-pdf/renderer
- **Backend/Auth/DB:** Supabase (PostgreSQL, Auth, Storage)

## 🎨 Design System

### 1. UI Aplikasi (Neo-Brutalism)
Aplikasi ini menggunakan gaya Neo-Brutalism untuk antarmuka penggunanya. Berikut adalah aturan ketat untuk UI:
1. **Warna (Color Palette):**
   - Background: Off-white (`#F4F4F0`) atau Dark Grey (`#1A1A1A`) untuk mode gelap.
   - Aksen: Kuning (`#FFD700`), Cyan (`#00FFFF`), Pink (`#FF00FF`), Hijau (`#00FF00`).
   - Teks & Border: Hitam pekat (`#000000`) atau Putih (`#FFFFFF`).
2. **Border & Shape:**
   - Gunakan `border-4 border-black` pada semua kartu, tombol, dan input.
   - Gunakan `rounded-none` (sudut tajam). Tidak boleh ada sudut melengkung.
3. **Shadow (Hard Shadow):**
   - Gunakan custom shadow: `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`.
   - Jangan gunakan shadow dengan blur (seperti `shadow-md`).
4. **Interaksi (Hover/Active):**
   - Tombol harus terlihat seperti "ditekan" saat di-hover/klik.
   - Contoh: `hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`.
5. **Tipografi:**
   - Gunakan font Sans-Serif yang tebal dan tegas (misal: `Space Grotesk`, `Archivo Black`, atau `Inter` dengan `font-black`).
   - Judul menggunakan huruf kapital (Uppercase).

### 2. Output CV (ATS-Friendly)
Ini adalah aturan untuk hasil cetak/PDF CV pengguna. **Dilarang** menerapkan gaya Neo-Brutalism di bagian ini.
1. **Layout:** Single-column (satu kolom penuh dari atas ke bawah, tanpa kolom samping).
2. **Warna:** Hitam (#000000) di atas Putih (#FFFFFF). Tidak ada warna lain.
3. **Font:** Arial, Helvetica, Calibri, atau Times New Roman (Font standar sistem).
4. **Elemen Visual:** Dilarang menggunakan foto, ikon grafis, tabel, text box, atau border tebal.
5. **Struktur:** Judul bagian menggunakan HURUF KAPITAL dan **Tebal** (Bold), diikuti garis horizontal tipis.
6. **Format Tanggal:** Gunakan format standar (MM/YYYY atau Bulan YYYY).
7. **Konten:** Fokus pada *action verbs* dan *bullet points* yang mudah dibaca mesin.

## 🗺️ Feature Roadmap (Revisi)

### Fase 1: Isi CV Cepat (Data Entry)
- [ ] Form input Data Diri & Kontak (Nama, Email, Telepon, LinkedIn, Lokasi).
- [ ] Form input Ringkasan Profil (Summary).
- [ ] Form input Pengalaman Kerja (Perusahaan, Posisi, Tanggal, Deskripsi Bullet Points).
- [ ] Form input Pengalaman Organisasi (jika ada).
- [ ] Form input Pendidikan.
- [ ] Form input Keahlian (Skills).
- [ ] UI: Progress bar tebal bergaya Neo-Brutalism.

### Fase 2: Optimasi ATS & Export (Menggantikan Fase 2 Lama)
- [ ] **Hapus Fitur Template:** Hilangkan komponen "Pilih Desain & Cover", pilihan warna, dan pilihan font. Hanya ada satu format standar ATS.
- [ ] **Live Preview (ATS Format):**
  - Tampilkan pratinjau CV di sisi kanan layar dengan format standar (single column, hitam putih, tanpa border, tanpa shadow).
  - Pratinjau ini harus persis seperti hasil PDF nanti (menggunakan font Arial/Helvetica).
- [ ] **ATS Checker (Pemeriksa Kerapian):**
  - Validasi format tanggal (MM/YYYY).
  - Peringatan jika ada karakter non-standar atau typo.
  - Saran kata kunci (keywords) berdasarkan deskripsi pekerjaan yang dituju.
- [ ] **Unduh Jadi PDF:**
  - Pilihan ukuran kertas (A4, Letter).
  - Tombol "Unduh Sekali Klik" (gaya Neo-Brutalism).
  - Modal konfirmasi "Cek Sebelum Kirim" (pastikan tidak ada typo).

### Fase 3: Akun Saya & Simpan/Pakai Ulang
- [ ] **Akun Saya:**
  - Autentikasi (Daftar Akun, Masuk, Keluar, Lupa Kata Sandi).
- [ ] **Simpan & Pakai Ulang:**
  - Auto-save draf ke database.
  - Dashboard "Daftar CV Saya" berbentuk grid kartu tebal (Neo-Brutalism).
  - Fitur "Duplikat untuk Lamaran Lain" (menggandakan CV untuk dimodifikasi).

### Fase 4: Tips & Bantuan
- [ ] **Tips & Bantuan:**
  - Contoh Kalimat Siap Pakai (Action verbs untuk ATS).
  - Panduan Singkat (Cara membuat CV ATS).
  - Tanya & Lapor Masalah.

## 🗄️ Rancangan Database (Revisi)
1. **users:** id, email, password_hash, created_at.
2. **resumes:** id, user_id, title, target_job_title, created_at, updated_at. (Hapus template_id, color_theme, font_family).
3. **resume_sections:** id, resume_id, type (summary/experience/organization/education/skill), content (JSONB).

## 🚀 Getting Started (Untuk Developer/AI)
1. Buka proyek Next.js yang sudah ada.
2. Hapus komponen `TemplateGallery`, `ColorPicker`, dan `FontSelector` dari Fase 2.
3. Buat komponen baru `ATSPreview.tsx` yang merender data dari form ke dalam layout HTML/CSS standar (single column, hitam putih, font Arial/Helvetica).
4. Konfigurasi library PDF (`react-to-print` atau `@react-pdf/renderer`) untuk mencetak komponen `ATSPreview` tanpa styling Neo-Brutalism (pastikan CSS `@media print` menyembunyikan UI aplikasi).
5. Pastikan form input (Fase 1) dan Dashboard (Fase 3) tetap menggunakan styling Neo-Brutalism agar aplikasi tetap terlihat modern dan menyenangkan untuk digunakan.