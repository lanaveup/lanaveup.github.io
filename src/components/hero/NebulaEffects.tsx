
import React from 'react';
import { motion } from 'framer-motion';

interface NebulaProps {
  color: string;
  size: number;
  blur: number;
  top: string;
  left: string;
  delay: number;
}

export const NebulaEffects = () => {
  const nebulae: NebulaProps[] = [
    {
      color: 'nave-cosmic-magenta',
      size: 96,
      blur: 12,
      top: '1/4',
      left: '1/4',
      delay: 0
    },
    {
      color: 'nave-cosmic-cyan',
      size: 64,
      blur: 12,
      top: 'auto',
      left: '1/3',
      delay: 0.2
    },
    {
      color: 'nave-cosmic-orange',
      size: 80,
      blur: 12,
      top: '1/3',
      left: 'auto',
      delay: 0.4
    }
  ];

  return (
    <>
      {nebulae.map((nebula, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-${nebula.color}/5 blur-3xl`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: nebula.delay
          }}
          style={{
            width: nebula.size * 4,
            height: nebula.size * 4,
            top: nebula.top === 'auto' ? 'auto' : undefined,
            bottom: nebula.top === 'auto' ? '1/4' : undefined,
            left: nebula.left === 'auto' ? 'auto' : undefined,
            right: nebula.left === 'auto' ? '1/4' : undefined,
          }}
        />
      ))}
    </>
  );
};
