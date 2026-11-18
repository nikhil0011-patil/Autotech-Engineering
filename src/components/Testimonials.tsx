import { HiOutlineChatAlt2 } from "react-icons/hi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <section className="section-y bg-muted/40">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Client Testimonials"
          title={<>Trusted by <span className="text-[var(--gold-deep)]">global partners</span></>}
        />
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative h-full bg-white border border-border p-9 card-lift">
                <HiOutlineChatAlt2 className="text-[var(--gold)]" size={36} />
                <blockquote className="mt-6 text-base leading-relaxed text-[var(--ink)]">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-bold text-[var(--ink)]">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.company}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
