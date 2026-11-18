import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { HiOutlineSearch, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/site";

const PAGE_SIZE = 6;

export function ProductsBrowser() {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return PRODUCTS.filter((p) => {
      const catOk = category === "All" || p.category === category;
      const qOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.oem.toLowerCase().includes(q) ||
        p.part.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [category, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="search"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by product, OEM or part number…"
              className="w-full border border-border bg-white pl-11 pr-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...PRODUCT_CATEGORIES] as const).map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  onClick={() => { setCategory(c); setPage(1); }}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                    active
                      ? "bg-[var(--ink)] text-[var(--gold)] border-[var(--ink)]"
                      : "bg-white text-muted-foreground border-border hover:border-[var(--ink)] hover:text-[var(--ink)]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        
<div className="mt-6 flex flex-col gap-4 border border-border bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
  <div>
    <h2 className="text-base font-bold text-[var(--ink)]">
      Product Catalogues
    </h2>
    <p className="mt-1 text-sm text-muted-foreground">
      Browse our complete product range and technical references.
    </p>
  </div>

  <div className="flex flex-wrap gap-3">
    <a
      href="/catalogues/autotech-product-catalogue.pdf"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center border border-[var(--ink)] px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
    >
      View Catalogue
    </a>

    <a
      href="/catalogues/autotech-product-catalogue.pdf"
      download
      className="inline-flex items-center justify-center bg-[var(--gold)] px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--ink)] hover:opacity-90 transition-opacity"
    >
      Download PDF
    </a>
  </div>
</div>

<div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
  {filtered.length} product{filtered.length === 1 ? "" : "s"} found
</div>


        {paged.length === 0 ? (
          <div className="mt-20 text-center text-muted-foreground">
            <p>No products match your search.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {paged.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <article className="group relative bg-white border border-border overflow-hidden card-lift h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ink)]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">{p.category}</div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[var(--ink)]">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.short}</p>
                    <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] uppercase tracking-widest text-muted-foreground/80">
                      <div><span className="text-[var(--ink)] font-semibold">OEM</span> {p.oem}</div>
                      <div><span className="text-[var(--ink)] font-semibold">Part</span> {p.part}</div>
                    </div>
                    <Link
                      to="/products/$id"
                      params={{ id: p.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[var(--ink)] group-hover:text-[var(--gold-deep)] transition-colors"
                    >
                      View Details <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </motion.div>
        )}

        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-xs uppercase tracking-widest border border-border bg-white disabled:opacity-40 hover:border-[var(--ink)] transition-colors"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-10 w-10 text-sm border transition-colors ${
                  currentPage === i + 1
                    ? "bg-[var(--ink)] text-[var(--gold)] border-[var(--ink)]"
                    : "bg-white border-border text-muted-foreground hover:border-[var(--ink)] hover:text-[var(--ink)]"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-xs uppercase tracking-widest border border-border bg-white disabled:opacity-40 hover:border-[var(--ink)] transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
