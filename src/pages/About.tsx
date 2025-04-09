
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import Newsletter from '@/components/home/Newsletter';

const About = () => {
  return (
    <Layout>
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">Our Story</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-700 mb-10">
              Quill & Page is an independent publishing house dedicated to discovering extraordinary voices and bringing beautifully crafted books to discerning readers around the world.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading mb-6">Our Beginning</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010 by literary enthusiasts Julia Martinez and David Chen, Quill & Page began as a small independent press operating out of a converted warehouse in Brooklyn. Our mission was simple: to publish books we were passionate about, regardless of commercial trends.
              </p>
              <p className="text-gray-700 mb-4">
                In our first year, we published just three titles—a literary novel, a collection of essays, and a volume of poetry. Each book was meticulously edited, beautifully designed, and printed on high-quality paper with an attention to craft that would become our hallmark.
              </p>
              <p className="text-gray-700">
                Against all odds in a challenging industry, each of our initial publications found its audience. "The Cartographer's Daughter," our debut novel, was named a finalist for the National Book Award, putting Quill & Page on the literary map.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img 
                src="https://images.unsplash.com/photo-1529473814998-077b4fec6770?auto=format&fit=crop&q=80&w=1287&h=800" 
                alt="Quill & Page Beginnings" 
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1287&h=800" 
                alt="Quill & Page Books" 
                className="rounded-md shadow-md"
              />
            </div>
            <div>
              <h2 className="section-heading mb-6">Our Philosophy</h2>
              <p className="text-gray-700 mb-4">
                At Quill & Page, we believe that books matter—not just as entertainment or information, but as objects of beauty and meaning that can transform lives and shape culture.
              </p>
              <p className="text-gray-700 mb-4">
                We are guided by three core principles:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li><span className="font-semibold">Literary Excellence</span> - We seek out writing that is not merely good, but exceptional—work that challenges, moves, and endures.</li>
                <li><span className="font-semibold">Beautiful Design</span> - We believe that a book's physical form should honor its content, which is why we invest in high-quality materials, thoughtful typography, and original cover art.</li>
                <li><span className="font-semibold">Author Partnership</span> - We view publishing as a collaborative process and work closely with our authors at every stage, from manuscript development to marketing and beyond.</li>
              </ul>
              <p className="text-gray-700">
                While we've grown over the years, these values remain at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gold opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Julia Martinez" 
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">Julia Martinez</h3>
              <p className="text-gold text-sm mb-2">Co-Founder & Publisher</p>
              <p className="text-gray-600 text-sm">
                With 25 years in publishing, Julia oversees our editorial vision and author relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gold opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="David Chen" 
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">David Chen</h3>
              <p className="text-gold text-sm mb-2">Co-Founder & Creative Director</p>
              <p className="text-gray-600 text-sm">
                An award-winning designer, David leads our approach to book design and visual identity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gold opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Sophia Nguyen" 
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">Sophia Nguyen</h3>
              <p className="text-gold text-sm mb-2">Editorial Director</p>
              <p className="text-gray-600 text-sm">
                Formerly of The New Yorker, Sophia joined us in 2015 to lead our growing editorial team.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Whether you're a reader, writer, or book lover, there are many ways to be part of the Quill & Page community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/submissions" className="inline-block px-6 py-3 bg-gold text-charcoal font-medium rounded-md hover:bg-gold/90 transition-colors">
              Submit Your Manuscript
            </a>
            <a href="/shop" className="inline-block px-6 py-3 bg-charcoal text-white font-medium rounded-md hover:bg-charcoal/90 transition-colors">
              Explore Our Books
            </a>
          </div>
        </div>
      </section>
      
      <Separator />
      <Newsletter />
    </Layout>
  );
};

export default About;
