import { InlineIcon } from '../InlineIcon';
import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { CheckCircle2, RotateCcw, Palette, Type, Maximize2, Scale } from 'lucide-react';
import roboHappyImg from '../../assets/images/page_11_image_9.png';

export function SummaryLab() {
  const [activeElements, setActiveElements] = useState<{
    warna: boolean;
    tipografi: boolean;
    ruangKosong: boolean;
    keseimbangan: boolean;
  }>({
    warna: true,
    tipografi: true,
    ruangKosong: true,
    keseimbangan: true
  });

  const toggleElement = (key: 'warna' | 'tipografi' | 'ruangKosong' | 'keseimbangan') => {
    playClick();
    setActiveElements((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      const activeCount = Object.values(next).filter(Boolean).length;
      if (activeCount === 4) {
        playSynthesizerNote('success');
        try {
          confetti({
            particleCount: 60,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch {}
      } else {
        playSynthesizerNote('pop');
      }
      return next;
    });
  };

  const handleReset = () => {
    playClick();
    setActiveElements({
      warna: false,
      tipografi: false,
      ruangKosong: false,
      keseimbangan: false
    });
  };

  const handleSelectAll = () => {
    playClick();
    setActiveElements({
      warna: true,
      tipografi: true,
      ruangKosong: true,
      keseimbangan: true
    });
    playSynthesizerNote('unlock');
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch {}
  };

  const activeCount = Object.values(activeElements).filter(Boolean).length;

  return (
    <div className="h-full w-full flex flex-col justify-between p-3.5 sm:p-4 bg-white/80 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-sky-100 border border-slate-900 rounded-lg text-sky-700 font-bold text-xs">
            Lab 05
          </span>
          <h3 className="font-bold font-serif text-slate-900 text-sm sm:text-base">
            Studio Harmoni: Gabungkan 4 Pilar Desain Visual
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleReset}
            className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-all cursor-pointer"
          >
            Matikan Semua
          </button>
          <button
            type="button"
            onClick={handleSelectAll}
            className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-900 bg-orange-500 hover:bg-orange-400 text-white shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer"
          >
            Aktifkan Semua
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2 flex-1 items-stretch overflow-hidden">
        {/* Left: 4 Element Toggles */}
        <div className="flex flex-col justify-between gap-2 overflow-y-auto pr-1">
          <div>
            <p className="text-xs font-bold text-slate-700  tracking-wider mb-2">
              Uji Coba Pengaruh Tiap Elemen Pada Desain:
            </p>
            <div className="space-y-2">
              {/* Toggle Warna */}
              <div
                onClick={() => toggleElement('warna')}
                className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  activeElements.warna
                    ? 'border-slate-900 bg-orange-50 shadow-[2px_2px_0px_#ea580c]'
                    : 'border-slate-300 bg-slate-100 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center border border-slate-900">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">1. Warna (Harmoni 60-30-10)</span>
                    <span className="text-[10px] text-slate-500">
                      {activeElements.warna ? 'Aktif: Menghadirkan emosi hangat & teratur' : 'Mati: Warna pudar & membosankan'}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                    activeElements.warna ? 'bg-orange-600 border-slate-900 text-white' : 'border-slate-400 bg-white'
                  }`}
                >
                  {activeElements.warna && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>

              {/* Toggle Tipografi */}
              <div
                onClick={() => toggleElement('tipografi')}
                className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  activeElements.tipografi
                    ? 'border-slate-900 bg-blue-50 shadow-[2px_2px_0px_#2563eb]'
                    : 'border-slate-300 bg-slate-100 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center border border-slate-900">
                    <Type className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">2. Tipografi (Jernih & Berhirarki)</span>
                    <span className="text-[10px] text-slate-500">
                      {activeElements.tipografi ? 'Aktif: Huruf jelas, leading 1.5, judul tegas' : 'Mati: Font berliku & rapat'}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                    activeElements.tipografi ? 'bg-blue-600 border-slate-900 text-white' : 'border-slate-400 bg-white'
                  }`}
                >
                  {activeElements.tipografi && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>

              {/* Toggle Ruang Kosong */}
              <div
                onClick={() => toggleElement('ruangKosong')}
                className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  activeElements.ruangKosong
                    ? 'border-slate-900 bg-emerald-50 shadow-[2px_2px_0px_#059669]'
                    : 'border-slate-300 bg-slate-100 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center border border-slate-900">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">3. Ruang Kosong (White Space)</span>
                    <span className="text-[10px] text-slate-500">
                      {activeElements.ruangKosong ? 'Aktif: Lapang, bernapas, fokus menonjol' : 'Mati: Menempel sesak di pinggir'}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                    activeElements.ruangKosong ? 'bg-emerald-600 border-slate-900 text-white' : 'border-slate-400 bg-white'
                  }`}
                >
                  {activeElements.ruangKosong && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>

              {/* Toggle Keseimbangan */}
              <div
                onClick={() => toggleElement('keseimbangan')}
                className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  activeElements.keseimbangan
                    ? 'border-slate-900 bg-purple-50 shadow-[2px_2px_0px_#7c3aed]'
                    : 'border-slate-300 bg-slate-100 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center border border-slate-900">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">4. Keseimbangan (Bobot Visual)</span>
                    <span className="text-[10px] text-slate-500">
                      {activeElements.keseimbangan ? 'Aktif: Bobot seimbang, tidak miring' : 'Mati: Numpuk di kiri saja'}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                    activeElements.keseimbangan ? 'bg-purple-600 border-slate-900 text-white' : 'border-slate-400 bg-white'
                  }`}
                >
                  {activeElements.keseimbangan && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            </div>
          </div>

          {/* Robo Feedback Speech */}
          <div className="p-2.5 rounded-xl border-2 border-slate-900 bg-amber-50 flex items-center gap-2.5">
            <img src={roboHappyImg} alt="Robo" className="h-10 w-auto object-contain shrink-0" />
            <div className="text-[11px]">
              <span className="font-black text-slate-900 block">
                {activeCount === 4
                  ? <><InlineIcon name="PartyPopper" />{" 4/4 Elemen Lengkap! Harmoni Sempurna!"}</>
                  : activeCount === 0
                  ? <><InlineIcon name="Frown" />{" Semua elemen mati! Karya terlihat kacau."}</>
                  : `${activeCount}/4 Elemen Aktif. Coba nyalakan sisanya!`}
              </span>
              <p className="text-slate-600 leading-snug">
                {activeCount === 4
                  ? 'Desain yang memadukan keempat pilar akan tampil memukau sekaligus efektif menyampaikan pesan.'
                  : 'Lihat bagaimana perubahan kanvas di sebelah kanan saat elemen diaktifkan.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Live Poster Canvas Transforming */}
        <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-slate-900 bg-slate-100 relative overflow-hidden">
          <span className="absolute top-2 right-2 text-[10px]  font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold tracking-wider">
            Kanvas Harmoni
          </span>

          {/* Dynamic Mockup Card */}
          <div
            className={`w-full max-w-xs rounded-xl border-2 border-slate-900 transition-all duration-300 ${
              activeElements.keseimbangan ? 'text-center shadow-[4px_4px_0px_#0f172a]' : 'text-left -rotate-3 shadow-none'
            } ${
              activeElements.ruangKosong ? 'p-4 space-y-2.5' : 'p-1 space-y-0.5'
            }`}
            style={{
              backgroundColor: activeElements.warna ? '#FFF7ED' : '#E2E8F0',
              borderColor: '#0F172A'
            }}
          >
            {/* Header Badge */}
            <div
              className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold ${
                activeElements.warna ? 'bg-orange-500 text-white' : 'bg-slate-400 text-slate-900'
              }`}
            >
              Pameran Kreatif 2026
            </div>

            {/* Title */}
            <h4
              className={`leading-tight text-slate-900 ${
                activeElements.tipografi
                  ? 'font-serif text-lg font-black tracking-tight'
                  : 'font-mono text-xs font-normal italic'
              }`}
            >
              Inspirasi Melintasi Batas Visual
            </h4>

            {/* Paragraph */}
            <p
              className={`text-slate-700 ${
                activeElements.tipografi
                  ? 'font-sans text-[11px] leading-relaxed'
                  : 'font-serif text-[10px] leading-none'
              }`}
            >
              Setiap karya memiliki jiwa saat warna, huruf, ruang, dan bobot berpadu dalam keharmonisan rasa.
            </p>

            {/* CTA Button */}
            <div className={`pt-1 ${activeElements.keseimbangan ? 'flex justify-center' : 'flex justify-start'}`}>
              <button
                type="button"
                className={`px-3 py-1 text-xs font-bold rounded-lg border border-slate-900 transition-all ${
                  activeElements.warna ? 'bg-orange-600 text-white shadow-[2px_2px_0px_#0f172a]' : 'bg-slate-300 text-slate-700'
                }`}
              >
                Jelajahi Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[11px] text-slate-600 bg-sky-50 p-2 rounded-lg border border-sky-200 flex items-center justify-between">
        <span><InlineIcon name="Lightbulb" /> <strong>Intisari:</strong> Desain bukan sekadar indah, melainkan harmoni fungsional yang nyaman dinikmati.</span>
        <span className="font-mono text-[10px] text-slate-500">Shot 9-12 Dasar Desain Visual</span>
      </div>
    </div>
  );
}
