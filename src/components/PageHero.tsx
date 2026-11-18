import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: ReactNode; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[var(--ink)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <nav className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 flex gap-2">
            <Link to="/" className="hover:text-[var(--gold)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">{eyebrow}</span>
          </nav>
          <span className="eyebrow-dark"><span className="h-px w-8 bg-current opacity-60" />{eyebrow}</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">{title}</h1>
          {subtitle && <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
