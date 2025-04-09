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
                <div className="z-10 mb-4">
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Discover Stories That Inspire
                  </h1>
                  <p className="text-lg my-4 text-gray-700 max-w-lg">
                    Curated collections of beautifully crafted books for discerning readers.
                  </p>
                </div>
                
                <div className="relative z-0 mx-auto max-w-[280px] mb-6">
                  <div className="absolute -left-5 -top-5 w-40 h-56 bg-gold rounded-md transform rotate-6"></div>
                  <div className="absolute -right-5 -bottom-5 w-40 h-56 bg-charcoal rounded-md transform -rotate-6"></div>
                  <div className="book-cover relative z-10">
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387&h=580"
                      alt="Featured Book"
                      className="w-full h-[320px] object-cover rounded-md"
                    />
                  </div>
                </div>
                
                <div className="z-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white">
                    <Link to="/shop">Browse Collection</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
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
                  <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white">
                    <Link to="/shop">Browse Collection</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                    <Link to="/about">About the Publisher</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -left-8 -top-8 w-56 h-72 bg-gold rounded-md transform rotate-6"></div>
                  <div className="absolute -right-8 -bottom-8 w-56 h-72 bg-charcoal rounded-md transform -rotate-6"></div>
                  <div className="book-cover relative z-10">
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387&h=580"
                      alt="Featured Book"
                      className="w-full h-[500px] object-cover rounded-md"
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
