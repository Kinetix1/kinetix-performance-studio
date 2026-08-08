import { createFileRoute } from "@tanstack/react-router";
import { Atom, Dumbbell, Footprints } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/cta";
import { Photo } from "@/components/photo";
import studioFloor from "@/assets/studio-floor.jpg";

export const Route = createFileRoute("/about")({ component: About });

const pillars = [
  {
    name: "Science Guided",
    line: "Every workout is designed with purpose.",
    body: "Programming is science-backed and written before the doors open. Nothing is improvised on the floor, which is why a session never turns into wandering between machines.",
    Icon: Atom,
    color: "text-blue-glow",
  },
  {
    name: "Strength Built",
    line: "Build strength that transforms your life.",
    body: "Strength sits at the centre of every session, then conditioning and functional work are built around it. The result carries beyond the studio.",
    Icon: Dumbbell,
    color: "text-blue",
  },
  {
    name: "Performance Driven",
    line: "Move better. Perform better. Live better.",
    body: "Expert coaching holds the standard, and a community keeps consistency high — the part most training plans quietly depend on.",
    Icon: Footprints,
    color: "text-orange",
  },
];

function About() {
  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <p className="mono-label text-blue-glow">{site.lockupLine}</p>
        <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,64px)]">
          A studio built to remove the guesswork
        </h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-[68ch] space-y-5 text-white/80">
            <p>
              KINETIX Performance Studio is a results-driven fitness and performance studio in
              Kukatpally, Hyderabad. We run structured, high-energy group training on science-backed
              programming — efficient 45-minute workouts that combine strength, conditioning and
              functional training.
            </p>
            <p>
              There is no guesswork here. A proven system decides the session, expert coaching runs
              it, and a community keeps consistency high week after week.
            </p>
            <p>
              Every session is scalable for every level, so beginners start strong and experienced
              members push their limits — in the same room, on the same plan, at their own loads.
            </p>
          </div>
          <Photo
            src={studioFloor}
            alt="Racks, turf lane and kettlebells on the KINETIX studio floor"
            width={1600}
            height={1008}
            ratio="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="border-t border-navy-line py-16">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[4px] border border-navy-line bg-navy-line px-0 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.name} className="bg-ink p-8">
              <Reveal delay={i * 0.05}>
                <p.Icon size={28} strokeWidth={1.25} className={p.color} aria-hidden="true" />
                <p className="mono-label mt-5 text-white/60">{p.name}</p>
                <h2 className="mt-2 text-[21px] leading-snug">{p.line}</h2>
                <p className="mt-3 text-[15px] text-white/70">{p.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <p className="mono-label text-blue-glow">Coaching team</p>
          <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">A team that holds the standard</h2>
          <p className="mt-4 max-w-[62ch] text-white/70">
            Every session is run by coaches who know the programme, watch every rep and keep the
            room honest. The standard doesn't drop because the team doesn't let it.
          </p>
        </Reveal>
      </section>

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="display text-[clamp(28px,5.5vw,64px)]">
            Stronger body. Stronger mind. <span className="text-orange">Stronger you.</span>
          </p>
          <div className="mt-8">
            <TrialButton variant="light" />
          </div>
        </div>
      </section>
    </div>
  );
}
