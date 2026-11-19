# How to update this website

This is a plain HTML website. There is nothing to install:
you edit a text file, save it, and refresh the page.

Use any plain-text editor. Good free options are **VS Code** (recommended, because
it colours the code and warns you about mistakes) and **TextEdit** on a Mac (set it to
*Format → Make Plain Text* first). Do **not** use Word or Pages.

**The short version:** edit a file in `data/` → refresh the page to check →
run the build (section 13) → upload.

---

## Contents

1. [Where everything lives](#1-where-everything-lives)
2. [Previewing your changes](#2-previewing-your-changes)
3. [The three golden rules for data files](#3-the-three-golden-rules-for-data-files)
4. [Add a talk (and upcoming talks)](#4-add-a-talk-and-upcoming-talks)
5. [Add a publication or preprint](#5-add-a-publication-or-preprint)
6. [Add media coverage](#6-add-media-coverage)
7. [Update the CV](#7-update-the-cv)
8. [Update the research lines](#8-update-the-research-lines)
9. [Update the biography (About page)](#9-update-the-biography-about-page)
10. [Change your name, photo, or contact links](#10-change-your-name-photo-or-contact-links)
11. [Change the menu or add a page](#11-change-the-menu-or-add-a-page)
12. [Change colours, fonts and layout](#12-change-colours-fonts-and-layout)
13. [Before uploading: run the build](#13-before-uploading-run-the-build)
14. [Replace files (PDF CV, images, link preview)](#14-replace-files-pdf-cv-images-link-preview)
15. [Putting the site online](#15-putting-the-site-online)
16. [Something broke? Troubleshooting](#16-something-broke-troubleshooting)

---

## 1. Where everything lives

```
html-site/
├── index.html          About page (your biography is written directly in here)
├── research.html       Research      (content from data/research.js)
├── publications.html   Publications  (content from data/publications.js)
├── talks.html          Talks         (content from data/talks.js)
├── media.html          Media         (content from data/media.js)
├── cv.html             CV            (content from data/cv.js + publications + talks)
│
├── data/               ← YOUR CONTENT. This is where you will edit most.
│   ├── profile.js        name, photo, Contact & Links, menu, "last updated"
│   ├── cv.js             education, work experience, service
│   ├── publications.js   all publications, preprints and working papers
│   ├── talks.js          all talks and posters (past and upcoming)
│   ├── media.js          selected media coverage (pictures in images/media/)
│   └── research.js       research lines
│
├── assets/
│   ├── style.css         ALL the styling (colours, fonts, sizes)
│   ├── site.js           the machinery that draws the pages; normally don't touch
│   └── vendor/           fonts and icons, stored on the site itself; don't touch
│
├── tools/build.js      the build step you run before uploading (section 13)
├── files/              cv.pdf and other downloadable files
├── images/             avatar.jpg (sidebar photo) and share.jpg (link preview)
└── CNAME, .nojekyll, favicon…   web-address and hosting settings; leave alone
```

**Important to know:** publications and talks are written **once** and appear in
several places automatically. Publications appear on the Publications page and on the CV.
Talks appear on the Talks page, and *selected* talks also appear on the CV.

Inside each `.html` page you will see blocks marked `<!--auto--> … <!--/auto-->`.
These are filled in automatically from the data files. **Never edit inside them**;
your change would be overwritten. Edit the data file instead.

---

## 2. Previewing your changes

**Quick way:** double-click `index.html` to open it in your browser.
This works for most things.

**Proper way (exactly how it will look online):**

1. Open the **Terminal** app.
2. Type `cd ` (with a space after it), drag the `html-site` folder into the
   Terminal window, and press Enter.
3. Type this and press Enter:
   ```bash
   python3 -m http.server 8765
   ```
4. Open <http://localhost:8765> in your browser.
5. After each change: save the file, then refresh the browser
   (**Cmd + Shift + R** forces a full refresh if you don't see your change).
6. When done, go back to Terminal and press **Ctrl + C** to stop it.

---

## 3. The three golden rules for data files

The files in `data/` are lists of entries. Each entry sits between curly
brackets `{ … }`. If a page suddenly shows **nothing**, one of these rules was broken.

**Rule 1: every text value is inside double quotes.**
```js
"title": "The Benefits and Costs of Gossip",
```
Numbers and `true` / `false` have **no** quotes: `"year": 2026,` and `"selected": true,`

**Rule 2: every line inside an entry ends with a comma, except the last one.
Entries are separated by commas too.**
```js
  {
    "title": "First talk",
    "location": "Leiden, The Netherlands"      ← last line: no comma
  },                                           ← comma between entries
  {
    "title": "Second talk",
    ...
```

**Rule 3: quote marks inside a text.** An apostrophe `'` is fine.
A double quote `"` inside a text must be written as `\"`, or use curly quotes “ ” instead.
```js
"title": "What is \"gossip\"?",      ✔
"title": "What is “gossip”?",        ✔
"title": "What is "gossip"?",        ✘ breaks the page
```

**Tips**
- Lines starting with `//` are notes for you; the website ignores them.
- You may use simple HTML inside texts: `<i>italic</i>`, `<strong>bold</strong>`,
  `<a href="https://…">link text</a>`.
- Easiest method: **copy an existing entry, paste it, and change the values**.
- Make a copy of a file before big edits, so you can always go back.

---

## 4. Add a talk (and upcoming talks)

Open **`data/talks.js`**. Copy this block and paste it directly after the line
`window.TALKS = [`. The site sorts talks by date for you, so the exact position
doesn't matter.

```js
  {
    "id": "2027-04-20-KLI-talk",
    "date": "2027-04-20",
    "type": "Talk",
    "title": "Title of the talk",
    "symposium": "",
    "event": "Kurt Lewin Institute Conference",
    "location": "Woudschoten, The Netherlands",
    "citation": "Dores Cruz, T. D., & Co-author, A. (2027, April 20). Title of the talk. Kurt Lewin Institute Conference, Woudschoten, The Netherlands.",
    "selected": false,
    "abstract": []
  },
```

| Field | What to fill in |
|---|---|
| `id` | A unique name with no spaces. Date + short name works well. It becomes the link to this talk: `talks.html#2027-04-20-KLI-talk`. |
| `date` | `YYYY-MM-DD`. If you only know the year, `"2019"` also works. |
| `type` | Shown as a small label: `Talk`, `Invited Talk`, `Public Talk`, `Poster`, `PhD Defense`, `Talk (cancelled)`… anything you like. |
| `symposium` | Name of the symposium the talk was part of, or `""` if none. |
| `event`, `location` | Shown under the title. `location` may be `""`. |
| `citation` | The full reference. Your name is made **bold** automatically. |
| `selected` | `true` = **also** listed under "Selected talks" on the CV. `false` = Talks page only. |
| `award` | *Optional.* Add a line like `"award": "Best Poster Award",` to show a gold label. |
| `dateLabel` | *Optional.* Overrides how the date is shown, e.g. `"dateLabel": "December 9–10, 2026",`. |
| `abstract` | `[]` for no abstract. See below to add one. |

**Upcoming talks happen automatically.** Any talk with a date in the future appears
under **Upcoming** at the top of the Talks page. The day after the talk, it moves into
the normal list by itself. You don't need to change anything.

**Adding an abstract** (shown behind an "Abstract" button). Replace `[]` with:

```js
    "abstract": [
      {
        "heading": "",
        "paragraphs": [
          "First paragraph of the abstract.",
          "Second paragraph of the abstract."
        ]
      }
    ]
```

For a symposium with two parts, use two sections, each with its own heading:

```js
    "abstract": [
      { "heading": "Symposium", "paragraphs": ["Symposium abstract…"] },
      { "heading": "Talk",      "paragraphs": ["Talk abstract…"] }
    ]
```

**Removing a talk:** delete the whole `{ … },` block, including its comma.

---

## 5. Add a publication or preprint

Open **`data/publications.js`**. Paste a new entry directly after `window.PUBLICATIONS = [`:

```js
  {
    "id": "2027-06-01-Short-Title",
    "year": 2027,
    "type": "Article",
    "title": "Full title of the paper",
    "venue": "Journal Name",
    "citation": "Dores Cruz, T. D., & Co-author, A. (2027). Full title of the paper. <i>Journal Name, 12</i>(3), 45–67. https://doi.org/10.xxxx/xxxxx",
    "sharedFirst": false,
    "summary": "One or two sentences in plain language.",
    "abstract": "The full abstract.",
    "links": {
      "Paper": "https://doi.org/10.xxxx/xxxxx",
      "OSF": "https://osf.io/xxxxx/"
    }
  },
```

| Field | What to fill in |
|---|---|
| `id` | Unique, no spaces. Becomes the link `publications.html#2027-06-01-Short-Title`. |
| `year` | A number, **without** quotes. Publications are sorted and grouped by year. |
| `type` | `"Article"`, `"Book"` or `"Preprint"`. Books and preprints get a small label, and the filter buttons use this too. |
| `workingPaper` | *Optional.* Add `"workingPaper": true,` to show the paper under **Working papers** at the top of the Publications page and the CV, instead of in the year list. Use it for current, unpublished work. |
| `citation` | Full reference, shown on the Publications page **and the CV**. Web addresses become clickable automatically. |
| `sharedFirst` | `true` adds a "Shared first author" label; otherwise `false`. No quotes. |
| `award` | *Optional.* Add a line like `"award": "Best Paper Award",` to show a gold label. |
| `summary` | *Optional.* Short description under the title. Use `""` to leave it out. |
| `abstract` | *Optional.* Shown behind an "Abstract" button. Use `""` to leave it out. |
| `links` | Buttons under the entry. Any label works (`"Paper"`, `"Preprint"`, `"OSF"`, `"Slides"`, `"Data"`). Use `{}` for none. The last link has no comma. |

**When a working paper gets published:** change `"type": "Preprint"` to `"type": "Article"`,
delete the `"workingPaper": true,` line, update `venue`, `year` and `citation`, and add a
`"Paper"` link. It moves from Working papers into the year list by itself.

---

## 6. Add media coverage

Open **`data/media.js`**. Each item becomes a card on the Media page. Cards are sorted by
`year`, newest first; within the same year your order in the file is kept.
Copy a block and edit it:

```js
  {
    outlet: "de Volkskrant",
    text: "Interview about office gossip",
    url: "https://…",
    kind: "article", lang: "Dutch", year: "2025",
    image: "images/media/volkskrant-gossip.jpg"
  },
```

- `outlet`: the newspaper, programme or channel (small green label).
- `text`: what it was about (the card's title).
- `subtitle`: *optional* second line under the title.
- `kind`: `"article"`, `"video"`, `"tv"`, `"radio"`, `"podcast"`, `"social"` or `"exhibit"`.
  Sets the small icon. Video, TV, social and podcast cards with a picture get a play button.
- `lang`, `year`: *optional*. Shown as "in Dutch · 2025". Leave the line out if unknown.
- `image`: *optional* picture for the card. Without one, the card shows a green panel
  with an icon and the outlet name.
- `imageFit`: *optional*. `"contain"` shows the whole picture without cropping, on a green
  background. Good for square podcast covers and logos.
- `imageFocus`: *optional*. Which part of the picture to keep when it's cropped to fit,
  e.g. `"center 25%"` keeps the area a bit above the middle (handy for faces).
- The last block in the list has **no comma** after its `}`.

**Getting a picture for a card:**
- *YouTube videos:* take the video ID from the link (the part after `v=` or after `/shorts/`)
  and download `https://i.ytimg.com/vi/VIDEO-ID/hqdefault.jpg`.
- *Articles:* save the article's main photo (right-click → Save Image), or a screenshot.
- Save it in `images/media/`, ideally landscape and about 600–800 pixels wide, and put
  its path in `image`.
- Only use pictures from coverage of your own work. Remove one if the outlet asks.

## 7. Update the CV

Open **`data/cv.js`**. The CV has sections (Education, Work experience, Service),
each with a list of items, newest first.

One item looks like this:

```js
{ when: "2026–now", what: "Postdoctoral Researcher", where: "Vrije Universiteit Amsterdam", current: true },
```

- `when`: the dates on the left.
- `what`: the role or degree.
- `where`: the institution, shown after a dash.
- `current: true`: *optional*, shows the item in **bold**.
- `details`: *optional* sub-points under an item, such as visiting positions:

```js
{ when: "2023–2025", what: "Postdoctoral Researcher", where: "Universiteit van Amsterdam",
  details: ["Visiting Researcher, University of Duisburg-Essen, 2025"] },
```

For several sub-points, separate them with commas: `details: ["First", "Second"]`.

**Starting a new job?** Remove `current: true` from the old job, add the new item at the
top of "Work experience", and give it `current: true`. Also update the biography
(section 9) and your title (section 10).

**Adding a whole new section** (for example "Awards"): copy an existing section block,
from `{ heading: …` down to its closing `},`, and change the heading and items:

```js
    {
      heading: "Awards",
      items: [
        { when: "2022", what: "Ig Nobel Peace Prize", where: "Improbable Research" }
      ]
    },
```

The **Publications**, **Working papers** and **Selected talks** lists at the bottom of the CV
fill in automatically. To change which talks show on the CV, set `"selected": true` or
`false` on the talk in `talks.js`.

**The PDF CV:** see section 14.

---

## 8. Update the research lines

Open **`data/research.js`**. Each research line is one card:

```js
  {
    title: "Name of the research line",
    featured: true,
    description: "One or two sentences about this line of research.",
    projects: [
      { name: "Project name", text: "What the project is about.",
        link: { label: "Preregistration", url: "https://osf.io/xxxxx/" } },
      { name: "Another project", text: "Description." }
    ],
    selectedPublication: "2021-10-04-Gossip-and-Reputation-in-Everyday-Life",
    selectedTalk: "2024-07-04-ICSD-talk"
  },
```

- `featured: true` makes the card full-width at the top. Leave the line out for normal cards.
- `link` on a project is optional.
- `selectedPublication` / `selectedTalk`: copy the **`id`** of an entry from
  `publications.js` or `talks.js`. The title and link are filled in for you.
  Use `""` for none.
- The cards appear in the order they are listed.

---

## 9. Update the biography (About page)

Open **`index.html`** and look for the comment `BIOGRAPHY: edit the text below directly`.

Each paragraph sits between `<p>` and `</p>`. Edit the text directly.

- **New paragraph:** add another `<p>…</p>`.
- **Link:** `<a href="https://example.com">text to click</a>`
- **Interests box:** each interest is one `<li>…</li>` line in the list below the biography.
- **Featured Publication box:** change the image file name (`files/featured.jpeg`), the link
  (`publications.html#…id…`), and the reference text.
- **Featured Media box:** sits next to Featured Publication. Change the YouTube link (it
  appears twice: on the picture and on the text), the picture (`images/media/…`), the
  heading line (`<h4>…</h4>`) and the reference text. For a YouTube video, a preview
  picture can be downloaded as described in section 6.
- The Interests, Featured Publication and Featured Media boxes always line up at the
  same height. On medium screens Interests moves to the top, and on phones they stack.

In HTML, write `&amp;` for an `&` sign.

---

## 10. Change your name, photo, or contact links

Open **`data/profile.js`**.

- `siteTitle`: the name in the top-left of the green bar.
- `name` and `title`: shown under the photo.
- `photo`: the picture file (see section 14).
- `lastUpdated`: the date in the footer. **Filled in automatically** by the build (section 13).
- `links`: the Contact & Links box, in the order listed.
  Delete a line to remove a link, or copy a line to add one:

```js
{ label: "Bluesky", icon: "fa-brands fa-bluesky", url: "https://bsky.app/profile/yourname" },
```

**Finding icons:**
- General and social-media icons: search on <https://fontawesome.com/v6/search?o=r&m=free>
  and copy the class, for example `fa-brands fa-github` or `fa-solid fa-envelope`.
  The site includes Font Awesome **6.5.2 (free)**, so icons added after that version
  won't show.
- Academic icons: <https://jpswalsh.github.io/academicons/>, for example `ai ai-google-scholar`,
  `ai ai-orcid`, `ai ai-osf`.

---

## 11. Change the menu or add a page

The menu is at the bottom of **`data/profile.js`** (`window.NAV`).
Change the order, rename a label, or remove a line.

**Adding a completely new page** (for example "Teaching"):
1. Copy `media.html` and rename the copy `teaching.html`.
2. In the new file:
   - change the `<title>`, the `description`, and the `og:…` lines near the top
     (these control how the page looks in Google and in link previews);
   - change `media.html` to `teaching.html` in the `canonical` and `og:url` lines;
   - replace everything between `<main>` and `</main>` with your own content
     (`<h1>Teaching</h1>`, `<p>…</p>`, and so on);
   - remove the line `<script src="data/media.js"></script>`.
3. Add `{ label: "Teaching", url: "teaching.html" },` to `window.NAV`.

---

## 12. Change colours, fonts and layout

Everything visual is in **`assets/style.css`**. You will almost only need
**section 1 (SETTINGS)** at the top of the file.

Colours are written as hex codes like `#014638`. Pick new ones with any colour picker,
for example by searching "color picker" in Google.

| Setting | What it controls |
|---|---|
| `--brand` | Dark green of the top bar and buttons |
| `--accent` | Link colour (mint green in dark mode) |
| `--hover` | Gold link colour when hovering over page text |
| `--hover-on-green` | Gold when hovering in the green top bar, and the bar under the current menu item |
| `--contact-hover` | Gold when hovering inside the Contact & Links box |
| `--bg` | Page background (the grey, or warm off-white in light mode) |
| `--text`, `--text-muted` | Main and secondary text colour |
| `--accent-soft` | Background of the cards and labels |
| `--contact-bg`, `--contact-text` | The Contact & Links box |
| `--font-body`, `--font-ui` | Fonts for body text and for headings and menus |
| `--font-size` | Base text size. Everything scales with it. |
| `--page-width` | Maximum width of the page on big screens |
| `--text-width` | Maximum line length of paragraphs, for easier reading |
| `--sidebar-width` | Width of the left column with your photo |

There are **two colour blocks**: the first is **dark mode** and the second,
`:root[data-theme="light"]`, is **light mode**. On their first visit, people see
whichever matches their device setting. After they click the sun/moon button,
their choice is remembered.

**About the gold hover colours:** they are tuned so text is easy to read for people
with poorer eyesight. Each reaches the recommended contrast of 4.5:1 against its
background. If you change them or a background colour, check the result at
<https://webaim.org/resources/contrastchecker/> and aim for at least 4.5:1.

Other handy spots in `style.css` (search for these words):
- **Photo shape**: search `Photo: oval`. Set `aspect-ratio: 1` for a circle.
- **Gold bar under the menu item**: search `gold bar under the page you are on`.
  `height` = thickness, `left`/`right` = length.
- **Contact box roundness**: search `Contact & Links`, then change `border-radius`.

**Fonts:** Inter (headings and menus) and Source Serif 4 (body text) are stored on the site
in `assets/vendor/fonts/`, so visitors' browsers never contact Google. To use another
font, put its `.woff2` file in that folder, add it to `assets/vendor/fonts/fonts.css`
in the same way, and change `--font-body` or `--font-ui`.

---

## 13. Before uploading: run the build

Visitors' browsers draw the pages from the data files, so your changes always show up.
But search engines, Google Scholar and link previews (LinkedIn, WhatsApp…) only read
the page files themselves. The **build** writes your latest content into the pages
for them, and sets the "Last updated" date in the footer to today.

Run it **after editing and before uploading**:

1. Open **Terminal**, type `cd ` (with a space), drag the `html-site` folder in, press Enter.
2. Type this and press Enter:
   ```bash
   osascript -l JavaScript tools/build.js
   ```
3. You should see `Build finished (today's date)` and a line for each page.

This uses JavaScript that is built into every Mac, so there is nothing to install.
If you forget to run it, nothing breaks for visitors. Search engines just see the
previous version until the next time you build.

---

## 14. Replace files (PDF CV, images, link preview)

- **New PDF CV:** save it as `cv.pdf` and put it in the `files/` folder, replacing the old one.
  The "Download full CV" button keeps working. Tip: export it at a reduced size. Aim for
  under 1–2 MB; the current one is 16 MB, which is slow to download on phones.
- **New photo:** save it as `avatar.jpg` in `images/`, replacing the old one. Use a
  portrait photo of roughly 900 pixels wide. Larger files only slow the site down.
  If you use a different file name, update `photo` in `data/profile.js`.
- **Link preview image:** `images/share.jpg` is what LinkedIn, Bluesky, WhatsApp etc. show
  when someone shares your site. Use a square image of about 800 × 800 pixels.
- **Link preview text:** each page's `<title>` and `description` line near the top of
  its `.html` file. The same text is repeated in the `og:title` / `og:description` lines.
  Keep them matching.
- **New featured image:** put it in `files/` and update the file name in `index.html`.

LinkedIn and others remember previews for a while. After changing them, paste your
link into <https://www.linkedin.com/post-inspector/> to refresh LinkedIn's copy.

---

## 15. Putting the site online

The site is a folder of plain files, so it works on any web host. **Run the build
(section 13) first**, then upload **the contents of `html-site`** (not the folder
itself), so that `index.html` sits at the top level.

**If you keep using GitHub Pages** (as with the old Jekyll site):
1. In your GitHub repository, replace the old Jekyll files with the contents of `html-site`.
   Keep a backup of the old version, for example in a separate branch.
2. The empty file `.nojekyll` tells GitHub not to treat the site as a Jekyll site.
   Make sure it is uploaded. It is hidden on a Mac; press **Cmd + Shift + .** in
   Finder to show hidden files.
3. The `CNAME` file keeps your web address `terencedorescruz.com`. Don't delete it.
4. Changes appear online within a few minutes after you commit.

You can also edit data files directly on github.com: open a file, click the pencil icon,
make your change, and click **Commit changes**. The change is live straight away;
just run the build on your Mac next time, so search engines catch up.

**Old links:** the old site used addresses like `/talks/2024-07-04-ICSD-talk`.
Those now live at `talks.html#2024-07-04-ICSD-talk`. Update any links you shared elsewhere.

---

## 16. Something broke? Troubleshooting

**A list or page is suddenly empty.**
There is almost certainly a typo in the data file you just edited. Check:
- a missing or extra **comma** (rule 2), especially at the end of the entry you added;
- a missing closing **quote** `"` or bracket `}` `]`;
- a **double quote inside a text** that isn't written as `\"` (rule 3).

To find the exact spot: in Chrome or Safari, right-click the page → **Inspect** →
**Console** tab. A red message such as `Unexpected string … talks.js:42` points to
the file and **line number** with the problem. VS Code also underlines mistakes in red.
The build (section 13) also stops with an error message if a data file has a typo.

**My change doesn't show up.**
Save the file, then press **Cmd + Shift + R** in the browser to force a full refresh.

**An upcoming talk doesn't appear under "Upcoming".**
Check the `date` is in `YYYY-MM-DD` format and in the future.

**Icons show as empty squares.**
The icon name is probably misspelled, or the icon is newer than Font Awesome 6.5.2.
Check it on the Font Awesome or Academicons site (section 10).

**The layout looks wrong after editing `style.css`.**
Check that every line ends with `;` and that every `{` has a matching `}`.
If stuck, restore your backup copy of the file.

**Last resort:** restore your backup copy of the file you changed, or the previous version
on GitHub ("History" button on any file), and make the change again in smaller steps.
