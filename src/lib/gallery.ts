const modules = import.meta.glob("../assets/gallery/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const altText: Record<string, string> = {
  "member-kettlebell-floor-setup": "Member setting up for a kettlebell swing on the studio floor",
  "member-overhead-curl-mural": "Member training an overhead curl in front of the KINETIX mural",
  "member-medicine-ball-goblet-squat": "Member holding a medicine ball goblet squat",
  "member-overhead-dumbbell-press": "Member pressing a pair of dumbbells overhead",
  "member-medicine-ball-shoulder-press": "Member pressing a medicine ball overhead",
  "member-standing-dumbbell-curl": "Member performing a standing dumbbell curl",
  "member-kettlebell-swing": "Member swinging a kettlebell on the studio floor",
  "member-kettlebell-floor-press": "Member pressing a kettlebell from the floor",
  "member-medicine-ball-front-squat": "Member holding a medicine ball in a front squat",
  "member-goblet-squat-knee-sleeves": "Member training a goblet squat with knee sleeves",
  "member-plate-front-squat": "Member holding a weight plate in a front squat",
  "member-band-chest-pull-mural":
    "Member performing a resistance band chest pull in front of the KINETIX mural",
  "member-lunge-balance-disc": "Member in a walking lunge on a balance disc",
  "member-band-triceps-extension": "Member training a resistance band triceps extension",
  "member-medicine-ball-squat-mural":
    "Member holding a medicine ball squat in front of the KINETIX mural",
  "member-kettlebell-goblet-squat": "Member holding a kettlebell goblet squat",
  "member-lunge-dumbbell-curl": "Member curling a dumbbell during a lunge on a balance disc",
  "member-dumbbell-press-balance-disc":
    "Member pressing dumbbells overhead while balanced on a disc",
  "member-band-overhead-pull": "Member pulling a resistance band overhead",
  "member-barbell-overhead-press":
    "Member pressing a barbell overhead in front of the KINETIX mural",
  "member-dumbbell-overhead-press-2": "Member pressing a dumbbell overhead",
  "member-lunge-dumbbell-overhead":
    "Member holding a dumbbell overhead during a lunge on a balance disc",
  "member-dumbbell-goblet-squat-rack":
    "Member holding a dumbbell goblet squat beside the equipment rack",
  "member-kettlebell-squat-mural":
    "Member holding a kettlebell squat in front of the KINETIX mural",
  "member-cable-pull-overhead": "Member pulling a cable attachment overhead",
  "member-single-arm-overhead-press": "Member pressing a single dumbbell overhead",
  "member-forward-fold-medicine-ball": "Member reaching for a medicine ball in a forward fold",
  "member-band-pull-overhead-mural":
    "Member pulling a resistance band overhead in front of the KINETIX mural",
  "member-band-triceps-pull-mural":
    "Member training a resistance band triceps pull in front of the KINETIX mural",
  "member-barbell-deadlift-setup-2": "Member setting up for a barbell deadlift",
  "member-band-chest-row": "Member rowing a resistance band",
  "member-kettlebell-lunge-disc":
    "Member holding dumbbells in a rack position during a lunge on a balance disc",
  "member-lunge-disc-dumbbell-curl": "Member curling a dumbbell during a lunge on a balance disc",
  "member-kettlebell-farmers-carry": "Member carrying kettlebells across the studio floor",
  "member-plank-medicine-ball": "Member holding a plank on a medicine ball",
  "member-band-pull-overhead-2": "Member pulling a resistance band overhead",
  "member-sandbag-carry": "Member carrying a sandbag on the studio floor",
  "member-dumbbell-press-lunge-disc":
    "Member pressing a dumbbell overhead during a lunge on a balance disc",
  "member-dumbbell-curl-lunge-disc": "Member curling a dumbbell during a lunge on a balance disc",
  "member-kettlebell-deadlift-setup": "Member setting up for a kettlebell deadlift",
  "member-forward-fold-medicine-ball-2": "Member reaching for a medicine ball in a forward fold",
  "member-band-pull-overhead-3": "Member pulling a resistance band overhead",
  "member-plank-medicine-balls-mural":
    "Member holding a plank on medicine balls in front of the KINETIX mural",
  "member-dual-dumbbell-squat": "Member holding a dual dumbbell rack squat",
  "member-plank-medicine-ball-mural":
    "Member holding a plank on a medicine ball in front of the KINETIX mural",
};

export const galleryPhotos = Object.entries(modules)
  .map(([path, src]) => {
    const name = path.split("/").pop()!.replace(".webp", "");
    return { name, src, alt: altText[name] ?? "Member training at KINETIX Performance Studio" };
  })
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(({ src, alt }) => ({ src, alt }));
