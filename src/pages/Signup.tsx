import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Phone, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    // In real app, this would call an API
    // For now, set localStorage to simulate signup and auto-login
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userName', formData.fullName);

    // Trigger custom event to notify Header
    window.dispatchEvent(new Event('login'));

    toast.success('Account created successfully! Redirecting...');

    // Redirect to account page
    setTimeout(() => {
      navigate('/account');
      // Force a re-render after navigation
      window.dispatchEvent(new Event('login'));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-[#8B0000] to-[#D4AF37] bg-clip-text text-transparent">
            <h1 className="text-4xl font-bold">SHYAMASAREE</h1>
          </div>
          <p className="text-gray-600 mt-2">Create your account to start shopping</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  placeholder="Create a password (min. 8 characters)"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B0000] focus:outline-none"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="w-4 h-4 mt-1 text-[#8B0000] rounded focus:ring-[#8B0000]"
                  required
                />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-[#8B0000] hover:text-[#6B0000] font-medium">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-[#8B0000] hover:text-[#6B0000] font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-3 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Create Account</span>
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Social Signup */}
          <button className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-medium text-gray-700">Continue with Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-[#8B0000] hover:text-[#6B0000] font-bold">
              Login
            </Link>
          </p>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Secure registration powered by <span className="font-medium text-[#8B0000]">Shyamasaree</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            15+ Years of Trust | 1000+ Happy Customers
          </p>
        </div>
      </div>
    </div>
  );
}
