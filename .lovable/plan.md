# Cleanup, honesty pass & design elevation

## Intent

Three problems to fix together:
1. **Content honesty** — invented lodge names, prices, dates and moon-windows read as real offers. Strip anything fabricated. Keep only what is factually verifiable (real place names, real geography, real cultural references).
2. **AI-template tells** — `Sparkles` icon, "Signature line · 01" label, and similar internal-design language make it look like an AI demo, not a shipped product.
3. **Design ceiling** — current design is competent but not yet at *Nat Geo × Airbnb Luxe × Apple*. Needs a real polish pass.

---

## 1. Content: keep real, remove invented

**Keep (verifiable facts):**
- Regions & places: NamibRand Nature Reserve, Sossusvlei, Damaraland, Kaokoland, Skeleton Coast, Etosha, Kalahari, Fish River Canyon, Waterberg, Erongo, Windhoek, Swakopmund.
- Cultural references: Damara, Himba, San communities; conservancy model; rock engravings.
- Astronomy facts: NamibRand is Africa's first International Dark Sky Reserve (verified via IDA); Bortle 1 sky classification is real.
- General travel truths: gravel-road driving guidance, dry-season months, new-moon principle for astronomy.

**Remove or replace with honest placeholders:**
- Invented product names: "NamibRand Astro Camp", "Damara Quiet Hours", "Sossus Canvas Retreat", "A Himba Encounter, In Confidence", "Kunene Night Circle", "Damara Sky Stories".
  → Replace with descriptive, non-committal titles like *"Astronomy camp · NamibRand Reserve"*, *"Rock-engraving walk · Damaraland"*, *"Community-led visit · Kaokoland"*, *"Desert camp · Sossusvlei"*.
- Invented prices ("From N$ 42,500 pp" etc.) → replace with `"On request"` or remove the price line entirely.
- Invented durations tied to fake products → keep only as generic ranges ("2–4 nights").
- Invented route names ("The Great Southern Arc", "The Silent North", "Quiet Etosha & Beyond") → replace with descriptive regional titles ("Southern Loop · Kalahari to Sossusvlei", "Northern Frontier · Damaraland, Kaokoland & the Skeleton Coast", "Eastern Etosha & Central Highlands").
- Invented distance/day figures → soften to ranges ("~10–14 days", "~1,500–2,700 km").
- Invented moon-window dates ("May 12–18" etc.) → replace with a generic explanation: "New-moon weeks between May and October offer the darkest skies. We plan trips around them." Remove the fake date grid.
- Guide chapter body text → rewrite to only include factually true, non-specific travel guidance (already mostly true, but audit line-by-line).

## 2. Remove AI-looking tells

- Delete the `Sparkles` icon from Dark Frontier pillars → replace with a domain-appropriate mark (a moon-phase / star / compass SVG, or `Moon` from Lucide).
- Delete "Signature line · 01" from both `index.tsx` and `dark-frontier.tsx`.
- Audit for other internal-design labels ("Now on the platform", "The collection · Four ways into the dark") → rewrite to product voice, not design-doc voice.
- Audit all remaining Lucide icons; keep only where the icon has clear domain meaning (map pin, moon, arrow). Remove decorative sparkle/star iconography.

## 3. Design elevation (targeted polish, not full rebuild)

- **Hero (home):** add a slow Ken-Burns / parallax zoom on the hero image, subtle grain overlay, and refined type entrance (staggered fade-up). Move CTAs lower with more breathing room.
- **Typography:** tighten display sizes, introduce a real editorial hierarchy — oversized numerals on Guide chapters, drop-caps on longer intros, more generous line-height on body copy.
- **Imagery treatment:** apply a subtle desaturation + warm-shadow filter across all lifestyle images so the visual system feels curated, not stock.
- **Card language:** break uniform rounded rectangles — vary aspect ratios between cards on Discover; alternate image-left/image-right on Routes (already present, refine spacing).
- **Motion:** add Framer Motion for section-level fade/slide-in on scroll (only where it strengthens hierarchy — not everywhere).
- **Dark Frontier hero:** replace the label + big title with a more editorial composition (small line of location coordinates, quiet single-line headline, generous negative space).
- **Footer & value strip:** refine spacing rhythm; the current 4-column value strip is too dense.

## Files touched

- `src/lib/mock-data.ts` — rewrite all copy per section 1.
- `src/routes/index.tsx` — remove "Signature line · 01", elevate hero, refine sections.
- `src/routes/dark-frontier.tsx` — remove `Sparkles`, remove signature label, replace fake moon-date grid, refine hero.
- `src/routes/discover.tsx`, `src/routes/routes.tsx`, `src/routes/guide.tsx` — copy audit, icon audit, spacing pass.
- `src/routes/book.tsx`, `src/routes/partner.tsx`, `src/routes/profile.tsx` — copy + icon audit.
- Add `framer-motion` for scroll-in animations.

## Out of scope for this pass

- Real partner data / real pricing (needs your input — will wire in when you supply).
- Supabase, payments, admin — structure stays ready, no implementation this round.
- Full 3-direction rendered design exploration (can do that as a next step if this polish isn't enough).

## What you'll see after

A calmer, more honest, more premium version of the same app: no fabricated offers, no AI-template icons or labels, real Namibian geography intact, and a visible step up in typographic and motion craft.
