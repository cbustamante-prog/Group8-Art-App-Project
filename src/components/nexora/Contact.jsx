import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionHead from "@/components/nexora/SectionHead";
import Field from "@/components/nexora/Field";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [f, setF] = useState(EMPTY);
  const [err, setErr] = useState({});
  const send = useMutation({ mutationFn: () => base44.entities.ContactMessage.create({ name: f.name.trim(), email: f.email.trim(), subject: f.subject.trim(), message: f.message.trim() }), onSuccess: () => setF(EMPTY) });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault(); send.reset();
    const er = {};
    if (f.name.trim().length < 2) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) er.email = "Please enter a valid email address.";
    if (f.subject.trim().length < 3) er.subject = "Please add a subject.";
    if (f.message.trim().length < 10) er.message = "Your message should be at least 10 characters.";
    setErr(er);
    if (!Object.keys(er).length) send.mutate();
  };

  return (
    <section id="contact" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHead label="Contact" title="Get in touch.">Questions about the project? Send a message to the NEXORA team.</SectionHead>
        <form onSubmit={submit} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="c-name" label="Name" value={f.name} onChange={set("name")} error={err.name} maxLength={80} autoComplete="name" />
            <Field id="c-email" label="Email" type="email" value={f.email} onChange={set("email")} error={err.email} maxLength={120} autoComplete="email" />
          </div>
          <Field id="c-sub" label="Subject" value={f.subject} onChange={set("subject")} error={err.subject} maxLength={120} />
          <Field id="c-msg" label="Message" multiline value={f.message} onChange={set("message")} error={err.message} maxLength={1500} />
          <button disabled={send.isPending} className="btn-glow inline-flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3 font-medium text-slate-950 active:scale-95 disabled:opacity-60">{send.isPending && <Loader2 className="h-4 w-4 animate-spin" />}Send message</button>
          <div role="status" aria-live="polite">
            {send.isSuccess && <p className="text-emerald-400">Message sent and saved. Thank you!</p>}
            {send.isError && <p className="text-red-400">Sorry, your message couldn't be sent. Please try again.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}