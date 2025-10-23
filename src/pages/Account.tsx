import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Lock, Heart, Package, LogOut, Edit2, Save, X, Truck, CheckCircle, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import { handleImageError } from '../utils/imageUtils';

interface Address {
  id: string;
  label: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    name: string;
    image: string;
    quantity: number;
    price: number;
  }[];
  trackingNumber?: string;
}

export default function Account() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist' | 'addresses' | 'settings'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  // Mock user data - in real app, this would come from auth context/API
  const [userData, setUserData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    gender: 'Female',
    dateOfBirth: '1990-05-15'
  });

  const [editData, setEditData] = useState(userData);

  // Addresses state
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      label: 'Home',
      name: 'Priya Sharma',
      address: '123, MG Road, Indira Nagar',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560038',
      phone: '+91 98765 43210',
      isDefault: true
    },
    {
      id: '2',
      label: 'Office',
      name: 'Priya Sharma',
      address: '456, Tech Park, Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560066',
      phone: '+91 98765 43210',
      isDefault: false
    }
  ]);

  const [addressFormData, setAddressFormData] = useState<Address>({
    id: '',
    label: '',
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    isDefault: false
  });

  // Orders data - synced with MyOrders page
  const orders: Order[] = [
    {
      id: 'SHYABCD123',
      date: '2025-10-15',
      status: 'delivered',
      total: 4999,
      items: [
        {
          name: 'Royal Blue Banarasi Silk Saree with Golden Zari Work',
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop',
          quantity: 1,
          price: 4999
        }
      ],
      trackingNumber: 'TRK1234567890'
    },
    {
      id: 'SHYXYZ456',
      date: '2025-10-20',
      status: 'shipped',
      total: 8298,
      items: [
        {
          name: 'Emerald Green Kanjivaram Silk Saree',
          image: 'https://images.unsplash.com/photo-1583833753379-140c67f7b1e7?w=400&h=600&fit=crop',
          quantity: 1,
          price: 6999
        },
        {
          name: 'Soft Pink Cotton Saree with Block Print',
          image: 'https://images.unsplash.com/photo-1614960378011-23d68ee4b8b8?w=400&h=600&fit=crop',
          quantity: 1,
          price: 1299
        }
      ],
      trackingNumber: 'TRK0987654321'
    },
    {
      id: 'SHYPQR789',
      date: '2025-10-22',
      status: 'processing',
      total: 3499,
      items: [
        {
          name: 'Maroon Designer Georgette Saree with Sequin Work',
          image: 'https://images.unsplash.com/photo-1598351462725-a3c0af8b7c3f?w=400&h=600&fit=crop',
          quantity: 1,
          price: 3499
        }
      ]
    }
  ];

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const handleAddNewAddress = () => {
    setEditingAddressId(null);
    setAddressFormData({
      id: '',
      label: '',
      name: userData.name,
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: userData.phone,
      isDefault: addresses.length === 0
    });
    setShowAddressModal(true);
  };

  const handleEditAddress = (address: Address) => {
    setEditingAddressId(address.id);
    setAddressFormData(address);
    setShowAddressModal(true);
  };

  const handleDeleteAddress = (id: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
      toast.success('Address deleted successfully!');
    }
  };

  const handleSaveAddress = () => {
    if (!addressFormData.label || !addressFormData.address || !addressFormData.city ||
        !addressFormData.state || !addressFormData.pincode) {
      toast.error('Please fill all required fields');
      return;
    }

    if (editingAddressId) {
      // Update existing address
      setAddresses(addresses.map(addr =>
        addr.id === editingAddressId ? addressFormData : addr
      ));
      toast.success('Address updated successfully!');
    } else {
      // Add new address
      const newAddress = {
        ...addressFormData,
        id: Date.now().toString()
      };

      // If this is set as default, unset others
      if (newAddress.isDefault) {
        setAddresses([
          ...addresses.map(addr => ({ ...addr, isDefault: false })),
          newAddress
        ]);
      } else {
        setAddresses([...addresses, newAddress]);
      }
      toast.success('Address added successfully!');
    }

    setShowAddressModal(false);
    setAddressFormData({
      id: '',
      label: '',
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      isDefault: false
    });
  };

  const handleSetDefaultAddress = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    toast.success('Default address updated!');
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'processing': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'shipped': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-300';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-300';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'processing': return <Clock size={16} />;
      case 'shipped': return <Truck size={16} />;
      case 'delivered': return <CheckCircle size={16} />;
      case 'cancelled': return <X size={16} />;
    }
  };

  const stats = {
    orders: orders.length,
    wishlist: 8,
    addresses: addresses.length
  };

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <User size={40} className="text-[#3E2723]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
              <p className="text-[#FFF8DC]/80">{userData.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-[#D4AF37]/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Orders</p>
                <p className="text-3xl font-bold text-[#8B0000]">{stats.orders}</p>
              </div>
              <Package className="text-[#D4AF37]" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-[#D4AF37]/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Wishlist Items</p>
                <p className="text-3xl font-bold text-[#8B0000]">{stats.wishlist}</p>
              </div>
              <Heart className="text-[#D4AF37]" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-[#D4AF37]/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Saved Addresses</p>
                <p className="text-3xl font-bold text-[#8B0000]">{stats.addresses}</p>
              </div>
              <MapPin className="text-[#D4AF37]" size={40} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-6 py-4 transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-[#8B0000] text-white'
                    : 'text-[#3E2723] hover:bg-[#FFF8DC]'
                }`}
              >
                <User size={20} />
                <span className="font-medium">Profile</span>
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-6 py-4 transition-colors border-t ${
                  activeTab === 'orders'
                    ? 'bg-[#8B0000] text-white'
                    : 'text-[#3E2723] hover:bg-[#FFF8DC]'
                }`}
              >
                <Package size={20} />
                <span className="font-medium">My Orders</span>
              </button>

              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center gap-3 px-6 py-4 transition-colors border-t ${
                  activeTab === 'wishlist'
                    ? 'bg-[#8B0000] text-white'
                    : 'text-[#3E2723] hover:bg-[#FFF8DC]'
                }`}
              >
                <Heart size={20} />
                <span className="font-medium">Wishlist</span>
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center gap-3 px-6 py-4 transition-colors border-t ${
                  activeTab === 'addresses'
                    ? 'bg-[#8B0000] text-white'
                    : 'text-[#3E2723] hover:bg-[#FFF8DC]'
                }`}
              >
                <MapPin size={20} />
                <span className="font-medium">Addresses</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-6 py-4 transition-colors border-t ${
                  activeTab === 'settings'
                    ? 'bg-[#8B0000] text-white'
                    : 'text-[#3E2723] hover:bg-[#FFF8DC]'
                }`}
              >
                <Lock size={20} />
                <span className="font-medium">Settings</span>
              </button>

              <button className="w-full flex items-center gap-3 px-6 py-4 text-red-600 hover:bg-red-50 transition-colors border-t">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-[#3E2723]">Personal Information</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-lg hover:bg-[#6B0000] transition-colors"
                    >
                      <Edit2 size={18} />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Save size={18} />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <X size={18} />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={isEditing ? editData.name : userData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none disabled:bg-gray-50 disabled:text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        value={isEditing ? editData.email : userData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none disabled:bg-gray-50 disabled:text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        value={isEditing ? editData.phone : userData.phone}
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none disabled:bg-gray-50 disabled:text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      value={isEditing ? editData.gender : userData.gender}
                      onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none disabled:bg-gray-50 disabled:text-gray-700"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={isEditing ? editData.dateOfBirth : userData.dateOfBirth}
                      onChange={(e) => setEditData({ ...editData, dateOfBirth: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none disabled:bg-gray-50 disabled:text-gray-700"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#3E2723]">Recent Orders</h2>
                  <Link
                    to="/orders"
                    className="text-[#8B0000] hover:text-[#6B0000] font-medium text-sm"
                  >
                    View All Orders →
                  </Link>
                </div>

                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="mx-auto mb-4 text-gray-400" size={64} />
                    <p className="text-gray-600 mb-4">No orders yet</p>
                    <Link
                      to="/products"
                      className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
                    >
                      Start Shopping
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order.id} className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#D4AF37] transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 flex-wrap">
                              <h3 className="font-bold text-[#3E2723]">Order #{order.id}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(order.status)}`}>
                                {getStatusIcon(order.status)}
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {new Date(order.date).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                          <div className="text-left md:text-right">
                            <p className="text-sm text-gray-600">Total</p>
                            <p className="text-xl font-bold text-[#8B0000]">₹{order.total.toLocaleString('en-IN')}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          {order.items.slice(0, 2).map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                onError={handleImageError}
                                className="w-16 h-20 object-cover rounded border-2 border-[#D4AF37]/30"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-[#3E2723] truncate">{item.name}</h4>
                                <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                                <p className="text-sm font-medium text-[#8B0000]">₹{item.price.toLocaleString('en-IN')}</p>
                              </div>
                            </div>
                          ))}
                          {order.items.length > 2 && (
                            <p className="text-sm text-gray-600">+{order.items.length - 2} more item(s)</p>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            to={`/order/${order.id}`}
                            className="flex-1 text-center border-2 border-[#8B0000] text-[#8B0000] py-2 px-4 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors"
                          >
                            View Details
                          </Link>
                          {order.trackingNumber && (
                            <Link
                              to={`/track-order?id=${order.id}`}
                              className="flex-1 text-center bg-[#8B0000] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#6B0000] transition-colors flex items-center justify-center gap-2"
                            >
                              <Truck size={18} />
                              Track Order
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-6">My Wishlist</h2>
                <div className="text-center py-12">
                  <Heart className="mx-auto mb-4 text-gray-400" size={64} />
                  <p className="text-gray-600 mb-4">Save your favorite sarees here</p>
                  <Link
                    to="/wishlist"
                    className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
                  >
                    View Wishlist
                  </Link>
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#3E2723]">Saved Addresses</h2>
                  <button
                    onClick={handleAddNewAddress}
                    className="bg-[#8B0000] text-white px-4 py-2 rounded-lg hover:bg-[#6B0000] transition-colors"
                  >
                    + Add New Address
                  </button>
                </div>

                {addresses.length === 0 ? (
                  <div className="text-center py-12">
                    <MapPin className="mx-auto mb-4 text-gray-400" size={64} />
                    <p className="text-gray-600 mb-4">No addresses saved yet</p>
                    <button
                      onClick={handleAddNewAddress}
                      className="bg-[#8B0000] text-white px-6 py-3 rounded-lg hover:bg-[#6B0000] transition-colors"
                    >
                      Add Your First Address
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        className={`border-2 rounded-lg p-6 hover:border-[#D4AF37] transition-colors ${
                          address.isDefault ? 'border-[#D4AF37]/30' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-bold text-[#3E2723]">{address.label}</h3>
                              {address.isDefault && (
                                <span className="bg-[#8B0000] text-white text-xs px-2 py-1 rounded">Default</span>
                              )}
                            </div>
                            <p className="text-gray-700">{address.name}</p>
                            <p className="text-gray-600 text-sm mt-1">{address.address}</p>
                            <p className="text-gray-600 text-sm">{address.city}, {address.state} - {address.pincode}</p>
                            <p className="text-gray-600 text-sm mt-2">Phone: {address.phone}</p>
                            {!address.isDefault && (
                              <button
                                onClick={() => handleSetDefaultAddress(address.id)}
                                className="text-[#8B0000] hover:text-[#6B0000] text-sm font-medium mt-2"
                              >
                                Set as Default
                              </button>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditAddress(address)}
                              className="text-[#8B0000] hover:text-[#6B0000] p-2"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleDeleteAddress(address.id)}
                              className="text-red-600 hover:text-red-700 p-2"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Account Settings</h2>

                <div className="space-y-6">
                  {/* Change Password */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-[#3E2723] mb-4">Change Password</h3>
                    <div className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <button className="bg-[#8B0000] text-white px-6 py-3 rounded-lg hover:bg-[#6B0000] transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Email Preferences */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-[#3E2723] mb-4">Email Preferences</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B0000] rounded" />
                        <span className="text-gray-700">Order updates and notifications</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B0000] rounded" />
                        <span className="text-gray-700">New arrivals and exclusive offers</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-[#8B0000] rounded" />
                        <span className="text-gray-700">Promotional emails and newsletters</span>
                      </label>
                    </div>
                  </div>

                  {/* Delete Account */}
                  <div>
                    <h3 className="text-lg font-bold text-[#3E2723] mb-4">Delete Account</h3>
                    <p className="text-gray-600 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                      Delete My Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Address Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#3E2723]">
                  {editingAddressId ? 'Edit Address' : 'Add New Address'}
                </h2>
                <button
                  onClick={() => setShowAddressModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Label <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressFormData.label}
                    onChange={(e) => setAddressFormData({ ...addressFormData, label: e.target.value })}
                    placeholder="e.g., Home, Office, etc."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressFormData.name}
                    onChange={(e) => setAddressFormData({ ...addressFormData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={addressFormData.phone}
                    onChange={(e) => setAddressFormData({ ...addressFormData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={addressFormData.address}
                    onChange={(e) => setAddressFormData({ ...addressFormData, address: e.target.value })}
                    placeholder="House/Flat No., Street, Area"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressFormData.city}
                    onChange={(e) => setAddressFormData({ ...addressFormData, city: e.target.value })}
                    placeholder="Enter city"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressFormData.state}
                    onChange={(e) => setAddressFormData({ ...addressFormData, state: e.target.value })}
                    placeholder="Enter state"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressFormData.pincode}
                    onChange={(e) => setAddressFormData({ ...addressFormData, pincode: e.target.value })}
                    placeholder="Enter 6-digit pincode"
                    maxLength={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addressFormData.isDefault}
                      onChange={(e) => setAddressFormData({ ...addressFormData, isDefault: e.target.checked })}
                      className="w-5 h-5 text-[#8B0000] rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Set as default address</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleSaveAddress}
                  className="flex-1 bg-[#8B0000] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
                >
                  {editingAddressId ? 'Update Address' : 'Save Address'}
                </button>
                <button
                  onClick={() => setShowAddressModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
