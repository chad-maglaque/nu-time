# it — review of 20 updated strings

Checked: meaning against en_new, idiom, consistency with locales/it.json (straight apostrophes, "sole" lower case, decimal/thousand dots), fixed tokens, digits. All correct.

1. **hero.sub** — "A single clock for the whole planet, which unites time and space. It measures both when and where you are on Earth." Unchanged.
2. **hero.dialHint** — "Nu:Time is the same for everyone — wherever you are. Unlike a normal clock, the four coordinates on the Nu:Time dial rotate according to your position and keep a fixed reference to the Greenwich meridian. / Solar noon is always at the top of the dial and, while the sun crosses the sky, three hands mark the flow of time: the red hand makes one turn a day, the blue one a turn every gong and the golden one a turn every beat, ticking off the passing tics." Unchanged.
3. **eliminates.title** — "all those things that, let's face it, you never understood — things like: the 24 hours, AM and PM, the 60 minutes, the 60 seconds, time zones, daylight saving time, leap seconds and the date line!" Unchanged.
4. **eliminates.tail** — "And keeps what really matters — the moment and the place you are in, together with the position of the sun in the sky." Unchanged.
5. **eliminates.heading** — "Nu:Time eliminates" Unchanged.
6. **time.lead** — "Nu:Time is the same for everyone — wherever you are. The place where you are no longer changes the time." Unchanged.
7. **how.lead** — "Every unit is a power of ten. Every display reads the same way — gong : beat : tic." Unchanged.
8. **ke.lead** — "A whole day lasts 100 kè. A full turn measures 100 kè. So the rotation of the Earth and that of the four coordinates on the Nu:Time dial coincide — and time zones disappear." Unchanged.
9. **geometry.items[1][0]** — "Sum of the angles of a triangle" Unchanged.
10. **geometry.items[4][0]** — "30-60-90 triangle" Unchanged.
11. **geometry.trig** — "sin 25 kè = 1, … and cos 100 kè = 1. / A wave that repeats every day has a period of exactly 100 kè. Cycles, orbits and oscillations finally share the same unit as the calendar." Unchanged.
12. **geometry.trigTitle** — "And a new era for trigonometry." Unchanged.
13. **heritage.title** — "It isn't a new idea, but we brought it to completion." Unchanged.
14. **heritage.lead** — "For centuries great civilisations have tried to divide the day more sensibly. Nu:Time gathers their wisdom and adds what none of them had: a whole planet agreed on the same instant — wherever you are." Unchanged.
15. **heritage.items[1].text** — "Revolutionary France divided the day into 10 hours, the hour into 100 minutes and the minute into 100 seconds: exactly like the gong, beat and tic of Nu:Time. The metre and the kilogram conquered the world; decimal time simply arrived too early." Unchanged (deliberate phrasing).
16. **heritage.items[2].title** — "A whole country in the wrong time zone" Unchanged.
17. **heritage.items[2].text** — "Spain lies largely west of Greenwich, yet in 1940 it adopted Central European Time. Its clocks are still an hour or more ahead of the sun: a concrete example of how time zones affect everyday life." Unchanged.
18. **build.lead** — "The Nu:Time · 刻时 Ke-Shi standard is an open standard. The specifications and reference implementations are free: anyone can use them, build on them and integrate them into their own products. The standard belongs to everyone, and the Nu:Time · 刻时 Ke-Shi name is synonymous with precision." Unchanged.
19. **build.items[0].text** — "The units, the kè, universal synchronisation, latitude and longitude, the 100-kè circle, the position of the sun and the nu-time/v1 record. CC BY 4.0." Unchanged.
20. **build.items[1].text** — "Ready-to-use conversions between UTC and Nu:Time and between degrees and kè, also for latitude and longitude — all with shared test vectors. MIT or Apache 2.0."
    - Before: "…tra UTC e Nu:Time, gradi e kè, latitudine e longitudine — tutte con…"
    - After: "…tra UTC e Nu:Time e tra gradi e kè, anche per latitudine e longitudine — tutte con…"
    - Why: under the shared "tra", "latitudine e longitudine" read as a third pair (latitude converted into longitude). Repeating "tra" closes the pairs; "anche per" makes latitude and longitude something the conversions cover.

Minor, not changed: eliminates.title "— cose come:" mirrors the English "things … — things like:"; "— per esempio:" would be slightly smoother, but the repetition is the English's own.

Verdict: good translation; one fix (build.items[1] latitude/longitude ambiguity); ready to merge.
