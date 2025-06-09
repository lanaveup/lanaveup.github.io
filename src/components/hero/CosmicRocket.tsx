
import React from 'react';
import { motion } from 'framer-motion';

export const CosmicRocket = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full opacity-30 blur-2xl"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Static rings - no rotation */}
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          className="absolute inset-0 border border-blue-300/20 rounded-full"
          style={{ 
            width: `${85 + i * 10}%`, 
            height: `${85 + i * 10}%`,
            left: `${7.5 - i * 5}%`,
            top: `${7.5 - i * 5}%`
          }}
        />
      ))}
      
      <motion.div 
        className="relative z-10 flex items-center justify-center h-full"
        animate={{ 
          y: [-15, 15, -15]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="relative w-64 h-64">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 opacity-60 rounded-full blur-xl"
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <img 
            src="/lovable-uploads/421e9eed-bda6-43d7-9770-5677deba8dec.png" 
            alt="La Nave Startup Logo" 
            className="w-full h-full object-contain relative z-10"
          />
        </div>
      </motion.div>
    </div>
  );
};
