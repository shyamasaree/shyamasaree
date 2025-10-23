import { FileText, ShoppingCart, Shield, AlertCircle, RefreshCw, CreditCard } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-[#FFF8DC]/80">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-[#FFF8DC]/60 mt-4">Last Updated: October 22, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="text-[#8B0000] flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-[#3E2723] mb-2">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Shyamasaree.com, you accept and agree to be bound by the terms and conditions outlined below. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>
          </div>
        </div>

        {/* Use of Website */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Use of Website</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.</p>
            <div className="bg-[#FFF8DC]/50 p-4 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Prohibited Activities:</h4>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>Unauthorized access to our systems or networks</li>
                <li>Using automated systems to scrape content</li>
                <li>Posting false, misleading, or fraudulent information</li>
                <li>Impersonating any person or entity</li>
                <li>Uploading malicious code or viruses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <ShoppingCart className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Product Information & Pricing</h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p>We strive to display product colors and details accurately, but actual colors may vary slightly due to screen settings and photography</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p>All products are sourced from authorized brand partners including Kayan Silks, Dhanlaxmi, Rekhraj Sarees, and others</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p>Prices are subject to change without notice. The price applicable is the one displayed at checkout</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p>We reserve the right to limit quantities and refuse service to anyone</p>
            </div>
          </div>
        </div>

        {/* Orders & Payment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <CreditCard className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Orders & Payment</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-[#3E2723] mb-2">Order Acceptance</h4>
              <p className="text-gray-700 text-sm">
                All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order at our discretion, including orders that appear fraudulent or violate our terms.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#3E2723] mb-2">Payment Terms</h4>
              <p className="text-gray-700 text-sm mb-2">
                Payment must be made in full at the time of order placement. We accept:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                <li>Credit/Debit Cards (Visa, Mastercard, RuPay, Amex)</li>
                <li>UPI Payments</li>
                <li>Net Banking</li>
                <li>Digital Wallets (Paytm, PhonePe, Google Pay)</li>
                <li>Cash on Delivery (COD) - Selected locations only</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#3E2723] mb-2">Order Cancellation</h4>
              <p className="text-gray-700 text-sm">
                You may cancel your order within 24 hours of placement if it hasn't been shipped. Contact our support team immediately for cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Shipping & Delivery */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Shipping & Delivery</h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <p>
              Delivery timelines are estimates and not guaranteed. Delays may occur due to weather, logistics, or other unforeseen circumstances.
            </p>
            <p>
              Risk of loss and title for products pass to you upon delivery to the shipping carrier. We are not responsible for lost or stolen packages after delivery confirmation.
            </p>
            <p className="font-medium text-[#3E2723]">
              For detailed shipping information, please refer to our <a href="/shipping-policy" className="text-[#8B0000] hover:underline">Shipping Policy</a>.
            </p>
          </div>
        </div>

        {/* Returns & Refunds */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <RefreshCw className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Returns & Refunds</h2>
          </div>
          <div className="space-y-3 text-gray-700 text-sm">
            <p>
              We offer a 7-day return policy from the date of delivery for unused, unwashed products with original tags intact.
            </p>
            <p>
              Refunds will be processed to the original payment method within 5-7 business days after we receive and inspect the returned item.
            </p>
            <p>
              Certain items may not be eligible for return, including custom-made products, final sale items, and products marked as non-returnable.
            </p>
            <p className="font-medium text-[#3E2723]">
              For complete return information, please refer to our <a href="/returns" className="text-[#8B0000] hover:underline">Return Policy</a>.
            </p>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content on this website, including text, images, logos, graphics, and software, is the property of Shyamasaree or our brand partners and is protected by copyright and trademark laws.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Limitation of Liability</h2>
          </div>
          <div className="space-y-3 text-gray-700 text-sm">
            <p>
              To the fullest extent permitted by law, Shyamasaree shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.
            </p>
            <p>
              Our total liability for any claims related to our services shall not exceed the amount you paid for the product in question.
            </p>
            <p className="font-medium text-[#3E2723]">
              We provide our website and products "as is" without any warranties, express or implied.
            </p>
          </div>
        </div>

        {/* User Accounts */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">User Accounts</h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            <div className="bg-[#FFF8DC]/50 p-4 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Account Security:</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Use a strong, unique password</li>
                <li>Do not share your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>You are liable for all purchases made through your account</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Governing Law & Disputes</h2>
          <p className="text-gray-700 mb-3">
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Rewa, Madhya Pradesh.
          </p>
          <p className="text-gray-700 text-sm">
            We encourage you to contact our customer support first to resolve any issues before pursuing legal action.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes constitutes acceptance of the updated terms. Please review this page periodically for updates.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
          <p className="text-[#FFF8DC]/80 mb-6">
            If you have any questions about these Terms & Conditions, please contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div>
              <p className="text-[#FFF8DC]/60 mb-1">Email</p>
              <a href="mailto:legal@shyamasaree.com" className="font-medium hover:text-[#D4AF37]">legal@shyamasaree.com</a>
            </div>
            <div className="hidden sm:block text-[#FFF8DC]/40">|</div>
            <div>
              <p className="text-[#FFF8DC]/60 mb-1">Phone</p>
              <a href="tel:+916260843969" className="font-medium hover:text-[#D4AF37]">+91 62608 43969</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
