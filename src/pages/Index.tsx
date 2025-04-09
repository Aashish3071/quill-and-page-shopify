
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import Categories from '@/components/home/Categories';
import About from '@/components/home/About';
import BlogPreview from '@/components/home/BlogPreview';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedBooks />
      <Categories />
      <About />
      <BlogPreview />
      <Newsletter />
    </Layout>
  );
};

export default Index;
