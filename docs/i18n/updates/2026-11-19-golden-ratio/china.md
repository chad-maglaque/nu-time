# China card and Why now card 03 — 2026-11-19

# China card + why.items[2] — translator notes (2026-11-19)

All languages: era copies the format of each language's own Spain card ("1940 – today"), and place copies the existing China card. The why2 titles are unchanged. "Standardized time/clock" is rendered with each language's usual term for official clock time (标准时间, 標準時, मानक समय, معیاری وقت, hora oficial, horário oficial, heure légale, Standardzeit, ora ufficiale, официальное время), because a literal "standardized clock" sounds odd in most of them.

## zh
- **北京时间 is named** in the card ("共用同一个全国时间——北京时间") and in why2 ("全国早已统一使用北京时间", as in the wording already reviewed). It is natural and respectful in Chinese, and leaving it out sounds evasive. Nothing is said about regions, and nothing suggests it should change.
- Title "全国同一个时间". I avoided "一国一钟" and "一个国家，一个…", which echo 一国两制 and 一个中国. The rhythm recalls 同一个世界，同一个梦想, which has positive associations.
- Closing line: "理念，中国早已认同；几何，交给刻时。" It is a parallel couplet built to be quoted. 认同 is warmer than 接受 without being stronger than "accepts". "交给刻时" offers what Nu:Time adds; it doesn't claim endorsement and doesn't imply anything is missing. I rejected 补上, which hints at a gap.
- why2 says "五个时区", following the English. The old zh had "约五个". The range from UTC+5 to UTC+9 nominal zones makes "five" correct.
- The brand is paired as 刻时 Nu:Time at its first use in the card, then 刻时 alone. why2 uses 刻时, as the existing card did.
- "75 年多来" keeps "more than 75". "civil time" becomes 日常使用的时间, because 民用时 is too technical for this register.

## ja
- です・ます throughout. The "four hours" clause is split into its own short sentence so the long Japanese premodifier doesn't pile up.
- Closing: 「その考え方を、中国はすでに受け入れています。幾何学を提供するのが、Nu:Timeです。」 The cleft puts the stress on Nu:Time.

## hi
- "140 करोड़" is how Hindi media say 1.4 billion.
- The title "एक देश, एक घड़ी" follows the familiar "एक देश, एक…" slogan pattern. It reads naturally, but some readers may hear that echo. It isn't partisan; flagged for awareness.
- "civil time" becomes घड़ी का समय (clock time), which is plainer than नागरिक समय. "philosophy" becomes यह सोच.

## ur
- "1.4 ارب" is the usual Pakistani and Indian Urdu press form. "geometry" is جیومیٹری (modern), not ہندسہ, to avoid heavier Persianisation.

## es
- "1400 millones": per RAE, a four-digit number takes no separator. The text uses "hora oficial" in both strings.

## pt
- "1,4 bilhão" (Brazilian, singular below 2). "horário oficial" is the Brazilian idiom (compare horário de Brasília). "traz a geometria" is snappier than "fornece".

## fr
- Typography follows the file: NBSP before ":" and between number and noun, NNBSP before ";", ’ apostrophes, and an em dash with spaces.
- "heure légale" is the exact French term for official clock time. The closing uses fronting ("La philosophie, la Chine l’a déjà acceptée. La géométrie, c’est Nu:Time qui l’apporte.") so it can be quoted.
- Title "Un pays, une seule heure": in French, "une horloge" for a time zone reads oddly.

## de
- No direct address, so the du-register doesn't come into play. "Standardzeit" is used in both strings. "China nutzt … über fünf Zeitzonen hinweg" is positive; I avoided "auskommen", which implies making do.

## it
- Straight apostrophes, as in the file. The text splits the two colons into ", cioè che…".

## ru
- "1,4 миллиарда" is spelled out in prose. Солнце is capitalised, as in the file. "оставалось за кадром" is used rather than the bureaucratic "подразумевалось". The title "Одна страна — одни часы" uses the plural-only часы.

