import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageMenu } from "./LanguageMenu";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      setIsOpen(false);

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  } as const;

  const navItems = [
    { href: "#case-study", label: t("Navbar.CaseStudy") },
    { href: "#experience", label: t("Navbar.Experience") },
    { href: "#projects", label: t("Navbar.Projects") },
    { href: "#skills", label: t("Navbar.Skills") },
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#about"
            className="text-xl font-bold font-display text-white hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#about");
            }}
          >
            Leonardo Ferreyra
          </motion.a>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.href);
                }}
              >
                {item.label}
              </motion.a>
            ))}

            <LanguageMenu />

            <motion.a
              href="#contact"
              className="bg-emerald-500 text-slate-950 font-semibold px-5 py-2 rounded-md flex items-center space-x-2 hover:bg-emerald-400 transition-colors duration-200 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#contact");
              }}
            >
              <span>{t("Navbar.HireMe")}</span>
              <HiArrowRight />
            </motion.a>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <LanguageMenu />
            <button
              className="text-slate-300 hover:text-white cursor-pointer p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-white bg-emerald-500 hover:bg-emerald-600 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("#contact");
                  }}
                >
                  {t("Navbar.HireMe")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
