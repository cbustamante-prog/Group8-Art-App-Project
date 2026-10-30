import { useEffect, useRef, useState } from "react";

const NOTES = ["♪", "♫", "♬"];

export default function ClickMusicNotes() {
  const [notes, setNotes] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    const handleClick = (event) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const bounds = event.target instanceof Element
        ? event.target.getBoundingClientRect()
        : null;
      const x = event.clientX || (bounds ? bounds.left + bounds.width / 2 : 0);
      const y = event.clientY || (bounds ? bounds.top + bounds.height / 2 : 0);
      const burst = NOTES.map((glyph, index) => {
        const id = nextId.current++;
        return {
          id,
          glyph,
          x,
          y,
          offset: `${(index - 1) * 24}px`,
          delay: `${index * 55}ms`,
          rotation: `${(index - 1) * 22}deg`,
        };
      });

      setNotes((current) => [...current, ...burst].slice(-36));
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const removeNote = (id) => {
    setNotes((current) => current.filter((note) => note.id !== id));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      {notes.map((note) => (
        <span
          key={note.id}
          className="click-music-note"
          style={{
            left: note.x,
            top: note.y,
            "--note-offset": note.offset,
            "--note-delay": note.delay,
            "--note-rotation": note.rotation,
          }}
          onAnimationEnd={() => removeNote(note.id)}
        >
          {note.glyph}
        </span>
      ))}
    </div>
  );
}
