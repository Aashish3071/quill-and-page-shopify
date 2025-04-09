
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative bg-cream py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {isMobile ? (
            <div className="relative">
              <div className="flex flex-col">
                <div className="z-10 mb-6">
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-charcoal">
                    Discover Stories That Inspire
                  </h1>
                  <p className="text-lg my-4 text-gray-700 max-w-lg">
                    Curated collections of beautifully crafted books for discerning readers.
                  </p>
                </div>
                
                <div className="relative z-0 mx-auto max-w-[320px] mb-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -left-5 -top-5 w-40 h-56 bg-gold rounded-md transform rotate-6 animate-pulse"></div>
                  <div className="absolute -right-5 -bottom-5 w-40 h-56 bg-charcoal rounded-md transform -rotate-6"></div>
                  <div className="book-cover relative z-10 shadow-xl rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387&h=580"
                      alt="Featured Book"
                      className="w-full h-[350px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                      <span className="text-white font-serif text-xl">Bestseller</span>
                      <span className="text-cream text-sm">Discover our collection</span>
                    </div>
                  </div>
                </div>
                
                <div className="z-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white transform hover:scale-105 transition-all duration-300">
                    <Link to="/shop">Browse Collection</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transform hover:scale-105 transition-all duration-300">
                    <Link to="/about">About the Publisher</Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="order-2 md:order-1">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Discover Stories That Inspire
                </h1>
                <p className="text-lg mb-8 text-gray-700 max-w-lg">
                  Curated collections of beautifully crafted books for discerning readers. Explore our latest releases and bestsellers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white transform hover:scale-105 transition-all duration-300">
                    <Link to="/shop">Browse Collection</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transform hover:scale-105 transition-all duration-300">
                    <Link to="/about">About the Publisher</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -left-8 -top-8 w-56 h-72 bg-gold rounded-md transform rotate-6"></div>
                  <div className="absolute -right-8 -bottom-8 w-56 h-72 bg-charcoal rounded-md transform -rotate-6"></div>
                  <div className="book-cover relative z-10 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387&h=580"
                      alt="Featured Book"
                      className="w-full h-[500px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
