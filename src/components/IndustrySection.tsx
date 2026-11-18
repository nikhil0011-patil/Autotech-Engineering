import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { INDUSTRIES } from "@/data/site";
import { HiOutlineTruck, HiOutlineHome, HiOutlineGlobeAlt, HiOutlineCog, HiOutlineOfficeBuilding } from "react-icons/hi";

const icons = [HiOutlineTruck, HiOutlineHome, HiOutlineGlobeAlt, HiOutlineCog, HiOutlineOfficeBuilding];

export function IndustrySection() {
  return (
    <section className="section-y bg-muted/40">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Industries We Serve"
          title={<>Powering movement <span className="text-[var(--gold-deep)]">across sectors</span></>}
        />
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {INDUSTRIES.map((ind, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={ind.title} delay={i * 0.08}>
                <article className="group relative h-full bg-white border border-border p-8 card-lift overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/10 transition-colors duration-500" />
                  <Icon size={36} className="text-[var(--gold-deep)]" />
                  <h3 className="mt-6 text-base font-bold text-[var(--ink)] leading-snug">{ind.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
