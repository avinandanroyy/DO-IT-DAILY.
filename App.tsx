import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonial';
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white selection:bg-purple-600 dark:selection:bg-purple-500 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-900 dark:text-white text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            do-it-daily
          </span>
          <span className="text-gray-400 dark:text-gray-500">.</span>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <a
            href="#features"
            className="hidden md:block text-gray-700 dark:text-gray-300 text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hidden md:block text-gray-700 dark:text-gray-300 text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Pricing
          </a>
          <ThemeToggle />
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </motion.nav>

      <main className="flex flex-col w-full">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;