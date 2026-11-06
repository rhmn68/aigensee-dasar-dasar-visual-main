import { useEffect, useRef, useState } from 'react';
import { Music2, VolumeX } from 'lucide-react';
import bgmUrl from '../assets/audio/bgm.mp3';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;
    // Keep narration clear while a lesson's audio is playing.
    const updateVolume = () => {
      const narrationPlaying = Array.from(document.querySelectorAll('audio')).some(
        (other) => other !== audio && !other.paused && !other.ended,
      );
      audio.volume = narrationPlaying ? 0.04 : 0.18;
    };
    document.addEventListener('play', updateVolume, true);
    document.addEventListener('pause', updateVolume, true);
    document.addEventListener('ended', updateVolume, true);
    return () => {
      document.removeEventListener('play', updateVolume, true);
      document.removeEventListener('pause', updateVolume, true);
      document.removeEventListener('ended', updateVolume, true);
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

  return (
    <>
      <audio ref={audioRef} src={bgmUrl} loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setError(true); }} />
      <button
        id="app-music-toggle"
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Matikan musik latar' : 'Nyalakan musik latar'}
        title={playing ? 'Matikan musik latar' : 'Nyalakan musik latar'}
        className={`fixed z-40 flex items-center justify-center rounded-xl border-2 border-[#004760] p-2.5 shadow-[3px_3px_0_#00354c] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 ${playing ? 'bg-[#00a1db] text-white hover:bg-sky-500' : 'bg-white text-[#004760] hover:bg-sky-50'}`}
      >
        {playing ? <Music2 size={20} aria-hidden="true" /> : <VolumeX size={20} aria-hidden="true" />}
      </button>
      {error && <p role="status" className="fixed right-4 top-20 z-40 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-[#004760] shadow">Musik belum dapat diputar. Klik tombol musik untuk mencoba lagi.</p>}
    </>
  );
}
