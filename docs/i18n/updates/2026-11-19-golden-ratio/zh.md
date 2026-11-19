# zh — translator notes

# zh — notes for the 2026-11-19 geometry/heritage update

- **Golden Ratio → 黄金比例**, used identically in goldenTitle, golden (×2) and goldenAngle. It is the term 科普 readers know best; 黄金分割比 is more textbook-like. Chinese has no capitals, so the emphasis comes from placing it first in the sentence.
- **golden angle → 黄金角** (the standard term in botany and maths). **right-angle triangle → 直角三角形**. **fivefold geometry → 五重对称几何** (五重对称 is the usual term for fivefold symmetry).
- **"hiding in plain sight" → 就藏在眼皮底下**, colloquial and quotable. The title and paragraph 1 echo each other, as in the English.
- **"the limit of the Fibonacci sequence" → 斐波那契数列相邻两项之比的极限.** Said literally, a Zhihu reader would point out that the sequence diverges. The intended claim is unchanged.
- **30-60-90 → 30°-60°-90° 直角三角形** in prose, which matches the existing table convention and how Chinese textbooks write it. **10-15-25** stays bare, like the English, and the next sentence gives the unit (10、15 和 25 刻).
- **"Third angle of the 10-15-25 right-angle triangle" → 10-15-25 直角三角形的第三个角**, kept literal. 另一个锐角 would be clearer, but it is an interpretation.
- **Table cells** use 刻 (`5 刻`) as in the existing trig rows. sin/cos are kept as Latin function names, and all formulas (φ, √, −, ÷, ×, fractions) are unchanged. goldenCols = 角 / 度数 / sin / cos, the same as trigCols.
- **trigTitle → 波动与三角学，也换个刻度。** This keeps the approved 刻度 pun and adds "waves". I used 波动 rather than a bare 波, which is too thin as a heading word.
- **heritage.lead:** "bound by the geometry of nature" became 由大自然的几何连为一体. To carry it, I restructured the line around 一个能对同一个“此刻”达成共识的地球.
- **heritage.items[0]:** the title stays 百刻制, because the English change was only the article. In the text, "the same unit" became 核心单位, and the rest is unchanged. meta.description is unchanged because Chinese has no article to drop.
- **why.lead:** "AI is here." → AI 已经来了。 Short and spoken. I avoided the 公文-sounding AI 时代已经到来.
- **Kè rule audit:** no extra entries needed. The only Latin forms in zh.json are 刻 · Kè on the unit card (already capitalised) and the pinyin gloss 刻（kè） in build.license, which stays lowercase under the brief.

---

# zh review: 2026-11-19 geometry/heritage update

Reviewer: independent native-level check of S/zh.out.json against en_new. The output is S/zh.final.json, which has the same 17 paths in the same order and no extra entries.

## Changes

1. **geometry.items[5][0]** (coordinator point).
   - Before: 10-15-25 直角三角形的第三个角
   - After: 10-15-25 直角三角形中的 15 刻角
   - Why: 第三个角 reads as "the 3rd angle in the sequence 10-15-25", which is the 25-刻 right angle. That is wrong, because this row is 15 刻 / 54°. The new label names the 15-刻 angle directly. 15 刻角 is formed like 30° 角, so a Chinese reader takes it as "the 15-kè angle".
2. **geometry.items[4][0], [6][0] and [7][0]**.
   - Before: 一圈的五分之一（正五边形） / 一圈的十分之一（正十边形） / 一圈的二十分之一
   - After: 五分之一圈（正五边形） / 十分之一圈（正十边形） / 二十分之一圈
   - Why: These are shorter table labels and match spoken Chinese (转四分之一圈). The meaning is unchanged.
3. **geometry.golden, paragraph 1**.
   - Before: 其实它们不过是黄金比例
   - After: 其实这不过是黄金比例
   - Why: 它们 refers to the angles and makes them "be" a ratio, a small category slip. 这 matches the vague English "it's".
4. **geometry.golden, paragraph 2**.
   - Before: 是正五边形与五角星的比例
   - After: 是正五边形与五角星中的比例
   - Why: The old wording could be parsed as "the ratio of the pentagon to the pentagram". 中的 makes it "the proportion found in" both.
5. **geometry.golden, paragraph 3**.
   - Before: 换成刻，它们就是简单的 5、10、15 和 20
   - After: 换成刻，就只是 5、10、15 和 20
   - Why: 就是简单的 is a calque of "simply". 就只是 is the natural spoken form.
