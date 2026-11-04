import { ColorGuide } from '../../components/ColorGuide';
import React, { useState } from 'react';
import { playClick } from '../../utils/audio';
import {
  ArrowLeft,
  Home,
  Waves,
  Zap,
  Sun,
  Leaf,
  Flame,
  Lightbulb,
  Heart,
  Droplets,
  Coffee,
  Crown,
  Sparkles,
  Scale,
  type LucideIcon
} from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';

export interface ColorDetail {
  id: string;
  name: string;
  icon: LucideIcon;
  meaning: string;
  objectName: string;
  traitDesc: string;
  hex: string;
  textColor: string;
  tag: string;
  description: string;
  traits: string[];
}

export const colorDetails: ColorDetail[] = [
  {
    id: 'biru',
    name: 'Biru',
    icon: Waves,
    meaning: 'Gelombang air — tenang, mengalir',
    objectName: 'Gelombang air',
    traitDesc: 'tenang, mengalir',
    hex: '#0066cc',
    textColor: '#ffffff',
    tag: 'Warna Dingin',
    description:
      'Biru sering digunakan untuk membangun kesan tenang, terpercaya, dan profesional. Warna ini memberikan nuansa yang stabil dan membuat seseorang merasa lebih aman ketika melihatnya. Dalam branding, biru banyak digunakan oleh perusahaan teknologi, pendidikan, kesehatan, dan layanan profesional yang ingin menunjukkan kredibilitas serta kepercayaan kepada audiens.',
    traits: ['Tenang', 'Terpercaya', 'Profesional', 'Stabil']
  },
  {
    id: 'merah',
    name: 'Merah',
    icon: Zap,
    meaning: 'Petir — berani, energik, kuat',
    objectName: 'Petir',
    traitDesc: 'berani, energik, kuat',
    hex: '#dc2626',
    textColor: '#ffffff',
    tag: 'Warna Hangat',
    description:
      'Merah memiliki karakter yang berani, kuat, dan energik. Warna ini mudah menarik perhatian dan dapat memberikan kesan penuh semangat, keberanian, serta dorongan untuk bertindak. Dalam desain, merah cocok digunakan pada promosi, makanan, olahraga, atau kampanye yang membutuhkan tampilan kuat dan ingin segera mendapatkan perhatian audiens.',
    traits: ['Berani', 'Kuat', 'Energik', 'Semangat']
  },
  {
    id: 'kuning',
    name: 'Kuning',
    icon: Sun,
    meaning: 'Matahari — ceria, optimis, menarik',
    objectName: 'Matahari',
    traitDesc: 'ceria, optimis, menarik',
    hex: '#eab308',
    textColor: '#0f172a',
    tag: 'Warna Hangat',
    description:
      'Kuning memberikan nuansa ceria, optimis, dan menarik perhatian. Warna ini terasa terang dan positif sehingga dapat membuat sebuah desain terlihat lebih hidup serta menyenangkan. Kuning cocok digunakan untuk menyampaikan kebahagiaan, kreativitas, semangat, dan suasana positif, terutama pada desain yang ditujukan untuk menarik perhatian dalam waktu singkat.',
    traits: ['Ceria', 'Optimis', 'Menarik', 'Positif']
  },
  {
    id: 'hijau',
    name: 'Hijau',
    icon: Leaf,
    meaning: 'Daun — alami, segar, sehat',
    objectName: 'Daun',
    traitDesc: 'alami, segar, sehat',
    hex: '#16a34a',
    textColor: '#ffffff',
    tag: 'Warna Alam',
    description:
      'Hijau erat kaitannya dengan kesan alami, segar, dan sehat. Warna ini banyak ditemukan di alam sehingga secara visual dapat mengingatkan pada tumbuhan, lingkungan, dan pertumbuhan. Dalam branding, hijau cocok untuk produk kesehatan, lingkungan, makanan, pendidikan, maupun organisasi yang ingin menunjukkan keseimbangan, kepedulian, dan kesan menyegarkan.',
    traits: ['Alami', 'Segar', 'Sehat', 'Pertumbuhan']
  },
  {
    id: 'oranye',
    name: 'Oranye',
    icon: Flame,
    meaning: 'Api — hangat, antusias, aktif',
    objectName: 'Api',
    traitDesc: 'hangat, antusias, aktif',
    hex: '#ea580c',
    textColor: '#ffffff',
    tag: 'Warna Hangat',
    description:
      'Oranye menghadirkan suasana hangat, ramah, dan antusias. Warna ini memiliki energi yang cukup kuat seperti merah, tetapi terasa lebih bersahabat dan menyenangkan. Oranye dapat digunakan untuk brand atau desain yang ingin terlihat aktif, komunikatif, dan dekat dengan audiens, misalnya pada kegiatan anak muda, komunitas, hiburan, maupun promosi.',
    traits: ['Hangat', 'Ramah', 'Antusias', 'Aktif']
  },
  {
    id: 'ungu',
    name: 'Ungu',
    icon: Lightbulb,
    meaning: 'Bohlam — kreatif, imajinatif, ide',
    objectName: 'Bohlam',
    traitDesc: 'kreatif, imajinatif, ide',
    hex: '#9333ea',
    textColor: '#ffffff',
    tag: 'Warna Kreatif',
    description:
      'Ungu sering dikaitkan dengan kreativitas, imajinasi, dan keunikan. Warna ini memiliki karakter yang berbeda dari warna-warna umum sehingga dapat membantu sebuah desain terlihat lebih khas dan mudah diingat. Ungu juga dapat memberikan sentuhan elegan dan misterius, sehingga cocok untuk brand yang ingin menunjukkan inovasi dan karakter yang tidak biasa.',
    traits: ['Kreativitas', 'Imajinasi', 'Keunikan', 'Inovasi']
  },
  {
    id: 'pink',
    name: 'Pink',
    icon: Heart,
    meaning: 'Hati — lembut, ceria, bersahabat',
    objectName: 'Hati',
    traitDesc: 'lembut, ceria, bersahabat',
    hex: '#db2777',
    textColor: '#ffffff',
    tag: 'Warna Lembut',
    description:
      'Pink memberikan kesan lembut, ceria, dan bersahabat. Warna ini dapat membuat sebuah desain terasa lebih hangat, menyenangkan, dan mudah didekati. Selain sering digunakan untuk menunjukkan kelembutan dan kasih sayang, pink juga dapat tampil modern dan energik jika dipadukan dengan warna serta bentuk desain yang tepat.',
    traits: ['Lembut', 'Ceria', 'Bersahabat', 'Kasih Sayang']
  },
  {
    id: 'cyan',
    name: 'Cyan',
    icon: Droplets,
    meaning: 'Tetes air — segar, modern, komunikatif',
    objectName: 'Tetes air',
    traitDesc: 'segar, modern, komunikatif',
    hex: '#0891b2',
    textColor: '#ffffff',
    tag: 'Warna Digital',
    description:
      'Cyan memiliki karakter segar, modern, dan komunikatif. Perpaduan nuansa biru dan hijau membuat warna ini terasa ringan sekaligus dinamis. Cyan sering digunakan dalam desain digital, teknologi, pendidikan, dan media karena memberikan kesan terbuka, inovatif, serta dekat dengan dunia modern dan perkembangan teknologi.',
    traits: ['Segar', 'Modern', 'Komunikatif', 'Inovatif']
  },
  {
    id: 'cokelat',
    name: 'Cokelat',
    icon: Coffee,
    meaning: 'Cangkir — hangat, natural, nyaman',
    objectName: 'Cangkir',
    traitDesc: 'hangat, natural, nyaman',
    hex: '#78350f',
    textColor: '#ffffff',
    tag: 'Warna Bumi',
    description:
      'Cokelat membawa nuansa hangat, natural, dan nyaman. Warna ini mengingatkan pada tanah, kayu, kopi, dan berbagai material alami sehingga memberikan kesan sederhana dan membumi. Dalam branding, cokelat dapat digunakan untuk menciptakan suasana yang akrab dan dapat dipercaya, terutama pada produk makanan, kerajinan, kopi, atau brand yang menonjolkan unsur alami.',
    traits: ['Hangat', 'Natural', 'Nyaman', 'Membumi']
  },
  {
    id: 'hitam',
    name: 'Hitam',
    icon: Crown,
    meaning: 'Mahkota — elegan, kuat, berkelas',
    objectName: 'Mahkota',
    traitDesc: 'elegan, kuat, berkelas',
    hex: '#0f172a',
    textColor: '#ffffff',
    tag: 'Warna Netral',
    description:
      'Hitam dikenal sebagai warna yang elegan, kuat, dan serius. Penggunaannya dapat memberikan kesan tegas sekaligus premium, terutama ketika dipadukan dengan tata letak yang sederhana dan bersih. Dalam branding, hitam sering digunakan untuk menunjukkan profesionalisme, eksklusivitas, kekuatan, dan karakter yang berani tanpa membutuhkan banyak elemen visual.',
    traits: ['Elegan', 'Kuat', 'Serius', 'Eksklusif']
  },
  {
    id: 'putih',
    name: 'Putih',
    icon: Sparkles,
    meaning: 'Kilau/bintang — bersih, sederhana, terbuka',
    objectName: 'Kilau/bintang',
    traitDesc: 'bersih, sederhana, terbuka',
    hex: '#ffffff',
    textColor: '#0f172a',
    tag: 'Warna Netral',
    description:
      'Putih melambangkan kebersihan, kesederhanaan, dan keterbukaan. Dalam desain, warna putih memberikan ruang visual yang lega sehingga informasi dan elemen penting dapat terlihat lebih jelas. Warna ini juga membantu menciptakan tampilan yang minimalis, rapi, dan modern, serta mudah dipadukan dengan hampir semua warna lainnya.',
    traits: ['Kebersihan', 'Kesederhanaan', 'Keterbukaan', 'Minimalis']
  },
  {
    id: 'abu-abu',
    name: 'Abu-abu',
    icon: Scale,
    meaning: 'Timbangan — netral, profesional, seimbang',
    objectName: 'Timbangan',
    traitDesc: 'netral, profesional, seimbang',
    hex: '#475569',
    textColor: '#ffffff',
    tag: 'Warna Netral',
    description:
      'Abu-abu memiliki karakter netral, profesional, dan sederhana. Karena tidak terlalu kuat secara emosional, warna ini dapat menjadi penyeimbang ketika digunakan bersama warna yang lebih mencolok. Abu-abu sering digunakan dalam desain modern, teknologi, dan identitas perusahaan untuk memberikan kesan formal, stabil, dewasa, dan tidak berlebihan.',
    traits: ['Netral', 'Profesional', 'Sederhana', 'Stabil']
  }
];

