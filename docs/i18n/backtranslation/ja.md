# Back-translation drift check — Japanese (`locales/ja.json`)

Source: `locales/en.json`. This checks the final `ja.json`, after the review in `reviews/ja.md`. Every heading and key paragraph was back-translated into literal English and compared with the source.

Acceptable localisation is not listed:
- Japanese number style (10万ティック in prose, 1,000 / 100,000 on the cards and in the tables, 2000年以上, 〜 for ranges).
- Japanese punctuation.
- The katakana unit names ゴング・ビート・ティック and the Latin kè.
- Japanese exonyms.
- です・ます prose with plain or noun-ending headings.

**Terminology check.** The terms are consistent throughout:
- The kè is always `kè` (100 kè, 1 kè), with its reading given once (`hero.sub`: kè（ケー）).
- "universal" is always 世界共通.
- "open standard" is always オープン標準, and "the Standard" is always 標準 / 標準仕様.
- "Prime Meridian" is always 本初子午線, and "solar noon" is always 正中.
- 分 and 秒 appear only as the Chinese names on the cards, with pinyin, or as the ordinary SI words in `why.items[0]` and `roadmap.items[3]`.

**Fixed tokens.** Every number, date and unit matches the source: 10 / 100 / 1,000 / 100,000, 1793–1795, 1916, 1940, 1972, 27 leap seconds, 2019, around 2030, 2035, 86,400, the quartz table, and the geometry and trig tables. Nu:Time, 刻时 Ke-Shi, the emails, hrefs, keys and licence names are all unchanged.

## Headings

| Key | English | Japanese | Back-translation |
|---|---|---|---|
| `hero.title` | time and location reimagined. | 時間と場所を、描きなおす。 | Redrawing time and place. |
| `eliminates.heading` | Nu:Time eliminates. | Nu:Timeがなくすもの。 | What Nu:Time does away with. |
| `time.title` | Time reimagined. | 時間を、とらえなおす。 | Seeing time anew. |
| `how.title` | The whole system fits on one line. | しくみのすべてが、1行に収まる。 | The whole system fits in one line. |
| `ke.title` | The kè: one unit for when and where. | kè：「いつ」と「どこ」を、ひとつの単位で。 | Kè: "when" and "where", in one unit. |
| `geometry.title` / `trigTitle` | A new era of geometry. / of trigonometry. | 幾何学の新時代。/ 三角法の新時代。 | A new era for geometry. / for trigonometry. |
| `heritage.title` | Not a new idea. It's a finished one. | 新しい発想ではなく、完成形。 | Not a new idea, but the finished form. |
| `why.title` | Why now. | なぜ、いまなのか。 | Why, now? |
| `why.items[0..5].title` | The second is being redefined / Leap seconds were always the problem / Time zones are politics, not physics / Daylight saving has lost the argument / Machines don't need base 60 / Towards 2035: the world's next standards are being written | 秒の定義が変わろうとしている / うるう秒は、ずっと問題だった / タイムゾーンは物理ではなく政治 / サマータイムは、もう支持を失った / 機械に60進法はいらない / 2035年へ：世界の次の標準がつくられている | The definition of the second is about to change / Leap seconds were always the problem / Time zones: politics, not physics / Daylight saving has already lost support / Machines don't need base 60 / Towards 2035: the world's next standards are being made |
| `roadmap.title` | The path. | これからの道のり。 | The road ahead. |
| `build.title` | Open. Build one. | オープン。だから、つくろう。 | Open. So let's build one. |
| `join.title` | Be first. Help set the standard. | いち早く参加して、標準を一緒につくろう。 | Join early, and let's make the standard together. |

## Key paragraphs

