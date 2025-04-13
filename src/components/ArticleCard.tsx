
import React from 'react';
import { Button } from './ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
  title: string;
  emoji: string;
  description: string;
  imageSrc?: string;
  link: string;
  featured?: boolean;
}

const ArticleCard = ({
  title,
  emoji,
  description,
  imageSrc,
  link,
  featured = false,
}: ArticleCardProps) => {
  return (
    <motion.div 
      className={`article-card h-full flex flex-col ${featured ? 'md:col-span-2 md:flex-row' : ''} overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.2 }
      }}
    >
      {imageSrc && (
        <div className={`${featured ? 'md:w-1/2' : ''} relative h-56 overflow-hidden`}>
          <motion.img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute top-3 left-3 bg-gradient-to-br from-nave-blue to-nave-lightblue text-white text-2xl px-3 py-2 rounded-md shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {emoji}
          </motion.div>
        </div>
      )}
      
      <div className={`p-6 flex flex-col ${featured ? 'md:w-1/2' : ''} flex-grow bg-white border-t border-gray-100`}>
        <h3 className="text-xl font-bold mb-3 text-gradient-nave hover:text-nave-blue transition-colors">{title}</h3>
        <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">{description}</p>
        <div className="mt-auto">
          <Button variant="ghost" className="group hover:bg-nave-blue/10" asChild>
            <a href={link} className="flex items-center">
              <span className="font-medium">Leer más</span>
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
