import SectionHead from "@/components/music-exhibition/SectionHead";
import { REFERENCES, IMAGE_CREDITS } from "@/lib/musicData";

export default function References() {
  return (
    <section id="references" className="px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHead label="References & image credits" title="Where our knowledge comes from." />
        <div className="glass space-y-8 rounded-3xl p-7 sm:p-9">
          <div>
            <h3 className="font-display text-xl font-semibold text-sky-300">References (APA 7th)</h3>
            <ul className="mt-3 space-y-3 text-slate-300">{REFERENCES.map((r) => <li key={r} className="break-words pl-6 -indent-6">{r}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-sky-300">Image & media credits</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">{IMAGE_CREDITS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}