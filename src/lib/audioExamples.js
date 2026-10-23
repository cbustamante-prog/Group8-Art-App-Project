const note = (frequencies, duration = 0.28, volume = 0.2, wave = "triangle") => ({
  frequencies: Array.isArray(frequencies) ? frequencies : [frequencies],
  duration,
  volume,
  wave,
});

const pulse = (durations, volumes = []) =>
  durations.map((duration, i) => note(880, duration, volumes[i] ?? 0.15, "square"));

export const WORK_AUDIO = {
  1: [note(196, 0.24, 0.25, "square"), note(196, 0.24, 0.2, "square"), note(196, 0.24, 0.2, "square"), note(146.83, 0.75, 0.24, "square")],
  2: [note(392, 0.48), note(493.88, 0.48), note(587.33, 0.48), note(783.99, 0.85)],
  3: [note(146.83, 0.45, 0.18), note(220, 0.3), note(246.94, 0.3), note(293.66, 0.38), note(329.63, 0.48), note(146.83, 0.45, 0.18)],
  4: [note([130.81, 196], 0.2, 0.2, "sawtooth"), note([130.81, 196], 0.2, 0.12, "sawtooth"), note([146.83, 220], 0.42, 0.2, "sawtooth"), note([130.81, 196], 0.2, 0.2, "sawtooth")],
  5: [note(261.63, 0.4), note(329.63, 0.4), note(392, 0.55), note(349.23, 0.4), note(329.63, 0.4), note(261.63, 0.65)],
  6: [note(261.63, 0.3), note(293.66, 0.3), note(329.63, 0.3), note(392, 0.3), note(392, 0.3), note(440, 0.3), note(392, 0.55)],
  7: [note(493.88, 0.58, 0.1), note(440, 0.58, 0.1), note(392, 0.58, 0.1), note(329.63, 0.9, 0.1)],
  8: [note([196, 246.94], 0.2, 0.22, "sawtooth"), note([220, 293.66], 0.2, 0.22, "sawtooth"), note([246.94, 329.63], 0.2, 0.22, "sawtooth"), note([293.66, 392], 0.42, 0.24, "sawtooth")],
  9: [note(293.66, 0.34, 0.16), note(349.23, 0.34, 0.16), note(392, 0.5, 0.18), note(466.16, 0.34, 0.16), note(440, 0.65, 0.18)],
};

