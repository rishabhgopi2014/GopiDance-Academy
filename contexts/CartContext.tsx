'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Course } from '@/data/courses';

interface CartItem extends Course {
  quantity: number;
}

interface StudentInfo {
  name: string;
  age: string;
  previousExperience: string;
  email: string;
  phone: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  updateQuantity: (courseId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  studentInfo: StudentInfo | null;
  setStudentInfo: (info: StudentInfo | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('danceAcademyCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('danceAcademyCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course: Course) => {
    setCartItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((item: CartItem) => item.id === course.id);
      
      if (existingItem) {
        // If course already in cart, increase quantity
        return prevItems.map((item: CartItem) =>
          item.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new course to cart
        return [...prevItems, { ...course, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (courseId: string) => {
    setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item.id !== courseId));
  };

  const updateQuantity = (courseId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(courseId);
      return;
    }
    
    setCartItems((prevItems: CartItem[]) =>
      prevItems.map((item: CartItem) =>
        item.id === courseId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('danceAcademyCart');
  };

  const getTotalPrice = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        studentInfo,
        setStudentInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

