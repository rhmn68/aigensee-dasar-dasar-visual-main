import React from 'react';
import gambarBackground from '../assets/gambar-background.webp';

interface BackgroundFrameProps {
  idPrefix?: string;
  classroomOpacity?: number;
}

export function BackgroundFrame({
  idPrefix = 'materi',
  classroomOpacity = 0.1
}: BackgroundFrameProps) {
  return (
    <>
      {/* LAYER 0 (z-0): GAMBAR BACKGROUND (Opacity 10% di belakang frame SVG) */}
      <img
        id={`${idPrefix}-classroom-bg`}
        src={gambarBackground}
        alt="Ruang Belajar Desain Visual"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ opacity: classroomOpacity }}
      />

      {/* LAYER 1 (z-10): BACKGROUND VECTOR FRAME (assets/background-judul.svg) */}
      <svg
        id={`${idPrefix}-svg-frame`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none"
      >
        <defs>
          <style>{`
            .cls-judul-yellow { fill: #f9db00; }
            .cls-judul-blue { fill: #005787; }
          `}</style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            {/* Top Border Bar */}
            <rect className="cls-judul-blue" x="0" width="1381.82" height="28.05" />

            {/* Left Border Bar */}
            <rect
              className="cls-judul-blue"
              x="-511.38"
              y="525.98"
              width="1050.81"
              height="28.05"
              transform="translate(554.02 525.98) rotate(90)"
            />

            {/* Right Border Bar */}
            <rect
              className="cls-judul-yellow"
              x="1373.71"
              y="525.98"
              width="1064.52"
              height="28.05"
              transform="translate(2445.9754 -1365.9757) rotate(90)"
            />

            {/* Top Right Accents */}
            <path
              className="cls-judul-blue"
              d="M1657.1,74.48h-233.57c-10.94,0-21.37-4.6-28.75-12.68L1338.3,0h318.8v74.48Z"
            />
            <path
              className="cls-judul-yellow"
              d="M1920,88.28h-276.83c-12.97,0-25.33-5.45-34.08-15.02L1542.14,0h377.86v88.28Z"
            />

            {/* Bottom Border Bar */}
            <rect
              className="cls-judul-yellow"
              x="538.18"
              y="1051.95"
              width="1381.82"
              height="28.05"
              transform="translate(2458.1785 2131.9511) rotate(-180)"
            />

            {/* Bottom Left Accents */}
            <path
              className="cls-judul-yellow"
              d="M262.9,1005.52h233.57c10.94,0,21.37,4.6,28.75,12.68l56.48,61.81h-318.8v-74.48Z"
            />
            <path
              className="cls-judul-blue"
              d="M0,991.72h276.83c12.97,0,25.33,5.45,34.08,15.02l66.94,73.26H0v-88.28Z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}
