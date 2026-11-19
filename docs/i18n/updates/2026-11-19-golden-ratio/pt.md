# pt — translator notes

# pt — notes for the 2026-11-19 changes

- **Golden Ratio = razão áurea** in all four places (goldenTitle, golden ×2, goldenAngle). It is the mathematical term, and it avoids "a proporção áurea é a proporção do pentágono". *Proporção áurea* is equally common in Brazil if the owner prefers it. It is lowercase, as Portuguese writes it; the English capitals for emphasis don't carry over naturally.
- **Golden angle = ângulo áureo**, chosen to match *razão áurea*. *Ângulo de ouro* is the pt Wikipedia title and is also fine.
- **Right-angle triangle = triângulo retângulo**, the standard school term. **"Long side" = cateto maior** (the longer leg). Check: with a hypotenuse of 2, the leg next to 36° is 2 cos 36° = φ.
- **"Fivefold geometry" = geometria pentagonal**. *Simetria quíntupla* exists but reads academic.
- **"Hiding in plain sight" = escondida à vista de todos**, a common Brazilian rendering of the idiom.
- **"Radians wrap these angles in π"** became *Em radianos, esses ângulos vêm embrulhados em π*, which mirrors *Em Kè, são simplesmente…*.
- **Sunflower "head" = miolo**, the everyday word. The botanical *capítulo* would confuse readers. "Without gaps" = *sem deixar vazios*.
- **Kè rule fix (heritage.items[0].text):** the article removal had left *devolve a gēng (更) e a Kè (刻)*, where *a gēng* reads as a feminine article (gēng is masculine: *os gēng*). It is rewritten as *devolve gēng (更) e Kè (刻) ao lugar que é deles por direito*, with no article and no ambiguity. No other Kè-rule breaks were found in locales/pt.json, so there are no extra entries.
- **why.lead:** "AI is here." became *A IA já está aqui.* rather than *A IA chegou.*, which would repeat *chegou* right before *Chegou a hora*.
- **heritage.title:** "We just finished it" became *Nós só a concluímos* ("just" = merely). **heritage.lead:** "bound by" became *e unido pela geometria da natureza*. The *e* keeps it attached to "planeta" after the dash clause.
- **meta.description** and **heritage.items[0].title** already matched the new English and are unchanged.
- **Stale note:** docs/i18n/notes/pt.md still says Kè is lowercased mid-sentence in how.cards[3]. That conflicts with the new rule, so the bullet should be updated (I did not edit repo files).

---

# pt review: 2026-11-19 changes

I checked all 18 items against en_new. en_new matches locales/en.json for every path. The shapes match: items 8×3, goldenRows 6×4, goldenCols 4, goldenIdentities 5. The "\n\n" breaks are preserved. The digits and the symbols φ π √ ² ÷ × − ≈ ° match the English, item by item. goldenRows equals the English cell by cell. goldenIdentities equals the English after mapping sen to sin. The maths is correct: with a hypotenuse of 2, the leg next to 36° is 2 cos 36° = φ, which is the longer leg (*cateto maior*); ten 36° apexes give 360°; and 100/φ² ≈ 38.197 Kè ≈ 137.5°. There are no extra entries. A scan of locales/pt.json found no other breaks of the Kè rule (no lowercase kè and no article before Kè).

## Changes

1. **geometry.items[5][0]** (coordinator point 1)
   - Before: *Terceiro ângulo do triângulo retângulo 10-15-25*
   - After: *Ângulo agudo maior do triângulo retângulo 10-15-25*
   - Why: *terceiro* can be read as the third angle in the sequence 10-15-25, which is 25. *Ângulo agudo maior* ("larger acute angle") points only to the 15 Kè (54°) angle. It also avoids repeating "15 Kè" in the label when the next cell already shows it. If the owner prefers the coordinator's wording, *Ângulo de 15 Kè do triângulo retângulo 10-15-25* is also correct.
