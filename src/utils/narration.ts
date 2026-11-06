const activeNarrations = new Set<HTMLAudioElement>();
const changeEvent = 'app:narration-change';

export const isNarrationPlaying = () => activeNarrations.size > 0;

export function subscribeToNarration(listener: () => void) {
  window.addEventListener(changeEvent, listener);
  return () => window.removeEventListener(changeEvent, listener);
}

// Narration uses detached Audio instances, so DOM audio events cannot detect it.
export function trackNarration(audio: HTMLAudioElement) {
  const update = () => {
    if (!audio.paused && !audio.ended && !audio.muted && audio.volume > 0) activeNarrations.add(audio);
    else activeNarrations.delete(audio);
    window.dispatchEvent(new Event(changeEvent));
  };
  const events = ['play', 'pause', 'ended', 'error', 'volumechange'] as const;
  events.forEach(event => audio.addEventListener(event, update));
  update();
  return () => {
    events.forEach(event => audio.removeEventListener(event, update));
    activeNarrations.delete(audio);
    window.dispatchEvent(new Event(changeEvent));
  };
}
