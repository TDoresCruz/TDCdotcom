// ============================================================
//  CV  -  newest first in every section
//  Each entry: when, what, where, and optional "details" list.
//  current: true  -> shown in bold (your present position)
//  Publications and talks on the CV come automatically from
//  publications.js and talks.js - no need to add them here.
// ============================================================
window.CV = {
  pdf: "files/cv.pdf",

  sections: [
    {
      heading: "Education",
      items: [
        { when: "2018–2023", what: "PhD candidate Social/Organizational Psychology", where: "Vrije Universiteit Amsterdam",
          details: ["Visiting PhD Candidate Social Psychology, The University of Queensland, 2022",
                    "Visiting Researcher, University of Exeter, Finance and Economics Experimental Laboratory, 2023"] },
        { when: "2016–2018", what: "Research Master Social Psychology (cum laude)", where: "Vrije Universiteit Amsterdam" },
        { when: "2013–2016", what: "Bachelor Psychology (cum laude)", where: "Vrije Universiteit Amsterdam" }
      ]
    },
    {
      heading: "Work experience",
      items: [
        { when: "2026–now",  what: "Postdoctoral Researcher", where: "Vrije Universiteit Amsterdam, Department of Social Psychology", current: true },
        { when: "2023–2025", what: "Postdoctoral Researcher", where: "Universiteit van Amsterdam, Department of Experimental Economics and Political Decision Making (CREED)",
          details: ["Visiting Researcher, University of Duisburg-Essen, Research Center Trustworthy Data Science and Security, 2025"] },
        { when: "2021",      what: "Policy Officer for grants in Social Sciences and Humanities (6-month internship)", where: "Nederlandse Organisatie voor Wetenschappelijk Onderzoek (NWO)" },
        { when: "2017–2018", what: "Teacher Methodology and Statistics", where: "Vrije Universiteit Amsterdam" }
      ]
    },
    {
      heading: "Service",
      items: [
        { when: "2024–now",  what: "Member Scientific Committee", where: "Kurt Lewin Institute" },
        { when: "2020–2024", what: "PhD Representative",          where: "Kurt Lewin Institute" }
      ]
    }
  ]
};
