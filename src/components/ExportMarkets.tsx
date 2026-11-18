import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EXPORT_MARKETS } from "@/data/site";

export function ExportMarkets() {
  return (
    <section className="section-y bg-[var(--ink)] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.15),transparent_55%)]" />
      <div className="container-x relative">
        <SectionHeading
          center
          dark
          eyebrow="Global Reach"
          title={<>Shipping across <span className="text-[var(--gold)]">30+ countries</span></>}
          subtitle="From tier-1 OEMs in Europe to distributors across the Middle East, Asia-Pacific and the Americas."
        />
        <div className="mt-20 flex flex-wrap justify-center gap-3">
          {EXPORT_MARKETS.map((m, i) => (
            <Reveal key={m} delay={i * 0.03} dir="zoom">
              <div className="flex items-center gap-2 border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/80 hover:border-[var(--gold)]/60 hover:text-[var(--gold)] transition-colors">
                <HiOutlineGlobeAlt size={16} className="text-[var(--gold)]" />
                {m}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
