import { useState, useEffect } from 'react';
import { MateriId, UserProgress } from '../types';

const STORAGE_KEY = 'ddv_user_progress_v4';

const defaultProgress: UserProgress = {
  completedMateri: {
    'warna': false,
    'tipografi': false,
    'ruang-kosong': false,
    'keseimbangan': false,
    'contoh-desain': false
  },
  exploredLabs: {
    'warna': false,
    'tipografi': false,
    'ruang-kosong': false,
    'keseimbangan': false,
    'contoh-desain': false
  }
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window === 'undefined') return defaultProgress;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const markMateriCompleted = (id: MateriId) => {
    setProgress((prev) => ({
      ...prev,
      completedMateri: {
        ...prev.completedMateri,
        [id]: true
      }
    }));
  };

  const markLabExplored = (id: MateriId) => {
    setProgress((prev) => ({
      ...prev,
      exploredLabs: {
        ...prev.exploredLabs,
        [id]: true
      },
      completedMateri: {
        ...prev.completedMateri,
        [id]: true
      }
    }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const completedCount = Object.values(progress.completedMateri).filter(Boolean).length;
  const totalMateris = 5;
  const progressPercent = Math.round((completedCount / totalMateris) * 100);

  return {
    progress,
    completedCount,
    progressPercent,
    markMateriCompleted,
    markLabExplored,
    resetProgress
  };
}
