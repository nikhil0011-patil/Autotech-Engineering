import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineDocumentDownload, HiCheck } from "react-icons/hi";
import { getProductById } from "@/services/api";
import { PRODUCTS, type Product } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/products/$id")({
  loader: async ({ params }) => {
    const product = await getProductById(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.product?.title ?? "Product";
    return {
      meta: [
        { title: `${title} — AutoTech Engineering` },
        { name: "description", content: loaderData?.product?.short ?? "AutoTech Engineering product details." },
        { property: "og:title", content: `${title} — AutoTech Engineering` },
        { property: "og:description", content: loaderData?.product?.short ?? "" },
        ...(loaderData?.product?.image ? [{ property: "og:image", content: loaderData.product.image }] : []),
      ],
    };
  },
  component: ProductDetailPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[var(--ink)]">Product not found</h1>
        <Link to="/products" className="btn-gold mt-6 inline-flex">Browse Products <HiArrowRight /></Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <p className="text-muted-foreground">Failed to load product.</p>
    </div>
  ),
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  useEffect(() => setActive(0), [product.slug]);

  const specs = [
    { k: "OEM Number", v: product.oem },
    { k: "Part Number", v: product.part },
    { k: "Category", v: product.category },
    { k: "Material", v: product.material },
    { k: "Diameter", v: product.diameter },
    { k: "Pressure Rating", v: product.pressure },
    { k: "Temperature Range", v: product.temperature },
  ];

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 bg-[var(--ink)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="container-x relative">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: product.title },
            ]}
          />
          <div className="grid gap-12 lg:grid-cols-2 items-start mt-4">
            <div>
              <motion.img
                key={product.gallery[active]}
                src={product.gallery[active]}
                alt={product.title}
                initial={{ opacity: 0.4, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full aspect-[4/3] object-cover shadow-2xl"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={g + i}
                    onClick={() => setActive(i)}
                    className={`aspect-[4/3] overflow-hidden border transition-colors ${
                      i === active ? "border-[var(--gold)]" : "border-white/10 hover:border-white/40"
                    }`}
                  >
                    <img src={g} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow-dark"><span className="h-px w-8 bg-current opacity-60" />{product.category}</span>
              <h1 className="mt-6 text-3xl md:text-5xl font-black tracking-tight leading-[1.1]">{product.title}</h1>
              <p className="mt-6 text-white/70 leading-relaxed text-lg">{product.short}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="border border-white/10 p-4">
                  <div className="text-[11px] uppercase tracking-widest text-white/50">OEM No.</div>
                  <div className="mt-1 text-[var(--gold)] font-bold">{product.oem}</div>
                </div>
                <div className="border border-white/10 p-4">
                  <div className="text-[11px] uppercase tracking-widest text-white/50">Part No.</div>
                  <div className="mt-1 text-[var(--gold)] font-bold">{product.part}</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/request-quote" className="btn-gold">Request Quote <HiArrowRight /></Link>
                <a href="#downloads" className="btn-ghost-light">
                  <HiOutlineDocumentDownload /> Downloads
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal dir="left">
            <SectionHeading eyebrow="Specifications" title={<>Technical <span className="text-[var(--gold-deep)]">datasheet</span></>} />
            <table className="mt-10 w-full border border-border">
              <tbody>
                {specs.map((s, i) => (
                  <tr key={s.k} className={i % 2 === 0 ? "bg-muted/40" : "bg-white"}>
                    <th className="text-left px-6 py-4 text-xs uppercase tracking-widest text-muted-foreground w-1/2">{s.k}</th>
                    <td className="px-6 py-4 text-sm text-[var(--ink)] font-semibold">{s.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal dir="right">
            <SectionHeading eyebrow="Vehicle Applications" title={<>Where it <span className="text-[var(--gold-deep)]">performs</span></>} />
            <ul className="mt-10 space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-3 p-4 bg-white border border-border">
                  <HiCheck className="text-[var(--gold-deep)] mt-0.5 shrink-0" size={20} />
                  <span className="text-sm text-[var(--ink)]">{a}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 eyebrow"><span className="h-px w-8 bg-current opacity-60" />Key Features</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <HiCheck className="text-[var(--gold-deep)] mt-0.5 shrink-0" size={20} />
                  <span className="text-sm text-muted-foreground leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="downloads" className="section-y bg-muted/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Downloads"
            title={<>Technical <span className="text-[var(--gold-deep)]">documents</span></>}
            subtitle="Datasheet, drawing and compliance certificates available on request."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["Product Datasheet", "2D / 3D Drawings", "Compliance Certificate"].map((d) => (
              <Reveal key={d}>
                <div className="flex items-center gap-4 bg-white p-6 border border-border card-lift">
                  <div className="h-12 w-12 grid place-items-center bg-[var(--ink)] text-[var(--gold)]">
                    <HiOutlineDocumentDownload size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[var(--ink)]">{d}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">PDF · On request</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-x">
          <SectionHeading center eyebrow="Related Products" title={<>You might also <span className="text-[var(--gold-deep)]">need</span></>} />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to="/products/$id" params={{ id: p.slug }} className="group block bg-white border border-border overflow-hidden card-lift">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ink)]">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--ink)]">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to spec this into your program?"
        subtitle="Send a drawing or OEM reference — our engineering team responds within one business day."
      />
    </>
  );
}
