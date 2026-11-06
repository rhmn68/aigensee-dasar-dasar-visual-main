import { BackgroundMusic } from './components/BackgroundMusic';
import React, { useState, useEffect } from 'react';
import { MateriId } from './types';
import { useProgress } from './hooks/useProgress';
import { SplashPage } from './pages/splash/SplashPage';
import { WarnaIntroPage } from './pages/materi/WarnaIntroPage';
import { WarnaArtiPage } from './pages/materi/WarnaArtiPage';
import { TipografiPage } from './pages/materi/TipografiPage';
import { TipografiArtiPage } from './pages/materi/TipografiArtiPage';
import { RuangKosongPage } from './pages/materi/RuangKosongPage';
import { RuangKosongArtiPage } from './pages/materi/RuangKosongArtiPage';
import { KeseimbanganPage } from './pages/materi/KeseimbanganPage';
import { KeseimbanganArtiPage } from './pages/materi/KeseimbanganArtiPage';
import { ContohDesainPage } from './pages/materi/ContohDesainPage';
import { ContohDesainArtiPage } from './pages/materi/ContohDesainArtiPage';
import { PortraitWarning } from './components/PortraitWarning';

const validMateriIds: MateriId[] = ['warna', 'tipografi', 'ruang-kosong', 'keseimbangan', 'contoh-desain'];

export type AppView =
  | 'splash'
  | MateriId
  | 'warna-arti'
  | 'tipografi-arti'
  | 'ruang-kosong-arti'
  | 'keseimbangan-arti'
  | 'contoh-desain-arti';

const artiRoutes: Record<string, AppView> = {
  'warna/arti': 'warna-arti',
  'warna-arti': 'warna-arti',
  'tipografi/arti': 'tipografi-arti',
  'tipografi-arti': 'tipografi-arti',
  'ruang-kosong/arti': 'ruang-kosong-arti',
  'ruang-kosong-arti': 'ruang-kosong-arti',
  'keseimbangan/arti': 'keseimbangan-arti',
  'keseimbangan-arti': 'keseimbangan-arti',
  'contoh-desain/arti': 'contoh-desain-arti',
  'contoh-desain-arti': 'contoh-desain-arti',
  'kesimpulan/arti': 'contoh-desain-arti',
  'kesimpulan-arti': 'contoh-desain-arti',
  'kesimpulan': 'contoh-desain'
};

