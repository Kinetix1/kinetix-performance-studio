import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  formatCountdown,
  getBoardState,
  nowIST,
  type BatchBoardState,
} from "@/lib/schedule";
import { trialLink } from "@/lib/site";

export function BatchBoard() {
  const [state, setState] = useState<BatchBoardState | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const tick = () => setState(getBoardState(nowIST()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.section
      aria-labelledby="batch-board-heading"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: reduced ? 0 : 0.7 }}
      className="border-y border-navy-line bg-navy/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="batch-board-heading" className="mono-label text-blue-glow">
            Today's batch board{state ? ` · ${state.today.shortLabel}` : ""}
          </h2>
          <p className="mono-label text-orange" aria-live="polite">
            {!state
              ? "LOADING…"
              : state.secondsToNext !== null
                ? `NEXT BATCH IN ${formatCountdown(state.secondsToNext)}`
                : state.nextElsewhere
                  ? `${state.today.slots.length === 0 ? "CLOSED SUNDAY" : "DONE FOR TODAY"} — NEXT BATCH ${state.nextElsewhere.dayLabel} ${state.nextElsewhere.slotLabel}`
                  : ""}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {/* Slots row — horizontal scroll */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {state && state.slots.length === 0 && (
              <p className="mono-label self-center py-3 text-white/60">
                No sessions today. We're back on the floor Monday at 6:00 AM.
              </p>
            )}
            {(state?.slots ?? []).map(({ label, state: slotState }) => (
              <a
                key={label}
                href={trialLink(label)}
                target="_blank"
                rel="noreferrer"
                className={`shrink-0 rounded-[2px] border px-4 py-3 transition-colors ${
                  slotState === "past"
                    ? "border-navy-line/70 text-white/45 hover:border-blue-glow hover:text-white/80"
                    : slotState === "in-session"
                      ? "border-blue-glow bg-blue/15 text-white"
                      : slotState === "next"
                        ? "border-orange bg-orange/10 text-white"
                        : "border-navy-line text-white/80 hover:border-blue-glow"
                }`}
              >
                <span className="mono-label block text-[14px]">{label}</span>
                <span className="mono-label mt-1 block text-[10px] text-white/50">
                  {slotState === "in-session"
                    ? "IN SESSION"
                    : slotState === "next"
                      ? "NEXT UP"
                      : slotState === "past"
                        ? "DONE"
                        : "BOOK TRIAL"}
                </span>
              </a>
            ))}
            {!state && (
              <div className="h-[70px] w-64 shrink-0 animate-pulse rounded-[2px] border border-navy-line bg-navy/50" />
            )}
          </div>

          {/* Next batch card — full width on its own row */}
          {state && state.secondsToNext === null && state.nextElsewhere && (
            <a
              href={trialLink(`${state.nextElsewhere.dayLabel} ${state.nextElsewhere.slotLabel}`)}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-between rounded-[2px] border border-orange bg-orange/10 px-4 py-3 text-white transition-colors hover:bg-orange/20"
            >
              <span>
                <span className="mono-label block text-[10px] text-orange">NEXT BATCH</span>
                <span className="mono-label mt-1 block text-[14px]">
                  {state.nextElsewhere.dayLabel} {state.nextElsewhere.slotLabel}
                </span>
              </span>
              <span className="mono-label text-[10px] text-white/70">BOOK TRIAL →</span>
            </a>
          )}
        </div>

      </div>
    </motion.section>
  );
}
