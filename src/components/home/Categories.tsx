
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: "fiction",
    name: "Fiction",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e41?auto=format&fit=crop&q=80&w=1287&h=800",
    count: 124
  },
  {
    id: "non-fiction",
    name: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=1287&h=800",
    count: 87
  },
  {
    id: "classics",
    name: "Classics",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1287&h=800",
    count: 56
  },
  {
    id: "poetry",
    name: "Poetry",
    image: "https://images.unsplash.com/photo-1492546643178-96d64f3fd824?auto=format&fit=crop&q=80&w=1287&h=800",
    count: 32
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-10">Explore by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/shop?category=${category.id}`} key={category.id}>
              <Card className="overflow-hidden border-none hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="font-serif text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm opacity-80">{category.count} Books</p>
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

export default Categories;
