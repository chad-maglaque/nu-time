# ur — translator notes

# Urdu (ur) notes: golden-ratio geometry update

- **Kè**: Latin capital Kè throughout. Urdu has no articles, so "the kè" was never an issue. The only real change is in heritage: "یہی Kè" (this very Kè) becomes "Kè، وہی اکائی جو…" (Kè, the same unit that…), following the new English. I found no other Kè-rule breaks in ur.json, so there are no `extra` entries. `meta.description` and `heritage.items[0].title` ("Kè · 刻", which has no brackets for bidi reasons) already followed the rule, so I returned them unchanged.
- **Golden Ratio** = سنہری تناسب in all four places, and **golden angle** = سنہری زاویہ. I rendered "hiding in plain sight" as "آنکھوں کے سامنے، پھر بھی اوجھل" (in front of your eyes, yet unseen), the same phrase in the title and in paragraph 1.
- **Degrees in running prose** are written "ڈگری", not "°". The list reads "108، 72، 54، 36، 18 ڈگری", and the golden angle reads "38.2 Kè ہوتی ہے، یعنی 137.5 ڈگری". In an RTL paragraph a trailing ° lands on the wrong side of the number ("°108"), and the English "(137.5°)" bracket after Latin text would split across directions. Table cells keep "°" unchanged.
- **Bidi in formulas**: "φ = (1 + √5)/2 ≈ 1.618" and "π/10، π/5، 3π/10، 2π/5" start with a Latin-class letter (φ / π), so each renders as one left-to-right block. The list therefore reads left to right as one unit, which is normal for math. "100/φ²" starts with a digit, so I put an LRM (U+200E) before it. Without it the result shows as "φ² ≈ 38.2 Kè/100". The page already uses LRMs (trigRows, 刻时™‎).
- **goldenRows**: I added an LRM before the cells that start with √, matching the existing trigRows notation ("‎√3/2"). These are invisible, the digits are unchanged, and the CSS already isolates `.trigtbl td`. goldenCols reuse the trigCols headers (زاویہ، ڈگری، sin، cos). The identities are identical to the English.
- **Right-angle triangle** = قائمہ الزاویہ مثلث, the standard textbook term, used in items, triangle and triangleTitle. Hypotenuse = وتر. "Long side" = لمبا ضلع, which is as ambiguous as the English. I treated مثلث as masculine ("ایسے دس مثلث").
- **Pentagon** = مخمس, already on the page. **Pentagram** = "پانچ نوکوں والا ستارہ" (five-pointed star), which is more familiar than پینٹاگرام. **Decagon** = "دس ضلعی شکل" because the textbook word معشر is obscure.
- **sine/cosine in prose** = سائن / کوسائن, and "value" = قیمت (textbook usage). I avoided the Persianised جیب / جیب التمام. "Exact expression in φ" became "can be written exactly using φ", with the same strength.
- **"fivefold geometry"** = "پانچ گنا توازن والی جیومیٹری" (geometry of five-fold balance/symmetry). I'm unsure here: a literal "پانچ گنا جیومیٹری" means nothing in Urdu, and تشاکل is the precise symmetry term but is heavier. A reviewer may prefer "پنج گوشہ" phrasing.
- **Spiral** = مرغولہ, the standard word and not heavy. **Fibonacci sequence limit** = فبوناچی سلسلے کی حد (حد = mathematical limit).
- **"AI is here."** = "AI آ چکا ہے۔" with Latin AI, as already used elsewhere on the page and treated as masculine. It comes before the unchanged pun "اب وقت آ گیا ہے۔".
- **Third angle of the 10-15-25 triangle** is translated literally ("تیسرا زاویہ"), even though 15 is the middle value listed. The trig paragraph order is swapped as in the English, and I kept the existing wording.

---

# Urdu (ur) review: golden-ratio geometry update (2026-11-19)

Reviewed `ur.out.json` against `ur.in.json` (en_new), `locales/ur.json`, `locales/en.json`, `docs/i18n/BRIEF.md`, `docs/i18n/notes/ur.md`, `docs/i18n/DECISIONS.md`, `build.mjs` (rendering) and `public/assets/site.css` (bidi rules). Output: `ur.final.json` (18 items, same paths and order as the input, no extras).

## Changes

