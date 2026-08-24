export const site = {
  name: "KINETIX Performance Studio",
  shortName: "KINETIX",
  lockupLine: "SCIENCE • STRENGTH • PERFORMANCE",
  taglines: {
    commitment: "Choose your commitment. Transform your life.",
  },
  phoneDisplay: "8886874545",
  phoneHref: "tel:+918886874545",
  whatsapp: "https://wa.me/918886874545",
  email: "kinetixperformancestudio@gmail.com",
  address: {
    line1: "108, Level 1, Manjeera Trinity Corporate",
    line2: "JNTU Hi-Tech City Road, Kukatpally",
    city: "Hyderabad",
    postalCode: "500072",
    region: "Telangana",
    country: "IN",
    full: "108, Level 1, Manjeera Trinity Corporate, JNTU Hi-Tech City Road, Kukatpally, Hyderabad – 500072",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.378001410318!2d78.3923226!3d17.4894601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918dad99ffb5%3A0x2a41bb4e8d9e8f58!2sKinetix%20Performance%20Studio!5e0!3m2!1sen!2sin!4v1786187727384!5m2!1sen!2sin",
  socials: {
    facebook: "https://www.facebook.com/share/19D3HsmoNN/",
    // TODO: client sent a Facebook URL by mistake — replace with the real Instagram profile URL.
    instagram: "https://www.instagram.com/kinetix.kukatpally/",
  },
  floorHours: [
    { days: "Monday – Friday", hours: "6:00 – 10:00 AM · 5:00 – 8:00 PM" },
    { days: "Saturday", hours: "6:00 – 10:00 AM" },
    { days: "Sunday", hours: "Closed" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function trialLink(slotLabel?: string) {
  return whatsappLink(
    slotLabel
      ? `Hi KINETIX! 👋 I'd like to book a free trial for the ${slotLabel} batch.`
      : `Hi KINETIX! 👋 I'd like to book a free trial. Please let me know the available slots.`,
  );
}

export const sessionJourney = [
  { step: "01", name: "Arrive", detail: "Come in, meet your coach and get ready on the floor." },
  {
    step: "02",
    name: "Introduction & demo",
    detail:
      "Your coach introduces the workout of the day and demonstrates every movement in it, with progressions and regressions for your level.",
  },
  {
    step: "03",
    name: "Warm up",
    detail: "Prepare your body and movement patterns before you load them.",
  },
  {
    step: "04",
    name: "Workout",
    detail: "Follow your coach and the display timers through the day's structured session.",
  },
  { step: "05", name: "Finisher", detail: "A short, sharp full-body push to close out the work." },
  {
    step: "06",
    name: "Cool down",
    detail: "Recover, breathe and walk out feeling like you earned it.",
  },
] as const;

export const trainingFormats = [
  "HIIT",
  "Functional Training",
  "Strength",
  "Conditioning",
  "Athletic Performance",
  "Mobility",
  "Core",
  "HYROX Training",
  "Race Preparation",
  "Group Training",
] as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Membership", to: "/membership" },
  { label: "Schedule", to: "/schedule" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
