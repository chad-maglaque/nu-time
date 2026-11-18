# Back-translation drift check: Hindi (`locales/hi.json`)

Method: every string in `locales/hi.json` was back-translated into plain, literal English, then compared string by string with `locales/en.json`. Only real drift is flagged. Wording changes with the same meaning, Indian digit grouping (1,00,000 · 29,85,984 · 1,38,24,000), and explanatory glosses that keep the intent are not listed. The locale file was not edited.

## Flagged items

| Key | English source | Back-translation of Hindi | Problem | Suggested fix (Hindi) | Severity |
|---|---|---|---|---|---|
| `why.items.5.title` | The world's next standards are being re-written in 2035 | "The world's next standards are being rewritten **by** 2035" | Date claim changed. "2035 तक" means "by/until 2035", not "in 2035". It now points to a deadline instead of a year. | दुनिया के अगले मानक 2035 में नए सिरे से लिखे जा रहे हैं | medium |
| `roadmap.items.3.text` | Scaled conversion as leap seconds end and the second is redefined. Time and place, in one unit. | "Large-scale **change** along with leap seconds ending and the new definition of the second. Time and place, in one unit." | "Conversion" (continuing the data conversion from the 2030–2035 pilot) became a generic "change" (बदलाव). The link to the previous roadmap step is lost. | लीप सेकंड ख़त्म होने और सेकंड की नई परिभाषा के साथ बड़े पैमाने पर कन्वर्ज़न। समय और स्थान, एक ही इकाई में। | low |
| `build.items.2.text` | …MIP display, and a haptic pulse every kè. CERN-OHL-P 2.0. | "…MIP display, and a **light** vibration (haptic pulse) at every kè." | Adds a spec detail the English does not state: the pulse is described as light or gentle (हल्का). | …MIP डिस्प्ले, और हर kè पर एक हैप्टिक पल्स (कंपन)। CERN-OHL-P 2.0। | low |
| `why.items.4.text` | Base 60 is a translation layer they tolerate. | "For them base 60 is just a layer of translation that they **somehow put up with**." | Slightly stronger than the English. "किसी तरह झेल लेते हैं" suggests struggle, where the English "tolerate" is neutral. | 60 का आधार उनके लिए बस अनुवाद की एक परत है, जिसे वे सह लेते हैं। | low |
| `heritage.items.0.text` | Night was kept in five watches, the gēng (更). | "Night was divided into five **pahars**, called gēng (更)." | The claim itself is unchanged. But Indian readers know पहर as the 3-hour division (four pahars to a night, eight to a day), so "पाँच पहर" can read as a contradiction or a mistake. | रात को पाँच हिस्सों (पहरों) में बाँटा जाता था, जिन्हें gēng (更) कहते थे। | low |

## Checks with no findings

- **kè.** Written in Latin script as `kè` in every one of its 38 occurrences. It is never written as के, never as `ke` or `Kè`, and it never sits next to the postposition के in a way that could be misread.
- **Unit names.** गोंग, बीट and टिक are used consistently in prose, unit labels, the `गोंग:बीट:टिक` pattern and the licence text. gēng (更) is kept separate from गोंग, as in the English.
- **Brand and legal names.** Nu:Time, Nu:Time™, Ke-Shi, 刻时, Nu-Time Inc., Nu:Lat/Nu:Long, nu-time/v1, the licence names and the email address are all unaltered.
- **"universal".** Translated as वैश्विक everywhere, consistently.
- **Numbers, dates and units.** All digits match: 1793–1795, 1940, 1916, 2019, 1972, 27, 86,400, 2030, 2035, the angle/kè/trig tables, and the quartz table (re-grouped in the Indian style only).
- **India and China.** "India spans nearly two" became लगभग दो ("about two"), which is acceptable. The China timezone sentence is neutral geography, matching the English. The BeiDou / National Time Service Center sentence keeps the English strength and does not suggest any endorsement.

## Overall verdict

The Hindi translation tracks the English closely and reads naturally. No string changes a number, misuses a brand, mixes up a unit name, or turns kè into के. The one material drift is `why.items.5.title`, where "in 2035" became "by 2035" (2035 तक). That is a small factual change and should be fixed. The other four items are low-severity nuance: one added detail (a "light" haptic pulse), one slightly stronger verb, one roadmap step where "conversion" became a generic "change", and one cultural term (पहर) that Indian readers may associate with a different count. The jokes and idioms ("never understood anyway", "two Tuesdays", "the façade can be too") carry the same intent. "Your place in the sun" loses its pun but keeps its literal meaning, which is acceptable. After the medium fix, the file is fit to ship.
