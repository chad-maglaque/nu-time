#!/bin/bash
# Read-only check that nu-time.org is the domain of record. Needs no tokens: run it any time.
#   tools/check-domains.sh
# Exit status 0 when every check passes.

PRIMARY="nu-time.org"
REDIRECT_HOSTS="www.nu-time.org nutime.org www.nutime.org nu-time.com www.nu-time.com"
MAIL_ZONES="nu-time.org nutime.org nu-time.com"

fails=0
pass() { printf '  ok    %s\n' "$*"; }
fail() { printf '  FAIL  %s\n' "$*"; fails=$((fails+1)); }
info() { printf '  info  %s\n' "$*"; }

echo "== $PRIMARY serves the site"
code=$(curl -s -o /dev/null --max-time 15 -w '%{http_code}' "https://$PRIMARY/")
[ "$code" = 200 ] && pass "https://$PRIMARY/ → 200" || fail "https://$PRIMARY/ → ${code:-no answer}"
canon=$(curl -s --max-time 15 "https://$PRIMARY/" | grep -o 'rel="canonical" href="[^"]*' | sed 's/.*href="//')
[ "$canon" = "https://$PRIMARY/" ] && pass "canonical $canon" || fail "canonical is '${canon:-missing}'"
sm=$(curl -s --max-time 15 "https://$PRIMARY/robots.txt" | grep -i '^sitemap:' | awk '{print $2}')
[ "$sm" = "https://$PRIMARY/sitemap.xml" ] && pass "robots.txt sitemap $sm" || fail "robots.txt sitemap is '${sm:-missing}'"
other=$(curl -s --max-time 15 "https://$PRIMARY/sitemap.xml" | grep -o '<loc>[^<]*' | grep -vc "<loc>https://$PRIMARY/")
[ "${other:-0}" = 0 ] && pass "sitemap URLs all on $PRIMARY" || fail "$other sitemap URLs not on $PRIMARY"
code=$(curl -s -o /dev/null --max-time 15 -w '%{http_code} %{redirect_url}' "http://$PRIMARY/")
case "$code" in 30[18]\ https://$PRIMARY/) pass "http:// → https://";; *) fail "http://$PRIMARY/ → ${code:-no answer}";; esac

echo "== redirects to $PRIMARY (path and query kept)"
for h in $REDIRECT_HOSTS; do
  got=$(curl -s -o /dev/null --max-time 15 -w '%{http_code} %{redirect_url}' "https://$h/spec/?x=1")
  if [ "$got" = "308 https://$PRIMARY/spec/?x=1" ]; then pass "$h → $PRIMARY"
  else fail "$h: '${got:-no answer}' (nameservers: $(dig +short NS "$h" | head -1))"; fi
done

echo "== mail: Cloudflare Email Routing"
for z in $MAIL_ZONES; do
  mx=$(dig +short MX "$z" | awk '{print $2}' | sort | tr '\n' ' ')
  case "$mx" in *mx.cloudflare.net*) pass "$z MX $mx";; *) fail "$z MX '${mx:-none}'";; esac
  spf=$(dig +short TXT "$z" | grep -c '_spf.mx.cloudflare.net')
  [ "$spf" -ge 1 ] && pass "$z SPF includes Cloudflare" || fail "$z SPF missing"
done

echo
if [ $fails = 0 ]; then echo "All checks pass."; else echo "$fails check(s) fail."; exit 1; fi
