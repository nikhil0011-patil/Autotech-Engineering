import { useState, type FormEvent, type ChangeEvent } from "react";
import { HiOutlineUpload, HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { Reveal } from "./Reveal";
import { PRODUCT_CATEGORIES } from "@/data/site";
import { submitQuote } from "@/services/api";

const FIELD =
  "w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/20 transition-colors";
const LABEL = "text-xs uppercase tracking-[0.25em] text-white/60 mb-2 block";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ref, setRef] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const required = ["company", "person", "email", "phone", "country", "productCategory", "quantity"];
    for (const key of required) {
      const v = String(data.get(key) ?? "").trim();
      if (!v) errs[key] = "Required";
    }
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    return errs;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    try {
      const res = await submitQuote(data);
      setRef(res.ref);
      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setStatus("error");
    }
  };

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name ?? "");
  };

  if (status === "success") {
    return (
      <Reveal>
        <div className="bg-[var(--ink)] text-white p-10 md:p-16 shadow-2xl text-center">
          <HiCheckCircle size={64} className="mx-auto text-[var(--gold)]" />
          <h3 className="mt-6 text-2xl md:text-3xl font-bold">Quotation request received</h3>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">
            Reference <span className="text-[var(--gold)] font-semibold">{ref}</span>. Our engineering team will
            respond within one business day with a technical proposal and pricing.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="btn-ghost-light mt-8"
          >
            Submit another request
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-[var(--ink)] text-white p-8 md:p-12 shadow-2xl">
      <h3 className="text-2xl font-bold">B2B Quotation Request</h3>
      <p className="mt-2 text-sm text-white/60">Fields marked as required must be completed.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Company Name *" name="company" errors={errors} />
        <Field label="Contact Person *" name="person" errors={errors} />
        <Field label="Email *" name="email" type="email" errors={errors} />
        <Field label="Phone *" name="phone" errors={errors} />
        <Field label="Country *" name="country" errors={errors} />
        <Field label="Industry" name="industry" errors={errors} />

        <div>
          <label className={LABEL}>Product Category *</label>
          <select name="productCategory" defaultValue="" className={FIELD}>
            <option value="" disabled>Select category…</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c} className="text-black">{c}</option>
            ))}
          </select>
          {errors.productCategory && <p className="mt-1 text-[11px] text-[var(--gold)]">{errors.productCategory}</p>}
        </div>

        <Field label="OEM Number" name="oem" errors={errors} />
        <Field label="Required Quantity *" name="quantity" type="number" errors={errors} />
      </div>

      <div className="mt-5">
        <label className={LABEL}>Message</label>
        <textarea name="message" rows={5} className={FIELD} placeholder="Share specifications, drawings or delivery timelines." />
      </div>

      <div className="mt-5">
        <label className={LABEL}>Attach Drawing / RFQ (optional)</label>
        <label className="flex items-center gap-3 cursor-pointer border border-dashed border-white/20 px-4 py-4 text-sm text-white/60 hover:border-[var(--gold)]/60 transition-colors">
          <HiOutlineUpload size={20} className="text-[var(--gold)]" />
          <span>{fileName || "Choose a file (PDF, DWG, STEP, IGES — up to 20MB)"}</span>
          <input type="file" name="attachment" onChange={onFile} className="hidden" />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-[var(--gold)]">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold mt-8 w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Submit Request"}
        {status !== "loading" && <HiArrowRight />}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  errors: Record<string, string>;
}) {
  return (
    <div>
      <label className={LABEL}>{label}</label>
      <input type={type} name={name} className={FIELD} />
      {errors[name] && <p className="mt-1 text-[11px] text-[var(--gold)]">{errors[name]}</p>}
    </div>
  );
}
