export interface ExperienceItem {
  id: string; // i18n segment: Experience.Items.{id}
  company: string;
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "Upc",
    company: "UPC",
    stack: [
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Next.js",
      "React",
      "Playwright",
      "GitHub Actions",
      "Docker",
      "Entra ID",
    ],
  },
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
      "Flutter",
      "Angular",
      "Vue.js",
      ".NET",
      "Azure AD",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
];
