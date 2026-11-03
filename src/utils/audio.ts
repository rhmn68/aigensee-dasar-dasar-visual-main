import clickUrl from '../assets/audio/click.mp3';

let clickAudio: HTMLAudioElement | null = null;
const DEFAULT_SFX_VOLUME = 0.6;

const getClickAudio = (): HTMLAudioElement | null => {
  if (typeof window === 'undefined') return null;
  if (!clickAudio) {
    clickAudio = new Audio(clickUrl);
    clickAudio.volume = DEFAULT_SFX_VOLUME;
    clickAudio.preload = 'auto';
  }
  return clickAudio;
};

export type SoundEffectType = 'btn' | 'click' | 'slide' | 'success' | 'fail' | 'unlock' | 'pop' | 'flip';

export const playSoundEffect = (type: SoundEffectType) => {
  if (type === 'btn' || type === 'click') {
    try {
      const baseClick = getClickAudio();
      if (baseClick) {
        const sound = baseClick.cloneNode() as HTMLAudioElement;
        sound.volume = DEFAULT_SFX_VOLUME;
        sound.play().catch(() => {
          playSynthesizerFallback('btn');
        });
        return;
      }
    } catch (e) {}
  }

  playSynthesizerFallback(type);
};

export const playClick = () => playSoundEffect('btn');
export const playSynthesizerNote = (type: SoundEffectType) => playSoundEffect(type);

const playSynthesizerFallback = (type: SoundEffectType) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    if (type === 'success') {
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.18, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.005, now + i * 0.08 + 0.25);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
      });
    } else if (type === 'unlock') {
      const notes = [392.00, 523.25, 659.25];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.09);
        gain.gain.setValueAtTime(0.2, now + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.005, now + i * 0.09 + 0.35);
        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + 0.4);
      });
    } else if (type === 'fail') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.18);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'slide') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.06);
    } else {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.06);
    }
  } catch (e) {}
};
