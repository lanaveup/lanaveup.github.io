
import React, { useState, useEffect } from 'react';
import { RocketIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

  const navigationItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Ediciones', href: '/ediciones' },
    { name: 'Acerca de', href: '/acerca' },
    { name: 'Suscribirse', href: '#suscribirse' }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-background/60' : 'bg-transparent'} backdrop-blur-lg transition-all duration-300`}>
      <div className="container flex items-center justify-between h-16 px-0 mx-[130px]">
        <motion.div className="flex items-center space-x-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 cosmic-border rounded-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-cosmic animate-pulse-gentle"></div>
              <RocketIcon className="h-6 w-6 text-white relative z-10" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-nave-cosmic-orange rounded-full animate-twinkle"></div>
            </div>
            <span className="font-display font-bold text-xl gradient-text">La Nave</span>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex space-x-4">
          {navigationItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              {item.href.startsWith('#') ? (
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              ) : (
                <Link to={item.href} className="nav-link">
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden container py-4 glass-effect"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('#') ? (
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.href} className="nav-link">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="w-full bg-gradient-cosmic text-white hover:shadow-lg transition-all">
              Unirse a la comunidad
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
