import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gold-950 mb-4">Gopi Dance Academy</h3>
            <p className="text-sm">
              Preserving and promoting the classical art of Bharatanatyam through structured learning and traditional values.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gold-950 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold-950 transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-gold-950 transition-colors">Course Catalog</Link></li>
              <li><Link href="/about" className="hover:text-gold-950 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gold-950 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@mydanceacademy.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Dance Street, Arts District</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gopi Dance Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


