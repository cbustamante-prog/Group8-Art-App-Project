import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { QUIZ } from "@/lib/quizData";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const question = QUIZ[questionIndex];
  const score = QUIZ.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);
  const progress = checked ? 100 : ((questionIndex + 1) / QUIZ.length) * 100;

  const reset = () => {
    setAnswers({});
    setQuestionIndex(0);
    setChecked(false);
  };

  if (checked) {
    return (
      <div className="py-4">
        <div className="text-center" role="status">
          <p className="mono-label">Quiz complete</p>
          <p className="mt-2 font-display text-4xl">{score} / {QUIZ.length}</p>
          <p className="mt-2 text-slate-400">
            {score === QUIZ.length ? "Perfect score! You know your music." : "Nice work. Review the answers below or give it another try."}
          </p>
        </div>
        <details className="mt-6 rounded-2xl bg-white/[0.03] p-4">
          <summary className="cursor-pointer font-medium">Review answers</summary>
          <ol className="mt-4 space-y-4">
            {QUIZ.map((item, index) => (
              <li key={item.q} className="border-t border-white/10 pt-3">
                <p className="font-medium">{index + 1}. {item.q}</p>
                <p className={`mt-1 text-sm ${answers[index] === item.answer ? "text-emerald-300" : "text-amber-200"}`}>
                  Your answer: {item.options[answers[index]]}
                </p>
                {answers[index] !== item.answer && (
                  <p className="mt-1 text-sm text-slate-400">Correct answer: {item.options[item.answer]}</p>
                )}
                <p className="mt-1 text-sm text-slate-400">{item.why}</p>
              </li>
            ))}
          </ol>
        </details>
        <button onClick={reset} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 active:scale-95">
          <RotateCcw className="h-4 w-4" />Try again
        </button>
      </div>
    );
  }

  const selectedAnswer = answers[questionIndex];
  const isLastQuestion = questionIndex === QUIZ.length - 1;

  return (
    <div>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between gap-3 text-sm text-slate-300">
          <span>Question {questionIndex + 1} of {QUIZ.length}</span>
          <span>{Object.keys(answers).length} answered</span>
        </div>
        <div
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuemin={0}
          aria-valuemax={QUIZ.length}
          aria-valuenow={questionIndex + 1}
          className="h-2 overflow-hidden rounded-full bg-white/10"
        >
          <div className="h-full rounded-full bg-violet-400 transition-[width]" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <fieldset className="rounded-2xl bg-white/[0.03] p-4 sm:p-6">
        <legend className="max-w-full px-1 font-display text-xl leading-snug sm:text-2xl">
          {questionIndex + 1}. {question.q}
        </legend>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {question.options.map((option, optionIndex) => {
            const picked = selectedAnswer === optionIndex;
            return (
              <label
                key={option}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                  picked ? "border-violet-400 bg-violet-500/20" : "border-white/10 hover:bg-white/5"
                }`}
              >
                <input
                  type="radio"
                  name={`quiz-question-${questionIndex}`}
                  className="accent-violet-400"
                  checked={picked}
                  onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}
                />
                <span>{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => setQuestionIndex((index) => index - 1)}
          disabled={questionIndex === 0}
          className="inline-flex min-h-11 items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />Previous
        </button>
        <span className="text-sm text-slate-400" aria-live="polite">
          {selectedAnswer === undefined ? "Choose an answer to continue." : "Answer saved"}
        </span>
        {isLastQuestion ? (
          <button
            onClick={() => setChecked(true)}
            disabled={Object.keys(answers).length !== QUIZ.length}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-violet-500 px-5 py-2 font-medium text-slate-950 transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check answers <Check className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={() => setQuestionIndex((index) => index + 1)}
            disabled={selectedAnswer === undefined}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-violet-500 px-5 py-2 font-medium text-slate-950 transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
