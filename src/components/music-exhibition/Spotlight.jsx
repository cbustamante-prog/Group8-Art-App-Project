import SectionHead from "@/components/music-exhibition/SectionHead";
import Reveal from "@/components/music-exhibition/Reveal";

const ARTISTS = [
  { name: "Ludwig van Beethoven", life: "1770 – 1827 · Bonn, Germany", image: "/images/spotlight/beethoven.jpg",
    imageAlt: "Portrait of Ludwig van Beethoven composing, painted by Joseph Karl Stieler in 1820.",
    imageCredit: "Portrait by Joseph Karl Stieler · Public domain",
    imageSource: "https://commons.wikimedia.org/wiki/File:Beethoven.jpg",
    bio: "A German composer who bridged the Classical and Romantic eras. He kept composing masterpieces even as he lost his hearing.",
    works: ["Symphony No. 5", "Symphony No. 9", "Moonlight Sonata"],
    link: "His Fifth Symphony shows a motif — a short primary melody — developed across an entire orchestral work, a concept from the module's review of terms." },
  { name: "Ryan Cayabyab", life: "b. 1954 · Philippines", image: "/images/spotlight/ryan-cayabyab.jpg",
    imageAlt: "Portrait of Filipino composer Ryan Cayabyab.",
    imageCredit: "Photo by Titopao · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Ryan_Cayabyab.jpg",
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
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_30%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="space-y-3 p-7">
                <h3 className="font-display text-2xl font-semibold">{a.name}</h3>
                <p className="mono-label">{a.life}</p>
                <p className="text-slate-300">{a.bio}</p>
                <p className="text-sm text-slate-400"><span className="text-sky-300">Notable works:</span> {a.works.join(" · ")}</p>
                <p className="text-sm text-slate-400"><span className="text-violet-300">Module link:</span> {a.link}</p>
                <p className="border-t border-white/10 pt-3 text-xs text-slate-500">
                  <a href={a.imageSource} target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-2 hover:text-slate-300">
                    {a.imageCredit}
                  </a>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}