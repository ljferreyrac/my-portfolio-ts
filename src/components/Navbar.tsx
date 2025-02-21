import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useLngStore } from "../hooks/useLngStore";

export const Navbar = () => {
  const { t } = useTranslation();
  const { actualLng, switchLanguage } = useLngStore();
  const languages = ["en", "es"];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#projects", label: t("Navbar.Projects") },
    { href: "#skills", label: t("Navbar.Skills") },
    { href: "#education", label: t("Navbar.Education") },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#about"
            className="text-xl font-bold text-white hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Leonardo Ferreyra
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* Language Switcher */}
            <div className="flex space-x-2">
              {languages.map((lng) => (
                <motion.button
                  key={lng}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    actualLng === lng
                      ? "bg-green-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  onClick={() => switchLanguage(lng)}
                >
                  {lng.toUpperCase()}
                </motion.button>
              ))}
            </div>

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              className="bg-green-500 text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span>{t("Navbar.HireMe")}</span>
              <HiArrowRight />
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="flex space-x-2 px-3 py-2">
                  {languages.map((lng) => (
                    <button
                      key={lng}
                      className={`px-3 py-1 rounded-md ${
                        actualLng === lng
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 text-gray-300"
                      }`}
                      onClick={() => switchLanguage(lng)}
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-white bg-green-500 hover:bg-green-600"
                  onClick={() => setIsOpen(false)}
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
