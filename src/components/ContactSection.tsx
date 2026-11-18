
import { useState, type FormEvent } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiArrowRight,
} from "react-icons/hi";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/data/site";
import { submitQuote } from "@/services/api";

export function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Match the field names expected by the existing API service.
    data.set("person", String(data.get("name") ?? "").trim());
    data.set(
      "productCategory",
      String(data.get("product") ?? "").trim() || "General Inquiry"
    );

    setStatus("loading");

    try {
      const result = await submitQuote(data);

      if (!result.ok || !result.ref) {
        throw new Error("Quotation request was not confirmed.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Quotation submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section className="section-y bg-background">
      <div className="container-x grid gap-16 lg:grid-cols-5">
        <Reveal className="lg:col-span-2" dir="left">
          <span className="eyebrow">
            <span className="h-px w-8 bg-current opacity-60" />
            Get in Touch
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[var(--ink)] tracking-tight gold-underline">
            Let's build your next{" "}
            <span className="text-[var(--gold-deep)]">program</span>
          </h2>

          <p className="mt-10 text-muted-foreground leading-relaxed">
            Share your requirement — our engineering team will respond
            within one business day with a quotation and technical proposal.
          </p>

          <ul className="mt-10 space-y-6">
            <Info Icon={HiOutlineLocationMarker} label="Address" value={COMPANY.address} />
            <Info Icon={HiOutlinePhone} label="Phone" value={COMPANY.phone} />
            <Info Icon={HiOutlineMail} label="Email" value={COMPANY.email} />
            <Info Icon={HiOutlineClock} label="Business Hours" value={COMPANY.hours} />
          </ul>

          <div className="mt-10 aspect-[16/9] bg-muted border border-border overflow-hidden">
            <iframe
              title="AutoTech Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.65%2C18.65%2C73.80%2C18.80&layer=mapnik"
              className="h-full w-full grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" dir="right">
          <form
            onSubmit={onSubmit}
            className="bg-[var(--ink)] text-white p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl font-bold">Request a Quote</h3>
            <p className="text-sm text-white/60 mt-2">
              Fill in the form and we'll get back to you shortly.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field
                label="Product Interest"
                name="product"
                placeholder="Fuel pipe, coolant, urea line..."
                className="sm:col-span-2"
              />
              <TextArea
                label="Message"
                name="message"
                required
                className="sm:col-span-2"
              />
            </div>

            {status === "error" && (
              <p role="alert" className="mt-5 text-sm text-[var(--gold)]">
                Your request could not be submitted. Please try again.
                If the problem continues, contact us by phone or email.
              </p>
            )}

            {status === "success" && (
              <p role="status" className="mt-5 text-sm text-[var(--gold)]">
                Your request was submitted successfully! Our team will contact you.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold mt-8 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Request Sent ✓"
                  : "Send Request"}
              {status !== "loading" && <HiArrowRight />}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Info({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex gap-5">
      <div className="shrink-0 h-11 w-11 grid place-items-center bg-[var(--ink)] text-[var(--gold)]">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-[var(--ink)] font-medium leading-relaxed">
          {value}
        </div>
      </div>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="text-[11px] uppercase tracking-[0.25em] text-white/60">
        {label}{required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/20 focus:border-[var(--gold)] outline-none py-2 text-white placeholder:text-white/30 transition-colors"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  required,
  className,
}: {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="text-[11px] uppercase tracking-[0.25em] text-white/60">
        {label}{required && " *"}
      </span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="bg-transparent border-b border-white/20 focus:border-[var(--gold)] outline-none py-2 text-white resize-none transition-colors"
      />
    </label>
  );
}
