import { InlineIcon } from '../../components/InlineIcon';
import React from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';
import roboHappyImg from '../../assets/contohdesain.webp';

interface ContohDesainPageProps {
  onBack: () => void;
  onCariTahu?: () => void;
}

export function ContohDesainPage({ onBack, onCariTahu }: ContohDesainPageProps) {
  const handleCariTahu = () => {
    playSynthesizerNote('unlock');
    if (onCariTahu) {
      onCariTahu();
    }
  };

  return (
    <div
      id="contoh-desain-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME */}
      <BackgroundFrame idPrefix="contoh-desain" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Beranda)         */}
      {/* ========================================================================= */}
      <header
        id="contoh-desain-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div
          id="contoh-desain-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]"
        >
          <img
            id="contoh-desain-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>

        {/* Back to Splash button */}
        <button
          id="contoh-desain-btn-back"
          type="button"
          onClick={() => {
            playClick();
            onBack();
          }}
          className="pointer-events-auto group rounded-md sm:rounded-xl lg:rounded-2xl px-2.5 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none translate-y-1.5 sm:translate-y-2 md:translate-y-2.5 2xl:translate-y-3"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-1" />
          <span>Beranda</span>
        </button>
      </header>

      {/* SPACER ATAS */}
      <div
        id="contoh-desain-header-spacer"
        className="w-full h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Gambar, Kanan Materi)           */}
      {/* ========================================================================= */}
      <main
        id="contoh-desain-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="contoh-desain-grid"
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* SISI KIRI: GAMBAR CONTOH DESAIN (col-span-6) */}
          <div
            id="contoh-desain-left-container"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="contoh-desain-img-wrapper"
              className="relative flex items-center justify-center transition-all duration-300 mx-auto aspect-square select-none hover:scale-[1.03]"
              style={{
                height: 'min(68vh, 580px)',
                maxHeight: '96%',
                maxWidth: '100%',
                minHeight: '220px',
                aspectRatio: '1 / 1',
                width: 'auto'
              }}
            >
              <img
                id="contoh-desain-left-img"
                src={roboHappyImg}
                alt="Contoh Desain & Karya Nyata"
                className="w-full h-full object-contain scale-120 sm:scale-125 drop-shadow-[0_16px_32px_rgba(0,53,76,0.22)] select-none pointer-events-none transition-transform duration-300"
              />
            </div>
          </div>

          {/* SISI KANAN: JUDUL + DESKRIPSI + TOMBOL CARI TAHU (col-span-6) */}
          <div
            id="contoh-desain-right-content"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto"
          >
            <div
              id="contoh-desain-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-center items-center text-center mx-auto py-1 lg:py-2 gap-3 sm:gap-4 lg:gap-5 2xl:gap-6 transition-all duration-300 -translate-y-3 sm:-translate-y-4 lg:-translate-y-6 2xl:-translate-y-8"
              style={{
                height: 'min(68vh, 580px)',
                maxHeight: '96%',
                minHeight: '220px'
              }}
            >
              {/* 1. Judul Halaman */}
              <div
                id="contoh-desain-title-wrapper"
                className="w-full flex flex-col items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="font-serif font-black text-[10px] sm:text-xs lg:text-sm 2xl:text-base text-[#004760] uppercase tracking-widest px-3 sm:px-4 py-1 rounded-full border-1.5 sm:border-2 border-[#004760] bg-white shadow-[2px_2px_0px_#00354c] mb-1 sm:mb-2">
                  Studi Kasus Karya Nyata
                </span>
                <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-[#004760] uppercase tracking-tight drop-shadow-sm">
                  Contoh Desain
                </h1>
              </div>

              {/* 2. Paragraf Deskripsi */}
              <div
                id="contoh-desain-desc-wrapper"
                className="w-full my-auto py-1 lg:py-2 flex items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-2xl"
              >
                <p
                  id="contoh-desain-description"
                  className="text-[9.5px] sm:text-[11px] md:text-xs lg:text-[13.5px] xl:text-sm 2xl:text-base text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify"
                >
                  Penguasaan empat pilar dasar desain—Warna, Tipografi, Ruang Kosong, dan Keseimbangan—adalah kunci utama dalam menghasilkan karya visual yang tidak hanya memukau, tetapi juga mampu mengomunikasikan pesan dengan jelas, efektif, dan meninggalkan kesan mendalam bagi audiens. Lihat bagaimana prinsip-prinsip ini berpadu harmonis dalam ragam poster karya nyata.
                </p>
              </div>

              {/* 4 Pilar Dasar Desain Badges */}
              <div
                id="contoh-desain-pillars"
                className="w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 shrink-0 py-0.5 mb-3.5 sm:mb-4.5 lg:mb-6 2xl:mb-7"
              >
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border-1.5 sm:border-2 border-[#004760] bg-amber-50 text-amber-900 font-serif font-black text-[10px] sm:text-xs lg:text-sm shadow-[1.5px_1.5px_0px_#00354c]">
                  <InlineIcon name="Palette" /> Warna
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border-1.5 sm:border-2 border-[#004760] bg-sky-50 text-sky-900 font-serif font-black text-[10px] sm:text-xs lg:text-sm shadow-[1.5px_1.5px_0px_#00354c]">
                  <InlineIcon name="Type" /> Tipografi
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border-1.5 sm:border-2 border-[#004760] bg-emerald-50 text-emerald-900 font-serif font-black text-[10px] sm:text-xs lg:text-sm shadow-[1.5px_1.5px_0px_#00354c]">
                  <InlineIcon name="DraftingCompass" /> Ruang Kosong
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border-1.5 sm:border-2 border-[#004760] bg-purple-50 text-purple-900 font-serif font-black text-[10px] sm:text-xs lg:text-sm shadow-[1.5px_1.5px_0px_#00354c]">
                  <InlineIcon name="Scale" /> Keseimbangan
                </span>
              </div>

              {/* 3. Button Cari Tahu */}
              <div
                id="contoh-desain-btn-wrapper"
                className="w-full flex justify-center items-end shrink-0 pt-1"
              >
                <button
                  id="contoh-desain-btn-cari-tahu"
                  type="button"
                  onClick={handleCariTahu}
                  className="bg-[#00a1db] hover:bg-[#0bb2ef] text-white border-2 lg:border-3 border-[#004760] shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] rounded-xl lg:rounded-2xl px-6 lg:px-11 2xl:px-14 py-2.5 lg:py-3.5 2xl:py-4 font-serif font-black text-xs sm:text-sm lg:text-base 2xl:text-lg uppercase tracking-wider flex items-center gap-2 lg:gap-2.5 transition-all cursor-pointer group"
                >
                  <span>Cari Tahu</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Area Kosong */}
      <footer id="contoh-desain-footer" className="h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 z-20 shrink-0 pointer-events-none" />
    </div>
  );
}
