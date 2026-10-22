import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, MessageCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Field from "@/components/nexora/Field";

export default function Guestbook({ kind = "comment", title, prompt, placeholder, button }) {
  const qc = useQueryClient();
  const [f, setF] = useState({ name: "", message: "" });
  const [err, setErr] = useState({});
  const [ok, setOk] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["guestbook", kind],
    queryFn: () => base44.entities.GuestbookEntry.filter({ kind }, { sort: "-created_date", limit: 20 }),
  });
  const add = useMutation({
    mutationFn: (d) => base44.entities.GuestbookEntry.create({ ...d, kind }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["guestbook", kind] }); setF({ name: "", message: "" }); setOk(true); },
  });

  const submit = (e) => {
    e.preventDefault(); setOk(false);
    const er = {};
    if (f.name.trim().length < 2) er.name = "Please enter your name (at least 2 characters).";
    if (f.message.trim().length < 5) er.message = "Please write at least 5 characters.";
    setErr(er);
    if (!Object.keys(er).length) add.mutate({ name: f.name.trim(), message: f.message.trim() });
  };
  const items = data?.items || [];

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-1 text-slate-400">{prompt}</p>
      <form onSubmit={submit} noValidate className="mt-5 space-y-4">
        <Field id={`${kind}-n`} label="Your name" value={f.name} maxLength={60} onChange={(e) => setF({ ...f, name: e.target.value })} error={err.name} />
        <Field id={`${kind}-m`} label="Your message" multiline maxLength={800} placeholder={placeholder} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} error={err.message} />
        <button disabled={add.isPending} className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 active:scale-95 disabled:opacity-60">
          {add.isPending && <Loader2 className="h-4 w-4 animate-spin" />}{button}
        </button>
        <div role="status" aria-live="polite">
          {ok && <p className="text-emerald-400">Saved — your post is now visible below.</p>}
          {add.isError && <p className="text-red-400">We couldn't save your post. Please try again.</p>}
        </div>
      </form>
      <div className="mt-6 space-y-3">
        {isLoading && <p className="flex items-center gap-2 text-slate-400"><Loader2 className="h-4 w-4 animate-spin" />Loading posts…</p>}
        {isError && <p className="text-red-400">Couldn't load posts.</p>}
        {!isLoading && !isError && items.length === 0 && <p className="flex items-center gap-2 text-slate-500"><MessageCircle className="h-4 w-4" />No posts yet — be the first!</p>}
        {items.map((i) => (
          <div key={i.id} className="rounded-2xl bg-white/[0.04] p-4">
            <p className="whitespace-pre-line text-slate-200">{i.message}</p>
            <p className="mt-2 text-xs text-slate-500">— {i.name} · {new Date(i.created_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}