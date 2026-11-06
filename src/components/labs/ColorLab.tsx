import { InlineIcon } from '../InlineIcon';
import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface PaletteOption {
  id: string;
  name: React.ReactNode;
  type: 'warm' | 'cool' | 'fresh' | 'chaotic';
  dominant: string;
  secondary: string;
  accent: string;
  textColor: string;
  bgPreview: string;
  cardBg: string;
  btnBg: string;
  btnText: string;
  titleFont: string;
  roboFeedback: {
    state: 'good' | 'neutral' | 'bad';
    reaction: React.ReactNode;
    note: string;
  };
}

const palettes: PaletteOption[] = [
  {
    id: 'warm-food',
    name: <><InlineIcon name="Circle" color="#dc2626" />{" Oranye & Merah Hangat"}</>,
    type: 'warm',
    dominant: '#FFF7ED',
    secondary: '#FED7AA',
    accent: '#EA580C',
    textColor: '#7C2D12',
    bgPreview: 'bg-amber-50',
    cardBg: 'bg-white border-orange-200',
    btnBg: 'bg-orange-600 hover:bg-orange-500',
    btnText: 'text-white',
    titleFont: 'font-serif',
    roboFeedback: {
      state: 'good',
      reaction: <><InlineIcon name="Smile" />{" \"Wah, menggugah selera!\""}</>,
      note: 'Merah dan oranye terbukti secara psikologis meningkatkan metabolisme dan nafsu makan. Sangat pas untuk kuliner!'
    }
  },
  {
    id: 'cool-corporate',
    name: <><InlineIcon name="Circle" color="#2563eb" />{" Biru Edukasi & Korporat"}</>,
    type: 'cool',
    dominant: '#EFF6FF',
    secondary: '#DBEAFE',
    accent: '#2563EB',
    textColor: '#1E3A8A',
    bgPreview: 'bg-slate-50',
    cardBg: 'bg-white border-blue-200',
    btnBg: 'bg-blue-600 hover:bg-blue-500',
    btnText: 'text-white',
    titleFont: 'font-sans',
    roboFeedback: {
      state: 'good',
      reaction: <><InlineIcon name="GraduationCap" />{" \"Tenang dan profesional!\""}</>,
      note: 'Biru memancarkan ketertiban, stabilitas, dan rasa aman. Sangat cocok untuk sekolah, bank, atau aplikasi teknologi.'
    }
  },
  {
    id: 'fresh-nature',
    name: <><InlineIcon name="Circle" color="#16a34a" />{" Hijau Segar & Organik"}</>,
    type: 'fresh',
    dominant: '#ECFDF5',
    secondary: '#A7F3D0',
    accent: '#059669',
    textColor: '#064E3B',
    bgPreview: 'bg-emerald-50/50',
    cardBg: 'bg-white border-emerald-200',
    btnBg: 'bg-emerald-600 hover:bg-emerald-500',
    btnText: 'text-white',
    titleFont: 'font-sans',
    roboFeedback: {
      state: 'good',
      reaction: <><InlineIcon name="Sprout" />{" \"Segar dan menyehatkan!\""}</>,
      note: 'Hijau memberikan rasa nyaman, alami, dan harmoni. Sangat ideal untuk kampanye lingkungan, kesehatan, atau salad.'
    }
  },
  {
    id: 'chaotic-bad',
    name: <><InlineIcon name="Zap" />{" Terlalu Banyak Warna (Ramai)"}</>,
    type: 'chaotic',
    dominant: '#FDE047',
    secondary: '#C084FC',
    accent: '#EC4899',
    textColor: '#701A75',
    bgPreview: 'bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300',
    cardBg: 'bg-lime-200 border-fuchsia-500',
    btnBg: 'bg-purple-600 hover:bg-purple-500',
    btnText: 'text-yellow-300',
    titleFont: 'font-mono',
    roboFeedback: {
      state: 'bad',
      reaction: <><InlineIcon name="Frown" />{" \"Aduh, mataku pusing!\""}</>,
      note: 'Terlalu banyak warna bertabrakan! Seperti kata Robo di Shot 5: "Jangan pakai terlalu banyak warna, nanti malah ramai!"'
    }
  }
];

