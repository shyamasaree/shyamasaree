import { Link } from 'react-router-dom';
import { Home, Package, Heart, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8DC]/30 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#8B0000] to-[#D4AF37] bg-clip-text text-transparent">
            404
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 h-16 rounded-full bg-[#8B0000]/10 flex items-center justify-center animate-bounce">
              <Package className="text-[#8B0000]" size={32} />
            </div>
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center animate-bounce delay-100">
              <Heart className="text-[#D4AF37]" size={32} />
            </div>
            <div className="w-16 h-16 rounded-full bg-[#8B0000]/10 flex items-center justify-center animate-bounce delay-200">
              <Search className="text-[#8B0000]" size={32} />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-[#3E2723] mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The saree you're looking for seems to have slipped away!
          Don't worry, we have many more beautiful collections waiting for you.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Link
            to="/"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#D4AF37]"
          >
            <div className="w-12 h-12 rounded-full bg-[#8B0000] flex items-center justify-center">
              <Home className="text-white" size={24} />
            </div>
            <span className="font-medium text-[#3E2723]">Home</span>
          </Link>

          <Link
            to="/products"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#D4AF37]"
          >
            <div className="w-12 h-12 rounded-full bg-[#8B0000] flex items-center justify-center">
              <Package className="text-white" size={24} />
            </div>
            <span className="font-medium text-[#3E2723]">Shop All</span>
          </Link>

          <Link
            to="/products?filter=new"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#D4AF37]"
          >
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <Search className="text-[#3E2723]" size={24} />
            </div>
            <span className="font-medium text-[#3E2723]">New Arrivals</span>
          </Link>

          <Link
            to="/wishlist"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#D4AF37]"
          >
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <Heart className="text-[#3E2723]" size={24} />
            </div>
            <span className="font-medium text-[#3E2723]">Wishlist</span>
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Back to Homepage
        </Link>

        {/* Support Section */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">Need help finding something?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="text-[#8B0000] hover:text-[#6B0000] font-medium"
            >
              Contact Support
            </Link>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a
              href="https://wa.me/916260843969"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B0000] hover:text-[#6B0000] font-medium"
            >
              WhatsApp Us
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <Link
              to="/faq"
              className="text-[#8B0000] hover:text-[#6B0000] font-medium"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
