import { User } from "lucide-react";
import SectionHead from "@/components/music-exhibition/SectionHead";
import Reveal from "@/components/music-exhibition/Reveal";
import { TEAM } from "@/lib/musicData";

function Card({ name, role, photo, highlighted = false, photoPosition = "object-center" }) {
  return (
    <div className={`rounded-3xl p-6 text-center ${highlighted ? "border border-violet-300/60 bg-gradient-to-br from-violet-500/20 to-amber-300/10 shadow-[0_0_40px_-16px_rgba(201,162,39,0.65)]" : "glass"}`}>
      <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-600/40 to-sky-500/30 ring-1 ring-white/15">
        {photo ? <img src={photo} alt={`${name} portrait`} className={`h-full w-full object-cover ${photoPosition}`} /> : <User className="h-10 w-10 text-slate-300" aria-label="Photo placeholder" />}
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
        <SectionHead label="Meet the creators" title="The people behind the project." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((_, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Card
                name={
                  [
                    "Cristian Kyle M. Bustamante",
                    "Crisa Jean C. Calamba",
                    "Joverix Jr. M. Salva",
                    "Kimberly C. Paguyo",
                    "Loise Phillippe T. Arlalejo",
                  ][i]
                }
                photo={
                  [
                    "/images/team-member-1.jpg",
                    "/images/team-member-2.jpg",
                    "/images/team-member-3.jpg",
                    "/images/team-member-4.jpg",
                    "/images/team-member-5.jpg",
                  ][i]
                }
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-sm">
            <Reveal delay={0.3}>
              <Card name="Benedict A. Orejas" role="Art Appreciation Instructor" photo="/images/instructor.jpg" photoPosition="object-top" highlighted />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}