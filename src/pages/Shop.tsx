
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import BookCard, { Book } from '@/components/shop/BookCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, X } from 'lucide-react';

const books: Book[] = [
  {
    id: 1,
    title: "The Silent Echo",
    author: "Eleanor Harper",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387&h=580",
    price: 24.99,
    category: "Fiction",
    isNew: true
  },
  {
    id: 2,
    title: "Memoirs of Tomorrow",
    author: "Jonathan Reed",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=387&h=580",
    price: 19.99,
    category: "Non-Fiction",
  },
  {
    id: 3,
    title: "The Last Garden",
    author: "Sophia Williams",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=387&h=580",
    price: 22.99,
    category: "Fiction",
    isNew: true
  },
  {
    id: 4,
    title: "Philosophy of Mind",
    author: "Dr. Marcus Chen",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=387&h=580",
    price: 29.99,
    category: "Philosophy",
  },
  {
    id: 5,
    title: "Whispers of Autumn",
    author: "Alexandra Kim",
    cover: "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?auto=format&fit=crop&q=80&w=387&h=580",
    price: 21.99,
    category: "Poetry",
    isNew: true
  },
  {
    id: 6,
    title: "The Art of Stillness",
    author: "Thomas Rivera",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=387&h=580",
    price: 18.99,
    category: "Non-Fiction",
  },
  {
    id: 7,
    title: "Constellations",
    author: "Emma Johnson",
    cover: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?auto=format&fit=crop&q=80&w=387&h=580",
    price: 20.99,
    category: "Fiction",
  },
  {
    id: 8,
    title: "Ancient Civilizations",
    author: "Dr. James Wilson",
    cover: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=387&h=580",
    price: 27.99,
    category: "History",
  }
];

const categories = [
  { id: "fiction", name: "Fiction" },
  { id: "non-fiction", name: "Non-Fiction" },
  { id: "poetry", name: "Poetry" },
  { id: "philosophy", name: "Philosophy" },
  { id: "history", name: "History" },
  { id: "classics", name: "Classics" }
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter books based on category and search query
  const filteredBooks = books.filter(book => {
    const matchesCategory = categoryParam ? book.category.toLowerCase() === categoryParam.toLowerCase() : true;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery === '' || matchesSearch);
  });
  
  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };
  
  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };
  
  return (
    <Layout>
      <section className="bg-cream py-10">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl font-bold mb-2">Shop Books</h1>
          <p className="text-gray-600 mb-6">Discover your next literary adventure</p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search books or authors" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {(categoryParam || searchQuery) && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearFilters}
                className="flex items-center gap-1"
              >
                Clear Filters <X size={14} />
              </Button>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="order-2 md:order-1">
              <div className="sticky top-24">
                <h3 className="font-serif text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={category.id}
                        checked={categoryParam === category.id}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <label
                        htmlFor={category.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="font-serif text-xl font-semibold mb-4">Price Range</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Min" />
                  <Input placeholder="Max" />
                </div>
                <Button className="w-full mt-4 bg-charcoal hover:bg-charcoal/90 text-white">
                  Apply
                </Button>
              </div>
            </div>
            
            {/* Book Grid */}
            <div className="order-1 md:order-2 md:col-span-3">
              {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-serif text-xl font-semibold mb-2">No Books Found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
