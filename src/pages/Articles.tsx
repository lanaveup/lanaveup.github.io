import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, FilterIcon } from 'lucide-react';

// Import sample data
import { articles } from '@/data/articles';
const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter articles based on search term
  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.description.toLowerCase().includes(searchTerm.toLowerCase()));

  // Animation variants
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
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-background via-background to-white/70">
          <div className="container mx-[130px]">
            <motion.div className="text-center mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-nave-blue/10 to-nave-green/10 text-nave-blue font-medium text-sm">
                Base de Conocimiento
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Artículos</h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Explora nuestra colección de artículos sobre startups, innovación y el ecosistema emprendedor en América Latina.
              </p>
            </motion.div>
            
            {/* Search and Filter */}
            <motion.div className="max-w-3xl mx-auto mb-16" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input type="search" placeholder="Buscar artículos..." className="pl-10 py-6 text-lg" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
            </motion.div>
            
            {/* Articles Grid */}
            {filteredArticles.length > 0 ? <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
            once: true
          }}>
                {filteredArticles.map((article, index) => <ArticleCard key={article.id} title={article.title} emoji={article.emoji} description={article.description} imageSrc={article.imageSrc} link={`/articulos/${article.id}`} featured={index === 0 && searchTerm === ''} />)}
              </motion.div> : <motion.div className="text-center py-12" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }}>
                <h3 className="text-2xl font-bold mb-2">No se encontraron artículos</h3>
                <p className="text-foreground/70 mb-6">Intenta con otra búsqueda o explora todas nuestras categorías</p>
                <Button onClick={() => setSearchTerm('')}>
                  Ver todos los artículos
                </Button>
              </motion.div>}
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Articles;