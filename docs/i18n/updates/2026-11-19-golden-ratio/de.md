# de — translator notes

# de – notes (2026-11-19 update)

- **Golden Ratio → „Goldener Schnitt“** in all four places (goldenTitle, golden ×2, goldenAngle as „im Goldenen Schnitt“). „Golden angle“ → „der Goldene Winkel“, capitalised as the fixed German term.
- **heritage.title** → „Keine neue Idee. Wir haben sie nur zu Ende gebracht.“ „zu Ende bringen“ = *finish*; „nur“ carries the modest *just*. Replaces „zu Ende gedacht“, which added a *thought through* nuance the English doesn't have.
- **„hiding in plain sight“** → „vor aller Augen versteckt“, the established German rendering of the paradox.
- **„those are odd, you say?“** → „krumme Werte, sagst du?“ („krumme Zahlen“ is the idiom for non-round numbers).
- **10-15-25 triangle**: hyphenated as „10-15-25-Dreieck“, like the existing „30-60-90-Dreieck“. „long side“ → „längere Kathete“ (exact; „lange Seite“ could be read as the hypotenuse). „fivefold geometry“ → „fünfzählige Geometrie“ (as in „fünfzählige Symmetrie“).
- **Table labels**: „Fünftel/Zehntel/Zwanzigstel des Vollwinkels“, consistent with row 1 „Vollwinkel“. In running prose, *turn* is „Drehung“.
- **„Third angle of the 10-15-25 …“** translated literally („Dritter Winkel des rechtwinkligen 10-15-25-Dreiecks“). Note that read in order, the third of 10, 15, 25 would be 25, not 15. German keeps the same ambiguity as the English.
- **„The step never lines up with itself“** → „kommt nie mit sich selbst zur Deckung“ (geometric idiom). Sunflower *head* → „Blütenkopf“.
- **Notation**: sin/cos, −, ÷, ×, φ, √ and all table formulas are unchanged. Decimal comma in prose (1,618; 38,2; 137,5). goldenCols reuse the old trigCols wording (Winkel, Grad, sin, cos).
- **„AI is here.“** → „KI ist da.“ (no article, headline style).
- **Kè rule review**: the applied removals (meta.description „Einheit namens Kè“, how card, heritage title/text, build spec item) read naturally. Kept as they are. One extra: build.items[2] „bei jedem Kè“ → „pro Kè“. This drops the determiner and avoids implying a grammatical gender. It's optional.
- docs/i18n/notes/de.md still says „das Kè / die Kè“. Update it to „Kè, no article“ when convenient. I did not edit it.

---

# de: review (2026-11-19 geometry / Golden Ratio update)

Reviewer: independent native-level German review of `de.out.json` against `de.in.json` (en_new). Result in `de.final.json`, which parses. Shapes match en_new: items 8×3, goldenRows 6×4, goldenCols 4, goldenIdentities 5. `\n\n` breaks are preserved. goldenRows and goldenIdentities are byte-identical to the English. Digits and formula symbols match in every item. The one difference is the intended "15" in the row 15 label.

## Changes

1. **geometry.items[5][0]**
   - Before: „Dritter Winkel des rechtwinkligen 10-15-25-Dreiecks“
   - After: „15-Kè-Winkel im rechtwinkligen 10-15-25-Dreieck“
   - Why: per owner intent, the label must name the 15-Kè angle. „Dritter Winkel“ reads as the third in the list 10-15-25, which is 25. „im … Dreieck“ matches the existing row „Winkelsumme im Dreieck“.
2. **geometry.goldenTitle**
   - Before: „Der Goldene Schnitt, vor aller Augen versteckt.“
   - After: „Der Goldene Schnitt, versteckt direkt vor unserer Nase.“
   - Why: „versteckt vor …“ parses naturally as *verstecken vor* = "hidden **from** everyone's eyes". That is the opposite of "in plain sight". „direkt vor unserer Nase“ is the everyday German idiom for something obvious that people overlook. The inclusive „unser“ fits the page's „kennen wir alle“.
3. **geometry.golden, paragraph 1**
   - Before: „Dahinter steckt nur der Goldene Schnitt, vor aller Augen versteckt.“
   - After: „Dabei ist es eigentlich nur der Goldene Schnitt, versteckt direkt vor unserer Nase.“
   - Why: same idiom fix as in the title, kept consistent. The new wording also avoids the „steckt … versteckt“ echo, and „Dabei … eigentlich nur“ carries "But it's really just".
