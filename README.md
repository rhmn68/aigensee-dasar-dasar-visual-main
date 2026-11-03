# Dasar - Dasar Desain Visual (Interactive Learning Website)

Aplikasi web pembelajaran interaktif modern yang mengonversi 12 shot storyboard dari dokumen **`Dasar Desain Visual.pdf`** menjadi pengalaman studio edukasi digital berbasis **React 19 + TypeScript + Vite + Tailwind CSS v4**.

Mengadopsi estetika *vintage-modern brutalist sketchbook* dan layout konsol layar penuh (`h-screen overflow-hidden`) yang terinspirasi dari proyek referensi `storyboard-puzzle-challenge`.

---

## Fitur Utama

### 1. Splash Page (Split-Screen Layar Penuh)
- **Sisi Kiri**:
  - Judul monumental bergaya serif/display: **`DASAR - DASAR DESAIN VISUAL`**.
  - Subtitle inspiratif dan narasi pemandu.
  - Karakter maskot robot animasi (*"Robo"*) dengan animasi melayang (*floating*).
  - Tombol CTA utama *"Mulai Eksplorasi (Warna) →"*.
- **Sisi Kanan (4 Rows x 1 Column)**:
  - Susunan 4 kartu brutalist vertikal untuk tiap pilar desain:
    1. `01. Warna (Color & Harmony)`
    2. `02. Tipografi (Typography & Hierarchy)`
    3. `03. Ruang Kosong (Negative Space & Breathing Room)`
    4. `04. Keseimbangan (Visual Balance & Equilibrium)`
  - Dilengkapi ikon tematik, tag fitur, dan indikator status pembacaan.
- **Bersih & Siap Voice-Over (VO)**:
  - Tanpa suara latar (BGM), siap dipadukan dengan voice-over (VO).
  - Header bersih berfokus pada logo dan modul pembelajaran.

---

### 2. Modul Materi Mendalam & Mini-Lab Interaktif

Setiap materi memiliki silabus mendalam (4 sub-materi) dan simulator interaktif langsung:

#### Modul 01: Warna
- **Sub-Materi**:
  1. Psikologi & Makna Emosi Warna (Biru = Tenang/Pendidikan vs Merah = Lapar/Kuliner).
  2. Roda Warna & Skema Harmoni (Monokrom, Analog, Komplementer).
  3. Kontras & Keterbacaan (Accessibility standard WCAG, uji menyipitkan mata).
  4. Aturan Emas 60-30-10 & Palette Limiter (Mencegah "desain karnaval" yang terlalu ramai).
- **Interactive Lab**: **Color Emotion & 60-30-10 Visualizer** (Eksperimen meramu warna poster kuliner vs akademik secara live dengan respons emosi Robo).

#### Modul 02: Tipografi
- **Sub-Materi**:
  1. Klasifikasi Font (Serif berwibawa vs Sans jernih digital vs Display).
  2. Hirarki Visual Tipografi (Skala ukuran H1, H2, Body Text, dan Caption).
  3. Spasi Baris (Leading) & Kerning (Mencegah efek tembok bata teks yang menyesakkan).
  4. Golden Rule: Maksimal 1 - 2 Jenis Font (Kombinasi kontras harmonis).
- **Interactive Lab**: **Klinik Tipografi (Fix the Messy Announcement)** (Memperbaiki pengumuman sekolah yang berantakan dengan font pairing, slider leading 1.5, dan pengaturan hirarki).

#### Modul 03: Ruang Kosong (Negative Space)
- **Sub-Materi**:
  1. Hakikat White Space (Bukan pemborosan, melainkan oksigen bagi mata).
  2. Ruang Bernapas: Micro Space vs Macro Space.
  3. Menegaskan Focal Point lewat Isolasi Ruang.
  4. Analogi Buku Padat Tanpa Margin vs Buku Bernapas Nyaman.
- **Interactive Lab**: **The Breathing Room Slider** (Slider kontinu dari 0% sesak bikin Robo pusing hingga 100% lapang elegan, dilengkapi toggle garis pandu ruang).

#### Modul 04: Keseimbangan (Balance)
- **Sub-Materi**:
  1. Konsep Bobot Visual (Visual Weight: ukuran, warna gelap/pekat, kompleksitas).
  2. Keseimbangan Simetris (Formal Balance: ketenangan dan wibawa cermin).
  3. Keseimbangan Asimetris (Dynamic Balance: modernitas jungkat-jungkit visual).
  4. Alur Pandang Alami (Eye Flow: Z-Pattern & F-Pattern).
- **Interactive Lab**: **Timbangan Fisika Bobot Visual** (Terinspirasi langsung dari **Shot 8 Storyboard**! Neraca fisika interaktif dengan balok Foto, Teks, Warna, dan Shape yang dapat miring atau seimbang sempurna).

---

## Menjalankan Proyek Secara Lokal

```bash
# Masuk ke direktori
cd C:\project\dasar-dasar-visual

# Install dependensi (jika belum)
npm install

# Jalankan development server
npm run dev

# Bangun versi produksi
npm run build
```

Aplikasi berjalan pada: `http://localhost:3001/`
