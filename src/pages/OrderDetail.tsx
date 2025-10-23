import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Truck, Package, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';
import jsPDF from 'jspdf';

// Mock order data - in real app, fetch from API
const getOrderById = (id: string) => {
  const orders = [
    {
      id: 'SHYABCD123',
      date: '2025-10-15',
      status: 'delivered',
      deliveredDate: '2025-10-20',
      total: 4999,
      subtotal: 4999,
      shipping: 0,
      tax: 0,
      discount: 0,
      items: [
        {
          id: '1',
          name: 'Royal Blue Banarasi Silk Saree with Golden Zari Work',
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop',
          quantity: 1,
          price: 4999,
          color: 'Royal Blue',
          fabric: 'Banarasi Silk'
        }
      ],
      trackingNumber: 'TRK1234567890',
      shippingAddress: {
        name: 'Priya Sharma',
        phone: '+91 98765 43210',
        email: 'priya.sharma@example.com',
        address: '123, MG Road, Indira Nagar',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560038'
      },
      billingAddress: {
        name: 'Priya Sharma',
        phone: '+91 98765 43210',
        email: 'priya.sharma@example.com',
        address: '123, MG Road, Indira Nagar',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560038'
      },
      paymentMethod: 'UPI',
      timeline: [
        { status: 'Order Placed', date: '2025-10-15', time: '10:30 AM', completed: true },
        { status: 'Processing', date: '2025-10-15', time: '02:15 PM', completed: true },
        { status: 'Shipped', date: '2025-10-16', time: '09:00 AM', completed: true },
        { status: 'Out for Delivery', date: '2025-10-20', time: '08:30 AM', completed: true },
        { status: 'Delivered', date: '2025-10-20', time: '04:45 PM', completed: true }
      ]
    },
    {
      id: 'SHYXYZ456',
      date: '2025-10-20',
      status: 'shipped',
      total: 8298,
      subtotal: 8298,
      shipping: 0,
      tax: 0,
      discount: 0,
      items: [
        {
          id: '2',
          name: 'Emerald Green Kanjivaram Silk Saree',
          image: 'https://images.unsplash.com/photo-1583833753379-140c67f7b1e7?w=400&h=600&fit=crop',
          quantity: 1,
          price: 6999,
          color: 'Emerald Green',
          fabric: 'Kanjivaram Silk'
        },
        {
          id: '3',
          name: 'Soft Pink Cotton Saree with Block Print',
          image: 'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=400&h=600&fit=crop',
          quantity: 1,
          price: 1299,
          color: 'Soft Pink',
          fabric: 'Cotton'
        }
      ],
      trackingNumber: 'TRK0987654321',
      shippingAddress: {
        name: 'Anjali Mehta',
        phone: '+91 98123 45678',
        email: 'anjali.mehta@example.com',
        address: '456, Lajpat Nagar',
        city: 'New Delhi',
        state: 'Delhi',
        pincode: '110024'
      },
      billingAddress: {
        name: 'Anjali Mehta',
        phone: '+91 98123 45678',
        email: 'anjali.mehta@example.com',
        address: '456, Lajpat Nagar',
        city: 'New Delhi',
        state: 'Delhi',
        pincode: '110024'
      },
      paymentMethod: 'Credit Card',
      timeline: [
        { status: 'Order Placed', date: '2025-10-20', time: '11:00 AM', completed: true },
        { status: 'Processing', date: '2025-10-20', time: '03:30 PM', completed: true },
        { status: 'Shipped', date: '2025-10-21', time: '10:00 AM', completed: true },
        { status: 'Out for Delivery', date: '', time: '', completed: false },
        { status: 'Delivered', date: '', time: '', completed: false }
      ]
    },
    {
      id: 'SHYPQR789',
      date: '2025-10-22',
      status: 'processing',
      total: 3499,
      subtotal: 3499,
      shipping: 0,
      tax: 0,
      discount: 0,
      items: [
        {
          id: '4',
          name: 'Maroon Designer Georgette Saree with Sequin Work',
          image: 'https://images.unsplash.com/photo-1598351462725-a3c0af8b7c3f?w=400&h=600&fit=crop',
          quantity: 1,
          price: 3499,
          color: 'Maroon',
          fabric: 'Georgette'
        }
      ],
      shippingAddress: {
        name: 'Lakshmi Iyer',
        phone: '+91 99876 54321',
        email: 'lakshmi.iyer@example.com',
        address: '789, Koramangala 5th Block',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560095'
      },
      billingAddress: {
        name: 'Lakshmi Iyer',
        phone: '+91 99876 54321',
        email: 'lakshmi.iyer@example.com',
        address: '789, Koramangala 5th Block',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560095'
      },
      paymentMethod: 'Cash on Delivery',
      timeline: [
        { status: 'Order Placed', date: '2025-10-22', time: '02:15 PM', completed: true },
        { status: 'Processing', date: '', time: '', completed: false },
        { status: 'Shipped', date: '', time: '', completed: false },
        { status: 'Out for Delivery', date: '', time: '', completed: false },
        { status: 'Delivered', date: '', time: '', completed: false }
      ]
    }
  ];

  return orders.find(o => o.id === id);
};

