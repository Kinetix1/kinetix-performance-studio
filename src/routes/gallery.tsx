import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { TrialButton } from "@/components/cta";
import { galleryPhotos } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({ component: Gallery });

function Gallery() {
  return (
    <div className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <p className="mono-label text-blue-glow">Not a gym. A performance community.</p>
        <h1 className="display skew-cut mt-4 text-[clamp(40px,8vw,64px)]">
          Every session, every batch, every rep.
        </h1>
        <p className="mt-6 max-w-[68ch] text-white/75">
          Shot inside the Kukatpally studio — real members training real programming, on the same
          floor and in the same batches you&rsquo;ll join.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {galleryPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 8) * 0.03}>
              <Photo
                src={photo.src}
                alt={photo.alt}
                width={720}
                height={900}
                ratio="aspect-[4/5]"
                focus="top"
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 border-t border-navy-line pt-12">
          <TrialButton />
        </div>
      </section>
    </div>
  );
}
