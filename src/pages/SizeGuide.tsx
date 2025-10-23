import { Ruler, Info, AlertCircle } from 'lucide-react';

export default function SizeGuide() {
  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Saree Size Guide</h1>
          <p className="text-xl text-[#FFF8DC]/80">
            Find your perfect fit with our comprehensive sizing guide
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Standard Saree Dimensions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Ruler className="text-[#8B0000] flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-[#3E2723] mb-2">Standard Saree Dimensions</h2>
              <p className="text-gray-700">
                Traditional Indian sarees come in standard sizes that fit most body types. The draping style allows for flexibility and comfort.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#FFF8DC]">
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Type</th>
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Length</th>
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Width</th>
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">Standard Saree</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">5.5 meters (18 feet)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">1.1-1.2 meters</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">Height 5'0" to 5'7"</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">Long Saree</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">6.3 meters (21 feet)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">1.1-1.2 meters</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">Height 5'8" and above</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">Silk Saree</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">5.5-6 meters</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">1.1-1.3 meters</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">All heights</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">Lehenga Saree</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">4.5 meters (15 feet)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">1.1 meters</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">Pre-stitched, all heights</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Blouse Size Chart */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Blouse Size Chart</h2>
          <p className="text-gray-700 mb-6">
            Most of our sarees come with an unstitched blouse piece of 0.8 meters. Here's a guide to standard blouse sizes:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#FFF8DC]">
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Size</th>
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Bust (inches)</th>
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Waist (inches)</th>
                  <th className="border border-[#D4AF37] px-6 py-3 text-left text-[#3E2723] font-bold">Shoulder (inches)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">XS (32)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">32"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">26"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">13.5"</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">S (34)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">34"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">28"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">14"</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">M (36)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">36"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">30"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">14.5"</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">L (38)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">38"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">32"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">15"</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">XL (40)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">40"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">34"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">15.5"</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">XXL (42)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">42"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">36"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">16"</td>
                </tr>
                <tr className="hover:bg-[#FFF8DC]/30">
                  <td className="border border-[#D4AF37]/30 px-6 py-4 font-medium">3XL (44)</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">44"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">38"</td>
                  <td className="border border-[#D4AF37]/30 px-6 py-4">16.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Measure */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Info className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">How to Measure for Blouse</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-3">Bust Measurement</h4>
              <p className="text-sm text-gray-600 mb-2">
                Wrap the measuring tape around the fullest part of your bust, keeping the tape parallel to the ground.
              </p>
              <p className="text-xs text-gray-500 italic">
                Wear a well-fitted bra for accurate measurement.
              </p>
            </div>

            <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-3">Waist Measurement</h4>
              <p className="text-sm text-gray-600 mb-2">
                Measure around your natural waistline, which is the narrowest part of your torso, just above the belly button.
              </p>
              <p className="text-xs text-gray-500 italic">
                Don't suck in your stomach - breathe normally.
              </p>
            </div>

            <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-3">Shoulder Measurement</h4>
              <p className="text-sm text-gray-600 mb-2">
                Measure from the edge of one shoulder to the edge of the other shoulder across your back.
              </p>
              <p className="text-xs text-gray-500 italic">
                Keep your shoulders relaxed and natural.
              </p>
            </div>
          </div>
        </div>

        {/* Petticoat Size Guide */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Petticoat (Underskirt) Size Guide</h2>
          <p className="text-gray-700 mb-6">
            A petticoat is worn under the saree. Choose based on your waist size:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-2 border-[#D4AF37] rounded-lg p-4 text-center">
              <p className="font-bold text-[#8B0000] text-2xl mb-1">S</p>
              <p className="text-sm text-gray-600">Waist: 26-28"</p>
            </div>
            <div className="border-2 border-[#D4AF37] rounded-lg p-4 text-center">
              <p className="font-bold text-[#8B0000] text-2xl mb-1">M</p>
              <p className="text-sm text-gray-600">Waist: 30-32"</p>
            </div>
            <div className="border-2 border-[#D4AF37] rounded-lg p-4 text-center">
              <p className="font-bold text-[#8B0000] text-2xl mb-1">L</p>
              <p className="text-sm text-gray-600">Waist: 34-36"</p>
            </div>
            <div className="border-2 border-[#D4AF37] rounded-lg p-4 text-center">
              <p className="font-bold text-[#8B0000] text-2xl mb-1">XL</p>
              <p className="text-sm text-gray-600">Waist: 38-40"</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Tip:</strong> Petticoats usually have drawstrings or elastic waistbands for adjustability. When in doubt, size up for comfort.
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={24} />
            <div>
              <h3 className="font-bold text-[#3E2723] mb-3">Important Notes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Sarees are one-size-fits-most due to their draping nature. The same saree can be worn by different body types.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Blouse pieces are unstitched. We recommend getting them tailored by a professional for the perfect fit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Measurements may vary slightly (±1 inch) due to the handloom nature of some sarees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Always measure yourself in the undergarments you plan to wear with the saree.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>For custom blouse stitching services, contact our customer support team.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Sizing?</h3>
          <p className="text-[#FFF8DC]/80 mb-6">
            Our customer support team is here to help you find the perfect fit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors"
            >
              Contact Support
            </a>
            <a
              href="https://wa.me/916260843969"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#3E2723] px-8 py-3 rounded-lg font-medium hover:bg-[#D4AF37]/90 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