1. **geometry.items[5][0]**
   - Before: `10-15-25 قائمہ الزاویہ مثلث کا تیسرا زاویہ` ("the third angle of the 10-15-25 right-angle triangle")
   - After: `10-15-25 قائمہ الزاویہ مثلث کا بڑا حادہ زاویہ` ("the larger acute angle of the 10-15-25 right-angle triangle")
   - Why: the owner wants the 15-Kè angle named unambiguously. تیسرا reads as "third in sequence", which points at 25 (the right angle). حادہ زاویہ (acute angle) is the school term, the same register as قائمہ زاویہ already on the page, and the larger of the two acute angles (10 and 15 Kè) is the 15-Kè angle. This matches the Italian and Portuguese finals ("larger acute angle"). It also avoids writing "15 Kè" twice in one row.

2. **geometry.golden, paragraph 3: π list bidi**
   - Before: `π/10، π/5، 3π/10، 2π/5۔`
   - After: `π/10،‏ π/5،‏ 3π/10،‏ 2π/5۔` (an invisible RLM, U+200F, after each Arabic comma)
   - Why: π is a strong-L character, so under the Unicode bidi algorithm (rule W7) every number after it also becomes L. The commas and spaces between items then sit between L characters and resolve to L too, so the four items form one left-to-right run with π/10 at the far left. Read right to left, the reader meets 2π/5 first. The next sentence, "Kè میں یہ بس 5، 10، 15 اور 20", and the degree list in paragraph 1 both display in RTL item order (first item at the right), so π/10 would visually line up against 20 instead of 5. With an RLM after each comma, each separator resolves to R and each item becomes its own LTR island. The items then display right to left in logical order (π/10 at the right), with each expression still drawn correctly inside its island ("3π/10": the 3 and π are both at level 2 and stay together). The Arabic comma then sits on the Urdu side of each item. The marks are invisible, and the page has no digit check on prose.

3. **geometry.golden, paragraph 3**
   - Before: `φ سے بالکل ٹھیک ٹھیک لکھی جا سکتی ہے` ("can be written absolutely exactly-exactly with φ")
   - After: `φ سے ٹھیک ٹھیک لکھی جا سکتی ہے` ("can be written exactly with φ")
   - Why: the double intensifier over-strengthens "an exact expression in φ" and is wordy. ٹھیک ٹھیک alone already means "exactly".

4. **geometry.triangle, last sentence**
   - Before: `پانچ گنا توازن والی جیومیٹری` ("geometry with five-times balance")
   - After: `مخمس کی جیومیٹری` ("the geometry of the pentagon")
   - Why: پانچ گنا means "five times as much" (پانچ گنا زیادہ), so پانچ گنا توازن reads as "five times the balance", not "fivefold symmetry". تشاکل is precise but heavy and academic, and پنج گوشہ is Persianised. مخمس is already the page's term for pentagon and the paragraph's own payoff (ten triangles make a regular pentagon), so "the right-angle triangle of pentagon geometry" is clear and natural. There is a slight narrowing; see Drift.

5. **geometry.goldenAngle**
   - Before: `یہ قدم کبھی خود سے سیدھ میں نہیں آتا`
   - After: `یہ قدم کبھی پلٹ کر اپنی سیدھ میں نہیں آتا` ("this step never comes back round into line with itself")
   - Why: خود سے normally means "by itself / on its own", so the original read as "the step never lines up on its own", which is a different and vague claim. پلٹ کر اپنی سیدھ gives the intended sense (repeated steps never coincide) in plain words.

**Bidi points checked and kept (no change):**

