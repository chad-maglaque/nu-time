#!/bin/bash
# nu-time.org is the domain of record. This sets up everything outside the code for that:
#   • Cloudflare DNS for nu-time.org, nutime.org and nu-time.com → Vercel (grey cloud)
#   • Vercel project nu-time: nu-time.org serves the site; every other domain 308-redirects to it, path kept
#   • Cloudflare Email Routing on nu-time.org, nutime.org and nu-time.com: only the addresses in MAIL_ADDRESSES
#     forward to $EMAIL_DEST; everything else is dropped (catch-all off)
#   • GitHub repository homepage → https://nu-time.org
#   • then runs tools/check-domains.sh
#
#   tools/domains.sh            dry run: reads everything, prints what it would change
#   tools/domains.sh --apply    makes the changes
#
# Settings live in .env.domains at the repository root (git-ignored; the repository may go public):
#   CLOUDFLARE_API_TOKEN  dash.cloudflare.com → My Profile → API Tokens → Create Custom Token:
#                           Zone · Zone · Read          Zone · DNS · Edit
#                           Zone · Zone Settings · Edit Zone · Email Routing Rules · Edit
#                           Account · Email Routing Addresses · Edit
#                         Zone resources: nu-time.org, nutime.org, nu-time.com (or all zones in the account)
#   VERCEL_TOKEN          vercel.com/account/tokens, scope: the team that owns project nu-time
#   EMAIL_DEST            the inbox the named addresses forward to
#   VERCEL_TEAM_ID        optional, found automatically
#
# It touches only nu-time.org, nutime.org, nu-time.com and their www. The commercial watch domains
# (nu-watch.com, nu.watch, nu-beat.com) are separate and never changed here.
#
# Safe to re-run: it only changes what isn't already right. Needs curl, jq, dig; gh is optional.

set -euo pipefail
cd "$(dirname "$0")/.."
# .env.domains fills in settings; values already set in the environment win, and empty lines don't count
for v in CLOUDFLARE_API_TOKEN VERCEL_TOKEN EMAIL_DEST VERCEL_TEAM_ID; do eval "_env_$v=\${$v:-}"; done
[ -f .env.domains ] && . ./.env.domains
for v in CLOUDFLARE_API_TOKEN VERCEL_TOKEN EMAIL_DEST VERCEL_TEAM_ID; do eval "[ -n \"\$_env_$v\" ] && $v=\$_env_$v" || :; done

PRIMARY="nu-time.org"
DNS_ZONES="nu-time.org nutime.org nu-time.com"   # Cloudflare zones: apex + www → Vercel
MAIL_ZONES="nu-time.org nutime.org nu-time.com"  # Cloudflare zones with Email Routing on
# The only addresses that forward; mail to any other address is dropped.
MAIL_ADDRESSES="info@nu-time.org press@nu-time.org privacy@nu-time.org standards@nu-time.org legal@nu-time.org
                info@nu-time.com press@nu-time.com privacy@nu-time.com standards@nu-time.com"
PROJECT="nu-time"
HOMEPAGE="https://$PRIMARY"
# Vercel domains: the primary, then www + apex of every other zone (redirects)
REDIRECTS="www.$PRIMARY"; for z in $DNS_ZONES; do [ "$z" = "$PRIMARY" ] || REDIRECTS="$REDIRECTS $z www.$z"; done

APPLY=0; [ "${1:-}" = "--apply" ] && APPLY=1
: "${CLOUDFLARE_API_TOKEN:?missing — see the header of tools/domains.sh}"
: "${VERCEL_TOKEN:?missing — see the header of tools/domains.sh}"
: "${EMAIL_DEST:?missing — see the header of tools/domains.sh}"
for c in curl jq dig; do command -v $c >/dev/null || { echo "$c is required"; exit 1; }; done

say()  { printf '%s\n' "$*"; }
step() { printf '\n== %s\n' "$*"; }
act()  { if [ $APPLY = 1 ]; then printf '  + %s\n' "$*"; else printf '  would: %s\n' "$*"; fi; }
in_list() { case " $2 " in *" $1 "*) return 0;; esac; return 1; }
is_vercel_ip()    { case "$1" in 76.76.21.21|216.150.*|216.198.*) return 0;; esac; return 1; }
is_vercel_cname() { case "$1" in *.vercel-dns.com|*.vercel-dns-[0-9]*.com) return 0;; esac; return 1; }

