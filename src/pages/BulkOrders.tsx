import { useState } from 'react';
import { Package, TrendingUp, Users, Award, Phone, Mail, Send, ShoppingBag, BadgePercent } from 'lucide-react';
import toast from 'react-hot-toast';

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    quantity: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Request submitted! Our B2B team will contact you within 24 hours.', {
      duration: 5000,
      icon: '📦'
    });
    setFormData({
      businessName: '',
      contactPerson: '',
      email: '',
      phone: '',
      businessType: '',
      quantity: '',
      requirements: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Bulk Orders & B2B Solutions</h1>
          <p className="text-xl text-[#FFF8DC]/80 max-w-3xl mx-auto mb-8">
            Authorized wholesale dealer of India's top saree brands - Kayan Silks, Dhanlaxmi, Rekhraj, Varni, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#b2b-form"
              className="bg-white text-[#8B0000] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFF8DC] transition-colors"
            >
              Get B2B Pricing
            </a>
            <a
              href="#seller-program"
              className="bg-[#D4AF37] text-[#3E2723] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF37]/90 transition-colors"
            >
              Become a Seller
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Choose Us for B2B */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-12">Why Partner with Shyamasaree?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Multi-Brand Access</h3>
              <p className="text-gray-600 text-sm">
                Authorized dealer for 8+ premium brands including Kayan Silks, Dhanlaxmi, Rekhraj Sarees & more
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgePercent className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Best Wholesale Prices</h3>
              <p className="text-gray-600 text-sm">
                30-50% off on bulk orders. Special wholesale pricing tiers based on order quantity
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Flexible Ordering</h3>
              <p className="text-gray-600 text-sm">
                Start with as low as 10 pieces. Flexible order quantities for all business sizes
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">15+ Years Experience</h3>
              <p className="text-gray-600 text-sm">
                Trusted wholesale partner with deep industry knowledge and reliable service
              </p>
            </div>
          </div>
        </div>

        {/* Premium Brands Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#FFF8DC] to-white rounded-2xl p-8 md:p-12 border-2 border-[#D4AF37]">
            <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-6">Our Premium Brand Partners</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              As an authorized wholesale dealer, we offer you access to India's most trusted saree brands
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">Kayan Silks</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">Dhanlaxmi</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">Rekhraj Sarees</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">Varni</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">Vijay Laxmi</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">Chechani Sarees</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">Ujala Fashion</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#D4AF37]/30 text-center">
                <p className="font-bold text-[#8B0000]">& Many More</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-12">B2B Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 p-6 border-b-2 border-[#D4AF37]">
                <h3 className="text-2xl font-bold text-[#3E2723] mb-2">Starter</h3>
                <p className="text-gray-600">Perfect for boutiques & small retailers</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#8B0000]">30%</span>
                  <span className="text-gray-600 ml-2">OFF</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">10-49 pieces per order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Access to all collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Standard delivery (7-10 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <a
                  href="#b2b-form"
                  className="block w-full bg-white border-2 border-[#8B0000] text-[#8B0000] py-3 rounded-lg font-medium text-center hover:bg-[#FFF8DC] transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-[#8B0000] transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-[#8B0000] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] p-6 border-b-2 border-[#8B0000] text-white">
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <p className="text-[#FFF8DC]/80">Ideal for growing businesses</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#8B0000]">40%</span>
                  <span className="text-gray-600 ml-2">OFF</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">50-199 pieces per order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Priority access to new arrivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Express delivery (3-5 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Custom packaging options</span>
                  </li>
                </ul>
                <a
                  href="#b2b-form"
                  className="block w-full bg-[#8B0000] text-white py-3 rounded-lg font-medium text-center hover:bg-[#6B0000] transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 p-6 border-b-2 border-[#D4AF37]">
                <h3 className="text-2xl font-bold text-[#3E2723] mb-2">Enterprise</h3>
                <p className="text-gray-600">For large retailers & chains</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#8B0000]">50%</span>
                  <span className="text-gray-600 ml-2">OFF</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">200+ pieces per order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Exclusive designs & collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Private labeling available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Custom designs & fabrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Flexible payment terms</span>
                  </li>
                </ul>
                <a
                  href="#b2b-form"
                  className="block w-full bg-white border-2 border-[#8B0000] text-[#8B0000] py-3 rounded-lg font-medium text-center hover:bg-[#FFF8DC] transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Seller Program Section */}
        <div id="seller-program" className="mb-16 scroll-mt-8">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8963A] rounded-2xl p-12 text-center text-white mb-12">
            <Users className="mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold mb-4">Are You a Seller?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Partner with Shyamasaree and access 8+ premium brands at wholesale prices with full marketing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6">Seller Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-[#3E2723]">Low Investment:</strong>
                    <p className="text-gray-600 text-sm">Start with minimal investment. No franchise fees</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-[#3E2723]">Quality Products:</strong>
                    <p className="text-gray-600 text-sm">Access to 500+ premium saree designs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-[#3E2723]">Marketing Support:</strong>
                    <p className="text-gray-600 text-sm">Product images, catalogs, and marketing materials provided</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-[#3E2723]">Flexible Returns:</strong>
                    <p className="text-gray-600 text-sm">Easy exchange and return policy for sellers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-[#3E2723]">Training & Support:</strong>
                    <p className="text-gray-600 text-sm">Product knowledge, sales training, and ongoing support</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6">Who Can Apply?</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
                  <h4 className="font-bold text-[#3E2723] mb-2">🏪 Retail Store Owners</h4>
                  <p className="text-sm text-gray-600">Expand your product range with our saree collection</p>
                </div>
                <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
                  <h4 className="font-bold text-[#3E2723] mb-2">💻 Online Sellers</h4>
                  <p className="text-sm text-gray-600">Sell on your website, social media, or marketplaces</p>
                </div>
                <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
                  <h4 className="font-bold text-[#3E2723] mb-2">👥 Resellers & Distributors</h4>
                  <p className="text-sm text-gray-600">Build your saree business with wholesale pricing</p>
                </div>
                <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
                  <h4 className="font-bold text-[#3E2723] mb-2">🎯 Entrepreneurs</h4>
                  <p className="text-sm text-gray-600">Start your own saree business from home</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* B2B Contact Form */}
        <div id="b2b-form" className="bg-white rounded-lg shadow-xl p-8 md:p-12 scroll-mt-8">
          <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-4">Get B2B Pricing & Seller Info</h2>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form below and our B2B team will contact you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                >
                  <option value="">Select business type</option>
                  <option value="retailer">Retail Store</option>
                  <option value="online">Online Seller</option>
                  <option value="wholesaler">Wholesaler/Distributor</option>
                  <option value="boutique">Boutique</option>
                  <option value="reseller">Reseller</option>
                  <option value="entrepreneur">New Entrepreneur</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Expected Monthly Quantity
                </label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                >
                  <option value="">Select quantity range</option>
                  <option value="10-49">10-49 pieces</option>
                  <option value="50-199">50-199 pieces</option>
                  <option value="200-499">200-499 pieces</option>
                  <option value="500+">500+ pieces</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Additional Requirements
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors resize-none"
                placeholder="Tell us about your requirements, preferred fabrics, designs, or any specific needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B0000] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#6B0000] transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Submit B2B Request
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Our B2B team will review your request and contact you within 24 business hours
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white">
            <Phone className="mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Call Our B2B Team</h3>
            <p className="text-[#FFF8DC]/80 mb-4 text-sm">Speak directly with our bulk order specialists</p>
            <a href="tel:+916260843969" className="text-2xl font-bold hover:text-[#D4AF37]">
              +91 62608 43969
            </a>
            <p className="text-sm text-[#FFF8DC]/60 mt-2">Mon-Sat, 9 AM - 7 PM IST</p>
          </div>

          <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8963A] rounded-lg p-8 text-white">
            <Mail className="mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-white/80 mb-4 text-sm">Get detailed B2B information and catalogs</p>
            <a href="mailto:b2b@shyamasaree.com" className="text-2xl font-bold hover:text-[#3E2723]">
              b2b@shyamasaree.com
            </a>
            <p className="text-sm text-white/60 mt-2">We respond within 4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
