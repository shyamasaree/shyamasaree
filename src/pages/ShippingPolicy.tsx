import { Truck, Package, Clock, MapPin, AlertCircle } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Shipping Policy</h1>
          <p className="text-xl text-[#FFF8DC]/80">
            Fast, reliable, and transparent shipping across India
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Shipping Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Shyamasaree, we ensure your precious sarees reach you safely and swiftly. We ship to all locations
            across India through trusted courier partners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FFF8DC] p-3 rounded-full flex-shrink-0">
                <Truck className="text-[#8B0000]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FFF8DC] p-3 rounded-full flex-shrink-0">
                <Clock className="text-[#8B0000]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Fast Delivery</h3>
                <p className="text-sm text-gray-600">3-7 business days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Charges */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Shipping Charges</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#FFF8DC]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#3E2723]">Order Value</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#3E2723]">Shipping Fee</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-[#3E2723]">Delivery Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-700">Below ₹999</td>
                  <td className="px-6 py-4 text-gray-700">₹99</td>
                  <td className="px-6 py-4 text-gray-700">5-7 business days</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">₹999 and above</td>
                  <td className="px-6 py-4 text-green-600 font-bold">FREE</td>
                  <td className="px-6 py-4 text-gray-700">3-7 business days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Express Shipping</td>
                  <td className="px-6 py-4 text-gray-700">₹199</td>
                  <td className="px-6 py-4 text-gray-700">1-3 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Delivery Timeline */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Estimated Delivery Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-[#FFF8DC]/50 rounded-lg">
              <MapPin className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Metro Cities</h3>
                <p className="text-sm text-gray-600">Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad - 3-5 business days</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-[#FFF8DC]/50 rounded-lg">
              <MapPin className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Tier 2 Cities</h3>
                <p className="text-sm text-gray-600">Jaipur, Lucknow, Pune, Surat, Ahmedabad - 4-6 business days</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-[#FFF8DC]/50 rounded-lg">
              <MapPin className="text-[#8B0000] flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Other Locations</h3>
                <p className="text-sm text-gray-600">All other serviceable pin codes - 5-7 business days</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Delivery times are estimates and may vary due to unforeseen circumstances like weather conditions, political unrest, or courier delays. We'll keep you updated via SMS and email.
              </p>
            </div>
          </div>
        </div>

        {/* Order Processing */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Order Processing</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-[#8B0000] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Order Placement</h3>
                <p className="text-sm text-gray-600">Orders are processed within 24 hours of placement (except Sundays and public holidays)</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#8B0000] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Quality Check & Packaging</h3>
                <p className="text-sm text-gray-600">Each saree undergoes quality inspection and is carefully packed to prevent damage during transit</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#8B0000] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Dispatch & Tracking</h3>
                <p className="text-sm text-gray-600">Once shipped, you'll receive a tracking number via email and SMS</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#8B0000] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-[#3E2723] mb-1">Delivery</h3>
                <p className="text-sm text-gray-600">Our courier partner will deliver to your doorstep and may require a signature</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Track Your Order</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once your order is shipped, you can track it in real-time:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Check your email for the tracking link</li>
            <li>Visit our "Track Order" page and enter your order number</li>
            <li>Use the tracking number on the courier's website</li>
          </ul>
          <a
            href="/track-order"
            className="inline-block bg-[#8B0000] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
          >
            Track Your Order
          </a>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Important Information</h2>
          <ul className="space-y-3 text-[#FFF8DC]/90">
            <li>• Orders placed on Sundays and public holidays will be processed the next working day</li>
            <li>• Please ensure someone is available to receive the package at the delivery address</li>
            <li>• Incorrect or incomplete addresses may cause delivery delays - please double-check before placing your order</li>
            <li>• Currently, we only ship within India. International shipping coming soon!</li>
            <li>• For bulk orders (10+ pieces), please contact us for special shipping arrangements</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-xl font-bold text-[#3E2723] mb-4">Questions About Shipping?</h3>
          <p className="text-gray-600 mb-6">Our support team is here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@shyamasaree.com"
              className="inline-block bg-[#8B0000] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+916260843969"
              className="inline-block border-2 border-[#8B0000] text-[#8B0000] px-6 py-3 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
