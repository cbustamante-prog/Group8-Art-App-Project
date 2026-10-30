import { useState } from "react";
import { Music2, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "@/components/music-exhibition/SectionHead";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import AudioPreview from "@/components/music-exhibition/AudioPreview";
import { WORKS, WORK_CATEGORIES } from "@/lib/musicData";
import { WORK_MEDIA } from "@/lib/mediaLibrary";

function Cover({ w }) {
  return (
    <div role="img" aria-label={`Abstract original cover art for ${w.title}`} className="relative flex h-52 items-end overflow-hidden" style={{ background: `linear-gradient(135deg, ${w.from}, ${w.to})` }}>
      <Music2 className="absolute right-4 top-4 h-6 w-6 text-white/70" />
      <div className="flex h-full w-full items-end gap-1 px-4 pb-0 opacity-60">
        {Array.from({ length: 22 }, (_, i) => <span key={i} className="flex-1 rounded-t bg-white/40" style={{ height: `${20 + ((i * 37 + w.id * 11) % 60)}%` }} />)}
      </div>
    </div>
  );
}

export default function Showcase() {
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState(null);
  const list = WORKS.filter((w) => cat === "All" || w.category === cat);
  return (
    <section id="showcase" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Showcase · Art gallery" title="Explore the musical works.">Explore ten music genres, with a growing collection of performances to watch and listen to. Choose a track to open its YouTube player and exhibit notes.</SectionHead>
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter works by category">
          {WORK_CATEGORIES.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} aria-label={`Filter by ${c}, ${c === "All" ? WORKS.length : WORKS.filter((w) => w.category === c).length} works`} className={`rounded-full px-5 py-2 text-sm transition ${cat === c ? "bg-violet-500 text-slate-950 shadow-[0_0_24px_rgba(201,162,39,0.55)]" : "glass text-slate-300 hover:bg-white/10"}`}>
              {c}<span className="ml-2 text-xs opacity-70">{c === "All" ? WORKS.length : WORKS.filter((w) => w.category === c).length}</span>
            </button>
          ))}
        </div>
        {cat === "Meta Music" && (
          <p className="mb-6 max-w-3xl text-sm text-slate-400">
            Your module describes Meta Music as music whose melody is influenced by the structure of songs, also called information music.
          </p>
        )}
        <motion.div
          layout
          aria-label="Scroll through musical works"
          tabIndex={0}
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:items-stretch sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {list.map((w) => (
              <motion.article layout key={w.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="glass group flex w-[min(85vw,22rem)] shrink-0 snap-start flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:ring-1 hover:ring-sky-400/50 sm:h-full sm:w-auto sm:shrink">
                <Cover w={w} />
                <div className="flex flex-1 flex-col p-5">
                  <p className="mono-label">{w.category} · {w.year}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{w.creator}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                    <button type="button" onClick={() => setSel(w)} className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-xs text-amber-100 transition hover:bg-amber-300/20" aria-label={`${WORK_MEDIA[w.id].kind === "link" ? "Find a recording for" : "Play"} ${w.title}`}>
                      <Play className="h-4 w-4" />{WORK_MEDIA[w.id].kind === "youtube" ? "Play here" : WORK_MEDIA[w.id].kind === "link" ? "Find on YouTube" : "Play sample"}
                    </button>
                    <button type="button" onClick={() => setSel(w)} className="rounded-full px-3 py-1.5 text-xs text-sky-200 transition hover:bg-white/10">View exhibit</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto border-white/10 bg-slate-950 p-0 text-slate-100">
          {sel && (<>
            <Cover w={sel} />
            <div className="space-y-4 p-6">
              <DialogHeader>
                <p className="mono-label">{sel.category} · {sel.year}</p>
                <DialogTitle className="font-display text-2xl">{sel.title}</DialogTitle>
                <DialogDescription className="text-slate-400">{sel.creator}</DialogDescription>
              </DialogHeader>
              <p className="text-slate-300">{sel.desc}</p>
              <div>
                <h4 className="font-display font-semibold text-amber-200">{WORK_MEDIA[sel.id].kind === "youtube" ? "Watch and listen" : WORK_MEDIA[sel.id].kind === "link" ? "Find a recording" : "Listen to this work"}</h4>
                <p className="mt-1 text-sm text-slate-400">
                  {WORK_MEDIA[sel.id].kind === "youtube" ? "This video opens in the exhibit's embedded player. Some YouTube uploads may not allow embedded playback." : WORK_MEDIA[sel.id].kind === "link" ? "This selection has no specific video link yet. Search YouTube to choose an available recording." : "Play the recording here, or follow its source link below."}
                </p>
                <div className="mt-3"><AudioPreview {...WORK_MEDIA[sel.id]} label={`recording for ${sel.title}`} /></div>
              </div>
              <div><h4 className="font-display font-semibold text-sky-300">Why it matters</h4><p className="mt-1 text-slate-300">{sel.meaning}</p></div>
              <p className="text-xs text-slate-500">Creator / channel: {WORK_MEDIA[sel.id].performer}. Source and license: {WORK_MEDIA[sel.id].license}. Credit: work by {sel.creator}. Cover art is an original design, not official artwork.</p>
            </div>
          </>)}
        </DialogContent>
      </Dialog>
    </section>
  );
}