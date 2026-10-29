import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import SectionHead from "@/components/music-exhibition/SectionHead";
import { GLOSSARY, GLOSSARY_CATS } from "@/lib/musicData";
import { GLOSSARY_VISUALS } from "@/lib/mediaLibrary";

export default function Insights() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return GLOSSARY.filter((g) => {
      const matchesCategory = cat === "All" || g.cat === cat;
      const matchesQuery = !s || g.term.toLowerCase().includes(s) || g.def.toLowerCase().includes(s);
      return matchesCategory && matchesQuery;
    });
  }, [q, cat]);

  return (
    <section id="insights" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Insights · Musical vocabulary" title="The language of music, searchable.">{GLOSSARY.length} music terms explained in plain language, with real photos showing instruments, performers, and notation connected to each idea.</SectionHead>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <label htmlFor="gsearch" className="sr-only">Search terms</label>
              <div className="glass flex items-center gap-3 rounded-full px-5 py-3">
                <Search className="h-4 w-4 text-slate-400" />
                <input id="gsearch" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search e.g. tempo, chord…" className="w-full bg-transparent outline-none placeholder:text-slate-500" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                {GLOSSARY_CATS.map((c) => (
                  <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full px-4 py-1.5 text-sm transition ${cat === c ? "bg-sky-500 text-slate-950" : "glass text-slate-300 hover:bg-white/10"}`}>{c}</button>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500" role="status">{list.length} result(s)</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            {list.length === 0 ? (
              <div className="glass flex flex-col items-center rounded-3xl p-12 text-center">
                <SearchX className="h-10 w-10 text-slate-500" /><p className="mt-4 font-display text-xl">No terms found</p>
                <button onClick={() => { setQ(""); setCat("All"); }} className="mt-4 rounded-full bg-violet-500 px-5 py-2 text-sm text-slate-950">Clear filters</button>
              </div>
            ) : (
              <div
                aria-label="Scroll through musical vocabulary"
                tabIndex={0}
                className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0"
              >
                {list.map((g) => {
                  const visual = GLOSSARY_VISUALS[g.term];
                  return (
                    <article key={g.term} className="glass flex w-[min(85vw,22rem)] shrink-0 snap-start flex-col items-start rounded-2xl p-5 transition hover:ring-1 hover:ring-violet-400/40 sm:w-auto sm:shrink">
                      <p className="mono-label">{g.cat}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold">{g.term}</h3>
                      <p className="mt-1 flex-1 text-sm text-slate-400">{g.def}</p>
                      {visual && (
                        <figure className="mt-4 w-full overflow-hidden rounded-xl border border-white/10">
                          <img src={visual.src} alt={visual.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                          <figcaption className="space-y-2 p-3 text-xs text-slate-400">
                            <p>{visual.caption}</p>
                            <a href={visual.sourceUrl} target="_blank" rel="noreferrer" className="inline-block text-sky-300 underline decoration-sky-300/40 underline-offset-2 hover:text-sky-200">
                              Photo: {visual.credit} · {visual.license} · Wikimedia Commons
                            </a>
                          </figcaption>
                        </figure>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}