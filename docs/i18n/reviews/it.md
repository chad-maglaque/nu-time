# Italian (it) — independent review

Reviewer: native Italian editor, fresh-eyes pass against `locales/en.json` and `docs/i18n/BRIEF.md`. Translator notes not read.
Overall: a strong translation. It reads as natural Italian, uses *tu* throughout, renders unit plurals correctly as invariable (i gong, i beat, i tic) and uses standard city exonyms. Most of the changes below are mechanical fixes required by the updated brief (number formats, the unit pattern in prose, `n` labels). A few are naturalness or accuracy fixes.

`python3 -I tests/check_locales.py it` → `it: ok`

## Changes (27)

| Key | Before | After | Why |
|---|---|---|---|
| eliminates.title | tutto quello che, diciamolo, non hai mai capito fino in fondo: le 24 ore, … | tutte quelle cose che, diciamolo, non hai mai capito: le 24 ore, … | "fino in fondo" softened the joke ("never understood anyway"). Kept "diciamolo", which carries the "anyway" tone. |
| time.points[0].text | Il mondo è globale. … | Viviamo in un mondo globale. … | "Il mondo è globale" is a calque of "It's a global world" and sounds tautological. |
| how.lead | … allo stesso modo: gong:beat:tick. | … allo stesso modo: gong:beat:tic. | The brief now asks for local unit names in prose patterns (tick → tic). |
| how.cards[1].n | 1,000 | 1.000 | Italian thousands separator. |
| how.cards[2].n | 100,000 | 100.000 | Italian thousands separator. |
| ke.lead | Un giorno intero misura 100 kè. … hanno lo stesso numero — … | Un giorno intero dura 100 kè. … si esprimono con lo stesso numero — … | A day "dura", it doesn't "misura". "Hanno lo stesso numero" is a calque. |
| ke.facts[2].n | Longitude | Longitudine | `n` labels are display text (brief update). |
| ke.facts[3].n | Latitude | Latitudine | Same. |
| geometry.items[3][1] | 16.67 kè | 16,67 kè | Italian decimal comma. |
| geometry.items[4][1] | 8.33 kè | 8,33 kè | Italian decimal comma. |
| geometry.trig | … ha un periodo di esattamente 100 kè. … condividono finalmente un'unica unità con il calendario. | … ha un periodo esatto di 100 kè. … condividono finalmente la stessa unità del calendario. | "Di esattamente" is awkward English word order. The second sentence is smoother. |
| geometry.trigRows[1][0] | 8.33 kè | 8,33 kè | Italian decimal comma. |
| geometry.trigRows[2][0] | 12.5 kè | 12,5 kè | Italian decimal comma. |
| geometry.trigRows[3][0] | 16.67 kè | 16,67 kè | Italian decimal comma. |
| heritage.lead | Da sempre le grandi civiltà … | Da secoli le grandi civiltà … | "Da sempre" ("always") overstated "have long tried". |
| heritage.items[0].text | La notte era scandita in cinque veglie … | La notte era divisa in cinque veglie … | "Scandita in" is not idiomatic ("scandita da" / "divisa in"). |
| why.items[2].text | … su cinque fusi orari con un solo orologio. … | … su cinque fusi orari con un'unica ora. … | "Un solo orologio" is a literal rendering of "one clock". Italian speaks of "un'unica ora" (one official time). |
| why.items[3].text | … un miliardo di persone si sconvolge il sonno … | … un miliardo di persone si rovina il sonno … | "Si sconvolge il sonno" is unidiomatic. "Rovinarsi il sonno" is the natural phrase for "break their sleep". |
| build.quartz[0][0] | 3.456 MHz | 3,456 MHz | In Italian "3.456" reads as three thousand four hundred fifty-six, so this was a real misreading risk. |
| build.quartz[0][1] | 2,985,984 | 2.985.984 | Italian thousands separator. |
| build.quartz[1][0] | 32.768 kHz | 32,768 kHz | Same misreading risk as 3.456 MHz. |
| build.quartz[1][1] | 28,311.552 | 28.311,552 | Italian separators. |
| build.quartz[1][2] | Accumulatore di fase (28,311 / 28,312) | Accumulatore di fase (28.311 / 28.312) | In Italian, "28,311" reads as about 28.3. |
| build.quartz[2][1] | 864,000 | 864.000 | Italian thousands separator. |
| build.quartz[3][1] | 8,640,000 | 8.640.000 | Italian thousands separator. |
| build.quartz[4][1] | 13,824,000 | 13.824.000 | Italian thousands separator. |
| build.license | … Impegno a concedere i brevetti senza royalty … | … Impegno a concedere in licenza i brevetti senza royalty … | "Concedere i brevetti" suggests handing over the patents. A royalty-free pledge licenses them. |

## For a human decision

1. **why.items[5].title**: the English says "being re-written **in** 2035", and the Italian says "**entro** il 2035" (by 2035). This is probably the right reading if it refers to China Standards 2035, and "nel 2035" with a present tense reads oddly in Italian. Left as is, but the source wording is itself ambiguous and worth checking.
2. **why.items[5].text**: "National Time Service Center" is kept in English. An Italian reader would accept it, but "Centro nazionale per il servizio del tempo (NTSC)" is an option if a fully Italian page is preferred.
3. **trig notation**: "sin" and "tan" are kept. Italian schools often write "sen" and "tg". Both are understood, and "sin/tan" matches calculators and code. Keep unless the team wants a school-style feel.
4. **Unit names in the readout**: "tic" in the clock readout and prose follows the glossary. Note that "tic" in Italian also means a nervous tic. It is harmless and fits the clock's tick-tock, but it is worth knowing.
5. **join.role**: "I am a…" is rendered as the label "Profilo", and the roles as fields ("Sviluppo software", "Ricerca / università"…). This is a good gender-neutral solution, but it departs in form from the English, so confirm it is acceptable.
