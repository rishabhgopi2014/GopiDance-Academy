'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { FaTrash, FaPlus, FaMinus, FaArrowRight, FaShoppingCart } from 'react-icons/fa';

export default function CartPage() {
  const router = useRouter();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <FaShoppingCart className="text-6xl text-primary-950 mx-auto mb-4 opacity-50" />
          <h1 className="text-3xl font-bold text-primary-950 mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-700 mb-8">
            Start adding courses to your cart to begin your Bharatanatyam journey!
          </p>
          <Link
            href="/courses"
            className="inline-block bg-primary-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-600 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-primary-950 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-950 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.ageRange} • {item.duration}</p>
                  <p className="text-lg font-semibold text-primary-950">
                    ₹{item.price.toLocaleString()} each
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-cream-600 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gold-950 rounded-l-lg transition-colors"
                    >
                      <FaMinus className="text-primary-950" />
                    </button>
                    <span className="px-4 py-2 font-semibold text-primary-950 min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gold-950 rounded-r-lg transition-colors"
                    >
                      <FaPlus className="text-primary-950" />
                    </button>
                  </div>

                  <div className="text-right min-w-[120px]">
                    <div className="text-lg font-bold text-primary-950">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove from cart"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Items ({getTotalItems()})</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-primary-950">
                    <span>Total</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.push('/checkout')}
                className="w-full bg-gold-950 text-primary-950 py-4 rounded-lg font-bold text-lg hover:bg-gold-900 transition-colors shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <FaArrowRight />
              </button>

              <Link
                href="/courses"
                className="block text-center text-primary-950 hover:text-primary-900 mt-4 font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


