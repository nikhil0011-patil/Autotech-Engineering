import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ManufacturingProcess } from "@/components/ManufacturingProcess";
import { MachinerySection } from "@/components/MachinerySection";
import { QualitySection } from "@/components/QualitySection";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — AutoTech Engineering" },
      { name: "description", content: "Modern manufacturing infrastructure with CNC bending, hydraulic testing and QA facilities." },
      { property: "og:title", content: "Infrastructure — AutoTech Engineering" },
      { property: "og:description", content: "Advanced manufacturing, testing and quality infrastructure." },
    ],
  }),
  component: InfrastructurePage,
});

function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title={<>Built to <span className="text-[var(--gold)]">manufacture at scale</span></>}
        subtitle="Modern CNC cells, precision testing rigs and OEM-grade quality systems — the backbone of our consistent output."
      />
      <MachinerySection />
      <ManufacturingProcess />
      <QualitySection />
      <CTASection />
    </>
  );
}
