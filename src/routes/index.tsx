import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  UserCheck,
  PersonStanding,
  Flame,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import heroAthlete from "@/assets/hero-kettlebell-overhead-swing.webp";
import strengthPhoto from "@/assets/barbell-deadlift-setup.webp";
import conditioningPhoto from "@/assets/rowing-machine-conditioning.webp";
import communityPhoto from "@/assets/studio-mural-band-training.webp";
import membersPhoto from "@/assets/barbell-front-squat-studio.webp";
import galleryKettlebellSwing from "@/assets/gallery/member-kettlebell-swing.webp";
import galleryBarbellPress from "@/assets/gallery/member-barbell-overhead-press.webp";
import galleryGobletSquat from "@/assets/gallery/member-medicine-ball-goblet-squat.webp";
import galleryBandTraining from "@/assets/gallery/member-band-pull-overhead-mural.webp";
import galleryDumbbellSquat from "@/assets/gallery/member-dual-dumbbell-squat.webp";
import galleryFarmersCarry from "@/assets/gallery/member-kettlebell-farmers-carry.webp";
import galleryCoreWork from "@/assets/gallery/member-plank-medicine-ball-mural.webp";
import gallerySandbagCarry from "@/assets/gallery/member-sandbag-carry.webp";
import { Photo } from "@/components/photo";

import { BatchBoard } from "@/components/batch-board";
import { CTA, TrialButton, LinkButton } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { site, sessionJourney, trainingFormats } from "@/lib/site";
import { plans, inr, inclusionLine } from "@/lib/plans";

export const Route = createFileRoute("/")({ component: Home });

const differentiators = [
  {
    name: "Coach-Led Training",
    detail: "Every session is guided by experienced coaches, start to finish.",
    Icon: UserCheck,
  },
  {
    name: "Functional Fitness",
    detail: "Train movements that improve how you move in everyday life and sport.",
    Icon: PersonStanding,
  },
  {
    name: "HIIT & Conditioning",
    detail: "Build cardiovascular fitness, work capacity and endurance.",
    Icon: Flame,
  },
  {
    name: "Progressive Programming",
    detail: "Your workouts aren't random. They're structured to help you improve.",
    Icon: TrendingUp,
  },
  {
    name: "Community",
    detail: "Train with people who push, encourage and celebrate each other.",
    Icon: Users,
  },
  {
    name: "All Fitness Levels",
    detail: "Beginners and experienced athletes train together, with modifications for each.",
    Icon: CheckCircle2,
  },
];

const stats = [
  { value: "45–60", unit: "MIN", label: "Every session, coach to cool-down" },
  { value: "12", unit: "MAX", label: "Members per coached batch" },
  { value: "6", unit: "AM", label: "First batch on the floor" },
  { value: "6", unit: "DAYS", label: "Monday to Saturday training" },
];

const whoFor = [
  "You're tired of boring gym workouts",
  "You want structured training",
  "You want to lose body fat",
  "You want to get stronger",
  "You want better stamina",
  "You want to improve mobility and movement",
  "You enjoy training with a community",
  "You're preparing for races or athletic events",
  "You need accountability to stay consistent",
];

const galleryHighlights = [
  {
    src: galleryKettlebellSwing,
    alt: "Member swinging a kettlebell on the studio floor",
    label: "Kettlebell Swing",
  },
  {
    src: galleryBarbellPress,
    alt: "Member pressing a barbell overhead in front of the KINETIX mural",
    label: "Barbell Press",
  },
  {
    src: galleryGobletSquat,
    alt: "Member holding a medicine ball goblet squat",
    label: "Goblet Squat",
  },
  {
    src: galleryBandTraining,
    alt: "Member pulling a resistance band overhead in front of the KINETIX mural",
    label: "Band Training",
  },
  {
    src: galleryDumbbellSquat,
    alt: "Member holding a dual dumbbell rack squat",
    label: "Dumbbell Squat",
  },
  {
    src: galleryFarmersCarry,
    alt: "Member carrying kettlebells across the studio floor",
    label: "Farmer's Carry",
  },
  {
    src: galleryCoreWork,
    alt: "Member holding a plank on a medicine ball in front of the KINETIX mural",
    label: "Core Work",
  },
  {
    src: gallerySandbagCarry,
    alt: "Member carrying a sandbag on the studio floor",
    label: "Sandbag Carry",
  },
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
      "Never done HIIT before this. My coach scaled everything for week one and I still walked out drenched.",
    name: "Prateek M.",
    detail: "Member, 6 months",
  },
];

