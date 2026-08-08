import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Atom, Dumbbell, Footprints, MapPin, Phone, Clock } from "lucide-react";
import mark from "@/assets/kinetix-mark.svg";
import heroAthlete from "@/assets/hero-athlete.jpg";
import strengthPhoto from "@/assets/strength.jpg";
import conditioningPhoto from "@/assets/conditioning.jpg";
import communityPhoto from "@/assets/kinetix-community.jpg";
import membersPhoto from "@/assets/kinetix-members.jpg";
import { Photo } from "@/components/photo";

import { BatchBoard } from "@/components/batch-board";
import { CTA, TrialButton, LinkButton } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { plans, inr, inclusionLine } from "@/lib/plans";

export const Route = createFileRoute("/")({ component: Home });

const pillars = [
  {
    eyebrow: "Science Guided",
    line: "Every workout is designed with purpose.",
    Icon: Atom,
    color: "text-blue-glow",
  },
  {
    eyebrow: "Strength Built",
    line: "Build strength that transforms your life.",
    Icon: Dumbbell,
    color: "text-blue",
  },
  {
    eyebrow: "Performance Driven",
    line: "Move better. Perform better. Live better.",
    Icon: Footprints,
    color: "text-orange",
  },
];

const stats = [
  { value: "45", unit: "MIN", label: "Every session, start to finish" },
  { value: "12", unit: "MAX", label: "Members per coached batch" },
  { value: "6", unit: "AM", label: "First batch on the floor" },
  { value: "6", unit: "DAYS", label: "Monday to Saturday training" },
];

const stories = [
  {
    quote:
      "I stopped negotiating with myself at 5:45 AM. The batch is on, the plan is set, I just show up and lift.",
    name: "Sindhu R.",
    detail: "Member, 8 months",
  },
  {
    quote:
      "First time training in a group where the coach still corrects my setup on every heavy set. The standards hold.",
    name: "Arun K.",
    detail: "Member, 1 year",
  },
  {
    quote:
      "Forty-five minutes fits between the school run and work. My back pain is gone and I deadlift twice my old load.",
    name: "Prateek M.",
    detail: "Member, 6 months",
  },
];

const faqs = [
  {
    q: "I've never trained before. Will I keep up?",
    a: "Yes. Loads and movement options are set by your coach for your level, and the warm-up teaches the patterns before you load them.",
  },
  {
    q: "How big is a batch?",
    a: "Capped so every member gets coaching eyes on their sets. Book ahead on WhatsApp for peak morning and evening slots.",
  },
  {
    q: "What should I bring?",
    a: "Training shoes, a towel and a water bottle. Everything else — bars, bells, rowers, ropes — is on the floor.",
  },
  {
    q: "Can I try before I commit?",
    a: "One free trial session, any batch. Message us on WhatsApp and we'll slot you into the next available time.",
  },
];

const timeline = [
  { range: "0–8", name: "Prep", detail: "Mobility and activation, so the working sets land safely." },
  { range: "8–25", name: "Strength", detail: "Progressive lifts with coach-set loads for your level." },
  { range: "25–40", name: "Conditioning", detail: "Intervals and functional circuits at a controlled effort." },
  { range: "40–45", name: "Reset", detail: "Cooldown and breathing to finish the session properly." },
];

