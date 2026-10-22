import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHead from "@/components/music-exhibition/SectionHead";
import { FAQS } from "@/lib/musicData";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHead label="FAQ" title="Questions, answered." />
        <div className="space-y-3">
          {FAQS.map(([q, a], i) => (
            <div key={q} className="glass overflow-hidden rounded-2xl">
              <h3>
                <button id={`faq-b${i}`} aria-expanded={open === i} aria-controls={`faq-p${i}`} onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg">
                  {q}<ChevronDown className={`h-5 w-5 shrink-0 text-sky-300 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div id={`faq-p${i}`} role="region" aria-labelledby={`faq-b${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                    <p className="px-6 pb-5 text-slate-400">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}