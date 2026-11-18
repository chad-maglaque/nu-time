// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
/* Sub-nav active state, degree/kè converter, signup forms. */
(function () {
  "use strict";
  // sub-nav: dim the link for the section in view
  var links = document.querySelectorAll("[data-subnav] a");
  if (links.length && "IntersectionObserver" in window) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.classList.remove("active"); });
          map[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  // degrees ⇄ kè
  var conv = document.querySelector("[data-conv-ke]");
  if (conv) {
    var d = conv.querySelector("[data-deg]"), k = conv.querySelector("[data-ke]");
    var r = function (x) { return Math.round(x * 10000) / 10000; };
    d.addEventListener("input", function () { if (d.value !== "") k.value = r(+d.value * 100 / 360); });
    k.addEventListener("input", function () { if (k.value !== "") d.value = r(+k.value * 360 / 100); });
  }

  // signup forms -> POST /api/signup
  document.querySelectorAll("form[data-signup]").forEach(function (f) {
    var st = f.querySelector(".status"), btn = f.querySelector("button[type=submit]");
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {}; new FormData(f).forEach(function (v, key) { data[key] = v; });
      data.consent = !!f.querySelector("[name=consent]:checked");
      data.site = f.getAttribute("data-site");
      data.page = location.pathname;
      try { data.tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (x) {}
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email || "")) { st.className = "status err"; st.textContent = f.getAttribute("data-invalid"); return; }
      btn.disabled = true; st.className = "status"; st.textContent = f.getAttribute("data-sending");
      fetch("/api/signup", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
        .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
        .then(function () { st.className = "status ok"; st.textContent = f.getAttribute("data-ok"); f.reset(); })
        .catch(function () { st.className = "status err"; st.textContent = f.getAttribute("data-err"); })
        .then(function () { btn.disabled = false; });
    });
  });
})();
