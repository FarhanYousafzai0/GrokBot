export type Category = "web" | "mobile";
export type MockKind = "both" | "browser" | "phone";

export type Project = {
  slug: string;
  num: string;
  name: string;
  title: string;
  type: string;
  categories: Category[];
  tags: string[];
  dark: boolean;
  mock: MockKind;
  inGrid: boolean;
  featured?: boolean;
  imageEnd?: boolean;
  tile: "ink" | "muted";
  summary: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    num: "01",
    name: "Project One (placeholder)",
    title: "Project One",
    type: "Web + Mobile",
    categories: ["web", "mobile"],
    tags: ["MongoDB", "Express", "React", "Node", "React Native"],
    dark: false,
    mock: "both",
    inGrid: true,
    featured: true,
    tile: "ink",
    summary: "A web and mobile product for the day-to-day work of a small team.",
  },
  {
    slug: "project-two",
    num: "02",
    name: "Project Two (placeholder)",
    title: "Project Two",
    type: "Web",
    categories: ["web"],
    tags: ["React", "Node", "Express"],
    dark: true,
    mock: "browser",
    inGrid: true,
    tile: "muted",
    summary: "A web dashboard for keeping the important numbers in one place.",
  },
  {
    slug: "project-three",
    num: "03",
    name: "Project Three (placeholder)",
    title: "Project Three",
    type: "Mobile",
    categories: ["mobile"],
    tags: ["React Native", "Node"],
    dark: false,
    mock: "phone",
    inGrid: true,
    tile: "muted",
    summary: "A mobile app for iOS and Android, shipped from one codebase.",
  },
  {
    slug: "project-four",
    num: "04",
    name: "Project Four (placeholder)",
    title: "Project Four",
    type: "Web",
    categories: ["web"],
    tags: ["MongoDB", "Express", "React"],
    dark: true,
    mock: "browser",
    inGrid: true,
    tile: "ink",
    summary: "An admin panel that sits on top of a small API.",
  },
  {
    slug: "project-five",
    num: "05",
    name: "Project Five (placeholder)",
    title: "Project Five",
    type: "Mobile",
    categories: ["mobile"],
    tags: ["React Native", "MongoDB"],
    dark: false,
    mock: "phone",
    inGrid: true,
    tile: "muted",
    summary: "A companion app that stays in step with the web product.",
  },
  {
    slug: "project-six",
    num: "06",
    name: "Project Six (placeholder)",
    title: "Project Six",
    type: "Web + Mobile",
    categories: ["web", "mobile"],
    tags: ["React", "React Native", "Node"],
    dark: true,
    mock: "both",
    inGrid: true,
    featured: true,
    imageEnd: true,
    tile: "muted",
    summary: "A product with a web app and a matching mobile client.",
  },
  {
    slug: "project-seven",
    num: "07",
    name: "Project Seven (placeholder)",
    title: "Project Seven",
    type: "Web",
    categories: ["web"],
    tags: ["React", "Node"],
    dark: false,
    mock: "browser",
    inGrid: false,
    tile: "muted",
    summary: "A small web app, ready for a real image and write-up.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function gridProjects() {
  return projects.filter((project) => project.inGrid);
}

export function projectNeighbors(slug: string) {
  const grid = gridProjects();
  const gridIndex = grid.findIndex((project) => project.slug === slug);
  const list = gridIndex >= 0 ? grid : projects;
  const index = list.findIndex((project) => project.slug === slug);
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  return { prev, next };
}
