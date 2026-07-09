export type RouteDifficulty = "Gentle" | "Moderate" | "Committed";

export type SuggestedStop = {
  name: string;
  note: string;
};

export type PartnerPlaceholder = {
  type: string;
  note: string;
};

export type Route = {
  slug: string;
  title: string;
  region: string;
  regions: string[];
  days: string;
  distance: string;
  difficulty: RouteDifficulty;
  bestSeason: string;
  drivingRhythm: string;
  fuelAndRestNotes: string;
  safetyNotes: string;
  highlights: string[];
  suggestedStops: SuggestedStop[];
  partnerPlaceholders: PartnerPlaceholder[];
  image: string;
  summary: string;
};
