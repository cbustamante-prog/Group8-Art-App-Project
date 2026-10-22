import { Quote, Heart, Lightbulb, Globe2 } from "lucide-react";
import SectionHead from "@/components/nexora/SectionHead";
import Reveal from "@/components/nexora/Reveal";

const VALUES = [
  { icon: Heart, t: "Feel first", d: "Music reaches us emotionally before we can explain it. We start from listening." },
  { icon: Lightbulb, t: "Understand deeply", d: "Rhythm, pitch, harmony and form turn feeling into knowledge you can name." },
  { icon: Globe2, t: "Honor every culture", d: "From Pythagoras to OPM, music belongs to every society — and so does this site." },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="About · Understanding Music" title="Sound is vibration. Music is what we make of it.">
          NEXORA exists to turn Module 8 — Music — into an experience you can hear, play and question, not just read.
        </SectionHead>
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="glass rounded-3xl p-8 lg:col-span-7">
            <h3 className="font-display text-2xl font-semibold">Our purpose & vision</h3>
            <p className="mt-4 text-slate-300">Music is a constant companion — in transit, at work, with friends. Yet we rarely stop to ask what it is. Our purpose is to pause that moment and look closely: where music came from, why every culture has it, and how its elements combine to move us.</p>
            <p className="mt-4 text-slate-300">Our vision is a classroom without walls, where a learner can test a tempo, build a chord and vote for a favourite genre in the same visit. The creative philosophy is simple: <em>learn it, then make it.</em></p>
            <div className="mt-6 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
              {["Recognize the origin and importance of music", "Appreciate its role in people's lives", "Discuss the essentials of songwriting", "Understand genres and instrument classes"].map((o) => (
                <p key={o} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />{o}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600/40 to-sky-500/20 p-8 ring-1 ring-white/10 lg:col-span-5">
            <Quote className="h-9 w-9 text-violet-300" />
            <blockquote className="mt-4 font-display text-3xl font-semibold leading-snug">"Music is sonorous air."</blockquote>
            <p className="mt-4 text-sm text-slate-300">— Ferruccio Busoni, Italian composer (as cited in Module 8)</p>
            <p className="mt-6 text-sm text-slate-300">Pythagoras used music to heal; tribes used it to reach enlightened states. It may even be older than language.</p>
          </Reveal>
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.1} className="glass rounded-3xl p-7 lg:col-span-4">
              <v.icon className="h-6 w-6 text-sky-400" />
              <h3 className="mt-4 font-display text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-slate-400">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}