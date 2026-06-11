import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HiBriefcase, HiLocationMarker } from "react-icons/hi";
import { experience } from "../data/dataExperience";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <HiBriefcase className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Experience.Title")}
          </h2>
          <p className="text-xl text-slate-300">
            {t("Experience.Description")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <ol className="relative border-l border-slate-800 ml-3 sm:ml-4 space-y-12">
            {experience.map((job, index) => {
              const highlights = t(`Experience.Items.${job.id}.Highlights`, {
                returnObjects: true,
              }) as string[];

              return (
                <motion.li
                  key={job.id}
                  className="relative pl-8 sm:pl-10"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span
                    className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-slate-950"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-medium text-emerald-400 tracking-wide mb-1">
                    {t(`Experience.Items.${job.id}.Period`)}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {t(`Experience.Items.${job.id}.Role`)}
                    <span className="text-emerald-400"> · </span>
                    <span className="text-slate-200">{job.company}</span>
                  </h3>

                  <p className="flex items-center gap-1.5 text-sm text-slate-400 mt-1 mb-4">
                    <HiLocationMarker className="w-4 h-4" aria-hidden="true" />
                    {t(`Experience.Items.${job.id}.Location`)}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-slate-300 leading-relaxed"
                      >
                        <span
                          className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500/60 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
