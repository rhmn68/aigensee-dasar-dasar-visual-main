import { InlineIcon } from '../InlineIcon';
import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { CheckCircle2, AlertTriangle, Type, Star } from 'lucide-react';

interface FontPreset {
  id: string;
  name: React.ReactNode;
  isGood: boolean;
  titleClass: string;
  bodyClass: string;
  badge: string;
  description: string;
}

const fontPresets: FontPreset[] = [
  {
    id: 'script-bad',
    name: <><InlineIcon name="CircleX" />{" Script Berliku (Font Berkelok)"}</>,
    isGood: false,
    titleClass: 'font-serif italic font-normal tracking-tight',
    bodyClass: 'font-serif italic text-xs tracking-tighter',
    badge: 'Buruk',
    description: 'Sesuai Shot 6: Huruf kecil berliku membuat orang malas membaca dan cepat lelah.'
  },
  {
    id: 'chaotic-mix',
    name: <><InlineIcon name="CircleX" />{" Campur Aduk 4 Jenis Font"}</>,
    isGood: false,
    titleClass: 'font-mono  font-black tracking-widest',
    bodyClass: 'font-serif font-bold text-xs',
    badge: 'Berantakan',
    description: 'Terlalu banyak jenis huruf berbeda membuat karya tidak konsisten dan tidak profesional.'
  },
  {
    id: 'serif-sans-good',
    name: <><InlineIcon name="Star" />{" Serif (Judul) + Sans (Isi)"}</>,
    isGood: true,
    titleClass: 'font-serif font-black tracking-tight text-slate-900',
    bodyClass: 'font-sans font-normal text-xs text-slate-700 leading-relaxed',
    badge: 'Direkomendasikan',
    description: 'Harmonis! Judul memancarkan wibawa dan isi sangat jernih serta nyaman dibaca.'
  },
  {
    id: 'modern-sans-good',
    name: <><InlineIcon name="Star" />{" Modern Sans Superfamily"}</>,
    isGood: true,
    titleClass: 'font-sans font-black tracking-tight text-slate-900 ',
    bodyClass: 'font-sans font-medium text-xs text-slate-700 leading-relaxed',
    badge: 'Bersih & Modern',
    description: 'Satu keluarga font dengan kontras ketebalan (Bold untuk judul, Regular untuk teks isi).'
  }
];

