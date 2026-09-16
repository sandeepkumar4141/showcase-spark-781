import { useRef, type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Card with a cursor-following spotlight — a quiet, Vercel-ish hover cue. */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`card-surface group relative overflow-hidden p-6 hover:border-foreground/25 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), oklch(0.72 0.16 232 / 12%), transparent 65%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
      {children}
    </span>
  );
}
