# hi — translator notes

# Hindi (hi) — notes for the 2026-11-19 batch

- **Golden Ratio → स्वर्ण अनुपात**, used in all four places (goldenTitle, golden ×2, goldenAngle). It is the school/maths term Indian readers know, and it fits the page's existing rule (NCERT Hindi for geometry: समकोण, अंतःकोण, आवर्तकाल). "गोल्डन रेशियो" is common in pop articles but reads as Hinglish next to the rest of the section. Hindi has no capitals, so the English emphasis is carried by placement, not typography. **Golden angle → स्वर्ण कोण**, matching.
- **Kè**: Latin, capital, no article, in every new string. No "Kè के" anywhere. Postpositions follow with a space (Kè में), as before. Table cells keep the page's `0 Kè` spelling and `sin`/`cos` in Latin, same as the old trig table.
- **No extra Kè fixes needed**: locales/hi.json already uses capital Kè throughout and never puts के after it.
- **Maths terms**: कर्ण (hypotenuse), भुजा (side), चाप (arc), दशभुज (decagon), सीमा (limit), फ़िबोनाची अनुक्रम (Fibonacci sequence), सर्पिल (spiral), रेडियन, साइन/कोसाइन in prose. Pentagram → "पंचकोणीय तारा (पेंटाग्राम)" so both school and pop readers get it.
- **"Exact expression in φ"** → "φ में ठीक-ठीक लिखा जा सकता है" (can be written exactly in φ). Same claim; व्यंजक (expression) is correct but stiff in prose.
- **"Fivefold geometry"** → **पंचभुजी ज्यामिति** (pentagonal geometry). A literal "पाँच-गुना सममिति वाली ज्यामिति" is accurate but heavy; the pentagon is the subject of the paragraph, so this reads naturally. Worth a native look.
- **"Hiding in plain sight"** → "सबकी आँखों के सामने छिपा", a natural Hindi idiom with the same paradox.
- **"The step never lines up with itself"** → "यह घुमाव कभी दोहराकर एक सीध में नहीं आता" (the turn never comes back into line when repeated). Slightly more explicit than the English so it makes sense in Hindi.
- **trig**: paragraphs swapped as in English. The formula line keeps "…= 1 होता है।" so the danda doesn't sit straight after the digit 1 (where "1।" can be misread).
- **why.lead**: "AI is here. It's time." → "AI आ चुका है। अब वक़्त आ गया है।" The echo of आ… आ… keeps the punchy two-beat rhythm. AI is treated as masculine, as in everyday Hindi.
- **heritage.lead** "bound by the geometry of nature" → "और जो प्रकृति की ज्यामिति से बँधी हो", in the same subjunctive as "सहमत हो सके". **heritage.title** "just" → बस.
- **meta.description**: the current Hindi already matched the new English (Kè, no article), so it is unchanged.

---

# Hindi (hi) — review of the 2026-11-19 geometry / Golden Ratio batch

Reviewed against docs/i18n/BRIEF.md, docs/i18n/notes/hi.md, docs/i18n/DECISIONS.md, locales/hi.json, locales/en.json, hi.in.json, hi.out.json and hi.notes.md. Output: hi.final.json (18 items, same paths and order as hi.out.json, no extras).

Checks run on hi.final.json: it parses; the paths match hi.in.json; the shapes match en_new (items 8×3, goldenCols 4, goldenRows 6×4, goldenIdentities 5); the `\n\n` counts match; goldenRows and goldenIdentities are byte-identical to the English; the Kè and degree columns in items are identical. Every number matches the English. The only exceptions are the deliberate "15 Kè" in row 6 and the Indian grouping 1,00,000 in meta.description, which the glossary requires. Every math symbol matches. The only extra brackets are the glosses (पेंटाग्राम) and (पहरों). There is no lowercase kè, no "Kè के", and no "के Kè".

## Changes

1. **geometry.items[5][0]**
   - Before: `10-15-25 समकोण त्रिभुज का तीसरा कोण` ("the third angle of the 10-15-25 right-angle triangle")
   - After: `10-15-25 समकोण त्रिभुज का 15 Kè वाला कोण` ("the 15-Kè angle of the 10-15-25 right-angle triangle")
   - Why: तीसरा कोण has the same problem as the English "Third angle". A reader can take it as the third in the sequence 10-15-25, which is the 25-Kè right angle. Per owner intent, the new label names the 15-Kè angle. "Kè वाला" uses no के, so the unit cannot be confused with the postposition.