# ── API helpers: print the JSON body, fail loudly on an API error ──
cf() {  # cf METHOD PATH [JSON]
  local out
  out=$(curl -sS -X "$1" "https://api.cloudflare.com/client/v4$2" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" -H "Content-Type: application/json" ${3:+--data "$3"})
  if [ "$(printf '%s' "$out" | jq -r '.success')" != "true" ]; then
    echo "Cloudflare $1 $2 failed: $(printf '%s' "$out" | jq -c '.errors')" >&2; return 1
  fi
  printf '%s' "$out"
}
vc() {  # vc METHOD PATH [JSON]   (PATH without the team query)
  local sep="?"; case "$2" in *\?*) sep="&";; esac
  local team=""; [ -n "${VERCEL_TEAM_ID:-}" ] && team="${sep}teamId=$VERCEL_TEAM_ID"
  local out code
  out=$(curl -sS -w '\n%{http_code}' -X "$1" "https://api.vercel.com$2$team" \
    -H "Authorization: Bearer $VERCEL_TOKEN" -H "Content-Type: application/json" ${3:+--data "$3"})
  code=$(printf '%s' "$out" | tail -n1); out=$(printf '%s' "$out" | sed '$d')
  if [ "$code" -ge 300 ]; then echo "Vercel $1 $2 failed ($code): $(printf '%s' "$out" | jq -c '.error // .')" >&2; return 1; fi
  printf '%s' "$out"
}
zone_id() { cf GET "/zones?name=$1" | jq -r '.result[0].id // empty'; }
vdomains() { vc GET "/v9/projects/$PROJECT/domains?limit=100" | jq -c '.domains[]'; }

# ── 0. preflight ──
step "Preflight"
ZONE_IDS=""
for d in $DNS_ZONES $MAIL_ZONES; do
  case "$ZONE_IDS" in *" $d="*) continue;; esac
  z=$(zone_id "$d"); [ -n "$z" ] || { echo "Cloudflare zone $d not visible to this token"; exit 1; }
  ZONE_IDS="$ZONE_IDS $d=$z"
done
zid() { printf '%s\n' $ZONE_IDS | grep "^$1=" | cut -d= -f2; }
ACCOUNT=$(cf GET "/zones/$(zid "$PRIMARY")" | jq -r '.result.account.id')
say "  ok: zones $DNS_ZONES (account $ACCOUNT)"

if [ -z "${VERCEL_TEAM_ID:-}" ] && ! vc GET "/v9/projects/$PROJECT" >/dev/null 2>&1; then
  for t in $(vc GET "/v2/teams" | jq -r '.teams[].id'); do
    VERCEL_TEAM_ID=$t; vc GET "/v9/projects/$PROJECT" >/dev/null 2>&1 && break; VERCEL_TEAM_ID=""
  done
fi
vc GET "/v9/projects/$PROJECT" >/dev/null || { echo "Vercel project $PROJECT not visible to this token"; exit 1; }
say "  ok: Vercel project $PROJECT ${VERCEL_TEAM_ID:+(team $VERCEL_TEAM_ID)}"
CFG=$(vc GET "/v6/domains/nu-time.com/config" 2>/dev/null || echo '{}')
VIP=$(printf '%s' "$CFG" | jq -r '[.recommendedIPv4[]? | select(.rank==1) | .value[0]][0] // "76.76.21.21"')
VCNAME=$(printf '%s' "$CFG" | jq -r '[.recommendedCNAME[]? | select(.rank==1) | .value][0] // "cname.vercel-dns.com"' | sed 's/\.$//')
say "  Vercel records: A $VIP, CNAME $VCNAME"
[ $APPLY = 1 ] || say "  DRY RUN — nothing will change. Re-run with --apply."

# ── 1. mail destination (Cloudflare emails it a verification link the first time) ──
step "Mail destination: $EMAIL_DEST"
dest_state() { cf GET "/accounts/$ACCOUNT/email/routing/addresses?per_page=50" \
  | jq -r --arg e "$EMAIL_DEST" '[.result[] | select(.email==$e)][0] | if .==null then "missing" elif .verified then "verified" else "pending" end'; }
