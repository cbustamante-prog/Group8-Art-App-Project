let audioContext;
let activePlayback;

function getAudioContext() {
  const AudioContextConstructor = window.AudioContext;
  if (!AudioContextConstructor) {
    throw new Error("This browser does not support audio playback.");
  }
  audioContext ||= new AudioContextConstructor();
  return audioContext;
}

export async function playAudioExample(steps) {
  const context = getAudioContext();
  await context.resume();
  activePlayback?.stop();

  const sources = [];
  let timer;
  let settled = false;
  let resolveFinished;
  const finished = new Promise((resolve) => { resolveFinished = resolve; });
  const playback = {
    finished,
    stop() {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      sources.forEach(({ source, ended }) => {
        if (!ended) source.stop();
      });
      if (activePlayback === playback) activePlayback = null;
      resolveFinished();
    },
  };
  activePlayback = playback;

  let offset = context.currentTime + 0.04;
  for (const step of steps) {
    const duration = step.duration;
    for (const frequency of step.frequencies) {
      const source = context.createOscillator();
      const gain = context.createGain();
      const end = offset + duration;
      const voiceVolume = step.volume / Math.sqrt(step.frequencies.length);

      source.type = step.wave;
      source.frequency.setValueAtTime(frequency, offset);
      if (step.slideTo) source.frequency.linearRampToValueAtTime(step.slideTo, end);
      if (step.vibrato) {
        const vibrato = context.createOscillator();
        const vibratoDepth = context.createGain();
        vibrato.frequency.value = 6;
        vibratoDepth.gain.value = 7;
        vibrato.connect(vibratoDepth).connect(source.frequency);
        vibrato.start(offset);
        vibrato.stop(end);
      }

      gain.gain.setValueAtTime(0.0001, offset);
      gain.gain.linearRampToValueAtTime(voiceVolume, offset + Math.min(0.025, duration / 3));
      gain.gain.exponentialRampToValueAtTime(0.0001, end);
      source.connect(gain).connect(context.destination);
      const voice = { source, ended: false };
      sources.push(voice);
      source.onended = () => { voice.ended = true; };
      source.start(offset);
      source.stop(end);
    }
    offset += duration;
  }

  timer = setTimeout(() => playback.stop(), Math.max(0, (offset - context.currentTime) * 1000) + 100);
  return playback;
}
