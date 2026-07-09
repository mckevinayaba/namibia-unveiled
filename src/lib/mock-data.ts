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

export type Route = {
  slug: string;
  title: string;
  days: string;
  distance: string;
  difficulty: "Gentle" | "Moderate" | "Committed";
  regions: string[];
  image: string;
  summary: string;
};

import darkFrontier from "@/assets/dark-frontier.jpg";
import selfDrive from "@/assets/route-selfdrive.jpg";
import himba from "@/assets/culture-himba.jpg";
import camp from "@/assets/stay-camp.jpg";
import rock from "@/assets/discover-rock.jpg";
import desert from "@/assets/hero-desert-night.jpg";

/**
 * Placeholder experience catalogue.
 * Titles are descriptive, not commercial — real operator partnerships will
 * replace these entries. Regions and cultural references are factual;
 * pricing is intentionally "On request" until partner terms are agreed.
 */
export const experiences: Experience[] = [
  {
    slug: "namibrand-astronomy",
    title: "Astronomy nights · NamibRand Reserve",
    region: "NamibRand Nature Reserve",
    duration: "2–3 nights",
    price: "On request",
    tag: "Dark Frontier",
    image: darkFrontier,
    blurb:
      "Africa's first International Dark Sky Reserve. Long, uninterrupted evenings under some of the darkest skies on Earth.",
  },
  {
    slug: "damaraland-rock-art",
    title: "Rock engravings & desert walks · Damaraland",
    region: "Damaraland",
    duration: "1–2 nights",
    price: "On request",
    tag: "Culture",
    image: rock,
    blurb:
      "Ancient rock engravings walked at first light, with unhurried evenings in a quiet valley in Damaraland.",
  },
  {
    slug: "kaokoland-community",
    title: "Community-led visit · Kaokoland",
    region: "Kaokoland",
    duration: "Day visit",
    price: "On request",
    tag: "Community",
    image: himba,
    blurb:
      "A conservancy-arranged visit designed with the community — respectful protocols, fair economics, no staging.",
  },
  {
    slug: "sossusvlei-desert-camp",
    title: "Desert camp · Sossusvlei",
    region: "Sossusvlei",
    duration: "3–4 nights",
    price: "On request",
    tag: "Stay",
    image: camp,
    blurb:
      "A quiet camp at the edge of the dune sea. Sunrise on the red dunes, sundowners in the dry riverbed, ink-black nights.",
  },
];

/**
 * Placeholder self-drive route ideas. Regions are real; durations and
 * distances are shown as ranges until specific itineraries are finalised.
 */
export const routes: Route[] = [
  {
    slug: "southern-loop",
    title: "Southern Loop · Kalahari to Sossusvlei",
    days: "10–12 days",
    distance: "~2,000 km",
    difficulty: "Moderate",
    regions: ["Kalahari", "Fish River Canyon", "NamibRand", "Sossusvlei"],
    image: selfDrive,
    summary:
      "A southern circuit shaped around dark-sky country, the Fish River Canyon rim, and the quiet dune country of the NamibRand.",
  },
  {
    slug: "northern-frontier",
    title: "Northern Frontier · Damaraland, Kaokoland & the Skeleton Coast",
    days: "12–14 days",
    distance: "~2,500 km",
    difficulty: "Committed",
    regions: ["Damaraland", "Kaokoland", "Skeleton Coast"],
    image: desert,
    summary:
      "Beyond the last fuel stop. Desert-adapted wildlife, ancient rock art, and coastline that few travellers ever reach.",
  },
  {
    slug: "etosha-central",
    title: "Eastern Etosha & Central Highlands",
    days: "8–10 days",
    distance: "~1,500 km",
    difficulty: "Gentle",
    regions: ["Etosha", "Waterberg", "Erongo"],
    image: camp,
    summary:
      "Etosha's quieter eastern gates paired with private conservancies — big wildlife, small crowds, generous evenings.",
  },
];

export const guideChapters = [
  {
    n: "01",
    title: "When to travel",
    body:
      "May to October is Namibia's dry season — cool, clear and generally dark. The green season from December through March brings dramatic storms and quieter roads.",
  },
  {
    n: "02",
    title: "Driving in Namibia",
    body:
      "Most roads outside towns are gravel. Reduce speed, keep a safe distance from oncoming vehicles, carry extra water and a second spare tyre, and tell someone your route before setting out.",
  },
  {
    n: "03",
    title: "Reading the sky",
    body:
      "Namibia holds some of the darkest skies on Earth. Give your eyes twenty minutes to adjust, avoid white light, and the Milky Way arrives on its own.",
  },
  {
    n: "04",
    title: "Cultural protocols",
    body:
      "Ask before you photograph. Learn one greeting in the local language. Where possible, arrange community visits through registered conservancies so payment reaches the people you meet.",
  },
  {
    n: "05",
    title: "Safety, quietly",
    body:
      "Namibia is one of Africa's safer countries to travel. The real risks are environmental — distance, dehydration and driving fatigue. Plan short driving days and carry more water than you think you need.",
  },
];
