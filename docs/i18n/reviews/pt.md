# Portuguese (pt-BR) review

Independent fresh-eyes review of `locales/pt.json` and `docs/i18n/privacy/pt.md` against `locales/en.json`, `docs/PRIVACY.md` and `docs/i18n/BRIEF.md`. The translator's notes were read and judged, not taken on trust. Overall the translation is accurate, natural Brazilian Portuguese in a consistent *você* register, with no Portugal-only forms. It stays readable in Portugal. Numbers, units and fixed tokens are correct. 11 changes: one medium (claim strength on the China card), the rest low-severity wording.

## Decisions confirmed

- **Units:** gong / kè / beat / tique (plurals gongs / kè / beats / tiques), all masculine; prose pattern `gong:beat:tique`. *Tique* is a real word (*tique-taque*) and matches fr/it/es *tic*. Used consistently, including the quartz table header (`Ciclos / tique`) and the licence line.
- **Padrão**, capitalised only when it names the document (O Padrão Nu:Time, O Padrão v1.0, Ler o Padrão). The generic or idiomatic uses stay lowercase, as in English (*Ajude a definir o padrão*, *de acordo com o padrão*). *Organismos de normalização* for standards bodies is correct.
- **Numbers:** decimal comma, dot thousands everywhere (1.000, 86.400, 16,67 kè, 28.311,552). Digits unchanged. Readout times untouched.
- **Cities:** **Déli** (G1, Folha and pt.wikipedia use *Nova Déli*/*Déli*; *Délhi* is the Itamaraty/Estadão spelling and looks dated to most readers; *Déli* also works in Portugal). **São Francisco** (dominant in Brazilian media and pt.wikipedia; also the Portuguese form; the browser adds the country, so there is no clash with Brazilian places of the same name). Other exonyms (Pequim, Xangai, Moscou, Nova York, Riad, Taipé, Helsinque…) are current Brazilian usage. Bangkok, Sydney, Reykjavik, Karachi, Mumbai kept, as Brazilian media do.
- **Trig notation:** **sen / cos / tg**, as taught in Brazilian schools and textbooks. Used in both the table header and the `geometry.trig` prose (which only needs sen/cos). Russian also uses tg.
- **Compass letters:** N / S / **L** / **O** (leste, oeste), the Brazilian map convention. Portugal uses E, but L/O is unambiguous next to N/S.
- **Gender:** role labels are field names under *Sua área*; `join.lead` uses verbs; *Boas-vindas*; *Saia na frente*. All neutral without star or slash forms. "Creator / influencer" → *Criação de conteúdo*: dropping "influencer" is acceptable, because the two overlap in Brazilian usage and *influenciador* is gendered.
- **`time.lead` repetition:** the English ends "…when sunrise and sunset fall, it doesn't change the time", which repeats the first half of the sentence. Reproduced in Portuguese, it reads like an editing error. Dropping it loses no meaning. es dropped it as well. **Accepted.** Escalated below as a likely English source slip.
- **Leap second = segundo bissexto**, **horário de verão**, **Linha Internacional de Data**, **um bilhão** (10⁹): all correct Brazilian usage.
- **"It's a finished one" → *É uma ideia pronta*:** accepted. Punchy, and avoids *acabada* ("worn out").

## Changes

| Key / place | Before | After | Why | Severity |
|---|---|---|---|---|
| `why.items[5].text` | A China participa ativamente da definição de padrões internacionais…, e o seu Sistema de Navegação por Satélite BeiDou… | A China está moldando ativamente padrões internacionais…, e o Sistema de Navegação por Satélite BeiDou… | "Participates in the definition of" is weaker than the English "is actively shaping". The brief requires claims exactly as strong as the source, and this is the China card. Also, *o seu* reads as "your BeiDou" in Brazil, where *seu* = *você*'s. | medium |
| `nav.build` | Desenvolvimento | Para devs | In a topic menu, *Desenvolvimento* reads as "development/progress", not "for developers". *Desenvolvedores* is masculine generic. *Para devs* is instantly clear, gender-neutral (*dev* is invariable), short, and common in Brazilian and Portuguese tech. Parallels de "Entwickler-Doku" and ru "Разработчикам". | low |
| `time.points[1].text` | Chega de pular de um dia para o outro no meio do Pacífico, e chega de duas terças-feiras. | Chega de pular dias para a frente e para trás no meio do Pacífico, e chega de duas terças-feiras seguidas. | Restores "back and forth", which had been lost. "Duas terças-feiras" alone was cryptic in Portuguese, and *seguidas* makes the date-line joke land (same choice as es). | low |
| `eliminates.tail` | o momento em que você está | o momento que você está vivendo | Literal calque of "the moment you're in"; the new wording is the natural phrasing. | low |
| `why.items[1].text` | por isso precisou inserir 27 segundos bissextos desde 1972 | por isso já precisou inserir 27 segundos bissextos desde 1972 | "Has had to" (perfect, still ongoing). *Já* gives the present-perfect sense that plain *precisou* lacks. | low |
| `why.items[3].title` | O horário de verão perdeu a discussão | O horário de verão perdeu o debate | *Perder a discussão* sounds like losing a quarrel. *Perder o debate* is the idiomatic sense of "lost the argument". | low |
| `build.lead` | construir sobre elas | desenvolver a partir delas | "Build on" calque; *construir sobre* is literal (building on top of a surface). | low |
| `build.cert` | pode construir seguindo o padrão | pode desenvolver de acordo com o padrão | Same calque ("build to the standard"); natural technical phrasing. | low |
| `join.ok` | Tudo certo, você está dentro. | Pronto, você já faz parte. | *Você está dentro* is an anglicism ("you're in"). *Você já faz parte* is warm and idiomatic. | low |
| privacy ¶2 | ficam armazenados com os nossos provedores de hospedagem (Vercel, e Upstash para o banco de dados) | ficam armazenados nos nossos provedores de hospedagem (Vercel e, para o banco de dados, Upstash) | *Armazenados com* is a calque of "stored with". The comma placement also made the parenthesis read oddly. | low |
| privacy ¶4 | cancelar a inscrição a qualquer momento por meio de qualquer e-mail | cancelar a inscrição quando quiser, por qualquer e-mail que enviarmos, | *Por meio de qualquer e-mail* could read as "by sending any email". The English means "from any email we send". | low |

Checked and left as is: the dial hint, the hero sub, the kè facts, the geometry and trig tables, the three heritage cards (factual; the Spain card is not mocking), the roadmap, the licence line, the sign-up form, the footer, and the remaining privacy text. The UI labels quoted in the privacy page match `hero.current` and `hero.locate` exactly. Fixed tokens (Nu:Time, Nu:Time™, 刻时, Ke-Shi, emails, hrefs, keys, licence names, digits) are unchanged. `python3 -I tests/check_locales.py pt` prints ok.

## Escalate

1. **English source, `time.lead`:** "…it only changes where the sun is and when sunrise and sunset fall, it doesn't change the time." The final clause repeats the first half and is a comma splice. Suggest deleting ", it doesn't change the time" in English. pt and es already omit it.
2. **`nav.build` = "Para devs"**: slightly informal. If the owner prefers a sober label, use *Documentação* or keep *Desenvolvimento*. Avoid *Desenvolvedores* (masculine generic, against the brief's gender rule).
3. **"Nu:Time Certified" and "compatível com Nu:Time"** follow fr/it/es: the mark name stays in English and the compatibility claim is localised. Same open legal question as in DECISIONS (zh): may the compatibility claim be localised?
4. **Native sign-off:** pt is not in the DECISIONS #16 sign-off list. A quick read by one Brazilian (ideally a tech/science creator) is advised before launch, mainly for *Para devs*, *tique*, and *Boas-vindas* (neutral, but noticeable to some readers).
