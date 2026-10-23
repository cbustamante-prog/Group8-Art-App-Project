import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { playAudioExample } from "@/lib/audioPlayback";

export default function AudioPreview({ steps, label, compact = false }) {
  const playbackRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => () => playbackRef.current?.stop(), []);

  const togglePlayback = async () => {
    setError("");
    if (playbackRef.current) {
      playbackRef.current.stop();
      playbackRef.current = null;
      setPlaying(false);
      return;
    }

    setLoading(true);
    try {
      const playback = await playAudioExample(steps);
      playbackRef.current = playback;
      setPlaying(true);
      playback.finished.then(() => {
        if (playbackRef.current === playback) {
          playbackRef.current = null;
          setPlaying(false);
        }
      });
    } catch (playbackError) {
      setError(playbackError instanceof Error ? playbackError.message : "Audio playback failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={togglePlayback}
        disabled={loading}
        aria-label={`${playing ? "Stop" : "Play"} ${label}`}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-100 transition hover:bg-amber-300/20 disabled:opacity-60 ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        {loading ? "Starting…" : playing ? "Stop sample" : "Play sample"}
      </button>
      {error && <p className="mt-2 text-xs text-rose-300" role="status">{error}</p>}
    </div>
  );
}
