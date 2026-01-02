'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { FaShoppingCart, FaHome, FaBook, FaInfoCircle } from 'react-icons/fa';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <nav className="bg-primary-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gold-950">
              Gopi Dance Academy
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center space-x-1 hover:text-gold-950 transition-colors"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link 
              href="/courses" 
              className="flex items-center space-x-1 hover:text-gold-950 transition-colors"
            >
              <FaBook />
              <span>Courses</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center space-x-1 hover:text-gold-950 transition-colors"
            >
              <FaInfoCircle />
              <span>About</span>
            </Link>
            <Link 
              href="/cart" 
              className="relative flex items-center space-x-1 hover:text-gold-950 transition-colors"
            >
              <FaShoppingCart className="text-xl" />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-950 text-primary-950 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


