import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import SectionHead from "@/components/music-exhibition/SectionHead";
import { GLOSSARY, GLOSSARY_CATS } from "@/lib/musicData";

export default function Insights() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return GLOSSARY.filter((g) => (cat === "All" || g.cat === cat) && (!s || g.term.toLowerCase().includes(s) || g.def.toLowerCase().includes(s)));
  }, [q, cat]);

  return (
    <section id="insights" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Insights · Musical vocabulary" title="The language of music, searchable.">{GLOSSARY.length} terms from Module 8's review of concepts, sorted by category.</SectionHead>
        <div className="grid gap-8 lg:grid-cols-12">
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
              <div className="grid gap-4 sm:grid-cols-2">
                {list.map((g) => (
                  <article key={g.term} className="glass rounded-2xl p-5 transition hover:ring-1 hover:ring-violet-400/40">
                    <p className="mono-label">{g.cat}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{g.term}</h3>
                    <p className="mt-1 text-sm text-slate-400">{g.def}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}