import { useRef, useState } from "react";

const NOTES = [["C", 261.63], ["D", 293.66], ["E", 329.63], ["F", 349.23], ["G", 392.0], ["A", 440.0], ["B", 493.88], ["C", 523.25]];
const tempoTerm = (b) => (b < 60 ? "Largo · very slow" : b < 80 ? "Andante-ish · walking pace" : b < 110 ? "Moderato · moderate" : b < 150 ? "Allegro · lively and fast" : "Presto · very fast");

export default function SoundLab() {
  const ctx = useRef(null);
  const [wave, setWave] = useState("sine");
  const [last, setLast] = useState(null);
  const [bpm, setBpm] = useState(100);
  const [on, setOn] = useState(false);
  const timer = useRef(null);
  const [pulse, setPulse] = useState(false);

  const audio = () => (ctx.current ||= new (window.AudioContext || window.webkitAudioContext)());
  const tone = (f, dur = 0.6, type = wave, vol = 0.25) => {
    const c = audio(); const o = c.createOscillator(); const g = c.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(vol, c.currentTime); g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + dur);
  };
  const play = (n, f) => { tone(f); setLast({ n, f }); };
  const tick = () => { tone(1000, 0.06, "square", 0.12); setPulse(true); setTimeout(() => setPulse(false), 90); };
  const start = (b) => { clearInterval(timer.current); tick(); timer.current = setInterval(tick, 60000 / b); };
  const toggle = () => { if (on) { clearInterval(timer.current); setOn(false); } else { setOn(true); start(bpm); } };
  const changeBpm = (v) => { setBpm(v); if (on) start(v); };

  return (
    <div>
      <p className="mb-6 text-slate-400">Instructions: click (or tap) the keys to hear pitch rise across an octave, change the wave to hear tone colour, then use the metronome to feel tempo.</p>
      <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Wave shape">
        {["sine", "triangle", "square", "sawtooth"].map((w) => (
          <button key={w} onClick={() => setWave(w)} aria-pressed={wave === w} className={`rounded-full px-4 py-1.5 text-sm ${wave === w ? "bg-violet-500 text-slate-950" : "glass hover:bg-white/10"}`}>{w}</button>
        ))}
      </div>
      <div className="flex gap-1.5" role="group" aria-label="Keyboard">
        {NOTES.map(([n, f], i) => (
          <button key={i} onClick={() => play(n + (i === 7 ? "5" : "4"), f)} aria-label={`Play ${n}`} className="h-36 flex-1 rounded-b-xl bg-slate-100 pb-3 text-xs font-medium text-slate-900 transition active:scale-[0.97] active:bg-sky-200 flex items-end justify-center">{n}</button>
        ))}
      </div>
      <p className="mt-3 h-6 text-sm text-sky-300" role="status">{last ? `${last.n} · pitch ${last.f.toFixed(1)} Hz (vibrations per second)` : "Play a note to see its pitch."}</p>
      <div className="mt-6 rounded-2xl bg-white/[0.03] p-5">
        <div className="flex flex-wrap items-center gap-4">
          <span className={`h-4 w-4 rounded-full transition ${pulse ? "scale-150 bg-sky-300" : "bg-slate-600"}`} aria-hidden="true" />
          <button onClick={toggle} className="rounded-full bg-violet-500 px-5 py-2 text-sm font-medium text-slate-950">{on ? "Stop metronome" : "Start metronome"}</button>
          <span className="font-display text-lg">{bpm} BPM</span><span className="text-sm text-slate-400">{tempoTerm(bpm)}</span>
        </div>
        <input type="range" min="40" max="200" value={bpm} onChange={(e) => changeBpm(+e.target.value)} aria-label="Tempo in beats per minute" className="mt-4 w-full accent-violet-500" />
      </div>
    </div>
  );
}