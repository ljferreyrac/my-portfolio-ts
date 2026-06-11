import { useTranslation } from "react-i18next";
import { useLngStore } from "../hooks/useLngStore";
import { motion } from "framer-motion";
import { HiDownload, HiArrowRight, HiMail } from "react-icons/hi";

export const About = () => {
  const { t } = useTranslation();
  const { actualLng } = useLngStore();
  const resumeFilename = "Resume_LeonardoFerreyra.pdf";
  const resumeUrl =
    actualLng == "en"
      ? "./Resume_LeonardoFerreyra_ENG.pdf"
      : "./Resume_LeonardoFerreyra_ESP.pdf";

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("Hero.Greetings")}
              <span className="block text-emerald-400 text-3xl sm:text-4xl lg:text-5xl mt-2">
                {t("Hero.Tagline")}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-slate-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("Hero.Summary")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("Hero.WorkWMe")}
                <HiMail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#projects"
                className="group flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-700 hover:text-white transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("Hero.ViewProjects")}
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={resumeUrl}
                download={resumeFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-700 hover:text-white transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("Hero.Resume")}
                <HiDownload className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
              <div
                className="absolute -inset-3 rounded-full bg-emerald-500/10 border border-emerald-500/30"
                aria-hidden="true"
              />
              <img
                className="relative w-full h-full object-cover rounded-full border border-slate-700 shadow-2xl"
                src="/profile.webp"
                alt="Leonardo Ferreyra"
                width={400}
                height={400}
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
