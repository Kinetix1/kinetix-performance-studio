export type Plan = {
  id: string;
  name: string;
  months: number;
  price: number;
  perMonth: number;
  savings: number | null;
  savingsPercent: number | null;
  recommended: boolean;
};

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    months: 1,
    price: 7000,
    perMonth: 7000,
    savings: null,
    savingsPercent: null,
    recommended: false,
  },
  {
    id: "quarterly",
    name: "3 Months",
    months: 3,
    price: 14000,
    perMonth: 4667,
    savings: 7000,
    savingsPercent: 33,
    recommended: false,
  },
  {
    id: "half-yearly",
    name: "6 Months",
    months: 6,
    price: 24000,
    perMonth: 4000,
    savings: 18000,
    savingsPercent: 43,
    recommended: false,
  },
  {
    id: "annual",
    name: "12 Months",
    months: 12,
    price: 40000,
    perMonth: 3333,
    savings: 44000,
    savingsPercent: 52,
    recommended: true,
  },
];

export const inclusionLine = "The price includes all training provided.";

export function inr(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export const faqs: { q: string; a: string; todo?: boolean }[] = [
  {
    q: "What's included in a membership?",
    a: "All training provided is included — every 45-minute group session on the timetable, coached start to finish. There are no separate training add-ons.",
  },
  {
    q: "Can I try before paying?",
    a: "Yes. Book a free trial session over WhatsApp, pick the batch that fits your schedule, and train with the group before you commit to a plan.",
  },
  {
    q: "What should I bring?",
    a: "Training shoes, comfortable workout clothes, a water bottle and a towel. Arrive 10 minutes early for your first session so your coach can take you through the format.",
  },
  {
    q: "How big are the batches?",
    a: "TODO: confirm with client — batch size cap not supplied.",
    todo: true,
  },
  {
    q: "Can I freeze or refund my membership?",
    a: "TODO: confirm with client — freeze, pause and refund policy not supplied.",
    todo: true,
  },
];
