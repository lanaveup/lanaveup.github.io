import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ClockIcon, BookmarkIcon, ArrowLeftIcon, ShareIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Separator } from '@/components/ui/separator';
import { articles } from '@/data/articles';

const parseInlineFormatting = (text: string): string => {
  // First handle block-level elements
  const processBlockElements = (text: string): string => {
    const lines = text.split('\n');
    let inList = false;
    let listItems: string[] = [];
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // Handle headers first
      if (trimmedLine.startsWith('# ')) {
        return articleTemplate.title(trimmedLine.slice(2));
      }
      if (trimmedLine.startsWith('## ')) {
        return articleTemplate.subtitle(trimmedLine.slice(3));
      }
      if (trimmedLine.startsWith('### ')) {
        return articleTemplate.subsubtitle(trimmedLine.slice(4));
      }
      
      // Handle lists
      if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(trimmedLine.slice(2));
        
        // If next line is not a list item or this is the last line
        if (!lines[index + 1]?.trim().startsWith('- ') || index === lines.length - 1) {
          const list = articleTemplate.list(listItems);
          inList = false;
          listItems = [];
          return list;
        }
        return '';
      }
      
      // Handle regular paragraphs
      if (trimmedLine && !inList) {
        return articleTemplate.paragraph(trimmedLine);
      }
      
      return line; // Keep empty lines for spacing
    }).join('\n');
  };
  
  // Process block elements first
  text = processBlockElements(text);
  
  // Then handle inline formatting
  text = text
    // Replace bold text **text**
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    
    // Replace italic text *text*
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    
    // Replace links [text](url)
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-nave-blue hover:underline">$1</a>')
    
    // Replace inline code `code`
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    
    // Clean up extra newlines but preserve intentional spacing
    .replace(/\n{3,}/g, '\n\n');
  
  return text;
};

const articleTemplate = {
  title: (text: string) => `<h1 class="text-4xl font-bold text-primary mt-10 mb-6 tracking-tight">${text}</h1>`,
  subtitle: (text: string) => `<h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4 tracking-tight">${text}</h2>`,
  subsubtitle: (text: string) => `<h3 class="text-xl font-semibold text-gray-700 mt-6 mb-3 tracking-tight">${text}</h3>`,
  paragraph: (text: string) => `<p class="text-gray-700 leading-relaxed mb-4">${text}</p>`,
  lead: (text: string) => `<p class="text-xl text-gray-800 leading-relaxed mb-6 font-medium">${text}</p>`,
  list: (items: string[]) => `
    <ul class="space-y-3 my-6 ml-6 list-none">
      ${items.map(item => `<li class="flex items-start">
        <span class="text-nave-blue font-bold mr-2 mt-1">•</span>
        <span class="text-gray-700">${item}</span>
      </li>`).join('')}
    </ul>
  `,
  highlight: (text: string) => `
    <div class="bg-gradient-to-r from-nave-blue/5 to-nave-green/5 rounded-lg p-6 my-6 border-l-4 border-nave-blue">
      <p class="text-gray-700 italic">${text}</p>
    </div>
  `,
  grid: (items: string[]) => `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      ${items.map(item => `
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="bg-gradient-to-r from-nave-blue to-nave-green h-1"></div>
          <div class="p-6">
            <p class="text-gray-700">${item}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `,
  formatContent: (content: string): string => {
    let formattedContent = parseInlineFormatting(content);
    formattedContent = `<div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-nave-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm">
      ${formattedContent}
    </div>`;
    return formattedContent;
  }
};

const ArticleDetail = () => {
  const { articleId } = useParams<{ articleId: string }>();
  
  // Find the current article
  const article = articles.find(art => art.id === articleId);
  
  // Format the article content using the template system
  const formatContent = (content: string) => {
    // First apply the inline formatting
    let formattedContent = parseInlineFormatting(content);
    
    // Then wrap in the prose container
    formattedContent = `<div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-nave-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm">
      ${formattedContent}
    </div>`;
    
    return formattedContent;
  };
  
  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
            <p className="text-lg text-foreground/70 mb-8">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
            <Button asChild>
              <Link to="/articulos">Ver todos los artículos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Related articles (excluding current)
  const relatedArticles = articles
    .filter(a => a.id !== articleId)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Article Header */}
        <section className="pt-16 pb-8 bg-gradient-to-b from-background to-white/50">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <Link to="/articulos" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-6 group transition-colors">
                  <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Volver a artículos
                </Link>
              </div>
              
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-nave-blue/10 to-nave-green/10 text-3xl mb-4">
                  {article.emoji}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{new Date(article.publishedAt).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{article.readingTime}</span>
                  </div>
                  <div className="flex items-center">
                    <BookmarkIcon className="h-4 w-4 mr-1" />
                    <span>{article.categories.join(', ')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Article Featured Image */}
        <section className="py-8">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={article.imageSrc} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <motion.div 
                className="lg:w-3/4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="prose prose-lg max-w-none">
                  {/* Lead paragraph */}
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: articleTemplate.lead(article.description) 
                    }}
                    className="lead"
                  />
                  
                  {/* Main content with all Notion-style formatting */}
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: articleTemplate.formatContent(article.content) 
                    }}
                    className="article-content"
                  />
                </div>
                
                {/* Share Buttons */}
                <div className="mt-12 flex items-center justify-between">
                  <div>
                    <Button variant="outline" size="sm" className="mr-2">
                      <ShareIcon className="mr-2 h-4 w-4" />
                      Compartir
                    </Button>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookmarkIcon className="mr-1 h-4 w-4" />
                    <span>{article.categories.join(', ')}</span>
                  </div>
                </div>
                
                <Separator className="my-12" />
                
                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-nave-blue/20 flex items-center justify-center text-nave-blue font-bold">
                    LA
                  </div>
                  <div>
                    <h3 className="font-medium">La Nave Editorial</h3>
                    <p className="text-sm text-muted-foreground">Equipo de análisis startup</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Sidebar */}
              <motion.div 
                className="lg:w-1/4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="sticky top-20">
                  <div className="p-6 rounded-lg border bg-white shadow-sm mb-6">
                    <h4 className="font-medium mb-4">Artículos relacionados</h4>
                    <div className="space-y-4">
                      {relatedArticles.map(related => (
                        <div key={related.id}>
                          <Link 
                            to={`/articulos/${related.id}`}
                            className="flex items-start space-x-3 group"
                          >
                            <span className="text-lg">{related.emoji}</span>
                            <span className="text-sm font-medium group-hover:text-nave-blue transition-colors line-clamp-2">
                              {related.title}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gradient-to-br from-nave-blue/10 to-nave-green/10">
                    <h4 className="font-medium mb-2">¿Te gustó este artículo?</h4>
                    <p className="text-sm text-foreground/70 mb-4">
                      Recibe nuestro newsletter semanal con los mejores análisis del ecosistema startup.
                    </p>
                    <Button className="w-full bg-nave-blue text-white hover:bg-nave-blue/90">
                      Suscribirse
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-background to-white/50">
          <div className="container max-w-7xl">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
