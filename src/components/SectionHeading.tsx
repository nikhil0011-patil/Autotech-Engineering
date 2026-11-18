import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className={dark ? "eyebrow-dark" : "eyebrow"}>
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-5 text-3xl md:text-5xl font-bold tracking-tight ${
            dark ? "text-white" : "text-[var(--ink)]"
          } ${center ? "gold-underline-center" : "gold-underline"}`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className={`mt-10 text-base md:text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
