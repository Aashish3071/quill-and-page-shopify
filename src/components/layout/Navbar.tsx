
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 0; // In a real app, this would come from your cart state or context
  
  return (
    <header className="bg-cream py-4 px-6 md:px-10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-charcoal">
              <span className="text-gold">Quill</span> & Page
            </h1>
          </Link>
          
          {/* Mobile Icons and Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/search">
                <Search className="h-5 w-5 text-charcoal" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5 text-charcoal" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-gold text-white rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-1"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-charcoal" />
              ) : (
                <Menu className="h-6 w-6 text-charcoal" />
              )}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/search">
                <Search className="h-5 w-5 text-charcoal" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/account">
                <User className="h-5 w-5 text-charcoal" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5 text-charcoal" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-gold text-white rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream py-4 px-6 absolute top-16 left-0 right-0 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
