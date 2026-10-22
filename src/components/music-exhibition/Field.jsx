export default function Field({ id, label, error, multiline, ...props }) {
  const cls = `w-full rounded-xl border bg-slate-900/60 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-sky-400 ${error ? "border-red-400" : "border-white/15"}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-slate-300">{label}</label>
      {multiline ? <textarea id={id} rows={4} className={cls} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...props} />
        : <input id={id} className={cls} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...props} />}
      {error && <p id={`${id}-e`} className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}