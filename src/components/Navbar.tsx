import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, COMPANY } from "@/data/site";
import logo from "@/assets/autotech-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onDark = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-sm"
          : onDark
            ? "bg-transparent"
            : "bg-white border-b border-border"
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20 md:h-24"}`}>
        <Link to="/" className="flex items-center gap-3 group">
          
  <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="AutoTech Engineering"
    className="h-16 w-16 object-contain"
  />

  <div className="hidden sm:flex flex-col leading-tight">
    <span
      className={`text-sm font-black tracking-widest ${
        onDark ? "text-white" : "text-[var(--ink)]"
      }`}
    >
      AUTOTECH
    </span>

    <span
      className={`text-[10px] tracking-[0.25em] transition-colors duration-300 ${
        onDark ? "text-white/70" : "text-gray-600"
    }`}
    >
      ENGINEERING
    </span>
  </div>
</div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors group ${
                onDark ? "text-white/90 hover:text-white" : "text-[var(--ink)] hover:text-[var(--gold-deep)]"
              }`}
              activeProps={{ className: onDark ? "!text-[var(--gold)]" : "!text-[var(--gold-deep)]" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold">Request Quote</Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${onDark && !open ? "text-white" : "text-[var(--ink)]"}`}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="py-3 px-2 text-base font-medium text-[var(--ink)] border-b border-border/60"
                  activeProps={{ className: "!text-[var(--gold-deep)]" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-gold mt-4 w-full">Request Quote</Link>
              <div className="mt-4 text-xs text-muted-foreground">
                {COMPANY.phone} · {COMPANY.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
