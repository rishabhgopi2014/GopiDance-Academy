'use client';

import { use } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { courses } from '@/data/courses';
import { useCart } from '@/contexts/CartContext';
import { FaShoppingCart, FaArrowLeft, FaHands, FaMusic, FaBookOpen } from 'react-icons/fa';

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const course = courses.find(c => c.id === params.id);

  if (!course) {
    return (
      <div className="min-h-screen bg-cream-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-950 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-gold-950 hover:underline">
            Return to Course Catalog
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    addToCart(course);
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-cream-600 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-primary-950 hover:text-primary-900 mb-6"
        >
          <FaArrowLeft />
          <span>Back to Courses</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-primary-950 to-primary-900 p-8 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="bg-gold-950 text-primary-950 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  {course.level}
                </span>
                <h1 className="text-4xl font-bold mb-4 text-gold-950">{course.name}</h1>
                <p className="text-lg mb-4">{course.description}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gold-950 mb-2">
                  ₹{course.price.toLocaleString()}
                </div>
                <div className="text-sm">per course</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <div className="text-sm opacity-80">Age Group</div>
                <div className="font-semibold">{course.ageRange}</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Duration</div>
                <div className="font-semibold">{course.duration}</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Level</div>
                <div className="font-semibold">{course.level}</div>
              </div>
              {course.prerequisites && (
                <div>
                  <div className="text-sm opacity-80">Prerequisites</div>
                  <div className="font-semibold text-xs">{course.prerequisites}</div>
                </div>
              )}
            </div>
          </div>

          <div className="p-8">
            <button
              onClick={handleEnroll}
              className="w-full bg-gold-950 text-primary-950 py-4 rounded-lg font-bold text-xl hover:bg-gold-900 transition-colors shadow-lg mb-8 flex items-center justify-center space-x-2"
            >
              <FaShoppingCart />
              <span>Enroll Now</span>
            </button>

            {/* Syllabus Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Course Syllabus</h2>
              
              {/* Mudras */}
              {course.syllabus.mudras.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <FaHands className="text-2xl text-primary-950" />
                    <h3 className="text-2xl font-semibold text-primary-950">Mudras (Hand Gestures)</h3>
                  </div>
                  <div className="bg-cream-600 rounded-lg p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.syllabus.mudras.map((mudra, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gold-950 rounded-full"></span>
                          <span className="text-gray-700">{mudra}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Adavus */}
              {course.syllabus.adavus.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <FaMusic className="text-2xl text-primary-950" />
                    <h3 className="text-2xl font-semibold text-primary-950">Adavus (Dance Steps)</h3>
                  </div>
                  <div className="bg-cream-600 rounded-lg p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.syllabus.adavus.map((adavu, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gold-950 rounded-full"></span>
                          <span className="text-gray-700">{adavu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Theory */}
              {course.syllabus.theory.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <FaBookOpen className="text-2xl text-primary-950" />
                    <h3 className="text-2xl font-semibold text-primary-950">Theory</h3>
                  </div>
                  <div className="bg-cream-600 rounded-lg p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.syllabus.theory.map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gold-950 rounded-full"></span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


