import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, HelpCircle, X } from 'lucide-react';

const colorSteps = [
  {
    target: 'warna-12-buttons',
    title: "Pilih dan Jelajahi Warna",
    description: 'Klik salah satu pilihan warna di bawah. Kartu, judul, dan penjelasan akan berubah mengikuti warna yang kamu pilih. Mulai dari biru, lalu jelajahi warna lainnya!',
  },
];

export function ColorGuide() {
  return <InteractionGuide steps={colorSteps} label="Panduan warna" />;
}

interface GuideStep {
  target: string;
  fallbackTarget?: string;
  title: string;
  description: string;
}

export function InteractionGuide({ steps, label }: { steps: GuideStep[]; label: string }) {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const panelRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      closeRef.current?.focus();
    } else if (dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    let target = document.getElementById(steps[step].target);
    if (target && !target.getClientRects().length && steps[step].fallbackTarget) {
      target = document.getElementById(steps[step].fallbackTarget!);
    }
    if (!target) return;
    const update = () => {
      const bounds = target.getBoundingClientRect();
      setRect(bounds);
      const panel = panelRef.current;
      if (!panel) return;
      const { width, height } = panel.getBoundingClientRect();
      const gap = 22;
      const margin = 16;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const beside = step === 0 && bounds.right + gap + width <= viewportWidth - margin;
      const left = beside ? bounds.right + gap : bounds.left + (bounds.width - width) / 2;
      const top = beside
        ? bounds.top + (bounds.height - height) / 2
        : bounds.top - gap - height >= margin
          ? bounds.top - gap - height
          : bounds.bottom + gap;
      setPosition({
        left: Math.max(margin, Math.min(left, viewportWidth - width - margin)),
        top: Math.max(margin, Math.min(top, viewportHeight - height - margin)),
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(target);
    if (panelRef.current) observer.observe(panelRef.current);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [open, step, steps]);

  return (
    <>
      <button
        type="button"
        onClick={() => { setStep(0); setOpen(true); }}
        className="fixed bottom-3 right-4 z-40 flex items-center gap-1.5 rounded-full border-2 border-[#004760] bg-white px-3 py-1.5 text-xs font-bold text-[#004760] shadow-[2px_2px_0_#00354c] hover:bg-sky-50"
      >
        <HelpCircle size={16} aria-hidden="true" /> Panduan
      </button>
      <dialog
        ref={dialogRef}
        onCancel={() => setOpen(false)}
        aria-labelledby="color-guide-title"
        aria-describedby="color-guide-description"
        className="color-guide-dialog"
      >
        {rect && <div aria-hidden="true" className="color-guide-spotlight" style={{ left: rect.left - 6, top: rect.top - 6, width: rect.width + 12, height: rect.height + 12 }} />}
        <section ref={panelRef} className="color-guide-panel" style={{ left: position.left, top: position.top }}>
          <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Tutup panduan" className="absolute right-3 top-3 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-blue-600">
            <X size={18} aria-hidden="true" />
          </button>
          <p className="mb-2 text-xs font-bold  tracking-wider text-blue-600">{label} · {step + 1} dari {steps.length}</p>
          <h2 id="color-guide-title" className="pr-8 text-xl font-bold text-slate-800">{steps[step].title}</h2>
          <p id="color-guide-description" className="mt-3 text-sm leading-relaxed text-slate-600" aria-live="polite">{steps[step].description}</p>
          <div className="mt-6 flex items-center justify-between gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              {steps.map((_, index) => <span key={index} className={`h-2 rounded-full ${index === step ? 'w-5 bg-blue-600' : 'w-2 bg-slate-300'}`} />)}
            </div>
            <div className="flex gap-2">
              {step > 0 && <button type="button" aria-label="Langkah sebelumnya" onClick={() => setStep(step - 1)} className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"><ArrowLeft size={18} /></button>}
              <button type="button" onClick={() => step < steps.length - 1 ? setStep(step + 1) : setOpen(false)} className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {step < steps.length - 1 ? 'Lanjut' : 'Mulai Eksplorasi'} <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </dialog>
    </>
  );
}
