
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

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
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/search" className="text-charcoal hover:text-gold transition-colors p-2">
              <Search className="h-5 w-5" />
            </Link>
            
            <Link to="/cart" className="text-charcoal hover:text-gold transition-colors p-2 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-gold text-white rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
            
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
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search" className="text-charcoal hover:text-gold transition-colors p-2">
              <Search className="h-5 w-5" />
            </Link>
            
            <Link to="/account" className="text-charcoal hover:text-gold transition-colors p-2">
              <User className="h-5 w-5" />
            </Link>
            
            <Link to="/cart" className="text-charcoal hover:text-gold transition-colors p-2 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-gold text-white rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream py-4 px-6 absolute top-16 left-0 right-0 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/shop" 
              className="nav-link py-3 px-4 rounded-md transition-colors hover:bg-gold/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-5 w-5 text-gold" />
                <span>Shop</span>
              </div>
            </Link>
            <Link 
              to="/about" 
              className="nav-link py-3 px-4 rounded-md transition-colors hover:bg-gold/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M12 6h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8z"/><polyline points="22 6 12 13 2 6"/></svg>
                <span>About</span>
              </div>
            </Link>
            <Link 
              to="/blog" 
              className="nav-link py-3 px-4 rounded-md transition-colors hover:bg-gold/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
                <span>Blog</span>
              </div>
            </Link>
            <Link 
              to="/contact" 
              className="nav-link py-3 px-4 rounded-md transition-colors hover:bg-gold/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Contact</span>
              </div>
            </Link>
            <Link 
              to="/account" 
              className="nav-link py-3 px-4 rounded-md transition-colors hover:bg-gold/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gold" />
                <span>Account</span>
              </div>
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex justify-center mt-2">
              <Button asChild className="bg-charcoal hover:bg-charcoal/90 text-white w-full">
                <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
                  Browse Collection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
