import { User } from "lucide-react";
import SectionHead from "@/components/music-exhibition/SectionHead";
import Reveal from "@/components/music-exhibition/Reveal";
import { TEAM } from "@/lib/musicData";

function Card({ name, role, photo }) {
  return (
    <div className="glass rounded-3xl p-6 text-center">
      <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-600/40 to-sky-500/30 ring-1 ring-white/15">
        {photo ? <img src={photo} alt={`${name} portrait`} className="h-full w-full object-cover" /> : <User className="h-10 w-10 text-slate-300" aria-label="Photo placeholder" />}
      </div>
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
          {TEAM.map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Card
                name={
                  [
                    "Cristian Kyle M. Bustamante",
                    "Crisa Jean C. Calamba",
                    m.name,
                    "Kimberly C. Paguyo",
                    "Loise Phillippe T. Arlalejo",
                  ][i]
                }
                photo={
                  [
                    "/images/team-member-1.jpg",
                    "/images/team-member-2.jpg",
                    undefined,
                    "/images/team-member-4.jpg",
                    "/images/team-member-5.jpg",
                  ][i]
                }
              />
            </Reveal>
          ))}
          <Reveal delay={0.3}><Card name="Benedict A. Orejas" role="Art Appreciation Instructor" photo="/images/instructor.jpg" /></Reveal>
        </div>
      </div>
    </section>
  );
}