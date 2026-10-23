import type { IconType } from "react-icons";
import { FaAngular, FaJava, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa6";
import {
  HiChip,
  HiCloud,
  HiDatabase,
  HiDesktopComputer,
  HiServer,
} from "react-icons/hi";
import {
  SiAmazonwebservices,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGithubactions,
  SiGooglecloud,
  SiInfluxdb,
  SiKubernetes,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon?: IconType; // text-only pill when undefined
}

export interface SkillCategory {
  id: string; // i18n: Skills.Categories.{id}
  icon: IconType;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    icon: HiChip,
    items: [
      { name: "CrewAI" },
      { name: "LangGraph" },
      { name: "MCP" },
      { name: "RAG Pipelines" },
      { name: "LLM Orchestration" },
      { name: "Phoenix/Arize" },
    ],
  },
  {
    id: "backend",
    icon: HiServer,
    items: [
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "TypeORM", icon: SiTypeorm },
      { name: ".NET / C#", icon: SiDotnet },
      { name: "Playwright" },
    ],
  },
  {
    id: "frontend",
    icon: HiDesktopComputer,
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "Angular", icon: FaAngular },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    id: "cloud",
    icon: HiCloud,
    items: [
      { name: "GCP", icon: SiGooglecloud },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CI/CD" },
    ],
  },
  {
    id: "databases",
    icon: HiDatabase,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "InfluxDB", icon: SiInfluxdb },
      { name: "Firestore", icon: SiFirebase },
      { name: "Redis", icon: SiRedis },
      { name: "SQL Server" },
    ],
  },
];
