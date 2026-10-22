import Reveal from "@/components/nexora/Reveal";

export default function SectionHead({ label, title, children }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-violet-500/70" aria-hidden="true" />
        <p className="mono-label">{label}</p>
        <span className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" aria-hidden="true" />
      </div>
      <h2 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 max-w-2xl text-lg text-slate-300">{children}</p>}
    </Reveal>
  );
}