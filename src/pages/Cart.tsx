
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Cart = () => {
  const cartItems = []; // In a real app, this would come from your cart state or context
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8 text-center">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any books to your cart yet.
            </p>
            <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white">
              <Link to="/shop">Browse Collection</Link>
            </Button>
          </div>
        ) : (
          <div>
            {/* Cart items would be listed here */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