const faqs = [
  {
    q: "I've never done HIIT before. Will I keep up?",
    a: "Yes. Your coach demos every movement and sets loads and options for your level, so a first session is demanding without being reckless.",
  },
  {
    q: "How long is a session?",
    a: "45 minutes Monday to Friday, 60 minutes on Saturday — introduction, demo, warm-up, workout, finisher and cool-down, every time.",
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

function HeroHeadline() {
  const reduced = useReducedMotion();
  const words = ["NOT", "A", "GYM.", "A", "PERFORMANCE", "COMMUNITY."];
  return (
    <h1 className="display text-[clamp(38px,8vw,80px)]">
      {words.map((w, i) => (
        <motion.span
          key={w + i}
          className={`mr-3 inline-block ${w === "COMMUNITY." ? "text-orange" : ""}`}
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
            <p className="mt-6 max-w-[62ch] text-white/75">
              At Kinetix, every session is designed around HIIT, functional movement, strength,
              conditioning and athletic performance.
            </p>
            <p className="mt-4 max-w-[62ch] text-[19px] font-semibold text-white">
              You don&rsquo;t need to figure out what to do. You show up. We coach you. You put in
              the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrialButton />
              <LinkButton to="/schedule">See timings</LinkButton>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-3 -z-10 rounded-[6px] bg-gradient-to-br from-blue-glow to-orange"
              aria-hidden="true"
            />
            <Photo
              src={heroAthlete}
              alt="Member driving a kettlebell overhead swing during a KINETIX session"
              width={720}
              height={1280}
              ratio="aspect-[4/5]"
              focus="top"
              priority
            />
          </div>
        </div>
      </section>

      <BatchBoard />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="mono-label text-orange">Not a gym. A performance community.</p>
          <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
            Why train at Kinetix
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-navy-line bg-navy-line md:grid-cols-3">
          {differentiators.map((p, i) => (
            <div key={p.name} className="bg-ink p-8">
              <Reveal delay={i * 0.04}>
                <p.Icon
                  size={28}
                  strokeWidth={1.25}
                  className="text-blue-glow"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-[19px] font-semibold leading-snug">{p.name}</h3>
                <p className="mt-2 text-[15px] text-white/65">{p.detail}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-line bg-navy/20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-navy-line px-0 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-ink px-6 py-10">
              <Reveal delay={i * 0.04}>
                <p className="display text-[clamp(32px,6vw,56px)] leading-none">
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

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="mono-label text-blue-glow">Every day</p>
          <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
            A different challenge
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/70">
            HIIT and functional training sit at the centre of the programme — proven formats for
            building strength, conditioning and real-world movement quality, all inside one
            structured session.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {trainingFormats.map((f, i) => (
            <Reveal key={f} delay={i * 0.02}>
              <span className="mono-label inline-block rounded-[2px] border border-navy-line px-4 py-2 text-white/80">
                {f}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-navy-line bg-navy/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">First time here?</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              What happens in a session
            </h2>
            <p className="mt-4 max-w-[56ch] text-white/70">
              Kinetix isn&rsquo;t simply &ldquo;45 minutes of random exercises.&rdquo; Here&rsquo;s
              exactly what happens when you walk in.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-navy-line bg-navy-line sm:grid-cols-2 lg:grid-cols-3">
            {sessionJourney.map((t, i) => (
              <li key={t.name} className="bg-ink p-6">
                <Reveal delay={i * 0.05}>
                  <p className="mono-label text-orange">{t.step}</p>
                  <h3 className="display mt-3 text-[21px]">{t.name}</h3>
                  <p className="mt-2 text-[15px] text-white/70">{t.detail}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mono-label mt-6 text-white/50">
            Then it&rsquo;s high fives all around — every session ends with the group, not just the
            workout.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <Photo
            src={strengthPhoto}
            alt="Member setting up for a coached barbell deadlift"
            width={720}
            height={1280}
            ratio="aspect-[4/5]"
            focus="top"
            className="max-w-sm"
          />
          <p className="mono-label mt-6 text-blue-glow">New to training</p>
          <h2 className="display skew-cut mt-3 text-[28px]">Start strong</h2>
          <p className="mt-4 text-white/75">
            Every session is scalable. Your coach sets loads and movement options for your level, so
            a first week feels demanding without being reckless. No guesswork about what to do next
            — the programme decides, you show up.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <Photo
            src={conditioningPhoto}
            alt="Member driving a rowing machine sprint during a conditioning interval"
            width={448}
            height={737}
            ratio="aspect-[4/5]"
            focus="top"
            className="max-w-sm"
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
        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <Reveal>
            <Photo
              src={communityPhoto}
              alt="Member training in front of the KINETIX studio mural"
              width={720}
              height={1280}
              ratio="aspect-[4/5]"
              focus="top"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Photo
              src={membersPhoto}
              alt="Member in a front-rack barbell squat on the KINETIX studio floor"
              width={602}
              height={732}
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy-line py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-orange">The full gallery</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              More from the floor
            </h2>
            <p className="mt-4 max-w-[62ch] text-white/70">
              Every session, every batch, every rep — shot on the Kukatpally studio floor.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryHighlights.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.04}>
                <Photo
                  src={photo.src}
                  alt={photo.alt}
                  width={720}
                  height={900}
                  ratio="aspect-[4/5]"
                  focus="top"
                />
                <p className="mono-label mt-3 text-white/60">{photo.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <LinkButton to="/gallery">View full gallery</LinkButton>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-line bg-navy/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">Who is Kinetix for?</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              Kinetix is for you if&hellip;
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {whoFor.map((w, i) => (
              <Reveal key={w} delay={i * 0.03}>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-orange"
                    aria-hidden="true"
                  />
                  <span className="text-white/85">{w}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="mono-label text-orange">On the floor</p>
          <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">What members say</h2>
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
      </section>

      <section className="border-y border-navy-line bg-navy/30 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="mono-label text-blue-glow">First time here?</p>
            <h2 className="display skew-cut mt-4 text-[clamp(30px,6vw,52px)]">
              Never done HIIT before? <span className="text-orange">That&rsquo;s okay.</span>
            </h2>
            <p className="mt-5 text-[17px] text-white/85">
              You don&rsquo;t need to be fit before joining Kinetix.
            </p>
            <p className="mt-3 text-[17px] text-white/75">
              Our coaches modify movements, intensity and loads according to your fitness level.
            </p>
            <p className="mt-5 text-[19px] font-semibold text-white">
              You don&rsquo;t compete against the person next to you. You compete against the
              version of yourself that walked through the door yesterday.
            </p>
            <div className="mt-8">
              <TrialButton />
            </div>
          </Reveal>
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
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <LinkButton to="/membership">View all plans</LinkButton>
            <span className="mono-label text-white/50">
              Not sure which option is right for you?
            </span>
            <TrialButton />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="mono-label text-orange">Why Kinetix</p>
          <p className="display mt-4 text-[clamp(26px,5vw,44px)]">
            You don&rsquo;t need another membership.
          </p>
          <div className="mt-6 space-y-1.5 text-[17px] text-ink/70">
            <p>You need a place that makes you show up.</p>
            <p>A place where your coach knows your name.</p>
            <p>Where people notice when you&rsquo;re missing.</p>
            <p>Where workouts challenge you.</p>
            <p>Where progress gets celebrated.</p>
            <p>Where fitness becomes part of your lifestyle.</p>
          </div>
          <p className="display mt-8 text-[28px] text-orange">That&rsquo;s Kinetix.</p>
        </div>
      </section>

      <section className="border-t border-navy-line py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="display text-[clamp(28px,5.5vw,56px)]">
              Ready to experience <span className="text-orange">Kinetix</span>?
            </p>
            <p className="mt-5 text-[16px] text-white/70">
              Don&rsquo;t take our word for it. Come train with us.
            </p>
            <div className="mt-8">
              <TrialButton>Book your trial session</TrialButton>
            </div>
          </Reveal>
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
