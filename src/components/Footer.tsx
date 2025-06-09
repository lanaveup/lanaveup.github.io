import React from 'react';
import { RocketIcon, TwitterIcon, InstagramIcon, LinkedinIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
const Footer = () => {
  return <footer className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E1B4B]">
      {/* Star field effect - subtle */}
      <div className="absolute inset-0 starfield opacity-20"></div>
      
      {/* Nebula effects */}
      <div className="absolute bottom-1/3 -left-64 w-96 h-96 rounded-full bg-nave-cosmic-magenta/10 blur-[100px]"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-nave-cosmic-cyan/10 blur-[100px]"></div>
      
      <div className="container py-16 relative z-10 mx-[130px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 cosmic-border rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-cosmic animate-pulse-gentle"></div>
                <RocketIcon className="h-6 w-6 text-white relative z-10" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">La Nave</span>
            </div>
            <p className="text-white/70">
              Ideas que inspiran, startups que transforman. Lo mejor del ecosistema startup, en minutos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="cosmic-border p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <TwitterIcon className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="cosmic-border p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <InstagramIcon className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="cosmic-border p-2 rounded-full hover:scale-110 transition-transform duration-300">
                <LinkedinIcon className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white">Newsletter</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Ediciones anteriores</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Suscribirse</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Temas</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Recomendaciones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white">Comunidad</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Acerca de La Nave</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Nuestro equipo</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Colaboraciones</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Términos de uso</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-white/70 hover:text-nave-cosmic-orange transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} La Nave Startup Pulse. Todos los derechos reservados.</p>
        </div>
        
        {/* Decorative stars */}
        {[...Array(10)].map((_, i) => <motion.div key={i} className="absolute star" animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8]
      }} transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} style={{
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }} />)}
      </div>
    </footer>;
};
export default Footer;