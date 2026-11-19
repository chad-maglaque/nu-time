# pt review — independent check of translator output

## hero.sub

- Unchanged.
- **Back-translation:** One single clock for the entire planet, linking time and space. It measures both when and where you are on Earth.

## hero.dialHint

- Unchanged.
- **Back-translation:** Nu:Time is the same for everyone — no matter where you are. Unlike an ordinary clock, the four coordinates of the Nu:Time clock's dial turn according to your location and keep a fixed reference to the Greenwich meridian. ¶ Solar noon is always at the top of the dial and, while the sun crosses the sky, three hands mark the passage of time: the red one makes one turn per day, the blue one makes one turn every gong and the gold one makes one turn every beat, marking the tiques as they pass.

## eliminates.title

- Unchanged.
- **Back-translation:** all that stuff you never really understood — things like the 24 hours, AM and PM, the 60 minutes, the 60 seconds, time zones, summer time, leap seconds and the International Date Line!

## eliminates.tail

- Unchanged.
- **Back-translation:** And it keeps what matters — the moment and the place you are in, together with the position of the sun in the sky.

## eliminates.heading

- Unchanged.
- **Back-translation:** Nu:Time eliminates

## time.lead

- Unchanged.
- **Back-translation:** Nu:Time is the same for everyone — no matter where you are. The place where you are no longer changes the time.

## how.lead

- Unchanged.
- **Back-translation:** Each unit is a power of ten. Every screen shows the time the same way: gong : beat : tique.

## ke.lead

- Unchanged.
- **Back-translation:** A whole day has 100 kè. A whole circle has 100 kè. So the rotation of the Earth and the rotation of the four coordinates on the Nu:Time clock's dial coincide — and time zones disappear.

## geometry.items.1.0

- Unchanged.
- **Back-translation:** Sum of the angles of a triangle

## geometry.items.4.0

- Unchanged.
- **Back-translation:** 30-60-90 triangle

## geometry.trig

- Unchanged.
- **Back-translation:** sin 25 kè = 1, cos 50 kè = −1, sin 75 kè = −1 and cos 100 kè = 1. ¶ A wave that repeats every day has a period of exactly 100 kè. Cycles, orbits and oscillations finally share the same unit with the calendar.

## geometry.trigTitle

- Unchanged.
- **Back-translation:** And a new era of trigonometry.

## heritage.title

- Unchanged.
- **Back-translation:** It isn't a new idea, but we concluded (finished) it.

## heritage.lead

- Unchanged.
- **Back-translation:** Great civilizations tried, for a long time, to divide the day in a more sensible way. Nu:Time draws on that wisdom and adds what none of them had: an entire planet able to agree on the same moment — no matter where you are.

## heritage.items.1.text

- Unchanged.
- **Back-translation:** Revolutionary France divided the day into 10 hours, each hour into 100 minutes and each minute into 100 seconds — exactly like the Nu:Time gong, beat and tique. The metre and the kilogram conquered the world; decimal time just arrived too early.

## heritage.items.2.title

- Unchanged.
- **Back-translation:** A whole country in the wrong time zone

## heritage.items.2.text

- Unchanged.
- **Back-translation:** Spain lies, for the most part, west of Greenwich, but adopted Central European time in 1940. Its clocks still run an hour or more ahead of the sun — a living example of what time zones do to everyday life.

## build.lead

- Unchanged.
- **Back-translation:** The Nu:Time · 刻时 Ke-Shi Standard is an open standard. The specification and the reference implementations are free to use: anyone can use them, develop from them and launch products with them — the standard belongs to everyone, and the name Nu:Time · 刻时 Ke-Shi is a synonym for precision.

## build.items.0.text

- Unchanged.
- **Back-translation:** Units, kè, universal synchronization, latitude and longitude, the 100-kè circle, solar position and the nu-time/v1 record. CC BY 4.0.

## build.items.1.text

- Unchanged.
- **Back-translation:** Ready-to-use conversions between UTC and Nu:Time, degrees and kè, latitude and longitude — all with shared test vectors. MIT or Apache 2.0.

## Remaining notes

- build.items.1.text: same English-source ambiguity as es ("conversions between … latitude and longitude").
- heritage.title "mas nós a concluímos" is correct written Brazilian Portuguese, slightly formal (clitic "a"); acceptable for a heading, left unchanged.
- France card: subdivision phrasing ("cada hora em 100 minutos e cada minuto em 100 segundos") kept; it does not read as a sum.

Verdict: faithful to en_new, natural Brazilian Portuguese (você), consistent with pt.json; no changes needed. Ready to merge.


**Post-review (coordinator):** build.items[1] — repeated «entre» and added «también para» before latitude/longitude, as in fr/it/de, so it does not read as converting latitude into longitude.
