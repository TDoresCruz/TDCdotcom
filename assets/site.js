/* ==============================================================
   SITE SCRIPT  -  builds the header, sidebar, footer and the
   publication / talk / CV / research / media lists from the
   files in /data. You normally never need to edit this file.

   The same code is used in two ways:
   1. In the visitor's browser, to draw the page from /data.
   2. By tools/build.js, which writes the same HTML into the
      pages so search engines can read it without running scripts.
   ============================================================== */
(function (window) {
  "use strict";

  /* ---------- helpers ---------- */
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  // Make bare URLs in a citation clickable and bold your own name.
  var richCitation = function (html) {
    return String(html || "")
      .replace(/(^|[\s(])(https?:\/\/[^\s<]+[^\s<.,)])/g, '$1<a href="$2">$2</a>')
      .replace(/Dores Cruz, T\.\s?D\./g, "<strong>$&</strong>");
  };
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var niceDate = function (iso) {
    var p = String(iso).split("-");
    if (p.length === 1) return p[0];
    if (p.length === 2) return MONTHS[+p[1] - 1] + " " + p[0];
    return MONTHS[+p[1] - 1] + " " + (+p[2]) + ", " + p[0];
  };
  var todayISO = function () {
    var d = new Date(), z = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
  };
  var groupByYear = function (items, getYear) {
    var groups = [];
    items.forEach(function (it) {
      var y = getYear(it), last = groups[groups.length - 1];
      if (!last || last.year !== y) groups.push(last = { year: y, items: [] });
      last.items.push(it);
    });
    return groups;
  };
  var tag = function (text, extra) { return '<span class="tag' + (extra ? " " + extra : "") + '">' + esc(text) + "</span>"; };

  // Newest first; keeps your own order within the same year/date.
  function sortData() {
    if (window.PUBLICATIONS) window.PUBLICATIONS.sort(function (a, b) { return b.year - a.year; });
    if (window.MEDIA) window.MEDIA.sort(function (a, b) { return (+(b.year || 0)) - (+(a.year || 0)); });
    if (window.TALKS) window.TALKS.sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
  }

  /* ---------- header, sidebar, footer ---------- */
  function header(page) {
    var P = window.PROFILE;
    var nav = window.NAV.map(function (n) {
      return '<a href="' + n.url + '"' + (n.url === page ? ' class="active" aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
    }).join("");
    return '<div class="inner"><a class="site-title" href="index.html">' + esc(P.siteTitle || P.name) + "</a>" +
      '<div class="header-right"><nav class="site-nav" aria-label="Main">' + nav + "</nav>" +
      '<button type="button" class="theme-toggle" id="theme-toggle" aria-label="Switch between light and dark mode"></button></div></div>';
  }

  function sidebar() {
    var P = window.PROFILE;
    var links = P.links.map(function (l) {
      return '<li><a href="' + l.url + '"><i class="' + esc(l.icon || "fa-solid fa-link") + '" aria-hidden="true"></i>' + esc(l.label) + "</a></li>";
    }).join("");
    return '<img class="photo" src="' + P.photo + '" alt="Photo of ' + esc(P.name) + '">' +
      '<p class="name">' + esc(P.name) + "</p>" +
      '<p class="role">' + esc(P.title) + "</p>" +
      '<details class="contact"><summary>Contact &amp; Links</summary><ul>' + links + "</ul></details>";
  }

  function footer() {
    var P = window.PROFILE;
    return "© " + String(P.lastUpdated || "").slice(-4) + " " + esc(P.name) +
      (P.lastUpdated ? ' <span class="footer-sep">·</span> Last updated ' + esc(P.lastUpdated) : "");
  }

  /* ---------- publications ---------- */
  function pubEntry(p) {
    var links = Object.keys(p.links || {}).map(function (k) {
      return '<a href="' + p.links[k] + '">' + esc(k) + "</a>";
    }).join("");
    return '<article class="entry" id="' + p.id + '" data-type="' + p.type + '">' +
      '<h3 class="entry-title">' + (p.type === "Book" ? tag("Book") : "") + (p.type === "Preprint" ? tag("Preprint") : "") +
        (p.sharedFirst ? tag("Shared first author") : "") +
        (p.award ? tag(p.award, "tag-award") : "") + esc(p.title) + "</h3>" +
      '<p class="entry-meta"><em>' + esc(p.venue) + "</em> · " + p.year + "</p>" +
      (p.summary ? '<p class="entry-summary">' + p.summary + "</p>" : "") +
      '<p class="entry-citation">' + richCitation(p.citation) + "</p>" +
      (links ? '<div class="entry-links">' + links + "</div>" : "") +
      (p.abstract ? '<details><summary>Abstract</summary><div class="abstract"><p>' + p.abstract + "</p></div></details>" : "") +
      "</article>";
  }

  var PUB_FILTERS = [["All", "All"], ["Article", "Journal articles"], ["Book", "Books"], ["Preprint", "Preprints"]];

  function pubFilters(active) {
    active = active || "All";
    return PUB_FILTERS.map(function (b) {
      return '<button type="button" data-f="' + b[0] + '"' + (b[0] === active ? ' class="active"' : "") + ">" + b[1] + "</button>";
    }).join("");
  }

  function pubList(filter) {
    filter = filter || "All";
    var all = window.PUBLICATIONS;
    var match = function (p) { return filter === "All" || filter === p.type; };
    var wp = all.filter(function (p) { return p.workingPaper && match(p); });
    var pub = all.filter(function (p) { return !p.workingPaper && match(p); });
    var html = "";
    if (wp.length) html += '<h2 class="list-heading">Working papers</h2>' + wp.map(pubEntry).join("");
    if (pub.length) {
      if (wp.length) html += '<h2 class="list-heading">Publications</h2>';
      html += groupByYear(pub, function (p) { return p.year; }).map(function (g) {
        return '<div class="year-label">' + g.year + "</div>" + g.items.map(pubEntry).join("");
      }).join("");
    }
    return html;
  }

  /* ---------- talks ---------- */
  function talkEntry(t) {
    var abs = (t.abstract || []).map(function (s) {
      return (s.heading ? "<h4>" + esc(s.heading) + "</h4>" : "") +
        s.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    }).join("");
    var meta = [t.event, t.location, t.dateLabel || niceDate(t.date)].filter(Boolean).map(esc).join(" · ");
    return '<article class="entry" id="' + t.id + '">' +
      '<h3 class="entry-title">' + tag(t.type) + (t.award ? tag(t.award, "tag-award") : "") + esc(t.title) + "</h3>" +
      (t.symposium ? '<p class="entry-meta">Part of symposium: <em>' + esc(t.symposium) + "</em></p>" : "") +
      '<p class="entry-meta">' + meta + "</p>" +
      (t.citation ? '<p class="entry-citation">' + richCitation(t.citation) + "</p>" : "") +
      (abs ? '<details><summary>Abstract</summary><div class="abstract">' + abs + "</div></details>" : "") +
      "</article>";
  }

  function talkList(today) {
    today = today || todayISO();
    var upcoming = window.TALKS.filter(function (t) { return t.date > today; }).reverse(); // soonest first
    var past = window.TALKS.filter(function (t) { return t.date <= today; });
    var html = "";
    if (upcoming.length) html += '<h2 class="list-heading">Upcoming</h2>' + upcoming.map(talkEntry).join("") +
      '<h2 class="list-heading">Past talks &amp; posters</h2>';
    html += groupByYear(past, function (t) { return t.date.slice(0, 4); }).map(function (g) {
      return '<div class="year-label">' + g.year + "</div>" + g.items.map(talkEntry).join("");
    }).join("");
    return html;
  }

  /* ---------- CV ---------- */
  function cv() {
    var C = window.CV;
    var html = C.sections.map(function (s) {
      return "<h2>" + esc(s.heading) + "</h2>" + s.items.map(function (it) {
        return '<div class="cv-item' + (it.current ? " current" : "") + '">' +
          '<div class="cv-when">' + esc(it.when) + "</div><div>" +
          '<p class="cv-what">' + esc(it.what) + (it.where ? ' <span class="cv-where">— ' + esc(it.where) + "</span>" : "") + "</p>" +
          (it.details ? "<ul>" + it.details.map(function (d) { return "<li>" + d + "</li>"; }).join("") + "</ul>" : "") +
          "</div></div>";
      }).join("");
    }).join("");
    var cite = function (p) {
      return "<li>" + richCitation(p.citation) + (p.sharedFirst ? " <em>[shared first authorship]</em>" : "") +
        (p.type === "Preprint" ? " <em>[preprint]</em>" : "") +
        (p.award ? " <em>[" + esc(p.award) + "]</em>" : "") + "</li>";
    };
    var pubs = window.PUBLICATIONS.filter(function (p) { return !p.workingPaper; });
    var wps = window.PUBLICATIONS.filter(function (p) { return p.workingPaper; });
    html += '<h2>Publications</h2><ul class="cv-list">' + pubs.map(cite).join("") + "</ul>";
    if (wps.length) html += '<h2>Working papers</h2><ul class="cv-list">' + wps.map(cite).join("") + "</ul>";
    html += '<h2>Selected talks</h2><ul class="cv-list">' +
      window.TALKS.filter(function (t) { return t.selected; })
        .map(function (t) { return "<li>" + richCitation(t.citation) + "</li>"; }).join("") + "</ul>" +
      '<p class="cv-more"><a href="talks.html">All talks and posters →</a></p>';
    return html;
  }

  /* ---------- research ---------- */
  function research() {
    var pubById = {}, talkById = {};
    (window.PUBLICATIONS || []).forEach(function (p) { pubById[p.id] = p; });
    (window.TALKS || []).forEach(function (t) { talkById[t.id] = t; });
    return window.RESEARCH.map(function (r) {
      var pub = pubById[r.selectedPublication], talk = talkById[r.selectedTalk];
      return '<section class="card' + (r.featured ? " featured" : "") + '">' +
        "<h3>" + esc(r.title) + "</h3><p>" + r.description + "</p>" +
        "<h4>Work in progress</h4><ul>" + r.projects.map(function (p) {
          return '<li><span class="project-name">' + esc(p.name) + ".</span> " + p.text +
            (p.link ? ' <a href="' + p.link.url + '">' + esc(p.link.label) + "</a>" : "") + "</li>";
        }).join("") + "</ul>" +
        (pub ? '<h4>Selected publication</h4><p><a href="publications.html#' + pub.id + '">' + esc(pub.title) + "</a> (" + pub.year + ")</p>" : "") +
        (talk ? '<h4>Selected talk</h4><p><a href="talks.html#' + talk.id + '">' + esc(talk.title) + "</a>, " + esc(talk.event) + "</p>" : "") +
        "</section>";
    }).join("");
  }

  /* ---------- media ---------- */
  var MEDIA_KINDS = {
    video:   { icon: "fa-solid fa-play",           label: "Video" },
    tv:      { icon: "fa-solid fa-tv",             label: "TV" },
    article: { icon: "fa-regular fa-newspaper",    label: "Article" },
    radio:   { icon: "fa-solid fa-radio",          label: "Radio" },
    podcast: { icon: "fa-solid fa-podcast",        label: "Podcast" },
    exhibit: { icon: "fa-solid fa-building-columns", label: "Exhibition" },
    social:  { icon: "fa-solid fa-mobile-screen",  label: "Social media" }
  };

  function media() {
    return '<ul class="media-grid">' + window.MEDIA.map(function (m) {
      var k = MEDIA_KINDS[m.kind] || MEDIA_KINDS.article;
      var thumb = m.image
        ? '<img src="' + m.image + '" alt="" loading="lazy"' + (m.imageFit === "contain" ? ' class="fit-contain"' : "") +
            (m.imageFocus ? ' style="object-position:' + esc(m.imageFocus) + '"' : "") + ">" +
            (m.kind === "video" || m.kind === "tv" || m.kind === "social" || m.kind === "podcast" ? '<span class="media-play" aria-hidden="true"><i class="fa-solid fa-play"></i></span>' : "")
        : '<span class="media-placeholder"><i class="' + k.icon + '" aria-hidden="true"></i><span>' + esc(m.outlet) + "</span></span>";
      var meta = [k.label, m.lang ? "in " + m.lang : "", m.year || ""].filter(Boolean).map(esc).join(" · ");
      return '<li><a class="media-card" href="' + m.url + '">' +
        '<span class="media-thumb">' + thumb + "</span>" +
        '<span class="media-body">' +
          '<span class="media-outlet">' + esc(m.outlet) + "</span>" +
          '<span class="media-title">' + esc(m.text) + "</span>" +
          (m.subtitle ? '<span class="media-subtitle">' + esc(m.subtitle) + "</span>" : "") +
          '<span class="media-meta"><i class="' + k.icon + '" aria-hidden="true"></i>' + meta + "</span>" +
        "</span></a></li>";
    }).join("") + "</ul>";
  }

  // Which renderer fills which element. Used by the browser and by the build.
  var REGIONS = {
    "site-header":   function (page) { return header(page); },
    "sidebar":       function () { return sidebar(); },
    "site-footer":   function () { return footer(); },
    "pub-filters":   function () { return pubFilters("All"); },
    "pub-list":      function () { return pubList("All"); },
    "talk-list":     function (page, today) { return talkList(today); },
    "cv-body":       function () { return cv(); },
    "research-list": function () { return research(); },
    "media-list":    function () { return media(); }
  };

  window.SiteRender = { regions: REGIONS, sortData: sortData };

  /* ---------- in the browser ---------- */
  if (typeof document === "undefined") return; // running inside tools/build.js

  function setupThemeToggle() {
    var btn = document.getElementById("theme-toggle"), root = document.documentElement;
    if (!btn) return;
    var paint = function () {
      var light = root.getAttribute("data-theme") === "light";
      btn.textContent = light ? "☾" : "☀";
      btn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
      btn.title = btn.getAttribute("aria-label");
    };
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });
    paint();
  }

  function setupPubFilters() {
    var f = document.getElementById("pub-filters"), list = document.getElementById("pub-list");
    if (!f || !list) return;
    f.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      f.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x === b); });
      list.innerHTML = pubList(b.dataset.f);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    sortData();
    var page = location.pathname.split("/").pop() || "index.html";
    // Redraw every region from the latest data (so edits show even before a build).
    Object.keys(REGIONS).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = REGIONS[id](page, todayISO());
    });
    setupThemeToggle();
    setupPubFilters();
    // jump to #anchor after lists are drawn
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  });
})(typeof window !== "undefined" ? window : this);
