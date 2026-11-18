# Back-translation drift check — Russian (`locales/ru.json`)

Source: `locales/en.json`. Final headings and key paragraphs of `ru.json` (after the review fixes in `reviews/ru.md`) back-translated into literal English and compared with the source. Real drift found during review (the beat/bit clash, "By 2035", the softened China claim) was fixed first; see the review log. Acceptable localisation is not flagged: Russian number formats (1 000, 16,67, 3,456 МГц), ёлочки, lowercase «вы», Palladius forms (кэ, гэн), tg for tan, standard exonyms (Пекин, Мумбаи, Тайбэй), and role labels as fields of activity.

Units in the back-translation: гонг = gong, удар = beat (literally "stroke/beat", as in heartbeat), тик = tick, кэ = kè.

## Headings

| Key | Russian | Literal back-translation |
|---|---|---|
| `hero.title` / `footer.tagline` | время и место — по-новому. | time and place — in a new way. |
| `eliminates.heading` | Nu:Time отменяет. | Nu:Time abolishes. |
| `time.title` | Время по-новому. | Time in a new way. |
| `time.points[*].title` | Единое время · Без линии перемены дат · Ваше место под солнцем · Ваши часы — по-вашему | Unified time · Without the date line · Your place under the sun · Your watch — your way |
| `how.title` | Вся система умещается в одну строку. | The whole system fits in one line. |
| `ke.title` | Кэ: одна единица для «когда» и «где». | The kè: one unit for "when" and "where". |
| `geometry.title` / `trigTitle` | Новая эра в геометрии. / Новая эра в тригонометрии. | A new era in geometry. / A new era in trigonometry. |
| `heritage.title` | Идея не новая. Теперь она доведена до конца. | The idea is not new. Now it has been carried through to the end. |
| `why.title` | Почему сейчас. | Why now. |
| `why.items[*].title` | Секунду переопределяют · Проблема всегда была в високосных секундах · Часовые пояса — это политика, а не физика · Летнее время проиграло спор · Машинам не нужна шестидесятеричная система · На пути к 2035 году: пишутся новые мировые стандарты | The second is being redefined · The problem was always leap seconds · Time zones are politics, not physics · Summer time has lost the argument · Machines don't need the base-60 system · On the way to 2035: new world standards are being written |
| `roadmap.title` | Путь. | The path. |
| `build.title` | Открыто. Собирайте сами. | Open. Build it yourselves. |
| `join.title` | Будьте первыми. Помогите задать стандарт. | Be first. Help set the standard. |

## Key paragraphs

- **`hero.sub`**: "One clock for the whole planet, and the day is divided into 10 gongs, 1,000 beats and 100,000 ticks. And one unit that links time and space — the kè: 100 kè close a circle and answer two questions at once — when and where on Earth you are."
- **`eliminates.title` + `tail`**: "[Nu:Time abolishes] everything you never really understood anyway: 24 hours, AM and PM, 60 minutes, 60 seconds, time zones, the switch to summer time, leap seconds and the date-change line! — and keeps only what really matters: the current moment and the position of the Sun in the sky."
- **`time.lead`**: "With Nu:Time, at every moment the whole Earth has one and the same time. Where you are no longer determines what time it is — only where the Sun stands and when it rises and sets."
- **`how.lead`**: "Every unit is a power of ten. And every reading reads the same way: gong:beat:tick."
- **`how.cards[1–2].text`**: "One thousandth of the day: long enough to mean something, and short enough to schedule meetings." / "Close to the rhythm of a heart at rest. The last field of every Nu:Time reading."
- **`ke.lead`**: "A full day is 100 kè. A full circle is also 100 kè. The Earth's turn and the hand's turn are expressed by one and the same number — and time zones disappear."
- **`heritage.items[0].text`**: "For more than two thousand years Chinese astronomers divided the day into 100 kè and measured them with water clocks — this is the very kè that lies at the basis of Nu:Time. The night was divided into five watches — gēng (更). The Nu:Time Standard · 刻时 Ke-Shi returns the gēng (更) and the kè (刻) to their rightful place."
- **`heritage.items[1].text`**: "Revolutionary France divided the day into 10 hours of 100 minutes of 100 seconds — exactly like the gong, beat and tick in Nu:Time. The metre and the kilogram conquered the world, and decimal time was simply ahead of its time."
- **`why.items[1].text`**: "In UTC the day is rigidly equal to 86,400 atomic seconds, so since 1972 27 leap seconds have had to be inserted to keep up with the Earth. And by 2035 leap seconds will be given up, and civil time will begin to diverge from the Sun. Nu:Time follows the real rotation of the Earth, so it will never need another leap second. That is how we know: the time has come."
- **`why.items[2].text`**: "Dozens of different zone offsets are in use in the world. China stretches across five time zones — and lives by one clock. India — across almost two. Spain is shifted by a whole hour. Nu:Time separates the shared time and the local Sun."
- **`why.items[5].text`**: "China is actively shaping international standards in the field of new technologies, and its BeiDou satellite navigation system and the National Time Service Center of the Chinese Academy of Sciences have become an important force in how the world counts time. 刻时 Ke-Shi, rooted in the ancient Chinese day of a hundred kè, is offered as an open standard — for this work and for everyone."
- **`roadmap.items[2].text`**: "Pilot conversion of accumulated data about time and geodata to the Nu:Time Standard · 刻时 Ke-Shi with the help of AI."
- **`build.lead`**: "The Nu:Time · 刻时 Ke-Shi Standard is open. Anyone may freely use, develop and build the specification and reference implementations into their products: the standard belongs to everyone, and the name Nu:Time · 刻时 Ke-Shi is a mark of precision."
- **`build.license` (unit sentence)**: "The unit names — gong (gēng 更), kè (刻), beat and tick — are ordinary words, and anyone may use them."

## Remaining drift (all low, accepted)

| Key | English | Back-translation | Note | Severity |
|---|---|---|---|---|
| `hero.sub` | "measuring both when and where you are on Earth" | "answer two questions at once — when and where on Earth you are" | Rhetorical expansion; meaning unchanged. | low |
| `time.points[1].text` | "no more two Tuesdays" | "no more two Tuesdays in a row" | «подряд» makes the date-line effect explicit; accurate. | low |
| `time.lead` | "…it only changes where the sun is… it doesn't change the time." | "…only where the Sun stands…" | The English repeats "doesn't change the time"; said once in Russian. | low |
| `how.cards[2].text` | "Close to a resting heartbeat." | "Close to the rhythm of a heart at rest." | Reworded so «удар» (the beat unit) is not used for the heartbeat. Same claim. | low |
| `why.items[0].text` | "are on a roadmap to redefine the second around 2030" | "according to the metrologists' roadmap, the second will be redefined around 2030" | Framed by «по дорожной карте», so still a plan, not a certainty. | low |

## Overall verdict

After the review fixes, the Russian page back-translates closely to the English. No number, date, unit, brand name, trademark, licence or fixed token has changed. The claims keep the source's strength: the leap-second timeline, the EU vote, the Spain card, and a factual, non-endorsing China standards card. Time zones in China are presented as geography. The voice is plain, confident and in the «вы» form. The only drift left is stylistic and listed above; nothing blocks release.
