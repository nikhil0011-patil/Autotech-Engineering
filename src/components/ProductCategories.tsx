import { Link } from "@tanstack/react-router";
import { HiArrowRight } from "react-icons/hi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PRODUCTS } from "@/data/site";

export function ProductCategories() {
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Product Categories"
            title={<>Engineered for every <span className="text-[var(--gold-deep)]">fluid line</span></>}
          />
          <Reveal>
            <Link to="/products" className="btn-outline-ink">View All <HiArrowRight /></Link>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="group relative bg-white border border-border overflow-hidden card-lift">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ink)]">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">0{i + 1} · Series</div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[var(--ink)]">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.short}</p>
                  <Link
                    to="/products"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-colors"
                  >
                    Explore <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
