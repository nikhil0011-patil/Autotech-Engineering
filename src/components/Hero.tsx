import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import hero from "@/assets/hero/hero-factory.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--ink)]">
      <motion.img
        src={hero}
        alt="AutoTech Engineering factory floor"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.18),transparent_55%)]" />

      <div className="relative z-10 container-x flex min-h-screen flex-col justify-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-3 text-[var(--gold)] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
            <span className="h-px w-10 bg-[var(--gold)]" />
            AutoTech Engineering
          </span>

          <h1 className="mt-8 font-black leading-[0.95] tracking-tight">
  <span className="block text-white text-5xl lg:text-7xl">OEM Automotive</span>

  <span className="block text-[var(--gold)] text-4xl lg:text-6xl">
    Fluid Transmission
  </span>

  <span className="block text-white text-5xl lg:text-7xl">Solutions</span>
</h1>

          <p className="mt-8 max-w-2xl text-base md:text-xl text-white/75 leading-relaxed">
            Manufacturer of high-quality fuel pipe assemblies, coolant pipes, brake booster pipes, clutch pipes, and fluid transmission components engineered for OEMs worldwide.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/products" className="btn-gold">
              Explore Products <HiArrowRight />
            </Link>
            <Link to="/contact" className="btn-ghost-light">Contact Us</Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["2016", "Established"],
              ["ISO", "9001:2015 Certified"],
              ["6600+", "Sq. Ft. Facility"],
              ["2", "Manufacturing Plants"],
            ].map(([v, l]) => (
              <div key={l} className="border-l border-white/15 pl-4">
                <div className="text-2xl md:text-3xl font-black text-[var(--gold)]">{v}</div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#below-hero"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-[var(--gold)] transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <HiChevronDown size={22} />
      </motion.a>
    </section>
  );
}
