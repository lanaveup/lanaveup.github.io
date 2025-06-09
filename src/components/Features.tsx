import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
const features = [{
  emoji: '🚀',
  title: 'Tema Central',
  description: 'Cada edición se enfoca en un tema clave relacionado con startups, venture capital o habilidades emprendedoras.'
}, {
  emoji: '📚',
  title: 'Concepto Clave',
  description: 'Explicamos un concepto del mundo startup de manera clara y sencilla, usando analogías cotidianas.'
}, {
  emoji: '📈',
  title: 'Ejemplo Real',
  description: 'Historias breves de startups famosas que ilustran el tema central de manera inspiradora.'
}, {
  emoji: '🎓',
  title: 'Relevancia Académica',
  description: 'Conectamos el tema del newsletter con las carreras e intereses de los estudiantes.'
}, {
  emoji: '⭐',
  title: 'Tendencias',
  description: 'Noticias y curiosidades actuales del ecosistema startup y venture capital.'
}, {
  emoji: '💡',
  title: 'Recursos',
  description: 'Recomendaciones de libros, herramientas y recursos para profundizar en los temas.'
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
const Features = () => {
  return <section className="py-24 relative overflow-hidden" id="acerca">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-main opacity-50 -z-10"></div>
      
      {/* Star field effect - subtle */}
      <div className="absolute inset-0 starfield opacity-30 -z-10"></div>
      
      <div className="container relative z-10 px-0 mx-[130px]">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <motion.div className="inline-flex items-center justify-center p-3 bg-white/5 cosmic-border rounded-full mb-6" whileHover={{
          scale: 1.05
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}>
            <Sparkles className="h-8 w-8" style={{
            color: '#f25cca'
          }} />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un newsletter diseñado para <span className="gradient-text">inspirar</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Cada edición está estructurada para mantener tu atención y brindarte información valiosa sobre el ecosistema startup.
          </p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }}>
          {features.map((feature, index) => <motion.div key={index} variants={item} whileHover={{
          scale: 1.02
        }} className="cosmic-card bg-white/5 backdrop-blur-sm p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg mx-0 px-[24px]">
              <div className="w-12 h-12 cosmic-border bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300" style={{
            color: '#f25cca'
          }}>{feature.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{feature.description}</p>
              
              {/* Decorative particle */}
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
            backgroundColor: '#f25cca'
          }}></div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default Features;