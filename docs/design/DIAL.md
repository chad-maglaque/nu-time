# The Nu:Time dial

Design reference for the live clock on nu-time.com ([public/assets/clock.js](../../public/assets/clock.js)) and for any analog Nu:Time face.

## Principle

The **digits** always show **universal** Nu:Time — the same for everyone on Earth. The **face** turns with your place, so the sky on the dial matches the sky over your head.

## Geometry

- **No numerals.** Four quarter marks at 0, 25, 50 and 75 kè, plus 100 fine graduations (one per kè).
- **The zero mark** — where gong, beat and tick roll over — is emphasized: brighter, longer, with a dot just outside the ring.
- **Rotation.** At Greenwich (0 kè / 0°) zero sits at the **bottom** of the dial. Elsewhere the whole face turns clockwise by the place's longitude east of Greenwich, rounded to the nearest kè (3.6°), as on the original nu-time.com clock. Result: **solar noon is always at the top and solar midnight at the bottom**, for everyone.
- Angle on the canvas for a fraction *f* of the universal day: `θ = π/2 + 2πf + round(lon/3.6)·3.6°` (canvas angles, clockwise from 3 o'clock).

## Layers (outside in)

| Layer | Radius (× R) | Colour |
|---|---|---|
| Brass case | 1.00 | `#c8a86c` |
| Face | 0.95 | `#151515` |
| Teal guide ring | 0.77 | `#35545c` |
| Gold day ring (width 0.20) | 0.66 | `#f2b04a` |
| Night (occluded) sector of the day ring, sunset → sunrise | 0.66 | `#6e5427` |
| Cream guide ring | 0.55 | `#f5deb3` |
| Sun disc | 0.20 | `#ff8c00`, edge `#ffb347` |

Markers: **sunrise** triangle `#f2b04a` and **sunset** triangle `#ede6d6` at 0.90 R pointing inward; **solar noon** dot `#ff8c00` on the day ring.

## Hands

| Hand | Turns | Length (× R) | Width | Colour |
|---|---|---|---|---|
| Gong (day) | once per day | 0.60, tail 0.08 | 0.055 R | red `#d9452b` |
| Beat | once per gong (100 beats) | 0.80, tail 0.10 | 0.035 R | blue `#3d6be0` |
| Tick | once per beat (100 ticks) | 0.88, tail 0.14 | 0.012 R | gold `#e8c45a` |

## Sky

The page behind the clock takes the colour of the sky at the selected place, recomputed once a second from the Sun's altitude (the original nu-time.com formula):

- Five weighted bands blended with smoothstep: day (altitude −2°…8° rising), civil, nautical, astronomical, night.
- Day colour deepens from civil blue `[60,120,215]` to noon blue `[86,170,255]` with altitude^0.58.
- Night deepens toward `[1,1,5]` around local solar midnight.
- A warm wash `[255,150,70]` (up to 10%) within about half an hour of sunrise and sunset.
- A faint shimmer `[30,38,64]` (≤5%) deep in the night.

The sky is an artistic visualization; real sky colour also depends on weather, aerosols and viewing direction.

## Location

- Dropdown: "Choose a location", "Current Location (Auto-Detect)", then the 50 cities of the original nu-time.com list in the same order, labelled "City, Country". Default with nothing chosen: the Royal Observatory, Greenwich.
- "Current Location": the browser's position; if refused or unavailable, the approximate location derived from the connection (`/api/where`); otherwise a clear message. Only the dial rotation is snapped to the nearest kè; sun, sky, sunrise and sunset use exact coordinates.
