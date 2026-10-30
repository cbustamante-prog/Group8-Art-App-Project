import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, MessageCircle } from "lucide-react";
import Field from "@/components/music-exhibition/Field";
import { addGuestbookEntry, getGuestbookEntries } from "@/lib/communityData";

export default function Guestbook({ kind = "comment", title, prompt, placeholder, button }) {
  const qc = useQueryClient();
  const [f, setF] = useState({ name: "", message: "" });
  const [err, setErr] = useState({ name: "", message: "" });
  const [ok, setOk] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["guestbook", kind],
    queryFn: async () => getGuestbookEntries(kind),
  });
  /** @type {import("@tanstack/react-query").UseMutationOptions<unknown, Error, { name: string, message: string }>} */
  const addOptions = {
    mutationFn: async (d = { name: "", message: "" }) => addGuestbookEntry({ ...d, kind }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["guestbook", kind] }); setF({ name: "", message: "" }); setOk(true); },
  };
  const add = useMutation(addOptions);

  const submit = (e) => {
    e.preventDefault(); setOk(false);
    const er = { name: "", message: "" };
    if (f.name.trim().length < 2) er.name = "Please enter your name (at least 2 characters).";
    if (f.message.trim().length < 5) er.message = "Please write at least 5 characters.";
    setErr(er);
    if (!er.name && !er.message) add.mutate({ name: f.name.trim(), message: f.message.trim() });
  };
  const items = data || [];

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-1 text-slate-400">{prompt}</p>
      <form onSubmit={submit} noValidate className="mt-5 space-y-4">
        <Field id={`${kind}-n`} label="Your name" value={f.name} maxLength={60} onChange={(e) => setF({ ...f, name: e.target.value })} error={err.name} multiline={false} />
        <Field id={`${kind}-m`} label="Your message" multiline maxLength={800} placeholder={placeholder} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} error={err.message} />
        <button disabled={add.isPending} className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-slate-950 active:scale-95 disabled:opacity-60">
          {add.isPending && <Loader2 className="h-4 w-4 animate-spin" />}{button}
        </button>
        <div role="status" aria-live="polite">
          {ok && (
            <p className="text-emerald-400">
              {kind === "comment"
                ? "Your comment is posted and visible on the Community wall."
                : "Submitted for review. Your verse will appear here after it is approved."}
            </p>
          )}
          {add.isError && <p className="text-red-400">We couldn't submit your post. Please try again.</p>}
        </div>
      </form>
      <div
        className={`mt-6 space-y-3 ${kind === "comment" ? "max-h-80 overflow-y-auto overscroll-contain pr-2" : ""}`}
        {...(kind === "comment" ? { role: "region", "aria-label": "Community wall posts", tabIndex: 0 } : {})}
      >
        {isLoading && <p className="flex items-center gap-2 text-slate-400"><Loader2 className="h-4 w-4 animate-spin" />Loading posts…</p>}
        {isError && <p className="text-red-400">Couldn't load shared posts.</p>}
        {!isLoading && !isError && items.length === 0 && <p className="flex items-center gap-2 text-slate-500"><MessageCircle className="h-4 w-4" />No posts yet — be the first!</p>}
        {items.map((i) => (
          <div key={i.id} className="rounded-2xl bg-white/[0.04] p-4">
            <p className="whitespace-pre-line text-slate-200">{i.message}</p>
            <p className="mt-2 text-xs text-slate-500">— {i.name} · {new Date(i.created_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}