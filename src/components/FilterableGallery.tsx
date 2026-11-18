import { useState } from "react";
import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Reveal } from "./Reveal";

import img1 from "@/assets/gallery/factory-exterior.jpg";
import img2 from "@/assets/gallery/factory-exterior-2.jpg";
import img3 from "@/assets/gallery/factory-exterior-3.jpg";
import img4 from "@/assets/gallery/Industrial-factory-workspace.jpg";
import img5 from "@/assets/gallery/Industrial-factory-workstation.jpg";
import img6 from "@/assets/gallery/Industrial-inspection-area.jpg";
import img7 from "@/assets/gallery/Industrial-packing-station.jpg";
import img8 from "@/assets/gallery/Industrial-workshop.jpg";
import img9 from "@/assets/gallery/Organized-industrial-storage.jpg";
import img10 from "@/assets/gallery/Coil-forming-workstation.jpg";
import img11 from "@/assets/gallery/rejection-area1.jpg";
import img12 from "@/assets/gallery/rejection-area2.jpg";
import img13 from "@/assets/gallery/semi-automaic-machine.jpg";
import img14 from "@/assets/gallery/tube-sizing-station.jpg";

type Tag = "All" | "Factory" | "Machines" | "Products" | "Team" | "Packaging" | "Quality Inspection";

const images: { src: string; alt: string; tag: Exclude<Tag, "All">; span?: string }[] = [
  
  // ================= FACTORY =================
  { src: img1, alt: "Factory Exterior", tag: "Factory", span: "row-span-2" },
  { src: img2, alt: "Factory Front", tag: "Factory", span: "" },
  { src: img3, alt: "Factory Side", tag: "Factory", span: "" },
  { src: img8, alt: "Production Workshop", tag: "Factory", span: "" },
  { src: img9, alt: "Warehouse Storage", tag: "Factory", span: "row-span-2" },

  // ================= MACHINES =================
  { src: img4, alt: "Industrial Production Area", tag: "Machines", span: "row-span-2" },
  { src: img5, alt: "Assembly Line", tag: "Machines", span: "" },
  { src: img10, alt: "Coil Forming Workstation", tag: "Machines", span: "" },
  { src: img13, alt: "Semi Automatic Assembly Machine", tag: "Machines", span: "" },
  { src: img14, alt: "Tube Sizing Station", tag: "Machines", span: "" },

  // ================= QUALITY =================
  { src: img6, alt: "Final Inspection Area", tag: "Quality Inspection", span: "" },
  { src: img11, alt: "Rejection Area", tag: "Quality Inspection", span: "" },
  { src: img12, alt: "Segregation Area", tag: "Quality Inspection", span: "" },

  // ================= PACKAGING =================
  { src: img7, alt: "Packing Area", tag: "Packaging", span: "" },

];


const filters: Tag[] = ["All",
  "Factory",
  "Machines",
  "Packaging",
  "Quality Inspection",];

export function FilterableGallery() {
  const [tag, setTag] = useState<Tag>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (tag === "All" ? images : images.filter((i) => i.tag === tag)),
    [tag],
  );

  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => {
            const active = f === tag;
            return (
              <button
                key={f}
                onClick={() => setTag(f)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                  active
                    ? "bg-[var(--ink)] text-[var(--gold)] border-[var(--ink)]"
                    : "bg-white text-muted-foreground border-border hover:border-[var(--ink)] hover:text-[var(--ink)]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4"
        >
          {filtered.map((img, i) => (
            <Reveal key={`${img.src}-${tag}`} delay={i * 0.04} dir="zoom" className={img.span ?? ""}>
              <button
                onClick={() => setActive(i)}
                className="group relative w-full h-full overflow-hidden bg-[var(--ink)]"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/50 transition-colors duration-500 grid place-items-center">
                  <span className="opacity-0 group-hover:opacity-100 text-[var(--gold)] text-xs uppercase tracking-[0.3em] transition-opacity duration-500">
                    {img.tag}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null && filtered[active] && (
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
              src={filtered[active].src}
              alt={filtered[active].alt}
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