export default function OrderDetail() {
  const { id } = useParams();
  const order = id ? getOrderById(id) : null;

  if (!order) {
    return (
      <div className="min-h-screen bg-[#FFF8DC]/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3E2723] mb-4">Order Not Found</h1>
          <Link to="/orders" className="text-[#8B0000] hover:underline">
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  const handleDownloadInvoice = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPos = 20;

    // Header - Company Name
    doc.setFontSize(24);
    doc.setTextColor(139, 0, 0); // Maroon
    doc.text('SHYAMASAREE', pageWidth / 2, yPos, { align: 'center' });

    yPos += 10;
    doc.setFontSize(12);
    doc.setTextColor(62, 39, 35); // Brown
    doc.text('Premium Indian Sarees', pageWidth / 2, yPos, { align: 'center' });

    yPos += 15;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('TAX INVOICE', pageWidth / 2, yPos, { align: 'center' });

    // Line separator
    yPos += 8;
    doc.setDrawColor(212, 175, 55); // Gold
    doc.setLineWidth(0.5);
    doc.line(20, yPos, pageWidth - 20, yPos);

    // Order Details
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Order ID: ${order.id}`, 20, yPos);
    doc.text(`Date: ${new Date(order.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`, pageWidth - 20, yPos, { align: 'right' });

    // Billing Address
    yPos += 15;
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('BILLING ADDRESS:', 20, yPos);
    doc.setFont(undefined, 'normal');
    yPos += 6;
    doc.setFontSize(10);
    doc.text(order.billingAddress.name, 20, yPos);
    yPos += 5;
    doc.text(order.billingAddress.address, 20, yPos);
    yPos += 5;
    doc.text(`${order.billingAddress.city}, ${order.billingAddress.state} - ${order.billingAddress.pincode}`, 20, yPos);
    yPos += 5;
    doc.text(`Phone: ${order.billingAddress.phone}`, 20, yPos);
    yPos += 5;
    doc.text(`Email: ${order.billingAddress.email}`, 20, yPos);

    // Shipping Address
    yPos += 10;
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('SHIPPING ADDRESS:', pageWidth / 2 + 10, yPos - 35);
    doc.setFont(undefined, 'normal');
    let shipYPos = yPos - 29;
    doc.setFontSize(10);
    doc.text(order.shippingAddress.name, pageWidth / 2 + 10, shipYPos);
    shipYPos += 5;
    doc.text(order.shippingAddress.address, pageWidth / 2 + 10, shipYPos);
    shipYPos += 5;
    doc.text(`${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}`, pageWidth / 2 + 10, shipYPos);
    shipYPos += 5;
    doc.text(`Phone: ${order.shippingAddress.phone}`, pageWidth / 2 + 10, shipYPos);

    // Items Table Header
    yPos += 15;
    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(139, 0, 0); // Maroon background
    doc.rect(20, yPos - 5, pageWidth - 40, 8, 'F');
    doc.setTextColor(255, 248, 220); // Cream text
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Item', 22, yPos);
    doc.text('Qty', pageWidth - 80, yPos, { align: 'center' });
    doc.text('Price', pageWidth - 22, yPos, { align: 'right' });

    // Items
    yPos += 8;
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    order.items.forEach((item, index) => {
      const itemName = doc.splitTextToSize(item.name, pageWidth - 120);
      doc.text(itemName, 22, yPos);
      doc.text(item.quantity.toString(), pageWidth - 80, yPos, { align: 'center' });
      doc.text(`₹${item.price.toLocaleString('en-IN')}`, pageWidth - 22, yPos, { align: 'right' });
      yPos += itemName.length * 5 + 3;
    });

    // Line separator
    yPos += 5;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos, pageWidth - 20, yPos);

    // Payment Summary
    yPos += 10;
    doc.setFontSize(10);
    doc.text('Subtotal:', pageWidth - 80, yPos);
    doc.text(`₹${order.subtotal.toLocaleString('en-IN')}`, pageWidth - 22, yPos, { align: 'right' });

    yPos += 6;
    doc.text('Shipping:', pageWidth - 80, yPos);
    doc.setTextColor(0, 128, 0); // Green for free shipping
    doc.text(order.shipping === 0 ? 'FREE' : `₹${order.shipping.toLocaleString('en-IN')}`, pageWidth - 22, yPos, { align: 'right' });
    doc.setTextColor(0, 0, 0);

    if (order.tax > 0) {
      yPos += 6;
      doc.text('Tax:', pageWidth - 80, yPos);
      doc.text(`₹${order.tax.toLocaleString('en-IN')}`, pageWidth - 22, yPos, { align: 'right' });
    }

    if (order.discount > 0) {
      yPos += 6;
      doc.text('Discount:', pageWidth - 80, yPos);
      doc.setTextColor(0, 128, 0);
      doc.text(`-₹${order.discount.toLocaleString('en-IN')}`, pageWidth - 22, yPos, { align: 'right' });
      doc.setTextColor(0, 0, 0);
    }

    // Total
    yPos += 8;
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.5);
    doc.line(pageWidth - 100, yPos - 2, pageWidth - 20, yPos - 2);
    yPos += 5;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('TOTAL:', pageWidth - 80, yPos);
    doc.setTextColor(139, 0, 0);
    doc.text(`₹${order.total.toLocaleString('en-IN')}`, pageWidth - 22, yPos, { align: 'right' });
    doc.setTextColor(0, 0, 0);

    // Payment Method
    yPos += 10;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);
    doc.text(`Payment Method: ${order.paymentMethod}`, 20, yPos);

    // Footer
    yPos += 20;
    doc.setDrawColor(212, 175, 55);
    doc.line(20, yPos, pageWidth - 20, yPos);

    yPos += 8;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for shopping with Shyamasaree!', pageWidth / 2, yPos, { align: 'center' });

    yPos += 6;
    doc.setFontSize(8);
    doc.text('Contact: +91 62608 43969 | Email: support@shyamasaree.com', pageWidth / 2, yPos, { align: 'center' });

    yPos += 5;
    doc.text('Address: Rewa, Madhya Pradesh - 486001', pageWidth / 2, yPos, { align: 'center' });

    yPos += 5;
    doc.setTextColor(139, 0, 0);
    doc.text('15+ Years of Trust | Authorized Dealer for 8+ Premium Brands', pageWidth / 2, yPos, { align: 'center' });

    // Save PDF
    doc.save(`Invoice_${order.id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/orders"
            className="inline-flex items-center gap-2 text-[#FFF8DC] hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Orders
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Order #{order.id}</h1>
              <p className="text-[#FFF8DC]/80">
                Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
            <button
              onClick={handleDownloadInvoice}
              className="bg-[#D4AF37] text-[#3E2723] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download Invoice
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Timeline */}
            {order.timeline && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Order Timeline</h2>
                <div className="space-y-4">
                  {order.timeline.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.completed ? <CheckCircle size={20} /> : <Package size={20} />}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold ${step.completed ? 'text-[#3E2723]' : 'text-gray-400'}`}>
                          {step.status}
                        </h3>
                        {step.date && (
                          <p className="text-sm text-gray-600">
                            {new Date(step.date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })} at {step.time}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {order.trackingNumber && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      to={`/track-order?id=${order.id}`}
                      className="w-full bg-[#8B0000] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#6B0000] transition-colors flex items-center justify-center gap-2"
                    >
                      <Truck size={20} />
                      Track Order
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Order Items</h2>
              <div className="space-y-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={handleImageError}
                      className="w-24 h-32 object-cover rounded-lg border-2 border-[#D4AF37]/30"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#3E2723] mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Color: {item.color}</p>
                        <p>Fabric: {item.fabric}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-lg font-bold text-[#8B0000] mt-2">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-[#8B0000]" size={20} />
                  <h2 className="text-xl font-bold text-[#3E2723]">Shipping Address</h2>
                </div>
                <div className="text-gray-700 space-y-1">
                  <p className="font-bold">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
                  <p>{order.shippingAddress.pincode}</p>
                  <div className="pt-2 space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone size={14} />
                      {order.shippingAddress.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={14} />
                      {order.shippingAddress.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-[#8B0000]" size={20} />
                  <h2 className="text-xl font-bold text-[#3E2723]">Billing Address</h2>
                </div>
                <div className="text-gray-700 space-y-1">
                  <p className="font-bold">{order.billingAddress.name}</p>
                  <p>{order.billingAddress.address}</p>
                  <p>{order.billingAddress.city}, {order.billingAddress.state}</p>
                  <p>{order.billingAddress.pincode}</p>
                  <div className="pt-2 space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone size={14} />
                      {order.billingAddress.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={14} />
                      {order.billingAddress.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-[#3E2723] mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{order.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">
                    {order.shipping === 0 ? 'FREE' : '₹' + order.shipping.toLocaleString('en-IN')}
                  </span>
                </div>
                {order.tax > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">₹{order.tax.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {order.discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium text-green-600">-₹{order.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-[#8B0000]">
                    ₹{order.total.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-600">Payment Method</p>
                  <p className="font-bold text-[#3E2723]">{order.paymentMethod}</p>
                </div>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Need Help?</h3>
              <p className="text-[#FFF8DC]/80 text-sm mb-4">
                Have questions about your order? We're here to help!
              </p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/916260843969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#8B0000] py-2 px-4 rounded-lg font-medium text-center hover:bg-[#FFF8DC] transition-colors"
                >
                  WhatsApp Support
                </a>
                <Link
                  to="/contact"
                  className="block w-full bg-[#D4AF37] text-[#3E2723] py-2 px-4 rounded-lg font-medium text-center hover:bg-[#D4AF37]/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
