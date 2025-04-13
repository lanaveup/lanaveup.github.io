
import React, { useState, useEffect } from 'react';
import { RocketIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-background/90' : 'bg-background/80'} backdrop-blur-sm border-b transition-all duration-300`}>
      <div className="container flex items-center justify-between h-16">
        <motion.a 
          href="/" 
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-8 h-8 bg-gradient-to-br from-nave-blue to-nave-green rounded-full flex items-center justify-center">
            <RocketIcon className="h-5 w-5 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-nave-star rounded-full animate-pulse-gentle"></div>
          </div>
          <span className="font-display font-bold text-xl">La Nave</span>
        </motion.a>
        
        <nav className="hidden md:flex space-x-4">
          {['Inicio', 'Ediciones', 'Acerca de', 'Suscribirse'].map((item, i) => (
            <motion.a 
              key={item} 
              href={item === 'Inicio' ? '/' : `#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="outline" className="hidden sm:flex hover:bg-nave-blue hover:text-white transition-colors">
              Unirse a la comunidad
            </Button>
          </motion.div>
          
          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden container py-4 bg-background"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            <a href="/" className="nav-link">Inicio</a>
            <a href="#ediciones" className="nav-link">Ediciones</a>
            <a href="#acerca" className="nav-link">Acerca de</a>
            <a href="#suscribirse" className="nav-link">Suscribirse</a>
            <Button className="w-full">Unirse a la comunidad</Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
