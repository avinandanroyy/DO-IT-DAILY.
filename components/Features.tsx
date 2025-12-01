import React from 'react';
import { Target, Users, Zap, BarChart3, Lock, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';
import CartoonCharacter from './CartoonCharacter';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Binary Tracking",
    description: "Did you do it? Yes or No. No partial credit. No excuses. Our tracking engine is built on absolute truth.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "The Arena",
    description: "A public leaderboard where anonymity is optional but shame is real. Compete with others to keep your streak alive.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Deep Work Pods",
    description: "Audio-only channels designed for silent co-working. Enter the pod, mute your mic, and grind.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 4,
    title: "Visual Commit Graph",
    description: "Your consistency visualized. See your year in pixels. Fill the grid. Don't break the chain.",
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Stakes & Pledges",
    description: "Put money on the line. If you miss a day, your pledge goes to a charity you hate. Radical motivation.",
    icon: <Lock className="w-8 h-8" />,
    gradient: "from-red-500 to-rose-500"
  },
  {
    id: 6,
    title: "Ritual Design",
    description: "Tools to stack habits. Build routines that trigger automatically. Turn willpower into muscle memory.",
    icon: <Repeat className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500"
  }
];

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 dark:via-purple-900/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Systematic
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to build unbreakable habits and maintain consistency
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent hover:shadow-2xl dark:hover:shadow-purple-900/20 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 dark:opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 text-white flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn more link */}
              <motion.div
                className="flex items-center gap-2 text-sm font-semibold text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Learn more</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>

              {/* Decorative element */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-10 dark:opacity-5 rounded-full blur-2xl group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration with cartoon character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-32 h-32 opacity-30">
            <CartoonCharacter variant="runner" className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;