export function TypographyLab() {
  const [selectedFontPreset, setSelectedFontPreset] = useState<FontPreset>(fontPresets[2]);
  const [leadingState, setLeadingState] = useState<'tight' | 'normal' | 'loose'>('normal');
  const [hasHierarchy, setHasHierarchy] = useState<boolean>(true);

  const handleSelectPreset = (preset: FontPreset) => {
    setSelectedFontPreset(preset);
    playClick();
    if (preset.isGood) {
      playSynthesizerNote('success');
    } else {
      playSynthesizerNote('fail');
    }
  };

  const handleToggleHierarchy = () => {
    setHasHierarchy((prev) => !prev);
    playClick();
  };

  const getLeadingClass = () => {
    if (leadingState === 'tight') return 'leading-none space-y-0.5';
    if (leadingState === 'loose') return 'leading-loose space-y-3';
    return 'leading-relaxed space-y-1.5';
  };

  // Calculate score
  const isOptimal = selectedFontPreset.isGood && leadingState === 'normal' && hasHierarchy;
  const starCount = (selectedFontPreset.isGood ? 1 : 0) + (leadingState === 'normal' ? 1 : 0) + (hasHierarchy ? 1 : 0);

  return (
    <div className="h-full w-full flex flex-col justify-between p-3.5 sm:p-4 bg-white/70 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
      {/* Lab Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-blue-100 border border-slate-900 rounded-lg text-blue-600 font-bold text-xs">
            Lab 02
          </span>
          <h3 className="font-bold font-serif text-slate-900 text-sm sm:text-base">
            Klinik Tipografi: Bedah Keterbacaan & Font Pairing
          </h3>
        </div>
        <div className="flex items-center gap-1 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-400">
          <span className="text-xs font-bold text-amber-900">Skor Keterbacaan:</span>
          <div className="flex items-center text-amber-500">
            {[1, 2, 3].map((s) => (
              <Star
                key={s}
                className={`w-3.5 h-3.5 ${s <= starCount ? 'fill-amber-500 text-amber-500' : 'text-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2 flex-1 items-stretch overflow-hidden">
        {/* Left: Controls */}
        <div className="flex flex-col justify-between gap-2 overflow-y-auto pr-1">
          {/* Step 1: Font Pair Presets */}
          <div>
            <p className="text-xs font-bold text-slate-600  tracking-wider mb-1.5">
              1. Pilih Kombinasi Font:
            </p>
            <div className="space-y-1.5">
              {fontPresets.map((preset) => {
                const isSelected = preset.id === selectedFontPreset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className={`w-full p-2 rounded-xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-slate-900 bg-blue-50/80 shadow-[2px_2px_0px_#0f172a]'
                        : 'border-slate-300 bg-white hover:border-slate-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{preset.name}</span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                            preset.isGood ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {preset.badge}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-1">{preset.description}</p>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Line Spacing (Leading) */}
          <div className="p-2 bg-slate-50 border border-slate-300 rounded-xl">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>2. Jarak Antar Baris (Leading):</span>
              <span className="text-[10px] font-mono text-blue-600 font-bold">
                {leadingState === 'tight' ? 'Terlalu Rapat (0.9)' : leadingState === 'loose' ? 'Terlalu Renggang (2.2)' : 'Ideal (1.5)'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setLeadingState('tight');
                  playClick();
                }}
                className={`py-1 text-xs font-bold rounded-lg border transition-all ${
                  leadingState === 'tight'
                    ? 'border-slate-900 bg-red-100 text-red-900 shadow-[1px_1px_0px_#0f172a]'
                    : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                Rapat
              </button>
              <button
                type="button"
                onClick={() => {
                  setLeadingState('normal');
                  playClick();
                }}
                className={`py-1 text-xs font-bold rounded-lg border transition-all ${
                  leadingState === 'normal'
                    ? 'border-slate-900 bg-emerald-100 text-emerald-900 shadow-[1px_1px_0px_#0f172a]'
                    : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                Ideal (1.5)
              </button>
              <button
                type="button"
                onClick={() => {
                  setLeadingState('loose');
                  playClick();
                }}
                className={`py-1 text-xs font-bold rounded-lg border transition-all ${
                  leadingState === 'loose'
                    ? 'border-slate-900 bg-amber-100 text-amber-900 shadow-[1px_1px_0px_#0f172a]'
                    : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                Renggang
              </button>
            </div>
          </div>

          {/* Step 3: Visual Hierarchy Toggle */}
          <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-300 rounded-xl">
            <div>
              <span className="text-xs font-bold text-slate-800 block">3. Hirarki Ukuran Teks</span>
              <span className="text-[10px] text-slate-500">
                {hasHierarchy ? 'Judul menonjol besar, isi proporsional' : 'Semua teks berukuran sama (datar)'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleToggleHierarchy}
              className={`px-3 py-1 text-xs font-bold rounded-lg border border-slate-900 transition-all ${
                hasHierarchy
                  ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#0f172a]'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {hasHierarchy ? 'Aktif' : 'Nonaktif'}
            </button>
          </div>
        </div>

        {/* Right: Live Poster Canvas */}
        <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-slate-900 bg-slate-100 relative overflow-hidden">
          <span className="absolute top-2 right-2 text-[10px]  font-mono px-2 py-0.5 rounded bg-slate-900 text-white font-bold tracking-wider">
            Pengumuman Sekolah
          </span>

          {/* Document Canvas */}
          <div className="w-full max-w-xs p-4 rounded-xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_#0f172a] transition-all">
            <div className="border-b-2 border-slate-900 pb-2 mb-2.5">
              <span className="text-[9px] font-bold text-blue-700 tracking-wider  block">
                Pengumuman Resmi Sekolah
              </span>
              <h4
                className={`${
                  hasHierarchy ? 'text-lg font-bold' : 'text-xs font-normal'
                } ${selectedFontPreset.titleClass} transition-all mt-0.5`}
              >
                Lomba Desain Grafis Kreatif Siswa 2026
              </h4>
            </div>

            <div className={`text-slate-800 ${getLeadingClass()} ${selectedFontPreset.bodyClass} transition-all`}>
              <p>
                Diumumkan kepada seluruh peserta didik kelas 10 dan 11 untuk mengirimkan karya poster bertema
                kelestarian lingkungan hidup sebelum batas waktu 30 November.
              </p>
              <p>
                Karya terbaik akan dipamerkan di aula utama dan memperoleh beasiswa pelatihan desain internasional.
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span><InlineIcon name="MapPin" /> Aula Sekolah Pusbuk</span>
              <span>Gratis Pendaftaran</span>
            </div>
          </div>

          {/* Evaluation Feedback */}
          <div className="mt-2 text-center">
            {isOptimal ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Luar biasa! Pengumuman sangat jernih dan nyaman dibaca!
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-400">
                <AlertTriangle className="w-3.5 h-3.5" /> Masih ada elemen yang bisa dioptimalkan (font/leading/hirarki)
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Lab Footer Takeaway */}
      <div className="text-[11px] text-slate-600 bg-blue-100/60 p-2 rounded-lg border border-blue-300 flex items-center justify-between">
        <span><InlineIcon name="Lightbulb" /> <strong>Intisari:</strong> Cukup 1-2 jenis font, berikan leading 1.5, dan tegaskan hirarki ukuran judul vs isi.</span>
        <span className="font-mono text-[10px] text-slate-500">Shot 6 Dasar Desain Visual</span>
      </div>
    </div>
  );
}
