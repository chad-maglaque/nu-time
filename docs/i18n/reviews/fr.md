# French (fr): independent review

Reviewer: a native French editor reading it fresh, without the translator's notes. I checked every string in `locales/fr.json` against `locales/en.json` and `docs/i18n/BRIEF.md`.

Overall the translation is strong. It reads as if it were written in French, the register (vous) is consistent, and the typography is careful: no-break spaces before `: ; ! ?` and inside « ». The 1793 card is accurate (decree 1793, abandoned in April 1795) and lands well with the « un temps d'avance » pun. Most of the fixes below are number formats that had been left in English, plus a few calques.

`python3 -I tests/check_locales.py fr` → `fr: ok`.

## Changes

In the table, "␣" means a narrow no-break space (U+202F), the thousands separator the file already uses in prose. "⍽" means a no-break space (U+00A0).

| Key | Before | After | Why |
|---|---|---|---|
| `how.cards[1].n` | `1,000` | `1␣000` | French number format. The brief now requires local formats in `n` fields. |
| `how.cards[2].n` | `100,000` | `100␣000` | Same reason as above. |
| `geometry.items[3][1]`, `geometry.trigRows[3][0]` | `16.67 kè` | `16,67⍽kè` | French decimal comma. The brief cites 16,67 by name. |
| `geometry.items[4][1]`, `geometry.trigRows[1][0]` | `8.33 kè` | `8,33⍽kè` | Decimal comma. |
| `geometry.trigRows[2][0]` | `12.5 kè` | `12,5⍽kè` | Decimal comma. |
| `build.quartz[0][0]` / `[1][0]` | `3.456 MHz` / `32.768 kHz` | `3,456⍽MHz` / `32,768⍽kHz` | Decimal comma. A French reader would take "32.768" for thirty-two thousand. |
| `build.quartz[*][1]` | `2,985,984` · `28,311.552` · `864,000` · `8,640,000` · `13,824,000` | `2␣985␣984` · `28␣311,552` · `864␣000` · `8␣640␣000` · `13␣824␣000` | French thousands and decimal separators. With English formats, "28,311" reads as 28.3 in French. |
| `build.quartz[1][2]` | `Accumulateur de phase (28,311 / 28,312)` | `Accumulateur de phase (28␣311 / 28␣312)` | Same reason: "28,311" means a decimal in French. |
| `ke.facts[0..1].n`, `geometry.items[*][1]`, `geometry.trigRows[*][0]`, `build.quartz[2..4][0]` (21 cells) | `100 kè`, `1 MHz` … (ordinary space) | `100⍽kè`, `1⍽MHz` … | No-break space between a number and its unit, which the prose already used. It stops "100 / kè" from wrapping in narrow table columns. |
| `eliminates.title` | `… le AM et le PM des anglophones …` | `… l'AM et le PM des anglophones …` | Elision: "AM" is read *a-èm*, so French writes « l'AM ». |
| `nav.join` | `Rejoindre` | `Nous rejoindre` | « Rejoindre » is a transitive verb with no object and reads unfinished in a menu. « Nous rejoindre » is the usual French menu label. |
| `join.submit` | `Rejoindre` | `Je m'inscris` | Natural French label for a sign-up button. « Rejoindre » alone on a form button sounds translated. |
| `why.items[1].text` | `UTC fixe la journée…` | `L'UTC fixe la journée…` | French uses the article with UTC (« l'UTC »), as the same file already does elsewhere (« GNSS pour l'UTC »). |
| `why.items[2].text` | `Nu:Time distingue l'heure que nous partageons du soleil de chaque lieu.` | `Nu:Time distingue l'heure, commune à tous, du soleil, propre à chaque lieu.` | The old sentence could be read as "the time we share *of the sun*". The new one keeps the meaning (shared time vs local sun) without that misreading. |
| `why.items[5].title` | `Les standards de demain s'écrivent d'ici 2035` | `Les normes mondiales de demain se réécrivent à l'horizon 2035` | Restores "the world's" and "re-written", which had been dropped. « Normes » is the French word for formal international standards and matches the card body (« normes internationales »). « À l'horizon 2035 » keeps the English's loose time frame. |
| `why.items[5].text` | `… est un standard ouvert proposé à ce travail, et à tous.` | `… est un standard ouvert, proposé pour ce chantier comme pour tous.` | « Proposé à ce travail » is a calque of "offered to this work". The new wording is idiomatic and still says Nu:Time is *offered*, not endorsed, as the brief requires. |
| `build.cert` | `Chacun peut construire selon le standard et se dire « compatible Nu:Time ».` | `Chacun peut appliquer le standard et présenter son produit comme « compatible Nu:Time ».` | In « se dire compatible », the person is the one called compatible. « Construire selon le standard » is also a calque of "build to the standard". |

That is 17 rows: 16 text fixes and one no-break-space pass covering 21 cells. 37 values changed in all.

## Needs a human decision

1. **`why.items[4].title`, « Les machines comptent déjà en base dix ».** Machines count in binary. The English "count in tens" is loose, and the French « en base dix » turns it into a technical claim that a French engineer would call false. I kept it because it matches the source. Better to fix the English, for example "Machines already think in decimal units", and then align every locale.
2. **Mumbai: `cities.Mumbai` = « Bombay ».** Both names are current in French. « Bombay » is the traditional exonym (Wikipédia, dictionaries, much of the press), while « Mumbai » is spreading in news outlets. I kept « Bombay ». Change it if the site wants to follow the city's official name.
3. **Apostrophes.** The whole file uses the straight apostrophe ('). Careful French typography uses ’. This should be a site-wide choice, applied in one pass, not changed string by string.
4. **« standard » vs « norme ».** The file calls Nu:Time a « standard ouvert », which is the established French term (it is the legal term in the LCEN), and uses « normes » for formal international standards. That split is right in my view, but Québec readers and the OQLF prefer « norme » throughout. This is a brand decision.
5. **English source, `why.items[5].title`.** "are being re-written in 2035" mixes "in" and "by". I chose « à l'horizon 2035 ». If the source is clarified, this title may need another look.
6. **Optional tone points, left unchanged.** `join.ok` « Bienvenue dans l'aventure Nu:Time » is a little more marketing than "Welcome to Nu:Time". `join.title` « Contribuez au standard » loses the "set the standard" pun; « Participez à l'écriture du standard » would recover part of it.
