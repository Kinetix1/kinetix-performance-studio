export type Slot = { hour: number; minute: number };

export type DaySchedule = {
  /** 0 = Sunday .. 6 = Saturday */
  day: number;
  label: string;
  shortLabel: string;
  slots: Slot[];
};

export const SESSION_MINUTES = 45;

const weekday: Slot[] = [
  { hour: 6, minute: 0 },
  { hour: 7, minute: 0 },
  { hour: 8, minute: 0 },
  { hour: 9, minute: 0 },
  { hour: 17, minute: 0 },
  { hour: 18, minute: 0 },
  { hour: 19, minute: 0 },
];

export const schedule: DaySchedule[] = [
  { day: 0, label: "Sunday", shortLabel: "SUN", slots: [] },
  { day: 1, label: "Monday", shortLabel: "MON", slots: weekday },
  { day: 2, label: "Tuesday", shortLabel: "TUE", slots: weekday },
  { day: 3, label: "Wednesday", shortLabel: "WED", slots: weekday },
  { day: 4, label: "Thursday", shortLabel: "THU", slots: weekday },
  { day: 5, label: "Friday", shortLabel: "FRI", slots: weekday },
  {
    day: 6,
    label: "Saturday",
    shortLabel: "SAT",
    slots: [
      { hour: 6, minute: 0 },
      { hour: 7, minute: 30 },
      { hour: 9, minute: 0 },
    ],
  },
];

export function formatSlot(slot: Slot) {
  const suffix = slot.hour < 12 ? "AM" : "PM";
  const h = slot.hour % 12 === 0 ? 12 : slot.hour % 12;
  return `${h}:${String(slot.minute).padStart(2, "0")} ${suffix}`;
}

/** Current wall-clock time in IST, regardless of visitor timezone. */
export function nowIST(from: Date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(from);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const hour = Number(get("hour")) % 24;
  return {
    day: dayMap[get("weekday")] ?? 0,
    hour,
    minute: Number(get("minute")),
    second: Number(get("second")),
    minutesOfDay: hour * 60 + Number(get("minute")),
  };
}

export function slotMinutes(slot: Slot) {
  return slot.hour * 60 + slot.minute;
}

export type SlotState = "past" | "in-session" | "next" | "upcoming";

export type BatchBoardState = {
  today: DaySchedule;
  slots: { slot: Slot; label: string; state: SlotState }[];
  /** Seconds until the next batch starts, null when none today. */
  secondsToNext: number | null;
  /** Set when the studio is closed today or all batches are done. */
  nextElsewhere: { dayLabel: string; slotLabel: string } | null;
};

export function getBoardState(now = nowIST()): BatchBoardState {
  const today = schedule[now.day]!;
  let nextIndex = -1;
  const slots = today.slots.map((slot, i) => {
    const start = slotMinutes(slot);
    const end = start + SESSION_MINUTES;
    let state: SlotState = "upcoming";
    if (now.minutesOfDay >= end) state = "past";
    else if (now.minutesOfDay >= start) state = "in-session";
    else if (nextIndex === -1) {
      state = "next";
      nextIndex = i;
    }
    return { slot, label: formatSlot(slot), state };
  });

  let secondsToNext: number | null = null;
  if (nextIndex >= 0) {
    const start = slotMinutes(today.slots[nextIndex]!);
    secondsToNext = (start - now.minutesOfDay) * 60 - now.second;
  }

  let nextElsewhere: BatchBoardState["nextElsewhere"] = null;
  if (nextIndex === -1) {
    for (let step = 1; step <= 7; step++) {
      const d = schedule[(now.day + step) % 7]!;
      if (d.slots.length) {
        nextElsewhere = {
          dayLabel: d.shortLabel,
          slotLabel: formatSlot(d.slots[0]!),
        };
        break;
      }
    }
  }

  return { today, slots, secondsToNext, nextElsewhere };
}

export function formatCountdown(totalSeconds: number) {
  const s = Math.max(0, totalSeconds);
  const hh = Math.floor(s / 3600);
  const mm = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  return [hh, mm, ss].map((n) => String(n).padStart(2, "0")).join(":");
}
