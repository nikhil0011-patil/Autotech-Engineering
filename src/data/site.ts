import fuelPipe from "@/assets/product-fuel-pipe.jpg";
import coolant from "@/assets/product-coolant.jpg";
import brakeBooster from "@/assets/product-brake-booster.jpg";
import clutch from "@/assets/product-clutch.jpg";
import airBrake from "@/assets/product-air-brake.jpg";
import urea from "@/assets/product-urea.jpg";
import leakOffPipe from "@/assets/product-leak-off.jpg";
import compressorPipe from "@/assets/product-compressor.jpg";
import lubricatingPipe from "@/assets/product-lubricating.jpg";
import highPressure from "@/assets/product-high-pressure.jpg";


export const COMPANY = {
  name: "AutoTech Engineering",
  address:
    "Gat No. 500, Cummins Road, Kasaramboli, Pune, Maharashtra – 412115",
  phone: "+91 9175640911",
  email: "autotechengineering07@gmail.com",
};


export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/gallery", label: "Gallery" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/contact", label: "Contact" },
] as const;

export type ProductCategory =
  | "Fuel Systems"
  | "Cooling Systems"
  | "Brake Systems"
  | "Clutch Systems"
  | "Pneumatic Systems"
  | "Emission Systems";

export interface Product {
  slug: string;
  title: string;
  image: string;
  short: string;
  category: ProductCategory;
  oem: string;
  part: string;
  material: string;
  diameter: string;
  pressure: string;
  temperature: string;
  applications: string[];
  features: string[];
  gallery: string[];
}