- **`hero.sub`.** "One clock across the whole Earth. The day is marked in 10 gongs, 1,000 beats and 100,000 ticks. And there is one unit that links time and space: the kè (read *kē*). In 100 kè a circle goes round once, and 'when' and 'where' on Earth can be measured in the same unit." *Matches. The reading note is the only addition.*
- **`hero.dialHint` (¶2).** "Solar culmination, the moment the sun stands highest in the sky, is always at the top of the dial, wherever you are on Earth. As the sun moves across the sky, three hands show time passing: the red hand turns once a day, the blue hand once every gong, and the gold hand once every beat, marking the passing ticks." *Matches. "The moment the sun stands highest" defines "solar noon" in plain words.*
- **`time.lead`.** "With Nu:Time, everywhere on Earth uses the same time at the same instant. The time no longer changes with where you are. All that changes with place is the sun's position and when sunrise and sunset come." *Matches.*
- **`ke.lead`.** "A day is 100 kè. A full circle is also 100 kè. So the Earth's rotation and one turn of the clock hand can be written with the same number. And time zones disappear." *Matches.*
- **`heritage.items[0].text`.** "For more than 2,000 years, Chinese astronomers divided the day into 100 kè and measured time with water clocks. The kè at the heart of Nu:Time is exactly this 刻. Night was divided into five 'gēng'. The Nu:Time Standard · 刻时 Ke-Shi returns the gēng and the kè to where they belong." *Matches. The claim is in the past tense, the same strength as the English.*
- **`why.items[1].text`.** "Because UTC fixes the day at 86,400 atomic seconds, it has inserted 27 leap seconds since 1972 to keep up with the Earth's rotation. By 2035 leap seconds will be abolished, and civil time will slowly drift away from the sun. Nu:Time follows the Earth's actual rotation, so it will never need a leap second again. That is why we can say the time is now." *Matches.*
- **`why.items[2].text`.** "Dozens of different offsets are in use around the world. China runs territory spanning five time zones on one time. India spans nearly two. Spain is off by a full hour. Nu:Time separates the time we all share from the local sun." *Matches. Neutral geography, no judgement.*
- **`why.items[5].text`.** "China is actively involved in shaping international standards in emerging technology. The BeiDou satellite positioning system and the National Time Service Center of the Chinese Academy of Sciences are now important players in keeping the world's time. Rooted in ancient China's hundred-kè system, 刻时 Ke-Shi is offered as an open standard for that work, and for everyone." *Matches. Offered to the work, with no endorsement implied.*
- **`build.lead`.** "The Nu:Time Standard · 刻时 Ke-Shi is an open standard. Anyone may use, build on and ship the specification and reference implementations for free. The standard belongs to everyone, and what the name 'Nu:Time · 刻时 Ke-Shi' stands for is precision." *Matches.*
- **`build.cert`.** "Anyone may make products that follow this standard and call them 'Nu:Time compatible'. Devices that pass the conformance tests may carry the 'Nu:Time Certified' mark." *Matches.*

## Drift found and fixed in this pass

| Key | Drift (before) | Fix | Severity |
|---|---|---|---|
| `how.cards[1].unit`, `how.cards[2].unit` | ビート · 分 / ティック · 秒 back-translates as "beats · minutes" / "ticks · seconds" | Pinyin added: 分 fēn, 秒 miǎo | medium |
| `hero.noon`, `hero.dialHint` | 南中 = "due-south transit", wrong for southern-hemisphere cities | 正中 (meridian transit), defined in plain words | medium |
| kè throughout | ケー back-translates as "K" (100ケー ≈ "100K") | Latin kè | medium |
| `build.title` | "Open. So you can build." (an invitation weakened to a possibility) | "Open. So let's build one." | low |
| `build.lead` | "…the name is **proof** of precision" (stronger than "stands for", in a trademark sentence) | "…what the name stands for is precision" | low |
| `why.items[5].text` | "actively **involved in** making standards" (weaker than "shaping") | 国際標準の形成に積極的に関わっており ("involved in shaping") | low |

## Remaining drift, accepted

| Key | English | Back-translation | Note | Severity |
|---|---|---|---|---|
| `why.items[3].title` | Daylight saving has lost the argument | Daylight saving has already lost support | "Lost the argument" has no natural Japanese equivalent (議論に負けた sounds odd). 支持を失った keeps the verdict. | low |
| `heritage.lead` | Nu:Time borrows their wisdom | Nu:Time inherits their wisdom | 受け継ぐ is the natural collocation with 知恵. It is marginally warmer, with no added claim. | low |
| `join.title` | Be first. Help set the standard. | Join early, and let's make the standard together. | Two imperatives merged into one natural Japanese call to action. Same intent. | low |

No high-severity drift remains. No number, date, unit, brand or licence is changed.
