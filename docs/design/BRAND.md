# Brand and design system

Design system for nu-time.org.

## Logo

- Wordmark set in **Orbitron**, weight 800, colour gold `#FFB347`: the first letter is a **U turned upside down** (`transform: scaleY(-1)`), so `UU:TIME` reads as **∩U:TIME** — "nu:TIME".
- Superscript ™ at about 40% size, 75% opacity.
- In running text: **Nu:Time™**. Chinese: **刻时 Ke-Shi**. Never "NuTime" or "Nutime".

## Chinese name: 刻时 (decision: proceed, 2026-11-17)

- Reads as verb + object, "to mark / engrave time" (like 计时, 报时), and as "Kè-time"; a deliberate reversal of 时刻.
- Spoken *kè shí* collides with **课时** (class period) and **刻蚀** (etching, a semiconductor term); pinyin and English "keshi" search is crowded (课时 / 刻蚀 / the singer keshi).
- Mitigation: always pair characters with the Latin brand (**刻时 Nu:Time**); consider **刻时制** as the spoken form for "the Kè system".
- Before launch: gut check with 5–10 native speakers across regions; CNIPA trademark search and filing for 刻时 (classes 9, 14, 42).

## Colour

| Token | Value | Use |
|---|---|---|
| Background | `#1A1A1A` | Pages |
| Surface | `#202020` / `#262626`, forms `#1F2937` / `#374151` | Bands, cards, inputs |
| Brand gold | `#FFB347` | Logo, headings, primary buttons, accents |
| Sun orange | `#FF8C00` | Sun disc, highlights |
| Text | `#FFFFFF` / `#D1D5DB` / `#9CA3AF` | Primary / secondary / muted |
| Dial | see [DIAL.md](DIAL.md) | |

## Type

- **Orbitron** (SIL OFL) — logo, eyebrows, buttons, numerals and the `GG:BB:TT` readout.
- **Inter** (SIL OFL) — body and UI.
- Both are self-hosted (`public/assets/fonts/`) — no Google Fonts request, so pages load in mainland China. CJK, Devanagari and Nastaliq text fall back to system fonts (PingFang SC / Microsoft YaHei, Noto Sans Devanagari, Noto Nastaliq Urdu).

## Interaction

- Buttons: uppercase Orbitron, pill shape; hover **dims** to 50% opacity rather than inverting.
- Sticky sub-navigation under the main bar, light weight; the link for the section in view dims to 40%.
- Motion is slow and functional: the sky fades over 0.8 s; carousels cross-fade over 1 s and respect reduced-motion settings.

## Voice

Bold and plain. Lead with the idea ("time and location reimagined."), back it with arithmetic, and never overclaim: history is cited accurately, unbuilt features are described as design intent.
