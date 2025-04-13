
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

// Import the articles data
import { articles } from '@/data/articles';

// Use the first 4 articles from our data
const featuredArticles = articles.slice(0, 4);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FeaturedArticles = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-white/50" id="ediciones">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-nave-blue/10 to-nave-green/10 text-nave-blue font-medium text-sm">
            Conocimiento Startup
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Artículos destacados</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explora nuestros artículos sobre el ecosistema startup, innovación y emprendimiento.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredArticles.map((article, index) => (
            <Card 
              key={article.id}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`flex flex-col ${index === 0 ? 'md:flex-row' : ''} h-full`}>
                <div className={`${index === 0 ? 'md:w-1/2' : ''} relative h-56 overflow-hidden`}>
                  <motion.img
                    src={article.imageSrc}
                    alt={article.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-3 left-3 bg-gradient-to-br from-nave-blue to-nave-lightblue text-white text-2xl px-3 py-2 rounded-md shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {article.emoji}
                  </motion.div>
                </div>
                
                <div className={`p-6 flex flex-col ${index === 0 ? 'md:w-1/2' : ''} flex-grow`}>
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-xl font-bold text-gradient-nave hover:text-nave-blue transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 pb-6">
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="p-0 mt-auto">
                    <Button 
                      variant="ghost" 
                      className="group hover:bg-nave-blue/10 p-0" 
                      asChild
                    >
                      <Link to={`/articulos/${article.id}`} className="flex items-center">
                        <span className="font-medium">Leer más</span>
                        <svg 
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"/>
                          <path d="m12 5 7 7-7 7"/>
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-gradient-to-r from-nave-blue/90 to-nave-lightblue hover:from-nave-blue hover:to-nave-lightblue/90 text-white px-8 py-2 rounded-md font-medium hover:shadow-lg transition-all duration-300" asChild>
            <Link to="/articulos">Ver todos los artículos</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
