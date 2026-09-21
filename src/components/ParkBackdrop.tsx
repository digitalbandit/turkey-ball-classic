export function ParkBackdrop() {
  return (
    <svg
      className="park-backdrop"
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8EB9D4" />
          <stop offset="55%" stopColor="#9EC6D8" />
          <stop offset="100%" stopColor="#B7D3DE" />
        </linearGradient>
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B9A55" />
          <stop offset="100%" stopColor="#4E7C40" />
        </linearGradient>
        <linearGradient id="dirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D7B17A" />
          <stop offset="100%" stopColor="#C19760" />
        </linearGradient>
        <linearGradient id="mountain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8A9AAA" />
          <stop offset="100%" stopColor="#6D7E8C" />
        </linearGradient>
        <pattern id="chain" width="12" height="18" patternUnits="userSpaceOnUse">
          <path
            d="M6 0 12 9 6 18 0 9 Z"
            fill="none"
            stroke="#2B332E"
            strokeWidth="0.7"
            opacity="0.42"
          />
        </pattern>
        <filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
        </filter>
        <filter id="soft">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      <rect width="1440" height="820" fill="url(#sky)" />

      <ellipse cx="1140" cy="90" rx="90" ry="28" fill="#D8E7EE" opacity="0.45" />
      <ellipse cx="1188" cy="96" rx="54" ry="20" fill="#E7F1F5" opacity="0.35" />
      <ellipse cx="260" cy="70" rx="70" ry="22" fill="#D8E7EE" opacity="0.28" />

      <path
        d="M-20 268 180 198 310 248 460 170 620 230 790 165 980 228 1180 150 1448 230 1448 340-20 340Z"
        fill="url(#mountain)"
        opacity="0.55"
        filter="url(#paint)"
      />
      <path
        d="M-20 300 90 250 220 292 360 232 530 286 700 240 880 290 1090 228 1280 276 1448 250 1448 360-20 360Z"
        fill="#5E7382"
        opacity="0.35"
      />

      <rect x="70" y="292" width="86" height="58" fill="#D9C7A4" />
      <path d="M64 294 113 258 162 294Z" fill="#6A4A3A" />
      <rect x="168" y="304" width="62" height="48" fill="#E6D3B0" />
      <path d="M162 306 199 278 236 306Z" fill="#5A3F34" />

      <g fill="#2E4A36">
        <ellipse cx="40" cy="348" rx="70" ry="38" />
        <ellipse cx="130" cy="338" rx="64" ry="42" />
        <ellipse cx="220" cy="350" rx="80" ry="36" />
        <ellipse cx="330" cy="342" rx="72" ry="40" />
        <ellipse cx="450" cy="352" rx="90" ry="34" />
        <ellipse cx="580" cy="346" rx="70" ry="38" />
        <ellipse cx="720" cy="350" rx="86" ry="32" />
        <ellipse cx="860" cy="340" rx="74" ry="40" />
        <ellipse cx="1000" cy="348" rx="82" ry="36" />
        <ellipse cx="1140" cy="338" rx="76" ry="42" />
        <ellipse cx="1280" cy="350" rx="90" ry="34" />
        <ellipse cx="1400" cy="342" rx="70" ry="38" />
      </g>
      <g fill="#3A5C42" opacity="0.9">
        <ellipse cx="90" cy="360" rx="50" ry="26" />
        <ellipse cx="280" cy="364" rx="60" ry="22" />
        <ellipse cx="510" cy="362" rx="54" ry="24" />
        <ellipse cx="780" cy="366" rx="62" ry="20" />
        <ellipse cx="1050" cy="360" rx="58" ry="24" />
        <ellipse cx="1320" cy="364" rx="64" ry="22" />
      </g>

      <g className="palms">
        <g transform="translate(108, 210)">
          <path d="M8 170 C10 90 12 40 11 0" stroke="#5A3A24" strokeWidth="7" fill="none" />
          <path d="M12 8 C-30 -6 -48 22 -20 28" fill="#2F5A38" />
          <path d="M12 6 C-10 -34 18 -48 28 -12" fill="#3A6A40" />
          <path d="M12 8 C48 -18 70 10 36 28" fill="#2C5534" />
          <path d="M12 10 C40 36 18 52 -4 30" fill="#3D6844" />
        </g>
        <g transform="translate(1188, 168) scale(1.15)">
          <path d="M8 190 C9 110 11 50 10 0" stroke="#5A3A24" strokeWidth="7" fill="none" />
          <path d="M11 10 C-36 -2 -54 30 -22 36" fill="#2F5A38" />
          <path d="M11 8 C-8 -40 24 -54 32 -14" fill="#3A6A40" />
          <path d="M11 10 C52 -16 74 16 38 34" fill="#2C5534" />
          <path d="M11 12 C44 42 16 58 -6 34" fill="#3D6844" />
        </g>
        <g transform="translate(1288, 198) scale(0.82)">
          <path d="M8 160 C10 88 11 38 10 0" stroke="#5A3A24" strokeWidth="7" fill="none" />
          <path d="M11 8 C-28 0 -46 26 -16 32" fill="#2F5A38" />
          <path d="M11 6 C-4 -32 26 -44 30 -10" fill="#3A6A40" />
          <path d="M11 8 C46 -10 64 18 32 30" fill="#2C5534" />
        </g>
        <g transform="translate(24, 250) scale(0.7)">
          <path d="M8 140 C9 80 10 36 10 0" stroke="#5A3A24" strokeWidth="7" fill="none" />
          <path d="M11 8 C-26 0 -40 22 -14 28" fill="#2F5A38" />
          <path d="M11 6 C52 -8 62 18 28 28" fill="#2C5534" />
        </g>
      </g>

      <path d="M-20 372 1448 372 1448 820-20 820Z" fill="url(#grass)" />
      <path
        d="M-40 500 C 180 430, 420 470, 720 455 S 1200 500, 1480 470 L1480 820-40 820Z"
        fill="#5A8748"
        opacity="0.45"
      />

      <path
        d="M-30 548 C 220 500, 560 518, 900 508 S 1280 560, 1480 530 L1480 820-30 820Z"
        fill="url(#dirt)"
      />
      <path
        d="M120 820 C 260 600, 520 540, 760 548 S 1180 680, 1320 820"
        fill="#DCC196"
        opacity="0.35"
      />

      <path
        d="M80 790 C 280 620, 620 575, 900 620"
        fill="none"
        stroke="#F4EFE0"
        strokeWidth="6"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M-10 640 C 240 600, 500 610, 820 598"
        fill="none"
        stroke="#F4EFE0"
        strokeWidth="4.5"
        opacity="0.4"
      />

      <g transform="translate(0, 368)">
        <rect x="-20" y="0" width="1480" height="86" fill="url(#chain)" />
        <path d="M-20 4 H1480" stroke="#2A332C" strokeWidth="5" opacity="0.55" />
        <path d="M-20 84 H1480" stroke="#2A332C" strokeWidth="3.2" opacity="0.35" />
        {Array.from({ length: 18 }).map((_, i) => (
          <rect
            key={i}
            x={i * 84 - 8}
            y="0"
            width="5"
            height="86"
            fill="#2E382F"
            opacity="0.42"
          />
        ))}
      </g>
    </svg>
  )
}
