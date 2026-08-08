import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trialLink } from "@/lib/site";

type Props = {
  children: ReactNode;
  variant?: "solid" | "ghost" | "light" | undefined;
  className?: string | undefined;
};


const base =
  "group inline-flex items-center justify-center gap-2 rounded-[2px] px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:translate-x-[2px] hover:-translate-y-[1px]";

const variants = {
  solid: "bg-orange text-white hover:bg-amber",
  ghost: "border border-blue text-white hover:border-blue-glow hover:bg-blue/10",
  light: "border border-ink/15 text-ink hover:border-orange hover:text-orange",
};

export function CTA({ children, variant = "solid", className }: Props) {
  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}

export function TrialButton({
  slotLabel,
  variant = "solid",
  className,
  children = "Book a free trial",
}: {
  slotLabel?: string;
  variant?: Props["variant"];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={trialLink(slotLabel)} target="_blank" rel="noreferrer" className="inline-block">
      <CTA variant={variant} className={className}>
        {children}
      </CTA>
    </a>
  );
}

export function LinkButton({
  to,
  children,
  variant = "ghost",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: Props["variant"];
  className?: string;
}) {
  return (
    <Link to={to} className="inline-block">
      <CTA variant={variant} className={className}>
        {children}
      </CTA>
    </Link>
  );
}
