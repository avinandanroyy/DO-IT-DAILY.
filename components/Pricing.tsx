import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PricingTier } from '../types';
import CartoonCharacter from './CartoonCharacter';

const tiers: PricingTier[] = [
  {
    name: "Lurker",
    price: "$0",
    description: "For those watching from the sidelines.",
    features: ["Access to public boards", "Read-only case studies", "Weekly newsletter", "No accountability features"],
    isPopular: false
  },
  {
    name: "Doer",
    price: "$12",
    description: "For those ready to commit to the craft.",
    features: ["Unlimited habit tracking", "Private Deep Work Pods", "Full Accountability Engine", "Stakes & Pledges Access", "API Access"],
    isPopular: true
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-24 bg-gradient-to-b from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-900/20 relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple, transparent pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Skin in
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">the Game</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We charge money because if you don't pay, you won't pay attention. 
            The investment is part of the commitment mechanism.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white border-transparent shadow-2xl shadow-purple-500/50 dark:shadow-purple-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl dark:hover:shadow-purple-900/20'
              }`}
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Cartoon character for popular plan */}
              {tier.isPopular && (
                <motion.div
                  className="absolute top-8 right-8 w-20 h-20 opacity-20"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <CartoonCharacter variant="checkmark" className="w-full h-full" />
                </motion.div>
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-3xl font-bold">{tier.name}</h3>
                  <div>
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-lg opacity-70">/mo</span>
                  </div>
                </div>
                
                <p className={`text-base mb-8 ${tier.isPopular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>
                  {tier.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        className={`mt-0.5 shrink-0 ${
                          tier.isPopular ? 'text-white' : 'text-purple-600'
                        }`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                      <span className="text-sm">{feat}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    tier.isPopular
                      ? 'bg-white text-purple-600 hover:bg-gray-100 dark:hover:bg-gray-50 shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-600 dark:hover:to-blue-600 shadow-lg shadow-purple-500/50 dark:shadow-purple-500/30'
                  }`}
                >
                  {tier.isPopular ? 'Get Started' : 'Select Plan'}
                </motion.button>
              </div>

              {/* Decorative gradient */}
              {!tier.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              30-Day Money Back Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;