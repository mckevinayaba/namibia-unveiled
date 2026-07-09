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
  days: number;
  distanceKm: number;
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

export const experiences: Experience[] = [
  {
    slug: "namibrand-astro-camp",
    title: "NamibRand Astro Camp",
    region: "NamibRand Reserve",
    duration: "3 nights",
    price: "From N$ 42,500 pp",
    tag: "Dark Frontier",
    image: darkFrontier,
    blurb:
      "Three nights inside Africa's first International Dark Sky Reserve. Guided astrophotography, silence and open horizons.",
  },
  {
    slug: "damara-quiet-hours",
    title: "Damara Quiet Hours",
    region: "Damaraland",
    duration: "2 nights",
    price: "From N$ 28,900 pp",
    tag: "Community",
    image: rock,
    blurb:
      "Rock engravings walked at first light with a Damara elder — followed by an unhurried evening in a private valley.",
  },
  {
    slug: "himba-encounter",
    title: "A Himba Encounter, In Confidence",
    region: "Kaokoland",
    duration: "1 day",
    price: "From N$ 6,400 pp",
    tag: "Culture",
    image: himba,
    blurb:
      "A conservancy-led visit designed with the community — no staging, no shortcuts, agreed protocols and fair economics.",
  },
  {
    slug: "sossus-canvas",
    title: "Sossus Canvas Retreat",
    region: "Sossusvlei",
    duration: "4 nights",
    price: "From N$ 61,200 pp",
    tag: "Stay",
    image: camp,
    blurb:
      "A quiet camp at the edge of the dune sea. Sunrise on the red giants, sundowners in the dry riverbed, ink-black nights.",
  },
];

export const routes: Route[] = [
  {
    slug: "great-southern-arc",
    title: "The Great Southern Arc",
    days: 12,
    distanceKm: 2140,
    difficulty: "Moderate",
    regions: ["Kalahari", "Fish River", "NamibRand", "Sossusvlei"],
    image: selfDrive,
    summary:
      "A confident southern loop shaped around dark sky reserves, canyon rim camps and quiet dune country.",
  },
  {
    slug: "silent-north",
    title: "The Silent North",
    days: 14,
    distanceKm: 2680,
    difficulty: "Committed",
    regions: ["Damaraland", "Kaokoland", "Skeleton Coast"],
    image: desert,
    summary:
      "Beyond the last fuel stop. Desert-adapted wildlife, ancient rock art, and coastline that few travellers ever see.",
  },
  {
    slug: "quiet-etosha",
    title: "Quiet Etosha & Beyond",
    days: 9,
    distanceKm: 1580,
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
      "April to October reads as classic Namibia — cool, clear, dark. November brings the first storms and the desert answers with green.",
  },
  {
    n: "02",
    title: "Driving in Namibia",
    body:
      "Gravel roads reward patience. 80 km/h is a ceiling, not a target. Two spares, extra water, and always tell someone your route.",
  },
  {
    n: "03",
    title: "Reading the sky",
    body:
      "Namibia holds some of the darkest skies on Earth. Give your eyes 20 minutes, kill every white light, and let the Milky Way arrive.",
  },
  {
    n: "04",
    title: "Cultural protocols",
    body:
      "Ask before you photograph. Learn one greeting. Pay directly to conservancies where possible — it changes the entire encounter.",
  },
  {
    n: "05",
    title: "Safety, quietly",
    body:
      "Namibia is one of Africa's safest countries. The real risks are the desert itself — distance, dehydration, and driving fatigue.",
  },
];
