import type { Experience } from "@/types/experiences";

import darkFrontier from "@/assets/dark-frontier.jpg";
import himba from "@/assets/culture-himba.jpg";
import camp from "@/assets/stay-camp.jpg";
import rock from "@/assets/discover-rock.jpg";

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