4. **geometry.golden, paragraph 2**
   - Before: „der Grenzwert der Fibonacci-Folge“
   - After: „der Grenzwert der Fibonacci-Quotienten“
   - Why: in German „Grenzwert“ is the strict school/university term, and math-literate readers know the Fibonacci sequence itself diverges. „Fibonacci-Quotienten“, the ratios of consecutive terms, is correct and keeps the three-part list short. The brief allows this ratio wording.
5. **geometry.triangle**
   - Before: „Zehn davon, im Mittelpunkt zusammengesetzt, ergeben …“
   - After: „Zehn davon, die sich im Mittelpunkt treffen, ergeben …“
   - Why: closer to "meeting at the centre". „im Mittelpunkt zusammengesetzt“ ("assembled in the centre") is slightly off: they meet at the centre point and are not assembled inside it.

**Extra entry (build.items[2].text, „bei jedem Kè“ → „pro Kè“): kept.** The English says "a haptic pulse every Kè". „pro Kè“ is faithful, reads naturally in a spec list, and drops the determiner that implies a grammatical gender, so it follows the Kè-as-name rule.

Accepted as the translator rendered them: „Goldener Schnitt“ in all four places (goldenTitle, golden ×2, goldenAngle „im Goldenen Schnitt“); „der Goldene Winkel“; heritage.title „Keine neue Idee. Wir haben sie nur zu Ende gebracht.“ („nur“ carries the modest "just", not "recently"); „Wellen und Trigonometrie für eine neue Zeit.“, which matches the existing „Geometrie für eine neue Zeit.“; „längere Kathete“ for "long side"; „fünfzählige Geometrie“.

## Back-translation

- **geometry.items**:
  - Full angle | 100 Kè | 360°
  - Angle sum in a triangle | 50 Kè | 180°
  - Regular pentagon, interior angle | 30 Kè | 108°
  - Right angle | 25 Kè | 90°
  - Fifth of the full angle (pentagon) | 20 Kè | 72°
  - 15-Kè angle in the right-angled 10-15-25 triangle | 15 Kè | 54°
  - Tenth of the full angle (decagon) | 10 Kè | 36°
  - Twentieth of the full angle | 5 Kè | 18°
- **geometry.trigTitle**: Waves and trigonometry for a new era.
- **geometry.trig**: A wave that repeats daily has a period of exactly 100 Kè. Cycles, orbits and oscillations finally share the same unit with the calendar. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1.
- **geometry.goldenTitle**: The Golden Section, hidden right under our nose.
- **geometry.golden**:
  - ¶1: 108°, 72°, 54°, 36°, 18°: crooked (non-round) values, you say? Yet it's really only the Golden Section, hidden right under our nose.
  - ¶2: Set π aside for once. The Golden Section, φ = (1 + √5)/2 ≈ 1.618, is the proportion of pentagon and pentagram, the limit of the Fibonacci quotients, the spiral of the sunflower.
  - ¶3: Radian measure packs these angles in π: π/10, π/5, 3π/10, 2π/5. In Kè they are simply 5, 10, 15 and 20, and every sine and cosine can be expressed exactly in φ. From four values the whole circle arises.
