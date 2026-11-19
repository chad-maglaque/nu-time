# ru — translator notes

# ru — notes for the 2026-11-19 update

- **Кэ capitalised everywhere**, matching the English rule that Kè is a name: «100 Кэ», «В Кэ», «1 Кэ», table cells, units.ke/kes, the licence line. Partial capitalisation (only where Kè stands alone) would leave «100 кэ» beside «Кэ — это…» on one page and look like a mistake. It also stops lowercase «кэ» reading as a stray syllable. It stays indeclinable and neuter («каждое Кэ»). The 15 extra entries change only кэ → Кэ, nothing else. гэн (更) stays lowercase, like gēng in the English.
- **Golden Ratio → золотое сечение**, lowercase (the standard Russian term; capitals would look odd), used the same way in goldenTitle, golden (twice) and goldenAngle. **golden angle → золотой угол.**
- **"hiding in plain sight" → «спрятанное на самом видном месте»**, a set Russian phrase, used the same way in the title and the first paragraph.
- **10-15-25 / 30-60-90** kept as hyphenated names so the two read as a pair. The old 30-60-90 row was spelled out («с углами 30°, 60° и 90°»), but in running prose the short form is clear to this audience. "right-angle triangle" → «прямоугольный треугольник»; "long side" → «длинный катет» (the correct term, since the hypotenuse is named separately).
- **"fivefold geometry" → «геометрия пятикратной симметрии»**; "It is the right-angle triangle of…" → «Это и есть прямоугольный треугольник…». «и есть» carries the "the" without adding a claim.
- **"never lines up with itself"** rebuilt as «никогда не возвращает семечко на уже занятое направление» (a literal «не совпадает сам с собой» means nothing in Russian). Sunflower "head" → «шляпка» (the everyday word; «корзинка» is the botanical term if a more technical word is preferred).
- **"Radians wrap these angles in π" → «Радианы заворачивают эти углы в π»**, keeping the image. "Four values build the whole circle" → «Из четырёх значений складывается весь круг».
- **heritage.lead**: "bound by the geometry of nature" → «и которую объединяет геометрия природы», kept at the end of the sentence as in the English.
- **heritage card**: "— Kè, the same unit at the heart of Nu:Time" → «— это Кэ, та самая единица, что лежит в основе Nu:Time».
- **"AI is here." → «ИИ уже здесь.»**; "We just finished it" → «Мы просто довели её до конца».
- **Typography**: U+00A0 between numbers and Кэ and before every spaced em dash; decimal comma in prose (1,618; 38,2; 137,5); table cells keep their digits, sin/cos and the − sign; goldenCols reuse the old headers «Угол / Градусы / sin / cos».
- `geometry.trigCols` / `trigRows` are no longer in en.json, so they were not touched or capitalised. They should be dropped from ru.json when the file is merged.

---

# ru — review of the 2026-11-19 geometry / Golden Ratio update

Reviewer checks run: shapes (items 8×3, goldenRows 6×4, goldenCols 4, goldenIdentities 5) match; `\n\n` breaks match en_new in every string; goldenRows and goldenIdentities are identical to the English cell by cell once Kè → Кэ (U+00A0 before Кэ); geometry.items Кэ/degree columns match the English digits (decimal comma only); every en_new still equals the current locales/en.json. U+00A0 is used between number and Кэ and before every spaced em dash, as in the rest of ru.json. ru.final.json parses.

## Changes

1. **geometry.items[5][0]**
   «Третий угол прямоугольного треугольника 10-15-25» → «Прямоугольный треугольник 10-15-25, угол в 15 Кэ»
   Why: «третий угол» reads as "the third in the sequence", which is 25 (the right angle), the misreading the owner flagged. The new label names the 15-Кэ angle outright and copies the format of the row above it («Правильный пятиугольник, внутренний угол»).

2. **geometry.golden**: «предел последовательности Фибоначчи» → «предел отношения соседних чисел Фибоначчи»
   Why: Russian engineering readers learn at school that the Fibonacci sequence grows without bound. "Предел последовательности Фибоначчи" reads as a mathematical error, so I used the ratio wording, which the brief allows.

3. **geometry.golden**: «Радианы заворачивают эти углы в π:» → «В радианах эти углы завёрнуты в π:»
   Why: the active «Радианы заворачивают…» sounds translated. The passive keeps the wrapping image, reads naturally and sets up the next sentence: «В радианах … завёрнуты в π … В Кэ это просто 5, 10, 15 и 20».

4. **geometry.triangle**: «и длинный катет окажется ровно φ» → «и больший катет окажется равен ровно φ»
   Why: «больший катет» is the standard textbook term («длинный катет» is understood but is a calque). «окажется равен ровно φ» is grammatically complete; «окажется ровно φ» is colloquially clipped.

5. **geometry.goldenAngle**: «Разделите полный оборот в золотом сечении» → «Разделите полный оборот по золотому сечению»
   Why: «разделить по золотому сечению» is the usual Russian collocation. The term stays «золотое сечение».

