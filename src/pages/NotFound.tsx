
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream py-16 px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl font-serif font-bold text-charcoal mb-4">404</h1>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 mb-6">
            The page you're looking for ({location.pathname}) isn't available right now.
          </p>
          <p className="text-gray-600 mb-8">
            We're still working on this part of our website. Please check back soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
              <Link to="/shop">Browse Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
