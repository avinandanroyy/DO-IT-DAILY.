import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex V.",
    role: "Indie Developer",
    quote: "I shipped 12 products in 12 months. Do-it-daily was the forcing function I needed.",
    image: "https://picsum.photos/200/200?random=1"
  },
  {
    id: 2,
    name: "Sarah J.",
    role: "Marathon Runner",
    quote: "Consistency is boring. That's why it works. This community embraces the boredom.",
    image: "https://picsum.photos/200/200?random=2"
  },
  {
    id: 3,
    name: "Marcus T.",
    role: "Writer",
    quote: "The 'Stakes' feature cost me $50 once. It never happened again. I wrote my novel.",
    image: "https://picsum.photos/200/200?random=3"
  },
  {
    id: 4,
    name: "Elena R.",
    role: "Designer",
    quote: "Minimalist interface, maximum pressure. Exactly what my ADHD brain required.",
    image: "https://picsum.photos/200/200?random=4"
  },
  {
    id: 5,
    name: "David K.",
    role: "Musician",
    quote: "Practicing scales every day sucks. Doing it with 500 other people sucks less.",
    image: "https://picsum.photos/200/200?random=5"
  }
];

const Testimonials: React.FC = () => {
  // Duplicate testimonials multiple times for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      // Calculate width of one complete set (5 testimonials)
      // Mobile: 350px + 32px gap, Desktop: 450px + 32px gap
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 350 : 450;
      const gap = 32; // gap-8 = 2rem = 32px
      const oneSetWidth = (cardWidth + gap) * testimonials.length;
      setScrollWidth(oneSetWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section className="w-full py-32 bg-black dark:bg-gray-900 text-white overflow-hidden relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
         <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Proof of <br/> Work
          </h2>
          <div className="hidden md:block text-xs font-mono uppercase tracking-widest opacity-60 dark:opacity-70">
            [ Community Feed ]
          </div>
      </div>
      <div className="w-full overflow-hidden pl-6 md:pl-[calc((100vw-64rem)/2+3rem)]">
        <motion.div 
          ref={scrollRef}
          className="flex gap-8 w-max"
          animate={{
            x: scrollWidth ? -scrollWidth : 0,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="relative w-[350px] md:w-[450px] bg-neutral-900 dark:bg-gray-800 border border-neutral-800 dark:border-gray-700 p-10 flex flex-col justify-between shrink-0 select-none hover:border-neutral-600 dark:hover:border-gray-600 transition-colors duration-300"
            >
              <div className="mb-8">
                 <span className="text-6xl font-serif leading-none opacity-20">"</span>
                 <p className="text-xl md:text-2xl font-medium leading-tight -mt-4 relative z-10">
                   {t.quote}
                 </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-800 dark:bg-gray-700 overflow-hidden relative grayscale">
                  <img src={t.image} alt={t.name} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-400 dark:text-gray-400 font-mono mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;