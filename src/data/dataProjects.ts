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
    id: "AiPipeline",
    title: "Multi-Agent AI Network Analytics Pipeline",
    stack: [
      "Python",
      "CrewAI",
      "LangGraph",
      "Phoenix/Arize",
      "MQTT",
      "InfluxDB",
    ],
    isPrivate: true,
  },
  {
    id: "McpAutomation",
    title: "MCP Developer Workflow Automation",
    stack: ["Python", "MCP", "JIRA", "Confluence", "Bitbucket"],
    isPrivate: true,
  },
  {
    id: "Flit",
    title: "FLIT Transportation ERP",
    stack: ["Java", "Spring Boot", "JWT", "React", "Redux"],
    isPrivate: true,
  },
  {
    id: "CryptoExchange",
    title: "Currency & Crypto Exchange Platform",
    stack: ["Odoo", "Python", "JavaScript", "PostgreSQL"],
    isPrivate: true,
  },
  {
    id: "Nightclub",
    title: "Nightclub Operations Suite",
    stack: ["Django", "React", "Flutter", "NestJS", "Next.js", "Vue", "AWS"],
    isPrivate: true,
  },
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
