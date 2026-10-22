import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { PAIRS } from "@/lib/quizData";

const shuffle = (a) => [...a].sort(() => Math.random() - 0.5);

export default function Matching() {
  const [defs, setDefs] = useState(() => shuffle(PAIRS));
  const [term, setTerm] = useState(null);
  const [done, setDone] = useState([]);
  const [msg, setMsg] = useState("");
  const [tries, setTries] = useState(0);
  const won = done.length === PAIRS.length;

  const pickDef = (d) => {
    if (!term) return setMsg("Select a term first.");
    setTries(tries + 1);
    if (d.term === term) { setDone([...done, term]); setMsg("Match! Well done."); }
    else setMsg("Not quite — try another definition.");
    setTerm(null);
  };
  const reset = () => { setDefs(shuffle(PAIRS)); setDone([]); setTerm(null); setMsg(""); setTries(0); };
  const cls = "w-full rounded-xl border px-4 py-3 text-left text-sm transition";

  return (
    <div>
      <p className="mb-6 text-slate-400">Instructions: select a term on the left, then the definition on the right that matches it.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">{PAIRS.map((p) => (
          <button key={p.term} disabled={done.includes(p.term)} onClick={() => setTerm(p.term)} className={`${cls} ${done.includes(p.term) ? "border-emerald-400 bg-emerald-500/15" : term === p.term ? "border-violet-400 bg-violet-500/25" : "border-white/10 hover:bg-white/5"}`}>{p.term}</button>
        ))}</div>
        <div className="space-y-2">{defs.map((d) => (
          <button key={d.term} disabled={done.includes(d.term)} onClick={() => pickDef(d)} className={`${cls} ${done.includes(d.term) ? "border-emerald-400 bg-emerald-500/15" : "border-white/10 hover:bg-white/5"}`}>{d.def}</button>
        ))}</div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4" role="status">
        <span className="text-sm text-slate-300">{won ? `All matched in ${tries} tries!` : msg || `Matched ${done.length} of ${PAIRS.length}`}</span>
        <button onClick={reset} className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm hover:bg-white/10"><RotateCcw className="h-4 w-4" />Shuffle & restart</button>
      </div>
    </div>
  );
}