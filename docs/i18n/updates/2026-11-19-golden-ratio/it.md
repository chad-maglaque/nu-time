# it — translator notes

# it — notes for this round

- **Golden Ratio** → "sezione aurea", lowercase as in standard Italian usage, used the same way in all four places (goldenTitle, golden ×2, goldenAngle). I chose it over "rapporto aureo" because it is the more common school term and pairs with "angolo aureo".
- **"Hiding in plain sight"** → "nascosta sotto gli occhi di tutti", the established Italian idiom.
- **"long side"** (triangle) → "cateto maggiore". This is more precise than "lato lungo", which an Italian reader could take as the hypotenuse. With hypotenuse 2 the longer leg is 2 cos 36° = φ, so the claim holds.
- **"fivefold geometry"** → "geometria pentagonale". A literal "quintupla" sounds technical and awkward.
- **"Meet the…"** → "Ti presento…" in both the title and the body, keeping the informal "tu" and the deliberate repetition in the English.
- **Sunflower "head"** → "capolino", the correct botanical term, which Italian readers will know.
- **"Third angle of the 10-15-25 right-angle triangle"** is translated literally ("Terzo angolo del triangolo rettangolo 10-15-25"). New row labels follow the existing style: "Un quinto / decimo / ventesimo di giro".
- **trigTitle** → "Onde e una nuova era per la trigonometria." In trig I only swapped the paragraph order and kept the existing sentences.
- **heritage.title** → "Noi l'abbiamo solo portata a compimento". I read "just" as "simply/merely" (modest), not "recently". If "recently" was meant, it should be "l'abbiamo appena completata".
- **why.lead** "AI is here." → "L'IA è arrivata." "IA" is the standard Italian abbreviation; "è arrivata" reads more naturally than "è qui".
- **Kè review**: the article removals already applied to it.json are correct ("un'unica unità — Kè —", "Kè è il ponte…"). Nothing else in it.json breaks the rule: "nel giorno dei cento Kè" has its article on "giorno", not on Kè. So there are no extra entries.
- The goldenRows and goldenIdentities strings are unchanged from the English. They contain no decimals, and sin/cos match the page's existing notation.

---

# it — review of the changed strings (2026-11-19)

Checked against en_new, docs/i18n/BRIEF.md, notes/it.md, DECISIONS.md and the rest of locales/it.json. 18 items, no extras. Shapes match (items 8×3, goldenCols 4, goldenRows 6×4, goldenIdentities 5), `\n\n` breaks are preserved, and every digit and every φ/π/√/²/÷/×/− token is in the same order as the English (checked by script). goldenRows and goldenIdentities are identical to the English. Decimal commas (1,618 · 38,2 · 137,5°) follow the Italian rule.

Maths spot-check: the 10-15-25 triangle has angles of 36°, 54° and 90°. With a hypotenuse of 2, the leg next to the 36° angle is 2 cos 36° = φ, so "cateto maggiore" is correct. Ten of them with the 36° vertex at the centre make 360°, which gives a regular pentagon (circumradius 2, apothem φ). The golden angle is 100/φ² ≈ 38,2 Kè, which is 137,5°.

## Changes

1. `geometry.goldenAngle`
   - Before: "Questo passo non si sovrappone mai a se stesso, così i semi…"
   - After: "Questo passo non torna mai ad allinearsi, così i semi…"
   - Why: the English says "never lines up with itself". "Non si sovrappone" means "never overlaps", which is a different image. "Non torna mai ad allinearsi" is faithful and natural, and it also sidesteps the se stesso / sé stesso spelling question.

2. `geometry.items[5][0]`
   - Before: "Terzo angolo del triangolo rettangolo 10-15-25"
   - After: "Angolo acuto maggiore del triangolo rettangolo 10-15-25"
   - Why: coordinator point (1). "Terzo angolo" can be read as the third angle in the 10-15-25 sequence, which is the 25-Kè right angle. "Angolo acuto maggiore" (the larger acute angle) can only mean the 15-Kè angle, since 25 Kè is the right angle and 10 Kè is the smaller acute angle. I chose it over "Angolo di 15 Kè del…" because the Kè column already shows "15 Kè" on the same row, so repeating the value would be redundant. It is standard school geometry wording.
3. `geometry.golden`, paragraph 2
   - Before: "il limite della successione di Fibonacci"
   - After: "il limite del rapporto tra numeri di Fibonacci consecutivi"
   - Why: coordinator point (2), my call. Italian school maths is strict about "limite di una successione", and the Fibonacci sequence diverges, so the literal version reads as wrong to an Italian reader who knows the maths. The ratio wording is correct, still short, and keeps the rhythm of the three-part list.

No other changes.

## Back-translation

- **geometry.items**:
  - Full turn · 100 Kè · 360°
  - Sum of the angles of a triangle · 50 Kè · 180°
  - Regular pentagon, interior angle · 30 Kè · 108°
  - Right angle · 25 Kè · 90°
  - A fifth of a turn (pentagon) · 20 Kè · 72°
  - Larger acute angle of the right-angle triangle 10-15-25 · 15 Kè · 54°
  - A tenth of a turn (decagon) · 10 Kè · 36°
  - A twentieth of a turn · 5 Kè · 18°
