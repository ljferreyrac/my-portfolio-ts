import { Provider } from "react-redux";
import { motion, MotionConfig } from "framer-motion";
import { store } from "./store/store";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export const Portfolio = () => {
  return (
    <Provider store={store}>
      <MotionConfig reducedMotion="user">
        <div className="overflow-x-hidden">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-slate-300 bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen relative"
          >
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </div>
          </motion.main>
        </div>
      </MotionConfig>
    </Provider>
  );
};
