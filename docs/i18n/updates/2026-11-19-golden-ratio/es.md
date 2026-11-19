# es — translator notes

# es: notes for the 2026-11-19 batch

- **Golden Ratio = "razón áurea"**, lowercase in all four places (title, two places in `golden`, `goldenAngle`), because Spanish does not capitalise it. I chose *razón áurea* over *número áureo* because "divide una vuelta **en razón áurea**" is the idiomatic phrase, and *número áureo* doesn't fit there. The golden angle is **ángulo áureo**, which matches.
- **"Hiding in plain sight"** became "escondida a la vista de todos", the natural Spanish idiom (not the calque *a plena vista*). The same phrase is used in the title and in `golden`.
- **sen** is used in `goldenCols` and `goldenIdentities` and in the reordered `trig`, matching the page's existing notation. Every φ, π, √, fraction and = is unchanged, and the digits were checked against the English.
- **Decimals:** "1.618", "38.2" and "137.5" keep the decimal point, per DECISIONS #14.
- **Pentagram = "pentagrama".** This is the geometry term, but it also means a music staff. Right after "pentágono" it reads correctly. *Estrella de cinco puntas* is the fallback if a reviewer objects.
- **"Long side" = "cateto mayor"** (the standard term for the longer leg). **"Fivefold geometry" = "geometría pentagonal"**, which is clearer to a general reader than *simetría quíntuple*.
- **"Meet the 10-15-25 triangle"** became the title "Te presentamos el triángulo 10-15-25". In the body, "instead" became "Pues te presentamos otro: …", which keeps the swap from the 30-60-90 triangle.
- **Sunflower "head" = "disco"**, everyday wording rather than the botanical *capítulo*. "The step never lines up with itself" became "nunca vuelve a caer en el mismo punto", which keeps the meaning and is clearer.
- **heritage.title**: I read "We just finished it" as *simply*, so it became "Solo la completamos". If the owner meant *recently*, it would be "Acabamos de completarla".
- **heritage.lead**: "bound by the geometry of nature" is attached to *planeta* with "y unido por…", so it doesn't seem to modify *estés donde estés*.
- **why.lead**: "AI is here" became "La IA ha llegado", which avoids clashing with the "Ya es hora" that follows.
- **Kè review:** the article removals already applied to es.json read correctly ("Kè es el puente…", "devuelve a gēng (更) y a Kè (刻)…", "—Kè—"). No remaining "el Kè" or lowercase kè was found, so there are no extra entries.

---

# es — review of the changed strings (2026-11-19)

