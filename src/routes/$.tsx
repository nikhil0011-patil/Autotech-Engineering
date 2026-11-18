import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineSearch } from "react-icons/hi";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page not found — AutoTech Engineering" },
      { name: "description", content: "The page you're looking for doesn't exist." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <section className="relative min-h-screen grid place-items-center bg-[var(--ink)] text-white overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-x relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative inline-block"
        >
          <div className="text-[9rem] md:text-[14rem] font-black leading-none tracking-tighter bg-gradient-to-b from-[var(--gold)] via-[var(--gold-deep)] to-[var(--gold)]/30 bg-clip-text text-transparent">
            404
          </div>
          <motion.div
            className="absolute inset-x-0 top-1/2 h-px bg-[var(--gold)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="eyebrow-dark"><span className="h-px w-8 bg-current opacity-60" />Line disconnected</span>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">
            This route is off the <span className="text-[var(--gold)]">assembly line</span>
          </h1>
          <p className="mt-6 text-white/70 max-w-xl mx-auto leading-relaxed">
            The page you're looking for was moved, renamed or never existed. Head back to the homepage or explore our product catalog.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-gold">Back to Home <HiArrowRight /></Link>
            <Link to="/products" className="btn-ghost-light"><HiOutlineSearch /> Search Products</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
