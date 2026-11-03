import React, { useState, useEffect, useRef } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';
import judulRuangKosong from '../../assets/judul-ruangkosong.webp';
import ruangKosongIcon from '../../assets/ruangkosong.webp';
import ruangKosongAudioUrl from '../../assets/audio/ruangkosong.mp3';

interface RuangKosongPageProps {
  onBack: () => void;
  onCariTahu?: () => void;
}

export function RuangKosongPage({ onBack, onCariTahu }: RuangKosongPageProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Inisialisasi dan putar audio narasi ruang kosong secara otomatis saat masuk halaman
  useEffect(() => {
    const audio = new Audio(ruangKosongAudioUrl);
    audioRef.current = audio;
    audio.preload = 'auto';

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    // Otomatis langsung play saat awal masuk halaman Ruang Kosong
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
          const handleFirstGesture = () => {
            if (audioRef.current && audioRef.current.paused) {
              audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
            window.removeEventListener('pointerdown', handleFirstGesture);
            window.removeEventListener('keydown', handleFirstGesture);
          };
          window.addEventListener('pointerdown', handleFirstGesture, { once: true });
          window.addEventListener('keydown', handleFirstGesture, { once: true });
        });
    }

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleRestart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCariTahu = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    playSynthesizerNote('unlock');
    if (onCariTahu) {
      onCariTahu();
    }
  };

  const handleBack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    playClick();
    onBack();
  };

  return (
    <div
      id="ruang-kosong-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME (assets/background-judul.svg) */}
      <BackgroundFrame idPrefix="ruang-kosong" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Beranda)         */}
      {/* ========================================================================= */}
      <header
        id="ruang-kosong-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div
          id="ruang-kosong-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]"
        >
          <img
            id="ruang-kosong-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>

        {/* Back to Splash button */}
        <button
          id="ruang-kosong-btn-back"
          type="button"
          onClick={handleBack}
          className="pointer-events-auto group rounded-md sm:rounded-xl lg:rounded-2xl px-2.5 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none translate-y-1.5 sm:translate-y-2 md:translate-y-2.5 2xl:translate-y-3"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-1" />
          <span>Beranda</span>
        </button>
      </header>

      {/* SPACER ATAS: Mempertahankan ruang vertikal agar konten tidak terdorong */}
      <div
        id="ruang-kosong-header-spacer"
        className="w-full h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Gambar, Kanan Materi)           */}
      {/* Layout Konsisten 2-Kolom Berdampingan Seperti Desktop                      */}
      {/* ========================================================================= */}
      <main
        id="ruang-kosong-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="ruang-kosong-grid"
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* ===================================================================== */}
          {/* SISI KIRI: GAMBAR RUANG KOSONG (col-span-6)                           */}
          {/* ===================================================================== */}
          <div
            id="ruang-kosong-left-container"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="ruang-kosong-img-wrapper"
              className="relative flex items-center justify-center transition-all duration-300 mx-auto aspect-square select-none hover:scale-[1.03]"
              style={{
                height: 'min(68vh, 580px)',
                maxHeight: '96%',
                maxWidth: '100%',
                minHeight: '220px',
                aspectRatio: '1 / 1',
                width: 'auto'
              }}
            >
              <img
                id="ruang-kosong-left-img"
                src={ruangKosongIcon}
                alt="Ilustrasi Ruang Kosong"
                className="w-full h-full object-contain scale-110 sm:scale-115 drop-shadow-[0_16px_32px_rgba(0,53,76,0.22)] select-none pointer-events-none transition-transform duration-300"
              />
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SISI KANAN: JUDUL-RUANGKOSONG.WEBP + DESKRIPSI + TOMBOL CARI TAHU     */}
          {/* ===================================================================== */}
          <div
            id="ruang-kosong-right-content"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto"
          >
            {/* Container Presisi: Selaras dengan Kartu Kiri */}
            <div
              id="ruang-kosong-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-center items-center text-center mx-auto py-1 lg:py-2 gap-3 sm:gap-4 lg:gap-5 2xl:gap-6 transition-all duration-300 -translate-y-3 sm:-translate-y-4 lg:-translate-y-6 2xl:-translate-y-8"
              style={{
                height: 'min(68vh, 580px)',
                maxHeight: '96%',
                minHeight: '220px'
              }}
            >
              {/* 1. Judul Grafis 3D: judul-ruangkosong.webp */}
              <div
                id="ruang-kosong-title-wrapper"
                className="w-full flex justify-center items-start shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  id="ruang-kosong-title-img"
                  src={judulRuangKosong}
                  alt="Ruang Kosong"
                  className="w-auto max-w-[260px] sm:max-w-[360px] lg:max-w-[500px] 2xl:max-w-[590px] max-h-[16vh] lg:max-h-[19vh] 2xl:max-h-[22vh] h-auto object-contain drop-shadow-[0_8px_16px_rgba(16,185,129,0.25)]"
                />
              </div>

              {/* 2. Paragraf Deskripsi */}
              <div
                id="ruang-kosong-desc-wrapper"
                className="w-full my-auto py-1 lg:py-2 flex items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-2xl"
              >
                <p
                  id="ruang-kosong-description"
                  className="text-[9.5px] sm:text-[11px] md:text-xs lg:text-[13.5px] xl:text-sm 2xl:text-base text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify"
                >
                  Ruang kosong adalah area dalam sebuah desain yang sengaja dibiarkan tanpa teks, gambar, atau elemen visual lainnya untuk memberikan jarak dan ruang bernapas bagi setiap bagian desain. Ruang kosong membantu mata lebih mudah menemukan informasi penting, membuat tampilan terasa lebih rapi, nyaman, dan tidak terlalu penuh, serta dapat memperkuat fokus pada elemen utama. Ruang kosong tidak selalu berarti area berwarna putih, tetapi dapat berupa bagian kosong dengan warna atau latar apa pun selama tidak dipenuhi oleh elemen visual.
                </p>
              </div>

              {/* 3. Audio Narasi & Button Cari Tahu */}
              <div
                id="ruang-kosong-btn-wrapper"
                className="w-full flex flex-col items-center justify-end shrink-0 gap-2 lg:gap-2.5"
              >
                {/* Audio UI Player */}
                <div
                  id="ruang-kosong-audio-player"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-sky-50/95 border-2 border-[#004760] rounded-xl lg:rounded-2xl px-3 py-1.5 sm:py-2 shadow-[2px_2px_0px_#00354c] flex items-center gap-2.5 transition-all mb-3.5 sm:mb-4.5 lg:mb-6 2xl:mb-7"
                >
                  {/* Play / Pause Toggle Button */}
                  <button
                    id="ruang-kosong-audio-toggle-btn"
                    type="button"
                    onClick={togglePlay}
                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-[#00a1db] hover:bg-[#0bb2ef] text-white flex items-center justify-center border border-[#004760] shadow-[1px_1px_0px_#00354c] active:translate-x-[0.5px] active:translate-y-[0.5px] shrink-0 cursor-pointer transition-transform hover:scale-105"
                    title={isPlaying ? 'Jeda Audio' : 'Putar Audio'}
                    aria-label={isPlaying ? 'Jeda Audio' : 'Putar Audio'}
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current translate-x-0.5" />
                    )}
                  </button>

                  {/* Volume Icon (Inline separator: NOT overlapping with slider thumb) */}
                  <Volume2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${isPlaying ? 'text-[#00a1db]' : 'text-slate-500'}`} />

                  {/* Progress Slider */}
                  <div className="flex-1 flex items-center min-w-0">
                    <input
                      id="ruang-kosong-audio-slider"
                      type="range"
                      min={0}
                      max={duration > 0 ? duration : 100}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00a1db] focus:outline-none"
                      style={{
                        background: `linear-gradient(to right, #00a1db ${(currentTime / (duration || 1)) * 100}%, #cbd5e1 ${(currentTime / (duration || 1)) * 100}%)`
                      }}
                    />
                  </div>

                  {/* Time Display */}
                  <span className="font-mono text-[9px] sm:text-[11px] font-bold text-[#00354c] shrink-0 select-none">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  {/* Animated Wave Indicator */}
                  <div className="hidden sm:flex items-center gap-0.5 h-4 px-0.5 shrink-0">
                    {[45, 90, 60, 100, 35].map((h, i) => (
                      <span
                        key={i}
                        className={`w-0.5 rounded-full transition-all duration-300 ${
                          isPlaying ? 'bg-[#00a1db] animate-pulse' : 'bg-slate-300'
                        }`}
                        style={{
                          height: isPlaying ? `${h}%` : '25%',
                          animationDelay: `${i * 120}ms`
                        }}
                      />
                    ))}
                  </div>

                  {/* Restart Audio Button */}
                  <button
                    id="ruang-kosong-audio-restart-btn"
                    type="button"
                    onClick={handleRestart}
                    className="p-1 sm:p-1.5 text-slate-600 hover:text-[#00a1db] hover:bg-white rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Ulangi audio dari awal"
                    aria-label="Ulangi audio"
                  >
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>

                {/* Button Cari Tahu */}
                <button
                  id="ruang-kosong-btn-cari-tahu"
                  type="button"
                  onClick={handleCariTahu}
                  className="bg-[#00a1db] hover:bg-[#0bb2ef] text-white border-2 lg:border-3 border-[#004760] shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] rounded-xl lg:rounded-2xl px-6 lg:px-11 2xl:px-14 py-2 lg:py-2.5 2xl:py-3.5 font-serif font-black text-xs sm:text-sm lg:text-base 2xl:text-lg uppercase tracking-wider flex items-center gap-2 lg:gap-2.5 transition-all cursor-pointer group"
                >
                  <span>Cari Tahu</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Area Kosong */}
      <footer id="ruang-kosong-footer" className="h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 z-20 shrink-0 pointer-events-none" />
    </div>
  );
}
