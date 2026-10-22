import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollToId } from "@/lib/siteNavigation";

const DUST = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 41) % 100, top: 30 + ((i * 53) % 70), delay: (i % 9) * 0.7, size: 2 + (i % 3),
}));

function Vinyl({ reduce }) {
  return (
    <svg viewBox="0 0 420 420" className="relative h-full w-full" style={{ animation: reduce ? "none" : "float-y 10s ease-in-out infinite" }} role="img" aria-label="Illustration of a vinyl record spinning on a turntable">
      <defs>
        <radialGradient id="disc" cx="42%" cy="34%">
          <stop offset="0" stopColor="#4a3d2e" />
          <stop offset="0.55" stopColor="#231c15" />
          <stop offset="1" stopColor="#120e0a" />
        </radialGradient>
        <linearGradient id="brassLg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e7bd" />
          <stop offset="0.5" stopColor="#c9a227" />
          <stop offset="1" stopColor="#8a6c15" />
        </linearGradient>
      </defs>
      {/* tonearm */}
      <g opacity="0.9">
        <circle cx="378" cy="66" r="13" fill="url(#brassLg)" />
        <rect x="196" y="58" width="182" height="7" rx="3.5" fill="#c9b79a" transform="rotate(-14 196 58)" />
        <rect x="186" y="76" width="30" height="16" rx="3" fill="#e5c674" transform="rotate(-14 186 76)" />
      </g>
      <g style={{ transformOrigin: "210px 210px", animation: reduce ? "none" : "spin-slow 20s linear infinite" }}>
        <circle cx="210" cy="210" r="176" fill="url(#disc)" />
        {Array.from({ length: 26 }, (_, i) => (
          <circle key={i} cx="210" cy="210" r={92 + i * 3.2} fill="none" stroke="rgba(246,231,189,0.10)" strokeWidth="1" />
        ))}
        <circle cx="210" cy="210" r="176" fill="none" stroke="rgba(246,231,189,0.22)" strokeWidth="1.5" />
        <circle cx="210" cy="210" r="72" fill="url(#brassLg)" />
        <circle cx="210" cy="210" r="72" fill="none" stroke="#5f4b0f" strokeWidth="1" />
        <text x="210" y="196" textAnchor="middle" fill="#2b2109" fontFamily="Playfair Display, serif" fontSize="17" fontWeight="600">The Art</text>
        <text x="210" y="216" textAnchor="middle" fill="#2b2109" fontFamily="Playfair Display, serif" fontSize="17" fontWeight="600">of Music</text>
        <text x="210" y="236" textAnchor="middle" fill="#5f4b0f" fontFamily="Oswald, sans-serif" fontSize="7.5" letterSpacing="2.4">GROUP 8 · MODULE 8</text>
        <circle cx="210" cy="210" r="4" fill="#120e0a" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 110]);
  const y2 = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -50]);

  return (
    <section id="top" className="noise relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* warm gallery spotlights */}
        <motion.div style={{ y: y1 }} className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-[130px]" />
        <motion.div style={{ y: y2 }} className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-[130px]" />
        {DUST.map((p, i) => (
          <span key={i} className="absolute rounded-full bg-violet-200/80" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, animation: reduce ? "none" : `drift 8s ${p.delay}s infinite ease-out`, opacity: reduce ? 0.35 : 0 }} />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="poster-label border border-violet-500/50 px-3 py-1 text-[0.6rem] text-violet-300">Gallery One</span>
            <span className="mono-label">Music Appreciation · Module 8</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="font-display text-5xl font-semibold leading-[1.03] sm:text-7xl">
            The Art of <span className="grad-text">Music</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="rule my-7 max-w-md" aria-hidden="true" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }} className="max-w-xl text-lg text-slate-300">
            An exhibition in sound. Step through the origin of music, its elements, its genres and its instruments — then play, listen and leave your own mark in the visitors' book.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => scrollToId("explore")} className="btn-glow group inline-flex items-center gap-2 rounded-sm bg-violet-500 px-7 py-3.5 font-medium tracking-wide text-slate-950 transition hover:bg-violet-400 active:scale-95">
              Enter the Gallery <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => scrollToId("about")} className="glass rounded-sm px-7 py-3.5 font-medium tracking-wide transition hover:bg-white/10 active:scale-95">About the Exhibition</button>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="poster-label mt-9 text-[0.6rem] text-slate-400">
            Five lessons · Nine works · Four activities · Open to all visitors
          </motion.p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:col-span-5">
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-500/35 to-sky-500/25 blur-3xl" style={{ animation: reduce ? "none" : "pulse-glow 7s infinite" }} aria-hidden="true" />
          <Vinyl reduce={reduce} />
        </div>
      </div>
      <button onClick={() => scrollToId("about")} aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-violet-300"><ChevronDown className="h-6 w-6 animate-bounce" /></button>
    </section>
  );
}