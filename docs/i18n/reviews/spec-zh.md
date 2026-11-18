# Standard (/spec/) zh review: independent editor pass

Scope: `docs/i18n/spec/zh.md` against `docs/SPEC.md`, using `docs/i18n/BRIEF.md` and `locales/zh.json` for terminology. I read the translator notes (`docs/i18n/notes/spec-zh.md`) and checked them rather than taking them as given.

Overall the translation is strong. Every normative keyword maps correctly under GB/T 1.1 (must → 应, must not / must never → 不应, should → 宜, may → 可), and bold appears exactly where the English has it. No number, condition or requirement was dropped, and nothing political was added. Most of the translator's choices hold up: 统一刻时, 驯服, 视/平太阳正午, 时差, 一致性测试向量, 刻时秒/刻时分, keeping `utc`/`solar`/… as code with a gloss, and pairing the brand at the head of the document. The changes below fix one SI-ambiguity slip, one date nuance, two technical misnomers, the legal wording in §8, and a few phrases that read as translated.

Structure re-verified after editing: line count, heading levels and numbering, table rows and column counts, list items, blank-line positions and code fences all match `docs/SPEC.md`. All 3 code blocks are byte-identical, the inline `code` spans are the same multiset, and Nu-Time Inc., CC BY 4.0, the dates, Nu:Day values and the table numbers are unchanged.

## Changes (26)

| § | Before | After | Why |
|---|---|---|---|
| intro | 以及时间与地理共用的单一角度单位 | 以及时间与地理共享的单一角度单位 | 共用 already appears in the same sentence (全球共用的一座统一时钟). Style only. |
| 1 | 1000 分 = 10 万秒。 | 1000 分 = 100000 秒。 | In an equation chain of a standard, every term should be digits + space + unit. 10 万秒 suits the site's 科普 register, not this list. The translator had flagged this. |
| 1 | 每个单位都是它的精确分数 | 每个单位都是一日的精确分数 | Unclear pronoun 它 (it could be read as referring to 地球自转). |
| 1 | 1 个国际单位制秒 = 1.157407… 刻时秒 | 国际单位制的 1 秒 = 1.157407… 刻时秒 | 1 个国际单位制秒 is a calque and awkward to read. The SI qualifier stays, so 秒 next to 刻时秒 remains unambiguous. |
| 1.1 | 按当日计为 5 更、53 刻、537 分 | 按当日计分别为 5 更、53 刻、537 分 | Without 分别 the three figures can be read as a cumulative 5 更 + 53 刻 + 537 分. They are alternative counts of the same instant. |
| 1.1 | 不应向前舍入 | 不应提前进位 | 向前舍入 is not an established term. "Never round ahead" means never show the next tick early, and 进位 is the standard contrast to 截断/向下取整. |
| 1.2 | 在中文中，`05:37:50` 读作 | `05:37:50` 用中文读作 | 在…中 opener is translationese. |
| 2 | 刻时不设时区、夏令时和日期变更线。 | 刻时不设时区，不设夏令时，也不设日期变更线。 | Negation over a 和-list is loose in Chinese. The new form also mirrors the English "no …, no … and no …". |
| 2.1 heading | 无闰秒 | 不设闰秒 | Parallel with §2.2 以日计数，不设闰年. It also reads as a design decision, not a bare noun phrase. |
| 2.1 | 在 2035 年前停止增加闰秒 | 最迟于 2035 年停止插入闰秒 | **Accuracy.** "By 2035" means no later than 2035, while 在 2035 年前 reads as "before 2035". 插入 also matches 已插入 earlier in the sentence. |
| 2.1 | 秒由日导出 | 刻时秒由日导出 | **Accuracy / §1.2 rule.** The sentence is about leap seconds, so a bare 秒 reads as the SI second, which inverts the meaning. §1.2 itself requires 刻时秒 here. |
| 2.1 | 此时误差小于约 1 刻时秒 | 此时误差约在 1 刻时秒以内 | 小于约 (less than about) is a calque. |
| 2.2 | 即简化儒略日数：自 1858 年 11 月 17 日格林尼治午夜起算的简单日数（Nu:Day 0） | 即简化儒略日数（MJD）：从 1858 年 11 月 17 日格林尼治午夜（Nu:Day 0）起连续累计的日数 | (Nu:Day 0) belongs to the epoch, not to the count. 简单日数 is a calque of "plain count". MJD is the abbreviation Chinese astronomers and engineers actually search for. It glosses the term the English names, so no content is added. |
| 2.3 table | 经度取整到最接近的刻 / 以 10 分为步长 | 经度就近取整到整刻 / 以 10 刻时分为步长 | Idiomatic rounding phrase. A bare 10 分 in a time context reads as "10 minutes", so 刻时分 applies. |
| 2.3 table | `civil`（沿用的民用时） | `civil`（现行民用时） | 沿用的 is stilted. 现行 is neutral and natural, and it avoids any hint that existing civil time (including Beijing Time) is outdated. |
| 3.4 | 四个四分位刻度 | 四个等分刻度 | 四分位 is the statistics term for quartile. |
| 3.4 | Nu:Long（取整到最接近的刻） | Nu:Long（就近取整到整刻） | Same rounding phrase as §2.3. |
| 4 | 采用 0.833°（0.231 刻）的标准地平俯角 | 以太阳位于地平线下 0.833°（0.231 刻）为标准计算 | **Terminology.** In Chinese astronomy and navigation, 地平俯角 is the dip of the horizon caused by observer height, which is a different quantity. The new wording states the convention without adding anything. |
| 6 table | 日期（格林尼治） | 日期（以格林尼治为准） | "At Greenwich" means the date as reckoned at Greenwich. A bare parenthetical reads like a place label. |
| 6 | 绝不靠累加刻时秒 | 绝不通过累加刻时秒 | 靠 is colloquial for a standard. |
| 7 | 而不取决于分频器 | 与分频器无关 | More natural 书面语. |
| 8 | 任何人都不主张其权利 | 无人对其主张权利 | **Legal strength.** The old wording can read as a directive ("no one shall claim rights"), which is stronger than the English statement of fact "are not claimed by anyone". |
| 8 | 可申请**刻时 Nu:Time 认证**标志 | 可申请 **Nu:Time Certified**（刻时 Nu:Time 认证）标志 | **Legal.** The mark is named in English. A legal text should give the actual mark and gloss it, not imply that a Chinese-language mark exists. The site's Chinese name is kept as the gloss. See escalation 1. |
| 8 | 承诺：对其持有的、实现本标准时必然会侵犯的任何专利，不主张权利 | 承诺，对于其持有的、实施本标准必然侵犯的任何专利，均不主张专利权 | 实施标准 is the established patent-policy term (GB/T 20003.1). 不主张专利权 names what is not asserted, which matches "not to assert any patent". The scope is unchanged. |
| 9 | 网络时间协议的应用规范（profile） | 网络时间协议行规（profile） | 行规 is the established Chinese term for a timing-protocol profile (cf. PTP 电力行规, 电信行规). The English gloss is kept for clarity. |
| 9 | 一致性认证计划 | 一致性测评计划 | The English says "conformance programme" and does not mention certification. 认证 was an addition, and it also carries regulatory weight in China (escalation 1). |

