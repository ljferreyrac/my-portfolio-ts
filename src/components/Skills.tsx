import { HiCpuChip } from "react-icons/hi2";
import { skillCategories } from "../data/dataSkills";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Skills = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <HiCpuChip className="w-14 h-14 text-emerald-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Skills.Title")}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t("Skills.Description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-6 transition-colors duration-200 ${
                category.id === "ai" ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <category.icon
                    className="w-6 h-6 text-emerald-400"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t(`Skills.Categories.${category.id}`)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300"
                  >
                    {skill.icon && (
                      <skill.icon
                        className="w-4 h-4 text-emerald-400"
                        aria-hidden="true"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
