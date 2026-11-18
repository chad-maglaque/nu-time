# Russian (ru) review

Independent fresh-eyes review of `locales/ru.json` and `docs/i18n/privacy/ru.md` against `locales/en.json` and `docs/PRIVACY.md`, with `BRIEF.md`, `DECISIONS.md` and the translator's notes read critically. 15 strings changed in `ru.json`; the privacy page needed no change; `notes/ru.md` was edited only for the unit-name decision. `python3 -I tests/check_locales.py ru` prints `ru: ok`.

Overall the draft is strong: plain modern Russian, consistent lowercase «вы», correct Russian typography (ёлочки, U+00A0 before dashes and units, U+202F thousands, decimal comma, МГц/кГц, 1793–1795), correct Palladius forms (кэ, гэн), standard city exonyms, and fixed tokens intact. The one real problem was the unit name «бит».

## Unit-name decisions

| English | Russian | Decision |
|---|---|---|
| gong | **гонг** (m.), 10 гонгов | Kept. Existing Russian word; declines normally. |
| kè | **кэ** (n., indeclinable), 100 кэ, «каждое кэ» | Kept. Palladius transcription of 刻; behaves like кафе. |
| gēng 更 | **гэн (更)** | Kept. Palladius for *gēng*; «пять страж — гэн (更)» is correct history. |
| beat | **удар** (m.), 1 000 ударов | **Changed from «бит».** See below. |
| tick | **тик** (m.), 100 000 тиков | Kept. |
| universal Nu:Time | **единое время Nu:Time** | Kept. «Всемирное время» is the Russian name of UT; «единое» has no such load. |