export function ColorLab() {
  const [selectedPalette, setSelectedPalette] = useState<PaletteOption>(palettes[0]);
  const [posterTopic, setPosterTopic] = useState<'food' | 'school'>('food');

  const handleSelectPalette = (pal: PaletteOption) => {
    setSelectedPalette(pal);
    playClick();
    if (pal.roboFeedback.state === 'good') {
      playSynthesizerNote('success');
    } else {
      playSynthesizerNote('fail');
    }
  };

  const handleToggleTopic = (topic: 'food' | 'school') => {
    setPosterTopic(topic);
    playClick();
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-3.5 sm:p-4 bg-white/70 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
      {/* Lab Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-orange-100 border border-slate-900 rounded-lg text-orange-600 font-bold text-xs">
            Lab 01
          </span>
          <h3 className="font-bold font-serif text-slate-900 text-sm sm:text-base">
            Laboratorium Emosi Warna & Proporsi 60-30-10
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleToggleTopic('food')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-900 transition-all ${
              posterTopic === 'food'
                ? 'bg-orange-500 text-white shadow-[2px_2px_0px_#0f172a]'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            <InlineIcon name="Sandwich" /> Kasus Kuliner
          </button>
          <button
            type="button"
            onClick={() => handleToggleTopic('school')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-900 transition-all ${
              posterTopic === 'school'
                ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#0f172a]'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            <InlineIcon name="GraduationCap" /> Kasus Sekolah
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2 flex-1 items-stretch overflow-hidden">
        {/* Left: Palette Selection & 60-30-10 Indicator */}
        <div className="flex flex-col justify-between gap-2 overflow-y-auto pr-1">
          <div>
            <p className="text-xs font-bold text-slate-600  tracking-wider mb-2">
              Pilih Skema Palet Warna:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {palettes.map((pal) => {
                const isSelected = pal.id === selectedPalette.id;
                return (
                  <button
                    key={pal.id}
                    type="button"
                    onClick={() => handleSelectPalette(pal)}
                    className={`p-2.5 rounded-xl border-2 text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'border-slate-900 bg-amber-50/80 shadow-[3px_3px_0px_#0f172a] -translate-y-0.5'
                        : 'border-slate-300 bg-white hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-xs text-slate-900">{pal.name}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />}
                    </div>
                    {/* Swatches */}
                    <div className="flex items-center gap-1">
                      <div
                        className="h-4 w-6 rounded border border-slate-400"
                        style={{ backgroundColor: pal.dominant }}
                        title="Dominan (60%)"
                      />
                      <div
                        className="h-4 w-6 rounded border border-slate-400"
                        style={{ backgroundColor: pal.secondary }}
                        title="Sekunder (30%)"
                      />
                      <div
                        className="h-4 w-6 rounded border border-slate-400"
                        style={{ backgroundColor: pal.accent }}
                        title="Aksen (10%)"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 60-30-10 Rule Visualizer */}
          <div className="p-2.5 bg-slate-50 border border-slate-300 rounded-xl">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>Proporsi Warna (Aturan 60-30-10):</span>
              <span className="text-[10px] text-slate-500 font-mono">100% Harmonis</span>
            </div>
            {/* Visual Bar */}
            <div className="h-4 w-full rounded-md border border-slate-900 flex overflow-hidden shadow-inner">
              <div
                style={{ backgroundColor: selectedPalette.dominant, width: '60%' }}
                className="h-full flex items-center justify-center text-[9px] font-bold text-slate-700 border-r border-slate-900/30"
              >
                60% Dominan
              </div>
              <div
                style={{ backgroundColor: selectedPalette.secondary, width: '30%' }}
                className="h-full flex items-center justify-center text-[9px] font-bold text-slate-800 border-r border-slate-900/30"
              >
                30% Sekunder
              </div>
              <div
                style={{ backgroundColor: selectedPalette.accent, width: '10%' }}
                className="h-full flex items-center justify-center text-[9px] font-bold text-white"
              >
                10%
              </div>
            </div>
          </div>

          {/* Robo Feedback Card */}
          <div
            className={`p-2.5 rounded-xl border-2 flex items-start gap-2.5 ${
              selectedPalette.roboFeedback.state === 'bad'
                ? 'bg-red-50 border-red-400 text-red-950'
                : 'bg-emerald-50 border-emerald-400 text-emerald-950'
            }`}
          >
            <div className="text-xl shrink-0">
              {selectedPalette.roboFeedback.state === 'bad' ? (
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              ) : null}
            </div>
            <div className="text-xs">
              <p className="font-black mb-0.5">{selectedPalette.roboFeedback.reaction}</p>
              <p className="text-[11px] leading-relaxed text-slate-700">{selectedPalette.roboFeedback.note}</p>
            </div>
          </div>
        </div>

        {/* Right: Live Poster Canvas Mockup */}
        <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-slate-900 bg-slate-100 relative overflow-hidden">
          <span className="absolute top-2 right-2 text-[10px]  font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold tracking-wider">
            Live Preview
          </span>

          {/* Dynamic Mockup Card */}
          <div
            className={`w-full max-w-xs p-4 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] transition-all duration-300 ${selectedPalette.cardBg}`}
            style={{
              backgroundColor: selectedPalette.dominant
            }}
          >
            {posterTopic === 'food' ? (
              <>
                <div
                  className="px-2.5 py-1 rounded-md text-[10px] font-black  tracking-wider inline-block mb-2 border border-slate-900/40"
                  style={{ backgroundColor: selectedPalette.secondary, color: selectedPalette.textColor }}
                >
                  <InlineIcon name="Flame" /> Promo Spesial Hari Ini
                </div>
                <h4
                  className={`text-xl font-black mb-1 leading-tight ${selectedPalette.titleFont}`}
                  style={{ color: selectedPalette.textColor }}
                >
                  Burger Juara Super Lezat
                </h4>
                <p className="text-[11px] mb-3 leading-relaxed" style={{ color: selectedPalette.textColor }}>
                  Daging panggang ganda dengan saus rahasia gurih lumer di mulut.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-900/20">
                  <span className="text-sm font-black" style={{ color: selectedPalette.textColor }}>
                    Rp 35.000
                  </span>
                  <button
                    type="button"
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-900 shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer ${selectedPalette.btnBg} ${selectedPalette.btnText}`}
                  >
                    Pesan Sekarang!
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  className="px-2.5 py-1 rounded-md text-[10px] font-black  tracking-wider inline-block mb-2 border border-slate-900/40"
                  style={{ backgroundColor: selectedPalette.secondary, color: selectedPalette.textColor }}
                >
                  <InlineIcon name="LibraryBig" /> Pendaftaran Akademik
                </div>
                <h4
                  className={`text-xl font-black mb-1 leading-tight ${selectedPalette.titleFont}`}
                  style={{ color: selectedPalette.textColor }}
                >
                  Akademi Desain Digital
                </h4>
                <p className="text-[11px] mb-3 leading-relaxed" style={{ color: selectedPalette.textColor }}>
                  Kurikulum terakreditasi internasional mencetak desainer handal.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-900/20">
                  <span className="text-xs font-bold" style={{ color: selectedPalette.textColor }}>
                    Angkatan 2026
                  </span>
                  <button
                    type="button"
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-900 shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer ${selectedPalette.btnBg} ${selectedPalette.btnText}`}
                  >
                    Daftar Kuliah →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Lab Footer Takeaway */}
      <div className="text-[11px] text-slate-600 bg-amber-100/60 p-2 rounded-lg border border-amber-300 flex items-center justify-between">
        <span><InlineIcon name="Lightbulb" /> <strong>Intisari:</strong> Gunakan warna hangat untuk memicu selera/aksi, warna dingin untuk rasa percaya/pendidikan.</span>
        <span className="font-mono text-[10px] text-slate-500">Shot 4 & 5 Dasar Desain Visual</span>
      </div>
    </div>
  );
}
