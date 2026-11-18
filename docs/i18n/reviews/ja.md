# ja review — fresh-eyes native editor pass

Scope: `locales/ja.json` and `docs/i18n/privacy/ja.md` against `locales/en.json` and `docs/PRIVACY.md`, with `BRIEF.md`, `DECISIONS.md`, the translator's notes (`notes/ja.md`, read critically) and `locales/zh.json` for the shared characters. `python3 -I tests/check_locales.py ja` → `ja: ok`.

Overall: a strong translation. The prose is natural です・ます, and the headings are short and display well (時間と場所を、描きなおす。 / なぜ、いまなのか。 / 新しい発想ではなく、完成形。). The katakana ゴング・ビート・ティック system is the right call, and the China, time-zone and Spain cards are neutral and factual. All numbers, dates, licences, emails, hrefs, keys and readout patterns are intact. The main change is the kè. Most of the other changes are precision fixes.

## Decisions

**1. Unit names: ゴング・kè・ビート・ティック (kè changed from ケー; the other three kept).**

- ゴング・ビート・ティック stay in katakana. The translator's reasoning holds. 分/秒 would read as SI minutes and seconds, and Japanese has no equivalent of the Chinese qualifier 刻时分. 更 is archaic. Katakana is how Japanese tech readers meet new units, and it means 秒 in `why.items[0]` and `roadmap.items[3]` can only mean the SI second, which is a real gain.
- ケー is not acceptable for the kè. ケー *is* the letter K in Japanese. Spoken or written, 100ケー is "100K", which in Japanese tech slang (ひゃっケー) means 100,000. The same page says 1日は10万ティック, so a creator reading 100ケー aloud next to 100,000 ticks invites exactly that confusion. 1ケー and 16.67ケー also read like model numbers.
- Alternatives considered:
  - **コク.** The Japanese reading of 刻, but it means "richness of flavour" (コクのある), and it still points to the Edo 刻.
  - **カー.** Wrong vowel, and it reads as "car".
  - **ケイ.** Also the letter K.
  - **刻 (kanji).** The Japanese 刻 is ambiguous: about 2 hours in the Edo 一刻 / 丑の刻 usage, 30 minutes in the ancient Japanese 漏刻 system, and "a moment" in 一刻を争う. It would mix kanji into a katakana system, and the card would become 刻 · 刻.
