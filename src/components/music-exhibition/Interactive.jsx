import { useState } from "react";
import SectionHead from "@/components/music-exhibition/SectionHead";
import Reveal from "@/components/music-exhibition/Reveal";
import Quiz from "@/components/music-exhibition/play/Quiz";
import Matching from "@/components/music-exhibition/play/Matching";
import Guess from "@/components/music-exhibition/play/Guess";
import SoundLab from "@/components/music-exhibition/play/SoundLab";

const TABS = [
  { id: "quiz", label: "Quiz", C: Quiz },
  { id: "match", label: "Matching Game", C: Matching },
  { id: "guess", label: "Guess the Clue", C: Guess },
  { id: "lab", label: "Sound Lab", C: SoundLab },
];

export default function Interactive() {
  const [tab, setTab] = useState("quiz");
  const Active = TABS.find((t) => t.id === tab).C;
  return (
    <section id="features" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHead label="Features · Interactive zone" title="Play, solve and learn.">Four hands-on activities built from Module 8 concepts. Pick one to begin.</SectionHead>
        <Reveal className="glass rounded-3xl p-5 sm:p-8">
          <div role="tablist" aria-label="Activities" className="mb-8 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)} className={`rounded-full px-5 py-2 text-sm transition ${tab === t.id ? "bg-violet-500 text-slate-950 shadow-[0_0_24px_rgba(201,162,39,0.6)]" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}>{t.label}</button>
            ))}
          </div>
          <div role="tabpanel" key={tab}><Active /></div>
        </Reveal>
      </div>
    </section>
  );
}