# Nu:Time translation brief

Source: `locales/en.json` (English, final). Targets: `locales/<code>.json` with **exactly the same keys, nesting, array lengths and order**. Translate string values only. `tests/check_locales.py` enforces the structure.

## What Nu:Time is

An open standard for time and place. One universal time for the whole planet; the day divided into 10 gongs, 1,000 beats and 100,000 ticks; and one unit — the **kè**, 1/100 of a day and 1/100 of a circle — linking time and geography. The site is a launch page for the standard and a live clock. Tone: confident, plain, warm, slightly bold — never hype, never academic. Short sentences. It must read as if it were **written in the target language for that audience**, not translated.

## Audiences

| Code | Language | Primary readers | Notes |
|---|---|---|---|
| zh | Simplified Chinese (mainland) | Tech and science creators (Bilibili, Zhihu, Xiaohongshu, WeChat), engineers, standards people, culture/history readers | The most important locale. See "Chinese" below. |
| hi | Hindi | Indian tech readers and general audience | Natural modern Hindi, not Sanskritised officialese; common English tech words may stay in Devanagari transliteration where that is how people actually speak. |
| ur | Urdu | Urdu readers in India and Pakistan | Right-to-left. Natural modern Urdu; avoid heavy Persianisation. |
| fr | French | France, Belgium, Switzerland, Québec, Francophone Africa | Proud of the 1793 decimal-time heritage card. |
| it | Italian | Italy | |
| de | German | Germany, Austria, Switzerland | Nouns capitalised (der Gong, das Kè, der Beat, der Tick). |
| es | Spanish | Neutral international Spanish (Spain + Latin America) | The Spain heritage card must be factual, not mocking. |

## Fixed terms (glossary)

| English | zh | hi | ur | fr | it | de | es |
|---|---|---|---|---|---|---|---|
| Nu:Time (brand) | 刻时 Nu:Time (paired, see below) | Nu:Time | Nu:Time | Nu:Time | Nu:Time | Nu:Time | Nu:Time |
| Ke-Shi / 刻时 | 刻时 | Ke-Shi (刻时) | Ke-Shi (刻时) | Ke-Shi (刻时) | Ke-Shi (刻时) | Ke-Shi (刻时) | Ke-Shi (刻时) |
| gong | 更 (gēng) | गोंग | گونگ | gong | gong | Gong | gong |
| kè | 刻 | kè (see note) | kè (see note) | kè | kè | Kè | kè |
| beat | 分 (fēn) | बीट | بیٹ | beat | beat | Beat | beat |
| tick | 秒 (miǎo) | टिक | ٹک | tic | tic | Tick | tic |
| universal Nu:Time | 统一刻时 / 全球统一的 Nu:Time — translator to choose and justify | | | | | | |
| Prime Meridian (Greenwich) | 本初子午线（格林尼治） | | | | | | |

- **Never translate or alter**: `Nu:Time`, `Nu:Time™`, `Ke-Shi`, `刻时`, `GG:BB:TT`, `gong:beat:tick` patterns inside the readout labels, numbers in tables (times like `05:00:00`, degrees, kè values, `√3/2`), email addresses, URLs/`href` values, `key` fields, `lang`, and the licence names (MIT, Apache 2.0, CC BY 4.0, CERN-OHL-P 2.0).
- **Set** for each file: `lang` = code, `dir` = `rtl` for ur else `ltr`, `langName` = the language's own name (简体中文, हिन्दी, اردو, Français, Italiano, Deutsch, Español), `brand` = `Nu:Time`, `brandLocal` = `刻时` for zh else `Nu:Time`.
- **Units are identical in every language** — translate the names, never the durations or the field order.
- **Hindi/Urdu "kè" warning**: the obvious transliterations के / کے are the everyday postposition "of" and would make sentences ambiguous. Keep the Latin **kè** (or propose a clearly distinct alternative in your notes) and stay consistent.
- **Numbers**: use local conventions everywhere, including tables (1 000 / 1.000 / 1,000 / Indian 1,00,000; decimals 16,67 in fr/it/de/es). The digits themselves must not change — the checker compares digits only. Readout times like `05:00:00` stay exactly as they are.
- **Unit patterns in prose**: write `gong:beat:tick` with the local unit names (gong:beat:tic, Gong:Beat:Tick, 更:分:秒 …). Only the live clock's `GG:BB:TT` digits are fixed.
- **Gender**: use activity or field names for roles (e.g. "Software development", not "Developer") rather than masculine forms or star/colon forms.
- **Language-specific number rules (decided)**: French/Italian/German decimal comma; **Spanish decimal point** with thin-space thousands; Hindi/Urdu Indian grouping in prose but international grouping in technical tables.
- **Labels in `n` fields** (e.g. "Longitude", "Latitude", "1 kè") are display text — translate them.
- **cities**: translate city names to the standard local exonym (e.g. 北京, Pékin → keep "Pékin" only if that is current usage; Mumbai → मुंबई). If a city is normally left untranslated in the language, keep it. Country names are not here — the browser localises them.

## Chinese (zh) — specific guidance

1. **Brand**: lead with **刻时**; pair it with the Latin brand where it first appears in a section (**刻时 Nu:Time**) — spoken *kè shí* collides with 课时 (class period) and 刻蚀 (etching), so the pairing disambiguates. Do not invent a different Chinese brand.
2. **Units**: 更 / 刻 / 分 / 秒 are fixed in the Standard. A reading like `05:37:50` is 五更三十七分五十秒. Where 分/秒 could be confused with SI minutes/seconds in a sentence, 刻时分 / 刻时秒 is acceptable.
3. **Political neutrality — mandatory.**
   - The "time zones" card mentions China spanning several geographic time zones on one clock. Present this neutrally as geography (China's vast territory spans about five geographic time zones under unified Beijing Time); **no criticism of Beijing Time** and no suggestion it should change. Frame Nu:Time as complementing a shared national time with each place's local sun.
   - The "standards" card is positive about China's role (BeiDou, 国家授时中心 in 西安). Keep it respectful and factual; do not overstate an official endorsement — Nu:Time is offered *to* this work, not endorsed by it.
   - Do not add or translate anything about Taiwan, Hong Kong, borders or sovereignty. Country names in the location list come from the browser, except on the Chinese page, which follows mainland convention: 台北, 中国台湾 · 香港, 中国香港 (set in clock.js).
4. **Heritage**: the China card is the lead card on the zh page. Use correct historical terms (百刻制, 漏刻/刻漏 water clocks, 五更). Keep claims exactly as strong as the English — no added history.
5. **Register**: 科普 tone that a Bilibili/Zhihu science creator would happily quote; avoid 翻译腔 (translationese), avoid over-formal 公文 style, avoid internet slang. Use full-width Chinese punctuation.
6. **Line length**: headings will display large; prefer concise headings.

## Output

1. `locales/<code>.json` — the translation.
2. `docs/i18n/notes/<code>.md` — short notes: terminology choices, anything you were unsure about, any English that didn't translate well (max ~15 bullets).
3. Validate: `python3 -I tests/check_locales.py <code>` must print `ok`.
