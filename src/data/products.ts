import type { DarkFrontierProduct } from "@/types/experiences";

import darkFrontier from "@/assets/dark-frontier.jpg";
import camp from "@/assets/stay-camp.jpg";
import rock from "@/assets/discover-rock.jpg";
import himba from "@/assets/culture-himba.jpg";
import desert from "@/assets/hero-desert-night.jpg";

/**
 * Dark Frontier commercial catalogue. Pricing is "On request" until partner
 * and guide terms are agreed — every entry routes to a general enquiry.
 */
export const darkFrontierProducts: DarkFrontierProduct[] = [
  {
    slug: "stargazing-intro",
    title: "Dark Frontier Stargazing Intro",
    duration: "One evening",
    idealGuest: "First-time stargazers, families, short stopovers",
    price: "On request",
    blurb:
      "An accessible first evening under Bortle 1 skies — naked-eye orientation, a guided constellation walk, no equipment required.",
    image: darkFrontier,
  },
  {
    slug: "southern-kalahari-silence-escape",
    title: "Southern Kalahari Silence Escape",
    duration: "2–3 nights",
    idealGuest: "Travellers seeking distance from crowds and noise",
    price: "On request",
    blurb:
      "Red dunes, dry riverbeds and some of the quietest ground in the country — dark skies as a backdrop, not the main event.",
    image: camp,
  },
  {
    slug: "astrophotography-desert-workshop",
    title: "Astrophotography Desert Workshop",
    duration: "3–4 nights",
    idealGuest: "Photographers, from enthusiast to advanced",
    price: "On request",
    blurb:
      "Small-group, guide-led sessions with professional optics available on request — Milky Way core season timed to your dates.",
    image: desert,
  },
  {
    slug: "new-moon-desert-route",
    title: "New Moon Desert Route",
    duration: "5–7 days",
    idealGuest: "Self-drive travellers wanting a route planned around the dark",
    price: "On request",
    blurb:
      "A self-drive itinerary built around the darkest week of the month, linking NamibRand, Sossusvlei and Damaraland dark-sky sites.",
    image: rock,
  },
  {
    slug: "cultural-sky-stories-evening",
    title: "Cultural Sky Stories Evening",
    duration: "One evening",
    idealGuest: "Guests wanting cultural depth alongside the night sky",
    price: "On request",
    blurb:
      "Damara, Himba and San sky mythologies shared by community-approved storytellers, on their terms, around a fire.",
    image: himba,
  },
  {
    slug: "private-dark-frontier-concierge",
    title: "Private Dark Frontier Concierge",
    duration: "Custom",
    idealGuest: "Private groups wanting a fully tailored dark-sky itinerary",
    price: "On request",
    blurb:
      "A dedicated specialist plans your entire dark-sky journey — moon phase, route, guides and stays — from first call to the drive home.",
    image: darkFrontier,
  },
];
