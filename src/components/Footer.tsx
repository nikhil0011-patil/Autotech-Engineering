
import { Link } from "@tanstack/react-router";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";
import { COMPANY, NAV_LINKS, PRODUCTS } from "@/data/site";
import companyLogo from "@/assets/autotech-logo.png";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-patil2707",
    Icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19oYi16AXF/",
    Icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/autotechengineering_07",
    Icon: FaInstagram,
  },
];

const MAP_URL =
  "https://maps.app.goo.gl/8S81sGSR1ZAcGE8u6?g_st=aw";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/80 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company logo and description */}
          <div>
            <Link
              to="/"
              aria-label="AutoTech Engineering home"
              className="inline-flex items-center gap-3"
            >
              <div className="h-12 w-12 shrink-0 rounded-sm bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={companyLogo}
                  alt="AutoTech Engineering logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div className="text-white font-black tracking-widest">
                  AUTOTECH
                </div>
                <div className="text-[10px] tracking-[0.25em] text-white/60">
                  ENGINEERING
                </div>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              AutoTech Engineering is an ISO 9001:2015 certified
              manufacturer specializing in automotive fluid transmission
              products, fuel pipe assemblies, coolant pipes, brake booster
              pipes, clutch pipes, and industrial tubing solutions.
            </p>

            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit AutoTech Engineering on ${label}`}
                  title={label}
                  className="h-9 w-9 grid place-items-center rounded-sm border border-white/15 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="eyebrow-dark mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="eyebrow-dark mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    to="/products"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Updated contact details */}
          <div>
            <h4 className="eyebrow-dark mb-6">Contact</h4>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <HiOutlineLocationMarker
                  className="text-[var(--gold)] shrink-0 mt-0.5"
                  size={18}
                />
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  {COMPANY.address}
                  <span className="block mt-1 text-xs text-white/50">
                    Get directions ↗
                  </span>
                </a>
              </li>

              <li className="flex gap-3">
                <HiOutlinePhone
                  className="text-[var(--gold)] shrink-0 mt-0.5"
                  size={18}
                />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>

              <li className="flex gap-3">
                <HiOutlineMail
                  className="text-[var(--gold)] shrink-0 mt-0.5"
                  size={18}
                />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all hover:text-[var(--gold)] transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>

              <li className="flex gap-3">
                <HiOutlineClock
                  className="text-[var(--gold)] shrink-0 mt-0.5"
                  size={18}
                />
                <span>Mon–Sat · 09:00–19:00 IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </div>

          <div className="tracking-widest uppercase">
            ISO Ready · OEM Approved · Made in India
          </div>
        </div>
      </div>
    </footer>
  );
}
