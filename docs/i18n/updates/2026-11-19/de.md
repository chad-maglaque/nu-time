# de — review of 20 updated strings

Checked: meaning against en_new, idiom, consistency with locales/de.json (du, capitalised Gong/Kè/Beat/Tick, en dash with spaces, "für eine neue Zeit" title pair, "zu Ende gedacht"), fixed tokens, digits. All correct.

1. **hero.sub** — "One clock for the whole planet that connects time and space. It measures at the same time when and where on Earth you are right now." Unchanged.
2. **hero.dialHint** — "Nu:Time is the same for everyone – no matter where you are. Unlike with an ordinary clock, the four coordinates on the Nu:Time dial turn to match your location and stay fixed in reference to the Prime Meridian in Greenwich. / Solar noon is always at the top, and while the Sun moves across the sky, three hands show the course of time: the red hand turns once per day, the blue one once per gong and the golden one once per beat – it counts the passing ticks." Unchanged.
3. **eliminates.title** — "with everything you never understood anyway – for example: 24 hours, AM and PM, 60 minutes, 60 seconds, time zones, summer time, leap seconds and the date line!" (continues the heading "Nu:Time puts an end …") Unchanged.
4. **eliminates.tail** — "And keeps what really counts – the moment and the place where you are, and with it the position of the Sun in the sky." Unchanged.
5. **eliminates.heading** — "Nu:Time puts an end" Unchanged.
6. **time.lead** — "Nu:Time is the same for everyone – no matter where you are. Your location no longer changes what time it is." Unchanged.
7. **how.lead** — "Every unit is a power of ten. Every display follows the same pattern – Gong : Beat : Tick." Unchanged.
8. **ke.lead** — "A whole day has 100 Kè. A whole circle has 100 Kè. The rotation of the Earth and the rotation of the four coordinates on the Nu:Time dial are therefore the same – and time zones disappear." Unchanged.
9. **geometry.items[1][0]** — "Angle sum in a triangle" Unchanged.
10. **geometry.items[4][0]** — "30-60-90 triangle" Unchanged.
11. **geometry.trig** — "sin 25 Kè = 1, … and cos 100 Kè = 1. / A wave that repeats daily has a period of exactly 100 Kè. Cycles, orbits and oscillations finally share the same unit with the calendar." Unchanged.
12. **geometry.trigTitle** — "And trigonometry for a new time." Unchanged.
13. **heritage.title** — "Not a new idea, but we thought it through to the end." Unchanged.
14. **heritage.lead** — "Great cultures have tried again and again to divide the day more sensibly. Nu:Time takes on their insights and adds what none of them had: a planet that can agree on the same moment – no matter where you are." Unchanged.
15. **heritage.items[1].text** — "Revolutionary France divided the day into 10 hours, the hour into 100 minutes and the minute into 100 seconds – just like gong, beat and tick in Nu:Time. Metre and kilogram conquered the world; decimal time simply came too early." Unchanged (deliberate phrasing).
16. **heritage.items[2].title** — "A whole country in the wrong time zone" Unchanged.
17. **heritage.items[2].text** — "Spain lies mostly west of Greenwich but adopted Central European Time in 1940. To this day its clocks run an hour or more ahead of the Sun – a living example of what time zones do to everyday life." Unchanged.
18. **build.lead** — "The Nu:Time standard · 刻时 Ke-Shi is an open standard. Specification and reference implementations are freely available to all – to use, develop further and build into your own products. The standard belongs to everyone, and the name Nu:Time · 刻时 Ke-Shi stands for precision." Unchanged.
19. **build.items[0].text** — "Units, the Kè, worldwide synchronisation, geographic latitude and longitude, the 100-Kè circle, the solar position and the nu-time/v1 record. CC BY 4.0."
    - Before: "…weltweite Synchronisation, Breite und Länge, der 100-Kè-Kreis…"
    - After: "…weltweite Synchronisation, geografische Breite und Länge, der 100-Kè-Kreis…"
    - Why: in a bare list, "Breite und Länge" first reads as "width and length". The short labels work on the kè facts and the readout, where meridian and equator sit next to them; here they need "geografische".
20. **build.items[1].text** — "Ready-to-use conversions between UTC and Nu:Time and between degrees and Kè, also for geographic latitude and longitude – all with shared test vectors. MIT or Apache 2.0."
    - Before: "…zwischen UTC und Nu:Time, Grad und Kè, Breite und Länge – alle mit…"
    - After: "…zwischen UTC und Nu:Time und zwischen Grad und Kè, auch für geografische Breite und Länge – alle mit…"
    - Why: under the shared "zwischen", "Breite und Länge" read as a third pair (converting latitude into longitude), and also as "width and length". Repeating "zwischen" closes the pairs; "auch für geografische …" makes the coordinates something the conversions cover.

Verdict: good translation; two related fixes in build.items (latitude/longitude ambiguity, "geografische"); ready to merge.
