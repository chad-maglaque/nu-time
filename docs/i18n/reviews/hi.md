# Hindi (hi) — independent editorial review

Fresh-eyes review of `locales/hi.json` against `locales/en.json` and `docs/i18n/BRIEF.md`, from the point of view of an Indian Hindi reader. Translator notes were not read. Overall the translation is good: natural modern Hindi, consistent आप register, kè kept in Latin script throughout (never confusable with के), गोंग / बीट / टिक consistent, city exonyms all standard. The changes below fix grammar slips, a few meaning shifts, the now-translatable `n` labels, unit patterns, Indian number grouping and spelling consistency.

`python3 -I tests/check_locales.py hi` → `hi: ok`.

## Changes (39)

| Key | Before | After | Why |
|---|---|---|---|
| `hero.east` | "east": "पू" | "east": "पूर्व" | Clock shows e.g. "12.3 kè पू"; single-letter abbreviations are not a common Hindi convention and "प" alone is opaque. Full words read clearly after a number. |
| `hero.west` | "west": "प" | "west": "पश्चिम" | Same as above; "प" on its own is meaningless to most readers. |
| `hero.north` | "north": "उ" | "north": "उत्तर" | Same as above. |
| `hero.south` | "south": "द" | "south": "दक्षिण" | Same as above. |
| `hero.current` | मौजूदा जगह (अपने-आप पहचानें) | मौजूदा जगह (अपने-आप पहचान) | Imperative "पहचानें" told the user to detect; the label describes what the site does. Noun form fixes it. |
| `hero.dialHint` | और सुनहरी सुई हर बीट में एक चक्कर, जो बीतते टिक गिनती चलती है। | और सुनहरी सुई हर बीट में एक चक्कर लगाते हुए बीतते टिक दिखाती है। | Broken grammar ("जो बीतते टिक गिनती चलती है"). Rewritten to match "marking the passing ticks". |
| `time.points[0].text` | मीटिंग, फ़्लाइट और बाज़ार — सब एक ही समय पर चलते हैं। | मीटिंग, फ़्लाइट और बाज़ार — सबके लिए एक ही समय। | "एक ही समय पर चलते हैं" reads as "run simultaneously", not "use the same time". |
| `time.points[3].text` | वैश्विक और स्थानीय समय कभी आपस में गड़बड़ नहीं होते। | वैश्विक और स्थानीय समय में कभी घालमेल नहीं होता। | "गड़बड़ नहीं होते" is awkward; "घालमेल" is the natural word for "mixed up". |
| `how.lead` | gong:beat:tick, यानी गोंग:बीट:टिक। | गोंग:बीट:टिक। | Brief: unit patterns in prose use local unit names only; the English pattern was a leftover. |
| `how.cards[2].n` | "n": "100,000" | "n": "1,00,000" | Indian grouping, consistent with 1,00,000 elsewhere on the page (brief: n card numbers too). |
| `ke.lead` | और टाइम ज़ोन की ज़रूरत ही ख़त्म। | और टाइम ज़ोन ख़त्म हो जाते हैं। | English says time zones disappear; "the need for time zones ends" softened the claim. |
| `ke.facts[0].text` | "text": "दिन का 1/100" | "text": "दिन का 1/100 हिस्सा" | More natural Hindi with "हिस्सा". |
| `ke.facts[1].text` | "text": "वृत्त का 1/100" | "text": "वृत्त का 1/100 हिस्सा" | Same as above. |
| `ke.facts[2].n` | "n": "Longitude" | "n": "देशांतर" | `n` labels are now translatable display text. |
| `ke.facts[2].text` | देशांतर: प्राइम मेरिडियन | प्राइम मेरिडियन | Removed the workaround prefix now that the label itself is Hindi. |
| `ke.facts[3].n` | "n": "Latitude" | "n": "अक्षांश" | `n` labels are now translatable display text. |
| `ke.facts[3].text` | अक्षांश: भूमध्य रेखा | भूमध्य रेखा | Removed the workaround prefix. |
| `geometry.items[5][0]` | सम पंचभुज, अंतःकोण | सम पंचभुज का अंतःकोण | Reads as a proper phrase rather than a comma list. |
| `geometry.trig` | जो तरंग हर दिन दोहराई जाती है, उसका आवर्तकाल ठीक 100 kè होता है। चक्र, कक्षाएँ और दोलन — आख़िरकार सब कैलेंडर के साथ एक ही इकाई में बात करते हैं। | जो तरंग हर दिन ख़ुद को दोहराती है, उसका आवर्तकाल ठीक 100 kè होता है। चक्र, कक्षाएँ और दोलन — आख़िरकार सबकी इकाई वही है जो कैलेंडर की। | Passive "दोहराई जाती है" is wrong for a wave repeating itself; "talk in one unit" added a metaphor — now "share one unit with the calendar". |
| `why.items[1].title` | असली समस्या हमेशा लीप सेकंड ही थे | लीप सेकंड हमेशा से समस्या रहे हैं | Subject/verb agreement was off (समस्या … थे) and "असली" overstated. |
| `why.items[1].text` | इसीलिए हम कहते हैं: वक़्त अभी है। | इसीलिए हम जानते हैं कि सही वक़्त अभी है। | "how we know" had become "we say"; restored "know" and made the "the time is now" punchline land. |
| `why.items[2].title` | टाइम ज़ोन भौतिकी नहीं, राजनीति हैं | टाइम ज़ोन भौतिकी का नहीं, राजनीति का मामला हैं | "टाइम ज़ोन … राजनीति हैं" is unidiomatic; "X का मामला" is how this is said. |
| `why.items[2].text` | भारत लगभग दो टाइम ज़ोन में फैला है। | भारत लगभग दो टाइम ज़ोन जितना फैला है। | As written it implied India has two time zones (it has one, IST). Now parallel to the China sentence: geographic extent only. |
| `why.items[5].text` | आज दुनिया के समय-निर्धारण के अहम स्तंभ हैं। | आज दुनिया के समय-निर्धारण के स्तंभ हैं। | Dropped the added intensifier "अहम" to keep the China card exactly as strong as the English. |
| `roadmap.items[2].text` | पुराने समय और भू-स्थानिक डेटा | पुराने सिस्टम के समय-संबंधी और भू-स्थानिक डेटा | "पुराने समय … डेटा" read as "data from old times"; "legacy" means old systems. |
| `build.title` | खुला है। ख़ुद बनाएं। | खुला है। ख़ुद बनाएँ। | Spelling consistency: chandrabindu (बनाएँ), as in जाएँगे/भाषाएँ elsewhere. |
| `build.lead` | इन पर आगे बनाएं, | इन पर आगे बनाएँ, | Spelling consistency (chandrabindu). |
| `build.quartz[0][1]` | "2,985,984" | "29,85,984" | Indian digit grouping (brief: tables too). |
| `build.quartz[0][2]` | सटीक पूर्णांक भाग | सटीक पूर्णांक से भाग | "पूर्णांक भाग" usually means "integer part"; the method is division by an integer. |
| `build.quartz[2][1]` | "864,000" | "8,64,000" | Indian digit grouping. |
| `build.quartz[2][2]` | ["1 MHz", "8,64,000", "पूर्णांक भाग"] | ["1 MHz", "8,64,000", "पूर्णांक से भाग"] | "integer part" ambiguity, as above. |
| `build.quartz[3][1]` | "8,640,000" | "86,40,000" | Indian digit grouping. |
| `build.quartz[3][2]` | ["10 MHz", "86,40,000", "पूर्णांक भाग"] | ["10 MHz", "86,40,000", "पूर्णांक से भाग"] | "integer part" ambiguity, as above. |
| `build.quartz[4][1]` | "13,824,000" | "1,38,24,000" | Indian digit grouping. |
| `build.quartz[4][2]` | ["16 MHz", "1,38,24,000", "पूर्णांक भाग"] | ["16 MHz", "1,38,24,000", "पूर्णांक से भाग"] | "integer part" ambiguity, as above. |
| `build.cert` | कोई भी इस मानक के मुताबिक़ डिवाइस बना सकता है और उसे | कोई भी इस मानक के मुताबिक़ कुछ भी बना सकता है और उसे | English "build to the standard" is not limited to devices (software counts too). |
| `join.title` | हाथ बँटाएं। | हाथ बँटाएँ। | Spelling consistency (chandrabindu). |
| `join.lead` | बताएं आप कौन हैं | बताएँ आप कौन हैं | Spelling consistency (chandrabindu). |
| `join.message` | क्या बनाएंगे? | क्या बनाएँगे? | Spelling consistency (chandrabindu). |

