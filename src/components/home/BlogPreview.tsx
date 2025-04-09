
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Slow Reading in a Fast-Paced World",
    excerpt: "In our digital age, the practice of slow reading offers a mindful approach to literature that enhances comprehension and enjoyment.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "April 2, 2025",
    author: "Eleanor Harper"
  },
  {
    id: 2,
    title: "Behind the Pages: Interview with Award-Winning Author Jonathan Reed",
    excerpt: "We sat down with celebrated author Jonathan Reed to discuss his creative process, inspirations, and upcoming works.",
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "March 28, 2025",
    author: "Sophia Williams"
  },
  {
    id: 3,
    title: "The Resurgence of Independent Bookstores",
    excerpt: "Despite digital competition, independent bookstores are experiencing a renaissance, becoming cultural hubs for literary communities.",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "March 15, 2025",
    author: "Marcus Chen"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-heading">From Our Blog</h2>
          <Button asChild variant="ghost" className="text-gold hover:text-gold/80">
            <Link to="/blog" className="flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <Card className="border-none hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {post.author}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm flex-1">{post.excerpt}</p>
                    <div className="mt-4">
                      <span className="text-gold font-medium text-sm inline-flex items-center">
                        Read More <ArrowRight size={14} className="ml-1" />
                      </span>
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

export default BlogPreview;
