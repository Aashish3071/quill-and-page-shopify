
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Account = () => {
  const isLoggedIn = false; // In a real app, this would come from your auth state or context
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8 text-center">My Account</h1>
        
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Sign In</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                  placeholder="••••••••"
                />
              </div>
              <Button className="w-full bg-charcoal hover:bg-charcoal/90 text-white">
                Sign In
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-gold hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div>
            {/* Account information would be shown here */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Account;
