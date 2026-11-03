import React from 'react';
import { RotateCw, Smartphone } from 'lucide-react';

export function PortraitWarning() {
  return (
    <div
      id="portrait-warning-overlay"
      className="hidden portrait:flex fixed inset-0 z-[9999] bg-[#0F172A] text-slate-100 flex-col items-center justify-center text-center p-6 select-none"
    >
      <div id="portrait-phone-animation" className="relative w-24 h-24 mb-8 flex items-center justify-center">
        <div 
          id="portrait-phone-frame"
          className="w-12 h-20 border-4 border-slate-600 rounded-xl bg-slate-800 flex items-center justify-center transition-transform" 
          style={{ 
            animation: 'portraitRotate 1.2s ease-in-out infinite' 
          }}
        >
          <Smartphone className="w-6 h-6 text-orange-400" />
        </div>
        <RotateCw className="w-8 h-8 text-orange-500 absolute -top-1 -right-1 animate-spin" />
      </div>

      <h2 id="portrait-warning-title" className="text-base font-black tracking-wider text-white mb-2 uppercase font-serif">
        Gunakan Mode Lanskap (Horizontal)
      </h2>
      <p id="portrait-warning-desc" className="text-xs text-slate-400 max-w-xs leading-relaxed font-sans">
        Silakan putar perangkat Anda ke orientasi <strong>horizontal</strong> agar seluruh studio pembelajaran dan lab interaktif tampil fokus dan nyaman digunakan.
      </p>

      <style>{`
        @keyframes portraitRotate {
          0%, 20% { transform: rotate(0deg); }
          50%, 80% { transform: rotate(-90deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
