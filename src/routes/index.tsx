import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProductCategories } from "@/components/ProductCategories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { IndustrySection } from "@/components/IndustrySection";
import { ManufacturingProcess } from "@/components/ManufacturingProcess";
import { QualitySection } from "@/components/QualitySection";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <ProductCategories />
      <FeaturedProducts />
      <IndustrySection />
      <ManufacturingProcess />
      <QualitySection />
      <Gallery />
      <Testimonials />
      <ContactSection />
    </>
  );
}