2. **geometry.goldenAngle**, second sentence
   - Before: `यह घुमाव कभी दोहराकर एक सीध में नहीं आता, इसलिए…` ("this turn, having repeated, never comes into one line")
   - After: `यह घुमाव कितनी भी बार दोहराएँ, कभी पिछली सीध पर नहीं लौटता, इसलिए…` ("however many times you repeat this turn, it never comes back to an earlier line")
   - Why: "कभी दोहराकर" is clumsy, and the original can be misread as "it never comes into line by repeating". The new wording is natural spoken Hindi. It says the same thing as "the step never lines up with itself", only more explicitly, which the translator was already aiming for.

Everything else is accepted as the translator wrote it.

### Points the brief asked me to judge

- **स्वर्ण अनुपात / स्वर्ण कोण: keep.** स्वर्ण is everyday Hindi (स्वर्ण पदक), not officialese. स्वर्ण अनुपात is a standard Hindi term for the Golden Ratio. स्वर्णिम अनुपात (also on Hindi Wikipedia) and सुनहरा अनुपात are both understood, but neither is clearly better. स्वर्ण अनुपात is short and pairs cleanly with स्वर्ण कोण. It is used in all four places: goldenTitle, golden ×2 and goldenAngle.
- **"fivefold geometry" → पंचभुजी ज्यामिति ("pentagonal geometry"): acceptable, keep.**
  - Strictly, "fivefold" means five-way rotational symmetry. That covers the pentagon, pentagram and decagon, and पंचभुजी names only the pentagon.
  - In context the loss is negligible. The sentence before it builds a regular pentagon from ten of these triangles, and the whole section is about the pentagon and φ.
  - The literal options are worse:
    - **पाँच-गुना / पंचगुणी:** in everyday Hindi this means "five times as much". It would mislead.
    - **पाँच-गुनी घूर्णन सममिति वाली ज्यामिति:** accurate but heavy, textbook register. It would flatten a short closing sentence.
  - पंचभुजी ज्यामिति keeps the rhetorical point: 30-60-90 is to the hexagon/equilateral world what 10-15-25 is to the pentagon world. No better short rendering exists.
- **Kè next to के:** none in any sentence. The pairs that occur, all clean, are Kè में, Kè हैं, Kè होता है, Kè (137.5°), Kè वाला and Kè प्रकृति…. Elsewhere के sits between ordinary words, e.g. त्रिभुज के कोणों, एक बीज से अगले बीज, Nu:Time के केंद्र.
- **"the limit of the Fibonacci sequence"** → फ़िबोनाची अनुक्रम की सीमा. Kept literal, as the owner allowed. सीमा is the NCERT word for a limit, and next to φ ≈ 1.618 a reader understands it as a mathematical limit. The ratio wording (…क्रमागत पदों के अनुपात की सीमा) would make a light, list-like sentence too heavy.
- **"We just finished it"** → हमने बस इसे पूरा कर दिया. बस = "simply/just", so it is modest, not "recently". ✓
- **Conversational 30-60-90 line** → "…तो हम सब जानते हैं, है न?" Natural tag question. ✓
- **"Kè is the geometry of nature."** → "Kè प्रकृति की ज्यामिति है।" Short and bold, a standalone paragraph. ✓

## Back-translation

- **geometry.items**:
  1. Full turn | 100 Kè | 360°
  2. Sum of a triangle's angles | 50 Kè | 180°
  3. Interior angle of a regular pentagon | 30 Kè | 108°
  4. Right angle | 25 Kè | 90°
  5. Fifth part of a turn (pentagon) | 20 Kè | 72°
  6. The 15-Kè angle of the 10-15-25 right-angle triangle | 15 Kè | 54°
  7. Tenth part of a turn (decagon) | 10 Kè | 36°
  8. Twentieth part of a turn | 5 Kè | 18°