export const PRODUCTS: Product[] = [
{
  slug: "fuel-pipe-assemblies",
  title: "Fuel Pipe Assemblies",
  image: fuelPipe,
  short: "High-quality fuel pipe assemblies engineered for OEM vehicles and industrial applications.",
  category: "Fluid Transmission",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Steel / Nylon / Rubber",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +125°C",
  applications: [
    "Commercial Vehicles",
    "Passenger Vehicles",
    "Industrial Equipment"
  ],
  features: [
    "Leak Proof",
    "Corrosion Resistant",
    "Precision Manufactured",
    "Long Service Life"
  ],
  gallery: [fuelPipe],
},
{
  slug: "coolant-pipes",
  title: "Coolant Pipes",
  image: coolant,
  short: "Premium coolant pipe assemblies designed for efficient engine cooling and long-lasting performance.",
  category: "Cooling System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Steel / Rubber",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +125°C",
  applications: [
    "Commercial Vehicles",
    "Passenger Vehicles",
    "Heavy Equipment"
  ],
  features: [
    "High Temperature Resistant",
    "Leak Proof",
    "Rust Resistant",
    "Long Service Life"
  ],
  gallery: [coolant],
},
{
  slug: "brake-booster-pipes",
  title: "Brake Booster Pipes",
  image: brakeBooster,
  short: "Precision brake booster pipes manufactured for reliable braking performance and OEM applications.",
  category: "Brake System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Steel / Nylon",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +125°C",
  applications: [
    "Commercial Vehicles",
    "Passenger Vehicles",
    "Heavy Trucks"
  ],
  features: [
    "High Strength",
    "Corrosion Resistant",
    "Leak Proof",
    "Long Service Life"
  ],
  gallery: [brakeBooster],
},
{
  slug: "clutch-pipes",
  title: "Clutch Pipes",
  image: clutch,
  short: "OEM-quality clutch pipe assemblies designed for smooth hydraulic clutch operation.",
  category: "Clutch System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Steel",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +125°C",
  applications: [
    "Passenger Vehicles",
    "Commercial Vehicles"
  ],
  features: [
    "Leak Proof",
    "High Pressure Resistant",
    "Corrosion Resistant",
    "Long Service Life"
  ],
  gallery: [clutch],
},
{
  slug: "air-brake-coil-hose",
  title: "Air Brake Coil Hose",
  image: airBrake,
  short: "Flexible and durable air brake coil hoses for heavy commercial vehicles.",
  category: "Air Brake System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "PU / Nylon",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +85°C",
  applications: [
    "Trucks",
    "Trailers",
    "Commercial Vehicles"
  ],
  features: [
    "Flexible",
    "Abrasion Resistant",
    "Weather Resistant",
    "Long Service Life"
  ],
  gallery: [airBrake],
},
{
  slug: "urea-adblue-lines",
  title: "Urea / AdBlue Lines",
  image: urea,
  short: "High-performance DEF/AdBlue line assemblies for BS6 emission systems.",
  category: "Emission System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Special Polymer",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +90°C",
  applications: [
    "BS6 Commercial Vehicles",
    "Heavy Trucks"
  ],
  features: [
    "Chemical Resistant",
    "Leak Proof",
    "Durable",
    "OEM Quality"
  ],
  gallery: [urea],
},
{
  slug: "leak-off-pipes",
  title: "Leak Off Pipes",
  image: leakOffPipe,
  short: "Precision leak-off pipes manufactured for efficient fuel return systems.",
  category: "Fuel System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Steel / Nylon",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +125°C",
  applications: [
    "Diesel Engines",
    "Commercial Vehicles"
  ],
  features: [
    "Leak Proof",
    "Corrosion Resistant",
    "Long Service Life",
    "Precision Engineered"
  ],
  gallery: [leakOffPipe],
},
{
  slug: "compressor-pipes",
  title: "Compressor Pipes",
  image: compressorPipe,
  short: "High-quality compressor pipes engineered for reliable compressed air flow in commercial and industrial vehicles.",
  category: "Air System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Steel",
  diameter: "Various Sizes",
  pressure: "High Pressure",
  temperature: "-40°C to +125°C",
  applications: [
    "Commercial Vehicles",
    "Heavy Trucks",
    "Industrial Equipment"
  ],
  features: [
    "Corrosion Resistant",
    "High Pressure Resistant",
    "Precision Engineered",
    "Long Service Life"
  ],
  gallery: [compressorPipe],
},
{
  slug: "lubricating-pipes",
  title: "Lubricating Pipes",
  image: lubricatingPipe,
  short: "Precision-engineered lubricating pipes designed for efficient oil circulation and reliable engine lubrication.",
  category: "Lubrication System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Steel",
  diameter: "Various Sizes",
  pressure: "OEM Standard",
  temperature: "-40°C to +150°C",
  applications: [
    "Passenger Vehicles",
    "Commercial Vehicles",
    "Heavy Duty Engines",
    "Industrial Equipment"
  ],
  features: [
    "High Temperature Resistant",
    "Corrosion Resistant",
    "Precision Manufactured",
    "Long Service Life"
  ],
  gallery: [lubricatingPipe],
},
{
  slug: "high-pressure-hoses",
  title: "High Pressure Hoses",
  image: highPressure,
  short: "High-performance hydraulic and industrial high pressure hoses designed for demanding applications.",
  category: "Hydraulic System",
  oem: "OEM Approved",
  part: "Multiple Models",
  material: "Rubber with Steel Reinforcement",
  diameter: "Various Sizes",
  pressure: "High Pressure",
  temperature: "-40°C to +125°C",
  applications: [
    "Hydraulic Systems",
    "Construction Equipment",
    "Commercial Vehicles"
  ],
  features: [
    "High Pressure Resistant",
    "Abrasion Resistant",
    "Flexible",
    "Long Service Life"
  ],
  gallery: [highPressure],
},
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Fuel Systems",
  "Cooling Systems",
  "Brake Systems",
  "Clutch Systems",
  "Pneumatic Systems",
  "Emission Systems",
];

export const FEATURED = [
  { title: "Fuel Pipe Assembly — HD Series", oem: "68217X", part: "AT-FPA-1201", vehicle: "Commercial Truck 12T", image: fuelPipe },
  { title: "Coolant Return Line", oem: "44201C", part: "AT-CLT-2044", vehicle: "SUV Diesel Platform", image: coolant },
  { title: "Brake Booster Vacuum Pipe", oem: "58910B", part: "AT-BBP-3312", vehicle: "Passenger Sedan", image: brakeBooster },
  { title: "Clutch Hydraulic Line", oem: "51100H", part: "AT-CLH-4508", vehicle: "Light Commercial Vehicle", image: clutch },
  { title: "Air Brake Coil Hose Set", oem: "AB-77-RB", part: "AT-ABC-5090", vehicle: "Heavy Duty Trailer", image: airBrake },
  { title: "Urea Delivery Line", oem: "SCR-9081", part: "AT-URA-6120", vehicle: "BS-VI Bus Chassis", image: urea },
];

export const INDUSTRIES = [
  { title: "Commercial Vehicles", desc: "Heavy-duty trucks, tippers and haulage fleets." },
  { title: "Passenger Vehicles", desc: "Sedans, SUVs and electrified platforms." },
  { title: "Agricultural Vehicles", desc: "Tractors, harvesters and farm equipment." },
  { title: "Industrial Equipment", desc: "Construction, mining and material handling." },
  { title: "OEM Manufacturers", desc: "Tier-1 supply into global automotive OEMs." },
];

