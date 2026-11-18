import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineLightBulb } from "react-icons/hi";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — AutoTech Engineering" },
      { name: "description", content: "Submit an RFQ to AutoTech Engineering. Share drawings, OEM numbers and quantities — our team responds within one business day." },
      { property: "og:title", content: "Request a Quote — AutoTech Engineering" },
      { property: "og:description", content: "B2B quotation request for fluid transmission products." },
    ],
  }),
  component: RequestQuotePage,
});

const benefits = [
  { icon: HiOutlineClock, title: "24-Hour Response", desc: "Our engineering team responds within one business day." },
  { icon: HiOutlineShieldCheck, title: "OEM-Grade Quality", desc: "IATF 16949 certified with full PPAP documentation." },
  { icon: HiOutlineLightBulb, title: "Engineering Support", desc: "Design assistance and prototyping on complex programs." },
];

function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request Quote"
        title={<>Get a <span className="text-[var(--gold)]">precision quotation</span></>}
        subtitle="Share your requirement, drawing or OEM reference. Our engineering team responds within one business day with a technical proposal and pricing."
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-16 lg:grid-cols-5">
          <Reveal dir="left" className="lg:col-span-2">
            <span className="eyebrow"><span className="h-px w-8 bg-current opacity-60" />Why RFQ AutoTech</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[var(--ink)] tracking-tight gold-underline">
              Precision proposals, <span className="text-[var(--gold-deep)]">every time</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              We work with OEMs, tier-1 suppliers, exporters and distributors on both prototype and volume programs.
            </p>
            <ul className="mt-10 space-y-6">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-5 items-start">
                  <div className="shrink-0 h-12 w-12 grid place-items-center bg-[var(--ink)] text-[var(--gold)]">
                    <b.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--ink)]">{b.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal dir="right" className="lg:col-span-3">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