const getViewFromUrl = (): AppView => {
  if (typeof window === 'undefined') return 'splash';

  // 1. Check Hash first (primary for GitHub Pages SPA to prevent 404 on refresh)
  const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  if (rawHash) {
    if (artiRoutes[rawHash]) {
      return artiRoutes[rawHash];
    }
    if (validMateriIds.includes(rawHash as MateriId)) {
      return rawHash as MateriId;
    }
  }

  // 2. Check query parameter fallback (e.g. ?p=/warna)
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const paramRoute = searchParams.get('p') || searchParams.get('route');
    if (paramRoute) {
      const cleanParam = paramRoute.replace(/^\/+|\/+$/g, '').toLowerCase().trim();
      if (artiRoutes[cleanParam]) {
        return artiRoutes[cleanParam];
      }
      if (validMateriIds.includes(cleanParam as MateriId)) {
        return cleanParam as MateriId;
      }
    }
  } catch (e) {}

  // 3. Check Pathname (stripping repository base path if present)
  const pathSegments = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  const baseSegments = import.meta.env.BASE_URL.split('/').filter(Boolean);
  const filteredSegments = pathSegments.slice(
    baseSegments.every((segment, index) => segment === pathSegments[index]) ? baseSegments.length : 0
  );
  const cleanPath = filteredSegments.join('/').toLowerCase();

  if (cleanPath) {
    if (artiRoutes[cleanPath]) {
      return artiRoutes[cleanPath];
    }
    if (validMateriIds.includes(cleanPath as MateriId)) {
      return cleanPath as MateriId;
    }
    const lastSeg = filteredSegments[filteredSegments.length - 1]?.toLowerCase();
    if (lastSeg) {
      if (artiRoutes[lastSeg]) {
        return artiRoutes[lastSeg];
      }
      if (validMateriIds.includes(lastSeg as MateriId)) {
        return lastSeg as MateriId;
      }
    }
  }

  return 'splash';
};

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(getViewFromUrl);
  const { progress, markMateriCompleted } = useProgress();

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentView(getViewFromUrl());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (view: AppView) => {
    if (view === 'splash') {
      if (window.location.hash) {
        // Cleanly remove hash while staying on the current base repository URL
        const cleanPath = window.location.pathname + window.location.search;
        window.history.pushState(null, '', cleanPath);
      }
    } else {
      const targetHash = `#/${view}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
    }
    setCurrentView(view);
    if (view !== 'splash') {
      const baseMateri = view.replace('-arti', '') as MateriId;
      if (validMateriIds.includes(baseMateri)) {
        markMateriCompleted(baseMateri);
      }
    }
  };

  const handleStartMateri = (id: MateriId) => {
    navigateTo(id);
  };

  const handleBackToSplash = () => {
    navigateTo('splash');
  };

  return (
    <div
      id="app-root"
      className="h-screen w-screen overflow-hidden bg-white antialiased text-slate-900 relative"
    >
      {/* Mobile Landscape Orientation Advisory */}
      <BackgroundMusic />
      <PortraitWarning />

      {/* Screen Views */}
      {currentView === 'splash' && (
        <SplashPage
          onStartMateri={handleStartMateri}
          completedMateri={progress.completedMateri}
        />
      )}

      {/* 1. Modul Warna */}
      {currentView === 'warna' && (
        <WarnaIntroPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('warna-arti')}
        />
      )}

      {currentView === 'warna-arti' && (
        <WarnaArtiPage
          onBack={() => navigateTo('warna')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 2. Modul Tipografi */}
      {currentView === 'tipografi' && (
        <TipografiPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('tipografi-arti')}
        />
      )}

      {currentView === 'tipografi-arti' && (
        <TipografiArtiPage
          onBack={() => navigateTo('tipografi')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 3. Modul Ruang Kosong */}
      {currentView === 'ruang-kosong' && (
        <RuangKosongPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('ruang-kosong-arti')}
        />
      )}

      {currentView === 'ruang-kosong-arti' && (
        <RuangKosongArtiPage
          onBack={() => navigateTo('ruang-kosong')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 4. Modul Keseimbangan */}
      {currentView === 'keseimbangan' && (
        <KeseimbanganPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('keseimbangan-arti')}
        />
      )}

      {currentView === 'keseimbangan-arti' && (
        <KeseimbanganArtiPage
          onBack={() => navigateTo('keseimbangan')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 5. Modul Contoh Desain */}
      {currentView === 'contoh-desain' && (
        <ContohDesainPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('contoh-desain-arti')}
        />
      )}

      {currentView === 'contoh-desain-arti' && (
        <ContohDesainArtiPage
          onBack={() => navigateTo('contoh-desain')}
          onHome={handleBackToSplash}
        />
      )}

      {/* Footer Copyright: Hanya tampil di halaman tanpa kontrol interaktif */}
      {!currentView.endsWith('-arti') && (
        <footer
          id="app-copyright"
          className={`fixed bottom-0.5 sm:bottom-1.5 left-0 right-0 z-40 text-center pointer-events-none select-none text-[7.5px] sm:text-[9px] md:text-xs font-['CCRegeneration','CC_Regeneration',sans-serif] tracking-wider ${
            currentView === 'splash' ? 'text-white' : 'text-slate-600'
          }`}
        >
          © Copyright 2026 Pusat Perbukuan
        </footer>
      )}
    </div>
  );
}
