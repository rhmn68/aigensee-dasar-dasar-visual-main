import { InlineIcon } from '../InlineIcon';
import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { Eye, EyeOff, Sparkles, Wind, Maximize2 } from 'lucide-react';

export function SpaceLab() {
  const [spaceLevel, setSpaceLevel] = useState<number>(75);
  const [showGuides, setShowGuides] = useState<boolean>(true);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSpaceLevel(val);
    if (val === 75 || val === 100) {
      playSynthesizerNote('slide');
    }
  };

  const handleToggleGuides = () => {
    setShowGuides((prev) => !prev);
    playClick();
  };

  // Compute styles based on slider percentage (0 to 100)
  const paddingVal = Math.round(4 + (spaceLevel / 100) * 28); // 4px to 32px
  const gapVal = Math.round(2 + (spaceLevel / 100) * 18); // 2px to 20px
  const lineSpacing = 1 + (spaceLevel / 100) * 0.6; // 1.0 to 1.6

  // Status feedback
  const isCrowded = spaceLevel < 40;
  const isOptimal = spaceLevel >= 65 && spaceLevel <= 90;

  return (
    <div className="h-full w-full flex flex-col justify-between p-3.5 sm:p-4 bg-white/70 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
      {/* Lab Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-emerald-100 border border-slate-900 rounded-lg text-emerald-600 font-bold text-xs">
            LAB 03
          </span>
          <h3 className="font-bold font-serif text-slate-900 text-sm sm:text-base">
            The Breathing Room: Eksperimen Ruang Napas Visual
          </h3>
        </div>
        <button
          type="button"
          onClick={handleToggleGuides}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
            showGuides
              ? 'bg-emerald-600 text-white border-slate-900 shadow-[2px_2px_0px_#0f172a]'
              : 'bg-white text-slate-700 border-slate-300'
          }`}
        >
          {showGuides ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          <span>Garis Pandu Ruang</span>
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2 flex-1 items-stretch overflow-hidden">
        {/* Left: Controls & Concept */}
        <div className="flex flex-col justify-between gap-3 overflow-y-auto pr-1">
          {/* Slider Control */}
          <div className="p-3 bg-emerald-50/70 border-2 border-emerald-300 rounded-xl">
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="space-slider" className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-emerald-600" />
                <span>Kadar Ruang Napas (Negative Space):</span>
              </label>
              <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-emerald-700 text-white">
                {spaceLevel}%
              </span>
            </div>

            <input
              id="space-slider"
              type="range"
              min="0"
              max="100"
              value={spaceLevel}
              onChange={handleSliderChange}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />

            <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1.5">
              <span className={spaceLevel < 30 ? 'text-red-600 font-black' : ''}>0% Penuh Sesak</span>
              <span className={spaceLevel >= 40 && spaceLevel <= 60 ? 'text-amber-600 font-black' : ''}>50% Cukup</span>
              <span className={spaceLevel >= 70 ? 'text-emerald-700 font-black' : ''}>100% Sangat Lapang</span>
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => {
                setSpaceLevel(10);
                playSynthesizerNote('fail');
              }}
              className="px-2 py-1.5 rounded-lg border border-slate-900 text-xs font-bold bg-red-100 hover:bg-red-200 text-red-900 transition-all"
            >
              <InlineIcon name="Frown" /> Mode Sesak (10%)
            </button>
            <button
              type="button"
              onClick={() => {
                setSpaceLevel(50);
                playClick();
              }}
              className="px-2 py-1.5 rounded-lg border border-slate-900 text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 transition-all"
            >
              <InlineIcon name="Meh" /> Mode Sedang (50%)
            </button>
            <button
              type="button"
              onClick={() => {
                setSpaceLevel(80);
                playSynthesizerNote('success');
              }}
              className="px-2 py-1.5 rounded-lg border border-slate-900 text-xs font-bold bg-emerald-100 hover:bg-emerald-200 text-emerald-900 shadow-[2px_2px_0px_#0f172a] transition-all"
            >
              <InlineIcon name="Sprout" /> Mode Ideal (80%)
            </button>
          </div>

          {/* Robo Feedback Speech */}
          <div
            className={`p-3 rounded-xl border-2 flex items-start gap-2.5 transition-all ${
              isCrowded
                ? 'bg-red-50 border-red-400 text-red-950'
                : isOptimal
                ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-[2px_2px_0px_#059669]'
                : 'bg-amber-50 border-amber-400 text-amber-950'
            }`}
          >
            <div className="text-xl shrink-0 mt-0.5">
              {isCrowded ? <><InlineIcon name="Frown" /></> : isOptimal ? <><InlineIcon name="Sparkles" /></> : <><InlineIcon name="Search" /></>}
            </div>
            <div>
              <p className="font-black text-xs mb-0.5">
                {isCrowded
                  ? 'Aduh! Desainnya sesak banget, Robo pusing!'
                  : isOptimal
                  ? 'Sempurna! Mata bisa bernapas lega!'
                  : 'Cukup baik, tapi masih bisa lebih bernapas.'}
              </p>
              <p className="text-[11px] leading-relaxed text-slate-700">
                {isCrowded
                  ? 'Semua elemen saling menempel dan menabrak bingkai. Otak audiens cepat lelah karena tidak ada jeda visual!'
                  : isOptimal
                  ? 'Dengan margin lapang dan padding yang cukup, logo dan penawaran penting langsung menjadi sorotan utama.'
                  : 'Geser slider ke 70-85% untuk melihat keanggunan ruang bernapas seperti buku majalah berkualitas.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Live Canvas Layout that expands/contracts */}
        <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-slate-900 bg-slate-100 relative overflow-hidden">
          <span className="absolute top-2 right-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold tracking-wider">
            Kanvas Desain
          </span>

          {/* Dynamic Mockup Frame */}
          <div
            className="w-full max-w-sm rounded-xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_#0f172a] transition-all flex flex-col justify-between relative overflow-hidden"
            style={{
              padding: `${paddingVal}px`,
              gap: `${gapVal}px`
            }}
          >
            {/* Optional Dashed Guideline Overlay */}
            {showGuides && (
              <div className="absolute inset-2 border-2 border-dashed border-emerald-400/60 pointer-events-none rounded-lg" />
            )}

            {/* Header section in card */}
            <div className="flex items-center justify-between border-b pb-1 border-slate-200">
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                STUDIO KREATIF
              </span>
              <span className="text-[10px] font-mono text-slate-400">EDISI #07</span>
            </div>

            {/* Main Title & Focal Point */}
            <div>
              <h4
                className="font-serif font-black text-slate-900 tracking-tight transition-all"
                style={{
                  fontSize: `${Math.max(14, Math.min(22, 12 + spaceLevel * 0.1))}px`,
                  lineHeight: lineSpacing
                }}
              >
                Inovasi Menghidupkan Imajinasi Visual
              </h4>
              <p
                className="text-slate-600 text-[11px] transition-all mt-1"
                style={{ lineHeight: lineSpacing }}
              >
                Karya seni terbaik lahir dari ketenangan dan kejelasan pesan, bukan dari hiruk-pikuk dekorasi yang berlebihan.
              </p>
            </div>

            {/* Bottom Actions & Focal Badge */}
            <div className="flex items-center justify-between pt-1 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-500">Jakarta Barat, 2026</span>
              <button
                type="button"
                className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg border border-slate-900 shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer hover:bg-emerald-500"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Footer Takeaway */}
      <div className="text-[11px] text-slate-600 bg-emerald-100/60 p-2 rounded-lg border border-emerald-300 flex items-center justify-between">
        <span><InlineIcon name="Lightbulb" /> <strong>Intisari:</strong> Ruang kosong bukan tempat mubazir, melainkan udara bagi mata agar informasi penting bersinar.</span>
        <span className="font-mono text-[10px] text-slate-500">Shot 7 Dasar Desain Visual</span>
      </div>
    </div>
  );
}
