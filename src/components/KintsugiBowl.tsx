export function KintsugiBowl({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="bowlBody" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#6a7168" />
          <stop offset="45%" stopColor="#4a524a" />
          <stop offset="100%" stopColor="#2c332c" />
        </radialGradient>
        <linearGradient id="goldVein" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8d090" />
          <stop offset="45%" stopColor="#b8943d" />
          <stop offset="100%" stopColor="#8a6a28" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="240" cy="392" rx="118" ry="18" fill="#0f1c16" opacity="0.35" />
      <path
        d="M96 210c12 108 68 176 144 176s132-68 144-176c-28 22-84 34-144 34s-116-12-144-34z"
        fill="url(#bowlBody)"
      />
      <path
        d="M108 208c18-62 66-102 132-102s114 40 132 102c-30-18-82-28-132-28s-102 10-132 28z"
        fill="#5a635a"
      />
      <ellipse cx="240" cy="208" rx="132" ry="28" fill="#3d4640" />
      <ellipse cx="240" cy="208" rx="108" ry="18" fill="#2a312c" />
      <g filter="url(#softGlow)" className="animate-glow">
        <path
          className="vein-path"
          pathLength={1}
          d="M168 168c28 34 22 78 8 118"
          stroke="url(#goldVein)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          className="vein-path"
          pathLength={1}
          d="M176 286c42 18 86 8 128-24"
          stroke="url(#goldVein)"
          strokeWidth="2.8"
          strokeLinecap="round"
          style={{ animationDelay: "0.9s" }}
        />
        <path
          className="vein-path"
          pathLength={1}
          d="M292 156c18 48 8 96-18 138"
          stroke="url(#goldVein)"
          strokeWidth="2.4"
          strokeLinecap="round"
          style={{ animationDelay: "1.1s" }}
        />
      </g>
      <circle cx="188" cy="248" r="2.2" fill="#e8d090" opacity="0.85" />
      <circle cx="318" cy="220" r="1.6" fill="#e8d090" opacity="0.7" />
    </svg>
  );
}
