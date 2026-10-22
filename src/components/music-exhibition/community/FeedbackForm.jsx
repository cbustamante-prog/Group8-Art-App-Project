import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Star } from "lucide-react";
import Field from "@/components/music-exhibition/Field";
import { addFeedback } from "@/lib/localData";

export default function FeedbackForm() {
  const [f, setF] = useState({ name: "", message: "" });
  const [rating, setRating] = useState(0);
  const [err, setErr] = useState({ rating: "", message: "" });
  const send = useMutation({
    mutationFn: async () => addFeedback({ name: f.name.trim(), rating, message: f.message.trim() }),
    onSuccess: () => { setF({ name: "", message: "" }); setRating(0); },
  });
  const submit = (e) => {
    e.preventDefault(); send.reset();
    const er = { rating: "", message: "" };
    if (!rating) er.rating = "Please choose a rating.";
    if (f.message.trim().length < 5) er.message = "Please write at least 5 characters.";
    setErr(er);
    if (!Object.keys(er).length) send.mutate();
  };
  return (
    <form onSubmit={submit} noValidate className="glass space-y-4 rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold">Visitor feedback</h3>
      <p className="text-slate-400">Tell us how this exhibition helped you learn. Feedback is saved only in this browser and is not sent to the team.</p>
      <div role="radiogroup" aria-label="Rating" className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button type="button" key={n} role="radio" aria-checked={rating === n} aria-label={`${n} star${n > 1 ? "s" : ""}`} onClick={() => setRating(n)}>
            <Star className={`h-8 w-8 transition ${n <= rating ? "fill-violet-400 text-violet-400" : "text-slate-600"}`} />
          </button>
        ))}
      </div>
      {err.rating && <p className="text-sm text-red-400">{err.rating}</p>}
      <Field id="fb-n" label="Name (optional)" value={f.name} maxLength={60} onChange={(e) => setF({ ...f, name: e.target.value })} error={undefined} multiline={false} />
      <Field id="fb-m" label="Your feedback" multiline maxLength={800} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} error={err.message} />
      <button disabled={send.isPending} className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 disabled:opacity-60">{send.isPending && <Loader2 className="h-4 w-4 animate-spin" />}Send feedback</button>
      <div role="status" aria-live="polite">
        {send.isSuccess && <p className="text-emerald-400">Thank you — your feedback was saved in this browser.</p>}
        {send.isError && <p className="text-red-400">Couldn't save your feedback in this browser. Please try again.</p>}
      </div>
    </form>
  );
}