const GLOSSARY_AUDIO = {
  Accelerando: () => pulse([0.5, 0.4, 0.3, 0.22, 0.16]),
  Allegro: () => pulse([0.24, 0.24, 0.24, 0.24]),
  Andante: () => pulse([0.55, 0.55, 0.55, 0.55]),
  Moderato: () => pulse([0.38, 0.38, 0.38, 0.38]),
  Presto: () => pulse([0.15, 0.15, 0.15, 0.15, 0.15]),
  Rallentando: () => pulse([0.16, 0.24, 0.34, 0.48, 0.62]),
  Crescendo: () => [0.06, 0.1, 0.15, 0.22, 0.28].map((volume) => note(440, 0.3, volume)),
  Diminuendo: () => [0.28, 0.22, 0.15, 0.1, 0.06].map((volume) => note(440, 0.3, volume)),
  Forte: () => pulse([0.3, 0.3, 0.3], [0.28, 0.28, 0.28]),
  Piano: () => pulse([0.3, 0.3, 0.3], [0.07, 0.07, 0.07]),
  Mezzo: () => pulse([0.3, 0.3, 0.3], [0.16, 0.16, 0.16]),
  Accents: () => pulse([0.3, 0.3, 0.3, 0.3], [0.26, 0.1, 0.1, 0.1]),
  Beat: () => pulse([0.35, 0.35, 0.35, 0.35]),
  "Bar / Measure": () => pulse([0.35, 0.35, 0.35, 0.35], [0.26, 0.12, 0.12, 0.12]),
  "Time signature": () => pulse([0.3, 0.3, 0.3], [0.26, 0.12, 0.12]),
  Polyrhythm: () => pulse([0.28, 0.28, 0.28, 0.28, 0.28, 0.28]),
  Metronome: () => pulse([0.4, 0.4, 0.4, 0.4]),
  Pitch: () => [261.63, 329.63, 392, 523.25].map((hz) => note(hz, 0.35)),
  Interval: () => [note(261.63, 0.5), note(392, 0.65)],
  Octave: () => [note(261.63, 0.5), note(523.25, 0.65)],
  Chord: () => [note([261.63, 329.63, 392], 0.85)],
  Triad: () => [note([261.63, 329.63, 392], 0.85)],
  Arpeggio: () => [261.63, 329.63, 392, 523.25].map((hz) => note(hz, 0.25)),
  Harmony: () => [note([261.63, 329.63, 392], 0.85)],
  Dissonance: () => [note([261.63, 277.18, 392], 0.85, 0.16, "square")],
  Major: () => [note([261.63, 329.63, 392], 0.8)],
  Minor: () => [note([261.63, 311.13, 392], 0.8)],
  Unison: () => [note([261.63, 261.63], 0.8)],
  Legato: () => [note(261.63, 0.55), note(329.63, 0.55), note(392, 0.7)],
  Staccato: () => [note(261.63, 0.12), note(329.63, 0.12), note(392, 0.12), note(440, 0.12)],
  Glissando: () => [{ frequencies: [261.63], slideTo: 523.25, duration: 0.9, volume: 0.18, wave: "sine" }],
  Vibrato: () => [{ frequencies: [440], vibrato: true, duration: 0.9, volume: 0.18, wave: "sine" }],
  Slur: () => [note(293.66, 0.55), note(349.23, 0.55), note(392, 0.7)],
  Canon: () => [note(392, 0.28), note(493.88, 0.28), note(587.33, 0.38), note(392, 0.28), note(493.88, 0.28), note(587.33, 0.38)],
  Concerto: () => [note(523.25, 0.5), note(587.33, 0.5), note(659.25, 0.7)],
  Symphony: () => [note([130.81, 196], 0.65), note([261.63, 329.63, 392], 0.75), note([196, 293.66, 392], 0.85)],
  Opera: () => [note([261.63, 329.63, 392], 0.8), note([293.66, 369.99, 440], 0.9)],
  "Sonata form": () => [note(261.63, 0.3), note(392, 0.3), note(440, 0.3), note(392, 0.3), note(261.63, 0.3), note(392, 0.3)],
  Ostinato: () => [note(261.63, 0.22), note(329.63, 0.22), note(261.63, 0.22), note(329.63, 0.22), note(261.63, 0.22), note(329.63, 0.22)],
  Motif: () => [note(261.63, 0.25), note(329.63, 0.25), note(392, 0.42), note(293.66, 0.25), note(369.99, 0.25), note(440, 0.42)],
  Conductor: () => [note(261.63, 0.35, 0.08), note(329.63, 0.28, 0.14), note(392, 0.22, 0.24), note(523.25, 0.18, 0.28)],
  Choir: () => [note([261.63, 329.63, 392, 523.25], 0.9, 0.12, "sine")],
  "A cappella": () => [note([261.63, 329.63, 392], 0.9, 0.12, "sine")],
};

const categoryExamples = {
  Tempo: () => pulse([0.38, 0.38, 0.38, 0.38]),
  Dynamics: () => [0.08, 0.14, 0.2, 0.26].map((volume) => note(440, 0.3, volume)),
  Rhythm: () => pulse([0.3, 0.3, 0.3, 0.3], [0.24, 0.12, 0.12, 0.12]),
  "Pitch & Harmony": () => [note([261.63, 329.63, 392], 0.85)],
  Articulation: () => [note(261.63, 0.15), note(329.63, 0.15), note(392, 0.5)],
  Form: () => [note(261.63, 0.25), note(329.63, 0.25), note(392, 0.4), note(261.63, 0.25), note(329.63, 0.25), note(392, 0.4)],
  Performance: () => [note([261.63, 329.63, 392], 0.85)],
  Voice: () => [note([261.63, 329.63, 392], 0.85, 0.12, "sine")],
};

export function getGlossaryAudio(term, category) {
  return GLOSSARY_AUDIO[term]?.() ?? categoryExamples[category]?.() ?? [note(440, 0.55)];
}
