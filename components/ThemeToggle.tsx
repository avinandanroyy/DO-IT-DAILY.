import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white dark:bg-gray-900 shadow-md"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
      <div className="relative flex items-center justify-between h-full w-full">
        <Sun className="w-3 h-3 text-yellow-500 opacity-0 dark:opacity-0" />
        <Moon className="w-3 h-3 text-blue-400 opacity-0 dark:opacity-100 absolute right-1" />
        <Sun className="w-3 h-3 text-yellow-500 opacity-100 dark:opacity-0 absolute left-1" />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;

