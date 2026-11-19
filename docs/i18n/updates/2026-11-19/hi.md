# Hindi (hi) — independent review of the 20 updated strings

Checked against en_new for meaning, tone, locale consistency (हिन्दी locale already uses डायल, निर्देशांक in "kè निर्देशांकों", अक्षांश/देशांतर) and fixed tokens (Nu:Time, 刻时 Ke-Shi, nu-time/v1, licences, digits, Latin kè; no "kè के" anywhere).

**[0] hero.sub** — kept.
Back: "One clock for the whole world, which connects time and space. It measures when you are on Earth — and where, too."

**[1] hero.dialHint** — kept.
Back: "Nu:Time is one and the same for everyone — no matter where you are. Unlike an ordinary clock, the four coordinates marked on the Nu:Time clock's dial rotate according to your location, and their relation to the Prime Meridian (zero-longitude line) at Greenwich always stays fixed.
Solar noon is always at the very top of the clock, and as the sun moves ahead across the sky, three hands show the passing of time: the red hand completes one round a day, the blue hand one round every gong, and the golden hand, making one round every beat, shows the passing ticks."
(चार निर्देशांक is faithful to "coordinates" and matches the existing "kè निर्देशांकों" in the hardware card.)

**[2] eliminates.title** — kept.
Back: "All those things that never really made sense anyway — like: 24 hours, AM and PM, 60 minutes, 60 seconds, time zones, daylight saving, leap seconds and the International Date Line!"

**[3] eliminates.tail** — kept.
Back: "And keeps all that matters — the moment and the place where you are, along with the sun's position in the sky."

**[4] eliminates.heading** — kept.
Back: "Nu:Time removes"

**[5] time.lead** — kept.
Back: "Nu:Time is one and the same for everyone — no matter where you are. Where you are no longer changes the time."

**[6] how.lead** — kept.
Back: "Every unit is a power of 10. Every display is read the same way — gong : beat : tick."

**[7] ke.lead** — kept.
Back: "A full day is 100 kè. A full circle is also 100 kè. That is, the Earth's turning and the turning of the four coordinates on the Nu:Time clock's dial are one and the same — and time zones end."

**[8] geometry.items[1][0]** — kept.
Back: "Sum of a triangle's angles"

**[9] geometry.items[4][0]** — kept.
Back: "30-60-90 triangle"

**[10] geometry.trig** — kept.
Back: "sin 25 kè = 1, cos 50 kè = −1, sin 75 kè = −1 and cos 100 kè = 1.
A wave that repeats itself every day has a period of exactly 100 kè. Cycles, orbits and oscillations — at last, all their unit is the same one as the calendar's."

**[11] geometry.trigTitle** — kept.
Back: "And a new era of trigonometry."

**[12] heritage.title** — CHANGED.
Back: "The idea isn't new, but we completed it."
Before: विचार नया नहीं, पर इसे पूरा हमने किया।
After: विचार नया नहीं, पर हमने इसे पूरा किया।
Why: the translator's object-first order puts contrastive focus on हमने ("it was *we* who finished it"), which reads as a retort/boast the English doesn't make. Neutral order keeps the focus on "finished", matching "Not a new idea, but we finished it."

**[13] heritage.lead** — kept.
Back: "Great civilizations have long been trying to divide the day more sensibly. Nu:Time adopts their understanding and adds what none of them had: a world that can agree on one and the same moment — no matter where you are."

**[14] heritage.items[1].text** — kept (known deliberate phrasing).
Back: "Revolutionary France divided the day into 10 hours, 100 minutes in each hour and 100 seconds in each minute — exactly like Nu:Time's gong, beat and tick. The metre and kilogram conquered the world; decimal time had simply come before its time."

**[15] heritage.items[2].title** — kept.
Back: "An entire country in the wrong time zone"

**[16] heritage.items[2].text** — kept.
Back: "Most of Spain lies west of Greenwich, yet in 1940 it adopted Central European Time. Its clocks even today run an hour or more ahead of the sun — a living example of what effect time zones have on daily life."

**[17] build.lead** — kept.
Back: "Nu:Time Standard · 刻时 Ke-Shi is an open standard. Its specification and reference implementations are free for everyone — use them, build further on them, ship them in your product. The standard is everyone's, and the Nu:Time · 刻时 Ke-Shi name is the mark of precision."

**[18] build.items[0].text** — kept.
Back: "Units, kè, global synchronization, latitude and longitude, the 100 kè circle, the sun's position and the nu-time/v1 record. CC BY 4.0."

**[19] build.items[1].text** — kept (known deliberate phrasing).
Back: "Ready-to-use conversions between UTC and Nu:Time, kè and degrees, and for latitude and longitude — all with shared test vectors. MIT or Apache 2.0."
(Pair order kè/degrees avoids "kè के"; conversions are bidirectional, so no meaning change.)

**Verdict:** Accurate, natural modern Hindi and consistent with the locale; one change (heritage title word order to drop an emphasis the English doesn't have).
