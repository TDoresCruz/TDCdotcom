// ==============================================================
//  BUILD  -  run this after editing, before uploading the site.
//
//  From the html-site folder, in Terminal:
//      osascript -l JavaScript tools/build.js
//
//  What it does:
//   1. Sets "Last updated" (data/profile.js) to today's date.
//   2. Writes the full content (publications, talks, CV, …) into
//      each .html page, so search engines, Google Scholar and link
//      previews can read it without running any scripts.
//  Visitors' browsers always redraw the pages from /data anyway,
//  so forgetting to build never breaks the site; it only means
//  search engines see the previous version until the next build.
//  Uses macOS's built-in JavaScript, so there is nothing to install.
// ==============================================================
ObjC.import("Foundation");

var fm = $.NSFileManager.defaultManager;
var ROOT = fm.currentDirectoryPath.js;

function read(rel) {
  var s = $.NSString.stringWithContentsOfFileEncodingError(ROOT + "/" + rel, $.NSUTF8StringEncoding, null);
  if (!s || s.isNil()) throw new Error("Could not read " + rel + " (run this from inside the html-site folder)");
  return s.js;
}
function write(rel, text) {
  $(text).writeToFileAtomicallyEncodingError(ROOT + "/" + rel, true, $.NSUTF8StringEncoding, null);
}

function run() {
  if (!fm.fileExistsAtPath(ROOT + "/index.html")) {
    return "Please run this from inside the html-site folder:\n  cd path/to/html-site\n  osascript -l JavaScript tools/build.js";
  }

  // 1. Last updated = today
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var d = new Date();
  var today = d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear();
  var z = function (n) { return (n < 10 ? "0" : "") + n; };
  var todayISO = d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
  var profile = read("data/profile.js").replace(/lastUpdated:\s*"[^"]*"/, 'lastUpdated: "' + today + '"');
  write("data/profile.js", profile);

  // 2. Load data + renderers exactly as the browser does
  var window = {};
  var load = function (rel) {
    try { (new Function("window", read(rel)))(window); }
    catch (e) { throw new Error("Problem in " + rel + " - " + e.message + "\n(Check commas and quote marks near that line; nothing was changed in the pages.)"); }
  };
  ["data/profile.js", "data/cv.js", "data/publications.js", "data/talks.js", "data/research.js", "data/media.js", "assets/site.js"]
    .forEach(function (f) { if (fm.fileExistsAtPath(ROOT + "/" + f)) load(f); });
  var R = window.SiteRender;
  R.sortData();

  var pages = fm.contentsOfDirectoryAtPathError(ROOT, null).js
    .map(function (x) { return x.js; })
    .filter(function (x) { return /\.html$/.test(x); });

  var report = [];
  pages.forEach(function (page) {
    var html = read(page), count = 0;
    Object.keys(R.regions).forEach(function (id) {
      var re = new RegExp('(id="' + id + '"[^>]*>)<!--auto-->[\\s\\S]*?<!--/auto-->');
      if (re.test(html)) {
        var inner = R.regions[id](page, todayISO);
        html = html.replace(re, function (_, open) { return open + "<!--auto-->" + inner + "<!--/auto-->"; });
        count++;
      }
    });
    write(page, html);
    report.push("  " + page + ": " + count + " sections updated");
  });
  return "Build finished (" + today + ")\n" + report.join("\n");
}

run();
