import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { FaBook, FaUsers, FaAward, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Gopi Dance Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-md">
            Preserving the Classical Art of Bharatanatyam
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-white drop-shadow-md">
            Join us on a journey through 10 structured levels, from Angikam Basics to Arangetram preparation. 
            Experience the grace, discipline, and beauty of this ancient dance form.
          </p>
          <Link
            href="/courses"
            className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-xl transform hover:scale-105"
          >
            Explore Courses
            <FaArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      {/* Age Group Sections with Vibrant Colors and Images */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            Programs for Every Age Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kids Section */}
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop"
                  alt="Kids learning Bharatanatyam"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Kids (5-8 years)</h3>
                <p className="mb-4">
                  Fun and engaging introduction to Bharatanatyam with age-appropriate movements and playful learning.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Basic postures and movements</li>
                  <li>✓ Simple Mudras and Adavus</li>
                  <li>✓ Music and rhythm games</li>
                  <li>✓ Storytelling through dance</li>
                </ul>
              </div>
            </div>

            {/* Juniors Section */}
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop"
                  alt="Juniors learning Bharatanatyam"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Juniors (9-13 years)</h3>
                <p className="mb-4">
                  Structured learning with focus on technique, discipline, and building a strong foundation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Advanced Adavus and combinations</li>
                  <li>✓ Complete Mudra repertoire</li>
                  <li>✓ Introduction to Abhinaya</li>
                  <li>✓ Performance preparation</li>
                </ul>
              </div>
            </div>

            {/* Adults Section */}
            <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80"
                  alt="Adults performing Bharatanatyam"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Adults (14+ years)</h3>
                <p className="mb-4">
                  Advanced training for serious students, including Varnam, Padam, and Arangetram preparation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Complex compositions</li>
                  <li>✓ Advanced Abhinaya</li>
                  <li>✓ Performance mastery</li>
                  <li>✓ Arangetram preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform border-2 border-yellow-300">
              <FaBook className="text-5xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-900">10 Structured Levels</h3>
              <p className="text-gray-700">
                From beginner to Arangetram preparation, our comprehensive curriculum guides you through every stage.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform border-2 border-blue-300">
              <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Age-Appropriate Learning</h3>
              <p className="text-gray-700">
                Courses designed for Kids (5-8), Juniors (9-13), and Adults (14+) with specialized curriculum.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform border-2 border-pink-300">
              <FaAward className="text-5xl text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-pink-900">Traditional Excellence</h3>
              <p className="text-gray-700">
                Learn authentic Bharatanatyam with detailed syllabus covering Mudras, Adavus, and Theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-purple-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-gold-950 text-primary-950 px-3 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </span>
                    <span className="text-primary-950 font-bold text-lg">
                      ₹{course.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary-950">{course.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>Age: {course.ageRange}</span>
                    <span>Duration: {course.duration}</span>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="block w-full bg-primary-950 text-white text-center py-2 rounded-lg hover:bg-primary-900 transition-colors font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="inline-block bg-gold-950 text-primary-950 px-8 py-3 rounded-lg font-semibold hover:bg-gold-900 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Ready to Begin Your Dance Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
            Enroll in our courses today and experience the beauty of Bharatanatyam with structured learning and expert guidance.
          </p>
          <Link
            href="/courses"
            className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-xl transform hover:scale-105"
          >
            Browse Course Catalog
          </Link>
        </div>
      </section>
    </div>
  );
}


