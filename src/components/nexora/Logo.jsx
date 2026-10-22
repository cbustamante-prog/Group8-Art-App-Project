export default function Logo({ size = 34, showText = true }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e5c674" />
            <stop offset="1" stopColor="#a5831c" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="19" fill="none" stroke="url(#brass)" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="15" fill="#1b150f" stroke="url(#brass)" strokeWidth="0.75" />
        {[8, 10.5, 13].map((r) => <circle key={r} cx="20" cy="20" r={r} fill="none" stroke="rgba(229,198,116,0.35)" strokeWidth="0.5" />)}
        <circle cx="20" cy="20" r="5.5" fill="url(#brass)" />
        <circle cx="20" cy="20" r="1.2" fill="#1b150f" />
      </svg>
      {showText && (
        <span className="leading-none">
          <span className="block font-display text-base font-semibold tracking-[0.12em] text-slate-100">The Art of Music</span>
          <span className="poster-label mt-0.5 block text-[0.5rem] text-violet-400">A NEXORA Exhibition</span>
        </span>
      )}
    </span>
  );
}