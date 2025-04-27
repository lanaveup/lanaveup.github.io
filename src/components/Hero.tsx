
import React from 'react';
import { Button } from './ui/button';
import { ArrowRightIcon, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-36 overflow-hidden">
      {/* Enhanced background with animated stars */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background z-0 opacity-70" />
      
      {/* Animated stars decoration with improved placement */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: Math.random() * 0.9 + 0.1,
            scale: [1, 1.2, 1],
            rotate: Math.random() > 0.5 ? [0, 20, 0] : [0, -20, 0],
          }}
          transition={{ 
            duration: Math.random() * 5 + 3, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: Math.random() * 2
          }}
          className="absolute hidden md:block"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
          }}
        >
          <Star 
            className="text-nave-star"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
            fill="currentColor"
          />
        </motion.div>
      ))}

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nave-blue/10 text-nave-blue text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nave-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nave-blue"></span>
              </span>
              <span>Nueva edición disponible</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="gradient-text">StartUpdate</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Ideas que inspiran, startups que transforman. Lo mejor del ecosistema startup, en minutos.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" className="group bg-gradient-to-r from-nave-blue to-nave-lightblue hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                <span>Suscribirse ahora</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-nave-blue/5 transition-all duration-300 hover:border-nave-blue">
                Ver ediciones anteriores
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-nave-blue to-nave-green rounded-full opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.25, 0.2] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="relative"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Rocket className="w-full h-full text-nave-blue" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
