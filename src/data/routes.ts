import type { Route } from "@/types/routes";

import selfDrive from "@/assets/route-selfdrive.jpg";
import desert from "@/assets/hero-desert-night.jpg";
import camp from "@/assets/stay-camp.jpg";

/**
 * Placeholder self-drive route ideas. Regions are real; durations and
 * distances are shown as ranges until specific itineraries are finalised.
 * Partner placeholders mark where operator/lodge partnerships will attach.
 */
export const routes: Route[] = [
  {
    slug: "southern-loop",
    title: "Southern Loop · Kalahari to Sossusvlei",
    region: "Southern Namibia",
    regions: ["Kalahari", "Fish River Canyon", "NamibRand", "Sossusvlei"],
    days: "10–12 days",
    distance: "~2,000 km",
    difficulty: "Moderate",
    bestSeason: "May–October, or the week around a new moon for dark-sky nights.",
    drivingRhythm:
      "2–4 hours of driving on most days, with two-night stops built in around the canyon and the dunes.",
    fuelAndRestNotes:
      "Fuel at every overnight stop; the longest gap is Betta to Sesriem — carry a full tank and top up before the canyon.",
    safetyNotes:
      "Reduce speed on gravel, keep extra following distance from oncoming traffic, and carry two spare tyres through the Fish River stretch.",
    highlights: [
      "Sunrise at Fish River Canyon's main viewpoint",
      "A dark-sky evening inside the NamibRand Nature Reserve",
      "Dune 45 and Deadvlei at first light",
    ],
    suggestedStops: [
      { name: "Kalahari overnight", note: "Red dunes and a quiet first night off the loop." },
      { name: "Fish River Canyon rim", note: "Two nights — one for the rim walk, one to rest." },
      {
        name: "NamibRand Nature Reserve",
        note: "Africa's first Dark Sky Reserve — plan around the moon.",
      },
      { name: "Sossusvlei / Sesriem", note: "Early dune entry before the heat and crowds." },
    ],
    partnerPlaceholders: [
      { type: "Lodge", note: "Partner slot — coming soon" },
      { type: "Conservancy activity", note: "Partner slot — coming soon" },
    ],
    image: selfDrive,
    summary:
      "A southern circuit shaped around dark-sky country, the Fish River Canyon rim, and the quiet dune country of the NamibRand.",
  },
  {
    slug: "northern-frontier",
    title: "Northern Frontier · Damaraland, Kaokoland & the Skeleton Coast",
    region: "Northwest Namibia",
    regions: ["Damaraland", "Kaokoland", "Skeleton Coast"],
    days: "12–14 days",
    distance: "~2,500 km",
    difficulty: "Committed",
    bestSeason: "May–September, when river crossings in Kaokoland are at their lowest.",
    drivingRhythm:
      "Longer days by design — 3–6 hours, with two full rest days scheduled in Damaraland and on the coast.",
    fuelAndRestNotes:
      "This is beyond the last reliable fuel stop for long stretches — carry a full jerry can once north of Sesfontein and ration accordingly.",
    safetyNotes:
      "High-clearance 4x4 required. Carry a satellite communicator, tell your camp your route before departing, and never attempt river crossings alone.",
    highlights: [
      "Desert-adapted elephant tracking in Damaraland",
      "Ancient rock engravings at Twyfelfontein at first light",
      "Fog-bound coastline and shipwreck relics on the Skeleton Coast",
    ],
    suggestedStops: [
      { name: "Twyfelfontein", note: "UNESCO rock art site — walked with a local guide." },
      { name: "Sesfontein", note: "Last reliable fuel before the Kaokoland interior." },
      { name: "Kaokoland conservancy", note: "Community-arranged visit, agreed in advance." },
      { name: "Skeleton Coast", note: "Two quiet nights where the desert meets the Atlantic." },
    ],
    partnerPlaceholders: [
      { type: "4x4 rental & recovery", note: "Partner slot — coming soon" },
      { type: "Community conservancy", note: "Partner slot — coming soon" },
    ],
    image: desert,
    summary:
      "Beyond the last fuel stop. Desert-adapted wildlife, ancient rock art, and coastline that few travellers ever reach.",
  },
  {
    slug: "etosha-central",
    title: "Eastern Etosha & Central Highlands",
    region: "North-central Namibia",
    regions: ["Etosha", "Waterberg", "Erongo"],
    days: "8–10 days",
    distance: "~1,500 km",
    difficulty: "Gentle",
    bestSeason:
      "June–October for wildlife concentration around waterholes; also comfortable in the cooler shoulder months.",
    drivingRhythm:
      "Short, easy days — 1–3 hours — with time built in for game drives and waterhole sits.",
    fuelAndRestNotes:
      "Fuel is available at all rest camps and the surrounding towns; no long gaps on this route.",
    safetyNotes:
      "Sealed and well-maintained gravel roads throughout. Keep a respectful distance from wildlife and stay in vehicles inside the park.",
    highlights: [
      "Sundowners at a private waterhole outside the main park gates",
      "Etosha's quieter eastern entrances, away from the tour-bus routes",
      "A slow evening at a Waterberg Plateau conservancy",
    ],
    suggestedStops: [
      { name: "Von Lindequist Gate area", note: "Etosha's quieter eastern approach." },
      { name: "Waterberg Plateau", note: "Private conservancy, rare antelope species." },
      { name: "Erongo highlands", note: "Granite country and a slow final night." },
    ],
    partnerPlaceholders: [{ type: "Private conservancy stay", note: "Partner slot — coming soon" }],
    image: camp,
    summary:
      "Etosha's quieter eastern gates paired with private conservancies — big wildlife, small crowds, generous evenings.",
  },
];
