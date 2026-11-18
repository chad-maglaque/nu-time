# Back-translation drift check: Italian (`locales/it.json`)

Method: every string in `it.json` was back-translated into literal English first, then compared with `en.json` string by string. Keys, array lengths and digit sequences were also checked programmatically (they all match; the only digit difference is `heritage.items[0].era`, where "17th c." becomes "XVII sec.", which is fine).

## Flagged items

| Key | English source | Back-translation | Problem | Suggested fix (Italian) | Severity |
|---|---|---|---|---|---|
| `why.items[0].title` | The second is being redefined | The second is about to be redefined | "Sta per" (is about to) makes the redefinition sound imminent. The English describes a process that is under way, with the text giving a target of about 2030. The claim is slightly stronger than the source. | Il secondo verrà ridefinito *or* Si sta ridefinendo il secondo | low |
| `why.items[5].title` | The world's next standards are being re-written in 2035 | Tomorrow's world standards are being rewritten by 2035 | The date preposition changes from "in 2035" to "by 2035" ("entro"). The year is the same, but the timeframe is different. The English is unclear itself: it most likely refers to the China Standards 2035 plan, so "by" is a reasonable reading. Make sure the source author agrees with it. | Keep as is if "by 2035" is what's meant; otherwise: Gli standard mondiali di domani si riscrivono nel 2035 | low |

No high or medium items.

## Overall verdict

The Italian translation is faithful. Every claim, number, date, unit and licence name matches the English. Brand strings (`Nu:Time`, `Nu:Time™`, `Ke-Shi`, `刻时`) and the glossary units (gong, kè, beat, tic) are unchanged. The units are used consistently and stay invariable in the plural throughout, and `gong:beat:tic` is applied correctly in prose. The jokes and idioms keep their intent: "diciamolo, non hai mai capito" for "you never understood anyway", "niente più due martedì di fila", "ha perso la partita", and "Ecco perché sappiamo che il momento è adesso". Several places are clearer than the source without adding claims: the "Straight line · triangle's angles" row becomes "Angolo piatto · somma degli angoli di un triangolo", and the redundant clause at the end of `time.lead` is dropped. The Spain card stays factual, and the China standards card says "uno standard aperto per questo lavoro" without implying endorsement. Only two low-severity wording points came up, both about how strong or what timeframe a claim has in the "Why now" section. Neither needs to block release.
