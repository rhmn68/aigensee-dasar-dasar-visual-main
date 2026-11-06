import { InteractionGuide } from '../../components/ColorGuide';
import { InlineIcon } from '../../components/InlineIcon';
import React, { useState } from 'react';
import { playClick } from '../../utils/audio';
import { ArrowLeft, Home, Scale } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';

const balanceGuideSteps = [
  {
    target: 'keseimbangan-selector-buttons',
    title: "Jelajahi Jenis Keseimbangan",
    description: 'Klik pilihan 2, 3, atau 4 di bawah untuk melihat keseimbangan Asimetris, Radial, dan Mosaik. Ilustrasi serta penjelasannya akan berubah.',
  },
];

interface KeseimbanganArtiPageProps {
  onBack: () => void;
  onHome: () => void;
}

interface BalanceTypeDetail {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  description: string;
  traits: string[];
  themeColor: string;
  tilt: number;
  leftItems: React.ReactNode[];
  rightItems: React.ReactNode[];
}

const balanceTypeDetails: BalanceTypeDetail[] = [
  {
    id: 'simetris',
    name: 'Keseimbangan Simetris (Formal)',
    shortName: 'Simetris',
    badge: "Tipe Keseimbangan #1 · Simetris",
    description: 'Elemen di sisi kiri dan kanan poros tengah memiliki bobot, ukuran, dan bentuk yang persis sama atau serupa seperti pantulan cermin. Menghadirkan kesan agung, berwibawa, stabil, dan teratur. Sering digunakan pada logo institusi resmi, gedung pemerintahan, dan karya bernuansa formal.',
    traits: ['Stabil & Tenang', 'Cermin Simetris', 'Wibawa Formal', 'Teratur'],
    themeColor: '#004760',
    tilt: 0,
    leftItems: [<><InlineIcon name="Landmark" /></>, <><InlineIcon name="DraftingCompass" /></>],
    rightItems: [<><InlineIcon name="Landmark" /></>, <><InlineIcon name="DraftingCompass" /></>]
  },
  {
    id: 'asimetris',
    name: 'Keseimbangan Asimetris (Dinamis)',
    shortName: 'Asimetris',
    badge: "Tipe Keseimbangan #2 · Asimetris",
    description: 'Elemen di kedua sisi berbeda bentuk dan ukurannya, namun bobot visualnya tetap seimbang melalui permainan kontras warna, posisi, dan ruang kosong. Memberikan kesan modern, energetik, dan memancing rasa penasaran audiens tanpa terlihat miring atau berat sebelah.',
    traits: ['Modern & Hidup', 'Kontras Bobot', 'Energetik', 'Dinamis'],
    themeColor: '#00a1db',
    tilt: 0,
    leftItems: [<><InlineIcon name="Palette" /></>],
    rightItems: [<><InlineIcon name="Star" /></>, <></>, <><InlineIcon name="Tag" /></>]
  },
  {
    id: 'radial',
    name: 'Keseimbangan Radial (Melingkar)',
    shortName: 'Radial',
    badge: "Tipe Keseimbangan #3 · Radial",
    description: 'Seluruh elemen visual memancar keluar dari satu titik pusat tengah layaknya sinar matahari, riak air, atau kelopak bunga. Sangat ampuh untuk mengarahkan pandangan audiens langsung ke titik fokus inti di tengah desain.',
    traits: ['Pusat Inti', 'Memancar Rata', 'Fokus Sentral', 'Riak Harmoni'],
    themeColor: '#ea580c',
    tilt: 0,
    leftItems: [<><InlineIcon name="Sun" /></>],
    rightItems: [<><InlineIcon name="Sun" /></>]
  },
  {
    id: 'kristalografis',
    name: 'Keseimbangan Mosaik (All-Over)',
    shortName: 'Mosaik',
    badge: "Tipe Keseimbangan #4 · Mosaik",
    description: 'Penataan elemen dengan bobot visual yang tersebar merata ke seluruh bidang tanpa ada satu objek yang terlalu mendominasi. Memberikan kesan tekstur kaya, ramai beraturan, dan keindahan pola berkelanjutan.',
    traits: ['Tersebar Merata', 'Pola Berulang', 'Mosaik Kaya', 'Tekstur Rapi'],
    themeColor: '#10b981',
    tilt: 0,
    leftItems: [<><InlineIcon name="Puzzle" /></>, <><InlineIcon name="Puzzle" /></>],
    rightItems: [<><InlineIcon name="Puzzle" /></>, <><InlineIcon name="Puzzle" /></>]
  }
];

