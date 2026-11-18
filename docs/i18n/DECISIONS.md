# Translation — decisions

**Resolved 2026-11-18** (owner accepted the recommendations):

| # | Decision |
|---|---|
| 4 | Chinese standards card: keep current wording; no logos, "合作 / 支持" or programme names without a real relationship; one Chinese-speaking advisor reads it before launch. *(owner action)* |
| 5 | Roadmap stays as written in every language, including AI-assisted conversion of temporal and geospatial data. This is a broad roadmap statement: conversion is a very large effort for standards bodies and international programmes, not something Nu:Time implements, and it would follow international law and norms. No PRC-specific change is needed. The Chinese line was restored to match the English. *(done)* |
| 6 | File 刻时 and Nu:Time with CNIPA (classes 9, 14, 42) before any mainland promotion. *(owner action)* |
| 7–8 | Chinese tone choices and deliberate differences accepted; validate with a few native creators in the sign-off. |
| 9 | **No India card.** Hindi and Urdu are faithful translations of the English — China is the target; other languages serve native speakers, not separate positioning. |
| 10 | Hindi/Urdu: Indian grouping in prose, international grouping in the crystal table. *(done)* |
| 11 | "kè" stays in Latin script in Hindi and Urdu. |
| 12 | German: keep "Nu:Time macht Schluss." and *du*; "Developers" → "Entwickler-Doku"; gender rule = activity/field names, no star or colon forms. *(done)* |
| 13 | French: keep the "anglophones" AM/PM line and « standard »; Mumbai; typographic apostrophes (’). *(done)* |
| 14 | Spanish: decimal point with thin-space thousands; activity role labels under "Tu perfil"; keep sen/cos/tan and Pekín; Mumbai. *(done)* |
| 15 | Keep "National Time Service Center" as the institution's English proper name. |
| 16 | Native human sign-off before launch: Chinese ×2 (creator community + standards/academia), Hindi ×1, Urdu ×1, European quick read. *(owner action)* |
| 17 | Privacy page translated into all seven languages *(done)*; Standard translated into Chinese at /zh/spec/ (translated, then independently reviewed: `notes/spec-zh.md`, `reviews/spec-zh.md`) *(done)*. **Developers page stays English only, and the Standard stays English + Chinese** (owner confirmed 2026-11-18: developers read technical docs in English, and code and API names are English anyway). |

**Japanese, Portuguese (Brazil) and Russian added (2026-11-18)**, each translated, independently reviewed and back-translated (`notes/`, `reviews/`, `backtranslation/` per code), with the privacy notice translated too. The Standard stays English + Chinese; Developers stays English.