2. **geometry.golden** (coordinator point 2)
   - Before: *o limite da sequência de Fibonacci*
   - After: *o limite das razões da sequência de Fibonacci*
   - Why: Brazilian school maths teaches that the Fibonacci sequence diverges, so a maths-literate reader would flag the literal version as wrong. *Das razões* adds two words, keeps the list's rhythm and echoes *razão áurea*.
3. **geometry.triangle**
   - Before: *Pois agora conheça o triângulo retângulo 10-15-25.*
   - After: *Agora, em vez dele, conheça o triângulo retângulo 10-15-25.*
   - Why: the old version dropped "instead", and a sentence that opens with bare *Pois* reads slightly off. The new one stays conversational.
4. **geometry.triangle**
   - Before: *Dez deles, reunidos em torno do centro*
   - After: *Dez deles, unidos no centro*
   - Why: "Meeting at the centre" means the triangles join at the centre point. *Em torno do centro* ("around the centre") is vaguer.

Accepted as delivered:

- **Heritage rewrite.** *Devolve gēng (更) e Kè (刻) ao lugar que é deles por direito* is idiomatic Brazilian Portuguese ("restores … to their rightful place"). It follows the Kè rule, and the bare nouns read naturally as named terms. One correction to the translator's note: in the old *devolve a gēng … e a Kè … o lugar*, the *a* was the preposition ("gives back **to** gēng … the place"), not a feminine article. It was still easy to misread, so the rewrite is an improvement either way.
- **Razão áurea** is used consistently and in lower case (normal in Portuguese), along with *ângulo áureo*, *sen*, and *Ângulo/Graus* (the same as trigCols).

## Back-translation

- **geometry.items**:
  - [Full turn | 100 Kè | 360°]
  - [Sum of the angles of a triangle | 50 Kè | 180°]
  - [Regular pentagon, interior angle | 30 Kè | 108°]
  - [Right angle | 25 Kè | 90°]
  - [A fifth of a turn (pentagon) | 20 Kè | 72°]
  - [Larger acute angle of the 10-15-25 right triangle | 15 Kè | 54°]
  - [A tenth of a turn (decagon) | 10 Kè | 36°]
  - [A twentieth of a turn | 5 Kè | 18°]
