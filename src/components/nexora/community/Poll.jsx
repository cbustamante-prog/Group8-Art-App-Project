import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Field from "@/components/nexora/Field";
import { addPollVote, getPollState } from "@/lib/localData";

const GENRES = ["Classical", "OPM", "Folk", "Jazz", "Rock", "Rap", "Religious", "Blues"];

export default function Poll() {
  const qc = useQueryClient();
  const [choice, setChoice] = useState("");
  const [reason, setReason] = useState("");
  const [err, setErr] = useState("");
  const { data, isError } = useQuery({ queryKey: ["poll"], queryFn: async () => getPollState() });
  const voted = Boolean(data?.hasVoted);
  const counts = (data?.votes || []).reduce((result, vote) => {
    result[vote.choice] = (result[vote.choice] || 0) + 1;
    return result;
  }, {});
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const vote = useMutation({
    mutationFn: async () => addPollVote({ choice, reason: reason.trim() }),
    onSuccess: (state) => { qc.setQueryData(["poll"], state); },
  });
  const submit = (e) => { e.preventDefault(); if (!choice) return setErr("Please choose a genre."); setErr(""); vote.mutate(); };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold">Art Appreciation Poll</h3>
      <p className="mt-1 text-slate-400">Which music genre is your favourite?</p>
      {isError && <p className="mt-4 text-red-400">Couldn't load votes saved in this browser.</p>}
      {!voted ? (
        <form onSubmit={submit} noValidate className="mt-5 space-y-4">
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Favourite genre">
            {GENRES.map((g) => <button type="button" key={g} role="radio" aria-checked={choice === g} onClick={() => setChoice(g)} className={`rounded-full px-4 py-2 text-sm ${choice === g ? "bg-violet-500 text-slate-950" : "bg-white/5 hover:bg-white/10"}`}>{g}</button>)}
          </div>
          {err && <p className="text-sm text-red-400">{err}</p>}
          <Field id="poll-r" label="Why did you choose it? (optional)" multiline error={undefined} maxLength={400} value={reason} onChange={(e) => setReason(e.target.value)} />
          <button disabled={vote.isPending} className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 disabled:opacity-60">{vote.isPending && <Loader2 className="h-4 w-4 animate-spin" />}Submit vote</button>
          {vote.isError && <p className="text-red-400">Your vote couldn't be saved in this browser. Try again.</p>}
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