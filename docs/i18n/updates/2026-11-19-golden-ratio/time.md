# "moment" -> "time" review: eliminates.tail and heritage.lead

Scope check: `git diff` on locales/ shows only these two keys changed per file (zh: lead only). Each change swaps the "moment" word and nothing else. Every file parses as valid JSON.

Result: 18 of 20 strings pass. 2 need a fix (hi lead, ur lead). The cause in both is the same: after the swap, "एक ही समय पर" / "ایک ہی وقت پر" reads first as the fixed phrase "at the same time (simultaneously)". The sentence then means "a world that can agree all at once", not "a world that can agree on one shared time".

---

## zh

**tail**: 同时留住真正要紧的——你所处的此时此地，以及太阳在天空中的位置。
Back-translation: "At the same time it keeps what truly matters: the here-and-now you are in (literally 'this time, this place'), and the sun's position in the sky."
Verdict: **pass**. 此时此地 is still the best choice. It keeps both halves of "time and place" (时 = time, 地 = place) in a fixed, natural idiom. A literal 你所在的时间和地点 would be flatter and would add nothing. 此时 is read as "the present time", which fits the local clock reading.

**lead**: 历史上，许多伟大的文明都试过把一天分得更合理。刻时 Nu:Time 借鉴了它们的智慧，又补上了它们都不曾拥有的一样东西：全世界对同一个时间的共识——无论你身在何处——而把整个地球连在一起的，是大自然的几何。
Back-translation: "...and adds the one thing none of them had: the whole world's consensus on one and the same time, wherever you are; and what binds the whole planet together is the geometry of nature."
Verdict: **pass**. 对同一个时间的共识 is clear and natural. Removing the quotation marks around the old 此刻 is fine. The phrase is a noun, so it does not slip into the adverb 同一时间 ("simultaneously").

## ja

**tail**: その一方で、大切なものは残します。いまの時刻と、あなたのいる場所、そして空に浮かぶ太陽の位置です。
Back-translation: "Meanwhile, it keeps what matters: the current time (of day), the place where you are, and the position of the sun in the sky."
Verdict: **pass**. 時刻 is exactly "clock time", and いまの時刻 is natural.

**lead**: 偉大な文明は昔から、1日をもっと合理的に分けようとしてきました。Nu:Timeはその知恵を受け継ぎ、どの文明も持たなかったものを加えます。それは、どこにいても同じ時刻を共有でき、自然の幾何学で結ばれた地球です。
Back-translation: "...It adds what no civilization had: a planet where you can share the same time wherever you are, bound by the geometry of nature."
Verdict: **pass**. 同じ時刻を共有でき is natural. "Share" stands in for "agree on", as before the edit.

## hi

**tail**: और बनाए रखता है वह सब जो मायने रखता है — वह समय और वह जगह जहाँ आप हैं, साथ ही आसमान में सूरज की स्थिति।
Back-translation: "And keeps everything that matters: that time and that place where you are, along with the sun's position in the sky."
Verdict: **pass**. समय is masculine, so वह agrees. Using जहाँ for both nouns is the same light stretch as the English.

**lead**: ...एक ऐसी दुनिया जो एक ही समय पर सहमत हो सके — चाहे आप कहीं भी हों — और जो प्रकृति की ज्यामिति से बँधी हो।
Back-translation: "...a world that can agree **at the same time** (or: agree on one same time), wherever you are, and that is bound by the geometry of nature."
Verdict: **fix**. एक ही समय पर is a set phrase for "simultaneously", so the first reading is "a world that can agree all at once". The fix is "को लेकर सहमत" ("agree regarding"), which is idiomatic and removes that reading.
Corrected: महान सभ्यताएँ लंबे समय से दिन को ज़्यादा समझदारी से बाँटने की कोशिश करती रही हैं। Nu:Time उनकी समझ को अपनाता है और वह जोड़ता है जो उनमें से किसी के पास नहीं था: एक ऐसी दुनिया जो एक ही समय को लेकर सहमत हो सके — चाहे आप कहीं भी हों — और जो प्रकृति की ज्यामिति से बँधी हो।
Back-translation: "...a world that can agree on one and the same time, wherever you are..."

## ur

**tail**: اور وہ سب باقی رکھتا ہے جو اہم ہے — وہ وقت اور وہ جگہ جہاں آپ ہیں، اور ساتھ ہی آسمان میں سورج کا مقام۔
Back-translation: "And keeps all that matters: that time and that place where you are, and also the sun's position in the sky."
Verdict: **pass**.

