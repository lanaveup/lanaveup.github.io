
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CalendarIcon, BookOpenIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const editions = [
  {
    id: 'edition-1',
    title: 'El auge de las startups fintech en América Latina',
    date: '12 de mayo, 2023',
    description: 'Exploramos el crecimiento explosivo de las fintech en la región y cómo están revolucionando el sector financiero tradicional.',
    coverImage: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c',
    articles: ['que-es-una-startup', 'unicornios-latinoamerica'],
    featuredColor: 'from-nave-blue to-nave-lightblue',
  },
  {
    id: 'edition-2',
    title: 'Venture Capital en tiempos de incertidumbre',
    date: '15 de junio, 2023',
    description: 'Analizamos cómo el capital de riesgo está evolucionando en un contexto global desafiante y qué significa para los emprendedores.',
    coverImage: 'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf',
    articles: ['historia-rappi', 'que-es-una-startup'],
    featuredColor: 'from-purple-600 to-pink-500',
  },
  {
    id: 'edition-3',
    title: 'La revolución de las startups de salud digital',
    date: '10 de julio, 2023',
    description: 'El sector healthtech está transformando la atención médica en Latinoamérica, conoce las innovaciones más prometedoras.',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    articles: ['startups-tech-latam', 'unicornios-latinoamerica'],
    featuredColor: 'from-green-500 to-emerald-700',
  },
  {
    id: 'edition-4',
    title: 'Startups B2B: El motor silencioso de la innovación',
    date: '5 de agosto, 2023',
    description: 'Las startups que venden a otras empresas están creciendo rápidamente. Investigamos por qué son tan atractivas para inversores.',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    articles: ['startups-tech-latam', 'historia-rappi'],
    featuredColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'edition-5',
    title: 'El impacto de la IA en el ecosistema emprendedor',
    date: '20 de septiembre, 2023',
    description: 'Cómo la inteligencia artificial está creando nuevas oportunidades y desafíos para emprendedores en la región.',
    coverImage: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72',
    articles: ['que-es-una-startup', 'startups-tech-latam'],
    featuredColor: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'edition-6',
    title: 'Sostenibilidad y startups: El nuevo paradigma',
    date: '15 de octubre, 2023',
    description: 'El auge de las startups con propósito y cómo están redefiniendo el éxito empresarial más allá del beneficio económico.',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    articles: ['unicornios-latinoamerica', 'historia-rappi'],
    featuredColor: 'from-teal-500 to-emerald-600',
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

const Editions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-background via-background to-white/70">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-nave-blue/10 to-nave-green/10 text-nave-blue font-medium text-sm">
                Nuestras Ediciones
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ediciones La Nave Startup Pulse</h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Descubre todas nuestras ediciones anteriores con análisis detallados del ecosistema startup latinoamericano.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {editions.map((edition) => (
                <motion.div key={edition.id} variants={item}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${edition.featuredColor} opacity-90`}></div>
                      <img src={edition.coverImage} alt={edition.title} className="w-full h-full object-cover mix-blend-overlay" />
                      <div className="absolute top-4 left-4 flex items-center">
                        <Badge variant="outline" className="bg-white/80 text-foreground font-medium flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3" />
                          {edition.date}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-bold line-clamp-2 hover:text-nave-blue transition-colors">
                        {edition.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {edition.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <BookOpenIcon className="h-4 w-4" />
                        <span>{edition.articles.length} artículos</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button variant="ghost" className="w-full justify-start group hover:bg-nave-blue/10" asChild>
                        <Link to={`/ediciones/${edition.id}`} className="flex items-center">
                          <span className="font-medium">Ver edición completa</span>
                          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Editions;
