import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping typically takes 3-7 business days within India. Express shipping (1-3 days) is available for select locations at an additional cost.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Currently, we ship only within India. International shipping will be available soon. Subscribe to our newsletter to stay updated!'
        },
        {
          q: 'What is the minimum order value for free shipping?',
          a: 'We offer FREE shipping on all orders above ₹999. For orders below this amount, a flat shipping fee of ₹99 applies.'
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you\'ll receive a tracking number via email and SMS. You can also track your order using the "Track Order" page on our website.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a hassle-free 7-day return policy. Products must be unused, unwashed, and in original packaging with all tags intact.'
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact our customer support at support@shyamasaree.com or call +91 62608 43969. Our team will guide you through the return process and arrange a pickup.'
        },
        {
          q: 'Can I exchange a saree for a different color or design?',
          a: 'Yes! Exchanges are allowed within 7 days of delivery, subject to product availability. Exchange shipping is free for the first exchange.'
        },
        {
          q: 'When will I receive my refund?',
          a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned product. The amount will be credited to your original payment method.'
        }
      ]
    },
    {
      category: 'Products & Quality',
      questions: [
        {
          q: 'Are your sarees authentic?',
          a: 'Absolutely! We source our sarees directly from artisans and manufacturers across India. Each product comes with an authenticity certificate.'
        },
        {
          q: 'Do colors appear different in person vs online?',
          a: 'We strive for color accuracy, but slight variations may occur due to screen settings and lighting. If you\'re unsatisfied with the color, our return policy has you covered!'
        },
        {
          q: 'Are blouses included with the sarees?',
          a: 'Most of our sarees come with unstitched blouse pieces. Product descriptions clearly mention whether a blouse is included.'
        },
        {
          q: 'How do I care for my saree?',
          a: 'Care instructions vary by fabric. Generally: Silk sarees require dry cleaning, Cotton can be hand-washed, Georgette/Chiffon should be dry cleaned. Specific care instructions are provided with each product.'
        }
      ]
    },
    {
      category: 'Payments',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept Credit/Debit Cards (Visa, Mastercard), UPI, Net Banking, Paytm, and Cash on Delivery (COD) for eligible orders.'
        },
        {
          q: 'Is Cash on Delivery available?',
          a: 'Yes! COD is available for orders up to ₹20,000. A nominal COD handling fee of ₹50 applies.'
        },
        {
          q: 'Is my payment information secure?',
          a: 'Absolutely. We use industry-standard SSL encryption and PCI-DSS compliant payment gateways to ensure your payment information is completely secure.'
        },
        {
          q: 'Do you offer EMI options?',
          a: 'Yes, EMI options are available for orders above ₹5,000 through select credit cards and Bajaj Finserv.'
        }
      ]
    },
    {
      category: 'Account & Wishlist',
      questions: [
        {
          q: 'Do I need an account to place an order?',
          a: 'No, you can checkout as a guest. However, creating an account helps you track orders, save addresses, and maintain a wishlist.'
        },
        {
          q: 'How do I reset my password?',
          a: 'Click on "Forgot Password" on the login page, enter your registered email, and follow the instructions sent to your inbox.'
        },
        {
          q: 'Can I save items for later?',
          a: 'Yes! Use the "Add to Wishlist" feature to save your favorite sarees and access them anytime from your account.'
        }
      ]
    },
    {
      category: 'Bulk Orders',
      questions: [
        {
          q: 'Do you accept bulk orders?',
          a: 'Yes! We offer special pricing for bulk orders (10+ pieces). Contact us at orders@shyamasaree.com or visit our "Bulk Orders" page for more details.'
        },
        {
          q: 'Can I get customized sarees?',
          a: 'We offer limited customization for bulk orders, including specific colors and designs. Contact our team to discuss your requirements.'
        }
      ]
    }
  ];

  const filteredFaqs = searchQuery
    ? faqs.map(category => ({
        ...category,
        questions: category.questions.filter(
          faq =>
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqs;

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-[#FFF8DC]/80 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-12 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors text-lg"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8B0000]" size={24} />
          </div>
        </div>

        {/* FAQ Categories */}
        {filteredFaqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-[#3E2723] mb-6 flex items-center">
              <div className="w-2 h-8 bg-[#8B0000] rounded mr-3"></div>
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => {
                const globalIndex = catIndex * 100 + faqIndex;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-[#D4AF37] transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#FFF8DC]/30 transition-colors"
                    >
                      <span className="font-medium text-[#3E2723] pr-4 text-lg">{faq.q}</span>
                      <ChevronDown
                        size={24}
                        className={`text-[#8B0000] flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-[#D4AF37]/30 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-[#8B0000] hover:underline font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Still Have Questions */}
        <div className="mt-16 bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-[#FFF8DC]/80 mb-6">
            Our customer support team is here to help you with any queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/916260843969"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#3E2723] px-8 py-3 rounded-lg font-medium hover:bg-[#D4AF37]/90 transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
