# Urdu (ur) — independent review

Reviewer: native Urdu editor writing for readers in India and Pakistan. This was a fresh-eyes pass against `locales/en.json` and `docs/i18n/BRIEF.md`. I did not read the translator's notes.

Overall: a good, readable translation. It uses natural modern Urdu without heavy Persianisation, keeps the آپ register throughout, keeps kè in Latin script, and never puts it in a confusing spot next to کے/کی/کا/کہ. It also handles the mixed Latin and Chinese text with care. For example, it avoids brackets around 刻 by writing "kè · 刻", and it uses پہر for the Chinese night watches, which fits well. Most changes below fall into four groups:

- right-to-left display bugs that a browser would really show (™, "Inc.", curly quotes and the √/− cells in the trig table)
- the brief's updated rules (`n` labels, lakh grouping)
- a few meaning fixes: one ambiguity and one overstatement
- some naturalness fixes

`python3 -I tests/check_locales.py ur` → `ur: ok`

Where a cell below shows only part of a string, the rest of the string is unchanged. [LRM] stands for U+200E LEFT-TO-RIGHT MARK, written as `‎` in the JSON so it is visible.

## Changes (40)

| Key | Before | After | Why |
|---|---|---|---|
| meta.title | Nu:Time™ — … | Nu:Time™[LRM] — … | In a right-to-left context the ™ between "Nu:Time" and the Urdu text is detached and drawn on the far side of the brand, so it reads "™Nu:Time". The LRM keeps it attached. It does no harm if the tab title renders left-to-right. |
| meta.description | … جو بتاتی ہے کہ کب بھی اور کہاں بھی۔ | … جو کب اور کہاں، دونوں کو ناپتی ہے۔ | The old ending was elliptical ("that tells: when too and where too"). The English says the unit *measures* both when and where. |
| hero.sub | … ٹک میں بٹا ہے۔ | … ٹک میں بٹا ہوا ہے۔ | "بٹا ہوا ہے" is the natural stative form here. "بٹا ہے" sounds clipped. |
| hero.dialHint | … سنہری سوئی ہر بیٹ میں ایک چکر — گزرتے ہوئے ٹک گنتی ہوئی۔ (and "دن بھر میں ایک چکر") | … سنہری سوئی ہر بیٹ میں ایک چکر لگاتی ہے اور گزرتے ٹک گنتی جاتی ہے۔ (and "دن میں ایک چکر") | The participle "گنتی ہوئی" was left hanging with no verb, which is ungrammatical in Urdu. "دن بھر میں" (throughout the day) is the wrong idiom for "once per day". |
| eliminates.heading | Nu:Time ختم کر دیتا ہے… | Nu:Time یہ سب ختم کر دیتا ہے: | The heading, list and closing line display in that order. In the old version the object (the list) came after the verb, which is English word order. With "یہ سب … ختم کر دیتا ہے:" the heading is a complete verb-final sentence, and the list that follows reads as its explanation. |
| eliminates.title | وہ سب چیزیں جو آپ ویسے بھی کبھی ٹھیک سے نہیں سمجھ پائے، … | وہ ساری چیزیں جو آپ ویسے بھی کبھی سمجھ نہیں پائے، … | "ٹھیک سے" (properly) softened the joke ("never understood anyway"). "ساری" avoids repeating the heading's "یہ سب" right after it. The list is unchanged. |
| eliminates.tail | … آسمان میں سورج کی جگہ۔ | … آسمان میں سورج کا مقام۔ | "Position" of the sun. This now matches "سورج کا مقام" in build.items[0]. |
| time.points[0].text | میٹنگیں، پروازیں اور مارکیٹیں، سب ایک ہی وقت پر۔ | میٹنگیں، پروازیں اور مارکیٹیں، سب کا وقت ایک ہی ہے۔ | "سب ایک ہی وقت پر" means "all at the same moment", as if every meeting and flight happened at once. The English says they all *use* the same time. |
| how.cards[2].n | 100,000 | 1,00,000 | The brief asks for local number grouping. This also matches 1,00,000 in hero.sub and meta.description. |
| ke.lead | یعنی زمین کا ایک چکر اور گھڑی کا ایک چکر ایک ہی عدد ہیں — | یوں زمین کی ایک گردش اور گھڑی کا ایک چکر، دونوں کا عدد ایک ہی ہے — | "Two turns *are* one number" is a calque. Using گردش for the Earth's turn also avoids repeating چکر. |
| ke.facts[2].n | Longitude | طول بلد | `n` labels are display text and must be translated (brief update). |
| ke.facts[2].text | طول بلد: پرائم میریڈین کے مشرق یا مغرب میں 0 تا 50 kè | پرائم میریڈین کے مشرق یا مغرب میں 0 تا 50 kè | The workaround prefix is removed because the label now carries the word. |
| ke.facts[3].n | Latitude | عرض بلد | Same as ke.facts[2].n. |
| ke.facts[3].text | عرض بلد: خط استوا کے شمال یا جنوب میں 0 تا 25 kè | خط استوا کے شمال یا جنوب میں 0 تا 25 kè | Same as ke.facts[2].text: the workaround prefix is removed. |
| geometry.lead | ڈگری بابل والوں کا انتخاب تھی۔ ریڈین ریاضی دانوں کا۔ … جیومیٹری کو سیدھا سادہ بنا دیتا ہے۔ | ڈگری بابل والوں کی پسند تھی۔ ریڈین ریاضی دانوں کی پسند ہے۔ … جیومیٹری کو سمجھنا آسان بنا دیتا ہے۔ | There were two grammar slips. "ڈگری … کا انتخاب تھی" has clashing agreement. "جیومیٹری (f.) کو سیدھا سادہ (m.)" needs feminine agreement. The English present tense for radians ("are") is restored. "Intuitive" means easy to grasp, not "plain". |
| geometry.trig | … آخرکار کیلنڈر کے ساتھ ایک ہی اکائی میں بات کرتے ہیں۔ | … آخرکار کیلنڈر والی اکائی ہی میں ناپے جاتے ہیں۔ | The English says they "share one unit". "Talk in one unit" added a metaphor that reads oddly in Urdu. |
| geometry.trigRows[1][3] | √3/2 | [LRM]√3/2 | The trig table's `td` cells are not set to left-to-right in CSS. In an RTL cell, a leading √ or − is neutral and gets drawn on the right, so "√3/2" shows as "3/2√" and "−1" as "1−". The digits are unchanged. |
| geometry.trigRows[1][4] | √3/3 | [LRM]√3/3 | Same as trigRows[1][3]. |
| geometry.trigRows[2][2] | √2/2 | [LRM]√2/2 | Same as trigRows[1][3]. |
| geometry.trigRows[2][3] | √2/2 | [LRM]√2/2 | Same as trigRows[1][3]. |
| geometry.trigRows[3][2] | √3/2 | [LRM]√3/2 | Same as trigRows[1][3]. |
| geometry.trigRows[3][4] | √3 | [LRM]√3 | Same as trigRows[1][3]. |
| geometry.trigRows[5][3] | −1 | [LRM]−1 | Same as trigRows[1][3]. |
| geometry.trigRows[6][2] | −1 | [LRM]−1 | Same as trigRows[1][3]. |
| heritage.items[0].text | … کو ان کا اصل مقام واپس دیتا ہے۔ | … کو ان کا جائز مقام واپس دلاتا ہے۔ | The English is "rightful spot", and "جائز مقام" is the idiom for that. "اصل" means "original". "واپس دلانا" (to restore to someone) fits better than "واپس دینا". |
| why.lead | وقت کی پیمائش آج … نئے سرے سے بنائی جا رہی ہے، | وقت کی پیمائش کا نظام آج … نئے سرے سے تعمیر ہو رہا ہے، | "The measurement is being built" is unidiomatic. What is being rebuilt is the *system* of measurement. |
| why.items[0].text | پیمائش کے ماہرین 2030 کے آس پاس سیکنڈ کی نئی تعریف کے روڈ میپ پر ہیں۔ | پیمائش کے ماہرین ایک روڈ میپ کے تحت 2030 کے آس پاس سیکنڈ کی نئی تعریف کی طرف بڑھ رہے ہیں۔ | "روڈ میپ پر ہیں" (they are on the roadmap) is a literal calque. The new wording keeps the same hedge: it is a plan, not a certainty. |
| why.items[1].text | اسی لیے ہم کہتے ہیں: وقت یہی ہے۔ | اسی سے ہم جانتے ہیں کہ اب وقت آ گیا ہے۔ | The English line ("That's how we know the time is now") is a callback to why.lead's "It's time", which is "اب وقت آ گیا ہے" in Urdu. The callback was lost, and "وقت یہی ہے" ("this is the time") is vague. |
| why.items[2].text | چین پانچ ٹائم زون پر پھیلا ہوا ہے مگر ایک ہی گھڑی پر چلتا ہے۔ بھارت تقریباً دو پر پھیلا ہے۔ اسپین پورے ایک گھنٹے کھسکا ہوا ہے۔ | چین پانچ جغرافیائی ٹائم زون پر پھیلا ہوا ہے اور پورا ملک ایک ہی گھڑی پر چلتا ہے۔ بھارت تقریباً دو پر پھیلا ہوا ہے۔ اسپین کا وقت پورے ایک گھنٹے کھسکا ہوا ہے۔ | Neutrality: "مگر" (but) added an implied criticism that is not in the English, so it is now a neutral "اور". "جغرافیائی" makes it accurate: China has one legal time zone and spans about five geographic ones. It is Spain's *time* that is shifted, not Spain itself. |
| build.lead | … کا نام درستی کی ضمانت ہے۔ | … کا نام درستی کی پہچان ہے۔ | Overstatement: "ضمانت" means a guarantee (a near-legal promise). The English says the name "stands for" precision, so "پہچان" (hallmark) is the right strength. |
| build.quartz[0][1] | 2,985,984 | 29,85,984 | The brief asks for local grouping in tables too. The digits are unchanged. See the human decisions below. |
| build.quartz[2][1] | 864,000 | 8,64,000 | Same as build.quartz[0][1]. |
| build.quartz[3][1] | 8,640,000 | 86,40,000 | Same as build.quartz[0][1]. |
| build.quartz[4][1] | 13,824,000 | 1,38,24,000 | Same as build.quartz[0][1]. |
| build.cert | انہیں “Nu:Time compatible” کہہ | انہیں "Nu:Time compatible" کہہ | Curly quotes around Latin text inside RTL text come out visually swapped (” … “). Straight quotes are symmetric and cannot be reordered wrongly. |
| build.license | 刻时™ اور … Nu-Time Inc. کے | 刻时™[LRM] اور … Nu-Time Inc.[LRM] کے | Without the LRM, the ™ jumps to the start of the brand run ("™Nu:Time™، Ke-Shi™، 刻时"). The full stop of "Inc." also detaches and shows as ".Nu-Time Inc". |
| footer.rights | Ke-Shi™ اور 刻时™، Nu-Time Inc. کے | Ke-Shi™[LRM] اور 刻时™، Nu-Time Inc.[LRM] کے | Same bidi problem as build.license, and the same fix. |
| cities.Bangkok | بینکاک | بنکاک | Standard Urdu spelling, as used by the Pakistani press and Urdu Wikipedia. |
| cities.Bogota | بوگوٹا | بوگوتا | The standard Urdu exonym, which follows the Spanish soft t. |
| cities.Seattle | سیئٹل | سیاٹل | The usual Urdu spelling. |

