export type ProjectStatus = "In Development" | "Completed";

export type ProjectLink = {
  label: string;
  href: string | null;
  kind?: "internal" | "external";
};

export type Project = {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  release: string | null;
  apk: string | null;
  screenshots: string[];
  accent: string;
  shortLabel: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "liga-mx",
    slug: "liga-mx",
    number: "01",
    title: "My Liga MX",
    category: "Mobile Football Experience",
    year: "2026",
    status: "Completed",
    description:
      "A personalized Liga MX mobile experience combining fixtures, standings, news, saved content, local reminders and AI-assisted summaries around a favorite club.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Gemini"],
    github: "https://github.com/Axel-lol29/my-liga-mx",
    demo: null,
    release: null,
    apk: null,
    screenshots: [
      "/projects/my-liga-mx/my-liga-mx-home.png",
      "/projects/my-liga-mx/my-liga-mx-standings.png",
      "/projects/my-liga-mx/my-liga-mx-match-detail-final.png",
      "/projects/my-liga-mx/my-liga-mx-match-detail-upcoming.png",
      "/projects/my-liga-mx/my-liga-mx-news-league.png",
      "/projects/my-liga-mx/my-liga-mx-profile.png",
      "/projects/my-liga-mx/my-liga-mx-matches-upcoming.png",
    ],
    accent: "#3b82f6",
    shortLabel: "Football data / personalized mobile",
    links: [
      { label: "View Case Study", href: "/projects/liga-mx", kind: "internal" },
      { label: "GitHub", href: "https://github.com/Axel-lol29/my-liga-mx", kind: "external" },
    ],
  },
  {
    id: "beauty-hair",
    slug: "beauty-hair",
    number: "02",
    title: "Beauty Hair",
    category: "Mobile Management Application",
    year: "2026",
    status: "Completed",
    description:
      "A local-first mobile management application for a beauty salon, centralizing appointments, clients, inventory, reports, notifications and backups.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Expo Router"],
    github: "https://github.com/Axel-lol29/Beauty-Hair",
    demo: null,
    release: "https://github.com/Axel-lol29/Beauty-Hair/releases/tag/v1.0.0",
    apk: "https://github.com/Axel-lol29/Beauty-Hair/releases/download/v1.0.0/beauty-hair-v1.0.0.apk",
    screenshots: [
      "/projects/beauty-hair/beauty-hair-home.png",
      "/projects/beauty-hair/beauty-hair-inventory.png",
      "/projects/beauty-hair/beauty-hair-appointments.png",
      "/projects/beauty-hair/beauty-hair-clients.png",
      "/projects/beauty-hair/beauty-hair-reports.png",
      "/projects/beauty-hair/beauty-hair-settings.png",
    ],
    accent: "#d38ba6",
    shortLabel: "Local-first / salon operations",
    links: [
      { label: "View Case Study", href: "/projects/beauty-hair", kind: "internal" },
      { label: "GitHub", href: "https://github.com/Axel-lol29/Beauty-Hair", kind: "external" },
      { label: "Download APK", href: "https://github.com/Axel-lol29/Beauty-Hair/releases/download/v1.0.0/beauty-hair-v1.0.0.apk", kind: "external" },
    ],
  },
  {
    id: "sweet-bites",
    slug: "sweet-bites",
    number: "03",
    title: "Sweet Bites",
    category: "Interactive Product Website",
    year: "2026",
    status: "Completed",
    description:
      "A responsive product website for an artisanal sweet empanada brand, combining a visual catalog, clear pricing, contact paths and an n8n-connected conversational assistant.",
    technologies: ["HTML", "CSS", "JavaScript", "n8n", "Ollama"],
    github: "https://github.com/Axel-lol29/sweet-bites-site",
    demo: "https://sweet-bites-site.vercel.app/",
    release: null,
    apk: null,
    screenshots: [
      "/projects/sweet-bites/sweet-bites-home.png",
      "/projects/sweet-bites/sweet-bites-products-top.png",
      "/projects/sweet-bites/sweet-bites-products-grid.png",
      "/projects/sweet-bites/sweet-bites-about.png",
      "/projects/sweet-bites/sweet-bites-contact.png",
      "/projects/sweet-bites/sweet-bites-chat-general.png",
      "/projects/sweet-bites/sweet-bites-chat-recommendation.png",
      "/projects/sweet-bites/sweet-bites-chat-order.png",
      "/projects/sweet-bites/sweet-bites-n8n-workflow.png",
    ],
    accent: "#d4a76a",
    shortLabel: "Artisanal product / conversational experience",
    links: [
      { label: "View Case Study", href: "/projects/sweet-bites", kind: "internal" },
      { label: "GitHub", href: "https://github.com/Axel-lol29/sweet-bites-site", kind: "external" },
      { label: "Live Site", href: "https://sweet-bites-site.vercel.app/", kind: "external" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

