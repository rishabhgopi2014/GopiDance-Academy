'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courses, ageGroups, getCoursesByAgeGroup } from '@/data/courses';
import { useCart } from '@/contexts/CartContext';
import { FaShoppingCart, FaFilter } from 'react-icons/fa';

export default function CoursesPage() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const { addToCart } = useCart();
  
  const filteredCourses = getCoursesByAgeGroup(selectedAgeGroup);

  const handleAddToCart = (e: React.MouseEvent, course: typeof courses[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(course);
    alert(`${course.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-cream-600 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-950 mb-4">Course Catalog</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our comprehensive Bharatanatyam curriculum with 10 structured levels, 
            from beginner basics to Arangetram preparation.
          </p>
        </div>

        {/* Age Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <FaFilter className="text-primary-950 text-xl" />
            <h2 className="text-xl font-semibold text-primary-950">Filter by Age Group</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {ageGroups.map((group) => (
              <button
                key={group.value}
                onClick={() => setSelectedAgeGroup(group.value)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedAgeGroup === group.value
                    ? 'bg-primary-950 text-white'
                    : 'bg-cream-600 text-primary-950 hover:bg-gold-950 hover:text-primary-950'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gold-950 text-primary-950 px-3 py-1 rounded-full text-xs font-semibold">
                    {course.level}
                  </span>
                  <span className="text-primary-950 font-bold text-xl">
                    ₹{course.price.toLocaleString()}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-primary-950">{course.name}</h3>
                <p className="text-gray-700 mb-4 text-sm line-clamp-3">{course.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Age Group:</span>
                    <span>{course.ageRange}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  {course.prerequisites && (
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">Prerequisites:</span>
                      <span className="text-xs">{course.prerequisites}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/courses/${course.id}`}
                    className="flex-1 bg-primary-950 text-white text-center py-2 rounded-lg hover:bg-primary-900 transition-colors font-semibold"
                  >
                    View Syllabus
                  </Link>
                  <button
                    onClick={(e) => handleAddToCart(e, course)}
                    className="bg-gold-950 text-primary-950 px-4 py-2 rounded-lg hover:bg-gold-900 transition-colors font-semibold flex items-center justify-center"
                    title="Add to Cart"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No courses found for the selected age group.</p>
          </div>
        )}
      </div>
    </div>
  );
}


