import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

import coil from "@/assets/gallery/Coil-forming-workstation.jpg";
import exterior1 from "@/assets/gallery/factory-exterior.jpg";
import exterior2 from "@/assets/gallery/factory-exterior-2.jpg";
import exterior3 from "@/assets/gallery/factory-exterior-3.jpg";

import board from "@/assets/gallery/Industrial-assembly-board.jpg";
import workspace from "@/assets/gallery/Industrial-factory-workspace.jpg";
import workstation from "@/assets/gallery/Industrial-factory-workstation.jpg";
import inspection from "@/assets/gallery/Industrial-inspection-area.jpg";
import packing from "@/assets/gallery/industrial-packing-station.jpg";
import workshop from "@/assets/gallery/Industrial-workshop.jpg";
import storage from "@/assets/gallery/Organized-industrial-storage.jpg";
import rejection1 from "@/assets/gallery/rejection-area1.jpg";
import rejection2 from "@/assets/gallery/rejection-area2.jpg";
import semi from "@/assets/gallery/semi-automaic-machine.jpg";
import tube from "@/assets/gallery/tube-sizing-station.jpg";


  const images = [
  {
    src: workspace,
    alt: "Factory Assembly Line",
    span: "row-span-2",
  },
  {
    src: workstation,
    alt: "Manufacturing Workstation",
    span: "",
  },
  {
    src: inspection,
    alt: "Final Inspection Area",
    span: "",
  },
  {
    src: storage,
    alt: "Industrial Storage",
    span: "row-span-2",
  },
  {
    src: tube,
    alt: "Tube Sizing Station",
    span: "",
  },
  {
    src: coil,
    alt: "Coil Forming Workstation",
    span: "",
  },
  {
    src: semi,
    alt: "Semi Automatic Assembly Machine",
    span: "",
  },
  {
    src: packing,
    alt: "Packing Station",
    span: "",
  },
  {
    src: board,
    alt: "Assembly Information Board",
    span: "",
  },
  {
    src: rejection1,
    alt: "Rejection Area",
    span: "",
  },
  {
    src: rejection2,
    alt: "Segregation Area",
    span: "",
  },
  {
    src: workshop,
    alt: "Industrial Workshop",
    span: "",
  },
  {
    src: exterior1,
    alt: "Factory Exterior",
    span: "",
  },
  {
    src: exterior2,
    alt: "Factory Exterior Side",
    span: "",
  },
  {
    src: exterior3,
    alt: "Factory Exterior Rear",
    span: "",
  },
];


export function Gallery({ title = true }: { title?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-y bg-background">
      <div className="container-x">
        {title && (
          <SectionHeading
  center
  eyebrow="FACTORY TOUR"
  title={
    <>
      Take a Look Inside{" "}
      <span className="text-[var(--gold-deep)]">
        AutoTech Engineering
      </span>
  </>
}
subtitle="Explore our modern manufacturing facility, advanced machinery, quality inspection processes, and well-organized infrastructure that power our OEM automotive fluid transmission solutions."
          />
        )}

        <div className={`${title ? "mt-20" : ""} grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4`}>
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.05} dir="zoom" className={img.span}>
              <button
                onClick={() => setActive(i)}
                className="group relative w-full h-full overflow-hidden bg-[var(--ink)]"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/40 transition-colors duration-500 grid place-items-center">
                  <span className="opacity-0 group-hover:opacity-100 text-[var(--gold)] text-xs uppercase tracking-[0.3em] transition-opacity duration-500">View</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm grid place-items-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="absolute top-6 right-6 text-white/80 hover:text-[var(--gold)]" onClick={() => setActive(null)}>
              <HiX size={32} />
            </button>
            <motion.img
              key={active}
              src={images[active].src}
              alt={images[active].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-[92vw] max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