- **geometry.trigTitle**: Waves, and the new era of trigonometry.
- **geometry.trig**: A wave that repeats itself every day has a period of exactly 100 Kè. Cycles, orbits and oscillations — at last the unit of all of them is the same as the calendar's. ¶ sin 25 Kè = 1, cos 50 Kè = −1, sin 75 Kè = −1 and cos 100 Kè = 1 hold.
- **geometry.goldenTitle**: The golden ratio — hidden in front of everyone's eyes.
- **geometry.golden**: 108°, 72°, 54°, 36°, 18° — you will say, these are odd angles? But in reality it is just the golden ratio, which is hidden in front of everyone's eyes. ¶ Set π aside. The golden ratio, φ = (1 + √5)/2 ≈ 1.618, is the ratio of the pentagon and the five-pointed star (pentagram), is the limit of the Fibonacci sequence, is the spiral of the sunflower. ¶ Radians wrap these angles in π: π/10, π/5, 3π/10, 2π/5. In Kè these are just 5, 10, 15 and 20 — and every sine and cosine can be written exactly in φ. From four values the whole circle is made.
- **geometry.goldenCols**: Angle | Degrees | sin | cos
- **geometry.goldenRows**: identical to English. 0 Kè/0°/0/1; 5 Kè/18°/1/(2φ)/√(2 + φ)/2; 10 Kè/36°/√(3 − φ)/2/φ/2; 15 Kè/54°/φ/2/√(3 − φ)/2; 20 Kè/72°/√(2 + φ)/2/1/(2φ); 25 Kè/90°/1/0.
- **geometry.goldenIdentities**: identical to English. 2 cos 10 Kè = φ; 2 sin 5 Kè = 1/φ; 2 cos 10 Kè − 2 sin 5 Kè = 1; cos 10 Kè ÷ sin 5 Kè = φ²; cos 10 Kè × sin 5 Kè = 1/4.
- **geometry.triangleTitle**: Meet the 10-15-25 triangle.
- **geometry.triangle**: The 30-60-90 right-angle triangle we all know, don't we? Now, in its place, meet the 10-15-25 right-angle triangle. Its angles are 10, 15 and 25 Kè — whose sum is 50, that is, half a turn. Take its hypotenuse as 2, and its long side is exactly φ. Ten such triangles, meeting at the centre, make a regular pentagon. This is the right-angle triangle of pentagonal geometry.
- **geometry.goldenAngleTitle**: And now, the golden angle.
- **geometry.goldenAngle**: Divide a full turn in the golden ratio, and the smaller arc is 100/φ² ≈ 38.2 Kè (137.5°) — the turn from one sunflower seed to the next seed. However many times you repeat this turn, it never comes back to an earlier line, so the sunflower's seeds fill the whole flower without leaving any empty space. ¶ Kè is the geometry of nature.
- **meta.description**: Nu:Time (刻时 Ke-Shi) is an open standard of time and place: one clock for the whole world, a decimal day in which there are 10 gongs, 100 Kè, 1,000 beats and 1,00,000 ticks, and one unit — Kè — which measures both when and where.
- **heritage.title**: The idea is not new. We just completed it.
- **heritage.lead**: Great civilisations have for a long time been trying to divide the day more sensibly. Nu:Time adopts their understanding and adds what none of them had: a world that can agree on the same moment — no matter where you are — and that is bound by the geometry of nature.
- **heritage.items[0].title**: Kè (刻)
- **heritage.items[0].text**: For more than two thousand years Chinese astronomers divided the day into 100 Kè, which were measured with water clocks — Kè, the same unit that is at the heart of Nu:Time. The night was divided into five parts (watches/pahars), which were called gēng (更). The Nu:Time Standard · 刻时 Ke-Shi gives gēng (更) and Kè (刻) back their rightful place.
- **why.lead**: The way of measuring time is today being rebuilt from the level of the atom, yet the way of showing time has not changed since Babylon's era. AI has arrived. Now the time has come.

## Drift

- **items[5]**: "the 15-Kè angle" instead of "Third angle". This is intended disambiguation, explicitly requested by the owner. Acceptable.
- **triangle**: "fivefold geometry" → "pentagonal geometry". This slightly narrows five-way rotational symmetry to the pentagon. In context the meaning is the same (see above). Acceptable.
- **golden**: "pentagram" is glossed as पंचकोणीय तारा (पेंटाग्राम) so that both school readers and pop-maths readers get it. "Exact expression in φ" becomes "can be written exactly in φ", which is the same claim. "Hiding in plain sight" becomes the Hindi idiom सबकी आँखों के सामने छिपा, which keeps the paradox. Acceptable.
- **goldenAngle**: "the step never lines up with itself" becomes "however many times repeated, never returns to an earlier line". It is more explicit, but adds no claim. "Head" becomes "the whole flower" (फूल), which is the natural Hindi for a sunflower head. Acceptable.
- **trig**: the formula line ends "…= 1 होता है" ("hold"), to avoid a danda right after the digit 1. Same claim. Acceptable.
- **trigTitle**: the comma after तरंगें keeps "Waves" from being read as "the new era of waves and trigonometry". Acceptable.
- **meta.description / heritage.lead**: these use "world" (दुनिया) for "planet", as the existing page already does. Acceptable, and there is no new drift.
- Minor, no change: golden's "रेडियन … 2π/5।" ends with a danda after a digit, which the translator avoided elsewhere. It is ordinary Hindi typography and is unambiguous after π/.

## Verdict

**Pass with notes.** I made two fixes: the 15-Kè label in items row 6, and the clumsy golden-angle sentence. The maths, shapes, Kè rule and Golden Ratio terminology are all correct and consistent with locales/hi.json. पंचभुजी ज्यामिति is accepted as faithful enough. A native Hindi sign-off (DECISIONS #16) should glance at it and at स्वर्ण अनुपात versus स्वर्णिम अनुपात.
