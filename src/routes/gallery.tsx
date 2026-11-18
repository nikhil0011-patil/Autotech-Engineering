import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FilterableGallery } from "@/components/FilterableGallery";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AutoTech Engineering" },
      { name: "description", content: "A visual tour inside the AutoTech Engineering manufacturing facility." },
      { property: "og:title", content: "Factory Gallery — AutoTech Engineering" },
      { property: "og:description", content: "See our factory, machines, products and packaging up close." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
  eyebrow="FACTORY TOUR"
  title={
    <>
      Take a Look Inside
      <br />
      <span className="text-[var(--gold)]">AutoTech Engineering </span>
      
    </>
  }
  subtitle="Explore our modern manufacturing facility, advanced machinery, quality inspection process, packaging area, and warehouse that ensure precision and reliability in every product."
/>
      <FilterableGallery />
      <CTASection />
    </>
  );
}
