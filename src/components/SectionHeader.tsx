import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({
  index,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) => (
  <motion.header
    className="max-w-3xl mb-12 sm:mb-16"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    <p className="flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
      <span className="text-slate-500">{index}</span>
      <span className="h-px w-8 bg-emerald-500/50" aria-hidden="true" />
      {eyebrow}
    </p>
    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-slate-400 leading-relaxed">
        {description}
      </p>
    )}
  </motion.header>
);
