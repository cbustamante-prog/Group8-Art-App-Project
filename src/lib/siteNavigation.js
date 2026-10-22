export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "explore", label: "Explore" },
  { id: "showcase", label: "Showcase" },
  { id: "features", label: "Interactive" },
  { id: "insights", label: "Insights" },
  { id: "community", label: "Community" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}