- **geometry.trigTitle**: "Waves and a new era of trigonometry."
- **geometry.trig**: "A wave that repeats every day has a period of exactly 100 Kè. Cycles, orbits and oscillations finally share the same unit with the calendar. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1."
- **geometry.goldenTitle**: "The golden ratio, hidden in plain sight of everyone."
- **geometry.golden**: "108°, 72°, 54°, 36°, 18° — strange angles, you'd say? But really, it's just the golden ratio, hidden in plain sight. ¶ Put π aside. The golden ratio, φ = (1 + √5)/2 ≈ 1.618, is the proportion of the pentagon and the pentagram, the limit of the ratios of the Fibonacci sequence, the spiral of the sunflower. ¶ In radians, these angles come wrapped in π: π/10, π/5, 3π/10, 2π/5. In Kè, they are simply 5, 10, 15 and 20 — and all the sines and cosines are exact expressions in φ. Four values build the whole circle."
- **geometry.goldenCols**: [Angle, Degrees, sin, cos]
- **geometry.goldenRows**: [0 Kè, 0°, 0, 1] [5 Kè, 18°, 1/(2φ), √(2 + φ)/2] [10 Kè, 36°, √(3 − φ)/2, φ/2] [15 Kè, 54°, φ/2, √(3 − φ)/2] [20 Kè, 72°, √(2 + φ)/2, 1/(2φ)] [25 Kè, 90°, 1, 0]
- **geometry.goldenIdentities**: "2 cos 10 Kè = φ" · "2 sin 5 Kè = 1/φ" · "2 cos 10 Kè − 2 sin 5 Kè = 1" · "cos 10 Kè ÷ sin 5 Kè = φ²" · "cos 10 Kè × sin 5 Kè = 1/4"
- **geometry.triangleTitle**: "Meet the 10-15-25 triangle."
- **geometry.triangle**: "Everybody knows the 30-60-90 right triangle, right? Now, instead of it, meet the 10-15-25 right triangle. Its angles measure 10, 15 and 25 Kè — adding up to 50, half a turn. Give it a hypotenuse of 2 and the longer leg measures exactly φ. Ten of them, joined at the centre, form a regular pentagon. It is the right triangle of pentagonal geometry."
- **geometry.goldenAngleTitle**: "And now, the golden angle."
- **geometry.goldenAngle**: "Divide a full turn in the golden ratio and the smaller arc measures 100/φ² ≈ 38.2 Kè (137.5°) — the turn from one sunflower seed to the next. This step never lines up with itself again, so the sunflower's seeds fill the head without leaving gaps. ¶ Kè is the geometry of nature."
- **meta.description**: "Nu:Time (刻时 Ke-Shi) is an open standard for time and place: a single clock for the whole planet, a decimal day of 10 gongs, 100 Kè, 1,000 beats and 100,000 ticks, and a single unit — Kè — that measures both the when and the where."
- **heritage.title**: "It isn't a new idea. We only finished it."
- **heritage.lead**: "Great civilizations tried, for a long time, to divide the day in a more sensible way. Nu:Time draws on that wisdom and adds what none of them had: a whole planet able to agree on the same moment — no matter where you are — and united by the geometry of nature."
- **heritage.items[0].title**: "Kè (刻)"
- **heritage.items[0].text**: "For more than two thousand years, Chinese astronomers divided the day into 100 Kè, measured by water clocks — Kè, the same unit that is at the heart of Nu:Time. The night was divided into five watches, the gēng (更). The Nu:Time Standard · 刻时 Ke-Shi returns gēng (更) and Kè (刻) to the place that is theirs by right."
- **why.lead**: "The measurement of time is being rebuilt from the atom up, but the way the hours are shown hasn't changed since Babylon. AI is already here. The time has come."

## Drift

- **items[5][0]**: "Larger acute angle" rather than "Third angle". This is a deliberate clarification at the coordinator's request. It names the same 15 Kè angle without the ordinal misreading. Acceptable.
- **golden**: "limit of the ratios of the Fibonacci sequence" is more precise than the English. It is mathematically correct, the claim is the same, and the coordinator approved it. Acceptable.
- **golden**: "odd, you say?" became *estranhos, você diria?* ("strange, you'd say?"). The tone is the same. Acceptable.
- **goldenTitle / golden / goldenAngle**: "Golden Ratio" is in lower case. This is a Portuguese convention, and the meaning is unchanged. Acceptable.
- **triangle**: "fivefold geometry" became *geometria pentagonal*. This is slightly narrower in theory, but it is the natural phrase and the pentagon is the point of the passage. Acceptable.
- **triangle**: "long side" became *cateto maior* ("longer leg"). This is more precise and correct, since the hypotenuse is 2. Acceptable.
- **heritage.title**: *só* conveys "just" in the modest sense of "merely". It does not mean "recently". Acceptable.
- **heritage.lead**: *e unido pela* adds a linking "and" before "bound by". This is grammatically needed, and the meaning is the same. Acceptable.
- **why.lead**: "AI is here" became *A IA já está aqui* ("AI is already here"). The *já* is how Brazilians naturally say "is here" in the sense of "has arrived", and it avoids repeating *chegou*. Negligible strengthening. Acceptable.

## Verdict

**Pass with notes.** I made four small fixes: two on coordinator points, two for naturalness and precision. The maths, shapes and Kè rule are clean. The translator's "stale note" observation (docs/i18n/notes/pt.md still says Kè is lowercased in how.cards[3]) should be picked up in the repo notes. I did not edit it.
