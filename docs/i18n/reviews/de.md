# German (de) review

Independent fresh-eyes review of `locales/de.json` against `locales/en.json` and `docs/i18n/BRIEF.md`. Translator notes were not read. 31 strings changed; `python3 -I tests/check_locales.py de` prints `de: ok`.

Overall the translation is good: idiomatic, consistent du-register, correct glossary (der Gong, das Kè, der Beat, der Tick), correct exonyms in `cities`. The problems were mainly English number formats left in place, which is a real error in two quartz cells, plus a few phrases that read as translated.

## Changes

| Key | Before | After | Why |
|---|---|---|---|
| `build.quartz[0][0]` | 3.456 MHz | 3,456 MHz | In German, "3.456" reads as three thousand four hundred fifty-six. This was a factual error (3456 MHz instead of 3.456 MHz). |
| `build.quartz[1][0]` | 32.768 kHz | 32,768 kHz | Same problem: it read as 32 768 kHz. |
| `build.quartz[0][1]` | 2,985,984 | 2.985.984 | German thousands separator (brief: local number format in tables). |
| `build.quartz[1][1]` | 28,311.552 | 28.311,552 | German thousands and decimal separators. |
| `build.quartz[1][2]` | Phasenakkumulator (28,311 / 28,312) | Phasenakkumulator (28.311 / 28.312) | Thousands separator. "28,311" read as 28.3. |
| `build.quartz[2][1]` | 864,000 | 864.000 | Thousands separator. |
| `build.quartz[3][1]` | 8,640,000 | 8.640.000 | Thousands separator. |
| `build.quartz[4][1]` | 13,824,000 | 13.824.000 | Thousands separator. |
| `how.cards[1].n` | 1,000 | 1.000 | `n` card numbers use the German format. "1,000" read as one. |
| `how.cards[2].n` | 100,000 | 100.000 | Same. "100,000" read as one hundred. |
| `geometry.items[3][1]` | 16.67 Kè | 16,67 Kè | German decimal comma. |
| `geometry.items[4][1]` | 8.33 Kè | 8,33 Kè | German decimal comma. |
| `geometry.trigRows[1][0]` | 8.33 Kè | 8,33 Kè | German decimal comma. |
| `geometry.trigRows[2][0]` | 12.5 Kè | 12,5 Kè | German decimal comma. |
| `geometry.trigRows[3][0]` | 16.67 Kè | 16,67 Kè | German decimal comma. |
| `ke.facts[0].n` | 1 kè | 1 Kè | Display label. The glossary capitalises the noun: das Kè. |
| `ke.facts[1].n` | 1 kè | 1 Kè | Same. |
| `ke.facts[2].n` | Longitude | Länge | This was left in English. "Länge" (geografische Länge) is the correct term. "Längengrad" literally means a *degree* of longitude, which contradicts a value given in kè. Matches "Breite/Länge" in `build.items[1]`. |
| `ke.facts[3].n` | Latitude | Breite | This was left in English. Same reasoning as Länge. |
| `hero.latitude` | Breitengrad | Breite | The value displayed is in kè (e.g. "11,1 kè N"), so the label "Breiten*grad*" contradicted it. Now consistent with ke.facts and build. |
| `hero.longitude` | Längengrad | Länge | Same. |
| `how.lead` | … Jede Anzeige liest sich gleich – gong:beat:tick. | … Jede Anzeige folgt demselben Muster: Gong:Beat:Tick. | The brief requires German unit names in the prose pattern. Also, "liest sich gleich" means "reads similarly (stylistically)", not "uses the same format". |
| `eliminates.heading` | Nu:Time schafft ab. | Nu:Time macht Schluss. | The heading runs on into the next line ("… alles, was du …"). With a separable verb this gives the ungrammatical order "schafft ab alles". "macht Schluss mit allem …" is correct German, keeps the bold tone, and adds a light wink at "Schluss machen" (to break up). |
| `eliminates.title` | alles, was du ohnehin nie verstanden hast: … und die Datumsgrenze! | mit allem, was du ohnehin nie verstanden hast: … und der Datumsgrenze! | Follows from the new heading ("Schluss machen mit" takes the dative). The `tail` ("und behält nur, was wirklich zählt …") still connects correctly. |
| `hero.dialHint` | Das Zifferblatt einer Nu:Time-Uhr dreht sich je nach Standort mit und bleibt … | Das Zifferblatt einer Nu:Time-Uhr richtet sich nach deinem Standort aus und bleibt … | "dreht sich … mit" ("turns along with") is unclear. The face is *oriented* by location, and "richtet sich aus" says exactly that. |
| `how.cards[0].text` | … länger als eine klassische Stunde … | … länger als eine herkömmliche Stunde … | "traditional hour" is "herkömmliche Stunde". "klassisch" sounds like a style label. |
| `how.cards[1].text` | … lang genug, um damit zu planen, kurz genug für jeden Termin. | … lang genug, um ins Gewicht zu fallen, fein genug für die Terminplanung. | "kurz genug für jeden Termin" reads as "short enough to fit any appointment", which makes no sense. The new text restores "meaningful" and the scheduling-precision point. |
| `heritage.items[0].text` | … dasselbe Kè, das im Herzen von Nu:Time steht. | … dasselbe Kè, das im Mittelpunkt von Nu:Time steht. | "im Herzen … steht" is a calque of "at the heart of". "im Mittelpunkt stehen" is the idiomatic German. |
| `why.items[0].text` | Die Metrologie steuert darauf zu, die Sekunde um 2030 neu zu definieren. Wird das Fundament erneuert, kann auch die Fassade neu werden. | Nach dem Fahrplan der Metrologie soll die Sekunde um 2030 neu definiert werden. Wird das Fundament ersetzt, kann die Fassade gleich mit. | "Roadmap" is "Fahrplan" in German. "steuert darauf zu" was vague. "neu werden" was flat, and "erneuert" softened "replaced". The new closing line is punchier and keeps the meaning. |
| `why.items[1].text` | … Darum ist jetzt der richtige Moment. | … Darum wissen wir: Die Zeit ist reif. | The English closes with a pun ("the time is now"). "Die Zeit ist reif" is the natural German idiom and keeps the play on *Zeit*. |
| `roadmap.items[3].when` | 2035 und danach | Ab 2035 | This is the usual German for "2035 and beyond" in a timeline label. It is shorter too. |

