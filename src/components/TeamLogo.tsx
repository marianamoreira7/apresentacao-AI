// Logo original do time: escudo roxo com borda dourada, bola de basquete e uma chama (fênix).
export default function TeamLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Logo do time Fênix do Barreto: escudo roxo com uma bola de basquete e uma chama dourada"
      className={className}
    >
      {/* escudo */}
      <path
        d="M100 8 L182 36 V104 C182 148 148 178 100 194 C52 178 18 148 18 104 V36 Z"
        fill="#FACC15"
      />
      <path
        d="M100 20 L170 44 V104 C170 140 142 166 100 180 C58 166 30 140 30 104 V44 Z"
        fill="#4C1D95"
      />

      {/* chama */}
      <path
        d="M100 28 C94 40 84 46 88 60 C90 66 96 68 100 68 C104 68 110 66 112 60 C116 46 106 40 100 28 Z"
        fill="#FACC15"
      />
      <path
        d="M100 44 C97 52 94 55 96 61 C97 64 99 65 100 65 C101 65 103 64 104 61 C106 55 103 52 100 44 Z"
        fill="#4C1D95"
      />

      {/* estrelas */}
      <polygon
        points="62,47 64.1,53.1 70.6,53.2 65.4,57.1 67.3,63.3 62,59.6 56.7,63.3 58.6,57.1 53.4,53.2 59.9,53.1"
        fill="#FACC15"
      />
      <polygon
        points="138,47 135.9,53.1 129.4,53.2 134.6,57.1 132.7,63.3 138,59.6 143.3,63.3 141.4,57.1 146.6,53.2 140.1,53.1"
        fill="#FACC15"
      />

      {/* bola */}
      <circle cx="100" cy="108" r="38" fill="#FACC15" />
      <g fill="none" stroke="#4C1D95" strokeWidth="3" strokeLinecap="round">
        <path d="M100 70 V146" />
        <path d="M62 108 H138" />
        <path d="M72 78 C90 96 90 120 72 138" />
        <path d="M128 78 C110 96 110 120 128 138" />
      </g>
    </svg>
  )
}
