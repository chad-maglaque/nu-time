# ru review: 20 updated strings (independent reviewer)

Checked against en_new, docs/i18n/BRIEF.md, DECISIONS.md and locales/ru.json (гонг · кэ · удар · тик, вы, decimal comma, no-break space before the dash and between number and кэ). Fixed tokens (Nu:Time, 刻时 Ke-Shi, nu-time/v1, licence names, numbers, кэ, degrees) all intact. Three items changed; the rest are accepted as delivered.

1. **hero.sub**: "One clock for the whole planet, which connects time and space. It measures both 'when' and 'where' you are on Earth." Unchanged.
2. **hero.dialHint**: "Nu:Time is one time for everyone, wherever you are. Unlike ordinary clocks, the four coordinate marks on the Nu:Time dial rotate according to your location, but always keep their link to the Prime Meridian in Greenwich. / Solar noon is always at the top of the dial. While the Sun moves across the sky, three hands mark the passage of time: the red one makes one revolution per day, the blue one revolution per gong, and the gold one revolution per beat, counting off the ticks."
   Changed: «наверху циферблата, и пока Солнце идёт по небу, ход…» → «наверху циферблата. Пока Солнце идёт по небу, ход…». Why: as delivered it lacks the comma required after «и» before the «пока» clause («и, пока…»), which looks fussy anyway; splitting into two sentences, as the existing file did, is cleaner. No meaning lost.
3. **eliminates.title**: "everything you never really understood anyway, for example: 24 hours, AM and PM, 60 minutes, 60 seconds, time zones, the switch to summer time, leap seconds and the date line!"
   Changed: «разбирались, — например:» → «разбирались, например:». Why: comma + dash + «например» + colon stacks three introducers; standard Russian punctuation after a generalising word is «…, например: …». Keeps "things like".
4. **eliminates.tail**: "At the same time it keeps what matters: the moment and place where you are now, and also the position of the Sun in the sky." Unchanged.
5. **eliminates.heading**: "Nu:Time abolishes" Unchanged.
6. **time.lead**: "Nu:Time time is one for everyone, wherever you are. What time it is no longer depends on your location." Unchanged.
7. **how.lead**: "Every unit is a power of ten. And every reading reads the same way: gong : beat : tick." Unchanged (spaced colon with no-break spaces, as Russian sets ratio colons).
8. **ke.lead**: "A full day is 100 kè. A full circle is also 100 kè. So the rotation of the Earth and the rotation of the four coordinate marks on the Nu:Time dial coincide, and time zones disappear." Unchanged.
9. **geometry.items[1][0]**: "Sum of the angles of a triangle" Unchanged.
10. **geometry.items[4][0]**: "Triangle with angles of 30°, 60° and 90°" Unchanged.
11. **geometry.trig**: "sin 25 kè = 1, cos 50 kè = −1, sin 75 kè = −1 and cos 100 kè = 1. / A wave that repeats every day has a period of exactly 100 kè. Cycles, orbits and oscillations are at last measured in the same unit as the calendar." Unchanged.
12. **geometry.trigTitle**: "And a new era in trigonometry." Unchanged.
13. **heritage.title**: "The idea is not new, but we carried it through to the end." Unchanged.
14. **heritage.lead**: "Great civilisations long tried to divide the day more sensibly. Nu:Time takes on their wisdom and adds what none of them had: a whole planet that can agree on one single moment, wherever you are." Unchanged.
15. **heritage.items[1].text**: "Revolutionary France divided the day into 10 hours of 100 minutes of 100 seconds, exactly like the gong, beat and tick in Nu:Time. The metre and kilogram conquered the world, and decimal time was simply ahead of its time." Unchanged (deliberate: avoids reading as a sum).
16. **heritage.items[2].title**: "A whole country in the wrong time zone" Unchanged.
17. **heritage.items[2].text**: "Spain lies mostly west of Greenwich, but in 1940 switched to Central European Time. Its clocks are still fast relative to the Sun by an hour or more, a living example of what time zones do to everyday life." Unchanged.
18. **build.lead**: "The Nu:Time · 刻时 Ke-Shi Standard is open. Anyone may freely use, develop and build the specification and reference implementations into their products: the standard belongs to everyone, and the name Nu:Time · 刻时 Ke-Shi is a mark of precision." Unchanged.
19. **build.items[0].text**: "Units, kè, synchronisation to the universal time, latitude and longitude, the 100-kè circle, the position of the Sun and the nu-time/v1 record. CC BY 4.0." Unchanged.
20. **build.items[1].text**: "Ready-made conversions between UTC and Nu:Time, degrees and kè, and also for latitude and longitude, all with shared test vectors. MIT or Apache 2.0."
   Changed: «— всё с общими» → «— все с общими». Why: «всё» ("everything") doesn't agree with «преобразования»; «все» ("all of them") refers back to the conversions, which is what "all with" means.

**Verdict:** faithful and idiomatic after three small grammar/punctuation fixes; no additions, omissions or softening; ready to merge.
