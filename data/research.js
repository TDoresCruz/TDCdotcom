// ============================================================
//  RESEARCH LINES  -  shown in this order
//  featured: true  -> full-width card at the top
//  selectedPublication / selectedTalk: the "id" of an entry in
//  publications.js / talks.js (or "" for none)
// ============================================================
window.RESEARCH = [
  {
    title: "Human Cooperation to Improve Crisis Responses (ADAPT!)",
    featured: true,
    description: "In this line of research, I investigate how we can improve human cooperation in crisis situations and how insights from cooperation research can be used to promote resilience.",
    projects: [
      { name: "Emergency Kit Cooperation",
        text: "As part of the Crisis Challenge of Utrecht University's Studium Generale, I investigate cooperation in a public goods dilemma framed around sharing emergency kits. We investigate differences between groups of neighborhood versus fellow country members as well as differences when government plans are clear versus unclear.",
        link: { label: "Preregistration", url: "https://osf.io/w2g5p/" } },
      { name: "Everyday Small Talk and Social Health",
        text: "Together with the organisation Praatje, we will conduct experience sampling studies on short, spontaneous conversations with strangers and test the effectiveness of an app to improve small talk with challenges. The aim is to investigate how small talk and challenges to improve social contact can improve social health (more resilience, less loneliness, etc.)." },
      { name: "First-Party Punishment",
        text: "Using controlled experimental public goods games, I aim to investigate how first-party punishment, punishment of oneself, can impact cooperation. The aim is to understand how first-party solutions compare to second- or third-party solutions and investigate implications for crisis settings." }
    ],
    selectedPublication: "",
    selectedTalk: ""
  },
  {
    title: "Human Oversight in Human-AI Cooperation",
    description: "In this line of research, I investigate when human oversight (e.g., human-in-the-loop feedback) can decrease or increase the accuracy or bias of algorithmic decisions and recommendations.",
    projects: [
      { name: "Human Bias in Oversight to Mitigate Algorithmic Bias",
        text: "Using a large incentivized behavioral experiment, we test the extent to which human oversight from Democrats versus Republicans mitigates, or conversely, introduces bias to hybrid decision-making settings where an algorithm provides a recommendation that benefits locals or immigrants.",
        link: { label: "Preprint", url: "https://osf.io/preprints/psyarxiv/9ecms_v3" } }
    ],
    selectedPublication: "2026-01-20-Training-Oversight-AI-Social-Decisions",
    selectedTalk: "2024-04-29-MachineBehavior-poster"
  },
  {
    title: "Gossip, Reputation, and Cooperation",
    description: "In this line of research, I investigate the cooperative and competitive functions of gossip. I focus mostly on how gossip can support systems of reputation-based cooperation.",
    projects: [
      { name: "Gossip as a second-order dilemma",
        text: "Using trust games with gossip to investigate the costs and benefits of (not) gossiping and whether senders are aware of these costs." },
      { name: "Motives for (In)direct Punishment",
        text: "Using gossip in ultimatum game responses to investigate whether offer rejection is motivated by venting emotions or harming offenders." }
    ],
    selectedPublication: "2021-10-04-Gossip-and-Reputation-in-Everyday-Life",
    selectedTalk: "2024-07-04-ICSD-talk"
  }
];
