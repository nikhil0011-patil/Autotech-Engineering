import { HiOutlineFlag, HiOutlineEye, HiOutlineSparkles } from "react-icons/hi";
import aboutImg from "@/assets/about/about-factory.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Counter } from "./Counter";
import { STATS } from "@/data/site";

const pillars = [
  {
    icon: HiOutlineFlag,
    title: "Mission",
    body: "To manufacture world-class fluid transmission components that meet global OEM quality standards through innovation, precision engineering and continuous improvement."
  },
  {
    icon: HiOutlineEye,
    title: "Vision",
    body: "To become a globally recognized manufacturer of precision automotive fluid transmission solutions known for quality, reliability and long-term customer partnerships."
  },
  {
    icon: HiOutlineSparkles,
    title: "Why Choose AutoTech",
    body: "• OEM Quality Products\n• Precision Engineering\n• Advanced Manufacturing\n• Strict Quality Control\n• Timely Delivery\n• Export Ready Manufacturing"
  }
];

export function About({ compact = false }: { compact?: boolean }) {
  return (
    <section id="below-hero" className="section-y bg-background">
      <div className="container-x grid gap-16 lg:gap-24 lg:grid-cols-2 items-center">
        <Reveal dir="left" className="relative">
          <div className="absolute -inset-4 bg-[var(--gold)]/10 -z-10" />
          <img
            src={aboutImg}
            alt="Inside AutoTech Engineering factory"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full h-[520px] object-cover shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-[var(--ink)] text-white p-6 md:p-8 shadow-2xl max-w-[240px]">
            <div className="text-5xl font-black text-[var(--gold)] leading-none">10+</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-white/70">Years of engineering excellence</div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About AutoTech"
            title={
  <>
    Manufacturing Precision{" "}
    <span className="text-[var(--gold-deep)]">
      Automotive Fluid
    </span>
    <br />
    Transmission Components
  </>
}
            subtitle="AutoTech Engineering is a trusted manufacturer of precision automotive fluid transmission components. We specialize in Fuel Pipe Assemblies, Coolant Pipes, Brake Booster Pipes, Clutch Pipes, Air Brake Coil Hoses, Urea / AdBlue Lines, Leak Off Pipes, Compressor Pipes, Lubricating Pipes and High Pressure Hoses. Our commitment to quality, precision engineering and customer satisfaction makes us a reliable partner for OEMs, Tier-1 suppliers and export markets."
          />

          {!compact && (
            <div className="mt-10 space-y-6">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="flex gap-5 items-start">
                    <div className="shrink-0 h-12 w-12 grid place-items-center bg-[var(--ink)] text-[var(--gold)]">
                      <p.icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--ink)]">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container-x mt-24">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`p-8 md:p-10 text-center ${i < STATS.length - 1 ? "md:border-r border-border" : ""} ${i < 2 ? "border-b md:border-b-0 border-border" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-black text-[var(--ink)]">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
