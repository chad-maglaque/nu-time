# Back-translation drift check: Urdu (`locales/ur.json`)

Method: every string in `locales/ur.json` (179 leaf strings) was back-translated into plain, literal English before the matching string in `locales/en.json` was read. The two were then compared string by string. Only real drift is flagged. Wording changes with the same meaning, lakh digit grouping (1,00,000 · 29,85,984 · 8,64,000 · 86,40,000 · 1,38,24,000) and the U+200E marks are not treated as problems. The locale file was not edited. `tests/check_locales.py ur` prints `ok`.

## Flagged items

| Key | English source | Back-translation of Urdu | Problem | Suggested fix (Urdu) | Severity |
|---|---|---|---|---|---|
| `heritage.items.2.text` | …Its clocks run an hour or more ahead of its sun — a living example of what time zones do to daily life. | "…Clocks there run an hour or even more ahead of the sun — this is a living example of **what effect** time zones have on daily life." | Weaker. "What time zones do to daily life" implies harm, and the card's title calls it the *wrong* time zone. "کیا اثر ڈالتے ہیں" is neutral and drops that edge. The fix stays factual, not mocking. | …یہ اس بات کی زندہ مثال ہے کہ ٹائم زون روزمرہ زندگی کا کیا حال کر دیتے ہیں۔ | low |
| `why.items.1.title` | Leap seconds were always the problem | "Leap seconds have always been **a** problem" | Weaker. The English says leap seconds were *the* core problem. The Urdu says only that they were one problem among others. | لیپ سیکنڈ ہی ہمیشہ سے اصل مسئلہ تھے | low |
| `build.lead` | …the standard belongs to everyone and the Nu:Time · 刻时 Ke-Shi name stands for precision. | "…The standard belongs to everyone, and the name Nu:Time · 刻时 Ke-Shi is the **mark of correctness**." | Shift in what the name promises. "درستی" reads as correctness or accuracy (that something is right), not precision (fine-grained exactness). In a timekeeping text the two are different claims. | …اسٹینڈرڈ سب کا ہے، اور Nu:Time · 刻时 Ke-Shi کا نام باریک اور بالکل ٹھیک پیمائش کی پہچان ہے۔ | low |
| `build.items.2.text` | …MIP display, and a haptic pulse every kè. CERN-OHL-P 2.0. | "…MIP display, and a **light** vibration (haptic pulse) at every kè." | Adds a hardware detail the English does not state: that the pulse is light or gentle (ہلکی سی). | …MIP ڈسپلے، اور ہر kè پر ایک ہیپٹک پلس (تھرتھراہٹ)۔ CERN-OHL-P 2.0۔ | low |
| `heritage.items.0.text` | Night was kept in five watches, the gēng (更). | "The night was divided into five **pahars**, which in Chinese are called 更 gēng." | The claim is unchanged. But South Asian readers know پہر as the 3-hour division (four to a night, eight to a day), so "پانچ پہر" can read as a mistake. | رات پانچ حصوں (پہروں) میں بٹی ہوتی تھی، جنہیں چینی میں 更 gēng کہتے ہیں۔ | low |

## Checks with no findings

- **kè.** Written in Latin script as `kè` in all 50 places (the English has 47 `kè` and 3 `Kè`). It is never written as کے, never as `ke` or `Kè`, and it never sits next to کے, کی, کا or کہ. Its nearest neighbours are words like کو، میں، والا، والے، پر.
- **Unit names.** گونگ (9), بیٹ (9) and ٹک (11, plus "ہیپٹک" as an unrelated word) are used consistently in prose, unit labels, the `گونگ:بیٹ:ٹک` pattern and the licence text. 更 gēng is kept separate from گونگ, as in the English. Heartbeat is دھڑکن, so it cannot be confused with بیٹ.
- **Brand and legal names.** Nu:Time, Nu:Time™, Ke-Shi, 刻时, Nu-Time Inc., Nu:Time Certified, "Nu:Time compatible", Nu:Lat/Nu:Long, nu-time/v1, the licence names, `info@nu-time.com` and every `href` are unaltered.
- **Numbers, dates and units.** 1793–1795, 1916, 1940, 1972, 2019, 2026, 2027, 2030, 2035, 27 leap seconds, 86,400 seconds, all kè and degree values, the trig table and the quartz table match the English digit for digit.
- **India, Pakistan, China.** "India spans nearly two" is translated as بھارت تقریباً دو پر پھیلا ہوا ہے, the same strength. Nothing about Pakistan is added. The China standards card keeps "set out to lead" as ہدف طے کیا ہے and "for that work, and for everyone", with no hint of endorsement. The China time-zone line is neutral (see divergences).
- **"Standard" terminology.** The Nu:Time Standard is always اسٹینڈرڈ. Standards in general (standards bodies, international standards) are always معیارات. The pattern is consistent.

