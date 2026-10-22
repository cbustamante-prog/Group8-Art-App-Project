import { useState } from "react";
import { Sparkles, Waves, PenLine, Disc3, Mic2, ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/nexora/SectionHead";
import Reveal from "@/components/nexora/Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { EXPLORE } from "@/lib/musicData";

const ICONS = { Sparkles, Waves, PenLine, Disc3, Mic2 };

function TiltCard({ item, onOpen }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  const Icon = ICONS[item.icon];
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setT({ x: ((e.clientY - r.top) / r.height - 0.5) * -10, y: ((e.clientX - r.left) / r.width - 0.5) * 10 });
  };
  return (
    <button onClick={() => onOpen(item)} onMouseMove={move} onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${t.x}deg) rotateY(${t.y}deg)`, transition: "transform .2s ease-out" }}
      className="glass group relative h-full w-full rounded-3xl p-7 text-left hover:ring-1 hover:ring-violet-400/50">
      <span className="mono-label">{item.tag}</span>
      <Icon className="mt-6 h-9 w-9 text-violet-300" />
      <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
      <p className="mt-3 text-slate-400">{item.summary}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm text-sky-300">Open lesson <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
    </button>
  );
}

export default function Explore() {
  const [open, setOpen] = useState(null);
  return (
    <section id="explore" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Explore · Five lessons" title="Five doors into the world of music.">Pick a card to open the lesson, summarised from Module 8 in our own words.</SectionHead>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {EXPLORE.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}><TiltCard item={item} onOpen={setOpen} /></Reveal>
          ))}
        </div>
      </div>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 bg-slate-950 text-slate-100">
          {open && (<>
            <DialogHeader>
              <p className="mono-label">{open.tag}</p>
              <DialogTitle className="font-display text-2xl">{open.title}</DialogTitle>
              <DialogDescription className="text-slate-400">{open.summary}</DialogDescription>
            </DialogHeader>
            <ul className="space-y-3">
              {open.points.map((p) => <li key={p} className="flex gap-3 text-slate-300"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />{p}</li>)}
            </ul>
          </>)}
        </DialogContent>
      </Dialog>
    </section>
  );
}