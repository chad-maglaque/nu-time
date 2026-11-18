# Back-translation drift check: Portuguese (`locales/pt.json`, `docs/i18n/privacy/pt.md`)

Method: the final pt headings and key paragraphs (below) were back-translated into literal English, then compared with `en.json` and `PRIVACY.md`. All the other strings were compared directly. Keys, array lengths and digit sequences were checked by `tests/check_locales.py` (ok).

## Headings

| Key | Portuguese | Back-translation |
|---|---|---|
| `hero.eyebrow` | O Padrão Nu:Time · 刻时 Ke-Shi | The Nu:Time Standard · 刻时 Ke-Shi |
| `hero.title` | tempo e lugar, reinventados. | time and place, reinvented. |
| `eliminates.heading` | O Nu:Time elimina. | Nu:Time eliminates. |
| `time.title` | O tempo, reinventado. | Time, reinvented. |
| `how.title` | O sistema inteiro cabe em uma linha. | The whole system fits on one line. |
| `ke.title` | O kè: uma só unidade para quando e onde. | The kè: a single unit for when and where. |
| `geometry.title` / `trigTitle` | Uma nova era da geometria. / da trigonometria. | A new era of geometry. / of trigonometry. |
| `heritage.title` | Não é uma ideia nova. É uma ideia pronta. | Not a new idea. It's a ready (finished) idea. |
| `why.title` | Por que agora. | Why now. |
| `why.items[0–5].title` | O segundo está sendo redefinido · O problema sempre foram os segundos bissextos · Fusos horários são política, não física · O horário de verão perdeu o debate · Máquinas não precisam da base 60 · Rumo a 2035: os próximos padrões do mundo estão sendo escritos | The second is being redefined · The problem was always leap seconds · Time zones are politics, not physics · Daylight saving time lost the debate · Machines don't need base 60 · Towards 2035: the world's next standards are being written |
| `roadmap.title` | O caminho. | The path. |
| `build.title` | Aberto. Construa o seu. | Open. Build yours. |
| `join.title` | Saia na frente. Ajude a definir o padrão. | Get ahead. Help define the standard. |

## Key paragraphs

- **`hero.sub`:** A single clock for the whole planet, with a day marked by 10 gongs, 1,000 beats and 100,000 ticks. And a single unit, the kè, linking time and space: 100 kè close a circle and measure both when and where you are on Earth.
- **`time.lead`:** With Nu:Time, all places on Earth use the same time, at the same instant. Where you are no longer changes the time: it only changes where the sun is and when it rises and sets.
- **`time.points[1].text`:** The universal day turns over just once, at the same instant, for everyone. No more jumping days forward and back in the middle of the Pacific, and no more two Tuesdays in a row.
- **`ke.lead`:** A whole day has 100 kè. A whole circle has 100 kè. So the Earth's turn and the clock's turn are the same number, and time zones disappear.
- **`heritage.items[0].text`:** For more than two thousand years, Chinese astronomers divided the day into 100 kè, measured by water clocks: the same kè that is at the heart of Nu:Time. The night was divided into five watches, the gēng (更). The Nu:Time Standard · 刻时 Ke-Shi gives back to the gēng (更) and the kè (刻) the place that is theirs by right.
- **`why.lead`:** The measurement of time is being rebuilt from the atom, but the way of showing the hours hasn't changed since Babylon. The time has come.
- **`why.items[1].text`:** UTC fixes the day at 86,400 atomic seconds, so it has already had to insert 27 leap seconds since 1972 to keep up with the Earth, and by 2035 leap seconds will end, letting civil time drift away from the sun. Nu:Time aligns with the Earth's real turn, so it will never need another leap second. That's why we know the time has come.
- **`why.items[2].text`:** The world uses dozens of different time zones. China spans five time zones with a single clock. India, almost two. Spain is shifted a whole hour. Nu:Time separates two things: the time everyone shares and each place's sun.
- **`why.items[5].text`:** China is actively shaping international standards in emerging technologies, and the BeiDou Navigation Satellite System and the National Time Service Center of the Chinese Academy of Sciences are today important forces in how the world measures time. 刻时 Ke-Shi, rooted in ancient China's hundred-kè day, is offered as an open standard for that work, and for everyone.
- **`build.lead`:** The Nu:Time Standard · 刻时 Ke-Shi is an open standard. The specification and the reference implementations are free to use: anyone can use them, develop from them and launch products with them. The standard belongs to everyone, and the name Nu:Time · 刻时 Ke-Shi is synonymous with precision.
- **`build.cert`:** Anyone may develop according to the standard and say "Nu:Time compatible". Devices approved in the conformance tests may carry the Nu:Time Certified seal.
- **`join.lead`:** If you develop software, make hardware, do research, work with standards, produce content, are from the press or are just curious, tell us who you are and we'll call you in to take part.
- **Privacy ¶2–4 (summary of the literal back-translation):** Data is stored at our hosting providers (Vercel and, for the database, Upstash), which may process it in the United States or other countries; by submitting you consent to that transfer, including out of China if you are in mainland China. The clock asks the browser for your location only if you choose "Current location (automatic detection)" or "Use my location"; otherwise it asks our hosting provider for the approximate location derived from your connection; either way it is used only in your browser to place the sun and is not stored or sent to us. You can unsubscribe whenever you like from any email we send, and ask to see, correct or delete your data at privacy@nu-time.com. EU, UK and China residents have additional rights, which we respect, under the GDPR, UK GDPR and PIPL.

## Drift found

| Key | Drift | Status |
|---|---|---|
| `why.items[5].text` | "Participates actively in the definition of" was weaker than "is actively shaping"; *o seu BeiDou* could read as "your BeiDou". | **Fixed** (see review). |
| `time.points[1].text` | "Back and forth" had been lost ("jumping from one day to the other"). | **Fixed.** "In a row" is a light explicitation of "two Tuesdays", the same as es. |
| `time.lead` | The English repeated clause "it doesn't change the time" is omitted. | Intentional; no meaning lost. English source fix escalated. |
| `hero.sub` | "100 kè close a circle and measure…": the plural subject makes "100 kè" the thing that measures, where English lets "the kè" do it. | Negligible; the sense is the same. Left. |
| `why.items[2].text` | "Offsets" became *fusos* (time zones). | Plain-language equivalent for the general reader; left. |
| `geometry.lead` | "Radians are a mathematician's" became an elliptical past ("radians, the mathematicians' [choice]"). | Negligible; left. |
| `join.roles.creator` | "Creator / influencer" became "content creation" ("influencer" dropped). | Acceptable: the terms overlap in Brazil and *influenciador* is gendered. Left. |
| `heritage.lead` | "A planet that can agree" became "a whole planet capable of agreeing" (*inteiro* added). | Emphasis only; left. |

No remaining drift of medium or high severity. All numbers, dates (1793–1795, 1916, 1940, 1972, 2019, 2030, 2035), counts (27 leap seconds, five time zones, a billion people), licence names and brand tokens match the English.
