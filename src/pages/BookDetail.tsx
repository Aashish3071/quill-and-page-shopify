
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { StarIcon, ShoppingBag, Heart, Share2, BookOpen } from 'lucide-react';
import { Book } from '@/components/shop/BookCard';

// This is sample data - in a real app, you'd fetch this from an API
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
  }
];

// Additional book details
const bookDetails = {
  1: {
    isbn: "978-3-16-148410-0",
    publisher: "Quill & Page Publishing",
    published: "March 15, 2025",
    pages: 324,
    language: "English",
    description: `
      <p>In a world where silence has become the most precious commodity, one woman's journey to find her voice becomes the echo that could change everything.</p>
      <p>Eleanor Harper's debut novel follows protagonist Maya Chen, an acoustic engineer who discovers a mysterious frequency that seems to resonate with human memory. As she delves deeper into her research, she uncovers a government conspiracy to manipulate public consciousness through sound.</p>
      <p>Set in a near-future Toronto transformed by climate change, "The Silent Echo" explores themes of memory, identity, and the power of human connection in an increasingly isolated society.</p>
    `,
    authorBio: `
      <p>Eleanor Harper is an award-winning author whose work explores the intersection of technology, nature, and human connection. A former acoustic engineer herself, Harper draws on her scientific background to create richly detailed fictional worlds that feel eerily possible.</p>
      <p>When not writing, Eleanor lives in a small coastal town where she records ambient sounds for her popular meditation podcast. "The Silent Echo" is her debut novel.</p>
    `,
    reviews: [
      { id: 1, name: "Michael R.", rating: 5, text: "A brilliant exploration of sound and silence. Harper's technical knowledge adds authenticity while her characters feel deeply human." },
      { id: 2, name: "Sarah T.", rating: 4, text: "Beautifully written with an intriguing premise. The middle section dragged slightly but the ending was worth it." },
      { id: 3, name: "David L.", rating: 5, text: "One of the most original novels I've read this year. The protagonist's journey felt personal and universal at the same time." }
    ]
  },
  2: {
    isbn: "978-3-16-148411-7",
    publisher: "Quill & Page Publishing",
    published: "February 2, 2025",
    pages: 276,
    language: "English",
    description: `
      <p>Jonathan Reed's groundbreaking memoir challenges our understanding of time, memory, and the human experience.</p>
      <p>After participating in an experimental neuroscience study, Reed began experiencing vivid memories of events that had not yet occurred. Part scientific investigation, part philosophical exploration, "Memoirs of Tomorrow" documents his five-year journey to understand these premonitions and their implications for our understanding of consciousness.</p>
      <p>With remarkable honesty and clarity, Reed examines how his glimpses of possible futures affected his relationships, career choices, and spiritual beliefs, raising profound questions about fate, free will, and the nature of time itself.</p>
    `,
    authorBio: `
      <p>Jonathan Reed is a neuroscientist and writer whose work bridges the gap between scientific research and spiritual inquiry. A recipient of the National Science Foundation's Early Career Award, Reed has published extensively in academic journals on topics related to memory formation and temporal perception.</p>
      <p>"Memoirs of Tomorrow" is his first book for general audiences. He lives in Boston with his partner and their two children.</p>
    `,
    reviews: [
      { id: 1, name: "Lisa M.", rating: 5, text: "Absolutely fascinating. Reed manages to make complex neuroscience accessible while telling a deeply personal story." },
      { id: 2, name: "Robert K.", rating: 5, text: "I couldn't put it down. Both intellectually stimulating and emotionally resonant - a rare combination." },
      { id: 3, name: "Jennifer P.", rating: 4, text: "Thought-provoking and beautifully written. Reed's scientific background shines through without overwhelming the narrative." }
    ]
  }
};

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const bookId = id ? parseInt(id) : 0;
  
  const book = books.find(b => b.id === bookId);
  const details = bookId ? bookDetails[bookId as keyof typeof bookDetails] : undefined;
  
  if (!book || !details) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the book you're looking for.</p>
          <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section className="py-10 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="book-cover max-w-md">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
            
            {/* Book Info */}
            <div>
              <div className="mb-2">
                <Link to={`/shop?category=${book.category.toLowerCase()}`} className="text-gold text-sm hover:underline">
                  {book.category}
                </Link>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-lg mb-4">By <Link to="#" className="text-gold hover:underline">{book.author}</Link></p>
              
              {/* Ratings */}
              <div className="flex items-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({details.reviews.length} reviews)
                </span>
              </div>
              
              {/* Price and Actions */}
              <div className="mb-8">
                <p className="text-2xl font-semibold mb-4">${book.price.toFixed(2)}</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-charcoal hover:bg-charcoal/90 text-white flex items-center gap-2">
                    <ShoppingBag size={16} />
                    Add to Bag
                  </Button>
                  <Button variant="outline" className="border-gray-300">
                    <Heart size={16} className="mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="border-gray-300">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              {/* Book Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">ISBN</p>
                  <p>{details.isbn}</p>
                </div>
                <div>
                  <p className="text-gray-500">Publisher</p>
                  <p>{details.publisher}</p>
                </div>
                <div>
                  <p className="text-gray-500">Publication Date</p>
                  <p>{details.published}</p>
                </div>
                <div>
                  <p className="text-gray-500">Pages</p>
                  <p>{details.pages}</p>
                </div>
                <div>
                  <p className="text-gray-500">Language</p>
                  <p>{details.language}</p>
                </div>
              </div>
              
              {/* Preview Button */}
              <Button variant="link" className="text-gold p-0 mt-6 flex items-center">
                <BookOpen size={16} className="mr-2" />
                Preview First Chapter
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="description" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="author">Author</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="reading-container">
              <div dangerouslySetInnerHTML={{ __html: details.description }} className="prose max-w-none text-gray-700 space-y-4" />
            </TabsContent>
            
            <TabsContent value="author" className="reading-container">
              <div dangerouslySetInnerHTML={{ __html: details.authorBio }} className="prose max-w-none text-gray-700 space-y-4" />
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-6">
                {details.reviews.map((review) => (
                  <div key={review.id} className="p-6 bg-cream rounded-md">
                    <div className="flex items-center mb-2">
                      <p className="font-semibold">{review.name}</p>
                      <Separator orientation="vertical" className="mx-3 h-4" />
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon 
                            key={star} 
                            className={`w-4 h-4 ${star <= review.rating ? 'fill-gold text-gold' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default BookDetail;
