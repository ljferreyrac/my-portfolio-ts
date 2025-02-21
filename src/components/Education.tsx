import { FaGraduationCap } from "react-icons/fa6";
import { studentProjects } from "../data/dataStudentProjects";
import { studentSkills } from "../data/dataStudentSkills";
import {
  HiCheckBadge,
  HiArrowTopRightOnSquare,
  HiCodeBracketSquare,
} from "react-icons/hi2";
import { institutions } from "../data/dataEducation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Education = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <FaGraduationCap className="w-16 h-16 text-green-400" />
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Education.Title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("Education.Description")}
          </p>
        </motion.div>

        {/* Institutions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {institutions.map((institution) => (
            <motion.div
              key={institution.name}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={institution.image}
                  alt={t(institution.description)}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t(institution.description)}
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-green-400">
                      {t("Education.EducationItem.DateStart")}
                    </span>{" "}
                    {institution.dateStart}
                  </p>
                  {institution.dateFinished && (
                    <p>
                      <span className="text-green-400">
                        {t("Education.EducationItem.DateEnd")}
                      </span>{" "}
                      {institution.dateFinished}
                    </p>
                  )}
                  {institution.dateExpected && (
                    <p>
                      <span className="text-green-400">
                        {t("Education.EducationItem.DateExpected")}
                      </span>{" "}
                      {institution.dateExpected}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Student Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {studentProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              className="group relative rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
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
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
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
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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

        {/* Student Skills */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {studentSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                    {skill.name}
                  </span>
                  <HiCheckBadge className="ml-auto text-green-400 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