## Translator notes: judgement

- Agree: the normative mapping, avoiding 不得, 刻时秒/刻时分 beside SI, 驯服, 参考晶振 (rather than 首选), English names kept in the §1 unit column, SI symbols in tables, and `(X negative for west)` left untouched inside the code block.
- Partly agree: the translator rejected 第 5 更 because it implies a 1-based count. That is right. However, their wording could be read as a sum, which is fixed with 分别.
- Disagree: rendering "profile" as 应用规范, since 行规 is the existing term. Omitting MJD, since glossing the term the English names is not an addition.
- Resolved the translator's open question: 100000 秒 replaces 10 万秒 in §1.

## Escalate (owner, legal or native human reviewer)

1. **认证 in mainland China (legal).** Under 《中华人民共和国认证认可条例》, 认证 activities and certification marks are regulated, and certification bodies need CNCA approval. Two places describe a private Nu-Time Inc. programme as "刻时 Nu:Time 认证": §8 of the spec (now with the English mark first) and the site (`build.certTitle`, `build.cert`, `roadmap.items[1]`). Legal should confirm that this wording is acceptable, or pick an alternative such as 一致性测评 / 符合性标志.
2. **Localised claim strings (legal).** §8 renders "Nu:Time compatible" as “兼容刻时 Nu:Time”, which matches the site. Legal should decide whether the compatibility claim may be used in Chinese or must stay as the English string.
3. **English source wording (owner).** "Gong `00:00:00`" in §2 pairs a unit with a full readout. The zh text keeps 0 更 `00:00:00` faithfully, but the English could simply say "`00:00:00` begins at …". Separately, "the day is one turn of the planet" describes a solar day, not a sidereal rotation. The parenthetical (mean solar day, UT1) covers this, but academic readers may still query it.
4. **Native timing engineer.** Please confirm 行规 for "profile" in §9, and whether "network time protocol" means NTP specifically, in which case write 网络时间协议（NTP）行规. Please also confirm the IERS rendering 国际地球自转和参考系服务 (variants with 与 and 参考系统 are both in use).
5. **Site vs Standard inconsistencies (not edited; `locales/zh.json` is out of scope):**
   - `build.quartz[0][2]` reads 刻时首选晶振, while the Standard says 刻时参考晶振, following the English "reference". The site should align with the Standard.
   - `build.quartzTitle` reads 每个刻时 Nu:Time 秒, while the Standard and `build.colCycles` say 刻时秒.
   - The site's cert wording carries no English mark name (see escalation 1).
   - The site uses 一天 / 10 万秒 and the Standard uses 一日 / 100000 秒. This register difference is deliberate and acceptable.
