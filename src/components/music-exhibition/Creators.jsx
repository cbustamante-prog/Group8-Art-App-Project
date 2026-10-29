import { User } from "lucide-react";
import SectionHead from "@/components/music-exhibition/SectionHead";
import Reveal from "@/components/music-exhibition/Reveal";
import { TEAM } from "@/lib/musicData";

function Card({ name, role }) {
  return (
    <div className="glass rounded-3xl p-6 text-center">
      <div role="img" aria-label="Photo placeholder — individual picture to be added with permission" className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/40 to-sky-500/30 ring-1 ring-white/15"><User className="h-10 w-10 text-slate-300" /></div>
      <h3 className="mt-4 font-display text-lg font-semibold">{name}</h3>
      <p className="text-sm text-slate-400">{role}</p>
    </div>
  );
}

export default function Creators() {
  return (
    <section id="creators" className="px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Meet the creators" title="The people behind the project.">Group 8 · Music. Names and photos are placeholders until each member's details and permission are confirmed.</SectionHead>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => <Reveal key={i} delay={i * 0.06}><Card name={m.name} /></Reveal>)}
          <Reveal delay={0.3}><Card name="Instructor name to be added" role="Art Appreciation Instructor" /></Reveal>
        </div>
      </div>
    </section>
  );
}