DEST=$(dest_state)
case "$DEST" in
  verified) say "  ok: verified" ;;
  pending)  say "  waiting for the verification link Cloudflare sent to $EMAIL_DEST" ;;
  missing)  act "add $EMAIL_DEST as a destination — Cloudflare emails it a verification link"
            [ $APPLY = 1 ] && cf POST "/accounts/$ACCOUNT/email/routing/addresses" "$(jq -nc --arg e "$EMAIL_DEST" '{email:$e}')" >/dev/null ;;
esac

# ── 2. Cloudflare DNS: apex A + www CNAME → Vercel (DNS only); old mail records out ──
for d in $DNS_ZONES; do
  step "Cloudflare DNS: $d"
  Z=$(zid "$d")
  RECS=$(cf GET "/zones/$Z/dns_records?per_page=500" | jq -c '.result[]')
  have_a=0; have_cname=0
  while IFS= read -r r; do
    [ -n "$r" ] || continue
    id=$(jq -r .id <<<"$r"); type=$(jq -r .type <<<"$r"); name=$(jq -r .name <<<"$r")
    content=$(jq -r .content <<<"$r" | sed 's/\.$//'); proxied=$(jq -r .proxied <<<"$r")
    stale=0
    if [ "$name" = "$d" ] && in_list "$type" "A AAAA CNAME"; then
      if [ "$proxied" = false ] && { { [ "$type" = A ] && is_vercel_ip "$content"; } || { [ "$type" = CNAME ] && is_vercel_cname "$content"; }; }
      then have_a=1; say "  ok: $type $d → $content"; else stale=1; fi
    elif [ "$name" = "www.$d" ] && in_list "$type" "A AAAA CNAME"; then
      if [ "$proxied" = false ] && { { [ "$type" = CNAME ] && is_vercel_cname "$content"; } || { [ "$type" = A ] && is_vercel_ip "$content"; }; }
      then have_cname=1; say "  ok: $type www.$d → $content"; else stale=1; fi
    elif in_list "$d" "$MAIL_ZONES" && [ "$name" = "$d" ]; then
      # mail records from a previous host would block Email Routing; Cloudflare's own are kept
      if [ "$type" = MX ] && ! [[ "$content" == *.mx.cloudflare.net ]]; then stale=1; fi
      if [ "$type" = TXT ] && [[ "$content" == *v=spf1* ]] && ! [[ "$content" == *_spf.mx.cloudflare.net* ]]; then stale=1; fi
    fi
    if [ $stale = 1 ]; then
      act "delete $type $name → $content (proxied=$proxied)"
      [ $APPLY = 1 ] && cf DELETE "/zones/$Z/dns_records/$id" >/dev/null
    fi
  done <<<"$RECS"
  if [ $have_a = 0 ]; then
    act "create A $d → $VIP (DNS only)"
    [ $APPLY = 1 ] && cf POST "/zones/$Z/dns_records" "$(jq -nc --arg n "$d" --arg c "$VIP" '{type:"A",name:$n,content:$c,proxied:false,ttl:1}')" >/dev/null
  fi
  if [ $have_cname = 0 ]; then
    act "create CNAME www.$d → $VCNAME (DNS only)"
    [ $APPLY = 1 ] && cf POST "/zones/$Z/dns_records" "$(jq -nc --arg n "www.$d" --arg c "$VCNAME" '{type:"CNAME",name:$n,content:$c,proxied:false,ttl:1}')" >/dev/null
  fi
done

# ── 3. Email Routing on (adds Cloudflare's MX + SPF records) ──
step "Email Routing: enable"
for d in $MAIL_ZONES; do
  Z=$(zid "$d")
  if [ "$(cf GET "/zones/$Z/email/routing" | jq -r '.result.enabled')" = "true" ]; then say "  ok: $d"; continue; fi
  act "enable Email Routing on $d"
  if [ $APPLY = 1 ]; then cf POST "/zones/$Z/email/routing/dns" "{\"name\":\"$d\"}" >/dev/null || cf POST "/zones/$Z/email/routing/enable" '{}' >/dev/null; fi
done

# ── 4. Vercel: nu-time.org serves the site; add the redirect domains ──
step "Vercel domains: add"
DOMS=$(vdomains)
on_project()  { jq -e --arg n "$1" 'select(.name==$n)' <<<"$DOMS" >/dev/null; }
redirect_of() { jq -r --arg n "$1" 'select(.name==$n) | (.redirect // "")' <<<"$DOMS"; }
if ! on_project "$PRIMARY"; then
  act "add $PRIMARY (serves the site)"
  [ $APPLY = 1 ] && vc POST "/v10/projects/$PROJECT/domains" "{\"name\":\"$PRIMARY\"}" >/dev/null