6. **geometry.triangle**.
   - Before: 让斜边等于 2，它较长的那条直角边就恰好是 φ
   - After: 如果斜边是 2，较长的那条直角边就恰好是 φ
   - Why: 让…等于 calques "give it". A conditional is how a 科普 writer would say it. The maths is unchanged: with hypotenuse 2, the long leg is 2·cos 10 刻 = φ.
7. **heritage.lead**.
   - Before: …一样东西：一个能对同一个“此刻”达成共识的地球——无论你身在何处——由大自然的几何连为一体。
   - After: …一样东西：全世界对同一个“此刻”的共识——无论你身在何处——而把整个地球连在一起的，是大自然的几何。
   - Why: In the old version, the trailing 由大自然的几何连为一体 after the second dash is a dangling, subjectless fragment (翻译腔). 补上了…一个地球 ("added a planet") also reads oddly in Chinese. The new version keeps the approved base wording (全世界对同一个“此刻”的共识), so 地球 survives as "the whole planet", which is what is bound. It ends on 大自然的几何, echoing the goldenAngle closing line.

Checked and left unchanged:
- trigTitle 波动与三角学，也换个刻度。: 波动 is the standard physics term, as in 波动光学, and the paragraph opens with 波.
- goldenTitle and the rest of golden.
- The Fibonacci ratio-limit localisation: it reads well and is what a Zhihu reader would expect.
- triangleTitle, the rest of triangle: 30°-60°-90° follows the existing table convention, and the contrast with bare 10-15-25 is nice.
- goldenAngleTitle and goldenAngle.
- meta.description.
- heritage.title: 只是 carries the modest "simply", not "recently".
- heritage.items[0] title and text.
- why.lead: AI 已经来了 is spoken, not 公文.

## Back-translation

- **geometry.items**:
  - Full angle (one whole turn) | 100 Kè | 360°
  - Sum of a triangle's interior angles | 50 Kè | 180°
  - Interior angle of a regular pentagon | 30 Kè | 108°
  - Right angle | 25 Kè | 90°
  - One-fifth of a turn (regular pentagon) | 20 Kè | 72°
  - The 15-Kè angle in the 10-15-25 right triangle | 15 Kè | 54°
  - One-tenth of a turn (regular decagon) | 10 Kè | 36°
  - One-twentieth of a turn | 5 Kè | 18°
- **geometry.trigTitle**: "Waves and trigonometry, also on a new scale."
- **geometry.trig**:
  - "A wave that repeats once a day has a period of exactly 100 Kè. Cycles, orbits and oscillations have finally come to use the same unit as the calendar."
  - "sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1, cos 100 Kè = 1."
- **geometry.goldenTitle**: "The golden ratio, hiding right under your eyelids."
- **geometry.golden**:
  - "108°, 72°, 54°, 36°, 18° — you say these angles are odd? Actually this is nothing but the golden ratio, which has been hiding right under your nose all along."
  - "First put π aside. The golden ratio φ = (1 + √5)/2 ≈ 1.618 is the proportion in the regular pentagon and the pentagram, the limit of the ratio of consecutive terms of the Fibonacci sequence, and also the spiral on the sunflower's head."
  - "Radian measure wraps these angles in π: π/10, π/5, 3π/10, 2π/5. Switch to Kè and they are just 5, 10, 15 and 20 — and every sine value and cosine value can be written exactly using φ. Four values are enough to hold up the whole circle."
- **geometry.goldenCols**: Angle | Degrees | sin | cos
- **geometry.goldenRows**: identical to the English, with Kè written 刻:
  - 0 Kè | 0° | 0 | 1
  - 5 Kè | 18° | 1/(2φ) | √(2 + φ)/2
  - 10 Kè | 36° | √(3 − φ)/2 | φ/2
  - 15 Kè | 54° | φ/2 | √(3 − φ)/2
  - 20 Kè | 72° | √(2 + φ)/2 | 1/(2φ)
  - 25 Kè | 90° | 1 | 0
- **geometry.goldenIdentities**: identical to the English with Kè → 刻:
  - 2 cos 10 Kè = φ
  - 2 sin 5 Kè = 1/φ
  - 2 cos 10 Kè − 2 sin 5 Kè = 1
  - cos 10 Kè ÷ sin 5 Kè = φ²
  - cos 10 Kè × sin 5 Kè = 1/4
