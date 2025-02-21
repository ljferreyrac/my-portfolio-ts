import {
  HiCodeBracket,
  HiArrowTopRightOnSquare,
  HiCodeBracketSquare,
} from "react-icons/hi2";
import { projects } from "../data/dataProjects";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Projects = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <HiCodeBracket className="w-12 h-12 text-green-500" />
          </motion.div>

          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Projects.Title")}
          </h2>
          <p className="text-xl text-gray-300">{t("Projects.Description")}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="group relative overflow-hidden rounded-xl bg-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills}
                </div>
                <p className="text-gray-300 mb-4">{t(project.description)}</p>

                <div className="flex flex-wrap gap-4">
                  {project.linkDemo && (
                    <a
                      href={project.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <HiArrowTopRightOnSquare className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.backendRepo && (
                    <a
                      href={project.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <HiCodeBracketSquare className="w-5 h-5" />
                      <span>Backend</span>
                    </a>
                  )}
                  {project.frontendRepo && (
                    <a
                      href={project.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <HiCodeBracketSquare className="w-5 h-5" />
                      <span>Frontend</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
