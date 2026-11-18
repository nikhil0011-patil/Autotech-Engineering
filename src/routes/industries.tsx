import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { IndustrySection } from "@/components/IndustrySection";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — AutoTech Engineering" },
      { name: "description", content: "Serving commercial vehicles, passenger cars, agricultural, industrial equipment and global OEM manufacturers." },
      { property: "og:title", content: "Industries We Serve — AutoTech Engineering" },
      { property: "og:description", content: "Precision components across five automotive and industrial segments." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Powering <span className="text-[var(--gold)]">every kind</span> of movement</>}
        subtitle="From commercial fleets and passenger vehicles to agriculture, construction and tier-1 OEM supply — we build for the demands of every segment."
      />
      <IndustrySection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
