export interface Project {
  id: string; // i18n segment: Projects.Items.{id}
  title: string;
  stack: string[];
  linkDemo?: string;
  repo?: string;
  requiresAuth?: boolean;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: "NeuroPeru",
    title: "Neuro Peru",
    stack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare"],
    linkDemo: "https://neuro-peru.com/",
    repo: "https://github.com/ljferreyrac/neuro-peru",
  },
  {
    id: "BranchOut",
    title: "BranchOut Food Attendance Record",
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Cloudflare"],
    repo: "https://github.com/ljferreyrac/attendace-record",
    requiresAuth: true,
  },
];
