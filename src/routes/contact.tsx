import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { schedule, formatSlot } from "@/lib/schedule";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — KINETIX Performance Studio" },
      {
        name: "description",
        content:
          "Get in touch with KINETIX Performance Studio in Kukatpally, Hyderabad — call, WhatsApp or visit the studio to book a free trial.",
      },
    ],
  }),
});

const allSlots = Array.from(new Set(schedule.flatMap((d) => d.slots.map((s) => formatSlot(s)))));

const whatsappClicks = [
  { label: "Book a free trial", message: "Hi KINETIX, I'd like to book a free trial." },
  { label: "Ask about membership", message: "Hi KINETIX, can you share the membership plans?" },
  { label: "Check batch timings", message: "Hi KINETIX, what are your current batch timings?" },
];

type Errors = { name?: string; phone?: string; goal?: string };

function Contact() {
  const [values, setValues] = useState({ name: "", phone: "", goal: "", batch: allSlots[0] ?? "" });
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^\d{10}$/.test(values.phone.replace(/\s/g, ""))) {
      next.phone = "Enter a 10-digit mobile number.";
    }
    if (values.goal.trim().length < 3) next.goal = "Tell us what you're training for.";
    setErrors(next);
    if (Object.keys(next).length) return;

    window.open(
      whatsappLink(
        `Hi KINETIX, I'm ${values.name.trim()} (${values.phone.trim()}). My goal: ${values.goal.trim()}. Preferred batch: ${values.batch}. I'd like to book a free trial.`,
      ),
      "_blank",
      "noopener",
    );
  }

  const field =
    "mt-2 w-full rounded-[2px] border border-navy-line bg-navy/40 px-4 py-3 text-white placeholder:text-white/35 focus:border-blue-glow focus:outline-none focus:ring-1 focus:ring-blue-glow";

  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <p className="mono-label text-blue-glow">Contact</p>
        <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,64px)]">
          Message us on WhatsApp
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-white/70">
          The fastest way to reach KINETIX is WhatsApp. We reply during floor hours, and you can
          book a trial, ask about batches, or get membership details instantly.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-block">
            <CTA className="px-8 py-4">
              <MessageCircle size={20} className="inline-block align-text-bottom" />
              <span className="ml-2">Start a WhatsApp chat</span>
            </CTA>
          </a>
          <a href={site.phoneHref} className="inline-block">
            <CTA variant="ghost" className="px-8 py-4">
              <Phone size={20} className="inline-block align-text-bottom" />
              <span className="ml-2">{site.phoneDisplay}</span>
            </CTA>
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-12 md:grid-cols-3">
        {whatsappClicks.map((c) => (
          <Reveal key={c.label}>
            <a
              href={whatsappLink(c.message)}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-[4px] border border-navy-line bg-navy/20 p-5 transition hover:border-blue-glow hover:bg-navy/40"
            >
              <div>
                <p className="font-semibold text-white">{c.label}</p>
                <p className="mono-label mt-1 text-sm text-white/50">Opens WhatsApp</p>
              </div>
              <ArrowRight
                size={18}
                className="shrink-0 text-orange transition group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 lg:grid-cols-2">
        <Reveal>
          <div>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-navy-line bg-navy/30">
                  <Phone size={18} className="text-orange" aria-hidden="true" />
                </div>
                <div>
                  <p className="mono-label text-white/50">Phone / WhatsApp</p>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-white hover:text-blue-glow"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-navy-line bg-navy/30">
                  <Mail size={18} className="text-blue-glow" aria-hidden="true" />
                </div>
                <div>
                  <p className="mono-label text-white/50">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-white/85 hover:text-blue-glow"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-navy-line bg-navy/30">
                  <MapPin size={18} className="text-orange" aria-hidden="true" />
                </div>
                <div>
                  <p className="mono-label text-white/50">Studio address</p>
                  <span className="text-white/85">{site.address.full}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-navy-line bg-navy/30">
                  <Clock size={18} className="text-blue-glow" aria-hidden="true" />
                </div>
                <div>
                  <p className="mono-label text-white/50">Floor hours</p>
                  <div className="space-y-1 text-white/85">
                    {site.floorHours.map((h) => (
                      <p key={h.days}>
                        <span className="mono-label text-white/60">{h.days}:</span> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="KINETIX on Facebook"
                className="rounded-[2px] border border-navy-line p-3 hover:border-blue-glow"
              >
                <Facebook size={18} />
              </a>
              <a
                href={site.socials.instagram}
                aria-label="KINETIX on Instagram (link pending)"
                className="rounded-[2px] border border-navy-line p-3 hover:border-blue-glow"
              >
                <Instagram size={18} />
              </a>
            </div>

            <iframe
              title="KINETIX Performance Studio location map"
              src={site.mapEmbed}
              loading="lazy"
              className="mt-8 h-[300px] w-full rounded-[4px] border border-navy-line"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[4px] border border-navy-line p-6 lg:p-8"
          >
            <h2 className="display skew-cut text-[28px]">Book a free trial</h2>
            <p className="mt-3 text-[15px] text-white/65">
              Fill this in and we'll open WhatsApp with your details ready to send. No data is
              stored here.
            </p>

            <div className="mt-6">
              <label htmlFor="name" className="mono-label text-white/70">
                Name
              </label>
              <input
                id="name"
                className={field}
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mono-label mt-2 text-orange">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="phone" className="mono-label text-white/70">
                Mobile number
              </label>
              <input
                id="phone"
                inputMode="numeric"
                className={field}
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                placeholder="10-digit number"
              />
              {errors.phone && (
                <p id="phone-error" className="mono-label mt-2 text-orange">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="goal" className="mono-label text-white/70">
                What are you training for?
              </label>
              <textarea
                id="goal"
                rows={3}
                className={field}
                value={values.goal}
                onChange={(e) => setValues({ ...values, goal: e.target.value })}
                aria-invalid={!!errors.goal}
                aria-describedby={errors.goal ? "goal-error" : undefined}
                placeholder="Get stronger, get consistent, drop the desk stiffness…"
              />
              {errors.goal && (
                <p id="goal-error" className="mono-label mt-2 text-orange">
                  {errors.goal}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="batch" className="mono-label text-white/70">
                Preferred batch
              </label>
              <select
                id="batch"
                className={field}
                value={values.batch}
                onChange={(e) => setValues({ ...values, batch: e.target.value })}
              >
                {allSlots.map((s) => (
                  <option key={s} value={s} className="bg-ink">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="mt-8 block w-full">
              <CTA className="w-full">
                <MessageCircle size={20} className="inline-block align-text-bottom" />
                <span className="ml-2">Send on WhatsApp</span>
              </CTA>
            </button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