export const PROCESS = [
  { step: "01", title: "Raw Material", desc: "Certified steel, aluminium, nylon and rubber inputs." },
  { step: "02", title: "Precision Manufacturing", desc: "CNC bending, cutting and forming on calibrated cells." },
  { step: "03", title: "Assembly", desc: "OEM-spec fitments, crimping and torque control." },
  { step: "04", title: "Testing", desc: "Leak, burst, pressure and thermal cycle validation." },
  { step: "05", title: "Quality Inspection", desc: "Dimensional and metallurgical audits per batch." },
  { step: "06", title: "Packaging", desc: "Anti-corrosion, export-grade packing." },
  { step: "07", title: "Dispatch", desc: "On-time delivery across India and export markets." },
];

export const TESTIMONIALS = [
  { quote: "AutoTech's fuel line assemblies have exceeded our validation targets. Consistent quality across three years of supply.", name: "Sourcing Head", company: "Tier-1 Commercial Vehicle OEM" },
  { quote: "A partner we rely on for engineering agility and precision. Their tooling flexibility is a major advantage.", name: "VP — Purchasing", company: "European Passenger Car Group" },
  { quote: "Export-grade packaging, zero-defect batches and responsive engineering support. Highly recommended.", name: "Procurement Manager", company: "Middle East Distributor" },
];

export const STATS = [
  {
    value: 10,
    suffix: "+",
    label: "Product Categories"
  },
  {
    value: 2,
    suffix: "",
    label: "Manufacturing Plants"
  },
  {
    value: 9001,
    suffix: "",
    label: "ISO Certified"
  },
  {
    value: 100,
    suffix: "%",
    label: "Quality Commitment"
  }
];

export const HISTORY = [
  { year: "2007", title: "Founded", desc: "AutoTech Engineering established in Gurugram with a single CNC bending cell." },
  { year: "2011", title: "First OEM Contract", desc: "Awarded tier-1 status by a leading Indian commercial vehicle OEM." },
  { year: "2015", title: "Facility Expansion", desc: "Second manufacturing block commissioned for coolant and clutch lines." },
  { year: "2018", title: "Export Launch", desc: "First container shipments to European and Middle Eastern distributors." },
  { year: "2021", title: "BS-VI / Euro-VI Ready", desc: "Introduced heated urea / AdBlue lines to full production." },
  { year: "2024", title: "EV Thermal Program", desc: "Launched dedicated cell for battery thermal management pipes." },
];

export const CERTIFICATIONS = [
  { code: "IATF 16949", desc: "Automotive quality management system" },
  { code: "ISO 9001:2015", desc: "Quality management certification" },
  { code: "ISO 14001", desc: "Environmental management system" },
  { code: "ISO 45001", desc: "Occupational health & safety" },
  { code: "REACH", desc: "EU chemical compliance" },
  { code: "RoHS", desc: "Restriction of hazardous substances" },
];

export const EXPORT_MARKETS = [
  "Germany", "France", "Italy", "Spain", "United Kingdom",
  "United States", "Mexico", "Brazil",
  "UAE", "Saudi Arabia", "South Africa", "Egypt",
  "Japan", "South Korea", "Thailand", "Vietnam", "Indonesia", "Australia",
];

export const TEAM = [
  { name: "Rajesh Malhotra", role: "Founder & Managing Director", initials: "RM" },
  { name: "Anita Verma", role: "Head of Engineering", initials: "AV" },
  { name: "Suresh Iyer", role: "Director — Operations", initials: "SI" },
  { name: "Priya Nair", role: "Head of Quality Assurance", initials: "PN" },
  { name: "Karan Bhatia", role: "VP — Business Development", initials: "KB" },
  { name: "Meera Joshi", role: "Head of Exports", initials: "MJ" },
];

export const MACHINERY = [
  { title: "CNC Tube Bending", desc: "5-axis CNC benders producing complex 3D geometries within ±0.2 mm tolerance." },
  { title: "Precision Cutting", desc: "Servo-driven cutting cells for burr-free finish across nylon, steel and aluminium." },
  { title: "Hydraulic Crimping", desc: "Programmable crimpers with force monitoring for consistent joint integrity." },
  { title: "Leak Testing Rigs", desc: "Helium and pressure-decay leak testing at 100% inspection." },
  { title: "Endurance Test Bench", desc: "Pressure cycle, thermal shock and vibration validation for durability." },
  { title: "Clean Warehousing", desc: "FIFO-managed racking with anti-corrosion packing lanes for export shipments." },
];
