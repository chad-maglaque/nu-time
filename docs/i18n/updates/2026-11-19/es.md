# es review — independent check of translator output

## hero.sub

- **Before:** Un solo reloj para todo el planeta que une tiempo y espacio. Mide a la vez cuándo y dónde estás en la Tierra.
- **After:** Un solo reloj para todo el planeta, que une tiempo y espacio. Mide a la vez cuándo y dónde estás en la Tierra.
- **Why:** Without the comma, "todo el planeta que une tiempo y espacio" parses as a restrictive clause on "planeta" (the planet that unites time and space); the comma attaches it to the clock.
- **Back-translation:** One single clock for the whole planet, which unites time and space. It measures at once when and where you are on Earth.

## hero.dialHint

- Unchanged.
- **Back-translation:** Nu:Time is the same for everyone, wherever you are. Unlike a conventional clock, the four coordinates of the Nu:Time clock's dial rotate according to your location and keep a fixed reference to the Greenwich meridian. ¶ Solar noon always stays at the top of the dial and, while the sun crosses the sky, three hands mark the passage of time: the red one makes one turn per day; the blue one, one turn every gong; and the gold one, one turn every beat, marking the tics as it passes.

## eliminates.title

- Unchanged.
- **Back-translation:** all that stuff you never quite managed to understand: things like the 24 hours, a.m. and p.m., the 60 minutes, the 60 seconds, time zones, summer time, leap seconds, and the international date line!

## eliminates.tail

- Unchanged.
- **Back-translation:** And it keeps what matters: the moment and the place you are in, together with the position of the sun in the sky.

## eliminates.heading

- Unchanged.
- **Back-translation:** Nu:Time eliminates

## time.lead

- Unchanged.
- **Back-translation:** Nu:Time is the same for everyone, wherever you are. The place where you find yourself no longer changes what time it is.

## how.lead

- Unchanged.
- **Back-translation:** Each unit is a power of ten. All displays read the same: gong : beat : tic.

## ke.lead

- Unchanged.
- **Back-translation:** A full day is 100 kè. A full turn is 100 kè. So the rotation of the Earth and the rotation of the four coordinates of the Nu:Time clock's dial coincide, and time zones disappear.

## geometry.items.1.0

- Unchanged.
- **Back-translation:** Sum of the angles of a triangle

## geometry.items.4.0

- Unchanged.
- **Back-translation:** 30-60-90 triangle

## geometry.trig

- Unchanged.
- **Back-translation:** sin 25 kè = 1, cos 50 kè = −1, sin 75 kè = −1 and cos 100 kè = 1. ¶ A wave that repeats every day has a period of exactly 100 kè. Cycles, orbits and oscillations at last share the same unit with the calendar.

## geometry.trigTitle

- Unchanged.
- **Back-translation:** And a new era for trigonometry.

## heritage.title

- Unchanged.
- **Back-translation:** It is not a new idea, but we completed it.

## heritage.lead

- Unchanged.
- **Back-translation:** For a long time, great civilizations have tried to divide the day more sensibly. Nu:Time gathers their wisdom and adds what none of them had: a planet able to agree on one same moment, wherever you are.

## heritage.items.1.text

- Unchanged.
- **Back-translation:** Revolutionary France divided the day into 10 hours, each hour into 100 minutes and each minute into 100 seconds: exactly the same as the Nu:Time gong, beat and tic. The metre and the kilogram conquered the world; decimal time simply arrived too early.

## heritage.items.2.title

- **Before:** Todo un país fuera de su huso horario
- **After:** Un país entero fuera de su huso horario
- **Why:** "Todo un país" also carries the "quite a country!" idiom (todo un + noun), a faint ironic note on the Spain card; "Un país entero" says only "a whole country", which keeps the card strictly factual.
- **Back-translation:** A whole country outside its time zone

## heritage.items.2.text

- Unchanged.
- **Back-translation:** Most of Spain lies west of the Greenwich meridian, but in 1940 it adopted Central European time. Its clocks still run an hour or more ahead of the sun: a living example of how time zones condition daily life.

## build.lead

- Unchanged.
- **Back-translation:** The Nu:Time · 刻时 Ke-Shi Standard is an open standard. The specification and the reference implementations are free: anyone can use them, develop on top of them and include them in their products. The standard belongs to everyone, and the name Nu:Time · 刻时 Ke-Shi is a synonym for precision.

## build.items.0.text

- Unchanged.
- **Back-translation:** Units, kè, universal synchronization, latitude and longitude, the 100-kè circle, solar position and the nu-time/v1 record. CC BY 4.0.

## build.items.1.text

- Unchanged.
- **Back-translation:** Ready-to-use conversions between UTC and Nu:Time, degrees and kè, latitude and longitude, all with shared test vectors. MIT or Apache 2.0.

## Remaining notes

- build.items.1.text: faithful, but the English "conversions between … latitude and longitude" now reads as converting latitude into longitude; the Spanish inherits that. Fix in English first if that is not intended.
- France card: the translator's "10 horas, cada hora en 100 minutos y cada minuto en 100 segundos" keeps the deliberate subdivision reading (not a sum); kept.

Verdict: faithful to en_new, idiomatic neutral Spanish, consistent with es.json; two minimal fixes (hero.sub comma, Spain card title). Ready to merge.


**Post-review (coordinator):** build.items[1] — repeated «entre» and added «también para» before latitude/longitude, as in fr/it/de, so it does not read as converting latitude into longitude.
