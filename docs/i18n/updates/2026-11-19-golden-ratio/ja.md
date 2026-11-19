# ja — translator notes

# ja — notes for the 2026-11-19 geometry/heritage update

- **Golden Ratio → 黄金比**, the standard term, used in all four places (goldenTitle, golden ×2, goldenAngle). Golden angle → 黄金角. Pentagram → 五芒星.
- **Triangle names.** 10-15-25 is written 10・15・25, following the page's existing 30°・60°・90° style. No degree sign or Kè is added, because the English gives none. The 30-60-90 triangle in `geometry.triangle` keeps the page's 30°・60°・90° form.
- **triangleTitle** "Meet…" → ご紹介します。10・15・25の三角形。 (an introduction is the natural Japanese equivalent of "Meet"). In the body, "Meet … instead" → でも今回ご紹介するのは…です.
- **"its long side"** → 直角をはさむ辺のうち長いほうが. A literal 長い辺 would read as the hypotenuse. The meaning is the longer leg (2 cos 36° = φ), so I spelled that out.
- **"fivefold geometry"** → 5回対称の幾何学, the standard technical term for fivefold symmetry.
- **"the limit of the Fibonacci sequence"** is kept as フィボナッチ数列の極限, as strong as the English. Strictly, it is the ratio of consecutive terms that converges, and a Qiita/math reader may notice. I did not add the qualifier.
- **"hiding in plain sight"** → 目の前に隠れている, in both the title and the body. "really just" → にすぎません.
- **"Radians wrap these angles in π"** → ラジアンは、これらの角をπでくるんでしまいます.
- **geometry.items** labels: 一周の5分の1（正五角形）, 一周の10分の1（正十角形）, 一周の20分の1, 10・15・25の直角三角形の、3つ目の角. "Pentagon/decagon" are given as 正五角形/正十角形, because the angles belong to the regular shapes, in line with the existing 正五角形の内角.
- **heritage.lead** "bound by the geometry of nature" now ends the sentence, describing the planet: …「いま」という瞬間を共有でき、自然の幾何学で結ばれた地球です.
- **heritage China card**: follows the new English, so 100刻 → 100 Kè and the title 刻（Kè） → Kè（刻）, matching the licence line. The final line is 更（gēng）とKè（刻）.
- **why.lead** "AI is here." → AIの時代は、もう始まっています。 **Kè rule:** I checked the rest of locales/ja.json. Every instance is already capital Latin Kè, and Japanese has no article, so there are no extra entries.

---

# ja: review of the 2026-11-19 geometry / Golden Ratio update

Reviewer checks: meaning, maths, shape, Kè rule, terminology, register. Structure was validated by script: same 17 paths in the same order; items 8×3 with the value columns identical to English; goldenRows 6×4 and goldenIdentities 5 identical to English character for character; goldenCols 4; "\n\n" counts match. There is no lowercase "kè" and no "the Kè". The only digit differences come from Japanese counters (4つ, 3つの角, 10個, 5回対称, 1日, 10万, 2000年, 5つ), and each one matches an English number word. There are no extras. The rest of locales/ja.json already uses capital Kè, and Japanese has no articles.

## Changes

1. **geometry.items[5][0]**
   - Before: 10・15・25の直角三角形の、3つ目の角
   - After: 10・15・25の直角三角形の、15 Kèの角
   - Why: 3つ目の角 is exactly the misreading the owner warned about. It reads as "the 3rd angle in the list", which is 25 (the right angle). The label now names the 15-Kè angle, the option the brief suggested. Repeating "15 Kè" from the value column is harmless in a table label.

2. **geometry.golden**, paragraph 2
   - Before: フィボナッチ数列の極限
   - After: フィボナッチ数列の隣り合う項の比の極限
   - Why: Japanese school maths drills 数列の極限 as lim aₙ, and the Fibonacci sequence diverges. Qiita and engineering readers, the core ja audience, would read the literal phrase as a mistake. The ratio wording is the standard Japanese phrasing and keeps the list rhythm (…比率であり、…極限であり、…らせんです). The brief allowed this.

Everything else is unchanged from the translator's output.

## Back-translation

- **geometry.items**
  - Full turn | 100 Kè | 360°
  - Sum of a triangle's interior angles | 50 Kè | 180°
  - Interior angle of a regular pentagon | 30 Kè | 108°
  - Right angle | 25 Kè | 90°
  - One fifth of a turn (regular pentagon) | 20 Kè | 72°
  - The 15-Kè angle of the 10・15・25 right triangle | 15 Kè | 54°
  - One tenth of a turn (regular decagon) | 10 Kè | 36°
  - One twentieth of a turn | 5 Kè | 18°
