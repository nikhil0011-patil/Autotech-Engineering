import { HiOutlineShieldCheck, HiOutlineBeaker, HiOutlineDocumentText, HiOutlineCog } from "react-icons/hi";
import { Reveal } from "./Reveal";
import qcImg from "@/assets/gallery-qc.jpg";

const items = [
  { icon: HiOutlineShieldCheck, title: "Quality Assurance", desc: "Multi-stage inspection with statistical process control." },
  { icon: HiOutlineBeaker, title: "Testing Equipment", desc: "Leak, burst and pressure test rigs calibrated to OEM standards." },
  { icon: HiOutlineDocumentText, title: "ISO Ready", desc: "Quality management systems aligned to IATF and ISO frameworks." },
  { icon: HiOutlineCog, title: "OEM Standards", desc: "Documented PPAP, APQP and control plans for every SKU." },
];

export function QualitySection() {
  return (
    <section className="relative section-y bg-[var(--ink)] text-white overflow-hidden">
      <img src={qcImg} alt="" aria-hidden width={1000} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/95 to-[var(--ink)]/70" />
      <div className="container-x relative grid gap-16 lg:grid-cols-2 items-center">
        <div>
          <span className="eyebrow-dark"><span className="h-px w-8 bg-current opacity-60" />Quality Assurance</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white tracking-tight gold-underline">
            Precision you can <span className="text-[var(--gold)]">measure</span>
          </h2>
          <p className="mt-10 text-white/70 leading-relaxed text-lg">
            Every AutoTech component is built to withstand the toughest automotive environments — validated by
            in-house testing, third-party audits and OEM approvals.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="p-7 bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-[var(--gold)]/60 transition-colors">
                <it.icon size={30} className="text-[var(--gold)]" />
                <h3 className="mt-5 text-lg font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
