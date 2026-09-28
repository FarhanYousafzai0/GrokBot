export type Category = "web" | "desktop";
export type MockKind = "both" | "browser" | "phone";
export type OutcomeIcon = "check" | "layers" | "shield";

export type ArchNode = {
  title: string;
  meta: string;
  ink?: boolean;
};

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
  headline: string;
  role: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  heroCaption: string;
  problem: string[];
  approach: { title: string; body: string }[];
  architecture: ArchNode[];
  architectureNote: string;
  outcomes: { icon: OutcomeIcon; title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "booking-crm",
    num: "01",
    name: "Booking & CRM System",
    title: "Custom booking and CRM",
    type: "Web",
    categories: ["web"],
    tags: ["React", "MongoDB", "Google APIs", "Payments"],
    dark: false,
    mock: "browser",
    inGrid: true,
    featured: true,
    tile: "ink",
    summary:
      "Real-time reservations, payments, supplier commissions, and automated email and WhatsApp confirmations in one operations system.",
    image: "/projects/travel.png",
    headline:
      "A booking and CRM platform built for teams that need reservations, payments, and follow-up in one place.",
    role: "Full-stack developer",
    timeline: "End-to-end product",
    heroCaption: "Reservations, CRM, and reporting in one web app",
    problem: [
      "The business was running bookings, supplier payouts, and customer communication across disconnected tools. Status lived in spreadsheets, payments were tracked by hand, and confirmations depended on someone remembering to send them.",
      "They needed a single system with role-based access, live reservation status, partial payments and commissions, supplier records, reporting, and a CMS with basic SEO — designed to support scalable operations and centralized business control.",
    ],
    approach: [
      {
        title: "Model the operation first",
        body: "Mapped booking states, roles, suppliers, pickup points, and commission rules before writing screens so the CRM matched how the team actually works.",
      },
      {
        title: "Build the booking core",
        body: "Shipped real-time reservations, status management, and payment flows that handle partial payments and commissions without a separate back-office process.",
      },
      {
        title: "Automate the follow-through",
        body: "Wired email and WhatsApp notifications, reporting dashboards, CMS pages, and Google Maps for pickup and meeting-point management so ops does not chase every update by hand.",
      },
    ],
    architecture: [
      { title: "React web app", meta: "Booking, CRM, CMS" },
      { title: "API + automations", meta: "Email and WhatsApp", ink: true },
      { title: "MongoDB", meta: "Bookings and ledgers" },
      { title: "Google Maps API", meta: "Pickup and meeting points" },
    ],
    architectureNote:
      "Role-based access sits in front of reservations, payments, and CMS. Notifications fire from booking state changes rather than from a separate marketing tool.",
    outcomes: [
      {
        icon: "check",
        title: "One source of truth",
        body: "Reservations, status, and customer records live in a single CRM instead of chats and spreadsheets.",
      },
      {
        icon: "layers",
        title: "Payments that match the deal",
        body: "Partial payments, commissions, and supplier management sit next to the booking they belong to.",
      },
      {
        icon: "shield",
        title: "Ops that scale",
        body: "Automated confirmations, dashboards, and Maps-backed pickup points keep control centralized as volume grows.",
      },
    ],
  },
  {
    slug: "school-transport",
    num: "02",
    name: "School Transport System",
    title: "School transport ops",
    type: "Web",
    categories: ["web"],
    tags: ["React", "Supabase", "MFA", "Web apps"],
    dark: true,
    mock: "browser",
    inGrid: true,
    tile: "muted",
    summary:
      "Pickup and drop-off operations for taxi and cab companies — drivers, operators, and owners on role-based dashboards.",
    image: "/projects/schoolsystem.png",
    headline:
      "A school transportation system for taxi and cab companies that run student pickup and drop-off every day.",
    role: "Full-stack developer",
    timeline: "End-to-end product",
    heroCaption: "Owner, operator, and driver dashboards",
    problem: [
      "Taxi and cab companies handling school runs needed more than a dispatch spreadsheet. Drivers had to log runs and earnings, operators had to manage students, routes, invoices, and payouts, and owners needed a view of the whole operation.",
      "Security mattered as much as workflow: OTP verification, secure sessions, and role-based access so a driver never sees an operator’s books, and an operator cannot touch owner-level controls.",
    ],
    approach: [
      {
        title: "Split the product by role",
        body: "Designed three dashboards — Owners, Operators, and Drivers — around the same data model so each person only sees the work they are responsible for.",
      },
      {
        title: "Cover the full school-run loop",
        body: "Drivers log runs and track earnings. Operators manage drivers, students, routes, invoices, and payouts. Admins monitor activity across the system.",
      },
      {
        title: "Lock the perimeter",
        body: "Built on Supabase with OTP verification and secure session management so school and payment data stay behind the right account.",
      },
    ],
    architecture: [
      { title: "React dashboards", meta: "Owner, operator, driver" },
      { title: "Supabase", meta: "Auth, data, sessions", ink: true },
      { title: "OTP + MFA", meta: "Secure sign-in" },
    ],
    architectureNote:
      "Row-level access follows the role. Drivers write runs; operators own routes and invoices; admins watch the system without sharing credentials.",
    outcomes: [
      {
        icon: "check",
        title: "The full workflow",
        body: "From driver run logs to operator invoices and owner oversight, the school-run day lives in one product.",
      },
      {
        icon: "shield",
        title: "Access that matches the job",
        body: "OTP, sessions, and role-based dashboards keep student and payout data with the people who should see it.",
      },
      {
        icon: "layers",
        title: "Built to grow",
        body: "The same model scales from a small fleet to more drivers, routes, and schools without changing how people log in.",
      },
    ],
  },
  {
    slug: "gorilla-copywriting",
    num: "03",
    name: "Gorilla Copywriting",
    title: "Gorilla Copywriting LMS",
    type: "Web",
    categories: ["web"],
    tags: ["Next.js", "React", "NestJS", "TypeScript", "Motion"],
    dark: false,
    mock: "browser",
    inGrid: true,
    featured: true,
    imageEnd: true,
    tile: "muted",
    summary:
      "Landing page, student LMS, and admin for copywriting and Upwork courses — designed and built end to end.",
    image: "/projects/gorillacopywritingportal.png",
    headline:
      "A high-converting landing page and full LMS for students learning copywriting and Upwork.",
    role: "Full-stack engineer",
    timeline: "End-to-end product",
    heroCaption: "Marketing site, student LMS, and admin",
    problem: [
      "The course needed more than a video dump. Students had to enroll, move through structured programs, use resources, and see progress. The business needed an admin layer for students, enrollments, course access, and day-to-day operations.",
      "I owned the full stack: the public landing page, the learning experience, motion on key surfaces, and the NestJS backend that ties enrollments to access.",
    ],
    approach: [
      {
        title: "Sell the course, then teach it",
        body: "Designed a landing page that explains the offer clearly, then dropped students into dashboards, lessons, and resources without a second product.",
      },
      {
        title: "Structure the learning path",
        body: "Courses, programs, and progress features keep copywriting and Upwork training sequential instead of a pile of unlinked modules.",
      },
      {
        title: "Give ops a real admin",
        body: "Built student, enrollment, and access management so the team can run the platform without touching the database.",
      },
    ],
    architecture: [
      { title: "Next.js + React", meta: "Landing and LMS UI" },
      { title: "NestJS API", meta: "TypeScript backend", ink: true },
      { title: "Motion", meta: "Landing and product motion" },
    ],
    architectureNote:
      "The marketing site and the logged-in LMS share the same design language. Access and enrollments are enforced in NestJS, not only in the client.",
    outcomes: [
      {
        icon: "check",
        title: "One platform, not three tools",
        body: "Landing, learning, and admin shipped as a single product instead of a page builder plus a third-party course host.",
      },
      {
        icon: "layers",
        title: "Progress students can see",
        body: "Dashboards, structured courses, and resources keep learners moving through copywriting and Upwork training.",
      },
      {
        icon: "shield",
        title: "Ops without a spreadsheet",
        body: "Admins manage students, enrollments, programs, and access from the same system students use to learn.",
      },
    ],
  },
  {
    slug: "secure-lms",
    num: "04",
    name: "Secure LMS Platform",
    title: "Secure e-learning LMS",
    type: "Web",
    categories: ["web"],
    tags: ["React", "Next.js", "MongoDB", "Analytics"],
    dark: true,
    mock: "browser",
    inGrid: true,
    tile: "ink",
    summary:
      "Student and admin LMS with live sessions, tasks, leaderboards, analytics, and content protection.",
    image: "/projects/easyskillportal.png",
    headline:
      "A full-scale LMS for a digital-skills agency — enroll, learn live, submit work, and keep course media from leaking.",
    role: "Full-stack developer",
    timeline: "End-to-end product",
    heroCaption: "Student learning and protected course media",
    problem: [
      "An e-learning agency needed students to enroll, attend live sessions, submit tasks, track progress, and compete on leaderboards — with an admin side for courses, videos, reports, and performance.",
      "Course video and materials had to stay inside the product. Content protection, automated notifications, and progress tracking were as important as the lesson UI.",
    ],
    approach: [
      {
        title: "Map student and admin jobs",
        body: "Separated the student loop (enroll, attend, submit, progress) from the admin loop (students, courses, tasks, videos, reports) so neither dashboard was a leftover of the other.",
      },
      {
        title: "Protect the catalog",
        body: "Implemented content protection to reduce unauthorized recording and distribution, while keeping playback usable for paying students.",
      },
      {
        title: "Measure what happens",
        body: "Wired analytics, leaderboards, automated notifications, and progress tracking so instructors can see who is moving and who is stuck.",
      },
    ],
    architecture: [
      { title: "Next.js + React", meta: "Student and admin UI" },
      { title: "API layer", meta: "Enrollments and progress", ink: true },
      { title: "MongoDB", meta: "Users, courses, tasks" },
      { title: "Protection + analytics", meta: "Media and reports" },
    ],
    architectureNote:
      "Student progress, live sessions, and admin reports share one data model. Content protection sits on media routes; analytics sit on the same events the UI already records.",
    outcomes: [
      {
        icon: "check",
        title: "A complete learning loop",
        body: "Enrollment, live sessions, tasks, progress, and leaderboards run in one LMS instead of a stack of plugins.",
      },
      {
        icon: "shield",
        title: "Media that stays put",
        body: "Content protection and access control reduce unpaid redistribution of course video and files.",
      },
      {
        icon: "layers",
        title: "Clear performance signal",
        body: "Admins get reports and analytics; students get progress and notifications without extra tools.",
      },
    ],
  },
  {
    slug: "premium-taxi",
    num: "05",
    name: "Premium Taxi Booking",
    title: "Chauffeur booking site",
    type: "Web",
    categories: ["web"],
    tags: ["React", "Google APIs", "Stripe", "UX"],
    dark: false,
    mock: "browser",
    inGrid: true,
    tile: "muted",
    summary:
      "UK premium taxi and chauffeur site with multi-step booking, Maps pricing, Stripe, and EmailJS.",
    image: "/projects/Taxisystem.png",
    headline:
      "A multi-page site for a UK chauffeur service — airport transfers and private hire with booking that actually calculates a fare.",
    role: "Front-end developer",
    timeline: "End-to-end product",
    heroCaption: "Fleet, services, and the booking flow",
    problem: [
      "A premium taxi and chauffeur company needed a site that looked like the service and could take a real booking: locations, vehicle, time, validation, and payment — not a contact form pretending to be a quote.",
      "Distance-based pricing, Stripe checkout, email confirmation, maps, and a WhatsApp shortcut had to sit on top of service pages and a fleet showcase without turning the flow into a maze.",
    ],
    approach: [
      {
        title: "Design the booking as a path",
        body: "Built a multi-step form with predefined locations, vehicle selection, time slots, and validation so customers always know what comes next.",
      },
      {
        title: "Price from the map",
        body: "Integrated Google Maps and related services to calculate distance-based pricing, then Stripe for payment and EmailJS for the confirmation trail.",
      },
      {
        title: "Polish the public site",
        body: "Shipped dynamic service pages, fleet showcase, responsive layout, motion, progress indicators, maps, and a WhatsApp button for people who would rather message than finish the form.",
      },
    ],
    architecture: [
      { title: "React website", meta: "Pages and booking UI" },
      { title: "Google Maps APIs", meta: "Distance and places", ink: true },
      { title: "Stripe", meta: "Card payments" },
      { title: "EmailJS", meta: "Booking mail" },
    ],
    architectureNote:
      "The fare is computed from map distance before Stripe. EmailJS sends the booking record; WhatsApp is a parallel path for customers who skip the form.",
    outcomes: [
      {
        icon: "check",
        title: "A booking people can finish",
        body: "Steps, validation, and progress indicators replace a vague enquiry form.",
      },
      {
        icon: "layers",
        title: "Fares that match the trip",
        body: "Maps-based distance pricing sits in the same flow as vehicle and time selection.",
      },
      {
        icon: "shield",
        title: "Paid and confirmed",
        body: "Stripe handles payment; email and WhatsApp keep the customer in the loop after checkout.",
      },
    ],
  },
  {
    slug: "skoocode",
    num: "06",
    name: "Skoocode",
    title: "Skoocode desktop agent",
    type: "Desktop",
    categories: ["desktop"],
    tags: ["TypeScript", "Desktop", "AI agents", "DX"],
    dark: true,
    mock: "browser",
    inGrid: true,
    tile: "ink",
    summary:
      "A desktop coding agent in the Codex mould: repo-aware chat, file edits, terminal, and local workspace control.",
    image: "/projects/skoocode.png",
    headline:
      "A local coding agent for people who want Codex-style help without leaving the repo on their machine.",
    role: "Product engineer",
    timeline: "End-to-end product",
    heroCaption: "Chat, files, and terminal in one desktop shell",
    problem: [
      "Most AI coding tools live in the browser or a remote sandbox. Developers who want an agent that can see the real workspace, edit files, and run commands still end up tab-switching between chat, the editor, and the terminal.",
      "Skoocode is a desktop tool built in that Codex-shaped gap: a single window for prompting, reading the repo, applying edits, and watching command output — with the project staying on disk.",
    ],
    approach: [
      {
        title: "Treat the repo as the source of truth",
        body: "The agent reads the local workspace first. Context is the files in front of you, not a pasted snippet and a guess.",
      },
      {
        title: "Put chat, diffs, and the terminal together",
        body: "Prompts, proposed edits, and command output share one desktop shell so the loop is ask, inspect, apply, run — without exporting the project to a cloud IDE.",
      },
      {
        title: "Keep the operator in control",
        body: "Edits and shell use are explicit. The product is an agent you supervise, not a black box that rewrites the tree overnight.",
      },
    ],
    architecture: [
      { title: "Desktop shell", meta: "Chat, files, terminal" },
      { title: "Agent runtime", meta: "Tools and context", ink: true },
      { title: "Local workspace", meta: "Repo on disk" },
    ],
    architectureNote:
      "The agent talks to the local filesystem and a terminal session. Model calls stay behind the runtime; the project never has to be uploaded to use the tool.",
    outcomes: [
      {
        icon: "check",
        title: "Codex-shaped, local-first",
        body: "Prompt, edit, and run in one desktop surface while the repo stays on the machine.",
      },
      {
        icon: "layers",
        title: "The real workspace",
        body: "File context and command output come from disk, not from a remote copy of the project.",
      },
      {
        icon: "shield",
        title: "You approve the change",
        body: "Edits and terminal use are visible steps, so the agent assists without silently rewriting the tree.",
      },
    ],
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
