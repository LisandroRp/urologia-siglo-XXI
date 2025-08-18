import { useEffect, useMemo, useRef, useState, Fragment } from "react";

type Props = {
  text?: string;
  limitLines?: number;
  highlights?: string[];
  showChips?: boolean;
};

export default function Description({
  text = "",
  limitLines = 11,
  highlights = [],
  showChips = false
}: Props) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<number>(0);
  const [collapsedH, setCollapsedH] = useState<number>(0);

  // recalcula alturas para animar max-height
  const recalc = () => {
    const el = boxRef.current;
    if (!el) return;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "24");
    const h = Math.round(lineHeight * limitLines);
    setCollapsedH(h);
    setMaxH(open ? el.scrollHeight : h);
  };

  useEffect(() => {
    recalc();
    // re-medimos en resize por si cambia el ancho
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, limitLines, text]);

  const content = useMemo(() => highlightNodes(text, highlights), [text, highlights]);

  const hasOverflow = useMemo(() => {
    const el = boxRef.current;
    if (!el) return false;
    return el.scrollHeight > collapsedH + 2; // pequeño margen
  }, [collapsedH, text]);

  return (
    <div className="relative rounded-xl p-4">
      <div
        ref={boxRef}
        style={{ maxHeight: maxH || undefined, transition: "max-height 400ms ease" }}
        className="overflow-hidden leading-relaxed text-slate-700"
        aria-expanded={open}
        id="desc-content"
      >
        <p>{content}</p>
      </div>
      {!open && hasOverflow && (
        <div className="pointer-events-none absolute inset-x-4 bottom-12 h-16 bg-gradient-to-t from-blue-50 to-transparent" />
      )}

      {hasOverflow && (
        <button
          onClick={() => setOpen(v => !v)}
          className="mt-3 hover:opacity-50 inline-flex items-center gap-2 text-sm font-medium text-slate-900 cursor-pointer"
          aria-controls="desc-content"
        >
          {open ? "Ver menos" : "Ver más"}
          <svg
            className={`h-4 w-4 transition-transform duration-500 ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
          </svg>
        </button>
      )}

      {/* Chips opcionales con highlights */}
      {highlights.length > 0 && showChips && (
        <div className="mt-3 flex flex-wrap gap-2">
          {highlights.map(h => (
            <span
              key={h}
              className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
            >
              {h}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Helpers
function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightNodes(text: string, keys: string[]) {
  if (!keys?.length) return text;
  const pattern = new RegExp(`(${keys.map(k => escapeRegExp(k)).join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    keys.some(k => part.toLowerCase() === k.toLowerCase()) ? (
      <mark key={i} className="rounded bg-transparent px-1 text-slate-900 font-semibold">
        <strong>{part}</strong>
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