- **geometry.triangleTitle**: "Get to know the 10-15-25 triangle."
- **geometry.triangle**: "The 30°-60°-90° right triangle — everyone knows it, right? This time, get to know the 10-15-25 right triangle. Its three angles are 10, 15 and 25 Kè respectively — adding up to 50 Kè, exactly half a turn. If the hypotenuse is 2, the longer leg is exactly φ. Ten such triangles meeting at the centre piece together a regular pentagon. It is the right triangle of fivefold-symmetry geometry."
- **geometry.goldenAngleTitle**: "Next, look at the golden angle."
- **geometry.goldenAngle**:
  - "Divide a whole turn into two parts in the golden ratio, and the smaller arc is 100/φ² ≈ 38.2 Kè (137.5°) — exactly the angle the sunflower turns from one seed to the next. Turning step by step like this, it never lines up with an earlier position, so the sunflower's seeds can cover the whole flower head without leaving gaps."
  - "Kè is the geometry of nature."
- **meta.description**: "Kè-Shí Nu:Time is an open standard for time and position: the whole Earth shares one clock; the day is divided decimally into 10 gēng, 100 Kè, 1000 fēn, 100,000 miǎo; and one single unit — Kè — measures both 'when' and 'where'."
- **heritage.title**: "Not a new idea. We simply finished it."
- **heritage.lead**: "In history, many great civilisations tried to divide the day more sensibly. Kè-Shí Nu:Time draws on their wisdom and adds the one thing none of them had: the whole world's consensus on the same 'now' — no matter where you are — and what binds the whole planet together is the geometry of nature."
- **heritage.items[0].title**: "The hundred-Kè system"
- **heritage.items[0].text**: "For more than two thousand years, Chinese astronomers used the hundred-Kè system, dividing the day into 100 Kè, timed by water clocks — the core unit of Kè-Shí Nu:Time is exactly this 'Kè'. The night was counted in five gēng. The Kè-Shí Standard returns 'gēng' and 'Kè' to their rightful place."
- **why.lead**: "The measurement of time is being thoroughly rebuilt from the atomic level; the way time is displayed has never changed from Babylon until today. AI has already arrived. It's time."

## Drift

- **golden**: "the limit of the Fibonacci sequence" becomes "the limit of the ratio of consecutive terms". This is acceptable localisation and mathematically correct. The intended claim is unchanged, and a literal version would draw "the sequence diverges" comments on Zhihu.
- **golden**: "Golden Ratio" loses its capitals, since Chinese has none. Acceptable.
- **items[5]**: "Third angle" becomes "the 15-Kè angle". This is deliberate clarification per the coordinator and owner intent. It names the same angle and removes a misreading of 第三个 as the 25-刻 angle. Acceptable.
- **triangle**: "long side" is rendered "the longer leg" (较长的直角边). This is correct: the hypotenuse is the longest side, so "long side" here can only mean the long leg (2·sin 15 刻 = φ). The text also adds "Kè" and "exactly" to "adding up to 50, half a turn", and "fivefold" becomes "fivefold-symmetry geometry". These are acceptable and add no claims.
- **trigTitle**: keeps the previously accepted "on a new scale" (刻度 pun) instead of "a new era". This is a recorded, deliberate zh difference (DECISIONS #7), with "waves" now added.
- **heritage.lead**: "a planet that can agree" becomes "the whole world's consensus … what binds the whole planet together is the geometry of nature". The base wording was already approved. "Bound by" is rendered as a closing clause rather than a participle. The meaning is the same and the claim is no stronger. Acceptable.
- **heritage.items[0].title**: stays 百刻制 instead of "Kè (刻)". This is an established, accepted localisation (backtranslation/zh.md).
- **meta.description**: uses 10 万 for 100,000, the established zh prose convention, so the digit checker sees "10" rather than "100000". The value is identical.
- **Political neutrality**: "AI is here" and "the geometry of nature" raise no issues. There is no sovereignty, borders or Beijing Time content in this set.

## Verdict

**Pass with notes.** The maths, tables, shapes and paragraph breaks all match the English. goldenRows and goldenIdentities are byte-identical after swapping 刻 for Kè. 黄金比例 is used consistently. Seven small fixes were made for naturalness and clarity, including the coordinator's 15-刻 row label.
