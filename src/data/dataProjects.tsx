import { FaAngular, FaBootstrap, FaJava, FaReact } from "react-icons/fa6";
import {
  SiCloudflare,
  SiCloudflarepages,
  SiCloudflareworkers,
  SiFirebase,
  SiJavascript,
  SiRedux,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const projects = [
  {
    title: "FLIT",
    skills: (
      <>
        <FaReact className="h-auto text-4xl" />
        &nbsp;
        <SiJavascript className="h-auto text-4xl" />
        &nbsp;
        <SiRedux className="h-auto text-4xl" />
        &nbsp;
        <FaBootstrap className="h-auto text-4xl" />
        &nbsp;
        <SiSpringboot className="h-auto text-4xl" />
        &nbsp;
        <FaJava className="h-auto text-4xl" />
      </>
    ),
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1740113171/portfolio/794f945f-60e6-4662-9e7b-8b76d555f98a.png",
    description: "Projects.ProjectsItem.FlitDesc",
    isFrontendPrivate: true,
    isBackendPrivate: true,
  },
  {
    title: "BranchOut Food Attendance Record",
    skills: (
      <>
        <FaReact className="h-auto text-4xl" />
        &nbsp;
        <SiTypescript className="h-auto text-4xl" />
        &nbsp;
        <SiFirebase className="h-auto text-4xl" />
        &nbsp;
        <SiTailwindcss className="h-auto text-4xl" />
        &nbsp;
        <SiCloudflare className="h-auto text-4xl" />
        &nbsp;
        <SiCloudflarepages className="h-auto text-4xl" />
        &nbsp;
        <SiCloudflareworkers className="h-auto text-4xl" />
      </>
    ),
    requiresAuth: true,
    frontendRepo: "https://github.com/ljferreyrac/attendace-record",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1740117146/portfolio/deb024e5-a839-4131-b69e-c6513dfa5fa6.png",
    description: "Projects.ProjectsItem.BranchOutDesc",
  },
  {
    title: "Neuro Peru",
    skills: (
      <>
        <FaReact className="h-auto text-4xl" />
        &nbsp;
        <SiTypescript className="h-auto text-4xl" />
        &nbsp;
        <SiShadcnui className="h-auto text-4xl" />
        &nbsp;
        <SiTailwindcss className="h-auto text-4xl" />
        &nbsp;
        <SiCloudflare className="h-auto text-4xl" />
        &nbsp;
        <SiCloudflarepages className="h-auto text-4xl" />
        &nbsp;
        <SiCloudflareworkers className="h-auto text-4xl" />
      </>
    ),
    linkDemo: "https://neuro-peru.com/",
    frontendRepo: "https://github.com/ljferreyrac/neuro-peru",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1740119827/portfolio/50802a59-0a36-48e4-bef4-77ffe8a6d58c.png",
    description: "Projects.ProjectsItem.NeuroPeruDesc",
  },
  {
    title: "Portfolio",
    skills: (
      <>
        <FaReact className="h-auto text-4xl" />
        &nbsp;
        <SiTypescript className="h-auto text-4xl" />
        &nbsp;
        <SiTailwindcss className="h-auto text-4xl" />
      </>
    ),
    frontendRepo: "https://github.com/ljferreyrac/my-portfolio",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1708584675/portfolio/825078e8-61a3-42ed-ba40-5cc49442f934.png",
    description: "Projects.ProjectsItem.PortfolioDesc",
  },
  {
    title: "Credit Car App",
    skills: (
      <>
        <FaAngular className="h-auto text-4xl" />
        &nbsp;
        <SiTypescript className="h-auto text-4xl" />
        &nbsp;
        <SiSpringboot className="h-auto text-4xl" />
      </>
    ),
    linkDemo: "https://credit-car.netlify.app/",
    backendRepo: "https://github.com/LeonardoFerreyraC/Back-End-Finanzas",
    frontendRepo: "https://github.com/LeonardoFerreyraC/Front-End-Finanzas",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1708712501/portfolio/cb2ca674-5889-4489-96cb-cd63d1f4bf45.png",
    description: "Projects.ProjectsItem.CreditDesc",
  },
];
