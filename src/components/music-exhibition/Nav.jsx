import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/music-exhibition/Logo";
import { NAV_LINKS, scrollToId } from "@/lib/siteNavigation";

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => { setOpen(false); setTimeout(() => scrollToId(id), 60); };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav aria-label="Main" className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${scrolled ? "shadow-[0_10px_50px_-15px_rgba(139,92,246,0.6)]" : ""}`}>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="The Art of Music home"><Logo /></a>
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id} className="relative">
              <button onClick={() => go(l.id)} aria-current={active === l.id ? "true" : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${active === l.id ? "text-white" : "text-slate-400 hover:text-white"}`}>
                {active === l.id && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-violet-500/25 ring-1 ring-violet-400/40" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden">
            <ul className="grid grid-cols-2 gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.id}><button onClick={() => go(l.id)} className="w-full rounded-2xl px-4 py-3 text-left text-slate-200 hover:bg-white/5">{l.label}</button></li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}