- **geometry.goldenCols**: Angle | Degrees | sin | cos
- **geometry.goldenRows**: identical to English (0 Kè/0°/0/1; 5 Kè/18°/1/(2φ)/√(2 + φ)/2; 10 Kè/36°/√(3 − φ)/2/φ/2; 15 Kè/54°/φ/2/√(3 − φ)/2; 20 Kè/72°/√(2 + φ)/2/1/(2φ); 25 Kè/90°/1/0)
- **geometry.goldenIdentities**: identical to English (2 cos 10 Kè = φ; 2 sin 5 Kè = 1/φ; 2 cos 10 Kè − 2 sin 5 Kè = 1; cos 10 Kè ÷ sin 5 Kè = φ²; cos 10 Kè × sin 5 Kè = 1/4)
- **geometry.triangleTitle**: May I introduce: the 10-15-25 triangle.
- **geometry.triangle**: We all know the right-angled 30-60-90 triangle, don't we? Here comes the right-angled 10-15-25 triangle instead. Its angles measure 10, 15 and 25 Kè, together 50, half a turn. Give it a hypotenuse of 2, and its longer leg is exactly φ. Ten of them, meeting at the centre, make a regular pentagon. It is the right-angled triangle of fivefold geometry.
- **geometry.goldenAngleTitle**: And now the Golden Angle.
- **geometry.goldenAngle**: If you divide a full turn in the Golden Section, the smaller arc measures 100/φ² ≈ 38.2 Kè (137.5°), the turn from one sunflower seed to the next. This step never comes into coincidence with itself, which is why the seeds of the sunflower fill the flower head without gaps. ¶ Kè is the geometry of nature.
- **meta.description**: Nu:Time (刻时 Ke-Shi) is an open standard for time and place: one clock time for the whole planet, a decimal day of 10 Gongs, 100 Kè, 1,000 Beats and 100,000 Ticks, and a single unit called Kè that measures both: when and where.
- **heritage.title**: Not a new idea. We only brought it to completion.
- **heritage.lead**: Great cultures have repeatedly tried to divide the day more sensibly. Nu:Time takes over their insights and adds what none of them had: a planet that can agree on the same moment, no matter where you are, bound together by the geometry of nature.
- **heritage.items[0].title**: Kè (刻)
- **heritage.items[0].text**: For over two thousand years Chinese astronomers divided the day into 100 Kè, measured with water clocks: Kè, the same unit that stands at the heart of Nu:Time. The night was divided into five watches, the Gēng (更). The Nu:Time Standard · 刻时 Ke-Shi gives Gēng (更) and Kè (刻) back their rightful place.
- **why.lead**: Time measurement is currently being rebuilt from the atom up, yet the way we display time has not changed since Babylon. AI is here. It's about time.
- **build.items[2].text** (extra): A reference design: low-power ARM microcontroller, GNSS for UTC and Kè coordinates, MIP display and a haptic pulse per Kè. CERN-OHL-P 2.0.

## Drift

- **items: „Vollwinkel“ for "turn"** in the table labels („Fünftel des Vollwinkels“), versus „Drehung“ in prose. It matches the existing row 1 „Vollwinkel“ and is the German school term. Acceptable.
- **items row 15 now names "15-Kè angle"** instead of "third angle". This is the clarification the owner asked for. Acceptable and intended.
- **„Goldener Schnitt“ for φ itself.** Strictly the term names the division, but in German it is the standard everyday name for the ratio and the number 1,618. Acceptable.
- **„krumme Werte“** ("non-round values") for "odd". It narrows "odd" to its intended sense (not round numbers). Acceptable.
- **„versteckt direkt vor unserer Nase“** ("right under our nose") for "hiding in plain sight". This is the idiomatic equivalent, and the obviousness/overlooking sense is kept. Acceptable.
- **„Fibonacci-Quotienten“** instead of a literal „Fibonacci-Folge“. It is more precise than the English and allowed by the brief. Acceptable.
- **triangleTitle „Darf ich vorstellen: …“** ("May I introduce") for "Meet the …". This is the natural German introduction formula, same tone. Acceptable.
- **„Hier kommt stattdessen …“** ("here comes … instead") for "Meet … instead". It is conversational and keeps the contrast. Acceptable.
- **„einfach“ omitted in heritage.title.** „nur“ ("only") carries "just" in the modest sense and cannot be read as "recently". Acceptable.
- **why.lead „Es wird Zeit.“** ("it's about time") is the existing, approved pun rendering. Unchanged.
- **meta.description „eine Uhrzeit für den ganzen Planeten“** ("one clock time") is existing, approved wording. Unchanged.

No additions, losses, softening or strengthening of claims. All mathematics checks out: 2·sin 54° = φ (long leg with hypotenuse 2); 10 × 36° = 360° at the centre gives a regular pentagon; 100/φ² = 38.197 ≈ 38,2 Kè = 137,5°.

## Verdict

**Pass with notes.** Five fixes were applied: the row 15 label, the "plain sight" idiom in two places, the Fibonacci limit, and "meeting at the centre". The optional „pro Kè“ extra is kept. Housekeeping, not blocking: `docs/i18n/notes/de.md` still lists „das Kè / die Kè“ and should be updated to "Kè, no article" (not edited here, per the brief).
