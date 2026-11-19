# zh review: 20 updated strings (independent reviewer)

Checked against en_new, docs/i18n/BRIEF.md (Chinese section), DECISIONS.md and locales/zh.json. "Four coordinates" was checked against public/assets/clock.js: it means the four quarter marks (0/25/50/75 kè), so 四个坐标刻度 is accurate.

1. **hero.sub**: "The whole Earth shares one clock, linking time and space together. It can measure when you are, and also measure where on Earth you are." Unchanged.
2. **hero.dialHint**: "Ke-Shi is the same for everyone — no matter where you are. Unlike an ordinary clock, the four coordinate marks on the Ke-Shi dial rotate with your location, always keeping the Prime Meridian (Greenwich) as a fixed reference. / Solar noon is always at the very top of the dial. As the sun crosses the sky, three hands mark the passing of time: the red hand turns once a day, the blue hand once per gong, the gold hand once per Ke-Shi beat, sweeping past each passing Ke-Shi tick." Unchanged.
3. **eliminates.title**: "Subtract the things that always get people confused, for example: the 24-hour clock, morning and afternoon, 60 minutes per hour, 60 seconds per minute, time zones, daylight saving time, leap seconds, and the International Date Line!"
   Changed: 东西——比如： → 东西，比如：. Why: a dash followed by 比如 + colon stacks two introducers, which reads clumsily in Chinese; a comma plus 比如： is the natural way to say "things like:". Meaning unchanged.
4. **eliminates.tail**: "While holding on to what really matters — the here and now you are in, and the sun's position in the sky." Unchanged.
5. **eliminates.heading**: "Ke-Shi Nu:Time, doing subtraction on time" (no full stop). Unchanged.
6. **time.lead**: "Ke-Shi Nu:Time is the same for everyone — no matter where you are. Where you are no longer decides what time it is." Unchanged.
7. **how.lead**: "Every unit is a power of 10. Every display reads the same way: gong:beat:tick." Unchanged (agree: spaced half-width colons look loose in Chinese typesetting; the unspaced form matches the readout).
8. **ke.lead**: "A whole day is 100 kè, a whole circle is also 100 kè. So the Earth's rotation and the rotation of the four coordinate marks on the Ke-Shi Nu:Time dial are completely in step — and time zones cease to exist." Unchanged.
9. **geometry.items[1][0]**: "Sum of a triangle's interior angles." Unchanged.
10. **geometry.items[4][0]**: "30°-60°-90° triangle." Unchanged (standard Chinese name; digits match the English).
11. **geometry.trig**: "sin 25 kè = 1, cos 50 kè = −1, sin 75 kè = −1, cos 100 kè = 1. / A wave that repeats once a day has a period of exactly 100 kè. Cycles, orbits and oscillations finally use the same unit as the calendar." Unchanged.
12. **geometry.trigTitle**: "Trigonometry, also on a new scale." Unchanged (也 carries "And"; the 刻度 pun was an accepted tone choice, DECISIONS #7).
13. **heritage.title**: "Not a new idea, but we completed it." Unchanged.
14. **heritage.lead**: "Throughout history, many great civilizations tried to divide the day more sensibly. Ke-Shi Nu:Time borrows their wisdom and adds one thing none of them had: the whole world's consensus on the same 'now' — no matter where you are." Unchanged.
15. **heritage.items[1].text**: "Revolutionary France set the day at 10 hours, 100 minutes per hour, 100 seconds per minute — exactly matching Ke-Shi's gong, beat and tick. The metre and kilogram later spread around the world; decimal time simply came too early." Unchanged (agree: a flat list would read as a sum; the nested form is what the English means).
16. **heritage.items[2].title**: "A whole country, using the wrong time zone." Unchanged.
17. **heritage.items[2].text**: "Most of Spain lies west of Greenwich, yet in 1940 it adopted Central European Time. Its clocks are still, to this day, an hour or more ahead of the sun — this is a living example of how time zones affect daily life." Unchanged.
18. **build.lead**: "The Ke-Shi Nu:Time Standard is an open standard. The specification and reference implementations are free and open; anyone can use them, develop on top of them, and ship them with products — the standard belongs to everyone, and the name 'Ke-Shi Nu:Time' stands for precision." Unchanged.
19. **build.items[0].text**: "Units, kè, universal synchronization, latitude and longitude, the 100-kè circle, solar position, and the nu-time/v1 record format. CC BY 4.0." Unchanged.
20. **build.items[1].text**: "Ready-to-use conversions: UTC and Ke-Shi Nu:Time, degrees and kè, and latitude/longitude — all with shared test vectors. MIT or Apache 2.0 licence." Unchanged (agree with the translator's flag: listing 经纬度 as one item avoids "convert latitude into longitude").

Fixed tokens checked: Nu:Time, 刻时, nu-time/v1, CC BY 4.0, MIT, Apache 2.0, all numbers, kè values and degree figures intact; full-width punctuation throughout.

**Verdict:** accurate, natural and consistent with zh.json; one punctuation fix (item 3), ready to apply.
