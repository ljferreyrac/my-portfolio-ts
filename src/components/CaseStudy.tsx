import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { SectionHeader } from "./SectionHeader";

interface Stat {
  Value: string;
  Label: string;
}

interface Decision {
  Title: string;
  Body: string;
}

const STEP = 0.17;
const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {},
};

const nodeVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: i * STEP },
  }),
};

const lineYVariant: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: (i: number) => ({
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: i * STEP },
  }),
};

const lineXVariant: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: i * STEP },
  }),
};

const nodeBase = "rounded-xl border bg-slate-900/80 p-4 sm:p-5 text-left min-w-0";
const mainNode = `${nodeBase} border-slate-700`;
const sideNode = `${nodeBase} border-dashed border-emerald-500/40`;

interface NodeProps {
  title: string;
  sub: string;
  index: number;
  className?: string;
  children?: ReactNode;
}

const Node = ({ title, sub, index, className = "", children }: NodeProps) => (
  <motion.div className={className} variants={nodeVariant} custom={index}>
    <h4 className="text-white font-bold text-base break-words">{title}</h4>
    <p className="mt-1 text-sm text-slate-400 leading-relaxed break-words">
      {sub}
    </p>
    {children}
  </motion.div>
);

const VLine = ({ index, pulse }: { index: number; pulse: boolean }) => (
  <motion.div
    className="relative mx-auto h-10 w-px origin-top bg-emerald-500/60"
    variants={lineYVariant}
    custom={index}
    aria-hidden="true"
  >
    <HiChevronDown className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 text-emerald-400" />
    {pulse && (
      <motion.span
        className="absolute left-1/2 -ml-[3px] h-1.5 w-1.5 rounded-full bg-emerald-300"
        variants={{
          hidden: { top: "0%", opacity: 0 },
          show: {
            top: ["0%", "100%"],
            opacity: [0, 1, 0],
            transition: {
              delay: 2.2 + index * 0.1,
              duration: 1.2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1.8,
            },
          },
        }}
      />
    )}
  </motion.div>
);

export const CaseStudy = () => {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const pulse = !reduced;

  const agents = t("CaseStudy.Agents", { returnObjects: true }) as string[];
  const stats = t("CaseStudy.Stats", { returnObjects: true }) as Stat[];
  const decisions = t("CaseStudy.Decisions", {
    returnObjects: true,
  }) as Decision[];

  const n = (key: string) => ({
    title: t(`CaseStudy.Nodes.${key}.Title`),
    sub: t(`CaseStudy.Nodes.${key}.Sub`),
  });

  return (
    <section id="case-study" className="py-20 scroll-mt-16">
      <div className="container px-4 mx-auto">
        <SectionHeader
          index="01"
          eyebrow={t("CaseStudy.Eyebrow")}
          title={t("CaseStudy.Title")}
          description={t("CaseStudy.Lead")}
        />

        <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500 mb-6 -mt-6 sm:-mt-10">
          {t("CaseStudy.Context")}
        </p>

        <figure
          aria-label={t("CaseStudy.DiagramLabel")}
          className="rounded-2xl border border-slate-800 bg-slate-900/40 bg-[radial-gradient(circle,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:20px_20px] p-6 sm:p-8"
        >
          <motion.div
            className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-[1fr_minmax(0,1.4fr)_1fr]"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main flow */}
            <Node
              {...n("Source")}
              index={0}
              className={`${mainNode} lg:col-start-2 lg:row-start-1`}
            />
            <div className="lg:col-start-2 lg:row-start-2">
              <VLine index={1} pulse={pulse} />
            </div>

            <Node
              {...n("Analyzers")}
              index={2}
              className={`${mainNode} lg:col-start-2 lg:row-start-3`}
            />

            {/* Config side node, linked to Analyzers */}
            <div className="order-last mt-4 flex flex-col lg:order-none lg:col-start-1 lg:row-start-3 lg:mt-0 lg:flex-row-reverse lg:items-center">
              <motion.div
                className="hidden h-px w-8 shrink-0 origin-right border-t border-dashed border-emerald-500/50 lg:block"
                variants={lineXVariant}
                custom={7}
                aria-hidden="true"
              />
              <Node {...n("Config")} index={7} className={`${sideNode} flex-1`} />
            </div>

            <div className="lg:col-start-2 lg:row-start-4">
              <VLine index={3} pulse={pulse} />
            </div>

            <Node
              {...n("Agents")}
              index={4}
              className={`${mainNode} border-emerald-500/40 lg:col-start-2 lg:row-start-5`}
            >
              <ul className="mt-3 flex flex-wrap gap-2">
                {agents.map((a) => (
                  <li
                    key={a}
                    className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 font-mono text-[11px] text-emerald-300"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Node>

            <div className="lg:col-start-2 lg:row-start-6">
              <VLine index={5} pulse={pulse} />
            </div>

            <Node
              {...n("Proxy")}
              index={6}
              className={`${mainNode} lg:col-start-2 lg:row-start-7`}
            />

            <div className="lg:col-start-2 lg:row-start-8">
              <VLine index={7} pulse={pulse} />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-start-2 lg:row-start-9">
              <Node {...n("SelfHosted")} index={8} className={mainNode} />
              <Node {...n("Cloud")} index={8} className={mainNode} />
            </div>

            {/* Observability, watching Agents and Proxy */}
            <div className="mt-8 flex flex-col lg:col-start-3 lg:row-span-3 lg:row-start-5 lg:mt-0 lg:flex-row lg:items-stretch">
              <motion.div
                className="hidden w-8 shrink-0 origin-left items-center lg:flex"
                variants={lineXVariant}
                custom={9}
                aria-hidden="true"
              >
                <span className="block w-full border-t border-dashed border-emerald-500/50" />
              </motion.div>
              <Node
                {...n("Observability")}
                index={9}
                className={`${sideNode} flex-1 lg:flex lg:flex-col lg:justify-center lg:border-l-2`}
              />
            </div>
          </motion.div>
        </figure>

        {/* Stats */}
        <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.Label}
              className="flex flex-col-reverse rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-4 text-center sm:p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
            >
              <dt className="mt-2 text-[11px] leading-tight text-slate-400 sm:text-sm sm:leading-normal">
                {s.Label}
              </dt>
              <dd className="font-display text-3xl font-bold text-emerald-400 sm:text-5xl">
                {s.Value}
              </dd>
            </motion.div>
          ))}
        </dl>

        {/* Decisions */}
        <h3 className="mb-6 mt-16 text-2xl font-bold text-white">
          {t("CaseStudy.DecisionsTitle")}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {decisions.map((d, i) => (
            <motion.article
              key={d.Title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors duration-200 hover:border-emerald-500/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
            >
              <p className="mb-3 font-mono text-sm text-emerald-400">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="mb-2 text-lg font-bold text-white">{d.Title}</h4>
              <p className="leading-relaxed text-slate-300">{d.Body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