- **Latin kè** wins. Japanese readers handle Latin unit symbols every day (km, Hz, MHz). It is the form the English, the European languages and the Hindi/Urdu pages use (DECISIONS #11, for the same reason: a collision in the local script). It also echoes the Ke in 刻时 Ke-Shi, which sits beside it on the page. The reading is given once, where the unit is introduced (`hero.sub`: 「kè（ケー）」). In writing, number + kè follows the English and SI style with a space: 100 kè, 16.67 kè. Applied everywhere: `units.ke/kes`, nav, cards, the kè section, both tables, the converter label, the trig text, the heritage card, build, and the licence line. The readout labels show only ゴング/ビート/ティック and are unchanged.

**2. Unit cards: 分 / 秒 get their pinyin.** Under the big numbers, ビート · 分 and ティック · 秒 read in Japanese as "beats = minutes" and "ticks = seconds". The English shows bare characters, but an English reader cannot misread 分 as "minute"; a Japanese reader cannot avoid it. The cards now read ゴング · 更 gēng / ビート · 分 fēn / ティック · 秒 miǎo / kè · 刻. The pinyin marks the characters as Chinese names, not Japanese units. This is the same format as the Chinese page (分 · fēn) and the licence line (更 gēng). The characters are kept, so nothing is dropped from the source.

**3. 刻时 Ke-Shi.** Kept exactly, with the simplified 时 (a fixed token). No gloss is added. Ke-Shi always stands beside it, and the China heritage card explains 刻, so a gloss would be added content without a clear need. A Japanese reader may notice 时 ≠ 時; see escalation 2.

**4. Solar noon: 正中時刻.** 南中 literally means "due south". For half the cities in the picker (Sydney, Cape Town, Johannesburg, São Paulo, Rio, Santiago, Ushuaia, and Jakarta just south of the equator), the sun culminates in the north, and this page's science-creator audience would notice. 正中 (meridian transit) is correct in both hemispheres. 正中 is less familiar than the school term 南中, so `hero.dialHint` defines it in passing: 太陽が空でいちばん高くなる正中時刻. That is what "solar noon" means, not an added fact.

**5. National Time Service Center → 中国科学院国家授時中心.** Kept. The kanji name with Japanese 時 is normal Japanese usage. DECISIONS #15 (English name) was an it/de choice, and the brief allows this for Japanese.

**6. Spacing.** Japanese is set solid: there is no space where Japanese meets Latin text or digits (Nu:Time標準, 10ゴング, info@nu-time.comまで), which is corporate/launch-page practice. Half-width spaces appear only inside Latin and number runs, as in the English (100 kè, 3.456 MHz, Apache 2.0, 刻时 Ke-Shi), and between a label and its value in spec-sheet lines (標準仕様 v1.0, 仕様 CC BY 4.0). The JSON already followed this rule apart from the new kè values, which follow the Latin-run rule. One stray space in the privacy page was removed.

## Changes

48 keys changed in `ja.json` (36 of them are the mechanical ケー → kè switch in tables, cards, facts and labels), plus 1 change in the privacy page.

| Key | Before | After | Why | Severity |
|---|---|---|---|---|
| `units.ke`, `units.kes`, `nav.ke`, `geometry.colKe`, `geometry.keLabel` | ケー | kè | Decision 1: ケー = the letter K, and 100ケー = "100K". | medium |
| `geometry.items[*][1]`, `geometry.trigRows[*][0]`, `ke.facts[0,1].n` | 100ケー, 16.67ケー, 1ケー … | 100 kè, 16.67 kè, 1 kè … | Same. Digits unchanged (checker ok). | medium |
| `meta.description` | 100ケー … ひとつの単位「ケー」で | 100 kè … ひとつの単位「kè」で | Same. This is the search/share snippet. | medium |
| `hero.sub` | それが「ケー」です。100ケーで円は一周し | それが「kè（ケー）」です。100 kèで円は一周し | Same, plus a one-time reading note where the unit is introduced. | medium |
| `ke.title` | ケー：「いつ」と「どこ」をひとつの単位で。 | kè：「いつ」と「どこ」を、ひとつの単位で。 | kè. The added 読点 gives the long heading a natural break at display size. | medium |
| `ke.lead`, `ke.facts[2,3].text`, `geometry.lead`, `geometry.trig`, `how.cards[3].text`, `build.items[0..2].text` | …ケー… | …kè… | kè, consistently in prose. | medium |
| `heritage.items[0].text` | 2,000年以上にわたり … Nu:Timeの中心にあるケーは、まさにこの刻です。 | 2000年以上にわたり … Nu:Timeの中心にあるkèは、まさにこの刻です。 | kè. Japanese writes a span of years without the thousands comma. | low |
| `build.license` | ケー（kè、刻）… ごく普通の言葉で | kè（刻）… 一般的な言葉で | kè (the gloss is now redundant). "Ordinary words" in a licence sentence reads better as 一般的な言葉, since ごく普通 sounds dismissive. | low |
| `how.cards[0].unit` | ゴング · 更 | ゴング · 更 gēng | Decision 2, for a consistent card pattern. | low |
| `how.cards[1].unit` | ビート · 分 | ビート · 分 fēn | Decision 2: bare 分 reads as "minute" under 1,000. | medium |
| `how.cards[2].unit` | ティック · 秒 | ティック · 秒 miǎo | Decision 2: bare 秒 reads as "second" under 100,000. | medium |
| `how.cards[3].unit` | ケー · 刻 | kè · 刻 | kè. | medium |
| `hero.noon` | 南中時刻 | 正中時刻 | Decision 4: 南中 is wrong for southern-hemisphere cities. | medium |
| `hero.dialHint` | 太陽が南中する時刻は、 | 太陽が空でいちばん高くなる正中時刻は、 | Same. It also explains 正中 in plain words, keeping the English "solar noon" plain. | medium |
| `how.cards[1].text` | 意味のある長さがありつつ、会議の単位にちょうどいい短さです。 | 意味を持つには十分な長さで、会議の区切りにはちょうどいい短さです。 | 〜がありつつ is 翻訳調. This mirrors "long enough … short enough" naturally. | low |
| `time.points[3].text` | 世界共通の時刻とローカルな時刻が | 世界共通の時刻と、その土地の時刻が | ローカルな時刻 is translationese. その土地 matches the rest of the page (その土地の太陽). | low |
| `why.items[2].text` | 世界では数十もの時差設定が使われています。 | 世界では、数十通りの時差が使われています。 | 時差設定 ("offset settings") sounds like a device menu. | low |
| `why.items[5].text` | 国際標準づくりに積極的に関わっており | 国際標準の形成に積極的に関わっており | "Shaping", not just "involved in". This keeps the English's strength without overstating it as 主導. It stays neutral. | low |
| `build.title` | オープン。だから、つくれる。 | オープン。だから、つくろう。 | The English "Build one." is an invitation (imperative). つくれる ("you can build") is weaker. | low |
| `build.lead` | 「Nu:Time · 刻时 Ke-Shi」という名前は、精度の証です。 | 「Nu:Time · 刻时 Ke-Shi」という名前が表すのは、精度です。 | 証 ("proof, guarantee") is stronger than "stands for" in a trademark sentence. The same drift was flagged in French. | low |
| `nav.why` | なぜ今か | なぜいま | Matches the section title (なぜ、いまなのか。) and the page's いま; shorter in the subnav. | low |
| `hero.dayBar` | あなたの場所の今日（世界共通Nu:Time） | あなたのいる場所の今日（世界共通Nu:Time） | あなたの場所 sounds like "your spot or seat". | low |
| privacy, last paragraph | privacy@nu-time.com までご連絡 | privacy@nu-time.comまでご連絡 | Spacing rule (decision 6). | low |

Worst severity: **medium** (kè/ケー, the 分/秒 cards, 南中). No high-severity problems were found: no wrong numbers, no dropped claims, and no political problems.

## Reviewed and left as is

- **Headings.** 時間と場所を、描きなおす。 ("reimagine" as "redraw", which avoids the 再定義 cliché), Nu:Timeがなくすもの。, しくみのすべてが、1行に収まる。, 幾何学の新時代。 / 三角法の新時代。, これからの道のり。 All are concise and keep the English's boldness.
- **`eliminates.title`.** The cheeky "things you never understood anyway" is kept (そもそもよく分からなかった), and 1時間60分、1分60秒 makes the joke clear. Not condescending in Japanese.
- **China time-zone card.** 中国は5つのタイムゾーンにまたがる国土を、ひとつの時刻で運用しています is plain geography with no judgement. タイムゾーンは物理ではなく政治 is faithful to the English and not aimed at any one country.
- **Standards card.** It is respectful and factual, and Nu:Time is offered for that work (提供されます), with no implied endorsement. 衛星測位システム「北斗」（BeiDou） is the usual Japanese form.
- **Spain card.** タイムゾーンがずれた国 is factual, not mocking.
- **`heritage.lead` 知恵を受け継ぎ.** "Borrows" → "inherits" is a hair warmer, but natural and harmless.
- **Brand lockup.** The eyebrow and the quoted name keep " · ". Running prose uses 中黒 (Nu:Time標準・刻时 Ke-Shi), which is the natural Japanese list mark.
- **Nu:Time Certified.** Kept in English as a mark name. 「Nu:Time対応」 is the compatibility claim (see escalation 4).
- **Cities.** All are standard Japanese forms (ヨハネスブルグ, レイキャビク, ワシントンD.C., ニューヨーク, and 北京/上海/香港/台北/東京 in kanji). No changes.
- **Privacy.** Accurate and complete. フォームを送信することで、この移転に同意したものとみなされます is standard Japanese legal phrasing for "by submitting you consent". 開示・訂正・削除 matches APPI terminology for "see, correct or delete".

## Escalations

1. **kè in Latin script on the Japanese page (owner confirm).** This reverses the translator's ケー. The reasons are in decision 1 and parallel DECISIONS #11 for Hindi and Urdu. `notes/ja.md` still describes ケー. I was told to edit no other files, so the notes and DECISIONS should be updated by whoever owns them.
2. **刻时 with simplified 时.** Kept as instructed. A Japanese reader may take it for a misprint of 刻時. If native readers trip on it, a brand-level decision (not a translator one) could add a one-time gloss.
3. **Pinyin on the unit cards** (更 gēng, 分 fēn, 秒 miǎo) is a small addition beyond the English, which shows bare characters. It matches the Chinese page. Alternative: drop the characters from the ja cards, though that would drop source content.
4. **「Nu:Time対応」.** This is the same open legal question as the Chinese page: may the "Nu:Time compatible" claim be localised, or must it stay in English?
5. **Native sign-off.** Japanese is not on the DECISIONS #16 sign-off list. A quick read by one Japanese native speaker, ideally from the science or creator community, is recommended before launch.
