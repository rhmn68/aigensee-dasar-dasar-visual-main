import { createPortal } from 'react-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Music2, VolumeX } from 'lucide-react';
import bgmUrl from '../assets/audio/study-cheerful.mp3';
import { isNarrationPlaying, subscribeToNarration } from '../utils/narration';

export function BackgroundMusic({ view }: { view: string }) {
  const [controlSlot, setControlSlot] = useState<HTMLElement | null>(null);
  useLayoutEffect(() => {
    setControlSlot(view === 'splash' ? null : document.getElementById('module-music-control'));
  }, [view]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let frame = 0;
    const updateVolume = () => {
      cancelAnimationFrame(frame);
      const startVolume = audio.volume;
      const target = isNarrationPlaying() ? 0.025 : 0.18;
      const duration = isNarrationPlaying() ? 250 : 900;
      const start = performance.now();
      const fade = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        audio.volume = startVolume + (target - startVolume) * progress;
        if (progress < 1) frame = requestAnimationFrame(fade);
      };
      frame = requestAnimationFrame(fade);
    };
    audio.volume = isNarrationPlaying() ? 0.025 : 0.18;
    const unsubscribe = subscribeToNarration(updateVolume);
    return () => {
      unsubscribe();
      cancelAnimationFrame(frame);
      audio.pause();
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setError(false);
    if (!audio.paused) {
      audio.pause();
      return;
    }
    try {
      await audio.play();
    } catch {
      setError(true);
    }
  };

  const musicButton = (
    <button
        id="app-music-toggle"
        data-inline={controlSlot ? "true" : "false"}
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Matikan musik latar' : 'Nyalakan musik latar'}
        title={playing ? 'Matikan musik latar' : 'Nyalakan musik latar'}
        className="pointer-events-auto z-40 flex items-center justify-center rounded-xl border-2 border-[#004760] bg-[#00a1db] text-white p-2.5 shadow-[3px_3px_0_#00354c] transition-colors hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
      >
        {playing ? <Music2 size={20} aria-hidden="true" /> : <VolumeX size={20} aria-hidden="true" />}
      </button>
  );

  return (
    <>
      <audio ref={audioRef} src={bgmUrl} loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setError(true); }} />
      {controlSlot ? createPortal(musicButton, controlSlot) : musicButton}
      {error && <p role="status" className="fixed right-4 top-20 z-40 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-[#004760] shadow">Musik belum dapat diputar. Klik tombol musik untuk mencoba lagi.</p>}
    </>
  );
}
