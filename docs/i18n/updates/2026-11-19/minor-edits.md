# Review: geometry.lead, build.items[1].text, heritage.title (10 languages)

Reviewer changes are listed under the item. Changes the translator made relative to the mechanical draft were checked and are accepted unless noted.

## zh
1. geometry.lead: "Degree system is the Babylonians' choice, radian system is mathematicians' choice. 100 kè make one full circle, speaking the same language as your watch and your map — geometry therefore also becomes more intuitive."
2. build: "Out-of-the-box conversions: UTC and 刻时 Nu:Time, degrees and kè (including latitude and longitude) — all come with shared test vectors. MIT or Apache 2.0 licence."
3. heritage.title: "Not a new idea. We completed it."

Verdict: accepted as delivered. （含经纬度） correctly attaches lat/long to the degrees↔kè pair; full-width punctuation kept.

## ja
1. geometry.lead: "Degrees: Babylonia's choice. Radians: the mathematician's choice. The 100 kè circle speaks the same language as your watch and map, and makes geometry more intuitive." (です・ます kept)
2. build: "UTC and Nu:Time, degrees and kè, including latitude and longitude too, converted with functions you can drop straight in. All with shared test vectors. MIT or Apache 2.0."
3. heritage.title: "Not a new idea. We completed it."

Verdict: accepted as delivered. 私たちはそれを完成させた is the standard copy pattern ("…。私たちはそれを実現した。") and avoids the cleft emphasis of the old 完成させたのは私たち; plain form matches the other short headings.

## hi
1. geometry.lead: "Degrees are Babylon's gift. Radians, the mathematicians' choice. The 100 kè circle speaks the same language your watch and your map speak — and makes geometry more intuitive."
2. build: "Directly usable conversions between UTC and Nu:Time, kè and degrees, also for latitude and longitude — all with shared test vectors. MIT or Apache 2.0."
3. heritage.title: "The idea is not new. We completed it."

Verdict: accepted as delivered. ज़्यादा avoids "— और … और"; uses the same nukta encoding (ज + ़) as hi.json. kè is never directly before के (word order "kè और डिग्री के बीच" kept from live).

## ur
1. geometry.lead: "Degrees were the Babylonians' choice. Radians are the mathematicians' choice. The 100 kè circle speaks the same language your watch and your map speak — and makes understanding geometry even easier."
2. build: "Between UTC and Nu:Time, kè and degrees, and also for latitude and longitude, straightforward conversion, ready for immediate use — all with shared test vectors. MIT or Apache 2.0." (unchanged live text)
3. heritage.title: "The idea is not new. We completed it."

Verdict: accepted as delivered. نیز … کے لیے ("also for") cannot be read as lat→long conversion; same "also for" strategy as es/de/it/pt/hi.

## es
1. geometry.lead: "Degrees were Babylon's thing. Radians, the mathematicians'. The 100 kè circle speaks the same language as your watch and your map, and makes geometry more intuitive."
2. build: "Ready-to-use conversions between UTC and Nu:Time and between degrees and kè, also for latitude and longitude, all with shared test vectors. MIT or Apache 2.0." (unchanged live text)
3. heritage.title: "It is not a new idea. We completed it."

Verdict: accepted as delivered.

## pt
1. geometry.lead: "Degrees were Babylon's choice. Radians, the mathematicians'. The 100 kè circle speaks the same language as your watch and your map — and makes geometry more intuitive."
2. build: "Ready-to-use conversions between UTC and Nu:Time and between degrees and kè, also for latitude and longitude — all with shared test vectors. MIT or Apache 2.0." (unchanged live text)
3. heritage.title: "It is not a new idea. We completed it."

Verdict: accepted as delivered.

## fr
1. geometry.lead: "Degrees, that was Babylon's choice. Radians, the mathematicians'. The 100 kè circle speaks the same language as your watch and your map — and makes geometry more intuitive." (narrow NBSP in 100 kè and curly apostrophe kept)
2. build: "Ready-to-use conversions between UTC and Nu:Time and between degrees and kè, latitude and longitude included — all with shared test vectors. MIT or Apache 2.0." (unchanged live text)
3. heritage.title: "Not a new idea. We carried it through to completion."

Verdict: accepted as delivered; typography correct.

## de
1. geometry.lead: "Babylon chose degree measure, mathematics chose radian measure. The 100-kè circle speaks the same language as your (du) watch and your map – and makes geometry more intuitive."
2. build: "Ready-to-use conversions between UTC and Nu:Time and between degrees and kè, also for geographic latitude and longitude – all with shared test vectors. MIT or Apache 2.0." (unchanged live text)
3. heritage.title: "No new idea. We thought it through to the end."

Verdict: accepted as delivered. Note: "zu Ende gedacht" (thought through to the end) was already the reviewed live wording; it is idiomatic for a standard, slightly more conceptual than "finished". Left as is.

## it
1. geometry.lead: "Degrees were a choice of Babylon. Radians, that of mathematicians. The 100 kè circle speaks the same language as your watch and your map, and makes geometry more intuitive."
2. build: "Ready-to-use conversions between UTC and Nu:Time and between degrees and kè, also for latitude and longitude — all with shared test vectors. MIT or Apache 2.0." (unchanged live text)
3. heritage.title: "It is not a new idea. We brought it to completion."

Verdict: accepted as delivered (straight apostrophes match it.json).

## ru
1. geometry.lead: "Babylon chose degrees. Radians are the mathematicians' choice. The 100 kè circle speaks one language with your (вы) watch and map — and makes geometry more intuitively understandable."
2. build: "Ready-made conversions between UTC and Nu:Time and between degrees and kè, including for latitude and longitude — all with shared test vectors. MIT or Apache 2.0."
   - Changed: `…широты и долготы — все…` → `…широты и долготы — все…` (NBSP before the em dash)
   - Why: the translator's rewrite dropped the non-breaking space the live text (and all of ru.json) uses before "—", so the dash could wrap to the start of a line.
3. heritage.title: "The idea is not new. We brought it to the end."

Verdict: wording accepted; one typography fix.
