import { HiOutlineShieldCheck } from "react-icons/hi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CERTIFICATIONS } from "@/data/site";

export function Certifications() {
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Certifications"
          title={<>Standards that <span className="text-[var(--gold-deep)]">back our promise</span></>}
          subtitle="Our systems and products are certified against global automotive and environmental frameworks."
        />
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.05}>
              <div className="group relative flex items-center gap-5 bg-white p-7 border border-border card-lift">
                <div className="h-14 w-14 shrink-0 grid place-items-center bg-[var(--ink)] text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors duration-500">
                  <HiOutlineShieldCheck size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--ink)]">{c.code}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
