
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Slow Reading in a Fast-Paced World",
    excerpt: "In our digital age, the practice of slow reading offers a mindful approach to literature that enhances comprehension and enjoyment.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "April 2, 2025",
    author: "Eleanor Harper",
    category: "Reading"
  },
  {
    id: 2,
    title: "Behind the Pages: Interview with Award-Winning Author Jonathan Reed",
    excerpt: "We sat down with celebrated author Jonathan Reed to discuss his creative process, inspirations, and upcoming works.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "March 28, 2025",
    author: "Sophia Williams",
    category: "Interviews"
  },
  {
    id: 3,
    title: "The Resurgence of Independent Bookstores",
    excerpt: "Despite digital competition, independent bookstores are experiencing a renaissance, becoming cultural hubs for literary communities.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "March 15, 2025",
    author: "Marcus Chen",
    category: "Industry"
  },
  {
    id: 4,
    title: "The Enduring Power of Poetry in Modern Society",
    excerpt: "In a world dominated by short-form content, poetry continues to offer unique emotional resonance and linguistic precision.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "March 5, 2025",
    author: "Amanda Johnson",
    category: "Poetry"
  },
  {
    id: 5,
    title: "From Manuscript to Bestseller: A Publishing Journey",
    excerpt: "Follow first-time author Sarah Kowalski as her debut novel goes from submission to international phenomenon.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "February 20, 2025",
    author: "David Rodriguez",
    category: "Publishing"
  },
  {
    id: 6,
    title: "Reading Across Generations: Building a Family Book Club",
    excerpt: "How shared reading experiences can strengthen family bonds and foster meaningful conversations across age groups.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1287&h=800",
    date: "February 10, 2025",
    author: "Emily Wilson",
    category: "Reading"
  },
];

const categories = [
  "All",
  "Reading",
  "Interviews",
  "Industry",
  "Poetry",
  "Publishing",
  "Events"
];

const Blog = () => {
  return (
    <Layout>
      <section className="bg-cream py-16">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">Our Blog</h1>
          <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Insights, interviews, and inspiration from the world of literature and publishing.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-charcoal hover:bg-charcoal/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <Link to={`/blog/${blogPosts[0].id}`}>
              <Card className="overflow-hidden border-none hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center text-gold text-sm font-medium mb-2">
                        <span>{blogPosts[0].category}</span>
                        <span className="mx-2">•</span>
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                      <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center">
                        <div className="mr-3">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=40&h=40"
                            alt={blogPosts[0].author}
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                        <span>By {blogPosts[0].author}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
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
                      <div className="flex items-center text-gold text-xs font-medium mb-2">
                        <span>{post.category}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm flex-1">{post.excerpt}</p>
                      <div className="mt-4 flex items-center">
                        <div className="mr-3">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=32&h=32"
                            alt={post.author}
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <span className="text-sm">By {post.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-charcoal hover:bg-charcoal/90 text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
