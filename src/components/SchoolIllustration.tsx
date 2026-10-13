// Ilustração original: fachada da escola com rampa de acesso.
export default function SchoolIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="Ilustração da fachada de uma escola azul, com bandeira, árvores e rampa de acesso na entrada"
      className={className}
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DBEAFE" />
          <stop offset="1" stopColor="#EFF6FF" />
        </linearGradient>
      </defs>

      <rect width="480" height="360" rx="28" fill="url(#sky)" />

      {/* nuvens */}
      <g fill="#FFFFFF">
        <ellipse cx="90" cy="70" rx="42" ry="14" />
        <ellipse cx="116" cy="60" rx="26" ry="14" />
        <ellipse cx="380" cy="96" rx="38" ry="12" />
        <ellipse cx="402" cy="86" rx="22" ry="12" />
      </g>

      {/* chão */}
      <path d="M0 300 H480 V332 a28 28 0 0 1 -28 28 H28 a28 28 0 0 1 -28 -28 Z" fill="#BFDBFE" />

      {/* árvores */}
      <g>
        <rect x="56" y="248" width="8" height="52" fill="#1E3A8A" />
        <circle cx="60" cy="232" r="30" fill="#60A5FA" />
        <rect x="418" y="256" width="8" height="44" fill="#1E3A8A" />
        <circle cx="422" cy="240" r="26" fill="#3B82F6" />
      </g>

      {/* bandeira */}
      <rect x="238" y="46" width="4" height="72" fill="#1E3A8A" />
      <path d="M242 48 H284 L274 60 L284 72 H242 Z" fill="#2563EB" />

      {/* prédio */}
      <rect x="100" y="116" width="280" height="26" rx="6" fill="#1E3A8A" />
      <rect x="112" y="136" width="256" height="164" fill="#1D4ED8" />

      {/* janelas */}
      <g fill="#DBEAFE">
        <rect x="132" y="160" width="36" height="42" rx="4" />
        <rect x="180" y="160" width="36" height="42" rx="4" />
        <rect x="264" y="160" width="36" height="42" rx="4" />
        <rect x="312" y="160" width="36" height="42" rx="4" />
        <rect x="132" y="222" width="36" height="42" rx="4" />
        <rect x="180" y="222" width="36" height="42" rx="4" />
        <rect x="264" y="222" width="36" height="42" rx="4" />
        <rect x="312" y="222" width="36" height="42" rx="4" />
      </g>

      {/* porta */}
      <path d="M228 300 V250 a12 12 0 0 1 12 -12 h0 a12 12 0 0 1 12 12 V300 Z" fill="#EFF6FF" />
      <rect x="226" y="236" width="28" height="64" rx="12" fill="#EFF6FF" />
      <line x1="240" y1="244" x2="240" y2="300" stroke="#93C5FD" strokeWidth="2" />

      {/* rampa de acesso */}
      <polygon points="254,300 340,300 254,268" fill="#93C5FD" />
      <line x1="254" y1="262" x2="338" y2="294" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
