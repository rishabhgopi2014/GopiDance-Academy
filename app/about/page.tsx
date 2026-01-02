import { FaAward, FaUsers, FaBook, FaHeart } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-600 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-950 mb-4">About Gopi Dance Academy</h1>
          <p className="text-lg text-gray-700">
            Preserving the classical art of Bharatanatyam through structured learning and traditional values.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-950 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Gopi Dance Academy is dedicated to preserving and promoting the classical art of Bharatanatyam, 
            one of India's oldest and most revered dance forms. We provide structured, age-appropriate 
            training that respects traditional techniques while making the art form accessible to students 
            of all ages and backgrounds.
          </p>
          <p className="text-gray-700">
            Our comprehensive curriculum spans 10 distinct levels, from foundational Angikam Basics to 
            professional Arangetram preparation, ensuring that every student receives the guidance they 
            need to progress at their own pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <FaAward className="text-4xl text-primary-950 mb-4" />
            <h3 className="text-xl font-bold text-primary-950 mb-2">Traditional Excellence</h3>
            <p className="text-gray-700">
              We maintain the highest standards of traditional Bharatanatyam, ensuring authentic 
              techniques, proper posture, and cultural understanding.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <FaUsers className="text-4xl text-primary-950 mb-4" />
            <h3 className="text-xl font-bold text-primary-950 mb-2">Age-Appropriate Learning</h3>
            <p className="text-gray-700">
              Our courses are carefully designed for different age groups, ensuring that children, 
              juniors, and adults receive instruction tailored to their developmental stage.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <FaBook className="text-4xl text-primary-950 mb-4" />
            <h3 className="text-xl font-bold text-primary-950 mb-2">Comprehensive Curriculum</h3>
            <p className="text-gray-700">
              Each course includes detailed syllabus covering Mudras (hand gestures), Adavus (dance steps), 
              and Theory, providing a complete understanding of the art form.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <FaHeart className="text-4xl text-primary-950 mb-4" />
            <h3 className="text-xl font-bold text-primary-950 mb-2">Passionate Teaching</h3>
            <p className="text-gray-700">
              Our instructors are dedicated to nurturing each student's love for Bharatanatyam, 
              providing personalized attention and encouragement throughout their journey.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-950 to-primary-900 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold text-gold-950 mb-4">Why Choose Us?</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-gold-950 font-bold">✓</span>
              <span>10 structured levels from beginner to Arangetram preparation</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-gold-950 font-bold">✓</span>
              <span>Detailed syllabus for each course with Mudras, Adavus, and Theory</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-gold-950 font-bold">✓</span>
              <span>Age-appropriate filtering to find the perfect course</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-gold-950 font-bold">✓</span>
              <span>Flexible enrollment - enroll in multiple courses at once</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-gold-950 font-bold">✓</span>
              <span>Traditional techniques with modern learning tools</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


