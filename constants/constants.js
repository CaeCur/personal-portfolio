export const projects = [
  {
    title: "Bakka",
    description:
      "Video hosting web app designed as a clone of TikTok. Utilises Google Authentication and includes search functionality.",
    image: "/images/bakka.png",
    tags: ["next.js", "typescript", "sanity", "tailwindcss"],
    source: "https://github.com/CaeCur/bakka",
    visit: "https://bakka.vercel.app/",
    id: 0,
  },
  {
    title: "Rockify",
    description:
      "A utility of the Spotify API in a web app designed to control Spotify devices from a mock web UI.",
    image: "/images/rockify.png",
    tags: ["next.js", "spotifyapi", "recoil", "tailwindcss"],
    source: "https://github.com/CaeCur/rockify-next",
    visit: "https://rockify.vercel.app/",
    id: 1,
  },
  {
    title: "Campfire",
    description:
      "A Node.js / Express app designed as a campsite review platform. The app uses interesting features such as geo-data and mapping. I aim to convert this into a Next.js app.",
    image: "/images/campfire.png",
    tags: ["node.js", "express", "javascript", "mongodb", "bootstrap5"],
    source: "https://github.com/CaeCur/camp-review",
    visit: "https://campfire-sigma.vercel.app/",
    id: 2,
  },
  {
    title: "LightsOut",
    description:
      "A pure React app that serves as a web game modelled after the 90's handheld toy of the same name. The aim is to switch all the lights on the board off. However, whenever a light is toggled, the adjacent lights also switch to the opposite state.",
    image: "/images/lightsout.png",
    tags: ["react", "javascript", "css"],
    source: "https://github.com/CaeCur/lights-out",
    visit: "https://lightsout-sigma.vercel.app/",
    id: 3,
  },
];

export const inProgress = [
  {
    title: "Campfire Rebuild",
    description:
      "I aim to rebuild my original Campfire app using the T3 stack. While my original Campfire app is still very serviceable, it is built as a vanilla JS / Node application. I find it exciting to rebuild the site using the modern technologies of the T3 stack.",
    tags: ["Next.js", "TypeScript", "Next-Auth", "tRPC", "Prisma", "MongoDB", "TailwindCSS"],
    source: "https://github.com/CaeCur/issue-tracker-next",
    id: 0,
  },
  {
    title: "Issue Submission Platform",
    description:
      "Team based issue / bug submission platform. An authenticated user will be able to submit and view issues. Issues will have various parameters including user assignment, priority and progress tracking. The app is fairly adaptable to the contexts of helpdesks or admin consoles.",
    tags: ["Next.js", "MongoDB", "MUI5"],
    source: "https://github.com/CaeCur/issue-tracker-next",
    id: 1,
  },
];

export const TimelineData = [
  { year: 2013, text: "Started my medical chemistry studies at Stellenbosch University" },
  { year: 2017, text: "Started work as a scientific consultant" },
  {
    year: 2017,
    text: "Job role changed to developer due to experience with Python during studies",
  },
  {
    year: 2018,
    text: "Started studies in PHP and LAMP stack",
  },
  {
    year: 2019,
    text: "Started studies in JavaScript and MERN stack",
  },
  { year: 2020, text: "Started studies in React and Next.js" },
  { year: 2020, text: "Designed novel audio dataset collection process" },
  {
    year: 2021,
    text: "Started collaborative modernisation of a workflow system using Laravel and Vue",
  },
  {
    year: 2022,
    text: "Started studies in data science and machine learning",
  },
  {
    year: 2022,
    text: "Relocated from South Africa to Scotland",
  },
];
