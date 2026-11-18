import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { HISTORY } from "@/data/site";

export function HistoryTimeline() {
  return (
    <section className="section-y bg-muted/50">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Our Journey"
          title={<>A timeline of <span className="text-[var(--gold-deep)]">engineering milestones</span></>}
        />
        <div className="mt-24 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/60 to-transparent" />
          <div className="space-y-14">
            {HISTORY.map((h, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={h.year} dir={left ? "left" : "right"}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-3 h-4 w-4 rounded-full bg-[var(--gold)] ring-4 ring-background" />
                    <div className={`pl-12 md:pl-0 md:w-1/2 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold-deep)] font-bold">{h.year}</div>
                      <h3 className="mt-3 text-xl font-bold text-[var(--ink)]">{h.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
