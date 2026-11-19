# fr — translator notes

# fr — notes for this round (2026-11-19)

- **Golden Ratio**: I used « nombre d’or », lowercase as French norms require, in all four places (goldenTitle, golden ×2, goldenAngle). "Divide in the Golden Ratio" became « partagez … selon le nombre d’or ». « Section dorée » and « proportion d’or » exist, but « nombre d’or » is the everyday term.
- **"hiding in plain sight"**: « caché sous nos yeux », used in both the title and the first paragraph, as in the English.
- **Kè review**: the article removals already in locales/fr.json all read naturally. Examples: « Kè fait le pont… », « une seule unité — Kè — », « rend à gēng (更) et à Kè (刻) », « Les unités, Kè, la synchronisation… ». Phrases like « à chaque Kè », « le cercle de 100 Kè » and « en Kè » use a determiner or preposition, not an article on Kè, so I left them. I found nothing else that breaks the rule, so there are no extra entries.
- **Out of date**: docs/i18n/notes/fr.md still says lowercase "kè". The new rule (capital Kè, no article) replaces that line. I did not edit it.
- **Spacing**: table cells use U+00A0 between the number and Kè, matching trigRows. Prose and goldenIdentities use U+202F, matching the existing `trig` string. U+00A0 goes before ":" and U+202F before "?".
- **Notation**: sin/cos stay as on the page. Formulas, φ, π, √, ÷, × are unchanged. Prose uses decimal commas (1,618 · 38,2 · 137,5°). goldenCols matches trigCols: Angle / Degrés / sin / cos.
- **trigTitle**: « Les ondes, et une nouvelle ère pour la trigonométrie. » The comma keeps the heading rhythm of the original « Et une nouvelle ère… ».
- **"long side"**: I wrote « le plus long côté de l’angle droit ». A bare « grand côté » could be read as the hypotenuse. The math is the same: 2 cos 36° = φ.
- **"fivefold geometry"**: « géométrie d’ordre cinq », echoing the standard French « symétrie d’ordre 5 ». « Géométrie pentagonale » is the alternative if you want something plainer.
- **"limit of the Fibonacci sequence"**: I kept this literal, as the English has it. A French maths reader may notice that it is strictly the limit of the *ratio* of consecutive terms. I did not change the claim.
- **heritage.lead**: "— no matter where you are — bound by…" became « — où que vous soyez — et unie par la géométrie de la nature ». French needs the « et » to attach the second qualifier to « planète ».
- **Unchanged**: meta.description and the heritage China card (title and text) already matched the new English, so I kept them as they are. In why.lead, "AI is here." became « L’IA est là. »

---

# fr — review of the changed strings (2026-11-19)

Checked against en_new, docs/i18n/BRIEF.md, notes/fr.md, DECISIONS.md and the rest of locales/fr.json. 18 items, no extras (I agree with the translator: the rest of fr.json already follows the Kè rule; "à chaque Kè", "en Kè", "le cercle de 100 Kè" put the determiner on another noun, not on Kè).

Script checks: shapes match (items 8×3, goldenCols 4, goldenRows 6×4, goldenIdentities 5). The `\n\n` breaks are preserved in trig, golden and goldenAngle. goldenRows and goldenIdentities match the English cell for cell; only the space before Kè differs (U+00A0 in table cells, U+202F in identities and prose), as in the existing trigRows and trig. There are no straight apostrophes. Typography matches the file: U+00A0 before ":", U+202F before "?". Decimal commas are used in prose (1,618 · 38,2 · 137,5°).

Maths: the 10-15-25 triangle has angles of 36°, 54° and 90°. With a hypotenuse of 2, the longer leg is opposite the 54° angle, so it is 2 sin 54° = 2 cos 36° = φ. Ten of these triangles, with their 36° vertices at the centre, make 360° and form a regular pentagon. 100/φ² = 38,197 ≈ 38,2 Kè = 137,5°. All of it is correct in the French.

## Changes

1. `geometry.items[5][0]`
   - Before: « Troisième angle du triangle rectangle 10-15-25 »
   - After: « Angle de 15 Kè du triangle rectangle 10-15-25 »
   - Why: owner point. « Troisième angle » reads as the third in the 10-15-25 sequence, which is the 25-Kè right angle. Naming the value removes the ambiguity. It repeats the 15 Kè in the next column, but that is harmless. The French alternatives are worse: « grand angle aigu » isn't idiomatic, and « le plus grand des angles aigus » is too long for a table label. U+00A0 between 15 and Kè, as in the table cells.

