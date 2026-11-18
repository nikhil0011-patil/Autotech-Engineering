import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProductsBrowser } from "@/components/ProductsBrowser";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — AutoTech Engineering" },
      { name: "description", content: "Explore our range: fuel pipe assemblies, coolant lines, brake booster pipes, clutch pipes, air brake coil hoses and urea lines." },
      { property: "og:title", content: "Products — AutoTech Engineering" },
      { property: "og:description", content: "Full catalog of automotive fluid transmission products." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>A complete range of <span className="text-[var(--gold)]">fluid transmission</span> products</>}
        subtitle="Six category families and 250+ active part numbers — engineered for OEMs, aftermarket and export customers."
      />
      <ProductsBrowser />
      <CTASection
        subtitle="Not seeing what you need? Share your drawing or OEM reference — we build to specification."
      />
    </>
  );
}