Extras: all 16 are kept. The brief says 15, but the translator's file has 16 "extra" entries (units.ke, units.kes, how.cards[3].unit/text, ke.lead, ke.facts[0–3], geometry.lead, geometry.colKe, why.items[5].text, build.items[0–2].text, build.license). A script checked each one against locales/ru.json: in every case the new string equals the current one with кэ → Кэ, and nothing else changes. After merge, the only lowercase «кэ» left in ru.json is in `geometry.trigRows`. That key is no longer in en.json and should be dropped at merge, as the translator notes say. No other locale or public asset contains «кэ».

On the capital Кэ itself: Russian writes unit names in lowercase, so «100 Кэ» will look unusual at first. In this context, though, it reads as intended: a proper name used as a unit, like a brand. It is also better than mixing «100 кэ» with «Кэ — это геометрия природы» on one page, which would look like a typo. Lowercase «кэ» also risks reading as the particle/syllable «кэ». Treating it as indeclinable and neuter («каждое Кэ», «из ста Кэ», «между градусами и Кэ», «в Кэ») is correct and consistent throughout. гэн (更) correctly stays lowercase. Accepted.

Checked and kept:
- **«золотое сечение»** (lowercase, standard term), used consistently in goldenTitle, golden ×2 and goldenAngle (the last now «по золотому сечению»).
- **«золотой угол»**, the standard term.
- **«спрятанное на самом видном месте»** is a well-established Russian rendering of "hiding in plain sight" and reads naturally in both the heading and the prose.

## Back-translation

- **geometry.items**:
  1. Full turn | 100 Kè | 360°
  2. Sum of the angles of a triangle | 50 Kè | 180°
  3. Regular pentagon, interior angle | 30 Kè | 108°
  4. Right angle | 25 Kè | 90°
  5. Fifth part of a turn (pentagon) | 20 Kè | 72°
  6. Right-angled triangle 10-15-25, the angle of 15 Kè | 15 Kè | 54°
  7. Tenth part of a turn (decagon) | 10 Kè | 36°
  8. Twentieth part of a turn | 5 Kè | 18°
- **geometry.trigTitle**: Waves and a new era in trigonometry.
- **geometry.trig**: A wave that repeats every day (24 h) has a period of exactly 100 Kè. Cycles, orbits and oscillations are at last measured in the same unit as the calendar. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1.
- **geometry.goldenTitle**: The golden section, hidden in the most visible place.
- **geometry.golden**: 108°, 72°, 54°, 36°, 18° — strange angles, you'll say? But it's simply the golden section, hidden in the most visible place. ¶ Let's put π aside. The golden section, φ = (1 + √5)/2 ≈ 1,618, is the proportion of the pentagon and the pentagram, the limit of the ratio of neighbouring Fibonacci numbers, the spiral of the sunflower. ¶ In radians these angles are wrapped in π: π/10, π/5, 3π/10, 2π/5. In Kè they are simply 5, 10, 15 and 20, and every sine and cosine is expressed exactly through φ. From four values the whole circle is built up.
- **geometry.goldenCols**: Angle | Degrees | sin | cos
- **geometry.goldenRows**: identical to English (0 Kè/0°/0/1; 5 Kè/18°/1/(2φ)/√(2 + φ)/2; 10 Kè/36°/√(3 − φ)/2/φ/2; 15 Kè/54°/φ/2/√(3 − φ)/2; 20 Kè/72°/√(2 + φ)/2/1/(2φ); 25 Kè/90°/1/0)
- **geometry.goldenIdentities**: identical to English (2 cos 10 Kè = φ; 2 sin 5 Kè = 1/φ; 2 cos 10 Kè − 2 sin 5 Kè = 1; cos 10 Kè ÷ sin 5 Kè = φ²; cos 10 Kè × sin 5 Kè = 1/4)
- **geometry.triangleTitle**: Meet: the 10-15-25 triangle.
- **geometry.triangle**: Everyone knows the 30-60-90 right-angled triangle, right? And now meet the 10-15-25 right-angled triangle. Its angles are 10, 15 and 25 Kè, in sum 50, that is, half a turn. Take a hypotenuse of 2, and the larger leg turns out to equal exactly φ. Ten such triangles, converging at the centre, come together into a regular pentagon. This is precisely the right-angled triangle of the geometry of fivefold symmetry.
- **geometry.goldenAngleTitle**: And now, the golden angle.
- **geometry.goldenAngle**: Divide a full turn by the golden section, and the smaller arc will be 100/φ² ≈ 38,2 Kè (137,5°): this is the turn from one sunflower seed to the next. Such a step never brings a seed back onto an already occupied direction, so the seeds fill the sunflower head without gaps. ¶ Kè is the geometry of nature.
- **meta.description**: Nu:Time (刻时 Ke-Shi) is an open standard of time and place: one clock for the whole planet, a decimal day of 10 gongs, 100 Kè, 1 000 beats and 100 000 ticks, and just one unit, Kè, by which both "when" and "where" are measured.
- **heritage.title**: The idea is not new. We simply brought it to completion.
- **heritage.lead**: Great civilisations have long tried to divide the day more sensibly. Nu:Time adopts their wisdom and adds what none of them had: a whole planet that can agree on a single moment — wherever you are — and that is united by the geometry of nature.
- **heritage.items[0].title**: Kè (刻)
- **heritage.items[0].text**: For more than two thousand years Chinese astronomers divided the day into 100 Kè and measured them with water clocks; this is Kè, the very unit that lies at the base of Nu:Time. The night was divided into five watches, the gēng (更). The Nu:Time Standard · 刻时 Ke-Shi returns gēng (更) and Kè (刻) to their rightful place.
- **why.lead**: The measurement of time is now being rebuilt from the level of the atom, while the way we display time has not changed since Babylon. AI is already here. It's time.
- **Extras** (кэ → Кэ only):
  - units.ke, units.kes: Kè
  - how.cards[3].unit: Kè · 刻
  - how.cards[3].text: There are 100 Kè in a day and 100 Kè in a circle too: that is how Kè becomes the bridge between time and place.
  - ke.lead: A full day is 100 Kè. A full circle is also 100 Kè. So the rotation of the Earth and the rotation of the four coordinate marks on the Nu:Time dial coincide, and time zones disappear.
  - ke.facts[0].n, ke.facts[1].n: 1 Kè
  - ke.facts[2].text: From 0 to 50 Kè east or west of the prime meridian
  - ke.facts[3].text: From 0 to 25 Kè north or south of the equator
  - geometry.lead: Babylon chose degrees. Radians are the mathematicians' choice. The 100-Kè circle speaks one language with your watch and map, and makes geometry more intuitively understandable.
  - geometry.colKe: In Kè
  - why.items[5].text: China is actively shaping international standards in new technologies, and its satellite navigation system "BeiDou" and the National Time Service Center of the Chinese Academy of Sciences have become an important force in how the world counts time. 刻时 Ke-Shi, rooted in the ancient Chinese day of a hundred Kè, is offered as an open standard, for this work and for everyone.
  - build.items[0].text: Units, Kè, synchronisation to a single time, latitude and longitude, the 100-Kè circle, the position of the Sun and the nu-time/v1 record. CC BY 4.0.
  - build.items[1].text: Ready conversions between UTC and Nu:Time and between degrees and Kè, including for latitude and longitude, all with shared test vectors. MIT or Apache 2.0.
  - build.items[2].text: Reference design: energy-efficient ARM microcontroller, GNSS for UTC and coordinates in Kè, MIP display and a haptic pulse every Kè. CERN-OHL-P 2.0.
  - build.license: Specification and documentation: CC BY 4.0 · Code: MIT or Apache 2.0 · Hardware: CERN-OHL-P 2.0 · A pledge not to charge patent royalties to those who implement the standard. Nu:Time™, Ke-Shi™, 刻时™ and their logos are trademarks of Nu-Time Inc., and the open licences do not extend to them. The unit names, gong (gēng 更), Kè (刻), beat and tick, are ordinary words, and anyone may use them.