interface WarnaArtiPageProps {
  onBack: () => void;
  onHome: () => void;
}

export function WarnaArtiPage({ onBack, onHome }: WarnaArtiPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeColor = colorDetails[selectedIndex];
  const ActiveIcon = activeColor.icon;

  const handleSelectColor = (index: number) => {
    playClick();
    setSelectedIndex(index);
  };

  return (
    <div
      id="warna-arti-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      <ColorGuide />

      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME (assets/background-judul.svg) */}
      <BackgroundFrame idPrefix="warna-arti" />

      {/* LAYER 2 (z-30): TOP HEADER (Fixed di atas, digeser ke bawah di md & 2xl) */}
      <header
        id="warna-arti-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-2.5 sm:px-4 md:px-6 lg:px-8 2xl:px-10 pt-1.5 sm:pt-2 md:pt-3.5 lg:pt-4 2xl:pt-6 pointer-events-none"
      >
        <div id="warna-arti-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto translate-x-[8px] translate-y-[16px]">
          <img
            id="warna-arti-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)] transition-transform hover:scale-105"
          />
        </div>

        {/* Buttons on top right: Roda Warna & Beranda (Digeser ke bawah di md & 2xl) */}
        <div id="warna-arti-header-actions" className="flex items-center gap-1 sm:gap-2 lg:gap-3 pointer-events-auto translate-y-1.5 sm:translate-y-2 md:translate-y-2.5 2xl:translate-y-3">
          <button
            id="warna-arti-btn-back"
            type="button"
            onClick={() => {
              playClick();
              onBack();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2 sm:px-3 lg:px-6 py-1 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-1" />
            <span>Roda Warna</span>
          </button>

          <button
            id="warna-arti-btn-home"
            type="button"
            onClick={() => {
              playClick();
              onHome();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2 sm:px-3 lg:px-6 py-1 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-[#00a1db] hover:bg-[#0bb2ef] text-white shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none"
          >
            <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-5 lg:h-5" />
            <span>Beranda</span>
          </button>
        </div>
      </header>

      {/* SPACER ATAS: Memberikan safe zone vertikal proporsional */}
      <div id="warna-arti-header-spacer" className="w-full h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-16 shrink-0 pointer-events-none" aria-hidden="true" />

      {/* LAYER 2 (z-20): MAIN CONTENT (Berada di dalam safe zone SVG frame) */}
      <main
        id="warna-arti-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="warna-arti-grid"
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* SISI KIRI: FULL COLOR CARD DENGAN ICON PUTIH (col-span-6 lg:col-span-5) */}
          <div
            id="warna-arti-left-card"
            className="col-span-6 lg:col-span-5 flex items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="warna-arti-visual-card"
              className="group hover-float relative flex items-center justify-center transition-all duration-500 ease-out mx-auto rounded-2xl lg:rounded-3xl hover:rounded-full border-2 sm:border-3 border-[#004760] shadow-[4px_4px_0px_#00354c] sm:shadow-[5px_5px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] hover:shadow-[6px_14px_0px_#00354c] sm:hover:shadow-[8px_18px_0px_#00354c] hover:-translate-y-3 sm:hover:-translate-y-4 hover:scale-[1.03] cursor-pointer select-none overflow-hidden text-center p-4 sm:p-6"
              style={{
                backgroundColor: activeColor.hex,
                height: 'min(62vh, 500px)',
                maxHeight: '94%',
                width: 'min(62vh, 500px)',
                maxWidth: '100%',
                aspectRatio: '1 / 1'
              }}
            >
              {/* Icon Putih Besar (Smooth Scale & Float) */}
              <ActiveIcon
                id="warna-arti-card-icon"
                className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 2xl:w-44 2xl:h-44 stroke-[2.2] ${
                  activeColor.id === 'putih' ? 'text-slate-900' : 'text-white'
                } filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}
              />
            </div>
          </div>

          {/* SISI KANAN: TITLE & DESKRIPSI SESUAI WARNA YANG DIPILIH (col-span-6 lg:col-span-7) */}
          <div
            id="warna-arti-right-content"
            className="col-span-6 lg:col-span-7 flex items-center justify-center h-full w-full min-h-0 my-auto"
          >
            {/* Container Presisi: Selaras dengan Kartu Kiri */}
            <div
              id="warna-arti-content-box"
              className="w-full max-w-xl 2xl:max-w-3xl flex flex-col justify-center items-center text-center mx-auto py-1 sm:py-2 gap-2.5 sm:gap-3.5 lg:gap-4.5 2xl:gap-6 transition-all duration-300"
              style={{
                height: 'min(62vh, 500px)',
                maxHeight: '94%'
              }}
            >
              {/* 1. Title Warna Terpilih (Besar, Bold di 2xl & Responsive) */}
              <div id="warna-arti-title-wrapper" className="w-full flex justify-center items-center shrink-0">
                <h2
                  id="warna-arti-title-text"
                  className="font-serif font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl uppercase tracking-wider text-center transition-all duration-300 drop-shadow-xs"
                  style={{
                    color: activeColor.id === 'putih' ? '#ffffff' : activeColor.hex,
                    textShadow:
                      activeColor.id === 'putih'
                        ? '2px 2px 0px #004760, -2px -2px 0px #004760, 2px -2px 0px #004760, -2px 2px 0px #004760, 0px 3px 0px #00354c'
                        : '2px 2px 0px rgba(0, 53, 76, 0.15)'
                  }}
                >
                  Warna {activeColor.name}
                </h2>
              </div>

              {/* 2. Paragraf Deskripsi & Karakter Warna (Jarak Harmonis & Rapat Proporsional dengan Title) */}
              <div id="warna-arti-desc-wrapper" className="w-full flex flex-col items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-3xl px-1 sm:px-2">
                <p id="warna-arti-description" className="text-xs sm:text-[13px] md:text-sm lg:text-[15px] 2xl:text-lg text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify mb-2 sm:mb-2.5 lg:mb-3 2xl:mb-4">
                  {activeColor.description}
                </p>

                {/* Trait Pills (Hanya ditampilkan di desktop: lg ke atas) */}
                <div id="warna-arti-traits-container" className="hidden lg:flex items-center justify-center gap-2 2xl:gap-3 flex-wrap w-full">
                  {activeColor.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      id={`warna-arti-trait-${tIdx}`}
                      className="px-2.5 sm:px-3 2xl:px-4 py-0.5 sm:py-1 2xl:py-1.5 rounded-lg 2xl:rounded-xl text-xs 2xl:text-sm font-black border-2 border-[#004760] bg-white text-[#004760] shadow-[2px_2px_0px_#00354c] 2xl:shadow-[3px_3px_0px_#00354c]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* LAYER 3 (z-30): BOTTOM COLOR BUTTONS DOCK (Digeser ke atas pada md & 2xl) */}
      <footer
        id="warna-arti-footer-buttons"
        className="w-full z-30 shrink-0 flex items-center justify-center px-3 sm:px-6 pt-1 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 2xl:pb-8 -translate-y-3 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-12 2xl:-translate-y-16"
      >
        <div
          id="warna-12-buttons"
          className="flex flex-row items-center justify-center gap-1 min-[360px]:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 2xl:gap-4.5 max-w-full z-30"
        >
          {colorDetails.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={item.id}
                id={`warna-arti-button-${item.id}`}
                type="button"
                onClick={() => handleSelectColor(idx)}
                aria-label={item.name}
                style={{
                  backgroundColor: item.hex
                }}
                className={`group relative flex items-center justify-center rounded-sm min-[360px]:rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl 2xl:rounded-3xl border-1.5 sm:border-2 lg:border-3 2xl:border-4 border-[#004760] transition-all duration-300 ease-out cursor-pointer shadow-[1px_1px_0px_#00354c] min-[360px]:shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[2px_2px_0px_#00354c] lg:shadow-[3px_3px_0px_#00354c] 2xl:shadow-[5px_5px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] select-none shrink-0 outline-none focus:outline-none focus-visible:outline-none ${
                  isSelected
                    ? '-translate-y-1 sm:-translate-y-2 2xl:-translate-y-3 shadow-[2.5px_2.5px_0px_#00354c] sm:shadow-[4px_4px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] 2xl:shadow-[9px_9px_0px_#00354c] w-11 min-[360px]:w-13 sm:w-[72px] md:w-[98px] lg:w-[124px] xl:w-[134px] 2xl:w-[178px] px-1'
                    : 'hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#00354c] 2xl:hover:shadow-[6px_6px_0px_#00354c] w-5 min-[360px]:w-6 sm:w-8 md:w-11 lg:w-14 xl:w-15 2xl:w-20'
                } h-5 min-[360px]:h-6 sm:h-8 md:h-11 lg:h-14 xl:h-15 2xl:h-20`}
              >
                {isSelected && (
                  <span
                    className={`font-serif font-black text-[8px] min-[360px]:text-[9px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg select-none tracking-wider uppercase truncate px-1 transition-opacity duration-200 ${
                      item.id === 'putih' ? 'text-[#004760]' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