**lead**: ...ایک ایسی دنیا جو ایک ہی وقت پر متفق ہو سکے — چاہے آپ کہیں بھی ہوں — اور فطرت کی جیومیٹری سے بندھی ہو۔
Back-translation: "...a world that can agree **at the same time** (or: on one same time), wherever you are, and bound by nature's geometry."
Verdict: **fix**. This is the same problem as in Hindi: ایک ہی وقت پر is the stock phrase for "simultaneously". کے بارے میں متفق ("agree about") removes that reading. In Urdu, کے بارے میں does not carry the English "approximately" sense of "about".
Corrected: بڑی تہذیبیں مدتوں سے دن کو زیادہ سمجھ داری سے بانٹنے کی کوشش کرتی رہی ہیں۔ Nu:Time ان کی دانائی سے فائدہ اٹھاتا ہے اور وہ چیز جوڑتا ہے جو ان میں سے کسی کے پاس نہیں تھی: ایک ایسی دنیا جو ایک ہی وقت کے بارے میں متفق ہو سکے — چاہے آپ کہیں بھی ہوں — اور فطرت کی جیومیٹری سے بندھی ہو۔
Back-translation: "...a world that can agree on one and the same time, wherever you are..."

## es

**tail**: Y conserva lo que importa: la hora y el lugar en que estás, junto con la posición del sol en el cielo.
Back-translation: "And it keeps what matters: the time (of day) and the place you're in, along with the sun's position in the sky."
Verdict: **pass**. Article agreement is correct (la hora). "hora" is the right word: "tiempo" would suggest weather or duration.

**lead**: ...un planeta capaz de ponerse de acuerdo sobre una misma hora, estés donde estés, y unido por la geometría de la naturaleza.
Back-translation: "...a planet able to agree on one same time, wherever you are, and united by the geometry of nature."
Verdict: **pass**. "una misma hora" agrees in gender and reads naturally. "estés donde estés" makes clear this means one worldwide clock time, not a meeting hour.

## pt

**tail**: E mantém o que importa — a hora e o lugar em que você está, junto com a posição do sol no céu.
Back-translation: "And it keeps what matters: the time and the place you're in, along with the sun's position in the sky."
Verdict: **pass**. Agreement is correct. ("horário" would also work in Brazilian Portuguese, but "hora" is natural and matches es/it.)

**lead**: ...um planeta inteiro capaz de concordar sobre a mesma hora — não importa onde você esteja — e unido pela geometria da natureza.
Back-translation: "...a whole planet able to agree on the same time, no matter where you are, and united by the geometry of nature."
Verdict: **pass**. "sobre a mesma hora" does not trigger the idiom "na mesma hora" ("right away").

## fr

**tail**: Tout en gardant ce qui compte — l’heure et le lieu où vous êtes, ainsi que la position du Soleil dans le ciel.
Back-translation: "While keeping what counts: the time and the place where you are, as well as the position of the Sun in the sky."
Verdict: **pass**.

**lead**: ...une planète capable de s’accorder sur la même heure — où que vous soyez — et unie par la géométrie de la nature.
Back-translation: "...a planet able to agree on the same time, wherever you are, and united by the geometry of nature."
Verdict: **pass**. "la même heure" agrees in gender and is idiomatic.

## de

**tail**: Und behält, was wirklich zählt – die Zeit und den Ort, an dem du bist, und dazu den Stand der Sonne am Himmel.
Back-translation: "And keeps what really counts: the time and the place where you are, plus the sun's position in the sky."
Verdict: **pass**. "die Zeit" is correct in the accusative feminine. The pairing "Zeit und Ort" is idiomatic. "Uhrzeit" would be more literal but stiffer; "Zeit" fits the site's "Nu:Time" framing.

**lead**: ...einen Planeten, der sich auf dieselbe Zeit einigen kann – egal, wo du bist –, verbunden durch die Geometrie der Natur.
Back-translation: "...a planet that can agree on the same time, no matter where you are, connected by the geometry of nature."
Verdict: **pass**. "dieselbe" is correctly feminine after "auf".

## it

**tail**: E tiene ciò che conta davvero — l'ora e il luogo in cui ti trovi, insieme alla posizione del sole nel cielo.
Back-translation: "And it keeps what really counts: the time and the place you're in, along with the sun's position in the sky."
Verdict: **pass**.

**lead**: ...un intero pianeta d'accordo sulla stessa ora — ovunque tu sia — unito dalla geometria della natura.
Back-translation: "...a whole planet in agreement on the same time, wherever you are, united by the geometry of nature."
Verdict: **pass**. The contraction changes correctly (sullo stesso → sulla stessa).

## ru

**tail**: При этом оставляет то, что важно, — время и место, где вы сейчас, а также положение Солнца на небе.
Back-translation: "At the same time it keeps what matters: the time and the place where you are now, as well as the position of the Sun in the sky."
Verdict: **pass**.

**lead**: ...целую планету, которая может договориться о едином времени — где бы вы ни находились, — и которую объединяет геометрия природы.
Back-translation: "...a whole planet that can agree on a single (unified) time, wherever you are, and which is united by the geometry of nature."
Verdict: **pass**. "о едином времени" is in the correct prepositional case, and «единое время» is the standard term for a unified time.
