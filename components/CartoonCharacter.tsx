import React from 'react';
import { motion } from 'framer-motion';

interface CartoonCharacterProps {
  variant?: 'hero' | 'streak' | 'checkmark' | 'runner';
  className?: string;
}

const CartoonCharacter: React.FC<CartoonCharacterProps> = ({ variant = 'hero', className = '' }) => {
  const variants = {
    hero: (
      <motion.svg
        viewBox="0 0 200 200"
        className={className}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Head */}
        <motion.circle
          cx="100"
          cy="80"
          r="40"
          fill="#FFD93D"
          stroke="#333"
          strokeWidth="3"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Eyes */}
        <circle cx="90" cy="75" r="5" fill="#333" />
        <circle cx="110" cy="75" r="5" fill="#333" />
        {/* Smile */}
        <motion.path
          d="M 85 90 Q 100 100 115 90"
          stroke="#333"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={{ d: ["M 85 90 Q 100 100 115 90", "M 85 92 Q 100 102 115 92", "M 85 90 Q 100 100 115 90"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Body */}
        <motion.rect
          x="70"
          y="120"
          width="60"
          height="50"
          rx="10"
          fill="#4ECDC4"
          stroke="#333"
          strokeWidth="3"
          animate={{ y: [120, 118, 120] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        {/* Arms */}
        <motion.line
          x1="70"
          y1="130"
          x2="50"
          y2="150"
          stroke="#333"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          transformOrigin="70 130"
        />
        <motion.line
          x1="130"
          y1="130"
          x2="150"
          y2="150"
          stroke="#333"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          transformOrigin="130 130"
        />
        {/* Legs */}
        <line x1="85" y1="170" x2="85" y2="190" stroke="#333" strokeWidth="4" strokeLinecap="round" />
        <line x1="115" y1="170" x2="115" y2="190" stroke="#333" strokeWidth="4" strokeLinecap="round" />
        {/* Feet */}
        <ellipse cx="85" cy="190" rx="8" ry="5" fill="#333" />
        <ellipse cx="115" cy="190" rx="8" ry="5" fill="#333" />
      </motion.svg>
    ),
    streak: (
      <motion.svg
        viewBox="0 0 200 200"
        className={className}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Fire/flame character */}
        <motion.path
          d="M 100 50 L 120 80 L 100 100 L 80 80 Z"
          fill="#FF6B6B"
          stroke="#333"
          strokeWidth="3"
          animate={{ 
            d: [
              "M 100 50 L 120 80 L 100 100 L 80 80 Z",
              "M 100 45 L 125 80 L 100 105 L 75 80 Z",
              "M 100 50 L 120 80 L 100 100 L 80 80 Z"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.path
          d="M 100 100 L 110 120 L 100 140 L 90 120 Z"
          fill="#FF8E53"
          stroke="#333"
          strokeWidth="2"
          animate={{ 
            d: [
              "M 100 100 L 110 120 L 100 140 L 90 120 Z",
              "M 100 95 L 115 120 L 100 145 L 85 120 Z",
              "M 100 100 L 110 120 L 100 140 L 90 120 Z"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        {/* Face */}
        <circle cx="95" cy="75" r="3" fill="#333" />
        <circle cx="105" cy="75" r="3" fill="#333" />
        <motion.path
          d="M 95 85 Q 100 90 105 85"
          stroke="#333"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>
    ),
    checkmark: (
      <motion.svg
        viewBox="0 0 200 200"
        className={className}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Checkmark character */}
        <circle cx="100" cy="100" r="60" fill="#95E1D3" stroke="#333" strokeWidth="4" />
        <motion.path
          d="M 60 100 L 90 130 L 140 70"
          stroke="#333"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {/* Happy face */}
        <circle cx="85" cy="85" r="5" fill="#333" />
        <circle cx="115" cy="85" r="5" fill="#333" />
        <path d="M 80 110 Q 100 120 120 110" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />
      </motion.svg>
    ),
    runner: (
      <motion.svg
        viewBox="0 0 200 200"
        className={className}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Running character */}
        <circle cx="100" cy="70" r="25" fill="#FFD93D" stroke="#333" strokeWidth="3" />
        <circle cx="95" cy="65" r="3" fill="#333" />
        <circle cx="105" cy="65" r="3" fill="#333" />
        <path d="M 90 80 Q 100 85 110 80" stroke="#333" strokeWidth="2" fill="none" />
        
        {/* Body */}
        <motion.rect
          x="85"
          y="95"
          width="30"
          height="40"
          rx="5"
          fill="#4ECDC4"
          stroke="#333"
          strokeWidth="3"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          transformOrigin="100 115"
        />
        
        {/* Running legs */}
        <motion.line
          x1="95"
          y1="135"
          x2="85"
          y2="170"
          stroke="#333"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{ 
            x1: [95, 100, 95],
            y2: [170, 175, 170]
          }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        <motion.line
          x1="105"
          y1="135"
          x2="115"
          y2="170"
          stroke="#333"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{ 
            x1: [105, 100, 105],
            y2: [170, 165, 170]
          }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
        />
        
        {/* Arms */}
        <motion.line
          x1="85"
          y1="105"
          x2="70"
          y2="130"
          stroke="#333"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{ 
            x2: [70, 65, 70],
            y2: [130, 125, 130]
          }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        <motion.line
          x1="115"
          y1="105"
          x2="130"
          y2="130"
          stroke="#333"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{ 
            x2: [130, 135, 130],
            y2: [130, 125, 130]
          }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
        />
      </motion.svg>
    )
  };

  return <>{variants[variant]}</>;
};

export default CartoonCharacter;

