import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PROCESS } from "@/data/site";

export function ManufacturingProcess() {
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Manufacturing Process"
          title={<>From raw material to <span className="text-[var(--gold-deep)]">dispatch</span></>}
          subtitle="A tightly integrated seven-stage process built on precision engineering and rigorous quality control."
        />

        <div className="mt-24 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 h-16 w-16 grid place-items-center rounded-full bg-[var(--ink)] text-[var(--gold)] font-black text-lg ring-4 ring-background">
                    {p.step}
                  </div>
                  <h3 className="mt-6 text-sm font-bold text-[var(--ink)] uppercase tracking-widest">{p.title}</h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-[180px]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
