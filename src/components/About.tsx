import { useTranslation } from "react-i18next";
import { useLngStore } from "../hooks/useLngStore";
import { motion } from "framer-motion";
import { HiDownload, HiArrowRight, HiMail } from "react-icons/hi";

interface Metric {
  Value: string;
  Label: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export const About = () => {
  const { t } = useTranslation();
  const { actualLng } = useLngStore();
  const resumeFilename = "Resume_LeonardoFerreyra.pdf";
  const resumeUrl =
    actualLng == "en"
      ? "./Resume_LeonardoFerreyra_ENG.pdf"
      : "./Resume_LeonardoFerreyra_ESP.pdf";
  const metrics = t("Hero.Metrics", { returnObjects: true }) as Metric[];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[480px] w-[min(900px,100%)] rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-12"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div className="flex-1 space-y-6">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t("Hero.Available")}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            >
              {t("Hero.Greetings")}
              <span className="block text-emerald-400 text-2xl sm:text-3xl lg:text-4xl mt-3">
                {t("Hero.Tagline")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              {t("Hero.Summary")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-emerald-500 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-200 cursor-pointer"
              >
                {t("Hero.WorkWMe")}
                <HiMail className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#case-study"
                className="group flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-slate-200 px-6 py-3 rounded-lg font-medium hover:border-emerald-500/50 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {t("Hero.ViewProjects")}
                <HiArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href={resumeUrl}
                download={resumeFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-300 px-4 py-3 rounded-lg font-medium hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {t("Hero.Resume")}
                <HiDownload className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto">
              <div
                className="absolute -inset-3 rounded-full border border-emerald-500/30 bg-emerald-500/5"
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
        </motion.div>

        <motion.dl
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { delayChildren: 0.5, staggerChildren: 0.08 } },
          }}
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.Value}
              variants={fadeUp}
              className="flex flex-col-reverse bg-slate-950/90 p-5 sm:p-6"
            >
              <dt className="mt-1 text-sm text-slate-400 leading-snug">
                {metric.Label}
              </dt>
              <dd className="font-display text-2xl sm:text-3xl font-bold text-white">
                {metric.Value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
