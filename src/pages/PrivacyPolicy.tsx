import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-[#FFF8DC]/80">
            Your privacy is important to us
          </p>
          <p className="text-sm text-[#FFF8DC]/60 mt-4">Last Updated: October 22, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="text-[#8B0000] flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-[#3E2723] mb-2">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                At Shyamasaree, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Database className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Information We Collect</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[#3E2723] mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-2">When you place an order or create an account, we collect:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Billing and shipping address</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#3E2723] mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <UserCheck className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">How We Use Your Information</h2>
          </div>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p><strong>Order Processing:</strong> To process and fulfill your orders, send order confirmations, and provide customer support</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p><strong>Communication:</strong> To send you updates about your orders, respond to inquiries, and provide customer service</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p><strong>Marketing:</strong> To send promotional emails about new products, special offers, and updates (you can opt-out anytime)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p><strong>Improvement:</strong> To improve our website, products, and services based on your feedback and usage patterns</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000] font-bold">•</span>
              <p><strong>Security:</strong> To detect and prevent fraud, unauthorized access, and other illegal activities</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Lock className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Data Security</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            We implement industry-standard security measures to protect your personal information:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#FFF8DC]/50 p-4 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">SSL Encryption</h4>
              <p className="text-sm text-gray-600">All data transmitted between your browser and our servers is encrypted using SSL technology</p>
            </div>
            <div className="bg-[#FFF8DC]/50 p-4 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">PCI Compliance</h4>
              <p className="text-sm text-gray-600">Payment information is processed through PCI-DSS compliant payment gateways</p>
            </div>
            <div className="bg-[#FFF8DC]/50 p-4 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Secure Storage</h4>
              <p className="text-sm text-gray-600">Your data is stored on secure servers with restricted access</p>
            </div>
            <div className="bg-[#FFF8DC]/50 p-4 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Regular Audits</h4>
              <p className="text-sm text-gray-600">We conduct regular security audits and updates to maintain protection</p>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Eye className="text-[#8B0000] flex-shrink-0" size={28} />
            <h2 className="text-2xl font-bold text-[#3E2723]">Information Sharing</h2>
          </div>

          <p className="text-gray-700 mb-4">We DO NOT sell, trade, or rent your personal information to third parties. We may share your information only in these limited circumstances:</p>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000]">✓</span>
              <p><strong>Service Providers:</strong> Trusted third parties who help us operate our business (payment processors, shipping companies, email services)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000]">✓</span>
              <p><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B0000]">✓</span>
              <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (you will be notified)</p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Your Privacy Rights</h2>

          <div className="space-y-4">
            <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Access & Update</h4>
              <p className="text-gray-700 text-sm">You can access and update your account information at any time through your account dashboard</p>
            </div>
            <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Email Preferences</h4>
              <p className="text-gray-700 text-sm">Unsubscribe from marketing emails by clicking the "unsubscribe" link in any email</p>
            </div>
            <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Data Deletion</h4>
              <p className="text-gray-700 text-sm">Request deletion of your personal data by contacting us at privacy@shyamasaree.com</p>
            </div>
            <div className="p-4 bg-[#FFF8DC]/50 rounded-lg">
              <h4 className="font-bold text-[#3E2723] mb-2">Cookie Control</h4>
              <p className="text-gray-700 text-sm">Manage cookies through your browser settings (note: some features may not work properly)</p>
            </div>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Cookies & Tracking</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small text files stored on your device.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> You can disable cookies in your browser settings, but this may affect the functionality of our website.
            </p>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Children's Privacy</h2>
          <p className="text-gray-700">
            Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </div>

        {/* Updates to Policy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page indicates when the policy was last revised. Continued use of our website after changes constitutes acceptance of the updated policy.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white">
          <div className="flex items-start gap-4 mb-6">
            <Mail className="flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold mb-2">Questions About Privacy?</h2>
              <p className="text-[#FFF8DC]/80 mb-6">
                If you have any questions or concerns about our privacy practices, please contact us:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-[#FFF8DC]/60 mb-1">Email</p>
              <a href="mailto:privacy@shyamasaree.com" className="font-medium hover:text-[#D4AF37]">privacy@shyamasaree.com</a>
            </div>
            <div>
              <p className="text-sm text-[#FFF8DC]/60 mb-1">Phone</p>
              <a href="tel:+916260843969" className="font-medium hover:text-[#D4AF37]">+91 62608 43969</a>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-[#FFF8DC]/60 mb-1">Address</p>
              <p className="font-medium">Rewa, Madhya Pradesh, India - 486001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
