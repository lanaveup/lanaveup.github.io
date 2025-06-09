import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nave-space/20 to-transparent" />
      
      {/* Floating stars */}
      {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-nave-star rounded-full" style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }} animate={{
      y: [-20, 20, -20],
      opacity: [0.3, 1, 0.3]
    }} transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2
    }} />)}

      <div className="container relative z-10 px-0 mx-[150px]">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="max-w-2xl text-center px-[150px] mx-[30px]">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-6 h-6 text-nave-star animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Únete a La Nave
            </h2>
            <Star className="w-6 h-6 text-nave-star animate-pulse" />
          </div>
          
          <p className="text-lg text-white/80 mb-8">
            Recibe contenido exclusivo sobre startups, emprendimiento y tecnología directamente en tu bandeja de entrada.
          </p>

          <motion.form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" whileHover={{
          scale: 1.02
        }} transition={{
          duration: 0.2
        }}>
            <Input type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-nave-subtitle focus:ring-nave-subtitle" required />
            <Button type="submit" className="cosmic-button group" disabled={isSubscribed}>
              {isSubscribed ? "¡Suscrito! ✨" : <>
                  <span>Suscribirse</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>}
            </Button>
          </motion.form>

          {isSubscribed && <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="mt-4 p-4 bg-nave-green/20 border border-nave-green/30 rounded-lg text-nave-green">
              ¡Gracias por unirte! Revisa tu email para confirmar la suscripción.
            </motion.div>}
        </motion.div>
      </div>
    </section>;
};
export default NewsletterSignup;