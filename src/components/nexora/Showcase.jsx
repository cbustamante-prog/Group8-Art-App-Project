import { useState } from "react";
import { Music2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "@/components/nexora/SectionHead";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { WORKS, WORK_CATEGORIES } from "@/lib/musicData";

function Cover({ w, tall }) {
  return (
    <div role="img" aria-label={`Abstract original cover art for ${w.title}`} className={`relative flex items-end overflow-hidden ${tall ? "h-72" : "h-52"}`} style={{ background: `linear-gradient(135deg, ${w.from}, ${w.to})` }}>
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
        <SectionHead label="Showcase · Art gallery" title="Explore the musical works.">Nine works across genres. Select one to read its meaning and cultural significance.</SectionHead>
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter works by category">
          {WORK_CATEGORIES.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full px-5 py-2 text-sm transition ${cat === c ? "bg-violet-500 text-slate-950 shadow-[0_0_24px_rgba(201,162,39,0.55)]" : "glass text-slate-300 hover:bg-white/10"}`}>{c}</button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((w) => (
              <motion.button layout key={w.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={() => setSel(w)}
                className="glass group flex flex-col justify-start self-start overflow-hidden rounded-3xl text-left transition hover:-translate-y-1 hover:ring-1 hover:ring-sky-400/50">
                <Cover w={w} tall={w.id % 3 === 1} />
                <div className="p-5">
                  <p className="mono-label">{w.category} · {w.year}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{w.creator}</p>
                </div>
              </motion.button>
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
              <div><h4 className="font-display font-semibold text-sky-300">Why it matters</h4><p className="mt-1 text-slate-300">{sel.meaning}</p></div>
              <p className="text-xs text-slate-500">Credit: work by {sel.creator}. Cover art is an original NEXORA design, not official artwork.</p>
            </div>
          </>)}
        </DialogContent>
      </Dialog>
    </section>
  );
}