import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { MACHINERY } from "@/data/site";

export function MachinerySection() {
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Machinery & Infrastructure"
          title={<>Cells built for <span className="text-[var(--gold-deep)]">consistent output</span></>}
          subtitle="Modern CNC, precision assembly and testing infrastructure — engineered for OEM-grade throughput."
        />
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MACHINERY.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <article className="group relative h-full bg-white p-8 border border-border card-lift overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="h-14 w-14 grid place-items-center bg-[var(--ink)] text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors duration-500">
                  <HiOutlineCog6Tooth size={26} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[var(--ink)]">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">0{i + 1}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
