
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import StartupQuiz from '@/components/StartupQuiz';
import FeaturedArticles from '@/components/FeaturedArticles';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <StartupQuiz />
        <FeaturedArticles />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
