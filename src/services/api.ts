// Mock service layer. Swap the internals with `fetch` calls to your Spring Boot
// REST API without changing any component. Keep the signatures stable.

import { PRODUCTS, MACHINERY, type Product } from "@/data/site";
const { default: img1 } = await import("@/assets/gallery/factory-exterior.jpg");
const { default: img2 } = await import("@/assets/gallery/factory-exterior-2.jpg");
const { default: img3 } = await import("@/assets/gallery/factory-exterior-3.jpg");
const { default: img4 } = await import("@/assets/gallery/Industrial-factory-workspace.jpg");
const { default: img5 } = await import("@/assets/gallery/Industrial-factory-workstation.jpg");
const { default: img6 } = await import("@/assets/gallery/Industrial-inspection-area.jpg");
const { default: img7 } = await import("@/assets/gallery/Industrial-packing-station.jpg");
const { default: img8 } = await import("@/assets/gallery/Industrial-workshop.jpg");
const { default: img9 } = await import("@/assets/gallery/Organized-industrial-storage.jpg");
const { default: img10 } = await import("@/assets/gallery/Coil-forming-workstation.jpg");
const { default: img11 } = await import("@/assets/gallery/rejection-area1.jpg");
const { default: img12 } = await import("@/assets/gallery/rejection-area2.jpg");
const { default: img13 } = await import("@/assets/gallery/semi-automaic-machine.jpg");
const { default: img14 } = await import("@/assets/gallery/tube-sizing-station.jpg");
const delay = (ms = 250) => new Promise((r) => setTimeout(r, ms));

// GET /api/products
export async function getProducts(params?: {
  category?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}): Promise<{ items: Product[]; total: number; page: number; pageSize: number }> {
  await delay();
  const pageSize = params?.pageSize ?? 12;
  const page = params?.page ?? 1;
  let items = [...PRODUCTS];
  if (params?.category && params.category !== "All") {
    items = items.filter((p) => p.category === params.category);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    items = items.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.oem.toLowerCase().includes(q) ||
        p.part.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }
  const total = items.length;
  const start = (page - 1) * pageSize;
  return { items: items.slice(start, start + pageSize), total, page, pageSize };
}

// GET /api/products/:id
export async function getProductById(id: string): Promise<Product | null> {
  await delay();
  return PRODUCTS.find((p) => p.slug === id) ?? null;
}

// GET /api/gallery
export async function getGallery() {
  return [
  { src: img1, alt: "Factory Exterior", tag: "Factory" },
  { src: img2, alt: "Factory Exterior", tag: "Factory" },
  { src: img3, alt: "Factory Exterior", tag: "Factory" },

  { src: img4, alt: "Assembly Area", tag: "Machines" },
  { src: img5, alt: "Production Line", tag: "Machines" },
  { src: img10, alt: "Coil Forming", tag: "Machines" },
  { src: img13, alt: "Assembly Machine", tag: "Machines" },

  { src: img6, alt: "Inspection Area", tag: "Quality Inspection" },
  
  { src: img7, alt: "Packing Area", tag: "Packaging" },

  { src: img8, alt: "Workshop", tag: "Factory" },

  { src: img9, alt: "Warehouse", tag: "Factory" },

  { src: img11, alt: "Rejection Area", tag: "Quality Inspection" },
  { src: img12, alt: "Segregation Area", tag: "Quality Inspection" },
];

}

// GET /api/infrastructure
export async function getInfrastructure() {
  await delay();
  return MACHINERY;
}

// POST /api/contact
export async function submitContact(payload: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<{ ok: true }> {
  await delay(600);
  // TODO: replace with `fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })`
  console.debug("[submitContact] payload", payload);
  return { ok: true };
}

// POST /api/quote
export async function submitQuote(payload: FormData): Promise<{ ok: true; ref: string }> {

  const body = {
    name: String(payload.get("person") || ""),
    email: String(payload.get("email") || ""),
    phone: String(payload.get("phone") || ""),
    company: String(payload.get("company") || ""),
    product: String(payload.get("productCategory") || ""),
    message: String(payload.get("message") || "")
  };

  const response = await fetch("http://localhost:8080/api/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error("Failed to submit quote");
  }

  const savedQuote = await response.json();

  return {
    ok: true,
    ref: `Q-${savedQuote.id}`
  };
}


/**
 * POST /api/chat
 * Sends a message to the AutoTech AI assistant.
 */
export async function sendChatMessage(
  message: string
): Promise<string> {
  const response = await fetch("http://localhost:8080/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message.trim(),
    }),
  });

  if (!response.ok) {
    throw new Error(
      `AI request failed (${response.status}). Please try again.`
    );
  }

  const data: { reply: string } = await response.json();

  return data.reply;
}
