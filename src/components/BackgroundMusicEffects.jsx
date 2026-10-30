const NOTES = [
  { glyph: "♪", x: "9%", y: "17%", delay: "-3s" },
  { glyph: "♫", x: "83%", y: "24%", delay: "-11s" },
  { glyph: "♬", x: "21%", y: "59%", delay: "-17s" },
  { glyph: "♪", x: "73%", y: "72%", delay: "-7s" },
  { glyph: "♫", x: "94%", y: "51%", delay: "-14s" },
  { glyph: "♬", x: "43%", y: "88%", delay: "-21s" },
];

export default function BackgroundMusicEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        className="background-music-wave absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-80 250 C 80 250, 80 190, 240 190 S 400 310, 560 310 720 190, 880 190 1040 310, 1200 310 1360 190, 1520 190" />
        <path d="M-80 480 C 80 480, 80 420, 240 420 S 400 540, 560 540 720 420, 880 420 1040 540, 1200 540 1360 420, 1520 420" />
        <path d="M-80 710 C 80 710, 80 650, 240 650 S 400 770, 560 770 720 650, 880 650 1040 770, 1200 770 1360 650, 1520 650" />
      </svg>
      {NOTES.map((note, index) => (
        <span
          key={`${note.glyph}-${index}`}
          className="background-music-note absolute select-none"
          style={{ left: note.x, top: note.y, "--note-delay": note.delay }}
        >
          {note.glyph}
        </span>
      ))}
    </div>
  );
}
