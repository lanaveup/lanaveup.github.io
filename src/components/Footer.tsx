
import React from 'react';
import { RocketIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 bg-gradient-to-br from-nave-blue to-nave-green rounded-full flex items-center justify-center">
                <RocketIcon className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">La Nave</span>
            </div>
            <p className="text-foreground/70">
              Ideas que inspiran, startups que transforman. Lo mejor del ecosistema startup, en minutos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/50 hover:text-nave-blue transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-nave-blue transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-nave-blue transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Ediciones anteriores</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Suscribirse</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Temas</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Recomendaciones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Comunidad</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Acerca de La Nave</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Nuestro equipo</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Colaboraciones</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Términos de uso</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-nave-blue transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} StartUpdate. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