- **ڈگری instead of ° in prose** ("108، 72، 54، 36، 18 ڈگری", "یعنی 137.5 ڈگری"): this is harmless and natural, and it matches the page's own `geometry.deg` = ڈگری and `colDeg` = ڈگری میں. One factual correction to the translator's note: U+00B0 has bidi class ET, so "108°" would in fact stay attached to its number in RTL. The real hazard was the bracketed "(137.5°)" after Latin "Kè". The word form is still the better Urdu, so I kept it. Every table cell keeps "°" unchanged.
- **"(137.5°)" → "، یعنی 137.5 ڈگری"** ("…, that is 137.5 degrees"): the meaning is the same, and the result is a natural Urdu appositive. It avoids a bracket pair that would open after Latin text, which the ur notes already rule out site-wide.
- **LRM before 100/φ²**: this is needed and correct. Without it, "100" looks back to the Urdu word قوس (R) and stays a European number, while φ² ≈ 38.2 Kè becomes L. "/" falls between them and resolves to R, so the line displays as "φ² ≈ 38.2 Kè/100". The LRM makes "100" L, and the whole expression then renders as one LTR run. Confirmed classes: φ L, ² EN, / CS, ≈ ON, LRM L.
- **LRM before √ cells in goldenRows**: these are harmless. `.trigtbl td` is already `direction: ltr; unicode-bidi: isolate`, so the marks are redundant safety, and they match the existing trigRows convention ("‎√3/2", "‎−1"). They are used consistently, on every cell that starts with √ and only those cells; goldenRows has no cell starting with −. `tests/check_locales.py` compares only the digits of table cells, so the marks pass. Stripping U+200E leaves goldenRows identical to the English.
- **φ = (1 + √5)/2 ≈ 1.618**: this starts with φ (L), so every number inside becomes L. The bracket pair takes L from the preceding φ (rule N0), and the expression renders as one correct LTR run. No mark is needed.
- **"10-15-25", "30-60-90"**: a single hyphen (ES) between European numbers joins them into one number run, so these render correctly. They match the existing "30-60-90 مثلث".
- **Paragraphs that start with Latin** ("π کو…", "sin 25 Kè…", "Kè فطرت…"): `.lead` has no `unicode-bidi: plaintext`, so these paragraphs inherit RTL from `<html dir="rtl">` and stay right-aligned. The swapped trig paragraph is fine.
- **goldenIdentities**: these are rendered in `.phi-ids li` (LTR, isolated) and are identical to the English.

## Back-translation

- **geometry.items**:
  1. Full turn | 100 Kè | 360°
  2. Sum of a triangle's angles | 50 Kè | 180°
  3. Regular pentagon, interior angle | 30 Kè | 108°
  4. Right angle | 25 Kè | 90°
  5. Fifth part of a turn (pentagon) | 20 Kè | 72°
  6. The larger acute angle of the 10-15-25 right-angle triangle | 15 Kè | 54°
  7. Tenth part of a turn (ten-sided figure) | 10 Kè | 36°
  8. Twentieth part of a turn | 5 Kè | 18°
- **geometry.trigTitle**: Waves and the new era of trigonometry.
- **geometry.trig**: A wave that repeats daily has a period of exactly 100 Kè. Cycles, orbits and oscillations are at last measured in the very unit of the calendar. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1.
- **geometry.goldenTitle**: The Golden Ratio: in front of your eyes, yet hidden.
- **geometry.golden**: 108, 72, 54, 36, 18 degrees: you say these are strange angles? But in reality this is just the Golden Ratio, in front of your eyes, yet hidden. ¶ Put π to one side. The Golden Ratio, φ = (1 + √5)/2 ≈ 1.618, is the proportion of the pentagon and the five-pointed star, it is the limit of the Fibonacci sequence, it is the spiral of the sunflower. ¶ Radians wrap these angles in π: π/10, π/5, 3π/10, 2π/5. In Kè they are simply 5, 10, 15 and 20, and the value of every sine and cosine can be written exactly with φ. With four values the whole circle is built.
- **geometry.goldenCols**: Angle | Degrees | sin | cos
- **geometry.goldenRows**: identical to the English, row by row: 0 Kè 0° 0 1 / 5 Kè 18° 1/(2φ) √(2 + φ)/2 / 10 Kè 36° √(3 − φ)/2 φ/2 / 15 Kè 54° φ/2 √(3 − φ)/2 / 20 Kè 72° √(2 + φ)/2 1/(2φ) / 25 Kè 90° 1 0. Invisible LRMs sit before the √ cells.
- **geometry.goldenIdentities**: identical to the English (2 cos 10 Kè = φ; 2 sin 5 Kè = 1/φ; 2 cos 10 Kè − 2 sin 5 Kè = 1; cos 10 Kè ÷ sin 5 Kè = φ²; cos 10 Kè × sin 5 Kè = 1/4).
- **geometry.triangleTitle**: Meet the 10-15-25 triangle.
- **geometry.triangle**: The 30-60-90 right-angle triangle we all know, don't we? Now, in its place, meet the 10-15-25 right-angle triangle. Its angles are 10, 15 and 25 Kè, whose sum is 50, that is, half a turn. Give it a hypotenuse of 2 and its long side is exactly φ. When ten such triangles meet at the centre, a regular pentagon is formed. It is the right-angle triangle of the geometry of the pentagon.
- **geometry.goldenAngleTitle**: And now the golden angle.
- **geometry.goldenAngle**: Divide a full turn in the Golden Ratio and the smaller arc is 100/φ² ≈ 38.2 Kè, that is, 137.5 degrees: the turn from one sunflower seed to the next seed. This step never comes back round into line with itself, so the sunflower's seeds fill the whole flower without any gap. ¶ Kè is the geometry of nature.
- **meta.description**: Nu:Time, that is 刻时 Ke-Shi, is an open standard of time and place: one single clock for the whole world; a decimal day with 10 gongs, 100 Kè, 1,000 beats and 1,00,000 ticks; and one single unit, Kè, that measures both when and where.
- **heritage.title**: The idea isn't new. We just completed it.
- **heritage.lead**: Great civilisations have for ages tried to divide the day more sensibly. Nu:Time benefits from their wisdom and adds the thing none of them had: a world that can agree on one moment, wherever you are, and is bound to the geometry of nature.
- **heritage.items[0].title**: Kè · 刻
- **heritage.items[0].text**: For more than two thousand years Chinese astronomers kept dividing the day into 100 Kè, which were measured with water clocks: Kè, the same unit that is the centre of Nu:Time. The night was divided into five parts (watches), which in Chinese are called 更 gēng. The Nu:Time Standard · 刻时 Ke-Shi gives these very 更 gēng and 刻 Kè their rightful place back.
- **why.lead**: The system of measuring time is today being rebuilt anew from the level of the atom, but the way of showing time hasn't changed since the days of Babylon. AI has arrived. Now the time has come.

