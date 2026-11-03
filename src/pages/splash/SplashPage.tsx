import React, { useState } from 'react';
import { MateriId } from '../../types';
import { allMateris } from '../../data/materiData';
import { playClick } from '../../utils/audio';
import logoJenama from '../../assets/logo-jenama-primer.png';
import gambarBackground from '../../assets/gambar-background.webp';
import judulAtas from '../../assets/Judul Atas.webp';
import judulBawah from '../../assets/Judul Bawah.webp';
import iconWarna from '../../assets/icon-warna.svg';
import iconTipografi from '../../assets/icon-tipografi.svg';
import iconRuangKosong from '../../assets/icon-ruangkosong.svg';
import iconKeseimbangan from '../../assets/icon-keseimbangan.svg';
import iconContohDesain from '../../assets/icon-contohdesain.svg';

interface SplashPageProps {
  onStartMateri?: (id: MateriId) => void;
  completedMateri: Record<MateriId, boolean>;
}

export function SplashPage({
  onStartMateri,
  completedMateri
}: SplashPageProps) {
  const materiKeys: MateriId[] = ['warna', 'tipografi', 'ruang-kosong', 'keseimbangan', 'contoh-desain'];
  const [hoveredMateri, setHoveredMateri] = useState<MateriId | null>(null);

  const getMateriIcon = (id: MateriId) => {
    const imgClass = "w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-14 lg:h-14 object-contain transition-transform duration-200 group-hover:scale-110 select-none drop-shadow-sm";
    switch (id) {
      case 'warna':
        return <img src={iconWarna} alt="Ikon Warna" className={imgClass} />;
      case 'tipografi':
        return <img src={iconTipografi} alt="Ikon Tipografi" className={imgClass} />;
      case 'ruang-kosong':
        return <img src={iconRuangKosong} alt="Ikon Ruang Kosong" className={imgClass} />;
      case 'keseimbangan':
        return <img src={iconKeseimbangan} alt="Ikon Keseimbangan" className={imgClass} />;
      case 'contoh-desain':
        return <img src={iconContohDesain} alt="Ikon Contoh Desain" className={imgClass} />;
      default:
        return <img src={iconWarna} alt="Ikon Materi" className={imgClass} />;
    }
  };

  const handleCardClick = (id: MateriId) => {
    playClick();
    onStartMateri?.(id);
  };

  return (
    <div
      id="splash-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* ========================================================================= */}
      {/* LAYER 0 (z-0): GAMBAR BACKGROUND (Opacity 10% di belakang frame SVG)      */}
      {/* ========================================================================= */}
      <img
        id="splash-classroom-bg"
        src={gambarBackground}
        alt="Ruang Belajar Desain Visual"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-25"
      />

      {/* ========================================================================= */}
      {/* LAYER 1 (z-10): BACKGROUND VECTOR FRAME (SVG di depan gambar background)  */}
      {/* ========================================================================= */}
      <svg
        id="dashboard-svg-frame"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none"
      >
        <defs>
          <style>{`
            .cls-svg-yellow { fill: #f9db00; }
            .cls-svg-blue { fill: #005787; }
          `}</style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            {/* Right accent rect */}
            <rect className="cls-svg-yellow" x="1877.91" y="768.96" width="42.09" height="77.87" />
            {/* Bottom blue panel (y=779.65 to 1080) */}
            <path className="cls-svg-blue" d="M0,779.65h1884.15c19.79,0,35.85,16.06,35.85,35.85v264.5H0v-300.35h0Z" />
            {/* Top right blue tab */}
            <path className="cls-svg-blue" d="M1657.1,74.48h-233.57c-10.94,0-21.37-4.6-28.75-12.68L1338.3,0h318.8v74.48Z" />
            {/* Top right yellow frame ribbon */}
            <path
              className="cls-svg-yellow"
              d="M1891.95,0h-349.81l66.94,73.26c8.75,9.57,21.11,15.02,34.08,15.02h215.7c18.27,0,33.08,14.81,33.08,33.08v598.16c0,18.27-14.81,33.08-33.08,33.08H556.07l-30.85-33.76c-7.38-8.08-17.81-12.68-28.75-12.68h-233.57v74.48h1657.1V0h-28.05Z"
            />
            {/* Top left and left border frame */}
            <path
              className="cls-svg-blue"
              d="M1381.82,28.05V0H0v781.65h377.86l-66.94-73.26c-8.75-9.57-21.11-15.02-34.08-15.02H66.91c-21.46,0-38.86-17.4-38.86-38.86V66.91c0-21.46,17.4-38.86,38.86-38.86h1314.92Z"
            />
          </g>
        </g>
      </svg>

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): TOP HEADER (Logo Jenama Kemendikdasmen)                   */}
      {/* ========================================================================= */}
      <header
        id="splash-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div id="splash-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]">
          <img
            id="splash-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>
      </header>

      {/* SPACER ATAS: Mempertahankan ruang vertikal agar konten tengah tidak tergeser */}
      <div id="splash-header-spacer" className="w-full h-6 sm:h-8 md:h-12 lg:h-14 2xl:h-20 shrink-0 pointer-events-none" aria-hidden="true" />

      {/* ========================================================================= */}
      {/* LAYER 3 (z-30): CENTER HERO CANVAS (Judul Atas & Judul Bawah Dimajukan)   */}
      {/* ========================================================================= */}
      <main
        id="splash-center-area"
        className="z-30 flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-6xl mx-auto -mt-12 lg:-mt-25 2xl:-mt-28 pointer-events-none select-none"
      >
        {/* Container Judul Splash: Geser ke bawah 6px & Animasi Mengambang Pelan */}
        <div
          id="splash-title-container"
          className="relative top-[6px] flex flex-col items-center justify-center animate-float-gentle will-change-transform"
          style={{ animation: 'floatGentle 3s ease-in-out infinite' }}
        >
        {/* Title Atas: "DASAR DESAIN" - capped at 2xl:max-w-[1000px] */}
        <div className="transition-transform duration-300 scale-[1.2] drop-shadow-[0_12px_24px_rgba(0,87,135,0.35)]">
          <img
            id="splash-title-atas"
            src={judulAtas}
            alt="Dasar Desain"
            className="w-full max-w-[300px] xs:max-w-[360px] sm:max-w-[460px] md:max-w-[620px] lg:max-w-[760px] xl:max-w-[880px] 2xl:max-w-[1000px] max-h-[26vh] h-auto object-contain"
          />
        </div>

        {/* Title Bawah: "VISUAL" - capped at 2xl:max-w-[550px] */}
        <div className="-mt-3  lg:-mt-3 xl:-mt-6 2xl:-mt-8 transition-transform duration-300 scale-[1.2] drop-shadow-[0_12px_24px_rgba(0,87,135,0.35)]">
          <img
            id="splash-title-bawah"
            src={judulBawah}
            alt="Visual"
            className="w-full max-w-[165px] xs:max-w-[200px] sm:max-w-[255px] md:max-w-[340px] lg:max-w-[420px] xl:max-w-[485px] 2xl:max-w-[550px] max-h-[22vh] h-auto object-contain"
          />
        </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* LAYER 3 (z-30): BOTTOM BLUE PANEL (5 Large Buttons)                       */}
      {/* Kotak biru: #00a1db | Outline: #004760 | Shadow: #00354c                   */}
      {/* ========================================================================= */}
      <footer
        id="splash-footer-panel"
        className="w-full h-[26vh] sm:h-[27vh] md:h-[28vh] z-30 shrink-0 flex items-center justify-center px-4 sm:px-8"
      >
        <div
          id="splash-5-buttons"
          className="flex flex-row items-center justify-center gap-3.5 sm:gap-5 md:gap-6 lg:gap-7 max-w-full flex-wrap z-30"
        >
          {materiKeys.map((mId) => {
            const m = allMateris[mId];
            const isHovered = hoveredMateri === mId;
            const isCompleted = completedMateri[mId];

            return (
              <div
                key={m.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredMateri(mId)}
                onMouseLeave={() => setHoveredMateri(null)}
              >

                {/* Main Interactive Button:
                    Kotak biru: #00a1db
                    Outline kotak: #004760
                    Shadow kotak: #00354c
                    Default: Large Icon
                    Hover: Expands with Text
                */}
                <button
                  type="button"
                  onClick={() => handleCardClick(m.id)}
                  aria-label={m.title}
                  className={`group relative flex items-center justify-center rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-[#004760] transition-all duration-200 cursor-pointer shadow-[5px_5px_0px_#00354c] sm:shadow-[6px_6px_0px_#00354c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#00354c] select-none bg-[#00a1db] hover:bg-[#0bb2ef] ${
                    isHovered
                      ? '-translate-y-2 shadow-[7px_7px_0px_#00354c] sm:shadow-[8px_8px_0px_#00354c] px-5 sm:px-7 md:px-8 h-16 sm:h-20 md:h-24 lg:h-26'
                      : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26'
                  }`}
                >
                  {/* Default Enlarged Icon */}
                  <div className="shrink-0 flex items-center justify-center">
                    {getMateriIcon(m.id)}
                  </div>

                  {/* Text: Hanya muncul ketika dihover */}
                  <div
                    className={`transition-all duration-200 overflow-hidden flex items-center ${
                      isHovered
                        ? 'max-w-xs opacity-100 ml-3 sm:ml-4'
                        : 'max-w-0 opacity-0 ml-0'
                    }`}
                  >
                    <span className="font-serif font-black text-sm sm:text-base md:text-lg lg:text-xl text-white whitespace-nowrap tracking-tight">
                      {m.title}
                    </span>
                  </div>

                  {/* Completed Check Dot */}
                  {isCompleted && (
                    <span
                      className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f9db00] border-2 sm:border-3 border-[#004760] shadow-xs"
                      title="Sudah Dibaca"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