## Checked and left unchanged

- **kè**: it is in Latin script everywhere, and it is never right next to کے/کی/کا/کہ. A script check found no "kè کے" etc. ("刻 kè کو" and "kè کوآرڈینیٹس" are fine.)
- **Units**: گونگ / بیٹ / ٹک are consistent, and their plurals correctly stay the same as the singular. Prose patterns use local names (گونگ:بیٹ:ٹک). The clock readout's label row is `direction: ltr` in CSS, so it lines up with the digits.
- **Compass words** (hero.east and the others): the full words مشرق/مغرب/شمال/جنوب are right for Urdu, because there are no standard Urdu one-letter abbreviations.
- **China standards card** (why.items[5]): it is factual and in proportion. It says Ke-Shi is offered *to* that work, not endorsed by it. I left it as it was.
- **India and China mentions**: بھارت is the neutral name in both countries. The cities list gives Delhi, Mumbai and Karachi standard spellings.
- The Spain card is factual, not mocking.

## For a human decision

1. **Trig table: fix it in CSS rather than with LRMs.** The cleaner fix is to add `direction: ltr; unicode-bidi: isolate;` to `.trigtbl td` (or to `[dir="rtl"] .trigtbl td`) in `public/assets/site.css`. I was asked to edit only `ur.json`, so I put LRMs into the eight cells. If the CSS is fixed, the LRMs can stay; they do no harm. The same applies to the ™/Inc. LRMs in the license and footer: wrapping brand names in `<bdi>` in `build.mjs` would be the markup-level fix.
2. **Lakh grouping in the quartz table** (29,85,984 / 1,38,24,000). I applied it because the brief asks for local conventions in tables too, and the translator already used 1,00,000. Indian and Pakistani general readers expect this. Some engineers may prefer international grouping in a frequency table, so please confirm.
3. **"جغرافیائی" (geographic) added to the China time-zone line.** This is a precision clarification, not a new claim, and it matches the brief's zh guidance. Please confirm it is acceptable for the ur page.
4. **Check in a browser (RTL):**
   - Letter-spacing on Urdu: `.cards4 .unit` and `.tbl thead th` use `letter-spacing: .14em` (and uppercase). In some browsers letter-spacing breaks the joins between Urdu letters, which affects "گونگ · 更" and the table headers. Consider `[dir="rtl"] … { letter-spacing: 0 }`.
   - Latitude/longitude readout: `.posrow dd` is `direction: ltr`, so it shows "12.3 kè شمال" laid out left-to-right. An Urdu reader sees "شمال" on the right first. It is readable, but check whether it looks right.
   - how.cards[3].unit "kè · 刻": it runs left-to-right because both parts are Latin/Han, while the other three cards show the Urdu name on the right and the Chinese on the left. This is cosmetic.
   - The ™ and "Inc." positions in the footer and license after the LRM fix, and the browser tab title.
   - The font: check that the Urdu font (Nastaliq or Naskh) renders well at heading sizes with `line-height: 2`.
5. **"Nu:Time compatible"** is kept in English inside the Urdu sentence (build.cert), as a phrase builders may use. If an Urdu form is wanted, "Nu:Time ہم آہنگ" would work.
6. **why.items[5].title**: "دنیا کے اگلے معیارات 2035 میں نئے سرے سے لکھے جا رہے ہیں" faithfully mirrors an odd English tense: "are being re-written *in* 2035". If the English changes (for example to "by 2035"), the Urdu should change too.
7. **BeiDou**: the spelling بیدو is in common use. Some outlets write بائیدو. The translator also added "نیویگیشن" (navigation), which is a harmless clarification.
