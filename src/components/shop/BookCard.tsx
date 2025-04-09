
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
  category: string;
  isNew?: boolean;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card className="border-none hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <CardContent className="p-0 flex-1 flex flex-col">
        <Link to={`/book/${book.id}`}>
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
        </Link>
        <div className="p-4 flex-1 flex flex-col">
          <Link to={`/book/${book.id}`}>
            <h3 className="font-serif font-semibold text-lg mb-1">{book.title}</h3>
          </Link>
          <p className="text-gray-600 text-sm mb-2">By {book.author}</p>
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium">${book.price.toFixed(2)}</p>
            <span className="text-xs text-gold font-medium">{book.category}</span>
          </div>
          <div className="mt-auto">
            <Button className="w-full bg-charcoal hover:bg-charcoal/90 text-white flex items-center justify-center gap-2">
              <ShoppingBag size={16} />
              Add to Bag
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
