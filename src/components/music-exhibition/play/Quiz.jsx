import { useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";
import { QUIZ } from "@/lib/quizData";

export default function Quiz() {
  const [ans, setAns] = useState({});
  const [checked, setChecked] = useState(false);
  const score = QUIZ.reduce((s, q, i) => s + (ans[i] === q.answer ? 1 : 0), 0);
  const reset = () => { setAns({}); setChecked(false); };
  const unanswered = QUIZ.length - Object.keys(ans).length;

  return (
    <div>
      <p className="mb-6 text-slate-400">Instructions: choose one answer for each of the {QUIZ.length} questions, then press <b>Check answers</b> to see your score and the correct answers.</p>
      <div className="space-y-6">
        {QUIZ.map((q, i) => (
          <fieldset key={q.q} className="rounded-2xl bg-white/[0.03] p-5">
            <legend className="px-1 font-medium">{i + 1}. {q.q}</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((o, j) => {
                const picked = ans[i] === j;
                const right = checked && j === q.answer;
                const wrong = checked && picked && j !== q.answer;
                return (
                  <label key={o} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition ${right ? "border-emerald-400 bg-emerald-500/15" : wrong ? "border-red-400 bg-red-500/15" : picked ? "border-violet-400 bg-violet-500/20" : "border-white/10 hover:bg-white/5"}`}>
                    <input type="radio" name={`q${i}`} className="sr-only" disabled={checked} checked={picked} onChange={() => setAns({ ...ans, [i]: j })} />
                    {right && <Check className="h-4 w-4 text-emerald-300" />}{wrong && <X className="h-4 w-4 text-red-300" />}{o}
                  </label>
                );
              })}
            </div>
            {checked && <p className="mt-3 text-sm text-slate-400">{ans[i] === q.answer ? "Correct. " : `Correct answer: ${q.options[q.answer]}. `}{q.why}</p>}
          </fieldset>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        {!checked ? (
          <button onClick={() => setChecked(true)} disabled={unanswered > 0} className="rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-violet-400 active:scale-95 disabled:opacity-40">Check answers</button>
        ) : (
          <button onClick={reset} className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 active:scale-95"><RotateCcw className="h-4 w-4" />Try again</button>
        )}
        {!checked && unanswered > 0 && <span className="text-sm text-slate-500">{unanswered} question(s) left</span>}
        {checked && <span role="status" className="font-display text-xl">Score: {score} / {QUIZ.length}</span>}
      </div>
    </div>
  );
}