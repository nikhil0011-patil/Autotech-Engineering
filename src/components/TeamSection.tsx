import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TEAM } from "@/data/site";

export function TeamSection() {
  return (
    <section className="section-y bg-muted/50">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Leadership"
          title={<>The people <span className="text-[var(--gold-deep)]">behind the precision</span></>}
          subtitle="Automotive engineers and operators with decades of tier-1 supply experience."
        />
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <article className="group bg-white border border-border card-lift p-8 text-center">
                <div className="mx-auto h-24 w-24 grid place-items-center rounded-full bg-[var(--ink)] text-[var(--gold)] text-2xl font-black tracking-wider group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors duration-500">
                  {m.initials}
                </div>
                <h3 className="mt-6 text-lg font-bold text-[var(--ink)]">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{m.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
