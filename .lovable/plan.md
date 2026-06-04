## Goal
Bring back the OnlineOrdering section shown in the screenshots (categories sidebar, Camarones signature card, item cards, Huskie Special callout), but strip the ordering affordances so it reads as a menu display.

## Changes (all in `src/routes/index.tsx`)

1. **Section 3 render** (line ~924): switch `<MenuBoard />` back to `<OnlineOrdering />`.

2. **Remove "ONLINE ORDERING" eyebrow** (line 360): delete the small uppercase "Online Ordering" `<p>` above the ORDER FRESH. FAST. headline.

3. **Remove "ADD +" buttons:**
   - Camarones signature card (line 423): remove the `ADD +` button; keep the `$16.50` price.
   - `ItemCard` standard variant (lines 511–514): remove the `ADD +` button; keep the price.

4. **Leave intact:**
   - Huskie Special "ORDER NOW →" button (it's a distinct CTA, not the per-item add-to-cart).
   - Categories sidebar, item content, prices, badges, layout.

No other sections touched.