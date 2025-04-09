
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-3/4 h-3/4 bg-cream rounded-md"></div>
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1287&h=900"
              alt="About Quill & Page Publishing" 
              className="relative z-10 rounded-md shadow-md w-full"
            />
          </div>
          <div>
            <h2 className="section-heading mb-6">About Quill & Page</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, Quill & Page is an independent publishing house dedicated to discovering extraordinary voices and bringing beautifully crafted books to discerning readers around the world.
            </p>
            <p className="text-gray-700 mb-6">
              Our carefully curated collection spans fiction, non-fiction, classics, and poetry. We believe in the transformative power of literature and work closely with our authors to create books that inspire, challenge, and endure.
            </p>
            <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
