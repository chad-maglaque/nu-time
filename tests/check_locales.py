"""Check that locale files match locales/en.json exactly in structure, and that fixed tokens survive.

Usage: python3 -I tests/check_locales.py [code ...]   (no codes = every locale present)
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
EN = json.loads((ROOT / "locales/en.json").read_text())
EXPECT = {"zh": ("ltr", "简体中文"), "hi": ("ltr", "हिन्दी"), "ur": ("rtl", "اردو"), "fr": ("ltr", "Français"),
          "it": ("ltr", "Italiano"), "de": ("ltr", "Deutsch"), "es": ("ltr", "Español"),
          "ja": ("ltr", "日本語"), "pt": ("ltr", "Português"), "ru": ("ltr", "Русский")}
# Values that must be byte-identical to English wherever they appear (keys, links, table numbers)
VERBATIM_KEYS = {"key", "href"}


def walk(o, p=""):
    if isinstance(o, dict):
        for k, v in o.items():
            yield from walk(v, f"{p}.{k}" if p else k)
    elif isinstance(o, list):
        yield (p, "list", len(o))
        for i, v in enumerate(o):
            yield from walk(v, f"{p}[{i}]")
    else:
        yield (p, type(o).__name__, o)


def check(code):
    path = ROOT / "locales" / f"{code}.json"
    errs = []
    try:
        t = json.loads(path.read_text())
    except Exception as e:
        return [f"cannot read: {e}"]
    en = {p: (k, v) for p, k, v in walk(EN)}
    tr = {p: (k, v) for p, k, v in walk(t)}
    for p in en.keys() - tr.keys():
        errs.append(f"missing {p}")
    for p in tr.keys() - en.keys():
        errs.append(f"extra {p}")
    for p in en.keys() & tr.keys():
        (ek, ev), (tk, tv) = en[p], tr[p]
        if ek != tk:
            errs.append(f"type {p}: {ek} vs {tk}")
        elif ek == "list" and ev != tv:
            errs.append(f"length {p}: {ev} vs {tv}")
        elif ek == "str":
            leaf = re.split(r"[.\[]", p)[-1]
            if leaf in VERBATIM_KEYS and ev != tv:
                errs.append(f"must be unchanged {p}: {ev!r} -> {tv!r}")
            for tok in ([] if p == "brandLocal" else ["Nu:Time", "@nu-time.org", "/spec/", "/developers/"]):   # brandLocal is the local brand alone (刻时)
                if tok in ev and tok not in tv and not (tok == "Nu:Time" and code == "zh" and "刻时" in tv):   # zh: 刻时 alone may stand in after first mention
                    errs.append(f"lost token {tok!r} in {p}")
            if not tv.strip():
                errs.append(f"empty {p}")
    d, name = EXPECT.get(code, (None, None))
    if t.get("lang") != code: errs.append(f"lang should be {code!r}")
    if d and t.get("dir") != d: errs.append(f"dir should be {d!r}")
    if name and t.get("langName") != name: errs.append(f"langName should be {name!r}")
    # table cells with numbers must be unchanged (geometry, trig)
    for sect, key in [("geometry", "items"), ("geometry", "goldenRows")]:
        for i, (er, tr_) in enumerate(zip(EN[sect][key], t.get(sect, {}).get(key, []))):
            for j, (a, b) in enumerate(zip(er, tr_)):
                if re.search(r"\d", a) and not (sect == "geometry" and key == "items" and j == 0):
                    # local separators (16,67 · 1.000) and unit names (刻) are fine; the digits must not change
                    if re.sub(r"\D", "", a) != re.sub(r"\D", "", b):
                        errs.append(f"table value changed {sect}.{key}[{i}][{j}]: {a!r} -> {b!r}")
    return errs


codes = sys.argv[1:] or sorted(p.stem for p in (ROOT / "locales").glob("*.json") if p.stem != "en")
bad = 0
for c in codes:
    e = check(c)
    if e:
        bad += 1
        print(f"{c}: {len(e)} problem(s)"); [print("  -", x) for x in e[:40]]
    else:
        print(f"{c}: ok")
sys.exit(1 if bad else 0)