- **geometry.trigTitle**: Waves, and a new era of trigonometry.
- **geometry.trig**: The period of a wave that repeats every day is exactly 100 Kè. Periods (cycles), orbits and oscillations finally share the same unit as the calendar. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1, cos 100 Kè = 1.
- **geometry.goldenTitle**: Hiding right in front of your eyes: the Golden Ratio.
- **geometry.golden**: 108°, 72°, 54°, 36°, 18°: do you think these are awkward angles? But actually, all of them are nothing more than the Golden Ratio, hiding in front of your eyes. ¶ Forget about π for a moment, please. The Golden Ratio φ = (1 + √5)/2 ≈ 1.618 is the proportion of the regular pentagon and the pentagram, the limit of the ratio of adjacent terms of the Fibonacci sequence, and the spiral of the sunflower. ¶ Radians wrap these angles up in π: π/10, π/5, 3π/10, 2π/5. In Kè, they are just 5, 10, 15, 20. What's more, their sin and cos can all be written as exact expressions using φ. With four values, the whole circle can be built.
- **geometry.goldenCols**: Angle | Degrees | sin | cos
- **geometry.goldenRows**: identical to English (0 Kè/0°/0/1; 5 Kè/18°/1/(2φ)/√(2 + φ)/2; 10 Kè/36°/√(3 − φ)/2/φ/2; 15 Kè/54°/φ/2/√(3 − φ)/2; 20 Kè/72°/√(2 + φ)/2/1/(2φ); 25 Kè/90°/1/0)
- **geometry.goldenIdentities**: identical to English (2 cos 10 Kè = φ; 2 sin 5 Kè = 1/φ; 2 cos 10 Kè − 2 sin 5 Kè = 1; cos 10 Kè ÷ sin 5 Kè = φ²; cos 10 Kè × sin 5 Kè = 1/4)
- **geometry.triangleTitle**: Let us introduce: the 10・15・25 triangle.
- **geometry.triangle**: Everyone knows the 30°・60°・90° right triangle, right? But what we're introducing this time is the 10・15・25 right triangle. Its three angles are 10, 15 and 25 Kè. Together, 50, in other words half a turn. Make the hypotenuse 2, and the longer of the two sides enclosing the right angle becomes exactly φ. Put ten of them together at the centre and a regular pentagon is complete. This is the right triangle of the geometry of fivefold symmetry.
- **geometry.goldenAngleTitle**: And then, the golden angle.
- **geometry.goldenAngle**: Divide a full turn by the Golden Ratio, and the smaller arc becomes 100/φ² ≈ 38.2 Kè (137.5°). This is the angle turned for each step from one sunflower seed to the next. However many times you turn by this angle, the seeds never line up in the same direction. That is why the sunflower's seeds fill the flower completely, without gaps. ¶ Kè is the geometry of nature.
- **meta.description**: Nu:Time (刻时 Ke-Shi) is an open standard for time and place. It uses one clock for the whole Earth and divides the day decimally into 10 gongs, 100 Kè, 1,000 beats and 100,000 ticks. And with a single unit, "Kè", it measures both "when" and "where".
- **heritage.title**: Not a new idea. We merely completed it.
- **heritage.lead**: Great civilizations have long tried to divide the day more rationally. Nu:Time inherits their wisdom and adds what no civilization had: a planet that can share the same moment called "now" wherever you are, bound by the geometry of nature.
- **heritage.items[0].title**: Kè (刻)
- **heritage.items[0].text**: For more than 2,000 years, Chinese astronomers divided the day into 100 Kè and measured time with water clocks. This very Kè is the unit at the heart of Nu:Time. Night was divided into five "更" (gēng). The Nu:Time Standard · 刻时 Ke-Shi returns 更 (gēng) and Kè (刻) to where they belong.
- **why.lead**: The measurement of time is now being rebuilt from the level of the atom. Yet the display of time has not changed since Babylonian times. The age of AI has already begun. Now is the time.

## Drift

- **triangle names 10・15・25 without a unit, beside 30°・60°・90° with degrees.** The page already wrote 30-60-90 as 30°・60°・90°, the normal Japanese form. The English 10-15-25 also carries no unit, so the translator added none. In the prose the parallel is a little uneven (degrees marked, Kè not), but the next sentence says 10、15、25 Kè, and in the table the row value says 15 Kè. The title stays a teaser, as in English. Acceptable.
- **"its long side" → 直角をはさむ辺のうち長いほうが ("the longer of the two sides enclosing the right angle").** More explicit than the English, and correct (2 cos 36° = φ). A plain 長い辺 would invite the hypotenuse reading. Acceptable clarification.
- **"fivefold geometry" → 5回対称の幾何学 ("geometry of fivefold symmetry").** A standard technical term and slightly more precise. Acceptable.
- **Fibonacci: "limit of the ratio of adjacent terms".** A reviewer change (see Changes). It is mathematically stricter than the English and does not change the claim.
- **"Meet…" → ご紹介します / 今回ご紹介するのは ("let us introduce").** This is the idiomatic Japanese "meet". The conversational tone is kept with …ですよね？
- **"Set aside π" → いったん忘れてください ("forget for a moment").** The meaning is the same and the tone natural.
- **"hiding in plain sight" → 目の前に隠れている ("hiding in front of your eyes").** Japanese has no exact idiom. This is the usual rendering and is consistent in the title and the body.
- **goldenAngle "the step never lines up with itself" → この角度ずつ回っても、種が同じ向きにそろうことは決してありません ("turning by this angle, the seeds never line up in the same direction").** It explains the image a little. Same claim. "Head" → 花 ("flower") is botanically fine (the head is the composite flower).
- **why.lead "AI is here." → AIの時代は、もう始まっています ("the age of AI has already begun").** A bare literal "AIはここにいる" would be unnatural. This is the natural equivalent with the same force. Acceptable.
- **heritage.title "just finished" → 完成させただけ ("merely completed").** This carries the owner's modesty reading, not "recently". Correct.
- **trig: "Cycles" → 周期**, which repeats the 周期 used for "period" just before it. This is pre-existing approved text and was only reordered here, so I left it. サイクル is an optional later polish, not needed.
- **heritage China card:** follows the new English (100 Kè, title Kè（刻）, matching the licence line). Faithful, with no added history.

Terminology: 黄金比 in all four Golden Ratio places (goldenTitle, golden ×2, goldenAngle). 黄金角 for the golden angle. 角/度 columns match the existing trigCols. 正五角形/正十角形 match the existing 正五角形の内角. Register: です・ます prose, short noun-ending headings. No Japan-specific additions.

## Verdict

**Pass with notes.** I made two fixes: the 15-Kè angle label, and the Fibonacci ratio wording. All maths and shapes are exact. The remaining drift is acceptable localisation.
