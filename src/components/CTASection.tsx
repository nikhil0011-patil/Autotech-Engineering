import { Link } from "@tanstack/react-router";
import { HiArrowRight } from "react-icons/hi";
import { Reveal } from "./Reveal";

export function CTASection({
  eyebrow = "Ready to start?",
  title,
  subtitle,
  primary = { to: "/request-quote", label: "Request a Quote" },
  secondary = { to: "/contact", label: "Talk to Us" },
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden bg-[var(--ink)] text-white p-10 md:p-16 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.2),transparent_55%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] items-center">
              <div>
                <span className="eyebrow-dark"><span className="h-px w-8 bg-current opacity-60" />{eyebrow}</span>
                <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight">
                  {title ?? <>Engineer your next program with <span className="text-[var(--gold)]">AutoTech</span></>}
                </h2>
                {subtitle && <p className="mt-6 text-white/70 max-w-2xl leading-relaxed">{subtitle}</p>}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to={primary.to} className="btn-gold">{primary.label} <HiArrowRight /></Link>
                <Link to={secondary.to} className="btn-ghost-light">{secondary.label}</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
