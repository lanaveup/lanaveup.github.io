import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
export const HeroContent = () => {
  return <motion.div initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.6
  }} className="flex-1 space-y-6 px-[140px]">
      

      <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.4,
      duration: 0.5
    }}>
        <span className="gradient-text">Startupdate</span>
      </motion.h1>
      
      <motion.p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.5,
      duration: 0.5
    }}>
        Ideas que inspiran, startups que transforman. Lo mejor del ecosistema startup, en minutos.
      </motion.p>
      
      <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.6,
      duration: 0.5
    }}>
        <Button size="lg" className="cosmic-button group">
          <span>Suscríbete ahora</span>
          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        
      </motion.div>
    </motion.div>;
};