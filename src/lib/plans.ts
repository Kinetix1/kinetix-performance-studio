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

export type Faq = { q: string; a: string; category: string; todo?: boolean };

export const faqCategories = [
  "Getting started",
  "Is Kinetix for me?",
  "Programs & logistics",
] as const;

export const faqs: Faq[] = [
  {
    category: "Getting started",
    q: "Is Kinetix suitable for beginners?",
    a: "Yes. Kinetix is built for every level, including your very first session. Coaches scale load, intensity and movement options to where you are — you train in the same room as everyone else, at your own pace.",
  },
  {
    category: "Getting started",
    q: "Do I need previous fitness experience?",
    a: "No. Every movement is demonstrated and coached before you're asked to do it, with regressions ready for anyone trying it for the first time.",
  },
  {
    category: "Getting started",
    q: "What if I've never done HIIT before?",
    a: "That's normal, and it's what the demo and warm-up are for. Your coach walks you through every movement first, then scales the intensity to you — you build up from there.",
  },
  {
    category: "Getting started",
    q: "How long is a session?",
    a: "45 minutes Monday to Friday, 60 minutes on Saturday. Every session runs the same structure: introduction and demo, warm-up, the workout of the day, a finisher and a cool-down.",
  },
  {
    category: "Getting started",
    q: "What should I bring?",
    a: "Training shoes, comfortable workout clothes, a water bottle and a towel. Everything else — kettlebells, bars, rowers, ropes — is on the floor.",
  },
  {
    category: "Getting started",
    q: "What should I wear?",
    a: "Comfortable, breathable workout clothing and closed training shoes. Avoid anything restrictive — you'll be squatting, hinging, pushing and carrying.",
  },
  {
    category: "Getting started",
    q: "Do I need to book my session?",
    a: "Yes, batches are capped so every member gets coached properly. Book your slot on WhatsApp — first-timers get one free trial session before committing to a plan.",
  },
  {
    category: "Is Kinetix for me?",
    q: "Can I lose weight with Kinetix?",
    a: "Yes. HIIT and conditioning are among the most effective formats for fat loss and cardiovascular fitness, and consistent group training is what makes results stick.",
  },
  {
    category: "Is Kinetix for me?",
    q: "Is Kinetix suitable for women?",
    a: "Yes. Kinetix trains men and women in the same batches, with loads and intensity set individually for each member.",
  },
  {
    category: "Is Kinetix for me?",
    q: "Can older adults join?",
    a: "Yes. Coaches modify load, range of motion and intensity for age and mobility — plenty of members train well into their 40s, 50s and beyond.",
  },
  {
    category: "Is Kinetix for me?",
    q: "Can I join if I'm overweight?",
    a: "Yes. Movements are regressed to your current fitness level from day one, and coaches adjust as you progress. You're not compared to anyone else in the room.",
  },
  {
    category: "Is Kinetix for me?",
    q: "How many times a week should I train?",
    a: "Most members train 3–5 times a week. Strength lands Monday, Wednesday and Friday, hybrid strength-and-conditioning on Tuesday and Saturday, and cardio-focused HIIT on Thursday — mix and match based on your goals.",
  },
  {
    category: "Programs & logistics",
    q: "Do you offer personal training?",
    a: "Kinetix is built around coached group training — that's where the accountability and community come from. If you're looking for 1:1 coaching, message us on WhatsApp and we'll talk it through.",
  },
  {
    category: "Programs & logistics",
    q: "Do you offer HYROX or race training?",
    a: "Yes. HYROX training and race preparation are part of our training formats — message us on WhatsApp to find out when the next block starts.",
  },
  {
    category: "Programs & logistics",
    q: "Where are you located?",
    a: "108, Level 1, Manjeera Trinity Corporate, JNTU Hi-Tech City Road, Kukatpally, Hyderabad – 500072.",
  },
];
