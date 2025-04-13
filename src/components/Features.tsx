
import React from 'react';
import { 
  RocketIcon, 
  BookIcon,
  TrendingUpIcon, 
  LightbulbIcon, 
  GraduationCapIcon, 
  StarIcon 
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <RocketIcon className="h-8 w-8" />,
    title: 'Tema Central',
    description: 'Cada edición se enfoca en un tema clave relacionado con startups, venture capital o habilidades emprendedoras.'
  },
  {
    icon: <BookIcon className="h-8 w-8" />,
    title: 'Concepto Clave',
    description: 'Explicamos un concepto del mundo startup de manera clara y sencilla, usando analogías cotidianas.'
  },
  {
    icon: <TrendingUpIcon className="h-8 w-8" />,
    title: 'Ejemplo Real',
    description: 'Historias breves de startups famosas que ilustran el tema central de manera inspiradora.'
  },
  {
    icon: <GraduationCapIcon className="h-8 w-8" />,
    title: 'Relevancia Académica',
    description: 'Conectamos el tema del newsletter con las carreras e intereses de los estudiantes.'
  },
  {
    icon: <StarIcon className="h-8 w-8" />,
    title: 'Tendencias',
    description: 'Noticias y curiosidades actuales del ecosistema startup y venture capital.'
  },
  {
    icon: <LightbulbIcon className="h-8 w-8" />,
    title: 'Recursos',
    description: 'Recomendaciones de libros, herramientas y recursos para profundizar en los temas.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-white" id="acerca">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un newsletter diseñado para <span className="gradient-text">inspirar</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Cada edición está estructurada para mantener tu atención y brindarte información valiosa sobre el ecosistema startup.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              variants={item}
            >
              <div className="w-12 h-12 bg-nave-blue/10 text-nave-blue rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
