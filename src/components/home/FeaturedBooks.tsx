
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
  category: string;
  isNew?: boolean;
}

const featuredBooks: Book[] = [
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
  }
];

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-heading">Featured Books</h2>
          <Button asChild variant="ghost" className="text-gold hover:text-gold/80">
            <Link to="/shop" className="flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <Card className="border-none hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative book-cover">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-[350px] object-cover"
                    />
                    {book.isNew && (
                      <Badge className="absolute top-2 right-2 bg-gold hover:bg-gold text-white">
                        New Release
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-lg mb-1">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">By {book.author}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">${book.price.toFixed(2)}</p>
                      <span className="text-xs text-gold font-medium">{book.category}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
