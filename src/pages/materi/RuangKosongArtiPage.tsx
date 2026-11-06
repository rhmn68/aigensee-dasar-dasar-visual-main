import { InteractionGuide } from '../../components/ColorGuide';
import { InlineIcon } from '../../components/InlineIcon';
import React, { useState } from 'react';
import { playClick } from '../../utils/audio';
import { ArrowLeft, Home, Maximize2, Minimize2, Sliders, Eye } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';

const macroGuideSteps = [
  {
    target: 'ruang-kosong-arti-canvas-card',
    title: "Amati Ruang di Sekeliling Kanvas",
    description: 'Perhatikan jarak antara bingkai putus-putus dan kotak putih di dalamnya. Jarak ini adalah margin: ruang makro yang memberi elemen tempat untuk bernapas.',
  },
  {
    target: 'ruang-makro-simulation-controls',
    title: "Bandingkan Sesak, Sedang, dan Lega",
    description: 'Klik Sesak, Sedang, atau Lega untuk mengubah margin pada kanvas. Amati bagaimana ruang di tepi menyempit atau melebar, lalu bandingkan tampilan yang terasa paling nyaman.',
  },
];

interface RuangKosongArtiPageProps {
  onBack: () => void;
  onHome: () => void;
}

interface SpacePrincipleDetail {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  iconName: string;
  description: string;
  traits: string[];
  themeColor: string;
  demoType: 'macro' | 'micro' | 'proximity' | 'focus' | 'rhythm';
}

const spacePrinciples: SpacePrincipleDetail[] = [
  {
    id: 'makro',
    name: 'Ruang Makro (Macro Space)',
    shortName: 'Makro',
    badge: "Prinsip Ruang #1 · Makro",
    iconName: 'Layout',
    description: 'Ruang kosong besar di sekeliling layout utama dan margin tepi kanvas. Ruang makro berfungsi seperti bingkai tak terlihat yang memisahkan karya dari lingkungan luar, memberikan napas pertama bagi audiens, dan mencegah elemen menempel kaku ke batas layar.',
    traits: ['Margin Luas', 'Lega & Tenang', 'Bingkai Alami', 'Bebas Sesak'],
    themeColor: '#00a1db',
    demoType: 'macro'
  },
  {
    id: 'mikro',
    name: 'Ruang Mikro (Micro Space)',
    shortName: 'Mikro',
    badge: "Prinsip Ruang #2 · Mikro",
    iconName: 'AlignJustify',
    description: 'Jeda halus berukuran kecil di antara kata, antarhuruf (kerning), dan antarbaris kalimat (leading). Ruang mikro menjamin teks mudah dicerna tanpa membuat mata pembaca cepat lelah.',
    traits: ['Keterbacaan', 'Spasi Baris', 'Kerning Presisi', 'Jeda Halus'],
    themeColor: '#10b981',
    demoType: 'micro'
  },
  {
    id: 'proksimitas',
    name: 'Hukum Proksimitas (Proximity)',
    shortName: 'Proksimitas',
    badge: "Prinsip Ruang #3 · Proksimitas",
    iconName: 'MoveHorizontal',
    description: 'Elemen-elemen yang saling berhubungan didekatkan posisinya, sementara elemen yang berbeda topik diberi jarak ruang kosong yang lebih lebar. Ini membantu audiens memproses kelompok informasi secara logis dan cepat.',
    traits: ['Pengelompokan', 'Struktur Logis', 'Alur Pikiran', 'Hirarki Cepat'],
    themeColor: '#8b5cf6',
    demoType: 'proximity'
  },
  {
    id: 'fokus',
    name: 'Fokus Melalui Ruang (Isolation)',
    shortName: 'Fokus',
    badge: "Prinsip Ruang #4 · Fokus",
    iconName: 'Eye',
    description: 'Sebuah objek yang dikelilingi oleh banyak ruang kosong akan langsung menarik perhatian mata sebelum hal lainnya. Ruang kosong menjadi lampu sorot visual alami tanpa perlu warna yang terlalu mencolok.',
    traits: ['Pusat Perhatian', 'Daya Tarik Kuat', 'Minimalis', 'Sorotan Instan'],
    themeColor: '#ea580c',
    demoType: 'focus'
  },
  {
    id: 'irama',
    name: 'Irama Napas (Visual Rhythm)',
    shortName: 'Irama',
    badge: "Prinsip Ruang #5 · Irama Napas",
    iconName: 'Maximize2',
    description: 'Variasi jarak rapat dan renggang secara berirama dalam sebuah karya. Menciptakan dinamika yang hidup seperti musik, di mana nada dan jeda hening saling melengkapi keindahan alur komposisi.',
    traits: ['Harmoni Dinamis', 'Variasi Irama', 'Keseimbangan', 'Karya Berkelas'],
    themeColor: '#f59e0b',
    demoType: 'rhythm'
  }
];

