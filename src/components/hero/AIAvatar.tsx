import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
export const AIAvatar = () => {
  return <motion.div className="absolute top-8 right-8 z-20" initial={{
    opacity: 0,
    scale: 0.8
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    delay: 0.8,
    duration: 0.5
  }}>
      <div className="relative">
        
        
        
      </div>
    </motion.div>;
};