elif [ -n "$(redirect_of "$PRIMARY")" ]; then
  act "make $PRIMARY serve the site (remove its redirect)"
  [ $APPLY = 1 ] && vc PATCH "/v9/projects/$PROJECT/domains/$PRIMARY" '{"redirect":null}' >/dev/null
else say "  ok: $PRIMARY serves the site"; fi
for d in $REDIRECTS; do
  on_project "$d" && continue   # its redirect is set in step 7
  act "add $d → redirect to $PRIMARY (308)"
  [ $APPLY = 1 ] && vc POST "/v10/projects/$PROJECT/domains" "$(jq -nc --arg n "$d" --arg r "$PRIMARY" '{name:$n,redirect:$r,redirectStatusCode:308}')" >/dev/null
done

# ── 5. ownership check, if Vercel asks (domain used by another Vercel account before) ──
if [ $APPLY = 1 ]; then
  DOMS=$(vdomains)
  while IFS=$'\t' read -r name vname vvalue; do
    [ -n "$name" ] || continue
    step "Vercel ownership check: $name"
    Z=""; for z in $DNS_ZONES; do case "$name" in "$z"|*."$z") Z=$(zid "$z");; esac; done
    if [ -z "$Z" ] || [ -z "$vname" ]; then say "  Vercel → project $PROJECT → Domains shows what $name needs"; continue; fi
    if cf GET "/zones/$Z/dns_records?type=TXT&name=$vname" | jq -e --arg v "$vvalue" '.result[] | select(.content==$v or .content==("\""+$v+"\""))' >/dev/null; then
      say "  ok: TXT $vname already there"
    else
      act "create TXT $vname = $vvalue"
      cf POST "/zones/$Z/dns_records" "$(jq -nc --arg n "$vname" --arg c "$vvalue" '{type:"TXT",name:$n,content:$c,ttl:1}')" >/dev/null
    fi
    vc POST "/v9/projects/$PROJECT/domains/$name/verify" >/dev/null 2>&1 && say "  ok: verified" \
      || say "  not verified yet (TXT still propagating) — re-run --apply in a few minutes"
  done < <(jq -r --arg ours " $PRIMARY $REDIRECTS " 'select(.verified==false) | select(.name as $n | $ours | contains(" " + $n + " ")) | [.name, (.verification[]? | select(.type=="TXT") | .domain, .value)] | @tsv' <<<"$DOMS")
fi

# ── 6. wait until https://nu-time.org serves the site before redirecting nu-time.com to it ──
if [ $APPLY = 1 ]; then
  step "Waiting for https://$PRIMARY (DNS + certificate, up to 10 min)"
  ok=0
  for i in $(seq 1 60); do
    if curl -sf -o /dev/null --max-time 10 "https://$PRIMARY/"; then ok=1; break; fi
    printf '.'; sleep 10
  done
  echo
  [ $ok = 1 ] || { echo "https://$PRIMARY is not serving yet; nu-time.com still serves the site. Re-run --apply in a few minutes."; exit 1; }
  say "  ok: https://$PRIMARY is up"
  DOMS=$(vdomains)
fi

# ── 7. Vercel: the listed domains → 308 to nu-time.org (nu-time.com last) ──
# Only $REDIRECTS is touched. Any other domain on the project (*.vercel.app, the commercial
# watch domains, …) is left exactly as it is.
step "Vercel domains: redirects"
ORDERED=$(printf '%s\n' $REDIRECTS | grep -vx "nu-time.com"; echo nu-time.com)
for d in $ORDERED; do
  on_project "$d" || continue   # (dry run: new domains are listed under "add")
  cur=$(redirect_of "$d"); code=$(jq -r --arg n "$d" 'select(.name==$n) | (.redirectStatusCode // "")' <<<"$DOMS")
  if [ "$cur" = "$PRIMARY" ] && [ "$code" = 308 ]; then say "  ok: $d → $PRIMARY"; continue; fi
  act "$d: ${cur:-serves the site} → redirect to $PRIMARY (308)"
  [ $APPLY = 1 ] && vc PATCH "/v9/projects/$PROJECT/domains/$d" "$(jq -nc --arg r "$PRIMARY" '{redirect:$r,redirectStatusCode:308}')" >/dev/null
