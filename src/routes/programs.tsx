import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { TrialButton } from "@/components/cta";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: "Programs — KINETIX Performance Studio" },
      {
        name: "description",
        content:
          "KINETIX Weekly Workout Library — Strength, Hybrid and Cardio training every week in Kukatpally, Hyderabad.",
      },
    ],
  }),
});

const weeklyRhythm = [
  { day: "MON", label: "Build Strength", type: "strength" },
  { day: "TUE", label: "Mix It Up", type: "hybrid" },
  { day: "WED", label: "Train Your Strength", type: "strength" },
  { day: "THU", label: "Power Your Engine", type: "cardio" },
  { day: "FRI", label: "Get Stronger", type: "strength" },
  { day: "SAT", label: "Bring It All Together", type: "hybrid" },
  { day: "SUN", label: "Rest", type: "rest" },
];

const typeColor: Record<string, string> = {
  strength: "border-blue-glow text-blue-glow",
  hybrid: "border-orange text-orange",
  cardio: "border-amber text-amber",
  rest: "border-navy-line text-white/30",
};

const typeBg: Record<string, string> = {
  strength: "bg-blue/10",
  hybrid: "bg-orange/10",
  cardio: "bg-amber/10",
  rest: "bg-transparent",
};

const strengthWorkouts = [
  { name: "POWER HOUSE", desc: "A functional strength workout focused on muscle overload and total-body strength through upper- and lower-body resistance training." },
  { name: "SUMMIT", desc: "A functional resistance circuit designed to build strength and endurance through progressive work and a challenging finish." },
  { name: "PICK YOUR GRIND", desc: "A strength workout that gives you the freedom to choose between upper- or lower-body movements at every station." },
  { name: "SELECT", desc: "Choose your focus at every station — upper or lower body — and build strength your way." },
  { name: "LIFT", desc: "Back to basics with fundamental compound movements, partnered training, and a strong group workout experience." },
  { name: "HUSTLE", desc: "A focused strength workout split into upper body, lower body, and core to build strength, stability, and power." },
  { name: "DOWNSHIFT", desc: "A resistance workout where you select your movement focus while the work intervals progressively step down." },
  { name: "HIRT LAPS", desc: "A high-intensity resistance workout combining high-volume training with repeated laps to challenge strength and muscular endurance." },
  { name: "RELOAD", desc: "A split strength session focused on upper and lower body, designed to rebuild, reset, and come back stronger." },
  { name: "SWITCH", desc: "A versatile strength workout that lets you switch your focus between upper- and lower-body training." },
  { name: "OVERLOAD", desc: "A high-volume resistance workout designed to push muscles through fatigue and challenge muscular endurance." },
  { name: "FLEX", desc: "A strength session where every station gives you the choice of upper or lower body — your workout, your choice." },
  { name: "FORGE", desc: "A focused resistance session combining functional and compound lifting to build total-body strength and confidence." },
];

const hybridWorkouts = [
  { name: "MOVE", desc: "A little bit of everything — cardio, strength, resistance, and conditioning in one complete workout." },
  { name: "WHIRLWIND", desc: "A fast-moving super circuit blending strength, plyometrics, agility, and HIIT for total-body conditioning." },
  { name: "SATURDAYS", desc: "A fun, sweaty weekend workout mixing weights, bodyweight training, and cardio in a high-energy group environment." },
  { name: "CATALYST", desc: "A challenging hybrid circuit combining alternating cardio and resistance work for a complete total-body workout." },
  { name: "FIFTY FIFTY", desc: "A balanced hybrid workout combining cardio and resistance to build both cardiovascular and muscular endurance." },
  { name: "ENDGAME", desc: "A Saturday super circuit featuring multiple training styles and challenges designed to test fitness, teamwork, and endurance." },
  { name: "NEXUS", desc: "Three training styles come together: cardio to challenge your engine, strength to build power, and an AMRAP ladder to test endurance." },
  { name: "HIGHLIGHT", desc: "A high-energy super circuit blending strength, plyometrics, agility, and HIIT to maximise stamina and total-body conditioning." },
];

const cardioWorkouts = [
  { name: "ATHLETICUS", desc: "A high-repetition cardio interval workout designed to improve aerobic capacity, endurance, and overall athletic conditioning." },
  { name: "ALL YOU", desc: "An equipment-free HIIT workout using functional bodyweight movements to improve mobility, control, and total-body conditioning." },
  { name: "ENGINE 20:10", desc: "A fast-paced Tabata-style workout using intense work intervals and short recovery periods to challenge your engine." },
  { name: "OVERDRIVE", desc: "A high-intensity cardio session with longer work intervals and short recoveries designed to push stamina and endurance." },
  { name: "VOLT", desc: "A high-energy cardio workout built to raise your heart rate, challenge your stamina, and keep you moving from start to finish." },
  { name: "RALLY", desc: "A fast-paced cardio format built around repeated sets and sustained effort — reset briefly, then rally and go again." },
];

