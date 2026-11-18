import { HiOutlineCheckBadge, HiOutlineSparkles, HiOutlineCog6Tooth, HiOutlineTruck, HiOutlineBuildingOffice2, HiOutlineUserGroup } from "react-icons/hi2";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: HiOutlineCheckBadge, title: "OEM Compatible", desc: "Every part validated against original equipment specifications." },
  { icon: HiOutlineSparkles, title: "High Quality", desc: "Zero-defect commitment with in-line inspection at every stage." },
  { icon: HiOutlineCog6Tooth, title: "Precision Engineering", desc: "Tight tolerances on CNC and specialty forming equipment." },
  { icon: HiOutlineTruck, title: "Fast Delivery", desc: "On-time-in-full performance for domestic and export orders." },
  { icon: HiOutlineBuildingOffice2, title: "Advanced Manufacturing", desc: "Modern cells for bending, cutting, crimping and testing." },
  { icon: HiOutlineUserGroup, title: "Experienced Team", desc: "Automotive engineers with decades of tier-1 experience." },
];

export function WhyChooseUs() {
  return (
    <section className="section-y bg-muted/50">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Why Choose Us"
          title={<>Built on <span className="text-[var(--gold-deep)]">precision</span>, backed by trust</>}
        />
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <article className="group relative h-full bg-white p-8 border border-border card-lift overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="h-14 w-14 grid place-items-center bg-[var(--ink)] text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors duration-500">
                  <it.icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[var(--ink)]">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">0{i + 1}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