2. `geometry.golden`, paragraph 2
   - Before: « la limite de la suite de Fibonacci »
   - After: « le rapport limite de la suite de Fibonacci »
   - Why: my call (owner point 2). In French school maths, *limite d’une suite* is a precise term from the lycée curriculum, and the Fibonacci sequence tends to +∞. A maths-literate French reader would read the literal version as an error. « Rapport limite » ("limiting ratio") is correct and short, and it keeps the three-part rhythm of the list.

3. `geometry.triangle`, "fivefold geometry"
   - Before: « le triangle rectangle de la géométrie d’ordre cinq »
   - After: « le triangle rectangle de la géométrie pentagonale »
   - Why: « d’ordre 5 » is established for *symétrie* (rotations, quasicrystals). Attached to *géométrie*, it sounds like invented jargon to a French reader. « Symétrie d’ordre 5 » would be idiomatic, but it changes "geometry" into "symmetry". « Géométrie pentagonale » keeps the word "geometry", reads plainly and is accurate here: everything in the section is pentagon, pentagram or decagon.

4. `geometry.triangle`, "long side"
   - Before: « le plus long côté de l’angle droit »
   - After: « le plus long des côtés de l’angle droit »
   - Why: this is the grammatical form (a right angle has two sides, the legs, and we mean the longer of the two). It keeps the translator's good choice of « côtés de l’angle droit », which can't be confused with the hypotenuse.

5. `geometry.goldenAngle`
   - Before: « — l’écart entre une graine de tournesol et la suivante »
   - After: « — la rotation qui sépare une graine de tournesol de la suivante »
   - Why: the English "turn" is an angle of rotation. « Écart » suggests a distance or gap, which then clashes with « sans laisser de vide » two lines later. « Rotation » is faithful.

No other changes.

Judged and kept:
- « nombre d’or », lowercase. This is the standard, everyday French term, and French doesn't capitalise it. A capital "Nombre d’or" would look like an anglicism. It is used consistently in all four places (goldenTitle, golden ×2, goldenAngle), and « angle d’or » is the standard term for the golden angle.
- trigTitle « Les ondes, et une nouvelle ère pour la trigonométrie. » The comma before *et* is a deliberate rhythmic pause, which French tolerates in titles. It's the translator's call.
- « caché sous nos yeux » is a natural equivalent of "hiding in plain sight".
- « capitule » is the correct botanical word for the sunflower head. It is slightly technical but fine for this audience.
- heritage.lead « et unie par la géométrie de la nature ». French needs the *et*. *Unie* ("united") is warmer than "bound", but « liée par » would suggest constraint or obligation (*liée par un contrat*), so *unie* is the better French.
- « Kè, c’est la géométrie de la nature. » The dislocation is natural, emphatic French for a bold closing line, and it needs no article.

## Back-translation

- **geometry.items**:
  - Full turn · 100 Kè · 360°
  - Sum of the angles of a triangle · 50 Kè · 180°
  - Regular pentagon, interior angle · 30 Kè · 108°
  - Right angle · 25 Kè · 90°
  - Fifth of a turn (pentagon) · 20 Kè · 72°
  - 15-Kè angle of the 10-15-25 right triangle · 15 Kè · 54°
  - Tenth of a turn (decagon) · 10 Kè · 36°
  - Twentieth of a turn · 5 Kè · 18°
