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
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGooglecloud,
  SiInfluxdb,
  SiKubernetes,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiRedux,
  SiSpringboot,
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
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    id: "frontend",
    icon: HiDesktopComputer,
    items: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Angular", icon: FaAngular },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
      { name: "TypeScript", icon: SiTypescript },
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
      { name: "CI/CD" },
    ],
  },
  {
    id: "databases",
    icon: HiDatabase,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "InfluxDB", icon: SiInfluxdb },
      { name: "Firestore", icon: SiFirebase },
      { name: "Redis", icon: SiRedis },
    ],
  },
];
