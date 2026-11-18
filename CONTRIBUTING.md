# Contributing

Thank you for helping build Nu:Time.

## Code (reference cores, tests, website)

Contributions are accepted under the repository's code licence, **MIT OR Apache-2.0**, using the [Developer Certificate of Origin](https://developercertificate.org/). Sign off every commit:

```sh
git commit -s -m "Explain the change"
```

Before opening a pull request:

```sh
tests/run.sh          # all three reference cores must pass the shared vectors
node build.mjs        # the site must build
```

Rules for the cores: integer arithmetic at tick boundaries; truncate, never round ahead; derive from the absolute instant on every call; keep JavaScript, Python and C in step with each other and with `tests/vectors.json`.

## The Standard (docs/SPEC.md)

Changes to the Standard need a short contributor licence agreement, so that Nu-Time Inc. can submit the text to standards bodies (ISO/IEC, ITU and national bodies) on their terms. The agreement grants a licence; you keep your copyright. Open an issue first to discuss any normative change.

## Translations

Locale files live in `locales/<lang>.json` with exactly the same keys as `locales/en.json`. Translate the labels, never the durations or the `GG:BB:TT` field order. Chinese uses the unit names fixed in the Standard (§1.2): 更 gēng · 刻 kè · 分 fēn · 秒 miǎo.

## Using the name

See [TRADEMARKS.md](TRADEMARKS.md). Forks and derivative products are welcome; please give them their own name.
