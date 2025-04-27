
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { RocketIcon, CheckIcon } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito a StartUpdate. Revisa tu correo para confirmar.",
        variant: "default",
      });
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 bg-nave-space text-white" id="suscribirse">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-nave-blue/20 rounded-full mb-6 animate-float">
            <RocketIcon className="h-8 w-8 text-nave-lightblue" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Únete a nuestra comunidad
          </h2>
          
          <p className="text-lg text-white/80 mb-8">
            Recibe en tu bandeja de entrada lo mejor del ecosistema startup, artículos exclusivos y recursos para impulsar tu mentalidad emprendedora.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="tu@correo.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus:ring-nave-lightblue focus:border-nave-lightblue"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-nave-green to-nave-lightblue hover:from-nave-green/90 hover:to-nave-lightblue/90 h-12 shadow-lg shadow-nave-green/20 hover:shadow-xl transition-all duration-300" 
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </span>
              ) : (
                "Suscribirme"
              )}
            </Button>
          </form>
          
          <div className="flex items-center justify-center mt-6 text-white/70 text-sm">
            <CheckIcon className="h-4 w-4 mr-2" />
            <span>Puedes cancelar tu suscripción en cualquier momento</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