- **geometry.trigTitle**: Waves, and a new era for trigonometry.
- **geometry.trig**: A wave that repeats every day has a period of exactly 100 Kè. Cycles, orbits and oscillations finally share the same unit as the calendar. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1.
- **geometry.goldenTitle**: The golden number, hidden before our eyes.
- **geometry.golden**: 108°, 72°, 54°, 36°, 18° — strange values, you say? It is in fact only the golden number, hidden before our eyes. ¶ Let us set π aside. The golden number, φ = (1 + √5)/2 ≈ 1.618, is the proportion of the pentagon and the pentagram, the limiting ratio of the Fibonacci sequence, the spiral of the sunflower. ¶ Radians wrap these angles in π: π/10, π/5, 3π/10, 2π/5. In Kè, they are simply 5, 10, 15 and 20 — and every sine, every cosine is written exactly in terms of φ. With four values, you build the whole circle.
- **geometry.goldenCols**: Angle · Degrees · sin · cos
- **geometry.goldenRows**: identical to the English (0 Kè/0°/0/1; 5 Kè/18°/1/(2φ)/√(2 + φ)/2; 10 Kè/36°/√(3 − φ)/2/φ/2; 15 Kè/54°/φ/2/√(3 − φ)/2; 20 Kè/72°/√(2 + φ)/2/1/(2φ); 25 Kè/90°/1/0)
- **geometry.goldenIdentities**: identical to the English (2 cos 10 Kè = φ; 2 sin 5 Kè = 1/φ; 2 cos 10 Kè − 2 sin 5 Kè = 1; cos 10 Kè ÷ sin 5 Kè = φ²; cos 10 Kè × sin 5 Kè = 1/4)
- **geometry.triangleTitle**: Discover the 10-15-25 triangle.
- **geometry.triangle**: The 30-60-90 right triangle, everyone knows it, right? Make way instead for the 10-15-25 right triangle. Its angles measure 10, 15 and 25 Kè — 50 in total, that is, a half-turn. Give it a hypotenuse of 2: the longer of the sides of the right angle measures exactly φ. Ten of these triangles, joined at the centre, form a regular pentagon. It is the right triangle of pentagonal geometry.
- **geometry.goldenAngleTitle**: And now, the golden angle.
- **geometry.goldenAngle**: Divide a full turn according to the golden number: the smaller arc measures 100/φ² ≈ 38.2 Kè (137.5°) — the rotation that separates one sunflower seed from the next. This step never comes back into line with itself, so the sunflower's seeds fill the flower head without leaving any gap. ¶ Kè — that is the geometry of nature.
- **meta.description**: Nu:Time (刻时 Ke-Shi) is an open standard for time and place: a single clock for the whole planet, a decimal day of 10 gongs, 100 Kè, 1,000 beats and 100,000 tics, and a single unit — Kè — to measure both the when and the where.
- **heritage.title**: Not a new idea. We simply brought it to completion.
- **heritage.lead**: Great civilizations have long sought to divide the day in a more sensible way. Nu:Time inherits their wisdom and adds to it what none of them had: a planet able to agree on the same instant — wherever you are — and united by the geometry of nature.
- **heritage.items[0].title**: Kè (刻)
- **heritage.items[0].text**: For more than two thousand years, Chinese astronomers divided the day into 100 Kè, measured by water clock — Kè, the very unit at the heart of Nu:Time. Night was counted in five watches, the gēng (更). The Nu:Time standard · 刻时 Ke-Shi gives gēng (更) and Kè (刻) back the place that is theirs.
- **why.lead**: The measurement of time is today being rebuilt from the atom up, but its display has not changed since Babylon. AI is here. It is time.

## Drift

- **"limit of the Fibonacci sequence" → "limiting ratio of the Fibonacci sequence"**. This is a deliberate correction, which the brief allows. The claim is the one the English intends, stated in a form that French maths readers won't flag.
- **"fivefold geometry" → "pentagonal geometry"**. This is slightly narrower in principle, but equivalent in this context, where all the figures are pentagon or decagon based. Acceptable.
- **"15-Kè angle" for "Third angle"**. This follows the owner's stated intent.
- **"Waves and…" → "Waves, and…"**. The comma adds a pause but doesn't change the meaning. Acceptable.
- **"bound by" → "united by"**. This is a slight warming. It's the natural French, since *liée par* reads as an obligation. Acceptable.
- **"Meet" → "Discover" (title) / "Make way for" (body)**. These are idiomatic equivalents, with the same conversational tone. Acceptable.
- **"But it's really just" → "It is in fact only"**. The French drops "But", but « en fait … ne … que » carries the same deflation. Acceptable.
- **"Golden Ratio" (capitalised) → « nombre d’or » (lowercase)**. This follows French orthographic convention. It is consistent in all four places.
- Everything else is faithful. Numbers, formulas, table values, the Kè rule and the "simply finished" modesty are all correct.

## Verdict

Pass with notes. Five fixes were applied (the 15-Kè row label, the Fibonacci ratio, « géométrie pentagonale », the right-angle sides wording, and "rotation" for "turn"). The maths, shapes and typography are all correct. Separately, docs/i18n/notes/fr.md still says lowercase "kè" in running text. This round's strings follow the new capital-Kè rule, so that note is stale. I did not edit it.
