# zh review — fresh-eyes native editor pass

Scope: `locales/zh.json` against `locales/en.json` and `docs/i18n/BRIEF.md`. Translator notes not read. `python3 -I tests/check_locales.py zh` → `zh: ok`.

Overall: the translation is strong — natural 科普 register, correct historical terms (百刻制, 漏刻, 五更), neutral Beijing Time framing, respectful standards card. Changes below are mostly precision fixes (分/秒 ambiguity, one unintended "date" reading), the newly translatable labels, and removing one added fact.

## Changes (28)

| Key | Before | After | Why |
|---|---|---|---|
| `hero.sub` | 既能量出你在何时，也能量出你在地球上的何处 | 既能度量你身处何时，也能度量你在地球上的何处 | "量出你在何时" is awkward; 度量 matches the meta description and reads cleaner. |
| `hero.noon` | 正午 | 太阳正午 | English is "Solar noon"; plain 正午 drops "solar", which matters on a clock showing universal time. |
| `hero.dialHint` | 正午永远在表盘正上方 … 蓝针每一更转一圈，金针每一分转一圈，扫过流逝的每一秒 | 太阳正午永远在表盘正上方 … 蓝针每更转一圈，金针每个刻时分转一圈，扫过流逝的每一个刻时秒 | "Solar noon" restored. "金针每一分转一圈，扫过每一秒" reads exactly like an ordinary second hand (one turn per minute, every second); 刻时分/刻时秒 removes the SI confusion, as the brief allows. |
| `time.points[0].text` | 会议、航班、市场，统统同一个时间。 | 会议、航班、市场，全都按同一个时间运转。 | Verbless fragment with colloquial 统统; now a complete, natural sentence. |
| `time.points[2].title` | 你在阳光下的位置 | 你头顶的太阳 | Literal rendering of the idiom "place in the sun" is translationese; new title is concise and matches the card's content. |
| `time.points[2].text` | 但时间始终是同一个统一时间，任何时候都一样 | 但大家用的始终是同一个统一时间，时时如此 | "时间…是同一个统一时间" was redundant and stiff. |
| `time.points[3].text` | 以及太阳此刻正在哪里的头顶 | 以及此刻太阳直射在哪里 | Original was ungrammatical; 直射 is the precise, familiar science term for "where the sun is overhead". |
| `how.lead` | 更:分:秒（gong:beat:tick） | 更:分:秒 | Brief: unit patterns in prose use local names; the English gloss is unnecessary on the zh page. |
| `how.cards[1].n` | 1,000 | 1000 | Chinese convention: four-digit numbers are written without a separator (matches prose 1000 分). |
| `how.cards[2].n` | 100,000 | 10 万 | Chinese convention (matches meta/hero prose "10 万秒"); see human-decision item 1. |
| `how.cards[1].text` | 够长，有实际意义；够短，约个会正合适。 | 够长，派得上用场；够短，用来定会议时间刚刚好。 | "约个会" reads as "go on a date" — unintended and cheeky. Now clearly about meetings. |
| `ke.facts[0].n` | 1 kè | 1 刻 | `n` labels are now translatable. |
| `ke.facts[1].n` | 1 kè | 1 刻 | Same. |
| `ke.facts[2].n` | Longitude | 经度 | Same. |
| `ke.facts[2].text` | 经度：本初子午线以东或以西 0–50 刻 | 本初子午线以东或以西 0–50 刻 | Removed workaround prefix now that the label is Chinese. |
| `ke.facts[3].n` | Latitude | 纬度 | `n` labels are now translatable. |
| `ke.facts[3].text` | 纬度：赤道以北或以南 0–25 刻 | 赤道以北或以南 0–25 刻 | Removed workaround prefix. |
| `geometry.lead` | 几何也因此变得一目了然 | 几何也因此变得直观 | English says "intuitive"; 一目了然 ("obvious at a glance") overstates. |
| `heritage.items[0].title` | 百刻制（刻） | 百刻制 | Parenthetical 刻 is redundant inside 百刻制; shorter for a large heading. |
| `heritage.items[0].text` | 两千多年来，… ——这正是刻时 Nu:Time 核心的那个“刻”。 | 在两千多年的时间里，… ——刻时 Nu:Time 的核心，正是这个“刻”。 | 两千多年来 means "for 2,000+ years up to now", but the system ended in the 17th c. (era label); 在两千多年的时间里 keeps the claim exactly as strong as English. Also smoother second clause. |
| `why.items[0].text` | 门面当然也可以换 | 门面也可以跟着换 | English "can be too" — 当然 ("of course") added emphasis. |
| `why.items[2].text` | 大家共用一个时间，各地照样看得清自己的太阳 | 大家共用同一个时间，各地也照样清楚自己的太阳在哪儿 | "看得清自己的太阳" (see one's sun clearly) is odd imagery; meaning and neutral framing unchanged. |
| `why.items[3].title` | 夏令时，早已站不住脚 | 夏令时，已经站不住脚 | 早已 ("long since") overstates "has lost the argument". |
| `why.items[5].text` | 北斗系统和位于西安的国家授时中心 | 北斗系统和国家授时中心 | "位于西安" is an added fact not in the English; removed (accurate, but unnecessary). |
| `build.items[1].text` | 即插即用换算 | 开箱即用换算 | 即插即用 is "plug-and-play" (hardware); 开箱即用 is the standard term for drop-in software. |
| `build.quartz[0][2]` | 刻时 Nu:Time 专属晶振 | 刻时 Nu:Time 首选晶振 | 专属 implies an exclusive/proprietary part; English just says "the Nu:Time crystal". |
| `build.colCycles` | 周期数 / 秒 | 周期数 / 刻时秒 | "周期数 / 秒" reads as "cycles per (SI) second", i.e. Hz — a real misreading in a frequency table. |
| `join.err` | 提交没有成功。 | 提交失败。 | Standard, concise UI error wording. |

## Reviewed and left as is (notable)

- `why.items[2]` Beijing Time framing (幅员辽阔 … 地理上横跨约五个时区，全国统一使用北京时间) and title 时区是人为约定，不是自然规律 (softened from "politics, not physics") — neutral and appropriate.
- `why.items[5]` 献给这项事业 — offered *to* the work, no implied endorsement. Good.
- `heritage.items[2].title` 时钟与太阳错位的国家 — softer than "wrong time zone", factual, not mocking. Good.
- `how.cards[*].unit` pinyin (更 · gēng etc.) — useful because 更 is polyphonic (gēng/gèng).
- `build.items[2].text` 每过一刻轻震一次 — 一刻 also evokes the everyday 15-minute 一刻钟; 1 kè = 14.4 min, so the overlap is harmless and even helpful.
- `cities.Santiago` 圣地亚哥 — standard for Santiago de Chile.

## Needs a human decision

1. **Card numbers (`how.cards`)**: I used `1000` and `10 万` (most natural Chinese, matches prose). If the design wants all four cards to be pure digits, use `100000` or the GB/T 15835 thin-space form `100 000` instead. Company/design call.
2. **eliminates.heading 刻时 Nu:Time，一笔勾销。** — punchy and acceptable, but 一笔勾销 normally takes an object ("把…一笔勾销") and carries a "write off debts/grudges" flavour. Alternatives: 刻时 Nu:Time，统统告别。 A native marketing reviewer may prefer one.
3. **eliminates.title 那些你本来就没真正搞懂的东西** — mirrors the cheeky English faithfully; some mainland readers may find "you never understood" slightly condescending. Keep unless the company wants a softer tone (e.g. 那些一直让人头疼的东西).
4. **why.items[5]** — the standards card names Chinese policy and state institutions (北斗, 国家授时中心). Wording is factual and respectful, but a company/legal check that no endorsement is implied is advisable before launch; also confirm whether to use the full name 中国科学院国家授时中心.
5. **Brand density** — the checker requires `Nu:Time` wherever English has it, so 刻时 Nu:Time appears many times per section. Brief asks to pair only at first mention per section; relaxing the checker for zh would allow 刻时 alone on later mentions and read more naturally.

# Second pass — audience & sensitivity

Lens: how the page lands with mainland readers, creators (Bilibili, Zhihu, Xiaohongshu, WeChat, Weibo) and moderators/officials reading a foreign tech brand. Not grammar. `python3 -I tests/check_locales.py zh` → `zh: ok`. `brandLocal` unchanged (刻时).

**Brand rule applied (刻时 Nu:Time vs 刻时):** pair at the first mention in each section and in each card group or table; 刻时 alone after that within the same unit. Pairing deliberately kept for: `meta.*` (shown alone in search/share cards), mark and claim names (刻时 Nu:Time 认证, “兼容刻时 Nu:Time”, the name sentence in `build.lead`), the clock panel heading `hero.inAction`, and the standalone success toast `join.ok`. 刻时 alone was only used where the clock/standard context rules out the 课时 / 刻蚀 readings.

## Changes (26)

| Key | Before | After | Why |
|---|---|---|---|
| `hero.title` | 时间与位置，重新定义。 | 时间与位置，重新想象。 | “重新定义 X” is the stock launch-event cliché that Chinese tech audiences openly mock (“又重新定义了”), and used 5 times it reads as hype. On a page about time it can also read as a foreign company claiming to *define* time, which in China is the job of the national time service. 重新想象 is closer to “reimagined”, and it invites rather than claims authority. |
| `footer.tagline` | 时间与位置，重新定义。 | 时间与位置，重新想象。 | Same line as the hero. |
| `meta.title` | 刻时 Nu:Time™——时间与位置，重新定义 | 刻时 Nu:Time™——时间与位置，重新想象 | Same. This is the share-card/search title. |
| `time.title` | 时间，重新定义。 | 重新认识时间。 | Same cliché issue. 重新认识 (“get to know time again”) is the natural 科普 framing and avoids a third copy of the hero line. |
| `nav.time` | 重新定义时间 | 重新认识时间 | Matches the section title. |
| `eliminates.heading` | 刻时 Nu:Time，一笔勾销。 | 刻时 Nu:Time，给时间做减法。 | 一笔勾销 needs an object and has a “write off a debt or grudge” flavour. 做减法 (“simplify, subtract the clutter”) is a familiar, positive everyday phrase. It works as a big screenshot line and sets up the next two lines (减掉… / 只留下…). |
| `eliminates.title` | 那些你本来就没真正搞懂的东西：… | 减掉那些总把人绕晕的东西：… | “Things *you* never understood” about 24-hour time and 60 minutes reads as condescending to a Chinese reader, and it is the line most likely to be quoted back mockingly. Now the confusing things get the blame, not the reader. The playful tone stays (绕晕), and it flows from the 做减法 heading. |
| `geometry.title` | 几何，迎来新纪元。 | 几何，换个刻度。 | 新纪元 is grand. Zhihu math readers will point out that a 100-part circle is a unit change (cf. gradians), not a new era. 换个刻度 (“a new scale”) is modest and accurate, puns on 刻, and is very quotable. |
| `geometry.trigTitle` | 三角学，也迎来新纪元。 | 三角学，也换个刻度。 | Matches the geometry heading. |
| `heritage.title` | 不是新想法，是集大成。 | 不是新想法，是完成版。 | 集大成 claims to be the culmination of the masters. From a foreign brand on the 百刻制 card group, culture readers may see it as boastful (“口气不小”). 完成版 mirrors “a finished one” exactly, is lighter and shorter, and reads well at display size. |
| `heritage.lead` | …：一个能就“此刻”达成共识的地球。 | …：全世界对“此刻”的共识。 | 能就…达成共识的地球 was translationese. The new line is shorter, natural and keeps the same claim. |
| `heritage.items[0].text` | …刻时标准让“更”与“刻”重回它们应有的位置。 | …刻时标准让“更”与“刻”重归其位。 | 重归其位 is the idiomatic way to say it. It conveys respect and pride without the stiff 它们 or any added claim. |
| `heritage.items[1].text` | 与刻时 Nu:Time 的更、分、秒 | 与刻时的更、分、秒 | Brand rhythm (paired in the lead and the China card). |
| `why.items[5].title` | 2035：世界的下一代标准正在改写 | 迈向 2035：新一轮国际标准正在成形 | Next to “China” and “2035”, “the world's standards are being rewritten” echoes the Western “China wants to rewrite global standards” framing, which is loaded both ways. 正在成形 is factual and forward-looking, and it reads as an invitation, not a pitch. It also fixes the tense clash between 2035 and 正在. |
| `why.items[5].text` | 中国已提出要在…国际标准中发挥引领作用；北斗系统和国家授时中心，如今都是全球计时体系的重要支柱。刻时 Ke-Shi 植根于中国自己的百刻制，作为一项开放标准，献给这项事业，也献给每一个人。 | 中国正积极参与并推动新兴技术领域的国际标准制定；北斗卫星导航系统和中国科学院国家授时中心，如今都是全球时间体系中的重要力量。刻时植根于中国古代的百刻制。作为一项开放标准，它愿为这项工作提供一份参考，也属于每一个人。 | (1) A foreign company should not paraphrase Chinese policy as “to lead”. 积极参与并推动…国际标准制定 is how China describes its own standardisation goals. (2) Full official names on first mention: 北斗卫星导航系统 and 中国科学院国家授时中心. Chinese media use them when naming a state institution, and they show respect and precision. (3) 重要支柱 → 重要力量: still positive, but Zhihu experts cannot pick it apart (UTC is computed by the BIPM from many labs). (4) 中国自己的 sounds like an outsider talking down; 中国古代的 is factual and something to be proud of. (5) 献给这项事业 is emotive (献给…事业 echoes patriotic dedication language) and could imply a role in a national programme. 愿为这项工作提供一份参考 makes the standard clearly *offered to* the work and implies no partnership or endorsement. (6) Ke-Shi dropped: per the glossary, Ke-Shi = 刻时 in zh, and Latin pinyin is noise for Chinese readers. |
| `hero.ctaJoin` | 参与首发 | 抢先加入 | 首发 is retail language (首发抢购 / 首发价) and suggests a product pre-sale. 抢先加入 matches the join section and a free sign-up. |
| `join.title` | 抢先加入，一起制定标准。 | 抢先加入，共建标准。 | 制定标准 is the formal language of standards bodies, so inviting the public to “制定标准” overstates the standard's status. 共建 is the normal open-source word (共建开源生态). It is collaborative and shorter. |
| `hero.clockLabel` | 此刻 · 统一刻时 Nu:Time | 此刻 · 统一刻时 | Brand rhythm (paired in the eyebrow and clock heading). 统一刻时 is the glossary term for “universal Nu:Time”, and with the live digits beside it, the 课时 reading cannot arise. |
| `hero.dialHint` | 刻时 Nu:Time 对地球上的每个人… | 刻时对地球上的每个人… | Brand rhythm (it sits directly under the paired heading 刻时 Nu:Time 实时演示). |
| `hero.dayBar` | 你所在地的今天（统一刻时 Nu:Time） | 你所在地的今天（统一刻时） | Brand rhythm. A lighter label. |
| `how.cards[2].text` | 每个刻时 Nu:Time 读数的最后一段。 | 每个刻时读数的最后一段。 | Brand rhythm (paired in `how.cards[0]`). |
| `why.items[2].text` | 刻时 Nu:Time 把共同的时间… | 刻时把共同的时间… | Brand rhythm (paired in `why.items[1]`). The Beijing Time wording (幅员辽阔 … 全国统一使用北京时间) is the standard official phrasing and was deliberately left untouched. |
| `why.items[3].text` | 刻时 Nu:Time 压根没有夏令时 | 刻时压根没有夏令时 | Brand rhythm. |
| `roadmap.items[2].text` | 转换为刻时 Nu:Time 标准。 | 转换为刻时标准。 | Brand rhythm (paired in `roadmap.items[0]`). |
| `build.quartz[0][2]` | 刻时 Nu:Time 首选晶振 | 刻时首选晶振 | Brand rhythm (paired in the table title). |
| `join.consent` | 通过邮件接收刻时 Nu:Time 发布动态 | 通过邮件接收刻时发布动态 | Brand rhythm (paired in `join.message` just above). |

## Reviewed and deliberately left as is

- `why.items[2]`: Beijing Time line (中国幅员辽阔，地理上横跨约五个时区，全国统一使用北京时间). It is pure geography in official phrasing, with no criticism and no suggestion of change. The card ends on the complement frame (大家共用同一个时间，各地也照样清楚自己的太阳在哪儿). The title 时区是人为约定，不是自然规律 is neutral.
- `heritage.items[0]` China card: 百刻制 / 漏刻 / 五更 are correct, and the claims are no stronger than the English. It is the lead card on the zh page and should make readers proud without overreaching.
- `hero.inAction` 刻时 Nu:Time 实时演示: pairing kept because it heads the clock panel, the part most likely to be screenshotted alone. 刻时实时 without the Latin brand would also stack two 时 sounds.
- Cities 台北 / 香港 are plain city names. The country suffix is handled in `clock.js` (中国台湾 / 中国香港). Macau falls back to the browser's zh name (中国澳门特别行政区), which is acceptable.

## Decisions for the company

1. **Standards card (`why.items[5]`) needs a legal/PR sign-off before the zh launch.** It names 北斗 and 中国科学院国家授时中心, a CAS institute. The zh copy now uses full official names, describes China's goals in China's own wording, and offers the standard *to* the work with no implied endorsement. Do not add logos, “合作”, “支持” or the name of a national programme (e.g. 中国标准2035 / 《国家标准化发展纲要》) anywhere on the zh page or in zh social posts unless there is a real relationship. Note that the zh copy is now deliberately softer than the English “China has set out to lead…”. Consider aligning the English too, since Chinese readers will also see the English page.
2. **“Rewrite the world's standards” framing in English.** The English title for `why.items[5]` reads geopolitically. The zh page now says “taking shape”. Decide whether all locales should follow.
3. **Geospatial data (`roadmap.items[2]`, Nu:Lat/Nu:Long).** Under the PRC Surveying and Mapping Law and its map-review rules, foreign organisations face restrictions on surveying and on processing geographic data, and China uses its own coordinate conventions. The roadmap line (“convert legacy geospatial data”) is generic and was kept faithful. Before any China-facing pilot or partnership, get local legal advice and avoid any suggestion that Chinese geodata will be converted or hosted abroad.
4. **Trademark 刻时 in China.** The page asserts 刻时™ as a Nu-Time Inc. trademark. Confirm a CNIPA filing (classes 9, 14, 42 at least) before mainland promotion. 刻时 is two ordinary words, so expect squatting or descriptiveness objections.
5. **“Decimal time is native to computation” (`why.items[4]`).** Zhihu and Bilibili engineers will reply “计算机的母语是二进制”. It was kept faithful to the English. If the company wants to avoid that pile-on, soften it in all languages (e.g. “decimal is native to how people read machine output”).
6. **Hero line choice.** I chose 时间与位置，重新想象。 A bolder, more playful option for social graphics is 时间与位置，换个算法。 (“a new way to count”). Marketing may want to A/B test it on Xiaohongshu/Weibo, but keep the site line as is.
7. **Brand rule.** Pairing is now per section and per card group, with exceptions for meta, mark names and the clock panel heading. If brand guidelines prefer always-paired in social or share contexts, state that in the brand guidelines page.
