# fr — review of 20 updated strings

Checked: meaning against en_new, idiom, consistency with locales/fr.json, fixed tokens, digits, typography (U+00A0 before `:`, U+202F before `! ;`, ’ apostrophes, spaced em dashes as in the rest of the file). All correct.

1. **hero.sub** — "A single clock for the whole planet, which connects time and space. It measures both when and where you are on Earth." Unchanged.
2. **hero.dialHint** — "Nu:Time time is the same for everyone — wherever you are. Unlike an ordinary clock, the four coordinates of the Nu:Time dial turn according to the place where you are, keeping a fixed reference to the Greenwich meridian. / Solar noon is always at the top of the dial and, while the Sun crosses the sky, three hands mark the passage of time: the red hand makes one turn per day, the blue hand one turn per gong, and the golden hand one turn per beat, counting off the tics." Unchanged.
3. **eliminates.title** — "Farewell to everything you never really understood — for example: the 24 hours, the English speakers' AM and PM, the 60 minutes, the 60 seconds, time zones, the switch to summer time, leap seconds and the date line!" Unchanged.
4. **eliminates.tail** — "While keeping what matters — the instant and the place where you are, as well as the position of the Sun in the sky." Unchanged.
5. **eliminates.heading** — "Nu:Time makes a clean sweep" Unchanged.
6. **time.lead** — "Nu:Time time is the same for everyone — wherever you are. Where you are no longer changes what time it is." Unchanged.
7. **how.lead** — "Every unit is a power of ten. Every display reads the same way — gong : beat : tic." Unchanged.
8. **ke.lead** — "A whole day is 100 kè. A full turn is 100 kè. The rotation of the Earth and that of the four coordinates of the Nu:Time dial are therefore identical — and time zones disappear." Unchanged.
9. **geometry.items[1][0]** — "Sum of the angles of a triangle" Unchanged.
10. **geometry.items[4][0]** — "30-60-90 triangle" Unchanged.
11. **geometry.trig** — "sin 25 kè = 1, … and cos 100 kè = 1. / A wave that repeats every day has a period of exactly 100 kè. Cycles, orbits and oscillations finally share the same unit as the calendar." Unchanged.
12. **geometry.trigTitle** — "And a new era for trigonometry." Unchanged.
13. **heritage.title** — "Not a new idea, but we have carried it through to completion." Unchanged.
14. **heritage.lead** — "Great civilisations long sought to divide the day more sensibly. Nu:Time inherits their wisdom and adds what none of them had: a planet able to agree on the same instant — wherever you are." Unchanged.
15. **heritage.items[1].text** — "Revolutionary France divided the day into 10 hours, the hour into 100 minutes and the minute into 100 seconds — exactly the gong, beat and tic of Nu:Time. The metre and the kilogram conquered the world; decimal time was simply ahead of its time." Unchanged (deliberate phrasing).
16. **heritage.items[2].title** — "A whole country in the wrong time zone" Unchanged.
17. **heritage.items[2].text** — "Spain lies mostly west of Greenwich, but it adopted Central European Time in 1940. Its clocks are still an hour or more ahead of its sun — a living example of what time zones do to daily life." Unchanged.
18. **build.lead** — "The Nu:Time · 刻时 Ke-Shi standard is an open standard. The specification and reference implementations are free: anyone can use them, build on them and integrate them into their products. The standard belongs to everyone, and the Nu:Time · 刻时 Ke-Shi name is synonymous with precision." Unchanged.
19. **build.items[0].text** — "The units, the kè, universal synchronisation, latitude and longitude, the 100-kè circle, the position of the Sun and the nu-time/v1 record. CC BY 4.0." Unchanged.
20. **build.items[1].text** — "Ready-to-use conversions between UTC and Nu:Time and between degrees and kè, latitude and longitude included — all with shared test vectors. MIT or Apache 2.0."
    - Before: « …entre UTC et Nu:Time, degrés et kè, latitude et longitude — toutes avec… »
    - After: « …entre UTC et Nu:Time et entre degrés et kè, latitude et longitude comprises — toutes avec… »
    - Why: under the shared « entre », « latitude et longitude » read as a third pair, i.e. converting latitude into longitude. Repeating « entre » closes the pairs, and « comprises » marks latitude and longitude as covered by the conversions.

Verdict: good translation; one fix (build.items[1] latitude/longitude ambiguity); ready to merge.
