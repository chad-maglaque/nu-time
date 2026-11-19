# Urdu (ur) — independent review of the 20 updated strings

Checked against en_new for meaning, tone, locale consistency (Urdu locale already uses ڈائل, "kè کوآرڈینیٹس" in the hardware card, عرض بلد / طول بلد) and fixed tokens (Nu:Time, 刻时 Ke-Shi, nu-time/v1, licences, digits, Latin kè; no "kè کے" anywhere). RTL: "30-60-90" and the spaced gong : beat : tick pattern stay in correct order under the bidi algorithm.

**[0] hero.sub** — kept.
Back: "One single clock for the whole world, which connects time and place. It measures when you are on Earth — and where, too."

**[1] hero.dialHint** — kept.
Back: "Nu:Time is one and the same for everyone — no matter where you are. Unlike an ordinary clock, the four coordinates on the Nu:Time clock's dial rotate according to your location, and their orientation always stays tied to the Prime Meridian at Greenwich.
Solar noon is always at the very top of the clock, and as the sun moves ahead in the sky, three hands show time passing: the red hand completes one round a day, the blue hand one round every gong, and the golden hand makes one round every beat and keeps counting the passing ticks."
(چار کوآرڈینیٹس is faithful to "coordinates" and matches the existing "kè کوآرڈینیٹس".)

**[2] eliminates.title** — kept.
Back: "All those things you never managed to understand anyway — like: 24 hours, AM and PM, 60 minutes, 60 seconds, time zone, daylight saving, leap second and the International Date Line!"

**[3] eliminates.tail** — kept.
Back: "And keeps all that is important — the moment and the place where you are, and along with it the sun's position in the sky."

**[4] eliminates.heading** — kept.
Back: "Nu:Time ends all this:"
(Already ends in a colon that leads into the list; the English change only removed a full stop, so nothing to do.)

**[5] time.lead** — kept.
Back: "Nu:Time is one and the same for everyone — no matter where you are. Where you are no longer changes the time."

**[6] how.lead** — kept.
Back: "Every unit is a power of ten. Every display is read the same way — gong : beat : tick."

**[7] ke.lead** — kept.
Back: "A full day is 100 kè. A full circle too, 100 kè. Thus the Earth's rotation and the rotation of the four coordinates on the Nu:Time clock's dial are one and the same — and time zones vanish."

**[8] geometry.items[1][0]** — kept.
Back: "Sum of a triangle's angles"

**[9] geometry.items[4][0]** — kept.
Back: "30-60-90 triangle"

**[10] geometry.trig** — kept.
Back: "sin 25 kè = 1, cos 50 kè = −1, sin 75 kè = −1 and cos 100 kè = 1.
A wave that repeats daily has a period of exactly 100 kè. Cycles, orbits and oscillations are at last measured in the very unit of the calendar."

**[11] geometry.trigTitle** — kept.
Back: "And a new era of trigonometry."

**[12] heritage.title** — CHANGED.
Back: "The idea isn't new, but we completed it."
Before: خیال نیا نہیں، مگر اسے مکمل ہم نے کیا۔
After: خیال نیا نہیں، مگر ہم نے اسے مکمل کیا۔
Why: the object-first order puts contrastive focus on ہم نے ("it was *we* who finished it"), a boast the English doesn't make. Neutral order keeps the focus on "finished". Same fix as Hindi, so the two pages match.

**[13] heritage.lead** — kept.
Back: "Great civilizations have for ages been trying to divide the day more sensibly. Nu:Time benefits from their wisdom and adds the thing none of them had: a world that can agree on one and the same moment — no matter where you are."

**[14] heritage.items[1].text** — kept (known deliberate phrasing).
Back: "Revolutionary France divided the day into 10 hours, each hour into 100 minutes and each minute into 100 seconds — exactly like Nu:Time's gong, beat and tick. The metre and kilogram conquered the world; decimal time had simply come ahead of its era."

**[15] heritage.items[2].title** — kept.
Back: "An entire country in the wrong time zone"

**[16] heritage.items[2].text** — kept.
Back: "Most of Spain lies west of Greenwich, yet in 1940 it adopted Central European Time. Its clocks even today run an hour or more ahead of the sun — a living example of what time zones do to daily life."

**[17] build.lead** — kept.
Back: "Nu:Time Standard · 刻时 Ke-Shi is an open standard. Its document and reference implementations are free for everyone — use them, build further on them, include them in your product. The standard is everyone's, and the Nu:Time · 刻时 Ke-Shi name is the mark of fine and exact measurement."

**[18] build.items[0].text** — kept.
Back: "Units, kè, global synchronization, latitude and longitude, the 100 kè circle, the sun's position and the nu-time/v1 record. CC BY 4.0."

**[19] build.items[1].text** — kept (known deliberate phrasing).
Back: "Direct conversion between UTC and Nu:Time, kè and degrees, and also for latitude and longitude, ready for immediate use — all with shared test vectors. MIT or Apache 2.0."
(نیز is ordinary written Urdu, not heavy Persianisation; pair order kè/degrees keeps kè away from کے.)

**Verdict:** Accurate, natural modern Urdu, consistent with the locale and RTL-safe; one change (heritage title word order), matching Hindi.