## Intentional divergences (acceptable)

- `meta.title`, `hero.title`, `nav.time`, `time.title`, `footer.tagline`: "reimagined" is rendered as نیا تصور ("a new concept of time and place"). Same intent, natural Urdu.
- `meta.description`, `hero.sub`, `how.cards.2.n`: 100,000 is written 1,00,000 (lakh grouping). The quartz table uses lakh/crore grouping too.
- `hero.east/west/north/south`: E/W/N/S are spelled out as مشرق/مغرب/شمال/جنوب. Urdu has no standard one-letter abbreviations.
- `hero.polarDay` / `polarNight`: "Sun up/down all day" is rendered as "the sun doesn't set / doesn't rise all day". Same meaning.
- `eliminates.heading`/`title`/`tail`: the heading becomes "Nu:Time eliminates all this:" and the list is introduced with "all the things…". This restructuring is needed for Urdu word order. The joke ("never understood anyway") is kept.
- `time.lead`: "no longer changes" is rendered as a plain "doesn't change". The English's tautological closing clause is merged.
- `time.points.0.text`: "It's a global world" becomes "today's world is interconnected".
- `time.points.1.text`: "no more two Tuesdays" becomes "no two Tuesdays in one week". The date-line joke keeps its intent.
- `time.points.2.title`: "Your place in the sun" becomes "your place under the sun". The English idiom's double meaning is lost, but the literal sense the card relies on is kept.
- `time.points.3.text`: adds "right now" (اس وقت) to where the sun is overhead. This is a neutral clarification.
- `how.cards.1.text`: "short enough for a meeting" becomes "short enough to be useful for scheduling a meeting". This settles the English's ambiguity the only sensible way, since a beat is 86.4 s.
- `geometry.lead`: "intuitive" becomes "easy to understand".
- `geometry.items.1.0` / `items.5.0`: "triangle's angles" becomes "sum of a triangle's angles", and "interior" becomes "interior angle". These are clarifications.
- `geometry.trig`: "finally share one unit with the calendar" becomes "are finally measured in the calendar's own unit".
- `heritage.lead`: "borrows their wisdom" becomes "benefits from their wisdom".
- `heritage.items.1.text`: "decimal time was just too early" becomes "decimal time just came ahead of its time". This is an idiom with the same intent.
- `why.title`: "Why now." (declarative) becomes "اب کیوں؟" (a question). This is the usual Urdu heading form, and `why.lead` gives the answer straight away.
- `why.items.1.text`: "civil time" becomes سرکاری وقت ("official time"). "Slowly" (آہستہ آہستہ) is added to "drift away from the sun", which is accurate.
- `why.items.2.text`: "China spans five time zones on one clock" becomes "China spans five **geographic** time zones and the whole country runs on one clock". The added "geographic" softens the claim and matches the brief's neutral framing. No criticism is added.
- `why.items.5.text`: "its BeiDou system" becomes "its BeiDou navigation system", and "pillars" becomes "important pillars". These are glosses, with no change in the strength of any endorsement.
- `roadmap.items.0.text`: "open-hardware reference implementation" becomes "reference device based on open hardware". The implementation is the clock, so the meaning is the same.
- `roadmap.items.3.text`: "scaled conversion" becomes بڑے پیمانے پر منتقلی ("large-scale migration"), which is close enough in a data context.
- `build.title`: "Open. Build one." becomes "Open to all. Build it yourself."
- `build.lead`: "free to use, build on and ship with" becomes three imperatives ("use them, build on them, put them in your product").
- `join.title`: "Be first." becomes "Come first."
- `join.role`: "I am a…" becomes "Who are you?". This form-label convention fits Urdu better than an unfinished sentence.
- `footer.rights`: a dash is added after "Nu-Time Inc." for readability.

## Overall verdict

The Urdu translation is faithful and in good shape. No string changes a number, a date, a unit, a brand name or a legal statement. The statements about India and China keep exactly the English strength, and the one China change ("geographic" time zones) moves toward neutrality, as the brief asks. The kè term is handled cleanly: Latin `kè` in all 50 places, never next to کے/کی/کا/کہ. گونگ, بیٹ and ٹک are fully consistent. The five flagged items are all low severity. Two are slight weakenings of the English's edge (the Spain card's "what time zones do", and leap seconds as "the" problem). One shifts "precision" toward "correctness". One adds a small hardware detail ("light" haptic pulse). One is a cultural false friend (five پہر). None would mislead a reader, and each can be fixed with a one-line edit, which can be made at the next revision.