## Needs a human decision

1. **`nav.build` = "Entwicklung"**: this nav and footer link points to the developer section. "Entwicklung" is gender-neutral, but it is ambiguous (it can mean "progress"), and the same page says "Zur Entwicklerdoku" (`build.items[1].link`). Options: keep it, use "Für Entwickler", or use "Developer" (common in German tech). Related: `join.roles` avoids masculine generics throughout ("Softwareentwicklung", "Forschung / Wissenschaft"…). Decide on a site-wide policy on gender-inclusive language (generic masculine, neutral nouns, or :innen) and apply it consistently.
2. **"Weltzeit" for "universal (Nu:)Time"** (`hero.clockLabel`, `hero.dayBar`, `time.points[2–3]`): in German, "Weltzeit" is strongly associated with UTC/GMT. It is unambiguous where it says "Nu:Time-Weltzeit". In `time.points[2]` ("Die Weltzeit bleibt trotzdem dieselbe") a reader could take it as UTC. I left it as is. An alternative is "Nu:Time" or "die gemeinsame Zeit".
3. **`eliminates.heading` tone**: "Nu:Time macht Schluss." carries a mild break-up pun. I think it fits "slightly bold", but the brand owner should agree. A neutral option is "Nu:Time beseitigt." (grammatical, but stiff).
4. **"National Time Service Center"** (`why.items[5]`) is left in English. German media use the English name or "Nationales Zeitdienstzentrum (NTSC)". Pick one. Either way, the claim strength matches the English.
5. **Out of scope, but visible to German readers**: the footer link "Privacy" is hard-coded in English in `build.mjs`, not in the locale file. It should become "Datenschutz".
6. **Minor, left unchanged**: `why.items[1]` adds "langsam" (civil time drifts *slowly*), which is accurate but not in the source. `eliminates.title` keeps "AM und PM", which German readers rarely use; it still works as a joke. The era ranges use spaced en dashes ("1793 – 1795") as in the source, whereas German typesetting would normally write "1793–1795".