## Drift

- **items[5]**: "Third angle of…" became "…, the angle of 15 Kè". This is intended: it removes the "3rd in sequence" misreading, as the owner's brief asks.
- **golden**: "limit of the Fibonacci sequence" became "limit of the ratio of neighbouring Fibonacci numbers". This is mathematically more precise, explicitly allowed, and avoids reading as an error to Russian technical readers. "it's really just" became «это просто» ("simply"). The "really" is carried by the tone; adding «на самом деле» would clash with «на самом видном месте» in the same sentence. Acceptable.
- **golden**: "Golden Ratio" is rendered as «золотое сечение» ("golden section"), the only standard Russian name for φ. Lowercase is the Russian norm. Acceptable.
- **goldenAngle**: "The step never lines up with itself" is explained as "never brings a seed back onto an already occupied direction". This is a slight expansion, but a literal «не совпадает сам с собой» is meaningless in Russian, and the explanation adds no new claim. Acceptable.
- **triangle**: "instead" became «А теперь» ("and now"), "fivefold geometry" became "geometry of fivefold symmetry", and "long side" became «больший катет» ("larger leg"). All are standard Russian ways of saying the same thing. Acceptable.
- **heritage.lead**: "bound by" became «объединяет» ("united by"). The sense of the planet being held together by the geometry of nature is kept, so this is acceptable.
- **why.lead**: "AI is here." became «ИИ уже здесь» ("AI is already here"). This is the natural Russian form, with no added claim.
- No losses or additions elsewhere. "We just finished it" is correctly rendered as «просто» (modesty), not «только что» (recently).

## Verdict

**Pass with notes.** Five fixes applied (the 15-Кэ row label, the Fibonacci ratio wording, and three naturalness and term fixes). The maths is exact, shapes and paragraph breaks match, the Golden Ratio term is consistent in all four places, and capital Кэ is applied consistently: all 16 extras are pure кэ → Кэ changes. Note for merge: drop `geometry.trigRows` and `geometry.trigCols` from ru.json; trigRows still holds the only lowercase «кэ».
