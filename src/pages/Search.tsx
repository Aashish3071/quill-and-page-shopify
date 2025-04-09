
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8 text-center">Search Our Collection</h1>
        
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex">
            <Input
              type="text"
              placeholder="Search for books, authors, or genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-gold focus:ring-gold focus:border-gold"
            />
            <Button className="ml-2 bg-charcoal hover:bg-charcoal/90">
              <SearchIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center py-8">
          <p className="text-gray-600">
            {searchQuery ? 
              `No results found for "${searchQuery}". Please try a different search term.` :
              "Enter a search term to find books in our collection."
            }
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
