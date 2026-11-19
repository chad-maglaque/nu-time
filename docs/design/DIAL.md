# The Nu:Time dial

Design reference for the live clock on nu-time.com ([public/assets/clock.js](../../public/assets/clock.js)) and for any analog Nu:Time face.

## Principle

The **digits** always show **universal** Nu:Time — the same for everyone on Earth. The **face** turns with your place, so the sky on the dial matches the sky over your head.

## Geometry

- **No numerals.** Four short quarter marks at 0, 25, 50 and 75 Kè in soft cream `#ede3cc`, 0.08 R long, so the tip meets the outer edge of the teal ring (0.716 R), plus fine graduations (one per Kè) on the day ring.
- **The zero mark** — where gong, beat and tick roll over — is the same colour and length, only thicker (0.030 R vs 0.016 R).
- **Rotation.** At Greenwich (0 Kè / 0°) zero sits at the **bottom** of the dial. Elsewhere the whole face turns clockwise by the place's longitude east of Greenwich, rounded to the nearest Kè (3.6°), as on the original nu-time.com clock. Result: **solar noon is always at the top and solar midnight at the bottom**, for everyone.
- Angle on the canvas for a fraction *f* of the universal day: `θ = π/2 + 2πf + round(lon/3.6)·3.6°` (canvas angles, clockwise from 3 o'clock).

## Layers (outside in)

| Layer | Radius (× R) | Colour |
|---|---|---|
| Brass case | 1.00 | `#c8a86c` |
| Face | 0.96 | `#151515` |
| Dark outer channel — the sun's path | 0.716 – 0.96 | face colour |
| Teal guide ring (line 0.012) | 0.706 | `#35545c` |
| Gold day ring (width 0.20) | 0.60 | `#f2b04a` |
| Cream guide ring (line 0.012) | 0.494 | `#f5deb3` |
| Inner dark disc | 0.20 – 0.488 | face colour |
| Sun disc (centre) | 0.20 | `#ff8c00`, edge `#ffb347` |

**Night shade.** Between sunset and sunrise a light translucent shade `rgba(24,16,6,.32)` with softly blurred edges (≈0.012 R) lies over the gold ring, its graduations and the quarter marks (from the cream ring's outer edge to the teal ring's outer edge), drawn on its own layer (sunrise cap added, sunset bite cut out) and composited with a single blur, so overlaps never double-darken and both ends feather alike. At **sunrise** its end is **convex** (a round cap bulges into the day); at **sunset** it is **concave** (the day bulges round into the shade).

**The sun** travels centred in the dark outer channel (0.838 R, radius 0.07 R, glow 0.092 R by day) at the gong hand's angle, as on the original nu-time.com clock: at the top at solar noon, at the bottom at solar midnight. While the Sun is up it is pale gold `#ffb347` with a soft glow; below the horizon it turns a pale whitish grey `#e2e2e2`, like the moon — the exact colours of nu-time.com.

Layering: case → face → rings → graduations → quarter marks → night shade → sun → centre disc → hands.

## Hands

| Hand | Turns | Length (× R) | Width | Colour |
|---|---|---|---|---|
| Gong (day) | once per day | 0.60, tail 0.08 | 0.055 R | red `#d9452b` |
| Beat | once per gong (100 beats) | to the teal ring's outer edge (0.716, rounded tip), tail 0.10 | 0.035 R | blue `#3d6be0` |
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
- "Current Location": the browser's position; if refused or unavailable, the approximate location derived from the connection (`/api/where`); otherwise a clear message. Only the dial rotation is snapped to the nearest Kè; sun, sky, sunrise and sunset use exact coordinates.
