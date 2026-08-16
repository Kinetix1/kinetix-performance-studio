const webp = import.meta.glob("../assets/gallery/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const jpg = import.meta.glob("../assets/gallery/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const modules = { ...webp, ...jpg };

const altText: Record<string, string> = {
  "member-kettlebell-floor-setup": "Member setting up for a kettlebell swing on the studio floor",
  "member-overhead-curl-mural": "Member training an overhead curl in front of the KINETIX mural",
  "member-overhead-dumbbell-press": "Member pressing a pair of dumbbells overhead",
  "member-medicine-ball-shoulder-press": "Member pressing a medicine ball overhead",
  "member-kettlebell-swing": "Member swinging a kettlebell on the studio floor",
  "member-kettlebell-floor-press": "Member pressing a kettlebell from the floor",
  "member-medicine-ball-front-squat": "Member holding a medicine ball in a front squat",
  "member-plate-front-squat": "Member holding a weight plate in a front squat",
  "member-lunge-balance-disc": "Member in a walking lunge on a balance disc",
  "member-medicine-ball-squat-mural": "Member holding a medicine ball squat in front of the KINETIX mural",
  "member-lunge-dumbbell-curl": "Member curling a dumbbell during a lunge on a balance disc",
  "member-dumbbell-press-balance-disc": "Member pressing dumbbells overhead while balanced on a disc",
  "member-lunge-dumbbell-overhead": "Member holding a dumbbell overhead during a lunge on a balance disc",
  "member-kettlebell-squat-mural": "Member holding a kettlebell squat in front of the KINETIX mural",
  "member-cable-pull-overhead": "Member pulling a cable attachment overhead",
  "member-forward-fold-medicine-ball": "Member reaching for a medicine ball in a forward fold",
  "member-band-pull-overhead-mural": "Member pulling a resistance band overhead in front of the KINETIX mural",
  "member-band-triceps-pull-mural": "Member training a resistance band triceps pull in front of the KINETIX mural",
  "member-barbell-deadlift-setup-2": "Member setting up for a barbell deadlift",
  "member-band-chest-row": "Member rowing a resistance band",
  "member-kettlebell-farmers-carry": "Member carrying kettlebells across the studio floor",
  "member-plank-medicine-ball-mural": "Member holding a plank on a medicine ball in front of the KINETIX mural",
  "member-sandbag-carry": "Member carrying a sandbag on the studio floor",
  "member-kettlebell-deadlift-setup": "Member setting up for a kettlebell deadlift",
  "member-plank-medicine-balls-mural": "Member holding a plank on medicine balls in front of the KINETIX mural",
  "member-dual-dumbbell-squat": "Member holding a dual dumbbell rack squat",
  "member-overhead-triceps-stretch-mural": "Member stretching overhead in front of the KINETIX mural",
  "member-seated-rest-dumbbell-rack": "Member resting beside the dumbbell rack between sets",
  // new jpg photos
  "member-barbell-overhead-press-female": "Member pressing a barbell overhead during a coached session",
  "member-barbell-overhead-press-male": "Member pressing a barbell overhead in front of the KINETIX mural",
  "member-barbell-deadlift-female": "Member setting up for a barbell deadlift",
  "member-barbell-deadlift-pull": "Member pulling a barbell deadlift on the studio floor",
  "member-deadlift-setup": "Member setting up for a deadlift on the studio floor",
  "member-lunge-with-weight": "Member performing a weighted lunge during a coached session",
  "member-lunge-conditioning": "Member in a lunge during a conditioning interval",
  "member-box-step-mobility": "Member working a box step mobility drill",
  "member-core-ab-work": "Member working core and ab exercises on the studio floor",
};

const extRe = /\.(webp|jpg)$/;

export const galleryPhotos = Object.entries(modules)
  .map(([path, src]) => {
    const name = path.split("/").pop()!.replace(extRe, "");
    return { name, src, alt: altText[name] ?? "Member training at KINETIX Performance Studio" };
  })
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(({ src, alt }) => ({ src, alt }));