## Drift

- **items[5]**: "Third angle" became "larger acute angle". This is a deliberate change that carries out the owner's stated intent (the 15-Kè angle). It is acceptable.
- **triangle**: "fivefold geometry" became "the geometry of the pentagon". This narrows the meaning slightly, since fivefold symmetry also covers the pentagram and decagon. The paragraph itself is about the pentagon, and no plain Urdu word for "fivefold (symmetry)" exists that isn't misread or academic. It is acceptable localisation.
- **golden**: "those are odd, you say?" became "you say these are strange angles?", which adds the word "angles". "Hiding in plain sight" became "in front of your eyes, yet hidden", an idiomatic equivalent. Degrees are written as the word ڈگری once, after the list, rather than as ° on each number. "Exact expression in φ" became "can be written exactly with φ". All of these are acceptable, with no change of claim.
- **golden**: "the limit of the Fibonacci sequence" is kept literal (فبوناچی سلسلے کی حد), like the English. This is acceptable per the brief.
- **goldenAngle**: "(137.5°)" became "that is, 137.5 degrees", and "fill the head" became "fill the whole flower" (the flower head). "Never lines up with itself" adds "comes back round", which states the intended meaning more explicitly. All acceptable.
- **trig** (unchanged wording): "finally share the same unit with the calendar" is rendered as "are at last measured in the very unit of the calendar". This was accepted earlier and is not part of this change.
- **heritage.lead**: "a planet" is rendered as "a world" (unchanged wording from earlier); "bound by" became "bound to". Acceptable.
- **heritage.title**: بس gives "just" in the modest "simply" sense, not "recently". Correct.
- **why.lead**: "AI is here" became "AI has arrived". Natural, and the same claim.
- **Kè rule**: Latin capital Kè is used throughout, there is no article (Urdu has none), and Kè is never followed directly by کے/کی/کا. Golden Ratio = سنہری تناسب in all four places (goldenTitle, golden ×2, goldenAngle). Terms are consistent with the page: قائمہ زاویہ, مخمس, باقاعدہ مخمس, چکر, ٹرگنومیٹری, زاویہ/ڈگری column heads.

## Verdict

**Pass with notes.** All mathematics, table values, array shapes and paragraph breaks match the English. Five fixes were applied: the 15-Kè row label, bidi ordering of the π list, an over-intensified phrase, a misreadable "fivefold" rendering, and an ambiguous "lines up with itself". The notes are the slight narrowing of "fivefold" to "pentagon" and the use of ڈگری for degrees in prose. The bidi analysis follows the Unicode bidi algorithm and the site CSS; it has not been checked in a rendered browser.
