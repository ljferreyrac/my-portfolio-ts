import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiCheck, HiGlobeAlt } from "react-icons/hi";
import { useLngStore } from "../hooks/useLngStore";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export const LanguageMenu = () => {
  const { actualLng, switchLanguage } = useLngStore();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const current = languages.find((lng) => lng.code === actualLng);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={`Language: ${current?.label ?? actualLng}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className={`flex items-center gap-1.5 rounded-md p-2 transition-colors duration-200 cursor-pointer ${
          isOpen
            ? "bg-slate-800 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
      >
        <HiGlobeAlt className="h-5 w-5" aria-hidden="true" />
        <span className="font-mono text-xs uppercase">{actualLng}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-40 origin-top-right overflow-hidden rounded-lg border border-slate-700 bg-slate-900 py-1 shadow-xl shadow-black/40"
          >
            {languages.map((lng) => {
              const isActive = lng.code === actualLng;
              return (
                <li key={lng.code} role="none">
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={isActive}
                    lang={lng.code}
                    onClick={() => {
                      switchLanguage(lng.code);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? "text-emerald-400"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {lng.label}
                    {isActive && (
                      <HiCheck className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
