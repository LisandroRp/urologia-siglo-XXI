export function Spinner({
  size = 20,
  className = "text-slate-900",
}: { size?: number; className?: string }) {
  return (
    <span
      role="status"
      aria-label="cargando"
      className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
      style={{ width: size, height: size }}
    />
  );
}