done

# ── 8. mail rules: the named addresses → $EMAIL_DEST; catch-all off (everything else dropped) ──
step "Email Routing: named addresses → $EMAIL_DEST"
if [ $APPLY = 1 ] && [ "$(dest_state)" != verified ]; then
  say "  click the verification link Cloudflare sent to $EMAIL_DEST (waiting up to 15 min)"
  for i in $(seq 1 90); do [ "$(dest_state)" = verified ] && break; printf '.'; sleep 10; done; echo
  [ "$(dest_state)" = verified ] || { echo "  $EMAIL_DEST is not verified yet. Click the link, then re-run --apply."; exit 1; }
  say "  ok: $EMAIL_DEST verified"
fi
FWD=$(jq -nc --arg t "$EMAIL_DEST" '[{type:"forward",value:[$t]}]')
for d in $MAIL_ZONES; do
  Z=$(zid "$d")
  RULES=$(cf GET "/zones/$Z/email/routing/rules?per_page=50" | jq -c '.result[] | select(any(.matchers[]?; .type=="literal"))')
  for addr in $MAIL_ADDRESSES; do
    case "$addr" in *"@$d") ;; *) continue;; esac
    r=$(jq -c --arg a "$addr" 'select(any(.matchers[]?; .field=="to" and .value==$a))' <<<"$RULES" | head -n1)
    if [ -z "$r" ]; then
      act "forward $addr → $EMAIL_DEST"
      [ $APPLY = 1 ] && cf POST "/zones/$Z/email/routing/rules" "$(jq -nc --arg a "$addr" --argjson f "$FWD" \
        '{name:$a,enabled:true,matchers:[{type:"literal",field:"to",value:$a}],actions:$f}')" >/dev/null
      continue
    fi
    dests=$(jq -r '[.actions[]? | select(.type=="forward") | .value[]] | join(",")' <<<"$r")
    if [ "$dests" = "$EMAIL_DEST" ] && [ "$(jq -r .enabled <<<"$r")" = true ]; then say "  ok: $addr"; continue; fi
    act "$addr: ${dests:-other action} → $EMAIL_DEST"
    [ $APPLY = 1 ] && cf PUT "/zones/$Z/email/routing/rules/$(jq -r .id <<<"$r")" \
      "$(jq -c --argjson a "$FWD" '{name, enabled:true, priority, matchers, actions:$a} | with_entries(select(.value != null))' <<<"$r")" >/dev/null
  done
  # rules for addresses not in MAIL_ADDRESSES are reported, not changed
  jq -r --arg list " $MAIL_ADDRESSES " '[.matchers[]? | select(.field=="to") | .value][0] as $a | select(($list | contains(" " + $a + " ")) | not) | "  note: \($a) has its own rule (left as is)"' <<<"$RULES" || true
  CA=$(cf GET "/zones/$Z/email/routing/rules/catch_all" 2>/dev/null | jq -c '.result' || echo '{}')
  if [ "$(jq -r '.enabled // false' <<<"$CA")" = true ]; then
    act "*@$d: turn the catch-all off (drop)"
    [ $APPLY = 1 ] && cf PUT "/zones/$Z/email/routing/rules/catch_all" \
      '{"name":"catch-all","enabled":false,"matchers":[{"type":"all"}],"actions":[{"type":"drop"}]}' >/dev/null
  else say "  ok: *@$d dropped (catch-all off)"; fi
done

# ── 9. GitHub repository homepage ──
step "GitHub homepage"
if command -v gh >/dev/null && REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null); then
  cur=$(gh repo view --json homepageUrl -q .homepageUrl)
  if [ "$cur" = "$HOMEPAGE" ]; then say "  ok: $HOMEPAGE"
  else act "$REPO homepage: ${cur:-none} → $HOMEPAGE"; [ $APPLY = 1 ] && gh repo edit "$REPO" --homepage "$HOMEPAGE" >/dev/null; fi
else say "  skipped (gh not installed or not signed in)"; fi

# ── 10. check ──
if [ $APPLY = 1 ]; then
  step "Check"
  tools/check-domains.sh || { echo "Some checks fail — DNS can take a few minutes. Re-run tools/check-domains.sh."; exit 1; }
fi
say ""
say "Done."
