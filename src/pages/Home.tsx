import { Link } from 'react-router-dom';
import { Truck, Shield, RotateCcw, Star, ArrowRight, Heart, Headphones, CreditCard, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { handleImageError } from '../utils/imageUtils';

export default function Home() {
  const bestsellers = products.filter(p => p.badge === 'BESTSELLER').slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <section className="relative min-h-[600px] md:h-[600px] bg-gradient-to-br from-[#8B0000] via-[#6B0000] to-[#3E2723] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-16 md:py-0">
          <div className="text-center w-full">
            <div className="inline-block bg-[#D4AF37]/20 px-4 py-2 rounded-full border border-[#D4AF37] mb-4 md:mb-6">
              <span className="text-[#FFF8DC] text-sm font-medium">30+ Years of Trust, Now Online</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FFF8DC] mb-4 md:mb-6 leading-tight">
              Discover Authentic Indian Sarees<br />
              <span className="text-[#D4AF37]">Curated with Passion & Expertise</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFF8DC]/90 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Trending Designs | Premium Brands | Unbeatable Prices | Customer Satisfaction Guaranteed
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12">
              <Link
                to="/products"
                className="bg-[#8B0000] text-white px-8 py-4 rounded-lg font-medium border-2 border-[#D4AF37] hover:bg-[#6B0000] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop Collection
              </Link>
              <Link
                to="/products?filter=bestseller"
                className="bg-transparent text-[#FFF8DC] px-8 py-4 rounded-lg font-medium border-2 border-[#FFF8DC] hover:bg-[#FFF8DC] hover:text-[#8B0000] transition-all duration-300"
              >
                View Bestsellers
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[#FFF8DC]">
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-[#D4AF37]" />
                <span className="text-sm">30+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={20} className="text-[#D4AF37]" />
                <span className="text-sm">8+ Premium Brands</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck size={20} className="text-[#D4AF37]" />
                <span className="text-sm">Pan-India Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={20} className="text-[#D4AF37]" />
                <span className="text-sm">1000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium text-sm text-center">{category.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FFF8DC] p-4 rounded-full mb-3">
                <Truck className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="text-[#3E2723] font-bold text-base mb-1">Free Shipping</h3>
              <p className="text-gray-600 text-xs">On orders ₹999+</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FFF8DC] p-4 rounded-full mb-3">
                <Shield className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="text-[#3E2723] font-bold text-base mb-1">100% Authentic</h3>
              <p className="text-gray-600 text-xs">Genuine products</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FFF8DC] p-4 rounded-full mb-3">
                <RotateCcw className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="text-[#3E2723] font-bold text-base mb-1">Easy Returns</h3>
              <p className="text-gray-600 text-xs">7-day policy</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FFF8DC] p-4 rounded-full mb-3">
                <CreditCard className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="text-[#3E2723] font-bold text-base mb-1">Secure Payment</h3>
              <p className="text-gray-600 text-xs">SSL encrypted</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FFF8DC] p-4 rounded-full mb-3">
                <Headphones className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="text-[#3E2723] font-bold text-base mb-1">24/7 Support</h3>
              <p className="text-gray-600 text-xs">Always here</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FFF8DC] p-4 rounded-full mb-3">
                <Award className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="text-[#3E2723] font-bold text-base mb-1">Verified Dealer</h3>
              <p className="text-gray-600 text-xs">30+ years trust</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#3E2723] mb-2">This Month's Favorites</h2>
            <p className="text-gray-600">Handpicked bestsellers loved by our customers</p>
          </div>
          <Link
            to="/products?filter=bestseller"
            className="hidden md:flex items-center space-x-2 text-[#8B0000] font-medium hover:text-[#6B0000] transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/products?filter=bestseller"
            className="inline-flex items-center space-x-2 text-[#8B0000] font-medium hover:text-[#6B0000] transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Shyamasaree?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#3E2723] text-2xl font-bold">30+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Years Expertise</h3>
              <p className="text-[#FFF8DC]/80">Family business with deep roots in saree craftsmanship</p>
            </div>

            <div className="text-center">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#3E2723]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Authorized Wholesale Dealer</h3>
              <p className="text-[#FFF8DC]/80">8+ premium brands - Kayan Silks, Dhanlaxmi & more</p>
            </div>

            <div className="text-center">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#3E2723]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-[#FFF8DC]/80">Handpicked collection from master artisans</p>
            </div>

            <div className="text-center">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-[#3E2723]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
              <p className="text-[#FFF8DC]/80">Fast 3-7 days shipping across India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Priya Sharma',
              location: 'Mumbai',
              review: 'Best quality sarees at unbeatable prices! My go-to store now. The Banarasi silk I bought is absolutely stunning.',
              rating: 5
            },
            {
              name: 'Anjali Mehta',
              location: 'Delhi',
              review: 'Amazing collection and genuine products. The 30+ years of experience really shows in their curation.',
              rating: 5
            },
            {
              name: 'Lakshmi Iyer',
              location: 'Bangalore',
              review: 'Fast delivery and beautiful packaging. The saree quality exceeded my expectations. Highly recommended!',
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-[#D4AF37]/30">
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B0000] to-[#D4AF37]" />
                <div>
                  <p className="font-bold text-[#3E2723]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#D4AF37]/20 px-4 py-2 rounded-full border border-[#D4AF37] mb-4">
                <span className="text-[#FFF8DC] text-sm font-medium">B2B & Wholesale</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Are You a Retailer or Reseller?</h2>
              <p className="text-[#FFF8DC]/90 text-lg mb-6">
                Get access to 8+ premium brands at wholesale prices with 30-50% discounts
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>Authorized dealer for Kayan Silks, Dhanlaxmi, Rekhraj & more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>Minimum order: Just 10 pieces to start</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>Dedicated support & flexible payment terms</span>
                </li>
              </ul>
              <Link
                to="/bulk-orders"
                className="inline-block bg-[#D4AF37] text-[#3E2723] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF37]/90 transition-colors"
              >
                Get Wholesale Pricing →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#D4AF37]/30">
              <h3 className="text-2xl font-bold mb-6 text-center">Wholesale Pricing Tiers</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Starter</span>
                    <span className="text-[#D4AF37] font-bold text-2xl">30% OFF</span>
                  </div>
                  <p className="text-sm text-[#FFF8DC]/80">10-49 pieces per order</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Business</span>
                    <span className="text-[#D4AF37] font-bold text-2xl">40% OFF</span>
                  </div>
                  <p className="text-sm text-[#FFF8DC]/80">50-199 pieces per order</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Enterprise</span>
                    <span className="text-[#D4AF37] font-bold text-2xl">50% OFF</span>
                  </div>
                  <p className="text-sm text-[#FFF8DC]/80">200+ pieces per order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#FFF8DC] to-[#F5E6D3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-4">Get 10% Off Your First Order</h2>
          <p className="text-gray-700 mb-8">Join 5,000+ saree lovers receiving exclusive deals and new arrivals</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-96 px-6 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
            />
            <button className="w-full sm:w-auto bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
