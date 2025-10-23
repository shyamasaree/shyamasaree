import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3E2723] text-[#FFF8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#FFF8DC]">SHYAMA</span>
              <span className="text-[#D4AF37]">SAREE</span>
            </div>
            <p className="text-sm mb-4 text-[#FFF8DC]/80">
              30+ years of trust as an authorized dealer for India's top saree brands
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/shayamasaree/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582879821496" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shyama-saree-408436390/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@ShyamaSaree" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://wa.me/916260843969" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-[#D4AF37] font-bold mb-4 text-sm uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog & Guides</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-[#D4AF37] transition-colors">Track Order</Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-[#D4AF37] transition-colors">Size Guide</Link>
              </li>
              <li>
                <Link to="/bulk-orders" className="hover:text-[#D4AF37] transition-colors">Bulk Orders</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#D4AF37] transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-[#D4AF37] font-bold mb-4 text-sm uppercase">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping-policy" className="hover:text-[#D4AF37] transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-[#D4AF37] transition-colors">Return & Exchange</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#D4AF37] transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-[#D4AF37] font-bold mb-4 text-sm uppercase">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="break-words">Phone: +91 62608 43969</li>
              <li className="break-all">Email: support@shyamasaree.com</li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VbB5Y23Fi8xflyDiaW2n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1"
                >
                  <MessageCircle size={14} />
                  Follow WhatsApp Channel
                </a>
              </li>
              <li className="pt-2">
                <strong>Address:</strong><br />
                Rewa, Madhya Pradesh<br />
                India - 486001
              </li>
              <li className="pt-2">
                <strong>GSTIN:</strong><br />
                23OFRPS8541A1ZQ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFF8DC]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[#FFF8DC]/80 text-center md:text-left">
              © 2025 Shyamasaree. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-sm text-[#FFF8DC]/80">We Accept:</span>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs">
                <div className="bg-white text-[#3E2723] px-2 py-1 rounded">Visa</div>
                <div className="bg-white text-[#3E2723] px-2 py-1 rounded">Mastercard</div>
                <div className="bg-white text-[#3E2723] px-2 py-1 rounded">UPI</div>
                <div className="bg-white text-[#3E2723] px-2 py-1 rounded">Paytm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
