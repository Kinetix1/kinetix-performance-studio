import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import mark from "@/assets/kinetix-lockup.png";
import { nav, site, trialLink } from "@/lib/site";
import { CTA } from "@/components/cta";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper text-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5">
        <Link to="/" className="flex items-center" aria-label={`${site.name} home`}>
          <img
            src={mark}
            alt={`${site.name} logo`}
            width={1214}
            height={1050}
            className="h-20 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="mono-label text-ink/70 transition-colors hover:text-blue"
              activeProps={{ className: "mono-label text-orange" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a href={trialLink()} target="_blank" rel="noreferrer">
            <CTA>Book a free trial</CTA>
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-[2px] border border-ink/15 p-2 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-ink/10 bg-paper px-5 pb-6 pt-4 lg:hidden"
        >
          <ul className="space-y-4">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="mono-label block text-ink/80"
                  activeProps={{ className: "mono-label block text-orange" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={trialLink()} target="_blank" rel="noreferrer" className="mt-6 block">
            <CTA className="w-full">Book a free trial</CTA>
          </a>
        </nav>
      )}
    </header>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy-line bg-ink lg:hidden">
      <a
        href={site.phoneHref}
        className="mono-label flex items-center justify-center gap-2 py-4 text-white"
      >
        <Phone size={16} /> Call
      </a>
      <a
        href={trialLink()}
        target="_blank"
        rel="noreferrer"
        className="mono-label flex items-center justify-center gap-2 bg-orange py-4 text-white"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  );
}
