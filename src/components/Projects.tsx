import {
  HiCodeBracket,
  HiArrowTopRightOnSquare,
  HiCodeBracketSquare,
} from "react-icons/hi2";
import { projects } from "../data/dataProjects";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HiLockClosed } from "react-icons/hi";

export const Projects = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <HiCodeBracket className="w-12 h-12 text-emerald-400" />
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Projects.Title")}
          </h2>
          <p className="text-xl text-slate-300">{t("Projects.Description")}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={projectVariants}
              className="flex flex-col bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-6 transition-colors duration-200"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                {t(`Projects.Items.${project.id}.Context`)}
              </p>

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {t(`Projects.Items.${project.id}.Desc`)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-auto pt-2 border-t border-slate-800/80">
                {project.isPrivate && (
                  <span className="flex items-center gap-2 text-sm text-slate-400">
                    <HiLockClosed className="w-4 h-4" aria-hidden="true" />
                    {t("Projects.Private")}
                  </span>
                )}

                {project.linkDemo && (
                  <a
                    href={project.linkDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — ${t("Projects.Demo")}`}
                    className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200 cursor-pointer"
                  >
                    <HiArrowTopRightOnSquare
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                    {t("Projects.Demo")}
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — ${t("Projects.Repo")}`}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    <HiCodeBracketSquare
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                    {t("Projects.Repo")}
                  </a>
                )}

                {project.requiresAuth && (
                  <span className="flex items-center gap-2 text-sm text-amber-400/90">
                    <HiLockClosed className="w-4 h-4" aria-hidden="true" />
                    {t("Projects.Authentication")}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
