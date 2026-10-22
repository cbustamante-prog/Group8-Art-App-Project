import SectionHead from "@/components/nexora/SectionHead";
import Reveal from "@/components/nexora/Reveal";

const CARDS = [
  ["What we learned", "Music is more than entertainment. Learning the elements — rhythm, pitch, harmony, dynamics and tempo — gave us words for things we had always felt when listening."],
  ["Why it matters", "Every culture has music, so understanding it helps us understand people. OPM, folk songs and anthems carry identity, memory and protest."],
  ["In everyday life", "Music keeps us company on the way to school, helps us focus and heal, and gives us a way to say what ordinary words cannot."],
];

export default function Reflection() {
  return (
    <section id="reflection" className="px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Art appreciation reflection" title="What music taught us." />
        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map(([t, d], i) => <Reveal key={t} delay={i * 0.1} className="glass rounded-3xl p-7"><h3 className="font-display text-xl font-semibold text-sky-300">{t}</h3><p className="mt-3 text-slate-300">{d}</p></Reveal>)}
        </div>
        <p className="mt-8 text-center text-slate-400">"Music is sonorous air." — Ferruccio Busoni (as cited in Module 8)</p>
      </div>
    </section>
  );
}