import { ArrowUp } from "lucide-react";
import Logo from "@/components/music-exhibition/Logo";
import { NAV_LINKS, scrollToId } from "@/lib/siteNavigation";

const EXTRA = [{ id: "spotlight", label: "Spotlight" }, { id: "reflection", label: "Reflection" }, { id: "creators", label: "Creators" }, { id: "references", label: "References" }];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm"><Logo /><p className="mt-4 text-sm text-slate-400">Resonance — an interactive Art Appreciation project on Music (Module 8), curated by Group 8.</p></div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {[...NAV_LINKS, ...EXTRA].map((l) => <li key={l.id}><button onClick={() => scrollToId(l.id)} className="text-slate-400 hover:text-white">{l.label}</button></li>)}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Resonance. Student project for Art Appreciation.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="glass rounded-full p-3 text-white transition hover:bg-white/10 active:scale-90"><ArrowUp className="h-4 w-4" /></button>
      </div>
    </footer>
  );
}