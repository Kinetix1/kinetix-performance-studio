import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Plus, Minus } from "lucide-react";
import { plans, inr, inclusionLine, faqs } from "@/lib/plans";
import { site } from "@/lib/site";
import { TrialButton } from "@/components/cta";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/membership")({ component: Membership });

function Membership() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  return (
    <div className="pt-28 lg:pt-36">
      <section className="relative overflow-hidden pb-12">
        <div className="splatter pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5">
          <p className="mono-label text-blue-glow">Membership</p>
          <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,64px)]">
            {site.taglines.commitment}
          </h1>
          <p className="mt-6 max-w-[68ch] text-white/75">
            Every plan is the same training, coached the same way. The longer you commit, the less
            each month costs.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink">
        <div className="mx-auto max-w-6xl px-5">
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-[4px] border border-ink/10 md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">KINETIX membership plans and pricing</caption>
              <thead>
                <tr className="border-b border-ink/10 bg-white">
                  <th scope="col" className="mono-label p-5 text-ink/60">Plan</th>
                  <th scope="col" className="mono-label p-5 text-ink/60">Price</th>
                  <th scope="col" className="mono-label p-5 text-ink/60">Works out to</th>
                  <th scope="col" className="mono-label p-5 text-ink/60">vs monthly</th>
                  <th scope="col" className="mono-label p-5 text-ink/60">Includes</th>
                  <th scope="col" className="mono-label p-5 text-ink/60">
                    <span className="sr-only">Book</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr
                    key={plan.id}
                    className={`border-b border-ink/10 last:border-0 ${plan.recommended ? "bg-orange/8" : "bg-white"}`}
                  >
                    <th scope="row" className="p-5 align-middle">
                      <span className="display text-[21px]">{plan.name}</span>
                      {plan.recommended && (
                        <span className="mono-label ml-3 rounded-[2px] bg-orange px-2 py-1 text-[10px] text-white">
                          Recommended
                        </span>
                      )}
                    </th>
                    <td className="p-5 align-middle">
                      <span className="display text-[28px]">{inr(plan.price)}</span>
                    </td>
                    <td className="mono-label p-5 align-middle text-ink/70">
                      {inr(plan.perMonth)} / MONTH
                    </td>
                    <td className="mono-label p-5 align-middle">
                      {plan.savings ? (
                        <span className="text-orange">
                          SAVE {inr(plan.savings)} ({plan.savingsPercent}%)
                        </span>
                      ) : (
                        <span className="text-ink/40">—</span>
                      )}
                    </td>
                    <td className="p-5 align-middle">
                      <span className="mono-label inline-flex items-center gap-2 text-ink/70">
                        <Check size={14} className="text-blue" aria-hidden="true" /> All training
                      </span>
                    </td>
                    <td className="p-5 align-middle">
                      <TrialButton variant="light">Book trial</TrialButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid gap-4 md:hidden">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-[4px] border bg-white p-5 ${plan.recommended ? "border-orange" : "border-ink/10"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="display text-[21px]">{plan.name}</span>
                  {plan.recommended && (
                    <span className="mono-label rounded-[2px] bg-orange px-2 py-1 text-[10px] text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="display mt-3 text-[40px]">{inr(plan.price)}</p>
                <p className="mono-label mt-2 text-ink/60">{inr(plan.perMonth)} / MONTH</p>
                {plan.savings && (
                  <p className="mono-label mt-2 text-orange">
                    SAVE {inr(plan.savings)} ({plan.savingsPercent}%)
                  </p>
                )}
                <p className="mono-label mt-3 inline-flex items-center gap-2 text-ink/70">
                  <Check size={14} className="text-blue" aria-hidden="true" /> All training
                </p>
                <div className="mt-5">
                  <TrialButton variant="light">Book trial</TrialButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[4px] border border-ink/10 bg-white p-5">
            <p className="mono-label text-ink/70">{inclusionLine}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <p className="mono-label text-blue-glow">Questions</p>
          <h2 className="display skew-cut mt-3 text-[clamp(28px,5vw,40px)]">Before you join</h2>
        </Reveal>
        <div className="mt-8 border-t border-navy-line">
          {faqs.map((f) => {
            const isOpen = open === f.q;
            return (
              <div key={f.q} className="border-b border-navy-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : f.q)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[17px] font-medium">{f.q}</span>
                    {isOpen ? (
                      <Minus size={18} className="shrink-0 text-orange" aria-hidden="true" />
                    ) : (
                      <Plus size={18} className="shrink-0 text-blue-glow" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                {isOpen && (
                  <p className={`pb-5 ${f.todo ? "mono-label text-orange" : "text-white/75"}`}>
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <TrialButton />
        </div>
      </section>
    </div>
  );
}