function HeroHeadline() {
  const reduced = useReducedMotion();
  const words = ["45", "MINUTES.", "NO", "GUESSWORK."];
  return (
    <h1 className="display text-[clamp(44px,10vw,96px)]">
      {words.map((w, i) => (
        <motion.span
          key={w}
          className="mr-3 inline-block"
          initial={reduced ? false : { opacity: 0, y: 24, skewX: -14 }}
          animate={{ opacity: 1, y: 0, skewX: -6 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.06, ease: "easeOut" }}
        >
          {w}
        </motion.span>
      ))}
    </h1>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="splatter pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="mono-label text-blue-glow">{site.lockupLine}</p>
            <div className="mt-5">
              <HeroHeadline />
            </div>
            <p className="mt-6 max-w-[68ch] text-white/75">
              Science-backed group training in Kukatpally. Strength, conditioning and functional
              work in one structured session.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrialButton />
              <LinkButton to="/schedule">See timings</LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10">
              <div className="absolute inset-0 bg-blue/20" />
              <div className="absolute inset-0 bg-orange/20 diagonal-split" />
            </div>
            <Photo
              src={heroAthlete}
              alt="Member driving a kettlebell swing during a KINETIX session"
              width={1408}
              height={1200}
              ratio="aspect-[7/6]"
              priority
            />
            <img
              src={mark}
              alt=""
              aria-hidden="true"
              width={677}
              height={400}
              className="pointer-events-none absolute -bottom-6 -left-6 hidden w-32 opacity-90 lg:block"
            />
          </div>

        </div>
      </section>

      <BatchBoard />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <h2 className="display skew-cut text-[clamp(28px,5vw,40px)]">The system, in three parts</h2>
        </Reveal>
        <div className="mt-10 grid divide-navy-line md:grid-cols-3 md:divide-x">
          {pillars.map((p, i) => (
            <Reveal key={p.eyebrow} delay={i * 0.05}>
              <div className="border-t border-navy-line px-0 py-8 md:border-t-0 md:px-8 md:py-0">
                <p.Icon size={28} strokeWidth={1.25} className={p.color} aria-hidden="true" />
                <p className="mono-label mt-5 text-white/60">{p.eyebrow}</p>
                <p className="mt-2 text-[21px] leading-snug">{p.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-line bg-navy/20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-navy-line px-0 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-ink px-6 py-10">
              <Reveal delay={i * 0.04}>
                <p className="display text-[clamp(40px,7vw,64px)] leading-none">
                  {s.value}
                  <span className="mono-label ml-2 align-super text-[12px] text-orange">
                    {s.unit}
                  </span>
                </p>
                <p className="mt-4 text-[14px] leading-snug text-white/60">{s.label}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>



      <section className="border-y border-navy-line bg-navy/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">How a session runs</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              Forty-five minutes, accounted for
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-navy-line bg-navy-line md:grid-cols-4">
            {timeline.map((t, i) => (
              <li key={t.name} className="bg-ink p-6">
                <Reveal delay={i * 0.05}>
                  <p className="mono-label text-orange">{t.range} MIN</p>
                  <h3 className="display mt-3 text-[21px]">{t.name}</h3>
                  <p className="mt-2 text-[15px] text-white/70">{t.detail}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <Photo
            src={strengthPhoto}
            alt="Members setting up for a coached barbell lift"
            width={1200}
            height={912}
            ratio="aspect-[4/3]"
          />
          <p className="mono-label mt-6 text-blue-glow">New to training</p>
          <h2 className="display skew-cut mt-3 text-[28px]">Start strong</h2>
          <p className="mt-4 text-white/75">
            Every session is scalable. Your coach sets loads and options for your level, so a first
            week feels demanding without being reckless. No guesswork about what to do next — the
            programme decides, you show up.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <Photo
            src={conditioningPhoto}
            alt="Member working a rope and rower conditioning interval"
            width={1200}
            height={912}
            ratio="aspect-[4/3]"
          />
          <p className="mono-label mt-6 text-orange">Already training</p>
          <h2 className="display skew-cut mt-3 text-[28px]">Push your limits</h2>
          <p className="mt-4 text-white/75">
            Experienced members get progressive loading, structured conditioning and coaching that
            holds standards. The group format keeps the intensity honest and consistency high.
          </p>
        </Reveal>

      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="mono-label text-orange">The people</p>
          <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
            Real members, real floor
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/70">
            Shot inside the Kukatpally studio — the same wall, the same batches you&rsquo;ll train
            with from your first session.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
          <Reveal>
            <Photo
              src={communityPhoto}
              alt="KINETIX members gathered in front of the studio mural after a batch"
              width={1376}
              height={768}
              ratio="aspect-[16/9]"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Photo
              src={membersPhoto}
              alt="Two KINETIX members in front of the studio mural"
              width={848}
              height={1264}
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>


      <section className="border-y border-navy-line bg-navy/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">On the floor</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              What members say
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <figure className="flex h-full flex-col justify-between rounded-[4px] border border-navy-line bg-ink p-6">
                  <span aria-hidden="true" className="display text-[40px] leading-none text-orange">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 text-[17px] leading-snug text-white/85">
                    {s.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-navy-line pt-4">
                    <p className="mono-label text-white/90">{s.name}</p>
                    <p className="mono-label mt-1 text-white/45">{s.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="mono-label text-orange">Before you start</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              Questions, answered
            </h2>
            <p className="mt-4 max-w-[42ch] text-white/70">
              Still unsure? Message the studio on WhatsApp — we&rsquo;ll tell you which batch suits
              you before you pay anything.
            </p>
            <div className="mt-8">
              <TrialButton />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="divide-y divide-navy-line border-y border-navy-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] text-white/90 transition-colors hover:text-blue-glow">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="mono-label shrink-0 text-orange transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[62ch] text-[15px] text-white/65">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>



      <section className="border-t border-navy-line py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">Membership</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              {site.taglines.commitment}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.04}>
                <div
                  className={`h-full rounded-[4px] border p-6 ${
                    plan.recommended ? "border-orange bg-navy/60" : "border-navy-line bg-navy/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="mono-label text-white/70">{plan.name}</p>
                    {plan.recommended && (
                      <span className="mono-label rounded-[2px] bg-orange px-2 py-1 text-[10px] text-white">
                        Best value
                      </span>
                    )}
                  </div>
                  <p className="display mt-4 text-[40px] text-white">{inr(plan.price)}</p>
                  <p className="mono-label mt-2 text-blue-glow">{inr(plan.perMonth)} / MONTH</p>
                  {plan.savings ? (
                    <p className="mono-label mt-3 text-orange">
                      SAVE {inr(plan.savings)} ({plan.savingsPercent}%)
                    </p>
                  ) : (
                    <p className="mono-label mt-3 text-white/40">BASELINE</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 rounded-[4px] border border-navy-line px-6 py-4">
            <p className="mono-label text-white/70">{inclusionLine}</p>
          </div>
          <div className="mt-8">
            <LinkButton to="/membership">View all plans</LinkButton>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="display text-[clamp(28px,5.5vw,64px)]">
            Health is the <span className="text-orange">real</span>{" "}
            <span className="text-orange">wealth</span>.
          </p>
          <p className="mt-6 text-[17px] text-ink/70">
            Invest in your body today, and your future will thank you forever.
          </p>
        </div>
      </section>

      <section className="border-t border-navy-line py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="mono-label text-blue-glow">Find the studio</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              Level 1, Manjeera Trinity Corporate
            </h2>
            <p className="mt-4 text-white/75">
              On JNTU Hi-Tech City Road in Kukatpally — a short walk from the Manjeera Mall stretch
              and an easy stop on the commute in or out of Hi-Tech City.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-orange" aria-hidden="true" />
                <span className="text-white/80">{site.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-orange" aria-hidden="true" />
                <a href={site.phoneHref} className="mono-label text-white/90 hover:text-blue-glow">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="mt-1 shrink-0 text-orange" aria-hidden="true" />
                <div className="mono-label space-y-1 text-white/70">
                  {site.floorHours.map((h) => (
                    <p key={h.days}>
                      {h.days}: {h.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrialButton />
              <a href={site.phoneHref}>
                <CTA variant="ghost">Call now</CTA>
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <iframe
              title="KINETIX Performance Studio location map"
              src={site.mapEmbed}
              loading="lazy"
              className="h-[380px] w-full rounded-[4px] border border-navy-line"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