Checked against en_new, docs/i18n/BRIEF.md, notes/es.md, DECISIONS.md (#14: decimal point, thin-space thousands, sen/cos/tan) and the rest of locales/es.json. 18 items, no extras. Shapes match (items 8×3, goldenCols 4, goldenRows 6×4, goldenIdentities 5), and `\n\n` breaks are preserved. A script confirmed that every number and every φ/π/√/²/÷/×/−/=/≈ token appears in the same order as in the English. The only differences are the deliberate "15" added in items row 6 and "1000" with no separator in meta.description, which follows RAE and the current page. goldenRows is identical to the English. In goldenIdentities, "sin" becomes "sen", which the brief allows. The decimal point (1.618, 38.2, 137.5°) follows #14. No "el Kè" and no lowercase kè remain. "razón áurea" is used in all four Golden Ratio places, and "ángulo áureo" matches it.

Maths spot-check: 10/15/25 Kè are 36°/54°/90°, and 2·sen 54° = 2·cos 36° = φ, so the long leg, opposite the 15-Kè angle, is exactly φ. Ten triangles with their 10-Kè vertices meeting at the centre make a regular pentagon. 100/φ² ≈ 38.197 Kè ≈ 137.5°. All five identities hold.

## Changes

1. **geometry.items[5][0]**
   - Before: "Tercer ángulo del triángulo rectángulo 10-15-25"
   - After: "Ángulo de 15 Kè del triángulo rectángulo 10-15-25"
   - Why: "Tercer ángulo" reads as the third in sequence, which is 25 Kè, the right angle. The new wording names the 15-Kè angle unambiguously, as the owner intended.
2. **geometry.golden**, second paragraph
   - Before: "el límite de la sucesión de Fibonacci"
   - After: "el límite de los cocientes de la sucesión de Fibonacci"
   - Why: "límite de una sucesión" is a precise school term in Spanish (bachillerato), and the Fibonacci sequence itself diverges. Maths-literate Spanish readers would see the literal version as an error. The ratio wording is correct and stays short in the three-part list.
3. **meta.description**
   - Before: "100 000" (plain ASCII space)
   - After: "100 000" (U+00A0 no-break space, as in the current locales/es.json)
   - Why: the translator's output had silently replaced the no-break space used throughout es.json with a breaking space. Restoring it makes the string identical to the current page again.

Checked and kept:
- **"razón áurea" (lowercase).** This is correct Spanish orthography: RAE does not capitalise such terms. It is also the only form that works in "divide … en razón áurea". It reads naturally in all four places.
- **"No es una idea nueva. Solo la completamos."** This reads naturally as modesty ("we only/simply completed it"), and context makes "completamos" read as past, not present. Unaccented "solo" is current RAE spelling, and the adjective reading would need "Solos", so there is no ambiguity. Other options ("Simplemente la completamos", "Solo la hemos completado") are no better, and the perfect tense leans towards Spain. Keep.
- **Spain heritage card.** This batch doesn't touch it. It stays factual and neutral: "Un país entero fuera de su huso horario", west of Greenwich, CET in 1940, and "condicionan la vida cotidiana". There is no mocking and nothing political.

## Back-translation

- **geometry.items**:
  - Full turn | 100 Kè | 360°
  - Sum of the angles of a triangle | 50 Kè | 180°
  - Regular pentagon, interior angle | 30 Kè | 108°
  - Right angle | 25 Kè | 90°
  - One fifth of a turn (pentagon) | 20 Kè | 72°
  - 15-Kè angle of the 10-15-25 right triangle | 15 Kè | 54°
  - One tenth of a turn (decagon) | 10 Kè | 36°
  - One twentieth of a turn | 5 Kè | 18°
- **geometry.trigTitle**: "Waves and a new era for trigonometry."
- **geometry.trig**: "A wave that repeats every day has a period of exactly 100 Kè. Cycles, orbits and oscillations at last share the same unit with the calendar.\n\nsin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1."
- **geometry.goldenTitle**: "The golden ratio, hidden in everyone's view."
- **geometry.golden**: "108°, 72°, 54°, 36°, 18°: odd angles, you say? Well, really they are nothing more than the golden ratio, hidden in everyone's view.\n\nPut π aside. The golden ratio, φ = (1 + √5)/2 ≈ 1.618, is the proportion of the pentagon and the pentagram, the limit of the quotients of the Fibonacci sequence, the spiral of the sunflower.\n\nRadians wrap these angles in π: π/10, π/5, 3π/10, 2π/5. In Kè they are simply 5, 10, 15 and 20, and every sine and every cosine is expressed exactly in terms of φ. With four values the whole circle is built."
- **geometry.goldenCols**: Angle | Degrees | sin | cos
- **geometry.goldenRows**: identical to the English (0 Kè 0° 0 1 · 5 Kè 18° 1/(2φ) √(2 + φ)/2 · 10 Kè 36° √(3 − φ)/2 φ/2 · 15 Kè 54° φ/2 √(3 − φ)/2 · 20 Kè 72° √(2 + φ)/2 1/(2φ) · 25 Kè 90° 1 0)
- **geometry.goldenIdentities**: "2 cos 10 Kè = φ" · "2 sin 5 Kè = 1/φ" · "2 cos 10 Kè − 2 sin 5 Kè = 1" · "cos 10 Kè ÷ sin 5 Kè = φ²" · "cos 10 Kè × sin 5 Kè = 1/4"
- **geometry.triangleTitle**: "We introduce to you the 10-15-25 triangle."
- **geometry.triangle**: "We all know the 30-60-90 right triangle, right? Well, we introduce you to another: the 10-15-25 right triangle. Its angles measure 10, 15 and 25 Kè, and they add up to 50: half a turn. Give it a hypotenuse of 2 and its longer leg measures exactly φ. Ten of them, joined at the centre, form a regular pentagon. It is the right triangle of pentagonal geometry."
- **geometry.goldenAngleTitle**: "And now, the golden angle."
- **geometry.goldenAngle**: "Divide a full turn in the golden ratio and the smaller arc measures 100/φ² ≈ 38.2 Kè (137.5°): the turn that separates one sunflower seed from the next. Since that step never falls on the same point again, the seeds fill the sunflower's disc without leaving gaps.\n\nKè is the geometry of nature."
- **meta.description**: "Nu:Time (刻时 Ke-Shi) is an open standard for time and place: a single clock for the whole planet, a decimal day of 10 gongs, 100 Kè, 1000 beats and 100 000 tics, and one single unit —Kè— that measures both the when and the where."
- **heritage.title**: "It is not a new idea. We only completed it."
- **heritage.lead**: "For a long time, great civilizations have tried to divide the day in a more sensible way. Nu:Time gathers their wisdom and adds what none of them had: a planet able to agree on one same moment, wherever you are, and united by the geometry of nature."
- **heritage.items[0].title**: "Kè (刻)"
- **heritage.items[0].text**: "For more than two thousand years, Chinese astronomers divided the day into 100 Kè, measured with water clocks: Kè, the same unit that is at the heart of Nu:Time. The night was split into five watches, the gēng (更). The Nu:Time Standard · 刻时 Ke-Shi gives back to gēng (更) and to Kè (刻) the place that belongs to them."
- **why.lead**: "The measurement of time is being rebuilt from the atom, but the way of showing the time has not changed since Babylon. AI has arrived. It's about time."

## Drift

- **items[5]** names the angle by its value ("15-Kè angle") instead of "third". This is the clarification the owner asked for, so it is acceptable.
- **golden**: "limit of the quotients of the Fibonacci sequence" is more precise than the English. The owner explicitly allows this, and it is acceptable.
- **golden**: "every sine and cosine is an exact expression in φ" becomes "is expressed exactly in terms of φ". This is the same claim and acceptable. "Four values build the whole circle" uses an impersonal passive, with the same meaning.
- **"hiding in plain sight"** becomes "escondida a la vista de todos", the standard Spanish idiom. Acceptable.
- **triangle**: "long side" is rendered "cateto mayor" (longer leg). This is the precise term and matches the owner's intent. "Fivefold geometry" becomes "geometría pentagonal", a slight shift from symmetry order to shape, and clearer for general readers. Acceptable. "Meeting at the centre" becomes "unidos en el centro" (joined at the centre), which is acceptable.
- **goldenAngle**: "never lines up with itself" becomes "never falls on the same point again", the same idea in plainer words. "Head" becomes "disco" (disc), the everyday word. Acceptable.
- **why.lead**: "AI is here" becomes "La IA ha llegado" (AI has arrived), which avoids "ya está aquí… Ya es hora". Same meaning, acceptable. "Ya es hora" is the existing approved rendering of "It's time".
- **heritage.lead**: "bound by" becomes "unido por" (united by). It carries the same sense with a slightly warmer tone. Acceptable.
- **heritage.title**: "just" is rendered "Solo" (only/simply), which matches the owner's modesty reading, not "recently". Acceptable.

## Verdict

**Pass with notes.** I made three fixes: the ambiguous "Tercer ángulo" row, the Fibonacci "limit" wording, and a lost no-break space. Everything else is faithful, natural and mathematically exact.