---

# China card + why.items[2]: zh review (2026-11-19)

Native mainland reviewer. Inputs: china.in.json, the zh entry of china.out.json, china.notes.md, BRIEF (Chinese section), docs/i18n/notes/zh.md, locales/zh.json.

## Changes

1. **card.text, first clause**
   - Before: 约 14 亿人一直共用同一个全国时间——北京时间
   - After: 全国约 14 亿人一直共用同一个时间——北京时间
   - Why: 全国时间 isn't a set phrase and reads as a calque of "national clock". Moving 全国 onto the people keeps "national" and sounds native. The digit order (75, 14) is unchanged, so the checker still passes.

Nothing else changed. why2 is unchanged.

## Checks

- **Title 全国同一个时间**: confirmed good. It is plain and concrete, with no slogan echo. 一国一钟 and 一个国家，一个… were rightly avoided (一国两制 / 一个中国). I also rejected 全国统一时间, because 统一 carries political weight in a title, and 举国… (too formal). The faint echo of 同一个世界，同一个梦想 is positive.
- **Naming 北京时间**: fine and preferable. It is the neutral official term every mainland reader uses, and leaving it out would feel evasive. The card and why2 only state facts: no evaluation, no regions, no hint of change.
- **Era 1949 年至今**: fine. It is the factual adoption date, neutral to positive for a mainland reader, and it matches the format of the Spain card (1940 年至今). Place 中国 matches the 百刻制 card.
- **Endorsement**: 理念，中国早已认同 refers to the principle (civil time needn't follow the local sun), which the previous sentence grounds in China's practice. It is not read as China endorsing 刻时. 几何，交给刻时 offers the geometry without claiming anything is missing. I kept 认同. If the owner wants zero ambiguity, 理念，中国早已践行 is the fallback, but 践行 leans slightly toward 公文.
- **why2**: China is stated as geography plus practice (中国地理上横跨五个时区，全国早已统一使用北京时间). It is neutral and positive (早已 = "already"), and it follows the new English order India, Spain, China. 标准时间 is consistent with the card.
- **Facts**: 75 年多 holds (1949 to 2026 = 77). ~14 亿 holds (about 1.41 billion). On the sun's crossing: China spans about 73.5°E to 135°E, roughly 61.5°, so about 4 h 06 min, and 四个多小时 is correct. Five geographic zones: the nominal zones UTC+5 to UTC+9, so 五个 is correct (the old 约五个 was a hedge).
- **Register and typography**: 科普 register with no 翻译腔 after the fix. Punctuation is full-width (，；：——。), with half-width spaces between Hanzi and digits as in the file. The brand appears as 刻时 Nu:Time at first mention and 刻时 afterwards. why2 uses 刻时 alone, as the current card does, and the checker's zh exception allows it. The closing couplet is quotable.

## Back-translation (literal)

**Card**
- Era: 1949 to the present
- Place: China
- Title: The whole country, one and the same time
- Text: For more than 75 years, the whole country's roughly 1.4 billion people have all along shared one and the same time — Beijing Time; yet for the sun to cross this land takes more than four hours. China took this step very early: the time used in daily life doesn't have to go by the local sun. Ke-Shi Nu:Time extends this principle to the whole Earth, and makes clear the reasoning in it that was never stated outright: standard time is one thing, the sun's position in the sky is another. The philosophy, China has long accepted (identified with); the geometry, leave it to Ke-Shi.

**why.items[2].text** (title unchanged: Time zones are human convention, not a law of nature)
- The time-zone offsets in use around the world number several dozen. India spans nearly two time zones; Spain, for its part, is shifted by a full hour. China geographically spans five time zones, and the whole country has long uniformly used Beijing Time. Ke-Shi separates standard time from each place's sun.

## Drift

- 北京时间 is named in both strings (an addition). It is intentional, natural and respectful, and it is the term the page already used.
- "national" becomes 全国 (the whole country) on the people rather than on the clock. The meaning is equivalent.
- "accepts" becomes 认同, a shade warmer ("identifies with"). It doesn't overstate the claim, because it refers to the principle rather than to 刻时.
- "civil time" becomes 日常使用的时间 (time used in daily life). This fits the register. why.items[1] uses 民用时间, which is acceptable variation.
- "standardized clock/time" becomes 标准时间 (standard time), the normal Chinese term.
- "runs one clock" becomes 统一使用北京时间 (uniformly uses Beijing Time). The meaning is the same, and 统一 is descriptive here, not a slogan.
- No change in claim strength anywhere, and no added history.

## Verdict

**Pass with notes.** One wording fix in the card (全国约 14 亿人…同一个时间). Political neutrality, facts and format are all fine. 认同 can stay; 践行 is the fallback if the owner wants zero ambiguity.

---

# China card and why.items[2]: independent review, 9 languages (2026-11-19)

Scope: ja, hi, ur, es, pt, fr, de, it, ru. zh was not reviewed here.
Sources: `china.in.json`, `china.out.json`, `china.notes.md`, `docs/i18n/BRIEF.md` and each `locales/<code>.json`.
Fixed output: `china-9.final.json`, which is valid JSON with card key `cn` in every language.

Checks across all nine languages:
- **Claims kept:** "more than 75", "about 1.4 billion", "more than four hours", "five geographic time zones" and "nearly two".
- **Era:** follows the format of each language's own Spain card. ja uses `年〜現在`, fr uses `Depuis …`, ru uses NBSP plus an em dash, and the rest use a spaced en dash.
- **Place:** matches the existing China card.
- **Why-card titles:** unchanged.

## ja

**Changes**
1. The first two sentences were reordered.
   - Before: 「…約14億人が、ひとつの全国共通の時刻で暮らしてきました。太陽が横切るのに4時間以上かかる国土で、です。」
   - After: 「太陽が横切るのに4時間以上かかる国土で、75年以上にわたり、約14億人がひとつの全国共通の時刻で暮らしてきました。」
   - Why: the 「〜で、です。」 afterthought sounds like spoken or blog style. The rest of ja.json is plain written です・ます.
2. The closing pair was made parallel.
   - Before: 「その考え方を、中国はすでに受け入れています。幾何学を提供するのが、Nu:Timeです。」
   - After: 「その考え方は、中国がすでに受け入れています。幾何学は、Nu:Timeが提供します。」
   - Why: contrastive は on both halves makes a balanced, quotable couplet. In the original, a plain を object was followed by a cleft, which sounded uneven.

**Back-translation (final)**
- Era: "1949 – present". Place: "China". Title: "One country, one clock".
- Text: "In a land that the sun takes more than 4 hours to cross, for more than 75 years, about 1.4 billion people have lived by a single nationwide time. China took this step long ago: the time of daily life doesn't have to be matched to the local sun. Nu:Time extends this principle to the whole Earth and makes clear what had stayed implicit until now: standard time and the position of the sun seen in the sky are different things. That way of thinking, China has already accepted. The geometry, Nu:Time provides."
- why2: "Around the world, dozens of different offsets are in use. India spans nearly 2 time zones, and Spain is off by a full hour. China already runs, on a single time, a territory that geographically spans 5 time zones. Nu:Time separates standard time from the local sun."

**Drift:** "philosophy" becomes 考え方 ("way of thinking"), which is slightly softer but natural; 哲学 would sound academic. "civil time" becomes 暮らしの時刻 ("time of daily life"). Neither changes the meaning.

**Verdict:** pass with notes.

## hi

**Changes**
1. Title.
   - Before: "एक देश, एक घड़ी"
   - After: "पूरे देश में एक ही घड़ी"
   - Why: "एक देश/राष्ट्र, एक …" is a live Indian policy-slogan pattern: One Nation One Election, One Nation One Ration Card, One Nation One Tax. It also includes the 2024–25 IST rules, which the media reported as "One Nation, One Time". On a card about a national clock, an Indian reader would hear that echo, and might also hear the IST/Northeast time-zone debate. That isn't neutral. The new title says the same thing as a plain description ("one single clock across the whole country"), and it matches the descriptive style of the Spain card title.
2. why2: "चीन तो पाँच …" → "चीन पाँच …"
   - Why: तो ("as for China") plus पहले से ही sets China up rhetorically against India in the previous sentence. Without तो, the line is plain geography. "Already" is still carried by पहले से ही.

**Back-translation (final)**
- Era: "1949 – till today". Place: "China". Title: "One single clock across the whole country".
- Text: "For more than 75 years, about 140 crore people have been running on one single national clock — in a country that the sun takes more than four hours to cross. China took this leap long ago: it isn't necessary for clock time to run according to the local sun. Nu:Time takes this same principle to the whole Earth, and says plainly the thing that had gone unsaid until now — standard clock time and the sun's position in the sky are two different things. This thinking China has already adopted. The geometry Nu:Time gives."
- why2: "Dozens of different time offsets run across the world. India is spread about as wide as nearly two time zones; Spain is shifted a full hour. China already runs a single clock across five geographic time zones. Nu:Time keeps standard time separate from the local sun."

**India sentence:** neutral. It is a geographic statement ("spread as wide as nearly two time zones") and says nothing about IST or Northeast demands.

**Numbers:** 140 करोड़ is correct (1.4 billion), uses Indian grouping, and is how the Hindi press says it.

**Drift:** none of substance. "philosophy" becomes सोच ("thinking"), which is natural; दर्शन would be too lofty. The closing pair is short and declarative, and it works.

**Verdict:** pass with notes (title changed).

## ur

**Changes**
1. Title.
   - Before: "ایک ملک، ایک گھڑی"
   - After: "پورے ملک میں ایک ہی گھڑی"
   - Why: the same slogan echo as in Hindi. Indian Urdu media carry ایک ملک، ایک الیکشن and similar slogans. The echo is weaker for readers in Pakistan, but the descriptive title is equally good and keeps hi and ur consistent.
2. why2: "چین تو پہلے ہی …" → "چین پہلے ہی …"
   - Why: the same neutrality point as in Hindi.

**Back-translation (final)**
- Era: "1949 – till today". Place: "China". Title: "One single clock across the whole country".
- Text: "For more than 75 years, about 1.4 arab (billion) people have been running on one single national clock — in a country that the sun takes more than four hours to cross. China took this step long ago: it isn't necessary for clock time to run according to the local sun. Nu:Time takes this same principle to the whole Earth, and says openly the thing that had stayed unsaid until now — standard clock time and the sun's position in the sky are two separate things. This thinking China has already adopted. The geometry Nu:Time gives."
- why2: "Dozens of different time differences are current across the world. India is spread across nearly two time zones; Spain's time is shifted a full hour. China is already running a single clock across five geographic time zones. Nu:Time separates standard time from the local sun."

**Number:** "1.4 ارب" is the normal form in the Urdu press and matches ur.json, which uses ایک ارب. The Arabic semicolon ؛ is used, as in the file.

**Drift:** none.

**Verdict:** pass with notes (title changed).

## es

**Changes:** none.

**Back-translation (final)**
- Era: "1949 – today". Place: "China". Title: "One country, one clock".
- Text: "For more than 75 years, some 1400 million people have shared a single national clock in a country the sun takes more than four hours to cross. China made the leap long ago: civil time has no reason to follow the local sun. Nu:Time extends that principle to the whole planet and adds what was left implicit: official time is one thing, and the position of the sun in the sky, another. China already accepts the philosophy. Nu:Time contributes the geometry."
- why2: "Dozens of different time offsets are used in the world. India spans almost two time zones; Spain lives with a whole hour of offset. China already operates with a single clock across five geographic time zones. Nu:Time distinguishes between official time and each place's sun."

**Notes:** "1400 millones" follows RAE (no separator in four-digit numbers). Spanish press in Spain often writes "1.400 millones", but that would clash with the file's decimal-point rule, so 1400 is right. The register is neutral.

**Drift:** none.

**Verdict:** pass.

## pt

**Changes:** none.

**Back-translation (final)**
- Era: "1949 – today". Place: "China". Title: "One country, one clock".
- Text: "For more than 75 years, about 1.4 billion people have shared a single national clock, in a country the sun takes more than four hours to cross. China made that leap a long time ago: civil time doesn't need to follow the local sun. Nu:Time extends that principle to the entire planet and adds what had been left implicit — official time is one thing; the position of the sun in the sky is another. China already accepts the philosophy. Nu:Time brings the geometry."
- why2: "The world uses dozens of different zones. India spans almost two time zones; Spain is shifted a whole hour. China already runs on a single clock across five geographic time zones. Nu:Time separates two things: official time and each place's sun."

**Notes:** "1,4 bilhão" (singular) and "horário oficial" are correct Brazilian Portuguese. "num" is fine in Brazilian prose.

**Drift:** "traz" ("brings") is a shade lighter than "provides", which is acceptable.

**Verdict:** pass.

## fr

**Changes**
1. "et dit enfin ce qui restait implicite" → "et énonce ce qui restait implicite"
   - Why: *enfin* ("at last") adds a "finally someone says it" tone that isn't in the English "adds".
2. "75 ans" and "1,4 milliard": NBSP → NNBSP (U+202F).
   - Why: fr.json uses the narrow no-break space between a number and a noun in prose ("les 24 heures", "86 400 secondes", "27 secondes"). NBSP before ":" and NNBSP before ";" were already correct, and ’ apostrophes are used throughout.

**Back-translation (final)**
- Era: "Since 1949". Place: "China". Title: "One country, one single hour [time]".
- Text: "For more than 75 years, some 1.4 billion people have shared one and the same national time, in a country the sun takes more than four hours to cross. China took the plunge long ago: civil time doesn't have to follow the local sun. Nu:Time extends this principle to the whole planet, and states what remained implicit — legal time and the position of the sun in the sky are two different things. The philosophy, China has already accepted. The geometry, it's Nu:Time that brings it."
- why2: "Dozens of time offsets are in use in the world. India spans nearly two zones; Spain is offset by a whole hour. China already applies a single time across five geographic zones. Nu:Time distinguishes legal time from the sun, specific to each place."

**Drift:** "une seule heure" for "one clock" is justified in the notes and is idiomatic.

**Verdict:** pass with notes.

## de

**Changes**
1. "das die Sonne erst in über vier Stunden überquert" → "das die Sonne in mehr als vier Stunden überquert"
   - Why: *erst* ("only after") is clumsy here, and *über … überquert* is an awkward echo.
2. "Standardzeit" → "offizielle Uhrzeit" in both the card and why2.
   - Why: in German, *Standardzeit* is mainly the synonym of *Normalzeit*, meaning standard time as opposed to Sommerzeit. A German reader would likely take "Nu:Time trennt die Standardzeit von der Sonne" as being about DST. *offizielle Uhrzeit* means the official clock time, as intended.

**Back-translation (final)**
- Era: "1949 – today". Place: "China". Title: "One country, one clock".
- Text: "For more than 75 years, around 1.4 billion people have shared a single national clock time – in a country the sun crosses in more than four hours. China took this step long ago: everyday clock time doesn't have to follow the sun where you are. Nu:Time carries this principle over to the whole planet and says out loud what so far went unsaid – official clock time is something other than the position of the sun in the sky. The philosophy China has already accepted. The geometry Nu:Time delivers."
- why2: "Worldwide, dozens of different offsets from UTC are in force. India extends across almost two time zones; Spain is shifted by a whole hour. China already uses a single clock time across five geographic time zones. Nu:Time separates official clock time from the local sun."

**Notes:** there is no direct address, so the du register doesn't arise. The closing chiasmus "Die Philosophie hat China bereits akzeptiert. Die Geometrie liefert Nu:Time." is strong.

**Drift:** "Abweichungen von UTC" is slightly more explicit than "offsets", but it was already in the reviewed why2.

**Verdict:** pass with notes.

## it

**Changes**
1. "La geometria la porta Nu:Time." → "La geometria ce la mette Nu:Time."
   - Why: without a comma, "la geometria la porta Nu:Time" can briefly parse as "la porta" = "the door". *Metterci* ("to contribute, put in") is idiomatic and confident, and it pairs well with "La filosofia, la Cina l'ha già accettata."

**Back-translation (final)**
- Era: "1949 – today". Place: "China". Title: "One country, one clock".
- Text: "For over 75 years about 1.4 billion people have shared a single national clock, in a country the sun takes more than four hours to cross. China made the leap a long time ago: civil time doesn't necessarily have to follow the local sun. Nu:Time extends this principle to the whole planet and makes explicit what had remained understood, namely that official time is one thing and the position of the sun in the sky another. The philosophy, China has already accepted it. The geometry, Nu:Time puts it in."
- why2: "In the world, dozens of different time offsets are in use. India extends over almost two time zones; Spain is shifted by a whole hour. China already uses a single time across five geographic time zones. Nu:Time separates official time from the local sun."

**Notes:** straight apostrophes and lowercase *paese* are both consistent with it.json.

**Drift:** none.

**Verdict:** pass with notes.

## ru

**Changes**
1. A no-break space (U+00A0) was added before every em dash: in the era "1949 — наши дни", the title "страна — одни часы", and three places in the text.
   - Why: ru.json consistently writes "слово —", and the existing Spain era is "1940 — наши дни".
2. "и называет вслух то, что оставалось за кадром" → "и проговаривает то, что оставалось за кадром"
   - Why: "называть вслух" is an off collocation (the usual phrases are "говорить вслух" or "проговаривать"). *Проговаривает* is plain, modern Russian.

**Back-translation (final)**
- Era: "1949 — our days". Place: "China". Title: "One country — one clock".
- Text: "For more than 75 years about 1.4 billion people have lived by one nationwide clock — in a country the Sun crosses in more than four hours. China took this step long ago: civil time is not obliged to follow the local Sun. Nu:Time extends this principle to the whole planet and spells out what had stayed off-screen: official time is one thing, and the position of the Sun in the sky is quite another. The philosophy China has already accepted. The geometry Nu:Time gives."
- why2: "Dozens of different zone offsets are in effect in the world. India stretches across almost two time zones; Spain is shifted by a whole hour. China already lives by one clock across five geographic time zones. Nu:Time separates official time and the local Sun."

**Notes:** "1,4 миллиарда" (decimal comma, genitive singular) is correct. Солнце is capitalised, as in the file.

**Drift:** "совсем другое" ("quite another") is a touch stronger than "different", but it is idiomatic and doesn't change the claim.

**Verdict:** pass with notes.

## Summary

| Lang | Fixes | Verdict |
|---|---|---|
| ja | opening reordered (dropped 「〜で、です」); closing made a parallel は/は couplet | pass with notes |
| hi | title → पूरे देश में एक ही घड़ी (slogan echo); why2 dropped तो | pass with notes |
| ur | title → پورے ملک میں ایک ہی گھڑی; why2 dropped تو | pass with notes |
| es | none | pass |
| pt | none | pass |
| fr | "dit enfin" → "énonce"; NNBSP in "75 ans" and "1,4 milliard" | pass with notes |
| de | "erst in über" → "in mehr als"; Standardzeit → offizielle Uhrzeit (×2) | pass with notes |
| it | "la porta" → "ce la mette" | pass with notes |
| ru | NBSP before em dashes (era, title, text); "называет вслух" → "проговаривает" | pass with notes |
