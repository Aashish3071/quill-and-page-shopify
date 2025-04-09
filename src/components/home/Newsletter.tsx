
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join Our Literary Community
          </h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter to receive updates on new releases, author interviews, and exclusive reading guides.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Your email address" 
              className="bg-gray-700 border-gray-600 focus:border-gold text-white"
            />
            <Button className="bg-gold hover:bg-gold/90 text-charcoal">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            By subscribing, you agree to receive marketing emails from Quill & Page. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
