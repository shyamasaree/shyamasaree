import { RotateCcw, Package, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function Returns() {
  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Returns & Exchange Policy</h1>
          <p className="text-xl text-[#FFF8DC]/80">
            Hassle-free returns within 7 days of delivery
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Our Return Promise</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Shyamasaree, customer satisfaction is our top priority. We offer a hassle-free 7-day return and exchange policy for all products. If you're not completely satisfied with your purchase, we're here to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-[#FFF8DC]/50 rounded-lg">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="font-bold text-[#3E2723] mb-1">7 Days</h3>
              <p className="text-sm text-gray-600">Return window from delivery</p>
            </div>
            <div className="text-center p-4 bg-[#FFF8DC]/50 rounded-lg">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="font-bold text-[#3E2723] mb-1">Free Pickup</h3>
              <p className="text-sm text-gray-600">We arrange pickup at your doorstep</p>
            </div>
            <div className="text-center p-4 bg-[#FFF8DC]/50 rounded-lg">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-[#8B0000]" size={32} />
              </div>
              <h3 className="font-bold text-[#3E2723] mb-1">Quick Refund</h3>
              <p className="text-sm text-gray-600">5-7 business days processing</p>
            </div>
          </div>
        </div>

        {/* Return Conditions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Return Conditions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-gray-700">Product must be unused, unwashed, and in original condition</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-gray-700">All original tags, labels, and packaging must be intact</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-gray-700">Return request must be initiated within 7 days of delivery</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-gray-700">Product should not have any stains, alterations, or damage</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-gray-700">Invoice/receipt must be included with the return</p>
            </div>
          </div>
        </div>

        {/* How to Return */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">How to Initiate a Return</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#8B0000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Contact Us</h3>
                <p className="text-gray-700">Email support@shyamasaree.com or call +91 62608 43969 with your order details</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#8B0000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Approval & Pickup</h3>
                <p className="text-gray-700">Once approved, we'll schedule a free pickup from your address</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#8B0000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Quality Check</h3>
                <p className="text-gray-700">We'll inspect the product to ensure it meets return conditions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#8B0000] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Refund/Exchange</h3>
                <p className="text-gray-700">Refund will be processed within 5-7 business days to your original payment method</p>
              </div>
            </div>
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Exchange Policy</h2>
          <p className="text-gray-700 mb-4">
            We happily accept exchanges for different sizes, colors, or designs within 7 days of delivery.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#8B0000]">•</span>
              <span>Exchange is subject to product availability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B0000]">•</span>
              <span>First exchange shipping is FREE</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B0000]">•</span>
              <span>If the new product costs more, you'll need to pay the difference</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B0000]">•</span>
              <span>If the new product costs less, we'll refund the difference</span>
            </li>
          </ul>
        </div>

        {/* Non-Returnable Items */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={24} />
            <div>
              <h3 className="font-bold text-[#3E2723] mb-2">Non-Returnable Items</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Products with missing tags or labels</li>
                <li>• Washed, worn, or altered sarees</li>
                <li>• Products with stains, odors, or damage</li>
                <li>• Items purchased during final sale or clearance (marked as non-returnable)</li>
                <li>• Custom-made or personalized sarees</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Returns?</h3>
          <p className="text-[#FFF8DC]/80 mb-6">
            Our customer support team is ready to assist you with returns and exchanges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@shyamasaree.com"
              className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+916260843969"
              className="bg-[#D4AF37] text-[#3E2723] px-8 py-3 rounded-lg font-medium hover:bg-[#D4AF37]/90 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
