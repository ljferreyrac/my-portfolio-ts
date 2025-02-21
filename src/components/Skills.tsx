import { HiCheckBadge, HiCpuChip } from "react-icons/hi2";
import { skills } from "../data/dataSkills";
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
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
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
            <HiCpuChip className="w-16 h-16 text-green-400" />
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Skills.Title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("Skills.Description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-700 hover:border-green-500/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
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
