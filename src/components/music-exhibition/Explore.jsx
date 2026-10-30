import { useState } from "react";
import { Sparkles, Waves, PenLine, Disc3, Mic2, ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/music-exhibition/SectionHead";
import Reveal from "@/components/music-exhibition/Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { EXPLORE, INSTRUMENT_GROUPS, MODULE_GENRES } from "@/lib/musicData";

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

function InstrumentCard({ instrument }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="glass overflow-hidden rounded-2xl">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-5">
        {!imageFailed ? (
          <img
            src={instrument.image}
            alt={instrument.name}
            loading="lazy"
            className="h-full w-full object-contain"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="font-display text-center text-lg text-slate-400">{instrument.name}</span>
        )}
      </div>
      <div className="space-y-2 p-4">
        <p className="mono-label">{instrument.family}</p>
        <h5 className="font-display text-lg font-semibold">{instrument.name}</h5>
        <p className="text-sm leading-relaxed text-slate-400">{instrument.description}</p>
        <a
          href={instrument.imageSource}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xs text-sky-300 underline decoration-sky-300/40 underline-offset-4 hover:text-sky-200"
        >
          Image credit and license
        </a>
      </div>
    </article>
  );
}

export default function Explore() {
  const [open, setOpen] = useState(null);
  const goToShowcase = (event) => {
    event.preventDefault();
    setOpen(null);
    window.history.replaceState(null, "", "#showcase");
    window.setTimeout(() => {
      document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

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
        <DialogContent className={`w-[calc(100vw-2rem)] ${open?.id === "instruments" ? "max-w-7xl max-h-[92vh]" : open?.id === "genres" ? "max-w-5xl max-h-[88vh]" : "max-w-3xl max-h-[88vh]"} overflow-y-auto border-white/10 bg-slate-950 text-slate-100`}>
          {open && (<>
            <DialogHeader>
              <p className="mono-label">{open.tag}</p>
              <DialogTitle className="font-display text-2xl">{open.title}</DialogTitle>
              <DialogDescription className="text-slate-400">{open.summary}</DialogDescription>
            </DialogHeader>
            {open.id === "genres" ? (
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
                <div>
                  <ul className="space-y-4">
                    {MODULE_GENRES.map((genre) => (
                      <li key={genre.name} className="glass rounded-2xl p-4">
                        <h4 className="font-display font-semibold text-violet-200">{genre.name}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{genre.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <aside className="h-fit rounded-2xl border border-sky-300/20 bg-sky-300/5 p-5 lg:sticky lg:top-4">
                  <p className="mono-label">Keep exploring</p>
                  <h4 className="mt-3 font-display text-xl font-semibold">Hear the genres</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Browse the Showcase gallery for genre filters, selected works, and embedded listening examples.
                  </p>
                  <a
                    href="#showcase"
                    onClick={goToShowcase}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-300 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-200"
                  >
                    Go to Showcase <ArrowUpRight className="h-4 w-4" />
                  </a>
                </aside>
              </div>
            ) : open.id === "instruments" ? (
              <div className="space-y-8">
                <ul className="space-y-3">
                  {open.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                {INSTRUMENT_GROUPS.map((group) => (
                  <section key={group.name} aria-labelledby={`instrument-${group.name.replaceAll(" ", "-")}`}>
                    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                      <h4 id={`instrument-${group.name.replaceAll(" ", "-")}`} className="font-display text-xl font-semibold text-amber-200">
                        {group.name}
                      </h4>
                      <span className="mono-label">{group.range}</span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {group.instruments.map((instrument) => (
                        <InstrumentCard key={instrument.name} instrument={instrument} />
                      ))}
                    </div>
                  </section>
                ))}
                <p className="text-xs leading-relaxed text-slate-500">
                  Instrument photographs link to their Wikimedia Commons file pages for creator credits and license details.
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {open.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </>)}
        </DialogContent>
      </Dialog>
    </section>
  );
}