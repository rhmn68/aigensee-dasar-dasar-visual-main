import React, { useState } from 'react';
import { playClick } from '../../utils/audio';
import { ArrowLeft, Home } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';

import poster1 from '../../assets/poster 1.jpg';
import poster2 from '../../assets/poster 2.jpg';
import poster3 from '../../assets/poster 3.jpg';
import poster4 from '../../assets/poster 4.jpg';
import poster5 from '../../assets/poster 5.jpg';
import poster6 from '../../assets/poster 6.jpg';

interface ContohDesainArtiPageProps {
  onBack: () => void;
  onHome: () => void;
}

interface PosterCaseStudy {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  image: string;
  title: string;
  description: string;
  traits: string[];
  themeColor: string;
}

const posterCaseStudies: PosterCaseStudy[] = [
  {
    id: 'poster-1',
    name: 'Poster 1: Harmoni Marun & Ruang Tenang',
    shortName: 'Poster 1',
    badge: 'STUDI KASUS #1 · POSTER 1',
    image: poster1,
    title: 'Harmoni Marun & Ruang Tenang',
    description: 'Poster ini mengaplikasikan palet warna marun elegan yang berkelas dipadukan dengan tipografi sans-serif geometris yang bersih. Ruang makro di sisi atas memberikan kelegaan visual yang membuat mata audiens fokus ke objek utama secara instan.',
    traits: ['Warna Marun', 'Tipografi Bersih', 'Ruang Lega', 'Fokus Sentral'],
    themeColor: '#e54c95'
  },
  {
    id: 'poster-2',
    name: 'Poster 2: Kontras Berani & Tipografi Dinamis',
    shortName: 'Poster 2',
    badge: 'STUDI KASUS #2 · POSTER 2',
    image: poster2,
    title: 'Kontras Berani & Tipografi Dinamis',
    description: 'Menggunakan warna kontras hangat komplementer untuk menciptakan urgensi dan daya tarik yang kuat. Ukuran font bervariasi secara terstruktur menciptakan hierarki informasi yang membimbing mata membaca dari judul ke detail acara.',
    traits: ['Palet Emas Hangat', 'Hierarki Kuat', 'Tipografi Display', 'Dinamis'],
    themeColor: '#ffd801'
  },
  {
    id: 'poster-3',
    name: 'Poster 3: Elegansi Klasik & Serif Wibawa',
    shortName: 'Poster 3',
    badge: 'STUDI KASUS #3 · POSTER 3',
    image: poster3,
    title: 'Elegansi Klasik & Serif Wibawa',
    description: 'Nuansa biru samudra dan langit dipadukan dengan tata letak simetris yang tertata apik. Memberikan kesan berwibawa, segar, dan profesional untuk menyampaikan pesan visual secara jernih.',
    traits: ['Biru Samudra', 'Tata Letak Tertata', 'Ruang Napas Seimbang', 'Elegan'],
    themeColor: '#09b9fc'
  },
  {
    id: 'poster-4',
    name: 'Poster 4: Keseimbangan Asimetris Modern',
    shortName: 'Poster 4',
    badge: 'STUDI KASUS #4 · POSTER 4',
    image: poster4,
    title: 'Keseimbangan Asimetris Modern',
    description: 'Dominasi warna merah membara dipadukan dengan elemen visual asimetris yang dinamis namun tetap berbobot seimbang. Menghadirkan kesan modern, berenergi tinggi, dan memikat rasa ingin tahu pembaca.',
    traits: ['Merah Berani', 'Asimetris Seimbang', 'Energi Kuat', 'Alur Runtut'],
    themeColor: '#f41c1c'
  },
  {
    id: 'poster-5',
    name: 'Poster 5: Irama Warna & Ruang Mikro Presisi',
    shortName: 'Poster 5',
    badge: 'STUDI KASUS #5 · POSTER 5',
    image: poster5,
    title: 'Irama Warna & Ruang Mikro Presisi',
    description: 'Palet warna oranye jingga yang cerah dan hangat membangkitkan semangat. Spasi baris kalimat dan kerning huruf diatur dengan ruang mikro yang presisi sehingga pesan tetap nyaman dibaca.',
    traits: ['Jingga Hangat', 'Keterbacaan Tinggi', 'Irama Ceria', 'Struktur Tertata'],
    themeColor: '#ff8b00'
  },
  {
    id: 'poster-6',
    name: 'Poster 6: Sintesis Pilar Visual Terpadu',
    shortName: 'Poster 6',
    badge: 'STUDI KASUS #6 · POSTER 6',
    image: poster6,
    title: 'Sintesis Pilar Visual Terpadu',
    description: 'Nuansa hijau daun segar yang memikat merangkai keempat pilar: warna yang hidup, tipografi yang tegas, ruang kosong yang lega, dan keseimbangan visual yang kokoh menjadi satu kesatuan karya desain utuh.',
    traits: ['Hijau Segar', 'Sintesis 4 Pilar', 'Desain Utuh', 'Karya Memukau'],
    themeColor: '#93db2c'
  }
];

