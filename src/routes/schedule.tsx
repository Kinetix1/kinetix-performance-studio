import { createFileRoute } from "@tanstack/react-router";
import { Clock, Sun, Sunset, CalendarDays, MessageCircle } from "lucide-react";
import { schedule, formatSlot } from "@/lib/schedule";
import { trialLink } from "@/lib/site";
import { TrialButton } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { BatchBoard } from "@/components/batch-board";

export const Route = createFileRoute("/schedule")({ component: SchedulePage });

const timeline = [
  { range: "0–8", name: "Prep", detail: "Mobility and activation before load." },
  { range: "8–25", name: "Strength", detail: "Progressive lifts at your coached load." },
  { range: "25–40", name: "Conditioning", detail: "Intervals and circuits at controlled effort." },
  { range: "40–45", name: "Reset", detail: "Cooldown and breathing to close the session." },
];

function SchedulePage() {
  const days = [...schedule.slice(1), schedule[0]!];
  const weekdays = days.filter((d) => d.slots.length > 0 && d.day !== 6 && d.day !== 0);
  const saturday = days.find((d) => d.day === 6)!;
  const sunday = days.find((d) => d.day === 0)!;

  const amSlots = (weekdays[0]?.slots ?? []).filter((s) => s.hour < 12);
  const pmSlots = (weekdays[0]?.slots ?? []).filter((s) => s.hour >= 12);

  return (
    <div className="pt-28 lg:pt-36">

      {/* Hero */}
      <section className="relative overflow-hidden pb-14">
        <div className="splatter pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">Schedule</p>
            <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,72px)]">
              Find your batch.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[17px] text-white/70">
              Six days a week. Morning and evening slots. Every session is 45 minutes — structured,
              coached and ready to go the moment you walk in.
            </p>
          </Reveal>

          {/* Quick stats */}
          <Reveal delay={0.08}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-navy-line bg-navy-line sm:grid-cols-4">
              {[
                { value: "45", unit: "MIN", label: "Every session" },
                { value: "7", unit: "SLOTS", label: "Mon – Fri daily" },
                { value: "3", unit: "SLOTS", label: "Saturday" },
                { value: "6", unit: "AM", label: "First batch" },
              ].map((s) => (
                <div key={s.label} className="bg-ink px-6 py-6">
                  <p className="display text-[clamp(32px,5vw,48px)] leading-none">
                    {s.value}
                    <span className="mono-label ml-1 align-super text-[11px] text-orange">{s.unit}</span>
                  </p>
                  <p className="mt-2 text-[13px] text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live batch board */}
      <BatchBoard />

      {/* Full week grid */}
      <section className="border-t border-navy-line bg-navy/20 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">Weekly timetable</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">Every slot, every day</h2>
            <p className="mt-3 text-[15px] text-white/60">
              Tap any slot to open WhatsApp with that batch pre-filled.
            </p>
          </Reveal>

          {/* Mon–Fri */}
          <div className="mt-10 overflow-hidden rounded-[4px] border border-navy-line">
            <div className="grid grid-cols-[auto_1fr_1fr] border-b border-navy-line bg-navy/40">
              <div className="px-5 py-3" />
              <div className="flex items-center gap-2 border-l border-navy-line px-5 py-3">
                <Sun size={14} className="text-orange" />
                <span className="mono-label text-white/60">Morning</span>
              </div>
              <div className="flex items-center gap-2 border-l border-navy-line px-5 py-3">
                <Sunset size={14} className="text-blue-glow" />
                <span className="mono-label text-white/60">Evening</span>
              </div>
            </div>
            {weekdays.map((day, i) => (
              <Reveal key={day.label} delay={i * 0.03}>
                <div className={`grid grid-cols-[auto_1fr_1fr] ${i < weekdays.length - 1 ? "border-b border-navy-line" : ""}`}>
                  <div className="flex min-w-[80px] items-center px-5 py-4">
                    <span className="mono-label text-white/80">{day.shortLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 border-l border-navy-line px-4 py-4">
                    {amSlots.map((slot) => {
                      const label = formatSlot(slot);
                      return (
                        <a
                          key={label}
                          href={trialLink(label)}
                          target="_blank"
                          rel="noreferrer"
                          className="mono-label rounded-[2px] border border-navy-line px-3 py-2 text-[12px] text-white/80 transition-colors hover:border-orange hover:text-orange"
                        >
                          {label}
                        </a>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-2 border-l border-navy-line px-4 py-4">
                    {pmSlots.map((slot) => {
                      const label = formatSlot(slot);
                      return (
                        <a
                          key={label}
                          href={trialLink(label)}
                          target="_blank"
                          rel="noreferrer"
                          className="mono-label rounded-[2px] border border-navy-line px-3 py-2 text-[12px] text-white/80 transition-colors hover:border-blue-glow hover:text-blue-glow"
                        >
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Saturday + Sunday */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-[4px] border border-navy-line p-5">
                <div className="flex items-center gap-2">
                  <CalendarDays size={14} className="text-orange" />
                  <p className="mono-label text-white/70">Saturday</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {saturday.slots.map((slot) => {
                    const label = formatSlot(slot);
                    return (
                      <a
                        key={label}
                        href={trialLink(label)}
                        target="_blank"
                        rel="noreferrer"
                        className="mono-label rounded-[2px] border border-navy-line px-3 py-2 text-[12px] text-white/80 transition-colors hover:border-orange hover:text-orange"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.04}>
              <div className="flex h-full items-center rounded-[4px] border border-navy-line p-5">
                <div>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} className="text-white/30" />
                    <p className="mono-label text-white/40">Sunday</p>
                  </div>
                  <p className="mono-label mt-3 text-[18px] text-white/30">Closed</p>
                  <p className="mt-1 text-[13px] text-white/40">Rest day. Back on the floor Monday 6 AM.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Session breakdown */}
      <section className="border-t border-navy-line py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-orange">Inside a session</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">
              45 minutes, fully accounted for
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-[4px] border border-navy-line bg-navy-line sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <li key={t.name} className="bg-ink p-6">
                <Reveal delay={i * 0.05}>
                  <p className="mono-label text-orange">{t.range} MIN</p>
                  <h3 className="display mt-3 text-[21px]">{t.name}</h3>
                  <p className="mt-2 text-[14px] text-white/65">{t.detail}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to know */}
      <section className="border-t border-navy-line bg-navy/20 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="mono-label text-blue-glow">Before you come in</p>
            <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">Good to know</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Arrive 10 minutes early",
                body: "For your first session, come in 10 minutes before the batch starts so your coach can set your loads.",
              },
              {
                icon: MessageCircle,
                title: "Book on WhatsApp",
                body: "Tap any slot above or message us directly. We'll confirm your spot and tell you what to bring.",
              },
              {
                icon: Sun,
                title: "What to bring",
                body: "Training shoes, a towel and a water bottle. Bars, bells, rowers and ropes are all on the floor.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-[4px] border border-navy-line bg-ink p-6">
                  <item.icon size={22} strokeWidth={1.25} className="text-blue-glow" />
                  <h3 className="mt-4 text-[17px] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[14px] text-white/65">{item.body}</p>
                </div>
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
              Pick a slot. <span className="text-orange">We'll hold it.</span>
            </p>
            <p className="mt-5 text-[16px] text-ink/65">
              Every timing above opens WhatsApp with the batch already filled in. First session is free.
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
