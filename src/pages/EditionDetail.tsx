import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarIcon, BookOpenIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import ArticleCard from '@/components/ArticleCard';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

// Import sample data
import { editions } from '@/data/editions';
import { articles } from '@/data/articles';
const EditionDetail = () => {
  const {
    editionId
  } = useParams<{
    editionId: string;
  }>();

  // Find the current edition
  const edition = editions.find(ed => ed.id === editionId);

  // Find edition index for previous/next navigation
  const currentIndex = editions.findIndex(ed => ed.id === editionId);
  const prevEdition = currentIndex > 0 ? editions[currentIndex - 1] : null;
  const nextEdition = currentIndex < editions.length - 1 ? editions[currentIndex + 1] : null;

  // If edition not found
  if (!edition) {
    return <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-20 mx-[130px]">
          <div className="text-center px-0 mx-0">
            <h1 className="text-3xl font-bold mb-4">Edición no encontrada</h1>
            <p className="text-lg text-foreground/70 mb-8">Lo sentimos, la edición que buscas no existe o ha sido movida.</p>
            <Button asChild>
              <Link to="/ediciones">Ver todas las ediciones</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>;
  }

  // Find the articles for this edition
  const editionArticles = articles.filter(article => edition.articles.includes(article.id));

  // Animations
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className={`relative py-24 overflow-hidden bg-gradient-to-br ${edition.featuredColor}`}>
          <div className="absolute inset-0 opacity-20">
            <img src={edition.coverImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <Link to="/ediciones" className="inline-flex items-center text-white/80 hover:text-white mb-6 group transition-colors">
                <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver a ediciones
              </Link>
              
              <Badge variant="outline" className="bg-white/20 text-white mb-4 flex items-center gap-1 w-fit">
                <CalendarIcon className="h-3 w-3" />
                {edition.date}
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {edition.title}
              </h1>
              
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-8">
                {edition.description}
              </p>
              
              <div className="flex items-center gap-2 text-white/80">
                <BookOpenIcon className="h-5 w-5" />
                <span>{editionArticles.length} artículos en esta edición</span>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Articles Section */}
        <section className="py-16 bg-gradient-to-b from-white/50 to-background">
          <div className="container">
            <motion.div className="mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Artículos en esta edición
              </h2>
              <p className="text-foreground/70">
                Análisis y reportes sobre el ecosistema startup latinoamericano
              </p>
            </motion.div>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
            once: true
          }}>
              {editionArticles.map((article, index) => <ArticleCard key={article.id} title={article.title} emoji={article.emoji} description={article.description} imageSrc={article.imageSrc} link={`/articulos/${article.id}`} featured={index === 0} />)}
            </motion.div>
          </div>
        </section>
        
        {/* Navigation Between Editions */}
        <section className="py-16 border-t">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/3">
                {prevEdition ? <Link to={`/ediciones/${prevEdition.id}`} className="group block">
                    <div className="flex items-center text-foreground/50 mb-2 group-hover:text-nave-blue transition-colors">
                      <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                      <span>Edición anterior</span>
                    </div>
                    <h3 className="text-lg font-medium group-hover:text-nave-blue transition-colors line-clamp-1">
                      {prevEdition.title}
                    </h3>
                  </Link> : <div className="h-8"></div>}
              </div>
              
              <div className="my-8 md:my-0">
                <Button asChild variant="outline">
                  <Link to="/ediciones">Ver todas las ediciones</Link>
                </Button>
              </div>
              
              <div className="md:w-1/3 text-right">
                {nextEdition ? <Link to={`/ediciones/${nextEdition.id}`} className="group block">
                    <div className="flex items-center justify-end text-foreground/50 mb-2 group-hover:text-nave-blue transition-colors">
                      <span>Siguiente edición</span>
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-lg font-medium group-hover:text-nave-blue transition-colors line-clamp-1">
                      {nextEdition.title}
                    </h3>
                  </Link> : <div className="h-8"></div>}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default EditionDetail;