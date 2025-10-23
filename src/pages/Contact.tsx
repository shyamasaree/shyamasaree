import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-[#FFF8DC]/80">
            We'd love to hear from you. Let us know how we can help!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#3E2723] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

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
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#3E2723] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#3E2723] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B0000] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#6B0000] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#FFF8DC] p-3 rounded-full">
                  <MapPin className="text-[#8B0000]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#3E2723] mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-sm">
                    Shyamasaree Headquarters<br />
                    Rewa, Madhya Pradesh<br />
                    India - 486001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#FFF8DC] p-3 rounded-full">
                  <Phone className="text-[#8B0000]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#3E2723] mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    +91 62608 43969
                  </p>
                  <p className="text-gray-600 text-sm">
                    Mon-Sat: 9 AM - 7 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#FFF8DC] p-3 rounded-full">
                  <Mail className="text-[#8B0000]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#3E2723] mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    support@shyamasaree.com
                  </p>
                  <p className="text-gray-600 text-sm">
                    orders@shyamasaree.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF8DC] p-3 rounded-full">
                  <Clock className="text-[#8B0000]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#3E2723] mb-2">Business Hours</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    Monday - Saturday
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    9:00 AM - 7:00 PM IST
                  </p>
                  <p className="text-gray-600 text-sm">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-lg shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Support</h3>
              <p className="text-[#FFF8DC]/80 mb-4 text-sm">
                Need immediate assistance? Chat with us on WhatsApp for instant support!
              </p>
              <a
                href="https://wa.me/916260843969"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#8B0000] py-3 rounded-lg font-medium text-center hover:bg-[#FFF8DC] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6 text-center">Find Us on the Map</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder - Rewa, Madhya Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
