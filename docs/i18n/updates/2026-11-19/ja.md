# ja review: 20 updated strings (independent reviewer)

Checked against en_new, docs/i18n/BRIEF.md, DECISIONS.md and locales/ja.json (ゴング・kè・ビート・ティック, です・ます prose, short plain headings). Fixed tokens (Nu:Time, 刻时 Ke-Shi, nu-time/v1, licence names, numbers, kè, degrees) all intact. Four items changed; the rest are accepted as delivered.

1. **hero.sub**: "One clock for the whole planet, connecting time and space. It measures both the 'when' and the 'where' on Earth."
   Changed: 地球上の「いつ」と「どこ」を、どちらも測ります → 地球上の「いつ」も「どこ」も測ります. Why: 「AとBを、どちらも」 is stiff translationese; 「AもBも」 is the natural Japanese for "both A and B". Meaning unchanged.
2. **hero.dialHint**: "Nu:Time is the same for everyone, wherever you are. Unlike an ordinary clock, the four coordinate marks on the Nu:Time dial rotate to match where you are, keeping Greenwich's Prime Meridian as a fixed reference. / Solar noon, when the sun is highest in the sky, is always at the very top of the dial. As the sun moves across the sky, three hands show the flow of time: the red hand turns once a day, the blue hand once every gong, the gold hand once every beat, marking the passing ticks."
   Changed: 4つの座標 → 4つの座標目盛り. Why: 「文字盤にある4つの座標」 reads as four coordinate values and leaves the reader asking which; 座標目盛り (coordinate graduation marks) names what is on the dial ring, and matches zh 四个坐标刻度 and ru «координатные отметки». Same English word, made concrete.
3. **eliminates.title**: "The things you never really understood anyway. 24 hours a day, AM and PM, 60 minutes an hour, 60 seconds a minute, time zones, daylight saving time, leap seconds, and the date line!" Unchanged (こんなものたち already carries "things like").
4. **eliminates.tail**: "Meanwhile, it keeps what matters: this very moment, the place where you are, and the position of the sun in the sky."
   Changed: いまいる瞬間と場所 → いまこの瞬間と、あなたのいる場所. Why: いまいる瞬間 ("the moment you are now in") is unidiomatic; いまこの瞬間 is the file's existing phrase and あなたのいる場所 is used elsewhere (hero.dayBar, dialHint). Same meaning: the moment and place you're in.
5. **eliminates.heading**: "What Nu:Time eliminates" Unchanged (full stop dropped as in English).
6. **time.lead**: "Nu:Time is the same for everyone, wherever you are. The place you are no longer changes the time." Unchanged.
7. **how.lead**: "Every unit is a power of ten. Every display reads the same way: gong:beat:tick." Unchanged (unspaced colon is correct Japanese typography).
8. **ke.lead**: "A day is 100 kè. A full circle is also 100 kè. So the Earth's rotation and the rotation of the four coordinate marks on the Nu:Time dial match. And time zones disappear."
   Changed: 4つの座標 → 4つの座標目盛り, consistent with dialHint (item 2).
9. **geometry.items[1][0]**: "Sum of the interior angles of a triangle" Unchanged.
10. **geometry.items[4][0]**: "Triangle of 30°, 60°, 90°" Unchanged.
11. **geometry.trig**: "sin 25 kè = 1, cos 50 kè = −1, sin 75 kè = −1, cos 100 kè = 1. / The period of a wave that repeats daily is exactly 100 kè. Cycles, orbits and oscillations at last share the same unit as the calendar." Unchanged.
12. **geometry.trigTitle**: "And, a new era of trigonometry." Unchanged.
13. **heritage.title**: "Not a new idea. But the ones who finished it are us." Unchanged (bold, as the English).
14. **heritage.lead**: "Great civilizations have long tried to divide the day more rationally. Nu:Time inherits that wisdom and adds what no civilization had: that the whole Earth can share the same 'now', wherever you are." Unchanged.
15. **heritage.items[1].text**: "Revolutionary France set the day at 10 hours, the hour at 100 minutes, the minute at 100 seconds. Exactly the same as Nu:Time's gong, beat and tick. The metre and kilogram spread around the world, but decimal time was too early." Unchanged (deliberate: avoids reading as a sum).
16. **heritage.items[2].title**: "A whole country with its time zone off" Unchanged.
17. **heritage.items[2].text**: "Although most of Spain lies west of Greenwich, it adopted Central European Time in 1940. So its clocks are still an hour or more ahead of the sun. A living example of how time zones affect daily life." Unchanged.
18. **build.lead**: "Nu:Time Standard · 刻时 Ke-Shi is an open standard. Anyone can use the specification and reference implementations free, develop them, and build them into products. The standard belongs to everyone. And what the name 'Nu:Time · 刻时 Ke-Shi' stands for is precision." Unchanged.
19. **build.items[0].text**: "Units, kè, worldwide synchronization, latitude and longitude, the 100-kè circle, the sun's position, the nu-time/v1 record. CC BY 4.0." Unchanged.
20. **build.items[1].text**: "Convert UTC and Nu:Time, degrees and kè, and latitude/longitude with drop-in functions. All with shared test vectors. MIT or Apache 2.0." Unchanged (does not read as latitude↔longitude).

**Verdict:** faithful and natural after four small wording fixes; no additions, omissions or softening; ready to merge.
