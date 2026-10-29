import { useEffect, useRef, useState } from "react";
import { ExternalLink, Pause, Play } from "lucide-react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function stopOtherAudio() {
  if (typeof window === "undefined") return null;
  const active = window.__musicAudioPlayer;
  if (active && active !== document.activeElement) {
    active.pause();
    active.currentTime = 0;
  }
  return active;
}

export default function AudioPreview({
  kind = "audio",
  src,
  label,
  compact = false,
  fallbackUrl,
  performer,
  license,
  title,
}) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (typeof window !== "undefined") window.__musicAudioPlayer = null;
    }
  }, []);

  const togglePlayback = async () => {
    setError("");
    const audio = audioRef.current;
    if (!audio || !src) {
      setError("This audio clip is not available right now.");
      return;
    }

    if (playing) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
      if (typeof window !== "undefined") window.__musicAudioPlayer = null;
      return;
    }

    const active = stopOtherAudio();
    if (active && active !== audio) {
      active.pause();
      active.currentTime = 0;
    }

    try {
      await audio.play();
      if (typeof window !== "undefined") window.__musicAudioPlayer = audio;
      setPlaying(true);
    } catch (playbackError) {
      setError(playbackError instanceof Error ? playbackError.message : "Audio playback failed.");
      setPlaying(false);
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = Number(event.target.value);
    audio.currentTime = next;
    setCurrentTime(next);
  };

  const buttonLabel = `${playing ? "Stop" : "Play"} ${label}`;

  if (kind === "youtube") {
    return (
      <div className="w-full space-y-3">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <div className="aspect-video w-full">
            <iframe
              src={src}
              title={title || label}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
          {license && <span>{license}</span>}
          {performer && <span>{performer}</span>}
        </div>
        {fallbackUrl && kind !== "youtube" && (
          <a href={fallbackUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200">
            Open source
          </a>
        )}
      </div>
    );
  }

  if (kind === "link") {
    return (
      <div className="w-full space-y-3">
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-300/20"
        >
          <ExternalLink className="h-4 w-4" />
          Search YouTube
        </a>
        <p className="text-xs text-slate-400">
          {performer} · {license}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-3">
      <audio
        ref={audioRef}
        src={src}
        preload="none"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onError={() => setError("The audio file could not be loaded. Please try again later.")}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onEnded={() => {
          setPlaying(false);
          setCurrentTime(0);
          if (typeof window !== "undefined") window.__musicAudioPlayer = null;
        }}
        aria-label={label}
      />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={buttonLabel}
          className={`inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-100 transition hover:bg-amber-300/20 ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {playing ? "Pause" : "Play sample"}
        </button>
        <div className="w-full text-xs text-slate-300">
          <span>{formatTime(currentTime)}</span>
          <span className="mx-2">/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <input
        aria-label={`${label} seek bar`}
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="w-full accent-amber-400"
      />
      {error && (
        <p className="text-xs text-rose-300" role="status">
          {error}
        </p>
      )}
      {(performer || license) && (
        <p className="text-xs text-slate-400">
          {performer && <span>{performer}</span>}
          {performer && license && <span> · </span>}
          {license && <span>{license}</span>}
        </p>
      )}
    </div>
  );
}
