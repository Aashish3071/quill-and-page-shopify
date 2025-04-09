
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              <span className="text-gold">Quill</span> & Page
            </h3>
            <p className="text-gray-300 mb-4">
              Publishing extraordinary books for extraordinary readers since 2010.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-300 hover:text-gold transition-colors">All Books</Link></li>
              <li><Link to="/shop?category=fiction" className="text-gray-300 hover:text-gold transition-colors">Fiction</Link></li>
              <li><Link to="/shop?category=non-fiction" className="text-gray-300 hover:text-gold transition-colors">Non-Fiction</Link></li>
              <li><Link to="/shop?category=classics" className="text-gray-300 hover:text-gold transition-colors">Classics</Link></li>
              <li><Link to="/shop?category=new-releases" className="text-gray-300 hover:text-gold transition-colors">New Releases</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/authors" className="text-gray-300 hover:text-gold transition-colors">For Authors</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif mb-4">Join Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our newest releases and literary events.</p>
            <div className="space-y-2">
              <Input 
                placeholder="Your email address" 
                className="bg-gray-700 border-gray-600 focus:border-gold"
              />
              <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Quill & Page Publishing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
