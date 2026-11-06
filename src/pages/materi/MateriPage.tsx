import { InlineIcon } from '../../components/InlineIcon';
import React, { useState } from 'react';
import { MateriId } from '../../types';
import { allMateris, robotImages } from '../../data/materiData';
import { ColorLab } from '../../components/labs/ColorLab';
import { TypographyLab } from '../../components/labs/TypographyLab';
import { SpaceLab } from '../../components/labs/SpaceLab';
import { BalanceLab } from '../../components/labs/BalanceLab';
import { SummaryLab } from '../../components/labs/SummaryLab';
import { playClick } from '../../utils/audio';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';


interface MateriPageProps {
  currentMateriId: MateriId;
  onBackToSplash: () => void;
  onSelectMateri: (id: MateriId) => void;
}

const materiOrder: MateriId[] = ['warna', 'tipografi', 'ruang-kosong', 'keseimbangan', 'contoh-desain'];

export function MateriPage({
  currentMateriId,
  onBackToSplash,
  onSelectMateri
}: MateriPageProps) {
  const materi = allMateris[currentMateriId] || allMateris['warna'];
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const activeSub = materi.subMateriList[activeSubIndex] || materi.subMateriList[0];
  const shotImg = (robotImages as any)[activeSub.shotImageKey] || materi.shotImageHero;

  const currentModuleIndex = materiOrder.indexOf(currentMateriId);
  const nextModuleId = currentModuleIndex + 1 < materiOrder.length ? materiOrder[currentModuleIndex + 1] : null;

  const handleNextSub = () => {
    playClick();
    if (activeSubIndex + 1 < materi.subMateriList.length) {
      setActiveSubIndex((i) => i + 1);
    } else if (nextModuleId) {
      setActiveSubIndex(0);
      onSelectMateri(nextModuleId);
    } else {
      onBackToSplash();
    }
  };

  const handlePrevSub = () => {
    playClick();
    if (activeSubIndex > 0) {
      setActiveSubIndex((i) => i - 1);
    }
  };

  const handleSelectSub = (index: number) => {
    playClick();
    setActiveSubIndex(index);
  };

  const handleSwitchMateri = (id: MateriId) => {
    playClick();
    setActiveSubIndex(0);
    onSelectMateri(id);
  };

  return (
    <div
      id="materi-page"
      className="h-screen w-screen bg-[#FAF8F5] bg-paper-grid flex flex-col justify-between p-3 sm:p-4 md:p-5 overflow-hidden text-slate-900 select-none"
    >
      {/* Top Header Bar */}
      <header
        id="materi-header"
        className="flex items-center justify-between bg-white/90 backdrop-blur-sm border-2 border-slate-900 rounded-2xl px-3 sm:px-4 py-2 shadow-[3px_3px_0px_#0f172a] shrink-0"
      >
        {/* Left: Back & Pusbuk Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => {
              playClick();
              onBackToSplash();
            }}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl border-2 border-slate-900 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Beranda</span>
          </button>

          <img
            src={logoJenama}
            alt="Logo Pusbuk"
            className="h-6 sm:h-9 md:h-14 lg:h-18 2xl:h-28 w-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.45)] transition-transform hover:scale-105"
          />

          <div className="h-6 w-px bg-slate-300 mx-1 hidden sm:block" />

          {/* Module Title with Webp Graphic when available */}
          <div className="flex items-center gap-2">
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-sky-600  tracking-widest block">
                  Modul {materi.orderNumber}
                </span>
                <h1 className="font-serif font-black text-xs sm:text-base text-slate-900 leading-none">
                  {materi.title} ({materi.englishTitle})
                </h1>
              </div>
          </div>
        </div>

        {/* Center: Module Switcher Tabs (5 modules) */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-300">
          {materiOrder.map((id) => {
            const m = allMateris[id];
            const isActive = m.id === currentMateriId;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSwitchMateri(id)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-[2px_2px_0px_#ea580c]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {m.orderNumber}. {m.title}
              </button>
            );
          })}
        </div>

        {/* Right: Quick Home Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              playClick();
              onBackToSplash();
            }}
            className="p-2 rounded-xl border-2 border-slate-900 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer"
            title="Kembali ke Beranda"
          >
            <Home className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Sub-Materi Stepper Navigation Bar */}
      <div className="my-2 bg-white/70 border-2 border-slate-900 rounded-xl p-1.5 flex items-center justify-between gap-1 shadow-[2px_2px_0px_#0f172a] shrink-0 overflow-x-auto">
        <div className="flex items-center gap-1 sm:gap-1.5 w-full">
          {materi.subMateriList.map((sub, idx) => {
            const isActive = idx === activeSubIndex;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => handleSelectSub(idx)}
                className={`flex-1 py-1.5 px-2 rounded-lg border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 truncate ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white shadow-[2px_2px_0px_#0f172a]'
                    : 'border-slate-300 bg-white hover:border-slate-500 text-slate-700'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] shrink-0 ${
                    isActive ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate hidden md:inline">{sub.title}</span>
                <span className="truncate md:hidden">Sub {idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workspace Area (Split Screen Left: Sub-materi Theory, Right: Interactive Lab) */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 overflow-hidden my-1 items-stretch">
        {/* Left Column: Pedagogical Content (5 cols on lg) */}
        <div className="lg:col-span-5 bg-white/90 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] p-3.5 sm:p-4 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Tag & Subtitle */}
            <div className="flex items-center justify-between mb-1.5">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border border-slate-900 ${materi.badgeColor}`}>
                Sub-materi {activeSubIndex + 1} Dari {materi.subMateriList.length}
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-bold">
                {materi.title}
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-serif font-black text-slate-900 leading-tight mb-1">
              {activeSub.title}
            </h2>
            <p className="text-xs font-semibold text-slate-500 mb-3">
              {activeSub.subtitle}
            </p>

            {/* Concept Paragraph */}
            <div className="p-3 bg-amber-50/70 border border-amber-300 rounded-xl mb-3">
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {activeSub.concept}
              </p>
            </div>

            {/* Bullets */}
            <div className="space-y-1.5 mb-3">
              {activeSub.bullets.map((bullet, bIdx) => (
                <div
                  key={bIdx}
                  className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed font-medium"
                >
                  {bullet}
                </div>
              ))}
            </div>

            {/* Comparison Box if available */}
            {activeSub.comparison && (
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2 rounded-xl bg-red-50 border border-red-300 text-[11px]">
                  <span className="font-bold text-red-900 block mb-0.5"><InlineIcon name="CircleX" /> {activeSub.comparison.badTitle}</span>
                  <p className="text-red-800 text-[10px] leading-snug">{activeSub.comparison.badDescription}</p>
                </div>
                <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px]">
                  <span className="font-bold text-emerald-900 block mb-0.5"><InlineIcon name="CircleCheck" /> {activeSub.comparison.goodTitle}</span>
                  <p className="text-emerald-800 text-[10px] leading-snug">{activeSub.comparison.goodDescription}</p>
                </div>
              </div>
            )}
          </div>

          {/* Robot Tip Box & Character Vignette */}
          <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center gap-3 bg-slate-50 p-2 rounded-xl border">
            <img
              src={shotImg}
              alt="Robo Guide"
              className="h-12 w-auto object-contain shrink-0 drop-shadow-xs"
            />
            <div className="text-[11px]">
              <span className="font-bold text-slate-900 block text-[10px]  text-orange-600">
                Pesan Penting Robo:
              </span>
              <p className="text-slate-700 italic leading-snug">
                "{activeSub.tips}"
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Mini-Lab (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col overflow-hidden">
          {currentMateriId === 'warna' && <ColorLab />}
          {currentMateriId === 'tipografi' && <TypographyLab />}
          {currentMateriId === 'ruang-kosong' && <SpaceLab />}
          {currentMateriId === 'keseimbangan' && <BalanceLab />}
          {currentMateriId === 'contoh-desain' && <SummaryLab />}
        </div>
      </main>

      {/* Bottom Step Navigation Bar */}
      <footer className="mt-1 bg-white/90 border-2 border-slate-900 rounded-xl px-3 py-1.5 flex items-center justify-between shadow-[2px_2px_0px_#0f172a] shrink-0">
        <button
          type="button"
          onClick={handlePrevSub}
          disabled={activeSubIndex === 0}
          className="px-3 py-1 rounded-lg border border-slate-900 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Sebelumnya</span>
        </button>

        <span className="text-xs font-mono font-bold text-slate-500">
          Sub-Materi {activeSubIndex + 1} dari {materi.subMateriList.length}
        </span>

        <button
          type="button"
          onClick={handleNextSub}
          className="brutalist-button px-4 py-1 rounded-lg text-xs font-bold  flex items-center gap-1.5 cursor-pointer"
        >
          <span>
            {activeSubIndex + 1 < materi.subMateriList.length
              ? 'Sub-Materi Selanjutnya'
              : nextModuleId
              ? `Lanjut ke ${allMateris[nextModuleId].title}`
              : 'Selesai & Ke Beranda'}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </footer>
    </div>
  );
}
