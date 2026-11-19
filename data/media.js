// ============================================================
//  SELECTED MEDIA COVERAGE  -  shown on the Media page as cards,
//  sorted by year (newest first; items without a year go last).
//  Within the same year, your order below is kept.
//  To add an item: copy one { ... } block and edit it.
//    outlet: name of the newspaper / programme / channel
//    text:   what it was about (the card's title)
//    subtitle: optional second line under the title
//    url:    link to the item
//    kind:   "video", "tv", "article", "radio", "podcast", "social"
//            or "exhibit" (sets the small icon, and the picture if
//            there is no image)
//    lang:   optional, e.g. "Dutch" (shown as "in Dutch")
//    year:   optional, e.g. "2024"
//    image:  optional picture for the card, e.g. "images/media/name.jpg"
//            (landscape works best; without one, a green panel with
//            an icon and the outlet name is shown instead)
//    imageFocus: optional, which part of the picture to keep when it is
//            cropped, e.g. "center 25%" (= a bit above the middle)
//    imageFit: optional, "contain" shows the whole picture without
//            cropping (good for square podcast covers and logos)
// ============================================================
window.MEDIA = [
  // ---------- 2026 ----------
  {
    outlet: "Universiteit van Nederland",
    text: "Van een praatje word je gelukkiger",
    url: "https://www.youtube.com/shorts/It_6yvY__ls",
    kind: "social", lang: "Dutch", year: "2026",
    image: "images/media/universiteit-van-nederland-praatje.jpg", imageFocus: "center 22%"
  },
  {
    outlet: "Spijkers met Koppen (NPO Radio 2)",
    text: "Maak ook eens een praatje, daar word je blij van",
    url: "https://www.nporadio2.nl/nieuws/npo-radio-2/10bae179-6716-48b7-bc45-9f814b017467/maak-ook-eens-een-praatje-daar-word-je-blij-van",
    kind: "radio", lang: "Dutch", year: "2026"
  },
  {
    outlet: "Vrije Universiteit Amsterdam",
    text: "VU-onderzoek: een praatje hangt samen met meer geluk, vertrouwen en sociale verbondenheid",
    url: "https://vu.nl/nl/nieuws/2026/vu-onderzoek-een-praatje-hangt-samen-met-meer-geluk-vertrouwen-en-sociale-verbondenheid",
    kind: "article", lang: "Dutch", year: "2026",
    image: "images/media/vu-praatje-geluk.jpg"
  },
  {
    outlet: "Het Parool",
    text: "Opinie: ‘De drempel voor een praatje op straat is te groot geworden. Als we zo doorgaan, glijden we af naar een zwijgzame maatschappij’",
    url: "https://www.parool.nl/columns-opinie/opinie-de-drempel-voor-een-praatje-op-straat-is-te-groot-geworden-als-we-zo-doorgaan-glijden-we-af-naar-een-zwijgzame-maatschappij~b134bf86/",
    kind: "article", lang: "Dutch", year: "2026"
  },
  {
    outlet: "Ad Valvas",
    text: "We maken te weinig praatjes op straat",
    url: "https://advalvas.vu.nl/student-maatschappij/we-maken-te-weinig-praatjes-op-straat/",
    kind: "article", lang: "Dutch", year: "2026",
    image: "images/media/advalvas-praatjes-op-straat.jpg"
  },
  {
    outlet: "De Nacht van… (NPO Radio 1)",
    text: "Maak een praatje; dat helpt je in een crisis",
    url: "https://www.nporadio1.nl/fragmenten/de-nacht-van/01a036d2-6de6-73f6-8849-76075e35ad6a/2026-08-25-maak-een-praatje-dat-helpt-je-in-een-crisis",
    kind: "radio", lang: "Dutch", year: "2026",
    image: "images/media/npo-radio1-praatje-crisis.jpg"
  },

  // ---------- 2025 ----------
  {
    outlet: "De Dikke Data Show (VPRO, NPO)",
    text: "Juicekanalen",
    url: "https://npo.nl/start/afspelen/juicekanalen",
    kind: "tv", lang: "Dutch", year: "2025",
    image: "images/media/dikke-data-show-juicekanalen.jpg"
  },

  // ---------- 2024 ----------
  {
    outlet: "Women's Health",
    text: "Gossip Can Be (Kinda) Good For You—But Only If You Follow These Rules",
    url: "https://www.womenshealthmag.com/life/a63008180/how-to-stop-gossiping/",
    kind: "article", year: "2024",
    image: "images/media/womens-health-gossip.jpg"
  },
  {
    outlet: "Radio Swammerdam",
    text: "Tussen feit en fictie - De functie én het belang van roddelen",
    url: "https://open.spotify.com/episode/2lYwXFjSOzzlJIMkdEMYIb",
    kind: "podcast", lang: "Dutch", year: "2024",
    image: "images/media/radio-swammerdam-roddelen.jpg", imageFit: "contain"
  },
  {
    outlet: "Scientific American",
    text: "The Surprising Benefits of Gossip",
    url: "https://www.scientificamerican.com/article/the-surprising-benefits-of-gossip/",
    kind: "article", year: "2024",
    image: "images/media/scientific-american-gossip.jpg"
  },
  {
    outlet: "The Economist",
    text: "Pssst! Want to read something about rumour and innuendo?",
    subtitle: "Gossip in the workplace",
    url: "https://www.economist.com/business/2024/04/25/pssst-want-to-read-something-about-rumour-and-innuendo",
    kind: "article", year: "2024"
  },

  // ---------- 2023 ----------
  {
    outlet: "Hart van Nederland",
    text: "Twee op de drie Nederlanders roddelt weleens: het liefst over deze dingen",
    url: "https://www.hartvannederland.nl/het-beste-van-hart/panel/artikelen/twee-op-de-drie-nederlanders-roddelt-weleens-het-liefst-over-deze-dingen",
    kind: "tv", lang: "Dutch", year: "2023",
    image: "images/media/hart-van-nederland-roddelen.jpg"
  },
  {
    outlet: "LadderZat (VU Campus Radio)",
    text: "Onderzoek, met Terence Dores Cruz | LadderZat #1",
    url: "https://open.spotify.com/episode/5dPYKdfJcbdYYAOoVxI2OO",
    kind: "podcast", lang: "Dutch", year: "2023",
    image: "images/media/ladderzat-onderzoek.jpg", imageFit: "contain"
  },
  {
    outlet: "Ad Valvas",
    text: "Waarom wij heel veel roddelen",
    url: "https://advalvas.vu.nl/student-maatschappij/waarom-wij-heel-veel-roddelen/",
    kind: "article", lang: "Dutch", year: "2023",
    image: "images/media/advalvas-waarom-roddelen.jpg"
  },

  // ---------- 2022 ----------
  {
    outlet: "BNR Werkverkenners",
    text: "Roddelen op het werk",
    url: "https://www.bnr.nl/podcast/werkverkenners/10490913/roddelen-op-het-werk",
    kind: "podcast", lang: "Dutch", year: "2022"
  },
  {
    outlet: "Ad Valvas",
    text: "VU-wetenschappers winnen Ig Nobelprijs voor onderzoek naar roddelen",
    url: "https://advalvas.vu.nl/wetenschap-onderwijs/vu-wetenschappers-winnen-ig-nobelprijs-voor-onderzoek-naar-roddelen/",
    kind: "article", lang: "Dutch", year: "2022",
    image: "images/media/advalvas-ig-nobel.jpg"
  },
  {
    outlet: "NOS Jeugdjournaal",
    text: "Waarom niemand roddelen leuk vindt, maar iedereen het tóch doet",
    url: "https://www.youtube.com/watch?v=PQsQNFXCK-c",
    kind: "tv", lang: "Dutch", year: "2022",
    image: "images/media/nos-jeugdjournaal-roddelen.jpg"
  },
  {
    outlet: "NU.nl",
    text: "Hoe erg is roddelen op het werk?",
    url: "https://www.nu.nl/werk/6236089/hoe-erg-is-roddelen-op-het-werk.html",
    kind: "article", lang: "Dutch", year: "2022"
  },
  {
    outlet: "de Volkskrant",
    text: "Doe jij mee met kantoorroddels?",
    url: "https://www.volkskrant.nl/werken/doe-jij-mee-met-kantoorroddels~b9b31b07/",
    kind: "article", lang: "Dutch", year: "2022"
  },

  // ---------- 2021 ----------
  {
    outlet: "NEMO Kennislink",
    text: "Meer thuiswerken, minder geroddel",
    url: "https://www.nemokennislink.nl/publicaties/meer-thuiswerken-minder-geroddel/",
    kind: "article", lang: "Dutch", year: "2021",
    image: "images/media/nemo-kennislink-thuiswerken.jpg"
  },
  {
    outlet: "New Scientist",
    text: "Roddelen is hartstikke nuttig voor je netwerk",
    url: "https://www.newscientist.nl/blogs/roddelen-is-hartstikke-nuttig-voor-je-netwerk/",
    kind: "article", lang: "Dutch", year: "2021",
    image: "images/media/new-scientist-roddelen.jpg"
  },
  {
    outlet: "Het Parool",
    text: "Waarom roddelen essentieel is voor ons sociale leven",
    url: "https://www.parool.nl/wereld/waarom-roddelen-essentieel-is-voor-ons-sociale-leven~bd7190bb/",
    kind: "article", lang: "Dutch", year: "2021"
  },
  {
    outlet: "Business & Management INK (Social Science Space)",
    text: "Have You Heard the Latest About Workplace Gossip?",
    url: "https://www.socialsciencespace.com/2021/03/have-you-heard-the-latest-about-workplace-gossip/",
    kind: "article", year: "2021",
    image: "images/media/social-science-space-gossip.jpg"
  },
  {
    outlet: "Ad Valvas",
    text: "Roddelen tegen corona",
    url: "https://advalvas.vu.nl/wetenschap-onderwijs/roddelen-tegen-corona/",
    kind: "article", lang: "Dutch", year: "2021",
    image: "images/media/advalvas-roddelen-corona.jpg"
  }
];
