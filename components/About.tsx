import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-purple-50/50 to-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 aspect-square relative"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=800&fit=crop&q=80&auto=format" 
                alt="The Architect - Tall Skyscraper" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-blue-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">
                  [ The Architect ]
                </div>
                <div className="text-2xl font-bold">Building the Future</div>
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <span>About</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Why I Built
              </span>
              <br />
              <span className="text-gray-900">This</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                I realized that <span className="font-bold text-gray-900">willpower is a myth</span>. Environment is everything.
              </p>
              <p>
                <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  do-it-daily
                </span> isn't just an app. It's the digital environment I built to force myself to succeed. It's sharp, unforgiving, and effective. I built it for myself, but you can use it too.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              className="mt-8 pt-8 border-t border-gray-200 flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                AR
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">Avinandan Roy</div>
                <div className="text-sm text-gray-600 font-medium">Developer & Designer</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;