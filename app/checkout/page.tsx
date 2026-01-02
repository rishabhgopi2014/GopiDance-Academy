'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { FaLock, FaCreditCard, FaUser, FaEnvelope, FaPhone, FaMobile } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';
import ErrorPopup from '@/components/ErrorPopup';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    cartItems,
    getTotalPrice,
    getTotalItems,
    studentInfo,
    setStudentInfo,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: studentInfo?.name || '',
    age: studentInfo?.age || '',
    previousExperience: studentInfo?.previousExperience || '',
    email: studentInfo?.email || '',
    phone: studentInfo?.phone || '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'upi' | 'gpay'>('card');
  const [upiId, setUpiId] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate age when it changes and there are multiple courses
    if (name === 'age' && value && cartItems.length > 1) {
      validateAgeAgainstCourses(parseInt(value));
    }
  };

  // Function to parse age range string (e.g., "5-7 years", "14+ years", "All ages")
  const parseAgeRange = (ageRange: string): { min: number; max: number | null } => {
    if (ageRange.toLowerCase().includes('all ages') || ageRange.toLowerCase().includes('all')) {
      return { min: 0, max: null };
    }
    
    const match = ageRange.match(/(\d+)(?:\s*-\s*(\d+))?(?:\+)?/);
    if (match) {
      const min = parseInt(match[1]);
      const max = match[2] ? parseInt(match[2]) : null;
      return { min, max };
    }
    
    return { min: 0, max: null };
  };

  // Validate if student age matches all courses in cart
  const validateAgeAgainstCourses = (age: number) => {
    if (cartItems.length <= 1) return true;
    
    const incompatibleCourses: string[] = [];
    
    cartItems.forEach(item => {
      const { min, max } = parseAgeRange(item.ageRange);
      const isCompatible = (max === null && age >= min) || (max !== null && age >= min && age <= max);
      
      if (!isCompatible) {
        incompatibleCourses.push(item.name);
      }
    });
    
    if (incompatibleCourses.length > 0) {
      setErrorMessage(
        `The student's age (${age} years) is not within the age limit for the following courses: ${incompatibleCourses.join(', ')}. Please choose the right enrollment courses that match the student's age.`
      );
      setShowError(true);
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      router.push('/courses');
      return;
    }

    // Validate age if multiple courses
    if (cartItems.length > 1 && formData.age) {
      const age = parseInt(formData.age);
      if (!validateAgeAgainstCourses(age)) {
        return; // Don't proceed if validation fails
      }
    }

    setIsProcessing(true);
    
    // Save student info to context
    setStudentInfo(formData);

    // Simulate payment processing
    setTimeout(() => {
      alert('Payment processed successfully! (This is a demo - no actual payment was made)');
      clearCart();
      setIsProcessing(false);
      router.push('/');
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-950 mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-700 mb-8">
            Please add courses to your cart before checkout.
          </p>
          <button
            onClick={() => router.push('/courses')}
            className="bg-primary-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <ErrorPopup
        message={errorMessage}
        isOpen={showError}
        onClose={() => setShowError(false)}
      />
      <div className="min-h-screen bg-cream-600 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-primary-950 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <h2 className="text-2xl font-bold text-primary-950 mb-6 flex items-center space-x-2">
                <FaUser />
                <span>Student Information</span>
              </h2>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent"
                  placeholder="Enter student's full name"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="5"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent"
                  placeholder="Enter age"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                  <FaEnvelope />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                  <FaPhone />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="previousExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Previous Dance Experience *
                </label>
                <textarea
                  id="previousExperience"
                  name="previousExperience"
                  required
                  rows={4}
                  value={formData.previousExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent"
                  placeholder="Please describe any previous Bharatanatyam or dance experience (e.g., 'Beginner - no prior experience', '2 years of Bharatanatyam', 'Completed Adavu Module 1', etc.)"
                />
              </div>

              {/* Payment Section */}
              <div className="border-t pt-6 mt-6">
                <h2 className="text-2xl font-bold text-primary-950 mb-6 flex items-center space-x-2">
                  <FaLock />
                  <span>Payment Information</span>
                </h2>

                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod('card')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        selectedPaymentMethod === 'card'
                          ? 'border-primary-950 bg-primary-50'
                          : 'border-gray-300 hover:border-primary-500'
                      }`}
                    >
                      <FaCreditCard className="text-2xl mx-auto mb-2 text-primary-950" />
                      <span className="font-semibold text-primary-950">Credit/Debit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod('upi')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        selectedPaymentMethod === 'upi'
                          ? 'border-primary-950 bg-primary-50'
                          : 'border-gray-300 hover:border-primary-500'
                      }`}
                    >
                      <FaMobile className="text-2xl mx-auto mb-2 text-primary-950" />
                      <span className="font-semibold text-primary-950">UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod('gpay')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        selectedPaymentMethod === 'gpay'
                          ? 'border-primary-950 bg-primary-50'
                          : 'border-gray-300 hover:border-primary-500'
                      }`}
                    >
                      <SiGooglepay className="text-2xl mx-auto mb-2 text-primary-950" />
                      <span className="font-semibold text-primary-950">Google Pay</span>
                    </button>
                  </div>
                </div>

                {/* Payment Details Based on Selection */}
                <div className="bg-cream-600 rounded-lg p-6 mb-6">
                  {selectedPaymentMethod === 'card' && (
                    <>
                      <div className="flex items-center space-x-2 mb-4">
                    <FaCreditCard className="text-primary-950 text-xl" />
                    <span className="font-semibold text-primary-950">Credit/Debit Card</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        This is a demo checkout. In production, this would integrate with Stripe, Razorpay, or another payment gateway.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            disabled
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                              disabled
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedPaymentMethod === 'upi' && (
                    <>
                      <div className="flex items-center space-x-2 mb-4">
                    <FaMobile className="text-primary-950 text-xl" />
                    <span className="font-semibold text-primary-950">UPI Payment</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        Enter your UPI ID to proceed with the payment.
                      </p>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          UPI ID *
                        </label>
                        <input
                          type="text"
                          placeholder="yourname@upi"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-950 focus:border-transparent"
                          required={selectedPaymentMethod === 'upi'}
                        />
                        <p className="text-xs text-gray-600 mt-2">
                          Example: yourname@paytm, yourname@phonepe, yourname@ybl
                        </p>
                      </div>
                    </>
                  )}

                  {selectedPaymentMethod === 'gpay' && (
                    <>
                      <div className="flex items-center space-x-2 mb-4">
                    <SiGooglepay className="text-primary-950 text-xl" />
                    <span className="font-semibold text-primary-950">Google Pay</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        Click the button below to pay with Google Pay. You will be redirected to the Google Pay app or website.
                      </p>
                      <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                        <p className="text-center text-gray-600">
                          Google Pay integration will be available in production
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || (selectedPaymentMethod === 'upi' && !upiId)}
                  className="w-full bg-gold-950 text-primary-950 py-4 rounded-lg font-bold text-lg hover:bg-gold-900 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <span>Processing Payment...</span>
                    </>
                  ) : (
                    <>
                      {selectedPaymentMethod === 'gpay' && <SiGooglepay className="text-xl" />}
                      {selectedPaymentMethod === 'upi' && <FaMobile className="text-xl" />}
                      <span>Pay ₹{getTotalPrice().toLocaleString()}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <div className="font-semibold text-primary-950">{item.name}</div>
                      <div className="text-gray-600">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-primary-950 font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold text-primary-950 mb-4">
                  <span>Total</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {getTotalItems()} {getTotalItems() === 1 ? 'course' : 'courses'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


