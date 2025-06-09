
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedStars } from './hero/AnimatedStars';
import { CosmicRocket } from './hero/CosmicRocket';
import { HeroContent } from './hero/HeroContent';
import { NebulaEffects } from './hero/NebulaEffects';
import { AIAvatar } from './hero/AIAvatar';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-main z-0" />
      
      <AnimatedStars />
      <NebulaEffects />
      <AIAvatar />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <HeroContent />
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <CosmicRocket />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
