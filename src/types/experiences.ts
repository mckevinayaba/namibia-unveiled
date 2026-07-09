export type Experience = {
  slug: string;
  title: string;
  region: string;
  duration: string;
  price: string;
  tag: string;
  image: string;
  blurb: string;
};

/**
 * Architecture prepared ahead of a full experience detail implementation —
 * extends the catalogue shape with the fields a detail page will need.
 */
export type ExperienceDetail = Experience & {
  overview: string;
  highlights: string[];
  goodToKnow: string[];
};

export type DarkFrontierProduct = {
  slug: string;
  title: string;
  duration: string;
  idealGuest: string;
  price: string;
  blurb: string;
  image: string;
};
