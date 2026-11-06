import { InlineIcon } from '../InlineIcon';
import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { CheckCircle2, AlertTriangle, RotateCcw, Scale, Plus, Trash2 } from 'lucide-react';
import shotBalanceImg from '../../assets/images/page_9_image_7.png';

interface VisualBlock {
  id: string;
  name: string;
  icon: React.ReactNode;
  weight: number;
  color: string;
}

const availableBlocks: VisualBlock[] = [
  { id: 'img', name: "Foto/Ilustrasi", icon: <><InlineIcon name="Image" /></>, weight: 3, color: 'bg-emerald-100 border-emerald-500 text-emerald-900' },
  { id: 'text', name: 'Teks Judul (Aa)', icon: <><InlineIcon name="Type" /></>, weight: 2, color: 'bg-purple-100 border-purple-500 text-purple-900' },
  { id: 'circle', name: 'Lingkaran Warna', icon: <><InlineIcon name="Circle" color="#2563eb" /></>, weight: 1, color: 'bg-blue-100 border-blue-500 text-blue-900' },
  { id: 'shape', name: 'Kotak Ruang', icon: <><InlineIcon name="Square" /></>, weight: 1, color: 'bg-amber-100 border-amber-500 text-amber-900' }
];

export function BalanceLab() {
  const [leftBlocks, setLeftBlocks] = useState<VisualBlock[]>([
    availableBlocks[0] // 1 Image (weight 3)
  ]);
  const [rightBlocks, setRightBlocks] = useState<VisualBlock[]>([
    availableBlocks[1], // 1 Text (weight 2)
    availableBlocks[2]  // 1 Circle (weight 1)
  ]);

  const leftWeight = leftBlocks.reduce((sum, b) => sum + b.weight, 0);
  const rightWeight = rightBlocks.reduce((sum, b) => sum + b.weight, 0);
  const weightDiff = rightWeight - leftWeight;
  const isBalanced = leftWeight > 0 && rightWeight > 0 && weightDiff === 0;

  // Rotation angle in degrees: clamped between -18 and 18
  const tiltAngle = Math.max(-18, Math.min(18, weightDiff * 4));

  const addBlock = (side: 'left' | 'right', block: VisualBlock) => {
    playClick();
    if (side === 'left') {
      if (leftBlocks.length >= 4) return;
      const next = [...leftBlocks, { ...block, id: `${block.id}-${Date.now()}` }];
      setLeftBlocks(next);
      checkSound(next.reduce((s, b) => s + b.weight, 0), rightWeight);
    } else {
      if (rightBlocks.length >= 4) return;
      const next = [...rightBlocks, { ...block, id: `${block.id}-${Date.now()}` }];
      setRightBlocks(next);
      checkSound(leftWeight, next.reduce((s, b) => s + b.weight, 0));
    }
  };

  const removeBlock = (side: 'left' | 'right', index: number) => {
    playClick();
    if (side === 'left') {
      const next = leftBlocks.filter((_, i) => i !== index);
      setLeftBlocks(next);
      checkSound(next.reduce((s, b) => s + b.weight, 0), rightWeight);
    } else {
      const next = rightBlocks.filter((_, i) => i !== index);
      setRightBlocks(next);
      checkSound(leftWeight, next.reduce((s, b) => s + b.weight, 0));
    }
  };

  const checkSound = (lw: number, rw: number) => {
    if (lw > 0 && rw > 0 && lw === rw) {
      playSynthesizerNote('success');
    } else if (Math.abs(lw - rw) >= 3) {
      playSynthesizerNote('fail');
    }
  };

  const handleApplyPreset = (type: 'unbalanced' | 'symmetric' | 'asymmetric') => {
    playClick();
    if (type === 'unbalanced') {
      setLeftBlocks([availableBlocks[0], availableBlocks[1]]); // Weight 5
      setRightBlocks([]); // Weight 0
      playSynthesizerNote('fail');
    } else if (type === 'symmetric') {
      setLeftBlocks([availableBlocks[0], availableBlocks[1]]); // Weight 5
      setRightBlocks([availableBlocks[0], availableBlocks[1]]); // Weight 5
      playSynthesizerNote('success');
    } else if (type === 'asymmetric') {
      // 1 Foto besar (3) di kiri diimbangi 1 Teks (2) + 1 Warna (1) di kanan = 3 vs 3!
      setLeftBlocks([availableBlocks[0]]); // Weight 3
      setRightBlocks([availableBlocks[1], availableBlocks[2]]); // Weight 3
      playSynthesizerNote('success');
    }
  };

  const handleReset = () => {
    playClick();
    setLeftBlocks([]);
    setRightBlocks([]);
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-3.5 sm:p-4 bg-white/70 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
      {/* Lab Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-purple-100 border border-slate-900 rounded-lg text-purple-600 font-bold text-xs">
            Lab 04
          </span>
          <h3 className="font-bold font-serif text-slate-900 text-sm sm:text-base">
            Timbangan Fisika: Bobot Visual Neraca Harmoni
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleApplyPreset('unbalanced')}
            className="px-2 py-1 text-[11px] font-bold rounded-lg border border-slate-900 bg-red-100 hover:bg-red-200 text-red-900 transition-all"
          >
            <InlineIcon name="TriangleAlert" /> Berat Sebelah
          </button>
          <button
            type="button"
            onClick={() => handleApplyPreset('symmetric')}
            className="px-2 py-1 text-[11px] font-bold rounded-lg border border-slate-900 bg-blue-100 hover:bg-blue-200 text-blue-900 transition-all"
          >
            <InlineIcon name="Scale" /> Simetris
          </button>
          <button
            type="button"
            onClick={() => handleApplyPreset('asymmetric')}
            className="px-2 py-1 text-[11px] font-bold rounded-lg border border-slate-900 bg-purple-100 hover:bg-purple-200 text-purple-900 shadow-[2px_2px_0px_#0f172a] transition-all"
          >
             Asimetris
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-all"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2 flex-1 items-stretch overflow-hidden">
        {/* Left: Interactive Balance Physics Simulation */}
        <div className="flex flex-col items-center justify-between p-3 rounded-xl border-2 border-slate-900 bg-amber-50/50 relative overflow-hidden">
          {/* Status Badge */}
          <div className="w-full flex items-center justify-between mb-1">
            <span className="text-xs font-mono font-bold text-slate-600">
              Baki Kiri: <strong>{leftWeight} Poin</strong>
            </span>
            {isBalanced ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Seimbang & Harmonis!
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-red-800 bg-red-100 px-2.5 py-0.5 rounded-full border border-red-400">
                <AlertTriangle className="w-3.5 h-3.5" /> {weightDiff < 0 ? 'Miring ke Kiri' : 'Miring ke Kanan'}
              </span>
            )}
            <span className="text-xs font-mono font-bold text-slate-600">
              Baki Kanan: <strong>{rightWeight} Poin</strong>
            </span>
          </div>

          {/* Scale Visualization Area */}
          <div className="w-full flex-1 flex flex-col items-center justify-center relative min-h-[140px]">
            {/* Center Fulcrum Post */}
            <div className="w-3 h-24 bg-slate-800 rounded-t-sm absolute bottom-2 z-10 shadow-md flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-slate-900 absolute -top-3 shadow" />
            </div>

            {/* Scale Base */}
            <div className="w-36 h-3 bg-slate-900 rounded-full absolute bottom-0 shadow-md" />

            {/* Rotating Beam */}
            <div
              className="w-full max-w-[280px] sm:max-w-[320px] h-3 bg-slate-800 rounded-full relative z-20 transition-transform duration-300 ease-out shadow"
              style={{
                transform: `rotate(${tiltAngle}deg)`
              }}
            >
              {/* Left Pan Attachment */}
              <div className="absolute -left-1 top-2 flex flex-col items-center">
                <div className="w-0.5 h-10 bg-slate-600" />
                <div className="w-24 min-h-[32px] bg-slate-900 rounded-b-xl border-2 border-slate-700 p-1 flex flex-col-reverse items-center gap-1 shadow-lg">
                  {leftBlocks.map((b, i) => (
                    <div
                      key={b.id}
                      onClick={() => removeBlock('left', i)}
                      className={`text-[9px] font-bold px-2 py-0.5 rounded border border-slate-900 cursor-pointer hover:opacity-75 transition-all ${b.color}`}
                      title="Klik untuk hapus"
                    >
                      {b.icon} {b.name} ({b.weight})
                    </div>
                  ))}
                  {leftBlocks.length === 0 && (
                    <span className="text-[9px] text-slate-400 italic">Kosong</span>
                  )}
                </div>
              </div>

              {/* Right Pan Attachment */}
              <div className="absolute -right-1 top-2 flex flex-col items-center">
                <div className="w-0.5 h-10 bg-slate-600" />
                <div className="w-24 min-h-[32px] bg-slate-900 rounded-b-xl border-2 border-slate-700 p-1 flex flex-col-reverse items-center gap-1 shadow-lg">
                  {rightBlocks.map((b, i) => (
                    <div
                      key={b.id}
                      onClick={() => removeBlock('right', i)}
                      className={`text-[9px] font-bold px-2 py-0.5 rounded border border-slate-900 cursor-pointer hover:opacity-75 transition-all ${b.color}`}
                      title="Klik untuk hapus"
                    >
                      {b.icon} {b.name} ({b.weight})
                    </div>
                  ))}
                  {rightBlocks.length === 0 && (
                    <span className="text-[9px] text-slate-400 italic">Kosong</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-slate-500 font-bold text-center">
            {isBalanced
              ? <><InlineIcon name="PartyPopper" />{" Bobot visual di kedua sisi setara! Desain tampak kokoh dan nyaman dinikmati."}</>
              : <><InlineIcon name="TriangleAlert" />{" Seperti neraca, jika elemen numpuk sebelah, desain tampak miring dan tidak nyaman dilihat."}</>}
          </p>
        </div>

        {/* Right: Block Controls & Legend */}
        <div className="flex flex-col justify-between gap-2 overflow-y-auto pr-1">
          <div>
            <p className="text-xs font-bold text-slate-700  tracking-wider mb-2">
              Tambah Balok Elemen Desain:
            </p>
            <div className="space-y-2">
              {availableBlocks.map((blk) => (
                <div
                  key={blk.id}
                  className="p-2 rounded-xl border-2 border-slate-300 bg-white flex items-center justify-between hover:border-slate-500 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{blk.icon}</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{blk.name}</span>
                      <span className="text-[10px] text-slate-500">Bobot Visual: {blk.weight} Poin</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => addBlock('left', blk)}
                      className="px-2 py-1 text-[10px] font-bold rounded-lg border border-slate-900 bg-amber-100 hover:bg-amber-200 text-slate-900 transition-all cursor-pointer"
                    >
                      + Kiri
                    </button>
                    <button
                      type="button"
                      onClick={() => addBlock('right', blk)}
                      className="px-2 py-1 text-[10px] font-bold rounded-lg border border-slate-900 bg-purple-100 hover:bg-purple-200 text-slate-900 transition-all cursor-pointer"
                    >
                      + Kanan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick concept tip */}
          <div className="p-2.5 rounded-xl border border-purple-300 bg-purple-50 text-[11px] text-purple-950">
            <strong className="block mb-0.5"><InlineIcon name="Lightbulb" /> Tips Asimetris Keren:</strong>
            1 Foto Besar (Bobot 3) di sebelah kiri dapat diseimbangkan secara sempurna oleh 1 Teks Judul (Bobot 2) ditambah 1 Lingkaran Warna (Bobot 1) di sebelah kanan tanpa harus menggunakan foto kembar!
          </div>
        </div>
      </div>

      {/* Lab Footer Takeaway */}
      <div className="text-[11px] text-slate-600 bg-purple-100/60 p-2 rounded-lg border border-purple-300 flex items-center justify-between">
        <span><InlineIcon name="Lightbulb" /> <strong>Intisari:</strong> Keseimbangan bisa dicapai secara simetris (formal) maupun asimetris (dinamis).</span>
        <span className="font-mono text-[10px] text-slate-500">Shot 8 Dasar Desain Visual</span>
      </div>
    </div>
  );
}
