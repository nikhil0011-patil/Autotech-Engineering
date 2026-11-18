import { createFileRoute } from "@tanstack/react-router";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { Reveal } from "@/components/Reveal";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AutoTech Engineering" },
      { name: "description", content: "Get in touch with AutoTech Engineering for quotations, technical proposals and OEM programs." },
      { property: "og:title", content: "Contact — AutoTech Engineering" },
      { property: "og:description", content: "Talk to our engineering and sales team." },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaFacebook, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start the <span className="text-[var(--gold)]">conversation</span></>}
        subtitle="Reach out for quotations, technical proposals, sampling and long-term supply programs."
      />

      <section className="section-y bg-muted/50">
        <div className="container-x grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="bg-white p-8 border border-border card-lift h-full">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-deep)] font-bold">Business Hours</div>
              <p className="mt-4 text-lg font-bold text-[var(--ink)]">Mon – Sat</p>
              <p className="mt-1 text-sm text-muted-foreground">{COMPANY.hours}</p>
              <p className="mt-4 text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-[var(--ink)] text-white p-8 h-full">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold)] font-bold">Company Profile</div>
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                Download our full company profile — capabilities, certifications and product catalog.
              </p>
              <button className="btn-gold mt-6 w-full justify-center">
                <HiOutlineDocumentDownload /> Download PDF
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-white p-8 border border-border card-lift h-full">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-deep)] font-bold">Follow Us</div>
              <p className="mt-4 text-sm text-muted-foreground">Stay up to date with our latest programs and announcements.</p>
              <div className="mt-6 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="h-11 w-11 grid place-items-center bg-[var(--ink)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