export function RuangKosongArtiPage({ onBack, onHome }: RuangKosongArtiPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [spaceLevel, setSpaceLevel] = useState<'sesak' | 'sedang' | 'lega'>('lega');

  const activePrinciple = spacePrinciples[selectedIndex];

  const handleSelectPrinciple = (index: number) => {
    playClick();
    setSelectedIndex(index);
  };

  const handleSpaceChange = (level: 'sesak' | 'sedang' | 'lega') => {
    playClick();
    setSpaceLevel(level);
  };

  return (
    <div
      id="ruang-kosong-arti-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME */}
      {activePrinciple.id === 'makro' && <InteractionGuide steps={macroGuideSteps} label="Panduan Ruang Makro" />}
      <BackgroundFrame idPrefix="ruang-kosong-arti" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Aksi)            */}
      {/* ========================================================================= */}
      <header
        id="ruang-kosong-arti-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div
          id="ruang-kosong-arti-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]"
        >
          <img
            id="ruang-kosong-arti-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>

        <div
          id="ruang-kosong-arti-header-actions"
          className="flex items-center gap-1.5 sm:gap-2.5 pointer-events-auto translate-y-1.5 sm:translate-y-2 md:translate-y-2.5 2xl:translate-y-3"
        >
          {/* Tombol Beranda */}
          <button
            id="ruang-kosong-arti-btn-home"
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
            id="ruang-kosong-arti-btn-back"
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
        id="ruang-kosong-arti-header-spacer"
        className="w-full h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Visualizer, Kanan Materi)       */}
      {/* ========================================================================= */}
      <main
        id="ruang-kosong-arti-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="ruang-kosong-arti-grid"
          className="grid grid-cols-12 gap-2.5 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* SISI KIRI: SIMULATOR RUANG NAPAS INTERAKTIF (col-span-5 di mobile) */}
          <div
            id="ruang-kosong-arti-left-container"
            className="col-span-5 sm:col-span-5 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="ruang-kosong-arti-canvas-card"
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
              {/* Center Dynamic Visualizer Simulation */}
              <div className="w-full flex-1 flex flex-col items-center justify-center my-auto px-1 sm:px-2 overflow-hidden">
                {/* 1. DEMO MAKRO: Margin Kanvas Luas vs Sempit */}
                {activePrinciple.demoType === 'macro' && (
                  <div
                    className={`w-full h-full max-h-[170px] sm:max-h-[220px] bg-[#FAF8F5] rounded-xl border-2 border-dashed border-[#004760] flex items-center justify-center transition-all duration-300 ${
                      spaceLevel === 'sesak'
                        ? 'p-0.5'
                        : spaceLevel === 'sedang'
                        ? 'p-3 sm:p-4'
                        : 'p-5 sm:p-7'
                    }`}
                  >
                    <div className="w-full h-full bg-white rounded-lg border-2 border-[#004760] shadow-[2px_2px_0px_#00354c] flex flex-col items-center justify-center p-2 text-center">
                      <span className="font-serif font-black text-[9px] min-[360px]:text-[10px] sm:text-xs text-[#004760] ">
                        {spaceLevel === 'sesak' ? <><InlineIcon name="TriangleAlert" />{" Kanvas Sesak"}</> : <>{" Kanvas Lega"}</>}
                      </span>
                      <p className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] text-slate-600 mt-0.5 leading-snug">
                        {spaceLevel === 'sesak' ? 'Elemen menempel ke tepi' : 'Margin memberi ruang bernapas'}
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. DEMO MIKRO: Jarak Antar Teks/Elemen Halus */}
                {activePrinciple.demoType === 'micro' && (
                  <div className="w-full bg-[#FAF8F5] rounded-xl border-2 border-[#004760] p-2 sm:p-3 text-center flex flex-col items-center justify-center">
                    <h5
                      style={{
                        letterSpacing: spaceLevel === 'sesak' ? '-1px' : spaceLevel === 'sedang' ? '1px' : '4px',
                        lineHeight: spaceLevel === 'sesak' ? '1' : spaceLevel === 'sedang' ? '1.3' : '1.7'
                      }}
                      className="font-serif font-black text-xs min-[360px]:text-sm sm:text-base lg:text-lg text-[#004760]  transition-all duration-300"
                    >
                      Keterbacaan Huruf
                    </h5>
                    <p
                      style={{
                        lineHeight: spaceLevel === 'sesak' ? '1.1' : spaceLevel === 'sedang' ? '1.4' : '1.8'
                      }}
                      className="text-[8px] min-[360px]:text-[9px] sm:text-xs text-slate-700 mt-1 transition-all duration-300"
                    >
                      Jeda mikro antarhuruf dan baris menjamin mata tidak cepat lelah saat membaca.
                    </p>
                  </div>
                )}

                {/* 3. DEMO PROKSIMITAS: Pengelompokan Logis */}
                {activePrinciple.demoType === 'proximity' && (
                  <div
                    className={`w-full bg-[#FAF8F5] rounded-xl border-2 border-[#004760] p-2 flex flex-col items-center justify-center transition-all duration-300 ${
                      spaceLevel === 'sesak' ? 'gap-1' : spaceLevel === 'sedang' ? 'gap-2' : 'gap-3 sm:gap-4'
                    }`}
                  >
                    <div className="flex gap-1.5 w-full justify-center">
                      <span className="px-2 py-1 rounded bg-[#f9db00] text-[#004760] font-black text-[8px] sm:text-[9px] border border-[#004760]">
                        Kelompok Judul A
                      </span>
                      <span className="px-2 py-1 rounded bg-[#f9db00] text-[#004760] font-black text-[8px] sm:text-[9px] border border-[#004760]">
                        Info A
                      </span>
                    </div>
                    <div className="flex gap-1.5 w-full justify-center">
                      <span className="px-2 py-1 rounded bg-[#00a1db] text-white font-black text-[8px] sm:text-[9px] border border-[#004760]">
                        Kelompok Topik B
                      </span>
                      <span className="px-2 py-1 rounded bg-[#00a1db] text-white font-black text-[8px] sm:text-[9px] border border-[#004760]">
                        Info B
                      </span>
                    </div>
                  </div>
                )}

                {/* 4. DEMO FOKUS / ISOLATION (Perbandingan Nyata: Dikelilingi Gangguan vs Terisolasi Bersih) */}
                {activePrinciple.demoType === 'focus' && (
                  <div className="w-full h-full max-h-[160px] sm:max-h-[200px] bg-[#FAF8F5] rounded-xl border-2 border-[#004760] flex flex-col items-center justify-center p-2 relative overflow-hidden transition-all duration-300">
                    {/* Saat SESAK: Banyak elemen gangguan bertumpuk di sekitar fokus */}
                    {spaceLevel === 'sesak' && (
                      <div className="grid grid-cols-3 gap-1 w-full max-w-[210px] items-center justify-items-center opacity-90 transition-all duration-300">
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Iklan Bising</div>
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Banner Promo</div>
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Teks Acak</div>
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Stiker Grafis</div>
                        <div className="bg-[#ea580c] text-white px-2 py-1 rounded-lg border-2 border-[#004760] shadow-[1px_1px_0px_#00354c] text-center scale-90">
                          <Eye className="w-3 h-3 mx-auto" />
                          <span className="font-serif font-black text-[7.5px]  block">Tenggelam</span>
                        </div>
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Tombol Lain</div>
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Garis Hiasan</div>
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Label Info</div>
                        <div className="p-1 rounded bg-slate-200 border border-slate-400 text-[7px] text-slate-600 font-bold">Gambar Mini</div>
                      </div>
                    )}

                    {/* Saat SEDANG: Gangguan mulai berkurang menjauh */}
                    {spaceLevel === 'sedang' && (
                      <div className="flex flex-col items-center justify-center gap-2 w-full transition-all duration-300">
                        <div className="flex justify-between w-full max-w-[200px] text-[7.5px] text-slate-400">
                          <span>• elemen latar</span>
                          <span>elemen latar •</span>
                        </div>
                        <div className="bg-[#ea580c] text-white px-3.5 py-1.5 rounded-xl border-2 border-[#004760] shadow-[2px_2px_0px_#00354c] text-center scale-100">
                          <Eye className="w-4 h-4 mx-auto mb-0.5" />
                          <span className="font-serif font-black text-[8.5px] sm:text-[9.5px]  block">
                            Fokus Terlihat
                          </span>
                        </div>
                        <div className="flex justify-between w-full max-w-[200px] text-[7.5px] text-slate-400">
                          <span>• elemen latar</span>
                          <span>elemen latar •</span>
                        </div>
                      </div>
                    )}

                    {/* Saat LEGA: Ruang kosong luas murni mengisolasi objek utama sebagai pusat perhatian seketika */}
                    {spaceLevel === 'lega' && (
                      <div className="flex flex-col items-center justify-center w-full h-full p-4 transition-all duration-500 animate-fadeIn">
                        <div className="bg-[#ea580c] text-white px-5 py-3 rounded-2xl border-2 sm:border-3 border-[#004760] shadow-[3px_3px_0px_#00354c] sm:shadow-[4px_4px_0px_#00354c] text-center transform scale-110 sm:scale-125 transition-transform duration-300">
                          <Eye className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 animate-bounce" />
                          <span className="font-serif font-black text-[10px] sm:text-xs  tracking-wider block">
                            Pusat Perhatian Murni
                          </span>
                          <span className="text-[7.5px] sm:text-[8.5px] font-bold opacity-90 block">
                            100% Bebas Gangguan
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 5. DEMO IRAMA / RHYTHM */}
                {activePrinciple.demoType === 'rhythm' && (
                  <div className="w-full bg-[#FAF8F5] rounded-xl border-2 border-[#004760] p-2.5 flex items-center justify-center gap-1.5 sm:gap-2">
                    <div className="w-4 h-12 bg-[#004760] rounded-md transition-all duration-300" />
                    <div className={`h-12 bg-[#00a1db] rounded-md transition-all duration-300 ${spaceLevel === 'sesak' ? 'w-2' : spaceLevel === 'sedang' ? 'w-6' : 'w-10'}`} />
                    <div className="w-4 h-12 bg-[#004760] rounded-md transition-all duration-300" />
                    <div className={`h-12 bg-[#f9db00] rounded-md transition-all duration-300 ${spaceLevel === 'sesak' ? 'w-2' : spaceLevel === 'sedang' ? 'w-8' : 'w-12'}`} />
                  </div>
                )}
              </div>

              {/* Bottom Interactive Controls: Tingkat Ruang Napas (Sesak / Sedang / Lega) */}
              <div id="ruang-makro-simulation-controls" className="w-full border-t border-slate-200 pt-1 shrink-0 flex items-center justify-between px-0.5 text-[8px] min-[360px]:text-[9px] sm:text-xs text-slate-600 font-bold">
                <span className="text-[#004760] font-black">Simulasi Ruang:</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleSpaceChange('sesak')}
                    className={`px-1.5 py-0.5 rounded  font-black transition-all cursor-pointer ${
                      spaceLevel === 'sesak'
                        ? 'bg-[#004760] text-white shadow-[1px_1px_0px_#00354c]'
                        : 'bg-slate-100 text-[#004760] hover:bg-sky-50'
                    }`}
                  >
                    Sesak
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSpaceChange('sedang')}
                    className={`px-1.5 py-0.5 rounded  font-black transition-all cursor-pointer ${
                      spaceLevel === 'sedang'
                        ? 'bg-[#004760] text-white shadow-[1px_1px_0px_#00354c]'
                        : 'bg-slate-100 text-[#004760] hover:bg-sky-50'
                    }`}
                  >
                    Sedang
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSpaceChange('lega')}
                    className={`px-1.5 py-0.5 rounded  font-black transition-all cursor-pointer ${
                      spaceLevel === 'lega'
                        ? 'bg-[#004760] text-white shadow-[1px_1px_0px_#00354c]'
                        : 'bg-slate-100 text-[#004760] hover:bg-sky-50'
                    }`}
                  >
                    Lega
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: MATERI & DESKRIPSI (col-span-7 di mobile) */}
          <div
            id="ruang-kosong-arti-right-content"
            className="col-span-7 sm:col-span-7 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto pl-1 sm:pl-2"
          >
            <div
              id="ruang-kosong-arti-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-center items-center text-center mx-auto py-1 sm:py-2 gap-2 sm:gap-2.5 lg:gap-3.5 2xl:gap-5 transition-all duration-300"
              style={{
                height: 'min(62vh, 520px)',
                maxHeight: '94%',
                minHeight: '140px'
              }}
            >
              {/* 1. Judul Prinsip (Baris 1: Nama Utama, Baris 2: Makna/Keterangan) */}
              <div id="ruang-kosong-arti-title-wrapper" className="w-full flex flex-col items-center shrink-0">
                <h2
                  id="ruang-kosong-arti-title-text"
                  className="font-serif font-black text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-[#004760]  tracking-tight drop-shadow-sm leading-tight transition-all duration-200 flex flex-col items-center"
                >
                  {activePrinciple.name.includes('(') ? (
                    <>
                      <span>{activePrinciple.name.split('(')[0].trim()}</span>
                      <span className="text-[10px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-bold opacity-80 normal-case tracking-normal -mt-0.5">
                        ({activePrinciple.name.split('(')[1]}
                      </span>
                    </>
                  ) : (
                    activePrinciple.name
                  )}
                </h2>
              </div>

              {/* 2. Paragraf Deskripsi & Karakteristik */}
              <div
                id="ruang-kosong-arti-desc-wrapper"
                className="w-full flex flex-col items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-3xl px-1 sm:px-2"
              >
                <p
                  id="ruang-kosong-arti-description"
                  className="text-[9.5px] min-[360px]:text-[10.5px] sm:text-xs md:text-sm lg:text-[15px] 2xl:text-lg text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify mb-1.5 sm:mb-2 lg:mb-3 2xl:mb-4"
                >
                  {activePrinciple.description}
                </p>

                {/* Trait Pills (Hanya desktop: lg ke atas) */}
                <div
                  id="ruang-kosong-arti-traits-container"
                  className="hidden lg:flex items-center justify-center gap-2 2xl:gap-3 flex-wrap w-full"
                >
                  {activePrinciple.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      id={`ruang-kosong-arti-trait-${tIdx}`}
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

      {/* LAYER 3 (z-30): BOTTOM PRINCIPLE SELECTOR DOCK (Memanjang 2 kotak saat aktif) */}
      <footer
        id="ruang-kosong-arti-footer-buttons"
        className="w-full z-30 shrink-0 flex items-center justify-center px-2 sm:px-6 pt-1 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 2xl:pb-8 -translate-y-3 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-12 2xl:-translate-y-16"
      >
        <div
          id="ruang-kosong-selector-buttons"
          className="flex flex-row items-center justify-center gap-1.5 min-[360px]:gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-full z-30"
        >
          {spacePrinciples.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={item.id}
                id={`ruang-kosong-arti-button-${item.id}`}
                type="button"
                onClick={() => handleSelectPrinciple(idx)}
                aria-label={item.name}
                style={{
                  backgroundColor: '#00a1db'
                }}
                className={`group relative flex items-center justify-center rounded-sm min-[360px]:rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl 2xl:rounded-3xl border-1.5 sm:border-2 lg:border-3 2xl:border-4 border-[#004760] transition-all duration-300 ease-out cursor-pointer shadow-[1px_1px_0px_#00354c] min-[360px]:shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[2px_2px_0px_#00354c] lg:shadow-[3px_3px_0px_#00354c] 2xl:shadow-[5px_5px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] select-none shrink-0 outline-none focus:outline-none focus-visible:outline-none ${
                  isSelected
                    ? '-translate-y-0.5 sm:-translate-y-1.5 2xl:-translate-y-3 shadow-[2px_2px_0px_#00354c] sm:shadow-[4px_4px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] 2xl:shadow-[9px_9px_0px_#00354c] w-14 min-[360px]:w-16 sm:w-[96px] md:w-[120px] lg:w-[150px] xl:w-[170px] 2xl:w-[220px] px-1'
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
