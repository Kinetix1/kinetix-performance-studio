import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/cta";
import { Photo } from "@/components/photo";
import strengthPhoto from "@/assets/strength.jpg";
import conditioningPhoto from "@/assets/conditioning.jpg";
import heroAthlete from "@/assets/hero-athlete.jpg";
import studioFloor from "@/assets/studio-floor.jpg";

export const Route = createFileRoute("/programs")({ component: Programs });

const programs = [
  {
    photo: strengthPhoto,
    photoAlt: "Coached barbell strength work in the studio",
    name: "Strength",
    what: "Progressive resistance work built into the middle block of every session, with loads set by your coach.",
    does: "Builds strength that transforms your life — the kind that carries into work, travel and everything you do outside the studio.",
    coached: "Every workout is designed with purpose: the lift order, the load and the rest are decided before you walk in. No guesswork on the floor.",
  },
  {
    photo: conditioningPhoto,
    photoAlt: "Conditioning intervals on ropes and rower",
    name: "Conditioning",
    what: "Interval work and circuits that follow the strength block, at a controlled, coached effort.",
    does: "Improves how well you keep moving — better work capacity across a long day, not just inside a session.",
    coached: "Scalable for every level. Beginners run a version they can finish; experienced members run one that pushes their limits.",
  },
  {
    photo: heroAthlete,
    photoAlt: "Kettlebell swing during functional training",
    name: "Functional training",
    what: "Movement patterns that mirror real life — carrying, hinging, pushing, pulling, bracing.",
    does: "Move better, perform better, live better. Strength that shows up in how you handle ordinary days.",
    coached: "Coached with the same science-backed programming as the rest of the session, with regressions and progressions ready.",
  },
  {
    photo: studioFloor,
    photoAlt: "The KINETIX studio floor set up for a group session",
    name: "Group format",
    what: "45 minutes, one structured session, everyone on the same plan with their own loads.",
    does: "A community that keeps consistency high — the single biggest factor in whether training works.",
    coached: "A proven system and expert coaching, so the room stays high-energy and the standards stay honest.",
  },
];

function Programs() {
  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <p className="mono-label text-blue-glow">Programs</p>
        <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,64px)]">
          One session. Four things done properly.
        </h1>
        <p className="mt-6 max-w-[68ch] text-white/75">
          Strength, conditioning and functional training are combined into every 45-minute group
          session — structured, high-energy and science-backed, with no guesswork about what comes
          next.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.04}>
            <section className="grid gap-8 border-t border-navy-line py-12 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 className="display skew-cut text-[28px]">{p.name}</h2>
                <Photo
                  src={p.photo}
                  alt={p.photoAlt}
                  width={1200}
                  height={912}
                  ratio="aspect-[4/3]"
                  className="mt-6"
                />
              </div>
              <dl className="space-y-6">
                <div>
                  <dt className="mono-label text-blue-glow">What it is</dt>
                  <dd className="mt-2 text-white/80">{p.what}</dd>
                </div>
                <div>
                  <dt className="mono-label text-blue-glow">What it does for you</dt>
                  <dd className="mt-2 text-white/80">{p.does}</dd>
                </div>
                <div>
                  <dt className="mono-label text-orange">How it's coached</dt>
                  <dd className="mt-2 text-white/80">{p.coached}</dd>
                </div>
              </dl>
            </section>
          </Reveal>
        ))}
        <div className="border-t border-navy-line pt-12">
          <TrialButton />
        </div>
      </div>
    </div>
  );
}
