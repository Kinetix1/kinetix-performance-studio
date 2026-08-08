import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import mark from "@/assets/kinetix-mark.svg";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy-line bg-navy/20 pb-24 pt-16 lg:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={mark} alt={`${site.name} mark`} width={169} height={100} className="h-14 w-auto" />
          <p className="mono-label mt-4 text-blue-glow">{site.lockupLine}</p>
        </div>

        <nav aria-label="Footer">
          <p className="mono-label text-white/50">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-[15px] text-white/75 hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mono-label text-white/50">Contact</p>
          <ul className="mt-4 space-y-2 text-[15px] text-white/75">
            <li>
              <a href={site.phoneHref} className="hover:text-orange">{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-orange">{site.email}</a>
            </li>
            <li>{site.address.full}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="KINETIX on Facebook"
              className="rounded-[2px] border border-navy-line p-2 hover:border-blue-glow"
            >
              <Facebook size={16} />
            </a>
            {/* TODO: replace "#" with the real Instagram URL — client supplied a Facebook link by mistake. */}
            <a
              href={site.socials.instagram}
              aria-label="KINETIX on Instagram (link pending)"
              className="rounded-[2px] border border-navy-line p-2 hover:border-blue-glow"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="mono-label text-white/50">Floor hours</p>
          <ul className="mono-label mt-4 space-y-2 text-white/75">
            {site.floorHours.map((h) => (
              <li key={h.days}>
                {h.days}
                <br />
                <span className="text-white/50">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-navy-line px-5 pt-6">
        <p className="mono-label text-white/40">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
