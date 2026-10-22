import SectionHead from "@/components/music-exhibition/SectionHead";
import Reveal from "@/components/music-exhibition/Reveal";

const ARTISTS = [
  { name: "Ludwig van Beethoven", life: "1770 – 1827 · Bonn, Germany", from: "#5f4b0f", to: "#c9a227",
    bio: "A German composer who bridged the Classical and Romantic eras. He kept composing masterpieces even as he lost his hearing.",
    works: ["Symphony No. 5", "Symphony No. 9", "Moonlight Sonata"],
    link: "His Fifth Symphony shows a motif — a short primary melody — developed across an entire orchestral work, a concept from the module's review of terms." },
  { name: "Ryan Cayabyab", life: "b. 1954 · Philippines", from: "#7b2d26", to: "#a5831c",
    bio: "A Filipino composer, arranger, conductor and music director, named National Artist for Music in 2018. He shaped modern OPM and Filipino choral music.",
    works: ["Kay Ganda ng Ating Musika", "Paraisong Parisukat"],
    link: "His work shows how OPM can carry Filipino identity through melody and lyrics — the same craft behind the module's song-composition task." },
];

export default function Spotlight() {
  return (
    <section id="spotlight" className="px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Artist spotlight" title="Meet the creators of sound." />
        <div className="grid gap-6 md:grid-cols-2">
          {ARTISTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.1} className="glass overflow-hidden rounded-3xl">
              <div className="h-28" style={{ background: `linear-gradient(120deg, ${a.from}, ${a.to})` }} role="img" aria-label={`Abstract gradient banner for ${a.name}`} />
              <div className="space-y-3 p-7">
                <h3 className="font-display text-2xl font-semibold">{a.name}</h3>
                <p className="mono-label">{a.life}</p>
                <p className="text-slate-300">{a.bio}</p>
                <p className="text-sm text-slate-400"><span className="text-sky-300">Notable works:</span> {a.works.join(" · ")}</p>
                <p className="text-sm text-slate-400"><span className="text-violet-300">Module link:</span> {a.link}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}