export function ContohDesainArtiPage({ onBack, onHome }: ContohDesainArtiPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const activeCase = posterCaseStudies[selectedIndex];

  const handleSelectPoster = (index: number) => {
    playClick();
    setSelectedIndex(index);
  };

  return (
    <div
      id="contoh-desain-arti-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME */}
      <BackgroundFrame idPrefix="contoh-desain-arti" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Aksi)            */}
      {/* ========================================================================= */}
      <header
        id="contoh-desain-arti-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div
          id="contoh-desain-arti-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]"
        >
          <img
            id="contoh-desain-arti-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>

        <div
          id="contoh-desain-arti-header-actions"
          className="flex items-center gap-1.5 sm:gap-2.5 pointer-events-auto translate-y-1.5 sm:translate-y-2 md:translate-y-2.5 2xl:translate-y-3"
        >
          {/* Tombol Beranda */}
          <button
            id="contoh-desain-arti-btn-home"
            type="button"
            onClick={() => {
              playClick();
              onHome();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer select-none"
            title="Kembali ke Beranda Splash"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Beranda</span>
          </button>

          {/* Tombol Kembali ke Intro */}
          <button
            id="contoh-desain-arti-btn-back"
            type="button"
            onClick={() => {
              playClick();
              onBack();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2.5 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali</span>
          </button>
        </div>
      </header>

      {/* SPACER ATAS */}
      <div
        id="contoh-desain-arti-header-spacer"
        className="w-full h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Poster, Kanan Analisis)         */}
      {/* ========================================================================= */}
      <main
        id="contoh-desain-arti-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="contoh-desain-arti-grid"
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* SISI KIRI: DISPLAY POSTER KARYA NYATA (col-span-6) */}
          <div
            id="contoh-desain-arti-left-container"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="contoh-desain-arti-poster-card"
              className="relative flex items-center justify-center transition-all duration-300 mx-auto rounded-2xl lg:rounded-3xl border-2 sm:border-3 border-[#004760] bg-white shadow-[4px_4px_0px_#00354c] sm:shadow-[5px_5px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] overflow-hidden select-none hover:scale-[1.02]"
              style={{
                height: 'min(62vh, 520px)',
                maxHeight: '94%',
                maxWidth: '100%',
                minHeight: '180px',
                width: 'auto'
              }}
            >
              <img
                id="contoh-desain-arti-poster-img"
                src={activeCase.image}
                alt={activeCase.name}
                className="w-auto h-full max-h-full object-cover block select-none"
              />
            </div>
          </div>

          {/* SISI KANAN: ANALISIS DESAIN (col-span-6) */}
          <div
            id="contoh-desain-arti-right-content"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto"
          >
            <div
              id="contoh-desain-arti-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-center items-center text-center mx-auto py-1 lg:py-2 gap-2.5 sm:gap-3.5 lg:gap-4.5 2xl:gap-6 transition-all duration-300"
              style={{
                height: 'min(62vh, 520px)',
                maxHeight: '94%',
                minHeight: '180px'
              }}
            >
              {/* 1. Badge & Judul Studi Kasus */}
              <div id="contoh-desain-arti-title-wrapper" className="w-full flex flex-col items-center shrink-0">
                <span
                  id="contoh-desain-arti-badge"
                  className="font-serif font-black text-[9px] sm:text-xs lg:text-sm text-[#004760] uppercase tracking-widest px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border-1.5 sm:border-2 border-[#004760] bg-white shadow-[2px_2px_0px_#00354c] mb-1 sm:mb-1.5"
                >
                  {activeCase.badge}
                </span>

                <h2
                  id="contoh-desain-arti-title-text"
                  className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-[#004760] uppercase tracking-tight drop-shadow-sm leading-tight transition-all duration-200"
                >
                  {activeCase.title}
                </h2>
              </div>

              {/* 2. Paragraf Analisis Kunci */}
              <div
                id="contoh-desain-arti-desc-wrapper"
                className="w-full flex flex-col items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-3xl px-1 sm:px-2 my-auto"
              >
                <p
                  id="contoh-desain-arti-description"
                  className="text-xs sm:text-[13px] md:text-sm lg:text-[15px] 2xl:text-lg text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify mb-2 sm:mb-2.5 lg:mb-3 2xl:mb-4"
                >
                  {activeCase.description}
                </p>

                {/* Trait Pills */}
                <div
                  id="contoh-desain-arti-traits-container"
                  className="hidden lg:flex items-center justify-center gap-2 2xl:gap-3 flex-wrap w-full"
                >
                  {activeCase.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      id={`contoh-desain-arti-trait-${tIdx}`}
                      className="px-2.5 sm:px-3 2xl:px-4 py-0.5 sm:py-1 2xl:py-1.5 rounded-lg 2xl:rounded-xl text-xs 2xl:text-sm font-black border-2 border-[#004760] bg-white text-[#004760] shadow-[2px_2px_0px_#00354c] 2xl:shadow-[3px_3px_0px_#00354c]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* LAYER 3 (z-30): BOTTOM POSTER SELECTOR DOCK (Memanjang 2 kotak saat aktif) */}
      <footer
        id="contoh-desain-arti-footer-buttons"
        className="w-full z-30 shrink-0 flex items-center justify-center px-3 sm:px-6 pt-1 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 2xl:pb-8 -translate-y-3 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-12 2xl:-translate-y-16"
      >
        <div
          id="contoh-desain-selector-buttons"
          className="flex flex-row items-center justify-center gap-1.5 min-[360px]:gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-full z-30"
        >
          {posterCaseStudies.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={item.id}
                id={`contoh-desain-arti-button-${item.id}`}
                type="button"
                onClick={() => handleSelectPoster(idx)}
                aria-label={item.name}
                style={{
                  backgroundColor: item.themeColor
                }}
                className={`group relative flex items-center justify-center rounded-sm min-[360px]:rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl 2xl:rounded-3xl border-1.5 sm:border-2 lg:border-3 2xl:border-4 border-[#004760] transition-all duration-300 ease-out cursor-pointer shadow-[1px_1px_0px_#00354c] min-[360px]:shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[2px_2px_0px_#00354c] lg:shadow-[3px_3px_0px_#00354c] 2xl:shadow-[5px_5px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] select-none shrink-0 outline-none focus:outline-none focus-visible:outline-none ${
                  isSelected
                    ? '-translate-y-1 sm:-translate-y-2 2xl:-translate-y-3 shadow-[2.5px_2.5px_0px_#00354c] sm:shadow-[4px_4px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] 2xl:shadow-[9px_9px_0px_#00354c] w-14 min-[360px]:w-16 sm:w-[96px] md:w-[120px] lg:w-[150px] xl:w-[170px] 2xl:w-[220px] px-1'
                    : 'hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#00354c] 2xl:hover:shadow-[6px_6px_0px_#00354c] w-6 min-[360px]:w-7 sm:w-10 md:w-13 lg:w-16 xl:w-18 2xl:w-24'
                } h-6 min-[360px]:h-7 sm:h-10 md:h-13 lg:h-16 xl:h-18 2xl:h-24`}
              >
                {isSelected ? (
                  <span className="font-serif font-black text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg select-none tracking-wider uppercase truncate px-1 text-white drop-shadow-[0_1.5px_2px_rgba(0,53,76,0.9)]">
                    {item.shortName}
                  </span>
                ) : (
                  <span className="font-serif font-black text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white drop-shadow-[0_1.5px_2px_rgba(0,53,76,0.9)] select-none">
                    {idx + 1}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