function WorkoutCard({ name, desc, accent }: { name: string; desc: string; accent: string }) {
  return (
    <div className="rounded-[4px] border border-navy-line bg-ink p-5">
      <p className={`mono-label text-[13px] ${accent}`}>{name}</p>
      <p className="mt-2 text-[14px] leading-relaxed text-white/65">{desc}</p>
    </div>
  );
}

function Programs() {
  return (
    <div className="pt-28 lg:pt-36">

      {/* Hero */}
      <section className="relative overflow-hidden pb-14">
        <div className="splatter pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">KINETIX Workouts</p>
            <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,72px)]">
              One Week. Six Days. Endless Ways to Get Fitter.
            </h1>
            <p className="mt-5 max-w-[68ch] text-[17px] text-white/70">
              At Kinetix, no two training days feel the same. Our weekly programming combines
              strength training, cardio, and hybrid workouts to help you build strength, improve
              endurance, boost fitness, and move better in everyday life.
            </p>
            <p className="mt-4 max-w-[68ch] text-[17px] text-white/55">
              Every workout has its own format, purpose, and challenge — so while your training
              stays structured, it never gets boring.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Weekly rhythm */}
      <section className="border-t border-navy-line bg-navy/20 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-orange">The weekly rhythm</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              Weekly Training Schedule
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {weeklyRhythm.map((d, i) => (
              <Reveal key={d.day} delay={i * 0.04}>
                <div className={`rounded-[4px] border p-4 ${typeColor[d.type]} ${d.type !== "rest" ? typeBg[d.type] : "border-navy-line"}`}>
                  <p className={`mono-label text-[11px] ${d.type === "rest" ? "text-white/30" : ""}`}>{d.day}</p>
                  <p className={`mt-2 text-[13px] font-semibold leading-snug ${d.type === "rest" ? "text-white/25" : "text-white"}`}>{d.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Legend */}
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { label: "Strength Training", type: "strength" },
                { label: "Hybrid Training", type: "hybrid" },
                { label: "Cardio Training", type: "cardio" },
              ].map((l) => (
                <span key={l.label} className={`mono-label inline-flex items-center gap-2 text-[11px] ${typeColor[l.type]}`}>
                  <span className={`inline-block h-2 w-2 rounded-full ${l.type === "strength" ? "bg-blue-glow" : l.type === "hybrid" ? "bg-orange" : "bg-amber"}`} />
                  {l.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strength Training */}
      <section className="border-t border-navy-line py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="mono-label rounded-[2px] border border-blue-glow bg-blue/10 px-3 py-1 text-blue-glow">Strength Training</span>
              <span className="mono-label text-white/50">Monday · Wednesday · Friday</span>
            </div>
            <h2 className="display skew-cut mt-4 text-[clamp(28px,5vw,40px)]">Build functional strength.</h2>
            <p className="mt-3 max-w-[62ch] text-[15px] text-white/65">
              Focused on building functional strength, muscular endurance, stability, and overall performance.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {strengthWorkouts.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.03}>
                <WorkoutCard name={w.name} desc={w.desc} accent="text-blue-glow" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Training */}
      <section className="border-t border-navy-line bg-navy/20 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="mono-label rounded-[2px] border border-orange bg-orange/10 px-3 py-1 text-orange">Hybrid Training</span>
              <span className="mono-label text-white/50">Tuesday · Saturday</span>
            </div>
            <h2 className="display skew-cut mt-4 text-[clamp(28px,5vw,40px)]">Mix it all up.</h2>
            <p className="mt-3 max-w-[62ch] text-[15px] text-white/65">
              A dynamic combination of cardio, strength, resistance, agility, plyometrics, and conditioning.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hybridWorkouts.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.03}>
                <WorkoutCard name={w.name} desc={w.desc} accent="text-orange" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cardio Training */}
      <section className="border-t border-navy-line py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="mono-label rounded-[2px] border border-amber bg-amber/10 px-3 py-1 text-amber">Cardio Training</span>
              <span className="mono-label text-white/50">Thursday</span>
            </div>
            <h2 className="display skew-cut mt-4 text-[clamp(28px,5vw,40px)]">Power your engine.</h2>
            <p className="mt-3 max-w-[62ch] text-[15px] text-white/65">
              High-energy workouts designed to improve cardiovascular fitness, endurance, stamina, speed, and conditioning.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cardioWorkouts.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.03}>
                <WorkoutCard name={w.name} desc={w.desc} accent="text-amber" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <p className="display text-[clamp(28px,5.5vw,56px)]">
              Ready to train? <span className="text-orange">First session is free.</span>
            </p>
            <p className="mt-5 text-[16px] text-ink/65">
              Pick any batch, any day. Your coach handles the rest.
            </p>
            <div className="mt-8">
              <TrialButton variant="light" />
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
