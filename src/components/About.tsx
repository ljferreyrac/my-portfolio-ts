import { useTranslation } from "react-i18next";
import { useLngStore } from "../hooks/useLngStore";
import { motion } from "framer-motion";
import { HiDownload, HiArrowRight, HiMail } from "react-icons/hi";

export const About = () => {
  const { t } = useTranslation();
  const { actualLng } = useLngStore();
  const pdfFilename = "CV_Leonardo.pdf";
  const resumeFilename = "Resume_Leonardo.pdf";
  const pdfUrl =
    actualLng == "en"
      ? "./CV_LeonardoFerreyra_ENG.pdf"
      : "./CV_LeonardoFerreyra_ESP.pdf";
  const resumeUrl =
    actualLng == "en"
      ? "./Resume_LeonardoFerreyra_ENG.pdf"
      : "./Resume_LeonardoFerreyra_ESP.pdf";

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
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
              {t("About.Greetings")}
              <span className="block text-green-500">
                {t("About.LoveBuild")}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("About.Me")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("About.WorkWMe")}
                <HiMail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#projects"
                className="group flex items-center gap-2 bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("About.PreviousW/P")}
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={pdfUrl}
                download={pdfFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("About.CV")}
                <HiDownload className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                href={resumeUrl}
                download={resumeFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("About.Resume")}
                <HiDownload className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                className="absolute top-0 -left-4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 120, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -120, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              <motion.img
                className="relative rounded-2xl shadow-2xl"
                src="https://res.cloudinary.com/x-app-react-x/image/upload/v1708527898/portfolio/_afcc2b76-82fc-436a-8763-30efb7ff0741-removebg-preview_g63pmx.png"
                alt="Profile"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