**Why «удар».** The page is written first for Russian tech, science and engineering readers, and for them «бит» is the information *bit*, identical in spelling, gender and declension (both «8 бит» and «8 битов» are normal for data bits, so the translator's declension argument does not hold). The first numbers a reader sees, «10 гонгов, 1 000 битов и 100 000 тиков», next to cards about machines and computing, invite exactly the wrong reading. «такт» is worse: it is the CPU/quartz clock cycle, which is precisely what the quartz table counts. «удар» is the everyday Russian for "beat as in heartbeat" (удар сердца, 60 ударов в минуту) and for clock strikes (удары курантов); it pairs naturally with the struck гонг and has no technical collision. The only clash, the tick card's «один удар сердца», is removed by rephrasing that card. The previous justification in the notes (a precedent from another time system) was removed at the owner's instruction and played no part in this decision.

## Changes

| Key | Before | After | Why | Severity |
|---|---|---|---|---|
| `units.beat` | бит | удар | Unit-name decision above. «бит» reads as the data bit to the primary audience. | medium |
| `units.beats` | биты | удары | Same. | medium |
| `meta.description` | …1 000 битов… одна-единственная единица — кэ, — … | …1 000 ударов… всего одна единица — кэ, — … | Unit name. «одна-единственная единица» is a jingle (единственная/единица) and more emphatic than "a single unit". | medium |
| `hero.sub` | 1 000 битов | 1 000 ударов | Unit name. | medium |
| `hero.dialHint` | …один оборот за бит… | …один оборот за удар… | Unit name. | medium |
| `how.lead` | гонг:бит:тик | гонг:удар:тик | Unit name in the prose pattern. | medium |
| `how.cards[1].unit` | битов · 分 | ударов · 分 | Unit name (genitive plural after 1 000). | medium |
| `heritage.items[1].text` | …гонг, бит и тик… | …гонг, удар и тик… | Unit name. | medium |
| `build.license` | …кэ (刻), бит и тик — обычные слова… | …кэ (刻), удар и тик — обычные слова… | Unit name; "ordinary words" is now literally true. | medium |
| `how.cards[2].text` | Примерно один удар сердца в покое. | Близко к ритму сердца в покое. | With the beat called «удар», "a tick is about one удар сердца" would confuse the two units. The new line keeps "close to a resting heartbeat". | low |
| `how.cards[1].text` | …достаточно долго, чтобы что-то значить, и достаточно коротко… | …достаточно долгая, чтобы что-то значить, и достаточно короткая… | «долго/коротко» describe processes; the subject is «часть» (a length of time), so the adjectives must agree with it. | low |
| `time.lead` | С Nu:Time в любой точке Земли в один и тот же момент одно и то же время. | С Nu:Time в каждый момент на всей Земле одно и то же время. | Stacked adverbials («в любой точке… в один и тот же момент одно и то же») read as translated. Same meaning, half the clutter. | low |
| `why.items[5].title` | К 2035 году: пишутся новые мировые стандарты | На пути к 2035 году: пишутся новые мировые стандарты | «К 2035 году:» means "By 2035", the very drift DECISIONS A1 fixed in English. "Towards" = «На пути к». | low |
| `why.items[5].text` | Китай активно участвует в формировании международных стандартов в новых технологиях… National Time Service Center Китайской академии наук стали важной силой в мировой службе времени. | Китай активно формирует международные стандарты в сфере новых технологий… Национальный центр службы времени Китайской академии наук стали важной силой в том, как мир отсчитывает время. | (1) "is actively shaping" was softened to "takes part in shaping"; restored to the English strength, still factual and without "leads". (2) The owner now allows translated proper names where established: «Национальный центр службы времени» is the form Russian tech press uses (e.g. 3dnews, Oct 2025) and «служба времени» is the native metrology term; a bare English name in Cyrillic text looked foreign. (3) Rephrased the end to avoid «службы времени… в мировой службе времени». | low |
| `roadmap.items[2].text` | Пилотный перевод накопленных временны́х и геопространственных данных… | Пилотный перевод накопленных данных о времени и геоданных… | The combining stress mark risks bad rendering and looks odd on a web page. «данных о времени» removes the временных = "temporary" ambiguity without a diacritic; «геоданные» is the everyday Russian for geospatial data. | low |

## Checked and kept

- **Tagline** «время и место — по-новому» (hero, footer; meta title without the dash because it already follows one): concise, echoes *Nu*, not hype. Kept.
- **«Nu:Time отменяет.»** + accusative list «всё, в чём вы и так никогда не разбирались: 24 часа, AM и PM, …»: grammatical as heading → run-on, bold without being rude. AM/PM works even better for Russian readers, who don't use it. Kept.
- **Register**: lowercase «вы» throughout; headings use imperatives or no address. Correct for a launch page to engineers, press and standards people.
- **tg** in the trig header: standard Russian school and university notation; sin/cos unchanged. Kept.
- **Political neutrality**: «Китай раскинулся на пять часовых поясов — и живёт по одним часам» is geography, not criticism; the standards card offers 刻时 Ke-Shi «для этой работы и для всех» and implies no endorsement. «Бэйдоу» in ёлочки is the standard Russian form.
- **Cities**: Пекин, Мумбаи, Эр-Рияд, Тайбэй, Сан-Паулу, Ушуая, Мехико, Вашингтон (the clock appends the country) are the standard exonyms.
- **Numbers and fixed tokens**: all digits, table values, readout times, emails, hrefs, keys and licence names match; MHz → МГц is a unit symbol, not a value.
- **Privacy page**: accurate and complete; «Ответственный за обработку данных» for Controller is a sound choice (avoids 152-ФЗ «оператор», which the English does not invoke); ISO date matches the other locales. No change.

## Escalations

1. **Unit name «удар» (owner).** This departs from the brief's suggested «бит» and from the other European locales, which keep "beat". Recommended for the reasons above; if the owner prefers «бит» for cross-locale consistency, revert `units.beat/beats` and the seven strings that use it, and restore «один удар сердца» in the tick card.
2. **«Национальный центр службы времени» (owner).** Supersedes DECISIONS #15 for Russian under the new proper-name allowance. Confirm, or revert to the English name. The translator's notes bullet still says "kept in English"; it was not edited because notes changes were limited to the unit name.
3. **Stale notes bullet (info).** `notes/ru.md` still describes «временны́х» with a stress mark; the roadmap line now reads «данных о времени и геоданных» without one.
4. **«совместимые с Nu:Time» (legal, already in notes).** The descriptive compatibility claim is localised; the Nu:Time Certified mark stays in English.
