import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { PAIRS } from "@/lib/quizData";

const shuffle = (items) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
};

export default function Matching() {
  const [round, setRound] = useState(() => shuffle(PAIRS));
  const [definitions, setDefinitions] = useState(() => shuffle(PAIRS));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [msg, setMsg] = useState("");
  const [tries, setTries] = useState(0);
  const [matched, setMatched] = useState([]);
  const won = currentIndex === round.length;
  const currentPair = round[currentIndex];

  const pickDefinition = (definition) => {
    setTries((count) => count + 1);
    if (definition.term !== currentPair.term) {
      setMsg("Not quite — try another definition.");
      return;
    }
    setMatched((items) => [...items, currentPair.term]);
    setCurrentIndex((index) => index + 1);
    setMsg("Match! Well done.");
  };
  const reset = () => {
    setRound(shuffle(PAIRS));
    setDefinitions(shuffle(PAIRS));
    setCurrentIndex(0);
    setMatched([]);
    setMsg("");
    setTries(0);
  };
  const cls = "w-full min-h-12 rounded-xl border px-4 py-3 text-left text-sm transition";

  return (
    <div>
      {won ? (
        <div className="py-6 text-center" role="status">
          <Check className="mx-auto h-10 w-10 text-emerald-300" />
          <p className="mt-3 font-display text-2xl">All matched!</p>
          <p className="mt-2 text-slate-400">You matched all {PAIRS.length} terms in {tries} {tries === 1 ? "try" : "tries"}.</p>
          <button onClick={reset} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-violet-500 px-5 py-2 font-medium text-slate-950 hover:bg-violet-400">
            <RotateCcw className="h-4 w-4" />Play again
          </button>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <div className="mb-2 flex items-center justify-between gap-3 text-sm text-slate-300">
              <span>Match {currentIndex + 1} of {round.length}</span>
              <span>{matched.length} matched · {tries} {tries === 1 ? "try" : "tries"}</span>
            </div>
            <div
              role="progressbar"
              aria-label="Matching game progress"
              aria-valuemin={0}
              aria-valuemax={round.length}
              aria-valuenow={currentIndex}
              className="h-2 overflow-hidden rounded-full bg-white/10"
            >
              <div className="h-full rounded-full bg-violet-400 transition-[width]" style={{ width: `${(currentIndex / round.length) * 100}%` }} />
            </div>
          </div>
          <div className="rounded-2xl bg-white/[0.03] p-4 sm:p-6">
            <p className="text-sm text-slate-400">Choose the definition for:</p>
            <h3 className="mt-1 font-display text-2xl text-violet-200">{currentPair.term}</h3>
            <div className="mt-4 grid gap-2">
              {definitions.filter((definition) => !matched.includes(definition.term)).map((definition) => (
                <button
                  key={definition.term}
                  onClick={() => pickDefinition(definition)}
                  aria-label={`Definition: ${definition.def}`}
                  className={`${cls} border-white/10 hover:border-violet-300 hover:bg-violet-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300`}
                >
                  {definition.def}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="min-h-6 text-sm text-slate-300" role="status" aria-live="polite">
              {msg || "Pick the matching definition to continue."}
            </p>
            <button onClick={reset} className="inline-flex min-h-11 items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-white/10">
              <RotateCcw className="h-4 w-4" />Restart
            </button>
          </div>
        </>
      )}
    </div>
  );
}