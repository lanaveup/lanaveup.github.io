
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Star = {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: number;
};

export const AnimatedStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: Math.random() * 0.9 + 0.1,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: Math.random() * 5 + 3, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: star.delay
          }}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: 'white',
            boxShadow: `0 0 ${star.size * 2}px ${star.size / 2}px rgba(255, 255, 255, 0.8)`
          }}
        />
      ))}
    </>
  );
};
