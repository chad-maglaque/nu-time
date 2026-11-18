# Back-translation drift check — German (`locales/de.json`)

Source: `locales/en.json`. Every string in `de.json` was back-translated into literal English and compared with the source. The table lists only real drift. Acceptable localisation is not listed: number formats (`1.000`, `16,67`, `28.311,552`), German typography („…“, en dashes), capitalised unit nouns (Gong, Kè, Beat, Tick), local exonyms (Peking, Kairo, Taipeh, Mexiko-Stadt), "Santiago de Chile" (matches the clock's Chile coordinates), du-form, gender-neutral role labels, and idioms that keep the intent ("Die Zeit ist reif", "Es wird Zeit", "Deine Sonne, dein Ort").

## Flagged items

| Key | English source | Back-translation | Problem | Suggested fix (DE) | Severity |
|---|---|---|---|---|---|
| `how.cards[1].text` | "…long enough to be meaningful, short enough for a meeting." | "…long enough to carry weight, **fine enough for scheduling appointments**." | The second half is reinterpreted. "Short enough for a meeting" becomes "granular enough for scheduling". This is a plausible reading of an ambiguous source, but it is no longer the same image. | "…lang genug, um etwas zu bedeuten, kurz genug für ein Meeting." | low |
| `why.items[5].title` | "The world's next standards are being re-written **in** 2035" | "Tomorrow's standards **emerge by** 2035" | Three small drifts. "world's" is dropped, "re-written" (replacing existing standards) becomes "emerge", and "in 2035" becomes "by 2035". | "Die nächsten Weltstandards werden 2035 neu geschrieben" | low |
| `time.points[2].text`, `time.points[3].text` (with `hero.clockLabel`, `hero.dayBar`) | "universal time" / "universal Nu:Time" | "the world time (UT)" | Terminology risk. Unqualified "Weltzeit" is the established German term for UT/UTC, so a reader may take "Die Weltzeit bleibt trotzdem dieselbe" to mean UTC rather than Nu:Time. The labels say "Nu:Time-Weltzeit", but the two body sentences drop the qualifier. | "Die Nu:Time-Weltzeit bleibt trotzdem dieselbe – immer." / "Nu:Time-Weltzeit und Ortszeit geraten dabei nie durcheinander." | low |

## Overall verdict

The German translation is very close to the source. No number, date, unit, brand name, trademark or licence name has changed. The technical sections (unit definitions, kè facts, geometry and trigonometry tables, quartz table, licences, roadmap) back-translate essentially word for word. Factual and sensitive claims keep the source's strength. Examples are the leap-second timeline ("spätestens 2035"), the EU DST vote, the Spain card, and the neutral, non-endorsement framing of the China standards card. The register is the confident du-form the brief asks for, and the puns are carried over with their intent intact. The three low-severity flags are a reinterpreted "short enough for a meeting", a softened and generalised roadmap headline, and the unqualified "Weltzeit" that German readers may take to mean UTC. All three are polish items, and none blocks release.
