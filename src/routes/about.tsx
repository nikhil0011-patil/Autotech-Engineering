import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { Certifications } from "@/components/Certifications";
import { ExportMarkets } from "@/components/ExportMarkets";
import { TeamSection } from "@/components/TeamSection";
import { QualitySection } from "@/components/QualitySection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AutoTech Engineering" },
      { name: "description", content: "Learn about AutoTech Engineering: a specialist manufacturer of automotive fluid transmission products for global OEMs." },
      { property: "og:title", content: "About — AutoTech Engineering" },
      { property: "og:description", content: "18+ years of precision manufacturing for the world's automotive OEMs." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Precision engineering, <span className="text-[var(--gold)]">since day one</span></>}
        subtitle="AutoTech Engineering has spent nearly two decades perfecting the manufacture of fluid transmission products for global automotive OEMs."
      />
      <About />
      <HistoryTimeline />
      <WhyChooseUs />
      <QualitySection />
      <Certifications />
      <ExportMarkets />
      <TeamSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
