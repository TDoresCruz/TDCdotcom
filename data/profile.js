// ============================================================
//  PROFILE  -  shown in the sidebar on every page
//  Remove a link by deleting its line.
//  icon: any Font Awesome icon ("fa-solid fa-envelope",
//  "fa-brands fa-linkedin") or Academicons ("ai ai-orcid").
// ============================================================
window.PROFILE = {
  siteTitle: "Dr. Terence Daniel Dores Cruz",
  name: "Terence Daniel Dores Cruz",
  title: "Postdoctoral Researcher",
  photo: "images/avatar.jpg",
  lastUpdated: "19 November 2026",   // set automatically by tools/build.js
  links: [
    { label: "Email",          icon: "fa-solid fa-envelope",          url: "mailto:terence@terencedorescruz.com" },
    { label: "LinkedIn",       icon: "fa-brands fa-linkedin",         url: "https://www.linkedin.com/in/terencecruz" },
    { label: "VU Amsterdam",   icon: "fa-solid fa-building-columns",  url: "https://vu.nl/en/research/scientists/td-das-dores-cruz" },
    { label: "Google Scholar", icon: "ai ai-google-scholar",          url: "https://scholar.google.nl/citations?hl=en&user=w6RF6-0AAAAJ" },
    { label: "ORCID",          icon: "ai ai-orcid",                   url: "https://orcid.org/0000-0002-4792-8469" },
    { label: "ResearchGate",   icon: "fa-brands fa-researchgate",     url: "https://www.researchgate.net/profile/Terence-Dores-Cruz" },
    { label: "OSF",            icon: "ai ai-osf",                     url: "https://osf.io/nvhwz/" },
    { label: "Web of Science", icon: "ai ai-clarivate",               url: "https://www.webofscience.com/wos/author/rid/AAH-5759-2020" }
  ]
};

// Top navigation. Order here = order in the menu.
window.NAV = [
  { label: "About",        url: "index.html" },
  { label: "Research",     url: "research.html" },
  { label: "Publications", url: "publications.html" },
  { label: "Talks",        url: "talks.html" },
  { label: "Media",        url: "media.html" },
  { label: "CV",           url: "cv.html" }
];
