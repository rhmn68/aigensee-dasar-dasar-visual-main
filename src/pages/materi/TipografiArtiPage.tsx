import React, { useState } from 'react';
import { playClick } from '../../utils/audio';
import { ArrowLeft, Home, Sliders } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';

interface TipografiArtiPageProps {
  onBack: () => void;
  onHome: () => void;
}

interface FontCategoryDetail {
  id: string;
  name: string;
  shortName: string;
  fontFamily: string;
  sampleLetter: string;
  sampleHeadline: string;
  mobileShortHeadline: string;
  sampleSentence: string;
  description: string;
  traits: string[];
}

const fontCategoryDetails: FontCategoryDetail[] = [
  {
    id: 'serif',
    name: 'Serif (Berkait)',
    shortName: 'Serif',
    fontFamily: 'Playfair Display, Georgia, serif',
    sampleLetter: 'Aa',
    sampleHeadline: 'Wibawa & Keanggunan Klasik',
    mobileShortHeadline: 'Klasik & Elegan',
    sampleSentence: 'Huruf dengan sirip kait di setiap ujung guratan garis memberi panduan alur membaca yang nyaman.',
    description: 'Huruf dengan kait atau sirip kecil di setiap ujung guratan garis. Menghadirkan wibawa, keanggunan klasik, dan kesan terpercaya. Sangat ideal untuk media cetak panjang seperti buku, novel, dan koran karena sirip huruf membantu memandu alur mata pembaca.',
    traits: ['Klasik', 'Formal', 'Terpercaya', 'Buku & Koran']
  },
  {
    id: 'sans-serif',
    name: 'Sans-Serif (Modern)',
    shortName: 'Sans',
    fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
    sampleLetter: 'Gg',
    sampleHeadline: 'Kejernihan Antarmuka Digital',
    mobileShortHeadline: 'Modern & Jernih',
    sampleSentence: 'Garis bersih tanpa sirip membuat teks sangat jernih dan mudah dibaca pada berbagai ukuran layar ponsel.',
    description: 'Huruf tanpa sirip dengan ujung garis yang bersih, geometris, dan proporsional. Memberikan kesan modern, jernih, dan ramah pengguna. Pilihan utama untuk layar digital, aplikasi ponsel, website, dan teks instruksi karena keterbacaannya yang sangat tinggi.',
    traits: ['Modern', 'Minimalis', 'Jernih', 'Antarmuka Digital']
  },
  {
    id: 'display',
    name: 'Display / Judul',
    shortName: 'Display',
    fontFamily: "'Changa One', Impact, sans-serif",
    sampleLetter: 'Qq',
    sampleHeadline: 'Fokus Perhatian Utama',
    mobileShortHeadline: 'Karakter Kuat & Tebal',
    sampleSentence: 'Dirancang berani dan atraktif untuk langsung memikat pandangan pertama penonton acara.',
    description: 'Ragam huruf yang dirancang khusus untuk ukuran besar guna memikat pandangan seketika. Memiliki kepribadian yang ekspresif, tebal, dan berkarakter kuat. Digunakan eksklusif untuk judul utama, poster acara, atau logo desain.',
    traits: ['Atraktif', 'Berani', 'Ekspresif', 'Judul & Poster']
  },
  {
    id: 'monospace',
    name: 'Monospace (Lebar Tetap)',
    shortName: 'Mono',
    fontFamily: 'Courier New, monospace',
    sampleLetter: 'Mm',
    sampleHeadline: 'Presisi Kode & Mesin Tik',
    mobileShortHeadline: 'Presisi & Rapi',
    sampleSentence: 'Setiap huruf menempati ruang horizontal yang persis sama, menciptakan kesan teknis dan teratur.',
    description: 'Setiap karakter huruf memiliki lebar horizontal yang persis sama. Memberikan nuansa teknis, presisi, dan retro komputer seperti mesin ketik atau kode pemrograman. Sangat efektif untuk data tabular, angka keuangan, atau desain bertema futuristik.',
    traits: ['Presisi', 'Teknis', 'Rapi', 'Data & Mesin Tik']
  },
  {
    id: 'script',
    name: 'Script (Kaligrafi)',
    shortName: 'Script',
    fontFamily: 'Brush Script MT, cursive',
    sampleLetter: 'Jj',
    sampleHeadline: 'Goresan Tangan Luwes',
    mobileShortHeadline: 'Luwes & Artistik',
    sampleSentence: 'Sentuhan personal kuas kaligrafi memancarkan nuansa kehangatan hati dan kemewahan acara istimewa.',
    description: 'Gaya tulisan tangan yang mengalir luwes dengan goresan berliku layaknya tinta kuas atau pena kaligrafi. Memancarkan kehangatan personal, kemewahan, dan sentuhan artistik. Sangat pas untuk undangan pernikahan, sertifikat kehormatan, dan kemasan produk premium.',
    traits: ['Artistik', 'Elegan', 'Personal', 'Undangan & Kemasan']
  },
  {
    id: 'slab-serif',
    name: 'Slab Serif (Kait Balok)',
    shortName: 'Slab',
    fontFamily: 'Rockwell, serif',
    sampleLetter: 'Kk',
    sampleHeadline: 'Ketegasan Kait Balok',
    mobileShortHeadline: 'Tegas & Kokoh',
    sampleSentence: 'Sirip berbentuk balok persegi tebal menghadirkan kesan percaya diri yang kokoh dan berenergi.',
    description: 'Memiliki kait tebal berbentuk balok persegi yang kokoh tanpa perbedaan kontras tebal-tipis garis yang mencolok. Terkesan tegas, percaya diri, dan berdaya tahan tinggi. Populer digunakan pada poster retro, identitas kampus, serta merek olahraga.',
    traits: ['Tegas', 'Kokoh', 'Sportif', 'Poster Retro']
  }
];

type TypoTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

export function TipografiArtiPage({ onBack, onHome }: TipografiArtiPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [customText, setCustomText] = useState<string>('');
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [activeTag, setActiveTag] = useState<TypoTag>('h2');

  const activeFont = fontCategoryDetails[selectedIndex];

  const handleSelectFont = (index: number) => {
    playClick();
    setSelectedIndex(index);
  };

  const handleTagChange = (tag: TypoTag) => {
    playClick();
    setActiveTag(tag);
  };

  // Helper scale per semantic tag (Disesuaikan agar tidak overflow pada card aspect-square di mobile)
  const getTagScale = (tag: TypoTag) => {
    switch (tag) {
      case 'h1':
        return 1.2;
      case 'h2':
        return 1.0;
      case 'h3':
        return 0.85;
      case 'h4':
        return 0.72;
      case 'p':
        return 0.58;
    }
  };

  return (
    <div
      id="tipografi-arti-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME */}
      <BackgroundFrame idPrefix="tipografi-arti" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Aksi)            */}
      {/* ========================================================================= */}
      <header
        id="tipografi-arti-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div
          id="tipografi-arti-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]"
        >
          <img
            id="tipografi-arti-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>

        <div
          id="tipografi-arti-header-actions"
          className="flex items-center gap-1.5 sm:gap-2.5 pointer-events-auto translate-y-1.5 sm:translate-y-2 md:translate-y-2.5 2xl:translate-y-3"
        >
          {/* Tombol Beranda */}
          <button
            id="tipografi-arti-btn-home"
            type="button"
            onClick={() => {
              playClick();
              onHome();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1.5 lg:py-2 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer select-none"
            title="Kembali ke Beranda Splash"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Beranda</span>
          </button>

          {/* Tombol Kembali ke Intro */}
          <button
            id="tipografi-arti-btn-back"
            type="button"
            onClick={() => {
              playClick();
              onBack();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2 sm:px-4 lg:px-6 py-0.5 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali</span>
          </button>
        </div>
      </header>

      {/* SPACER ATAS (Height-Adaptive) */}
      <div
        id="tipografi-arti-header-spacer"
        className="w-full h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Spesimen Font, Kanan Materi)    */}
      {/* ========================================================================= */}
      <main
        id="tipografi-arti-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="tipografi-arti-grid"
          className="grid grid-cols-12 gap-2.5 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* SISI KIRI: SPESIMEN TIPOGRAFI (col-span-5 di mobile, col-span-5 lg:col-span-5) */}
          <div
            id="tipografi-arti-left-container"
            className="col-span-5 sm:col-span-5 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="tipografi-arti-specimen-card"
              className="relative flex flex-col justify-between items-center transition-all duration-300 mx-auto aspect-square rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 sm:border-3 border-[#004760] bg-white shadow-[3px_3px_0px_#00354c] sm:shadow-[5px_5px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] overflow-hidden p-2 sm:p-4 lg:p-6 select-none"
              style={{
                height: 'min(62vh, 520px)',
                maxHeight: '94%',
                maxWidth: '100%',
                minHeight: '140px',
                aspectRatio: '1 / 1',
                width: 'auto'
              }}
            >
              {/* Center Letterform Focus */}
              <div className="w-full flex-1 flex flex-col items-center justify-center my-auto px-1 sm:px-2 text-center overflow-hidden">
                <span
                  id="tipografi-arti-specimen-letter"
                  style={{
                    fontFamily: activeFont.fontFamily,
                    letterSpacing: `${letterSpacing}px`,
                    transform: `scale(${getTagScale(activeTag)})`,
                    transformOrigin: 'center center'
                  }}
                  className="text-[#004760] leading-none text-4xl min-[360px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl drop-shadow-sm select-none transition-all duration-200"
                >
                  {customText.trim() ? customText : activeFont.sampleLetter}
                </span>

                <h4
                  style={{
                    fontFamily: activeFont.fontFamily,
                    letterSpacing: `${Math.max(0, letterSpacing * 0.5)}px`
                  }}
                  className="font-black text-[10px] min-[360px]:text-[11px] sm:text-sm lg:text-base text-slate-800 mt-1 sm:mt-2.5 leading-snug whitespace-nowrap text-center"
                >
                  {customText.trim() ? (
                    `"${customText}"`
                  ) : (
                    <>
                      <span className="inline md:hidden">"{activeFont.mobileShortHeadline}"</span>
                      <span className="hidden md:inline">"{activeFont.sampleHeadline}"</span>
                    </>
                  )}
                </h4>

                <p
                  style={{ fontFamily: activeFont.fontFamily }}
                  className="hidden md:block text-[10px] sm:text-xs text-slate-600 mt-1 max-w-xs line-clamp-2"
                >
                  {activeFont.sampleSentence}
                </p>
              </div>

              {/* Bottom Bar: Typographic Tags Selector (H1, H2, H3, H4, P) */}
              <div className="w-full border-t border-slate-200 pt-1 shrink-0">
                {/* Mobile view: Tag Hierarchy Buttons */}
                <div className="flex md:hidden items-center justify-between px-0.5 text-[8px] min-[360px]:text-[9px] text-slate-600 font-bold">
                  <span className="text-[#004760] text-[8px]">Tag:</span>
                  <div className="flex items-center gap-1">
                    {(['h1', 'h2', 'h3', 'h4', 'p'] as TypoTag[]).map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagChange(tag)}
                        className={`px-1.5 py-0.5 rounded uppercase font-black transition-all cursor-pointer ${
                          activeTag === tag
                            ? 'bg-[#004760] text-white shadow-[1px_1px_0px_#00354c]'
                            : 'bg-slate-100 text-[#004760] hover:bg-sky-50'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tablet & Desktop view */}
                <div className="hidden md:flex flex-col gap-1.5 pt-0.5">
                  {/* Type-to-Preview Input */}
                  <div className="w-full flex items-center gap-1.5">
                    <input
                      type="text"
                      maxLength={18}
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Ketik teks uji coba..."
                      className="flex-1 px-2 py-0.5 rounded-lg border border-[#004760] text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#00a1db] placeholder:text-slate-400 font-sans"
                    />
                    {customText && (
                      <button
                        type="button"
                        onClick={() => setCustomText('')}
                        className="px-1.5 py-0.5 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
                        title="Hapus teks"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Dual Controls: Kerning Slider & Tag Buttons */}
                  <div className="w-full flex items-center justify-between text-[10px] text-slate-600 gap-2">
                    <div className="flex items-center gap-1 font-bold text-[#004760]">
                      <Sliders className="w-3 h-3 text-[#00a1db]" />
                      <span>Kerning: {letterSpacing}px</span>
                    </div>
                    <input
                      type="range"
                      min="-2"
                      max="10"
                      step="1"
                      value={letterSpacing}
                      onChange={(e) => setLetterSpacing(Number(e.target.value))}
                      className="w-16 lg:w-20 accent-[#00a1db] cursor-pointer"
                    />

                    {/* Desktop Hierarchy Tags */}
                    <div className="flex items-center gap-1 ml-auto">
                      {(['h1', 'h2', 'h3', 'h4', 'p'] as TypoTag[]).map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleTagChange(tag)}
                          className={`px-1.5 py-0.5 rounded text-[9px] uppercase font-black transition-all cursor-pointer ${
                            activeTag === tag
                              ? 'bg-[#004760] text-white shadow-[1px_1px_0px_#00354c]'
                              : 'bg-slate-100 text-[#004760] hover:bg-sky-50'
                          }`}
                          title={`Tingkat Hierarki: ${tag.toUpperCase()}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: MATERI & DESKRIPSI (col-span-7 di mobile untuk kenyamanan baca teks) */}
          <div
            id="tipografi-arti-right-content"
            className="col-span-7 sm:col-span-7 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto pl-1 sm:pl-2"
          >
            <div
              id="tipografi-arti-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-center items-center text-center mx-auto py-1 sm:py-2 gap-2 sm:gap-2.5 lg:gap-3.5 2xl:gap-5 transition-all duration-300"
              style={{
                height: 'min(62vh, 520px)',
                maxHeight: '94%',
                minHeight: '140px'
              }}
            >
              {/* 1. Judul Tipe Font (Baris 1: Nama Utama, Baris 2: Keterangan) */}
              <div id="tipografi-arti-title-wrapper" className="w-full flex flex-col items-center shrink-0">
                <h2
                  id="tipografi-arti-title-text"
                  style={{ fontFamily: activeFont.fontFamily }}
                  className="font-serif font-black text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-[#004760] uppercase tracking-tight drop-shadow-sm leading-tight transition-all duration-200 flex flex-col items-center"
                >
                  {activeFont.name.includes('(') ? (
                    <>
                      <span>{activeFont.name.split('(')[0].trim()}</span>
                      <span className="text-[10px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-bold opacity-80 normal-case tracking-normal -mt-0.5">
                        ({activeFont.name.split('(')[1]}
                      </span>
                    </>
                  ) : activeFont.name.includes('/') ? (
                    <>
                      <span>{activeFont.name.split('/')[0].trim()}</span>
                      <span className="text-[10px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-bold opacity-80 normal-case tracking-normal -mt-0.5">
                        / {activeFont.name.split('/')[1].trim()}
                      </span>
                    </>
                  ) : (
                    activeFont.name
                  )}
                </h2>
              </div>

              {/* 2. Paragraf Deskripsi & Karakteristik */}
              <div
                id="tipografi-arti-desc-wrapper"
                className="w-full flex flex-col items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-3xl px-1 sm:px-2"
              >
                <p
                  id="tipografi-arti-description"
                  className="text-[9.5px] min-[360px]:text-[10.5px] sm:text-xs md:text-sm lg:text-[15px] 2xl:text-lg text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify mb-1.5 sm:mb-2 lg:mb-3 2xl:mb-4"
                >
                  {activeFont.description}
                </p>

                {/* Trait Pills (Hanya desktop: lg ke atas) */}
                <div
                  id="tipografi-arti-traits-container"
                  className="hidden lg:flex items-center justify-center gap-2 2xl:gap-3 flex-wrap w-full"
                >
                  {activeFont.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      id={`tipografi-arti-trait-${tIdx}`}
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

      {/* LAYER 3 (z-30): BOTTOM FONT SELECTOR DOCK (Memanjang 2 kotak saat aktif) */}
      <footer
        id="tipografi-arti-footer-buttons"
        className="w-full z-30 shrink-0 flex items-center justify-center px-2 sm:px-6 pt-1 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 2xl:pb-8 -translate-y-3 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-12 2xl:-translate-y-16"
      >
        <div
          id="tipografi-selector-buttons"
          className="flex flex-row items-center justify-center gap-1.5 min-[360px]:gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-full z-30"
        >
          {fontCategoryDetails.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={item.id}
                id={`tipografi-arti-button-${item.id}`}
                type="button"
                onClick={() => handleSelectFont(idx)}
                aria-label={item.name}
                style={{
                  backgroundColor: '#00a1db'
                }}
                className={`group relative flex items-center justify-center rounded-sm min-[360px]:rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl 2xl:rounded-3xl border-1.5 sm:border-2 lg:border-3 2xl:border-4 border-[#004760] transition-all duration-300 ease-out cursor-pointer shadow-[1px_1px_0px_#00354c] min-[360px]:shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[2px_2px_0px_#00354c] lg:shadow-[3px_3px_0px_#00354c] 2xl:shadow-[5px_5px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] select-none shrink-0 outline-none focus:outline-none focus-visible:outline-none ${
                  isSelected
                    ? '-translate-y-0.5 sm:-translate-y-1.5 2xl:-translate-y-3 shadow-[2px_2px_0px_#00354c] sm:shadow-[4px_4px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] 2xl:shadow-[9px_9px_0px_#00354c] w-12 min-[360px]:w-14 sm:w-[96px] md:w-[120px] lg:w-[150px] xl:w-[170px] 2xl:w-[220px] px-1'
                    : 'hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#00354c] 2xl:hover:shadow-[6px_6px_0px_#00354c] w-5 min-[360px]:w-6 sm:w-10 md:w-13 lg:w-16 xl:w-18 2xl:w-24'
                } h-5 min-[360px]:h-6 sm:h-10 md:h-13 lg:h-16 xl:h-18 2xl:h-24`}
              >
                {isSelected ? (
                  <span className="font-serif font-black text-[8px] min-[360px]:text-[9px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg select-none tracking-wider uppercase truncate px-1 text-white">
                    {item.shortName}
                  </span>
                ) : (
                  <span
                    style={{ fontFamily: item.fontFamily }}
                    className="font-serif font-black text-[10px] sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white select-none"
                  >
                    {item.sampleLetter[0]}
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