- **geometry.trigTitle**: "Waves and a new era for trigonometry."
- **geometry.trig**: "A wave that repeats every day has an exact period of 100 Kè. Cycles, orbits and oscillations finally share the same unit as the calendar. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1."
- **geometry.goldenTitle**: "The golden section, hidden under everyone's eyes."
- **geometry.golden**: "108°, 72°, 54°, 36°, 18° — strange angles, you say? In reality it's just the golden section, hidden under everyone's eyes. ¶ Put π aside. The golden section, φ = (1 + √5)/2 ≈ 1.618, is the proportion of the pentagon and the pentagram, the limit of the ratio between consecutive Fibonacci numbers, the spiral of the sunflower. ¶ Radians wrap these angles in π: π/10, π/5, 3π/10, 2π/5. In Kè they are simply 5, 10, 15 and 20 — and every sine and cosine is an exact expression in φ. Four values build the entire circle."
- **geometry.goldenCols**: Angle · Degrees · sin · cos
- **geometry.goldenRows** (unchanged from English):
  - 0 Kè · 0° · 0 · 1
  - 5 Kè · 18° · 1/(2φ) · √(2 + φ)/2
  - 10 Kè · 36° · √(3 − φ)/2 · φ/2
  - 15 Kè · 54° · φ/2 · √(3 − φ)/2
  - 20 Kè · 72° · √(2 + φ)/2 · 1/(2φ)
  - 25 Kè · 90° · 1 · 0
- **geometry.goldenIdentities** (unchanged from English): 2 cos 10 Kè = φ · 2 sin 5 Kè = 1/φ · 2 cos 10 Kè − 2 sin 5 Kè = 1 · cos 10 Kè ÷ sin 5 Kè = φ² · cos 10 Kè × sin 5 Kè = 1/4
- **geometry.triangleTitle**: "Let me introduce you to the 10-15-25 triangle."
- **geometry.triangle**: "The 30-60-90 right-angle triangle, we all know it, right? Let me introduce you instead to the 10-15-25 right-angle triangle. Its angles measure 10, 15 and 25 Kè — 50 in all, half a turn. Give it a hypotenuse equal to 2 and the longer leg measures exactly φ. Ten of these triangles, joined at the centre, form a regular pentagon. It is the right-angle triangle of pentagonal geometry."
- **geometry.goldenAngleTitle**: "And now, the golden angle."
- **geometry.goldenAngle**: "Divide a full turn according to the golden section and the smaller arc measures 100/φ² ≈ 38.2 Kè (137.5°): it is the rotation that separates one sunflower seed from the next. This step never comes back into alignment, so the seeds of the sunflower fill the flower head without leaving gaps. ¶ Kè is the geometry of nature."
- **meta.description**: "Nu:Time (刻时 Ke-Shi) is an open standard for time and place: a single clock for the whole planet, a decimal day of 10 gongs, 100 Kè, 1,000 beats and 100,000 ticks, and a single unit — Kè — that measures both the when and the where."
- **heritage.title**: "It's not a new idea. We only brought it to completion."
- **heritage.lead**: "For centuries great civilisations have been trying to divide the day in a more sensible way. Nu:Time gathers their wisdom and adds what none of them had: an entire planet in agreement on the same instant — wherever you are — united by the geometry of nature."
- **heritage.items[0].title**: "Kè (刻)"
- **heritage.items[0].text**: "For more than two thousand years Chinese astronomers divided the day into 100 Kè, measured with water clocks: Kè, the same unit that is at the heart of Nu:Time. The night was divided into five watches, the gēng (更). The Nu:Time · 刻时 Ke-Shi standard gives back to gēng (更) and to Kè (刻) the place that is due to them."
- **why.lead**: "The measurement of time is being rebuilt starting from the atom, yet the way we read it is stuck at the times of Babylon. AI has arrived. It's time."

## Drift

- **"Golden Ratio" → "sezione aurea"** (lowercase). This is the standard Italian term, equivalent to the English, and it is used consistently in all four places. It pairs with "angolo aureo". Acceptable.
- **"hiding in plain sight" → "nascosta sotto gli occhi di tutti"**. An established idiom with the same meaning. Acceptable.
- **heritage.title "solo"**: "We just finished it" is rendered as "we only/merely brought it to completion". This keeps the owner's modest reading, not "recently". The emphatic "Noi" contrasts us with the earlier civilisations, which the English implies. Acceptable.
- **heritage.lead "bound by" → "unito dalla"** ("united by"). Close. "Legato" would be more literal but can suggest constraint, so "unito" keeps the positive sense. Two smaller points carry over from the approved line: "that can agree" became "d'accordo" (in agreement, with "can" lost), and "long" became "da secoli". Both minor and acceptable.
- **why.lead "AI is here" → "L'IA è arrivata"** ("AI has arrived"). Same claim, natural Italian, and "IA" matches the rest of it.json. Acceptable.
- **"long side" → "cateto maggiore"** ("longer leg"). More precise than the English and mathematically correct, and it stops an Italian reader taking it as the hypotenuse. Acceptable.
- **"fivefold geometry" → "geometria pentagonale"**. A natural Italian equivalent. Acceptable.
- **"meeting at the centre" → "uniti al centro"** ("joined at the centre"). Same picture. Acceptable.
- **golden ¶1: "But it's really just" → "In realtà è solo"**. The "But" is folded into "in realtà". No change in meaning.
- **"limit of the Fibonacci sequence" → "limite del rapporto tra numeri di Fibonacci consecutivi"**. The Italian is more precise than the English and makes the same claim, stated correctly. Acceptable, and preferable for Italian readers.
- **"Third angle of the 10-15-25 right-angle triangle" → "Angolo acuto maggiore…"** ("larger acute angle"). It names the same angle (15 Kè, 54°) without the ambiguity of "third". Acceptable.
- **Kè rule**: followed everywhere (capital Kè, no article). "In Kè" and "Kè è la geometria della natura" read naturally.

## Verdict

**Pass with notes.** Three small fixes: goldenAngle ("lines up" had been rendered as "overlaps"), the 15-Kè row label in geometry.items (now names the angle unambiguously), and the Fibonacci limit in golden (now the ratio wording). All maths, tables and shapes match the English exactly. The notes above are acceptable localisation and need no action.
