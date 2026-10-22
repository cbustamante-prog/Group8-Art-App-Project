import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Field from "@/components/nexora/Field";

const GENRES = ["Classical", "OPM", "Folk", "Jazz", "Rock", "Rap", "Religious", "Blues"];

export default function Poll() {
  const qc = useQueryClient();
  const [choice, setChoice] = useState("");
  const [reason, setReason] = useState("");
  const [err, setErr] = useState("");
  const [voted, setVoted] = useState(() => localStorage.getItem("nexora_voted") === "1");

  const { data } = useQuery({ queryKey: ["poll"], queryFn: () => base44.entities.PollVote.aggregate({ groupBy: "choice" }) });
  const counts = Object.fromEntries((data?.rows || []).map((r) => [r.choice, r.count]));
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const vote = useMutation({
    mutationFn: () => base44.entities.PollVote.create({ choice, reason: reason.trim() }),
    onSuccess: () => { localStorage.setItem("nexora_voted", "1"); setVoted(true); qc.invalidateQueries({ queryKey: ["poll"] }); },
  });
  const submit = (e) => { e.preventDefault(); if (!choice) return setErr("Please choose a genre."); setErr(""); vote.mutate(); };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold">Art Appreciation Poll</h3>
      <p className="mt-1 text-slate-400">Which music genre is your favourite?</p>
      {!voted ? (
        <form onSubmit={submit} noValidate className="mt-5 space-y-4">
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Favourite genre">
            {GENRES.map((g) => <button type="button" key={g} role="radio" aria-checked={choice === g} onClick={() => setChoice(g)} className={`rounded-full px-4 py-2 text-sm ${choice === g ? "bg-violet-500 text-slate-950" : "bg-white/5 hover:bg-white/10"}`}>{g}</button>)}
          </div>
          {err && <p className="text-sm text-red-400">{err}</p>}
          <Field id="poll-r" label="Why did you choose it? (optional)" multiline maxLength={400} value={reason} onChange={(e) => setReason(e.target.value)} />
          <button disabled={vote.isPending} className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 disabled:opacity-60">{vote.isPending && <Loader2 className="h-4 w-4 animate-spin" />}Submit vote</button>
          {vote.isError && <p className="text-red-400">Your vote couldn't be saved. Try again.</p>}
        </form>
      ) : <p className="mt-4 text-emerald-400" role="status">Thanks — your vote was saved.</p>}
      <div className="mt-6 space-y-2">
        {GENRES.map((g) => {
          const pct = total ? Math.round(((counts[g] || 0) / total) * 100) : 0;
          return (
            <div key={g}>
              <div className="flex justify-between text-sm"><span>{g}</span><span className="text-slate-400">{counts[g] || 0} · {pct}%</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-400 transition-all duration-700" style={{ width: `${pct}%` }} /></div>
            </div>
          );
        })}
        <p className="pt-1 text-xs text-slate-500">{total} vote(s) total</p>
      </div>
    </div>
  );
}