| Code | Units | Notable review decisions |
|---|---|---|
| ja | ゴング · kè · ビート · ティック | Latin kè (ケー reads as "K" / "100K"); pinyin on the 分/秒 unit cards; 正中時刻 for solar noon (南中 is wrong south of the equator); 刻时 kept as the brand. |
| pt | gong · kè · beat · tique | Brazilian Portuguese, você; decimal comma; sen/cos/tg; "Para devs" in the menu; China card restored to "is actively shaping". |
| ru | гонг · кэ · удар · тик | «удар» (heartbeat) instead of «бит», which engineers read as the data bit; вы; «Национальный центр службы времени» translated (overrides #15 for Russian). |

**Owner direction (2026-11-18):** the launch is a publication, a "hello world" for an idea. There is no programme, product or implementation behind it yet, so legal and regulatory points are **not blocking** and the wording stays as it is. The notes below are kept for reference only, for if and when a real programme exists.

**Raised by the Chinese Standard review (2026-11-18), reference only:**

- **认证 (certification) in mainland China — legal.** Certification activities and marks are regulated under 《认证认可条例》 and need approval from the national certification authority (CNCA). The zh site (`build.certTitle`, `build.cert`, roadmap 2027) and §8 of the Standard call the Nu-Time Inc. programme 认证. Approve, or switch to a neutral term such as 一致性测评 before mainland promotion.
- **"兼容刻时 Nu:Time" — legal.** May the compatibility claim be localised, or must it stay as the English "Nu:Time compatible"? The Standard now gives the English mark first: **Nu:Time Certified**（刻时 Nu:Time 认证）.
- **English source — owner.** §2 "Gong `00:00:00`" pairs a unit with a full reading; "the day is one turn of the planet" describes a mean solar day, not one sidereal rotation — academic readers may query it.
- **Timing engineer.** Confirm 行规 for "profile", whether §9 means NTP specifically (then 网络时间协议（NTP）行规), and the Chinese name for IERS.

---

The original list follows for reference.

# Translation — open decisions (original)

Status 2026-11-18: all seven translations (zh, hi, ur, fr, it, de, es) have been translated, reviewed by an independent editor (Chinese twice: language, then mainland audience and sensitivity), back-translated, fixed, and rendered. **No high-severity problems remain in any language.** Per-language detail: `notes/` (translator), `reviews/` (editor changes, before → after → why), `backtranslation/` (drift check).

## A. English source — fix once, then every language follows

**Done 2026-11-18:** all three applied in English and carried into every language, then checked by an independent multilingual editor (fixes in de, es, hi, ur).

1. **"The world's next standards are being re-written in 2035"** (`why.items[5].title`). Every translator and checker stumbled on "in". Most rendered "by 2035"; Chinese rendered "Towards 2035: a new round of international standards is taking shape". *Suggest:* "Towards 2035: the world's next standards are being written."
2. **"Machines already count in tens"** (`why.items[4]`). Computers count in binary; French and Chinese reviewers expect engineers to object. *Suggest:* title "Machines don't need base 60", text ending "A decimal day is simply easier to compute."
3. **"China has set out to lead international standards…"** (`why.items[5].text`). The Chinese page now uses China's own policy wording ("actively participates in and promotes international standard-setting") and full official names. *Suggest:* align the English so all languages say the same thing.

## B. Chinese page — company / legal

4. **Standards card sign-off.** Confirm no endorsement or partnership is implied. Don't add logos, "合作 / 支持", or the national programme name unless there is a real relationship. Uses the full official names 北斗卫星导航系统 and 中国科学院国家授时中心.
5. **Geospatial data and PRC law.** The roadmap's AI-assisted conversion of geographic data touches the PRC Surveying and Mapping Law, which restricts foreign organisations handling geographic data. Get local legal advice before any China pilot.
6. **Trademark.** File 刻时 with CNIPA (classes 9, 14, 42) before mainland promotion; two common words invite squatting or descriptiveness objections.
7. **Tone choices for native sign-off:**
   - Hero: 时间与位置，重新想象 ("reimagined"; avoids the mocked 重新定义).
   - "Eliminates" heading: 刻时 Nu:Time，给时间做减法 ("simplifying time"), with the "never understood" line reworded so it doesn't talk down to the reader.
   - Geometry and trigonometry titles: 几何，换个刻度 / 三角学，也换个刻度 — modest, and a pun on 刻.
8. **Intentional differences from the English** (listed in `backtranslation/zh.md`): time zones framed as "human conventions" rather than "politics"; China's role and the 2035 date softened; Nu:Time offered "as a reference". These are deliberate for the mainland audience.

## C. Hindi and Urdu pages

9. **China standards card for Indian readers.** It is translated faithfully and neutrally, but a Hindi/Urdu page crediting China with leading world standards may read as promotional. Options: keep, de-emphasise, or add an India-specific card. Candidates: NavIC, the North-East time-zone debate, ghaṭī / muhūrta. (The India heritage card was removed earlier, so these pages lead with China.)
10. **Lakh grouping in technical tables** (29,85,984 etc.) versus international grouping, which some engineers expect.
11. **"kè" stays in Latin script** in both languages: every Devanagari/Urdu spelling collides with के / کے ("of"). Confirm.

## D. European pages

12. **German:**
    - "Nu:Time macht Schluss." hints at "breaking up" — approve the boldness or soften.
    - *du* register throughout.
    - "Developers" is "Entwicklung"; a site-wide rule for gender-inclusive wording is still needed.
13. **French:**
    - The AM/PM joke now names "les anglophones", since France uses the 24-hour clock (a deliberate localisation).
    - "Bombay" or "Mumbai".
    - Straight or curly apostrophes — apply in one pass.
    - « standard » rather than « norme ».
14. **Spanish:**
    - The decimal comma suits Spain and most of South America, but Mexico, Central America and Peru use the decimal point.
    - Masculine role labels (Desarrollador…) or activity labels, as in Italian and German.
    - sen/cos/tan notation.
    - "Bombay" / "Pekín" (Fundéu) or "Mumbai" / "Beijing".
15. **"National Time Service Center"** is left in English in it/de; translate it or keep the proper name.

## E. Before launch

16. **Native human sign-off**, at least for Chinese, Hindi and Urdu. The AI passes reduce risk; they don't replace a native reader in the market, and for Chinese ideally someone close to the creator and standards communities.
17. The `/spec/`, `/developers/` and `/privacy/` pages are English only.
