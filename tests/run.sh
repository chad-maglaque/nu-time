#!/bin/sh
# Runs the shared conformance vectors against the JS, Python and C cores.
set -e
cd "$(dirname "$0")/.."
python3 -I tests/check_py.py
(command -v node >/dev/null && node tests/check_js.cjs) || bun tests/check_js.cjs
cc -std=c99 -Wall -Werror -o /tmp/nt_check_c tests/check_c.c && /tmp/nt_check_c