## Needs a human decision

1. **China standards card (`why.items[5]`) for Indian readers.** The Hindi is faithful and neutral (only the added intensifier "अहम" was removed). But a Hindi page that credits China with leading world standards, and frames Ke-Shi as "an open standard for that work", may read to many Indian readers as promotional toward China, given India–China relations. No claim was changed; a human should decide whether the Hindi page keeps this card as is, reorders it, or gives it a lower profile.
2. **"Time zones are politics" + India (`why.items[2]`).** Now accurately says India *spans* nearly two time zones of territory (not that it has two). Indian readers may connect this to the live debate over a separate time zone for the Northeast; the sentence is factual, but worth a human glance alongside item 1.
3. **`why.items[5].title` — "re-written in 2035".** The English is ambiguous (in 2035 vs. by 2035). Hindi uses "2035 तक" (by 2035), which is the natural reading. Confirm the intended meaning in the English source.
4. **Compass labels.** Changed to full words (पूर्व / पश्चिम / उत्तर / दक्षिण), so the clock reads "12.3 kè पूर्व". If the readout has tight width on mobile, check it visually; the fallback would be "पू." / "प." with abbreviation dots, which is less clear.
5. **"BeiDou"** is left in Latin script. Hindi news uses varying spellings (बेइदोउ, बाइदू); Latin is clearest for tech readers, but a human may prefer adding a Devanagari form.
6. **Indian grouping in the quartz table** (29,85,984 · 8,64,000 · 86,40,000 · 1,38,24,000) follows the brief. Some Indian engineers expect international grouping in technical tables; confirm the brief's choice applies here.
