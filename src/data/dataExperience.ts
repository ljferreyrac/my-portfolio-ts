export interface ExperienceItem {
  id: string; // i18n segment: Experience.Items.{id}
  company: string;
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "Kinara",
    company: "Kinara Systems",
    stack: [
      "Python",
      "CrewAI",
      "LangGraph",
      "Phoenix/Arize",
      "MQTT",
      "InfluxDB",
      "Docker",
    ],
  },
  {
    id: "Enviame",
    company: "Enviame",
    stack: ["GCP", "Cloud Run", "Firestore", "MySQL", "Redis", "MCP", "Flask"],
  },
  {
    id: "Civa",
    company: "CIVA",
    stack: ["Java", "Spring Boot", "JWT", "Azure SSO", "React", "Redux"],
  },
  {
    id: "Solyman",
    company: "SOLYMAN Consultores de TI",
    stack: ["Odoo", "Python", "JavaScript", "PostgreSQL"],
  },
  {
    id: "Valentor",
    company: "VALENTOR Producciones S.A.C.",
    stack: [
      "Django",
      "React",
      "Flutter",
      "NestJS",
      "Next.js",
      "Vue",
      "Angular",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
];