export function KeseimbanganArtiPage({ onBack, onHome }: KeseimbanganArtiPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const activeBalance = balanceTypeDetails[selectedIndex];

  const handleSelectBalance = (index: number) => {
    playClick();
    setSelectedIndex(index);
  };

  return (
    <div
      id="keseimbangan-arti-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME */}
      {activeBalance.id === 'simetris' && <InteractionGuide steps={balanceGuideSteps} label="Panduan Keseimbangan" />}
      <BackgroundFrame idPrefix="keseimbangan-arti" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Aksi)            */}
      {/* ========================================================================= */}
      <header
        id="keseimbangan-arti-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div
          id="keseimbangan-arti-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]"
        >
          <img
            id="keseimbangan-arti-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>

        <div
          id="keseimbangan-arti-header-actions"
          className="flex items-center gap-1.5 sm:gap-2.5 pointer-events-auto translate-y-1.5 sm:translate-y-2 md:translate-y-2.5 2xl:translate-y-3"
        >
          <span id="module-music-control" className="flex items-center" />
          <button
            id="keseimbangan-arti-btn-home"
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
          <button
            id="keseimbangan-arti-btn-back"
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
        id="keseimbangan-arti-header-spacer"
        className="w-full h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Timbangan, Kanan Materi)        */}
      {/* ========================================================================= */}
      <main
        id="keseimbangan-arti-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="keseimbangan-arti-grid"
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* SISI KIRI: SIMULATOR TIMBANGAN BOBOT VISUAL (col-span-6) */}
          <div
            id="keseimbangan-arti-left-container"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="keseimbangan-arti-balance-card"
              className="relative flex flex-col justify-between items-center transition-all duration-300 mx-auto aspect-square rounded-2xl lg:rounded-3xl border-2 sm:border-3 border-[#004760] bg-white shadow-[4px_4px_0px_#00354c] sm:shadow-[5px_5px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] overflow-hidden p-3 sm:p-5 lg:p-6 select-none"
              style={{
                height: 'min(62vh, 520px)',
                maxHeight: '94%',
                maxWidth: '100%',
                minHeight: '180px',
                aspectRatio: '1 / 1',
                width: 'auto'
              }}
            >
              {/* Header Visualizer */}
              <div id="keseimbangan-arti-card-header" className="w-full flex items-center justify-between border-b-2 border-[#004760] pb-1.5 sm:pb-2">
                <span id="keseimbangan-arti-card-title" className="font-serif font-black text-[9px] sm:text-xs lg:text-sm text-[#004760]  tracking-wider">
                  Timbangan Bobot Visual
                </span>
                <span
                  style={{ backgroundColor: activeBalance.themeColor }}
                  className="px-2 py-0.5 rounded-full text-white text-[9px] sm:text-[10px] font-black tracking-wider  border border-[#004760]"
                >
                  {activeBalance.shortName}
                </span>
              </div>

              {/* Center Seesaw / Balance Demo */}
              <div className="w-full flex-1 flex flex-col items-center justify-center my-auto px-2 relative">
                {activeBalance.id === 'radial' ? (
                  /* Radial Visualizer: Lingkaran pusat memancar */
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-dashed border-[#004760] flex items-center justify-center bg-[#FAF8F5]">
                    <div className="w-12 h-12 rounded-full bg-[#ea580c] border-2 border-[#004760] flex items-center justify-center text-white font-black text-lg shadow-sm">
                      <InlineIcon name="Sun" />
                    </div>
                    {['top-1 left-1/2 -translate-x-1/2', 'bottom-1 left-1/2 -translate-x-1/2', 'left-1 top-1/2 -translate-y-1/2', 'right-1 top-1/2 -translate-y-1/2'].map((pos, pIdx) => (
                      <div key={pIdx} className={`absolute ${pos} w-7 h-7 rounded-full bg-white border-2 border-[#004760] flex items-center justify-center text-xs shadow-xs`}>

                      </div>
                    ))}
                  </div>
                ) : activeBalance.id === 'kristalografis' ? (
                  /* Mosaik Visualizer: Pola grid merata */
                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#FAF8F5] rounded-2xl border-2 border-[#004760] w-full max-w-[240px]">
                    {[<><InlineIcon name="Flower2" /></>, <><InlineIcon name="Leaf" /></>, <><InlineIcon name="Star" /></>, <><InlineIcon name="Gem" /></>, <><InlineIcon name="Palette" /></>, <><InlineIcon name="DraftingCompass" /></>, <><InlineIcon name="Tag" /></>, <></>, <><InlineIcon name="Sprout" /></>].map((icon, idx) => (
                      <div key={idx} className="aspect-square rounded-xl bg-white border border-[#004760] flex items-center justify-center text-sm sm:text-base shadow-xs">
                        {icon}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Simetris / Asimetris: Jungkat-jungkit Timbangan */
                  <div id="keseimbangan-arti-seesaw-container" className="w-full max-w-[260px] flex flex-col items-center">
                    {/* Beam Jungkat-jungkit */}
                    <div
                      style={{
                        transform: `rotate(${activeBalance.tilt}deg)`
                      }}
                      className="w-full h-3 bg-[#004760] rounded-full relative flex items-center justify-between px-2 transition-transform duration-500 shadow-sm"
                    >
                      {/* Baki Kiri */}
                      <div className="absolute -top-10 left-1 flex items-center gap-1 bg-white border-2 border-[#004760] rounded-xl p-1.5 shadow-xs">
                        {activeBalance.leftItems.map((it, i) => (
                          <span key={i} className="text-base sm:text-lg">{it}</span>
                        ))}
                      </div>

                      {/* Baki Kanan */}
                      <div className="absolute -top-10 right-1 flex items-center gap-1 bg-white border-2 border-[#004760] rounded-xl p-1.5 shadow-xs">
                        {activeBalance.rightItems.map((it, i) => (
                          <span key={i} className="text-base sm:text-lg">{it}</span>
                        ))}
                      </div>
                    </div>

                    {/* Tumpuan Segitiga (Fulcrum) */}
                    <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[30px] border-b-[#f9db00] mt-1 relative drop-shadow-sm" />
                    <div className="w-24 h-2 bg-[#004760] rounded-full mt-1" />
                  </div>
                )}
              </div>

              {/* Bottom Quick Controls */}
              <div id="keseimbangan-arti-card-footer" className="w-full flex items-center justify-between border-t border-slate-200 pt-1.5 text-[10px] sm:text-xs text-slate-600">
                <span className="font-bold text-[#004760]">
                  Status: Seimbang Harmonis ✓
                </span>
                <span className="font-black text-[#00a1db]">
                  Bobot Terbagi Rata
                </span>
              </div>
            </div>
          </div>

          {/* SISI KANAN: MATERI & DESKRIPSI (col-span-6) */}
          <div
            id="keseimbangan-arti-right-content"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto"
          >
            <div
              id="keseimbangan-arti-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-center items-center text-center mx-auto py-1 lg:py-2 gap-2.5 sm:gap-3.5 lg:gap-4.5 2xl:gap-6 transition-all duration-300"
              style={{
                height: 'min(62vh, 520px)',
                maxHeight: '94%',
                minHeight: '180px'
              }}
            >
              {/* 1. Badge & Judul Tipe Keseimbangan */}
              <div id="keseimbangan-arti-title-wrapper" className="w-full flex flex-col items-center shrink-0">
                <span
                  id="keseimbangan-arti-badge"
                  className="font-serif font-black text-[9px] sm:text-xs lg:text-sm text-[#004760]  tracking-widest px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border-1.5 sm:border-2 border-[#004760] bg-white shadow-[2px_2px_0px_#00354c] mb-1 sm:mb-1.5"
                >
                  {activeBalance.badge}
                </span>

                <h2
                  id="keseimbangan-arti-title-text"
                  className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-[#004760]  tracking-tight drop-shadow-sm leading-tight transition-all duration-200"
                >
                  {activeBalance.name}
                </h2>
              </div>

              {/* 2. Paragraf Deskripsi & Karakteristik */}
              <div
                id="keseimbangan-arti-desc-wrapper"
                className="w-full flex flex-col items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-3xl px-1 sm:px-2 my-auto"
              >
                <p
                  id="keseimbangan-arti-description"
                  className="text-xs sm:text-[13px] md:text-sm lg:text-[15px] 2xl:text-lg text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify mb-2 sm:mb-2.5 lg:mb-3 2xl:mb-4"
                >
                  {activeBalance.description}
                </p>

                {/* Trait Pills */}
                <div
                  id="keseimbangan-arti-traits-container"
                  className="hidden lg:flex items-center justify-center gap-2 2xl:gap-3 flex-wrap w-full"
                >
                  {activeBalance.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      id={`keseimbangan-arti-trait-${tIdx}`}
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

      {/* LAYER 3 (z-30): BOTTOM BALANCE TYPE SELECTOR DOCK (Memanjang 2 kotak saat aktif) */}
      <footer
        id="keseimbangan-arti-footer-buttons"
        className="w-full z-30 shrink-0 flex items-center justify-center px-3 sm:px-6 pt-1 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 2xl:pb-8 -translate-y-3 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-12 2xl:-translate-y-16"
      >
        <div
          id="keseimbangan-selector-buttons"
          className="flex flex-row items-center justify-center gap-1.5 min-[360px]:gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-full z-30"
        >
          {balanceTypeDetails.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={item.id}
                id={`keseimbangan-arti-button-${item.id}`}
                type="button"
                onClick={() => handleSelectBalance(idx)}
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
                  <span className="font-serif font-black text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg select-none tracking-wider  truncate px-1 text-white">
                    {item.shortName}
                  </span>
                ) : (
                  <span className="font-serif font-black text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white select-none">
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
