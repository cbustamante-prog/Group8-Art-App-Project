import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { GUESSES } from "@/lib/quizData";

export default function Guess() {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState(null);
  const [score, setScore] = useState(0);
  const finished = i >= GUESSES.length;
  const g = GUESSES[i];

  const choose = (j) => { if (pick !== null) return; setPick(j); if (j === g.answer) setScore(score + 1); };
  const next = () => { setPick(null); setI(i + 1); };
  const reset = () => { setI(0); setPick(null); setScore(0); };

  if (finished) return (
    <div className="py-8 text-center" role="status">
      <p className="font-display text-4xl">{score} / {GUESSES.length}</p>
      <p className="mt-2 text-slate-400">{score === GUESSES.length ? "Perfect ear!" : "Good listening — try again to improve."}</p>
      <button onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950"><RotateCcw className="h-4 w-4" />Play again</button>
    </div>
  );
  return (
    <div>
      <p className="mb-6 text-slate-400">Instructions: read the clue and choose the music term, form or instrument it describes.</p>
      <p className="mono-label">Clue {i + 1} of {GUESSES.length}</p>
      <p className="mt-3 font-display text-2xl">{g.clue}</p>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {g.options.map((o, j) => (
          <button key={o} onClick={() => choose(j)} className={`rounded-xl border px-4 py-3 text-left transition ${pick === null ? "border-white/10 hover:bg-white/5" : j === g.answer ? "border-emerald-400 bg-emerald-500/15" : pick === j ? "border-red-400 bg-red-500/15" : "border-white/10 opacity-60"}`}>{o}</button>
        ))}
      </div>
      {pick !== null && (
        <div className="mt-5 flex flex-wrap items-center gap-4" role="status">
          <p className="text-sm text-slate-300">{pick === g.answer ? "Correct!" : `The answer is ${g.options[g.answer]}.`} {g.tip}</p>
          <button onClick={next} className="rounded-full bg-violet-500 px-5 py-2 text-sm font-medium text-slate-950">{i + 1 === GUESSES.length ? "See score" : "Next clue"}</button>
        </div>
      )}
    </div>
  );
}