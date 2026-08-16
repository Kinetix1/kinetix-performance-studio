import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/cta";
import { Photo } from "@/components/photo";
import strengthPhoto from "@/assets/gallery/member-barbell-deadlift-female.jpg";
import conditioningPhoto from "@/assets/gallery/member-lunge-with-weight.jpg";
import kettlebellPhoto from "@/assets/gallery/member-kettlebell-floor-setup.webp";
import circuitPhoto from "@/assets/gallery/member-barbell-deadlift-pull.jpg";
import { trainingFormats } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: "Programs — KINETIX Performance Studio" },
      {
        name: "description",
        content:
          "HIIT, functional training, strength and conditioning programs at KINETIX Performance Studio in Kukatpally, Hyderabad — coached, structured and suitable for all levels.",
      },
    ],
  }),
});

const programs = [
  {
    photo: strengthPhoto,
    photoAlt: "Member setting up for a coached barbell deadlift",
    photoWidth: 720,
    photoHeight: 1280,
    photoRatio: "aspect-[4/5]",
    name: "POWER HOUSE",
    tagline: "Functional strength and resistance.",
    days: "Monday · Wednesday · Friday",
    what: "Progressive resistance and functional strength work — squats, hinges, presses and carries — with loads set by your coach.",
    does: "Builds strength that transforms your life — the kind that carries into work, travel and everything you do outside the studio.",
    coached:
      "The lift order, load and rest are decided before you walk in. No guesswork on the floor, and every movement is demoed first.",
  },
  {
    photo: conditioningPhoto,
    photoAlt: "Member rowing a resistance band during a conditioning interval",
    photoWidth: 720,
    photoHeight: 1280,
    photoRatio: "aspect-[4/5]",
    name: "VELOCITY",
    tagline: "High-intensity conditioning.",
    days: "Thursday",
    what: "HIIT and conditioning intervals that build engine, work capacity and endurance at a controlled, coached effort.",
    does: "Improves how well you keep moving — better cardiovascular fitness and stamina across a long day, not just inside a session.",
    coached:
      "Scalable for every level. Beginners run a version they can finish; experienced members run one that pushes their limits.",
  },
  {
    photo: kettlebellPhoto,
    photoAlt: "Member swinging a kettlebell during functional training",
    photoWidth: 720,
    photoHeight: 1280,
    photoRatio: "aspect-[4/5]",
    name: "OVERDRIVE",
    tagline: "Push your cardiovascular capacity.",
    days: "Tuesday · Saturday",
    what: "Strength and conditioning combined in the same session — the format built to push your engine while your form still holds under fatigue.",
    does: "Move better, perform better, live better. The kind of capacity that shows up in races, sport and ordinary hard days.",
    coached:
      "Coached with the same science-backed programming as the rest of the week, with regressions and progressions ready.",
  },
  {
    photo: circuitPhoto,
    photoAlt: "Member training a plank circuit with medicine balls on the KINETIX studio floor",
    photoWidth: 720,
    photoHeight: 1280,
    photoRatio: "aspect-[4/5]",
    name: "HIGHLIGHT",
    tagline: "A full-body super circuit.",
    days: "Tuesday · Saturday",
    what: "A structured circuit that closes out the hybrid session — everyone on the same plan, working at their own loads.",
    does: "A community that keeps consistency high — the single biggest factor in whether training actually works.",
    coached:
      "A proven system and expert coaching, so the room stays high-energy and the standards stay honest.",
  },
];

function Programs() {
  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <p className="mono-label text-blue-glow">Not a gym. A performance community.</p>
        <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,64px)]">
          Every day, a different challenge.
        </h1>
        <p className="mt-6 max-w-[68ch] text-white/75">
          HIIT and functional training sit at the centre of everything we run — proven formats for
          building strength, conditioning and real-world movement quality. Every session is
          structured, coached and suitable for all levels.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {trainingFormats.map((f) => (
            <span
              key={f}
              className="mono-label inline-block rounded-[2px] border border-navy-line px-4 py-2 text-white/80"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.04}>
            <section className="grid gap-8 border-t border-navy-line py-12 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="mono-label text-orange">{p.tagline}</p>
                <h2 className="display skew-cut mt-2 text-[28px]">{p.name}</h2>
                <Photo
                  src={p.photo}
                  alt={p.photoAlt}
                  width={p.photoWidth}
                  height={p.photoHeight}
                  ratio={p.photoRatio}
                  focus="top"
                  className="mt-6 max-w-sm"
                />
              </div>
              <dl className="space-y-6">
                <div>
                  <dt className="mono-label text-blue-glow">Runs on</dt>
                  <dd className="mt-2 text-white/80">{p.days}</dd>
                </div>
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
