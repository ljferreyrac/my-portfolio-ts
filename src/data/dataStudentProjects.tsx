import {
  FaAngular,
  FaCss3,
  FaHtml5,
  FaMicrosoft,
  FaVuejs,
} from "react-icons/fa6";
import { SiSpringboot, SiTypescript } from "react-icons/si";

export const studentProjects = [
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
