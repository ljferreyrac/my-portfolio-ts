import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaMicrosoft,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

export const studentProjects = [
  {
    title: "Calendar App",
    skills: (
      <>
        <FaReact className="h-auto text-4xl" />
        &nbsp;
        <FaNodeJs className="h-auto text-4xl" />
        &nbsp;
        <SiJavascript className="h-auto text-4xl" />
        &nbsp;
        <FaBootstrap className="h-auto text-4xl" />
        &nbsp;
        <SiRedux className="h-auto text-4xl" />
        &nbsp;
        <SiMongodb className="h-auto text-4xl" />
        &nbsp;
        <SiExpress className="h-auto text-4xl" />
      </>
    ),
    linkDemo: "https://leo-calendar-app.vercel.app/",
    backendRepo: "https://github.com/ljferreyrac/calendar-app-backend",
    frontendRepo: "https://github.com/ljferreyrac/calendar-app-frontend",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1708568455/portfolio/0103cd96-340a-44c3-a586-320ab3f77bf1.png",
    description: "Education.ProjectsItem.CalendarDesc",
  },
  {
    title: "Journal App",
    skills: (
      <>
        <FaReact className="h-auto text-4xl" />
        &nbsp;
        <SiJavascript className="h-auto text-4xl" />
        &nbsp;
        <FaBootstrap className="h-auto text-4xl" />
        &nbsp;
        <SiRedux className="h-auto text-4xl" />
        &nbsp;
        <SiFirebase className="h-auto text-4xl" />
      </>
    ),
    linkDemo: "https://leojfc-journal-app.vercel.app/",
    backendRepo: "",
    frontendRepo: "https://github.com/ljferreyrac/journal-app",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1708573846/portfolio/a508099c-1230-424f-b35d-928ad808ab9d.png",
    description: "Education.ProjectsItem.JournalDesc",
  },
  {
    title: "Housekeeper",
    skills: (
      <>
        <FaAngular className="h-auto text-4xl" />
        &nbsp;
        <SiTypescript className="h-auto text-4xl" />
        &nbsp;
        <SiSpringboot className="h-auto text-4xl" />
        &nbsp;
        <FaHtml5 className="h-auto text-4xl" />
        &nbsp;
        <FaCss3 className="h-auto text-4xl" />
      </>
    ),
    linkDemo: "https://housekeeper-opensource.netlify.app/",
    backendRepo: "https://github.com/HousseKeeper-SW54-Grupo4/Back-End",
    frontendRepo: "https://github.com/HousseKeeper-SW54-Grupo4/Front-End",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1708715780/portfolio/08ee366d-34e0-4f5d-bc9a-e6066089a906.png",
    description: "Education.ProjectsItem.HouseKeeperDesc",
  },
  {
    title: "ApiTechXPrime",
    skills: (
      <>
        <FaVuejs className="h-auto text-4xl" />
        &nbsp;
        <SiTypescript className="h-auto text-4xl" />
        &nbsp;
        <FaMicrosoft className="h-auto text-4xl" />
      </>
    ),
    linkDemo: "https://apitechxprime.netlify.app/",
    backendRepo: "https://github.com/ApiTechXPrime/BackEnd-ApiTech",
    frontendRepo: "https://github.com/ApiTechXPrime/ApiTech-FrontEnd",
    image:
      "https://res.cloudinary.com/x-app-react-x/image/upload/v1708715762/portfolio/593742f4-38b6-4fcc-b4a3-20f867adc557.png",
    description: "Education.ProjectsItem.ApiTechXPrimeDesc",
  },
];
