import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SectionHeading } from "./SectionHeading";
import { FEATURED } from "@/data/site";

export function FeaturedProducts() {
  const [i, setI] = useState(0);
  const perView = 3;
  const max = FEATURED.length;
  const prev = () => setI((v) => (v - 1 + max) % max);
  const next = () => setI((v) => (v + 1) % max);

  const visible = Array.from({ length: perView }, (_, k) => FEATURED[(i + k) % max]);

  return (
    <section className="section-y bg-[var(--ink)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            dark
            eyebrow="Featured Products"
            title={<>Signature parts <span className="text-[var(--gold)]">in production</span></>}
          />
          <div className="flex gap-3">
            <button onClick={prev} aria-label="Previous" className="h-12 w-12 grid place-items-center border border-white/20 hover:bg-[var(--gold)] hover:text-[var(--ink)] hover:border-[var(--gold)] transition-colors">
              <HiChevronLeft size={22} />
            </button>
            <button onClick={next} aria-label="Next" className="h-12 w-12 grid place-items-center border border-white/20 hover:bg-[var(--gold)] hover:text-[var(--ink)] hover:border-[var(--gold)] transition-colors">
              <HiChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.part}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden hover:border-[var(--gold)]/60 transition-colors"
              >
                <div className="aspect-[5/4] overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <dl className="mt-5 space-y-2 text-sm">
                    <Row label="OEM No." value={p.oem} />
                    <Row label="Part No." value={p.part} />
                    <Row label="Vehicle" value={p.vehicle} />
                  </dl>
                  <button className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)] hover:text-white transition-colors">
                    View Details →
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
      <dt className="text-white/50 uppercase tracking-widest text-[10px]">{label}</dt>
      <dd className="text-white/90 font-medium">{value}</dd>
    </div>
  );
}
