import { useState } from 'react';
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, DollarSign, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: '',
    coverLetter: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted! We will review and contact you soon.', {
      duration: 5000,
      icon: '🎉'
    });
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: '',
      coverLetter: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openPositions = [
    {
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Rewa, Madhya Pradesh',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3-5 LPA',
      description: 'Drive B2B sales, manage client relationships, and expand our wholesale dealer network across India.'
    },
    {
      title: 'Customer Support Specialist',
      department: 'Customer Service',
      location: 'Rewa, Madhya Pradesh',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹2.5-4 LPA',
      description: 'Provide exceptional customer service, handle inquiries, and ensure customer satisfaction.'
    },
    {
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Rewa, Madhya Pradesh',
      type: 'Full-time (Hybrid)',
      experience: '3-5 years',
      salary: '₹4-7 LPA',
      description: 'Lead digital marketing campaigns, manage social media, SEO, and drive online sales growth.'
    },
    {
      title: 'Warehouse Associate',
      department: 'Operations',
      location: 'Rewa, Madhya Pradesh',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹2-3 LPA',
      description: 'Manage inventory, handle packaging and shipping, and ensure smooth warehouse operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-[#FFF8DC]/80 max-w-3xl mx-auto">
            Build your career with India's trusted wholesale dealer of premium saree brands
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-12">Why Work with Shyamasaree?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">
                15+ years in business with continuous expansion. Grow your career with us.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Great Team Culture</h3>
              <p className="text-gray-600 text-sm">
                Work with passionate professionals in a collaborative and supportive environment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Competitive Compensation</h3>
              <p className="text-gray-600 text-sm">
                Attractive salary packages, performance bonuses, and comprehensive benefits.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Work-Life Balance</h3>
              <p className="text-gray-600 text-sm">
                Flexible schedules, paid time off, and employee wellness programs.
              </p>
            </div>
          </div>
        </div>

        {/* Employee Benefits */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-8">Employee Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#3E2723]">Health Insurance</h4>
                <p className="text-sm text-gray-600">Comprehensive medical coverage for you and your family</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#3E2723]">Performance Bonuses</h4>
                <p className="text-sm text-gray-600">Quarterly and annual performance-based incentives</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#3E2723]">Paid Time Off</h4>
                <p className="text-sm text-gray-600">Generous vacation, sick leave, and public holidays</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#3E2723]">Training & Development</h4>
                <p className="text-sm text-gray-600">Regular skill development programs and workshops</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#3E2723]">Employee Discounts</h4>
                <p className="text-sm text-gray-600">Special discounts on our entire saree collection</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <h4 className="font-bold text-[#3E2723]">Career Advancement</h4>
                <p className="text-sm text-gray-600">Clear career paths with promotion opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#3E2723] mb-2">{job.title}</h3>
                    <p className="text-[#8B0000] font-medium mb-3">{job.department}</p>
                  </div>
                  <a
                    href="#apply"
                    className="bg-[#8B0000] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6B0000] transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-[#8B0000]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-[#8B0000]" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Briefcase size={16} className="text-[#8B0000]" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign size={16} className="text-[#8B0000]" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" className="bg-white rounded-lg shadow-xl p-8 md:p-12 scroll-mt-8">
          <div className="text-center mb-8">
            <Briefcase className="mx-auto mb-4 text-[#8B0000]" size={48} />
            <h2 className="text-3xl font-bold text-[#3E2723] mb-4">Apply for a Position</h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 48 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  placeholder="Your full name"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Position Applied For *
                </label>
                <select
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                >
                  <option value="">Select position</option>
                  <option value="sales">Sales Executive</option>
                  <option value="support">Customer Support Specialist</option>
                  <option value="marketing">Digital Marketing Manager</option>
                  <option value="warehouse">Warehouse Associate</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Years of Experience *
              </label>
              <select
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years (Fresher)</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Resume/CV Link *
              </label>
              <input
                type="url"
                name="resume"
                required
                value={formData.resume}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                placeholder="https://drive.google.com/... or LinkedIn profile"
              />
              <p className="text-xs text-gray-600 mt-2">
                Upload your resume to Google Drive, Dropbox, or share your LinkedIn profile URL
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Cover Letter / Why should we hire you?
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors resize-none"
                placeholder="Tell us about yourself, your skills, and why you're a great fit for this role..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B0000] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#6B0000] transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Submit Application
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              We review all applications and will contact shortlisted candidates within 48 hours
            </p>
          </form>
        </div>

        {/* Contact HR */}
        <div className="mt-12 bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="text-[#FFF8DC]/80 mb-6">
            Contact our HR team for any career-related inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div>
              <p className="text-[#FFF8DC]/60 mb-1">Email</p>
              <a href="mailto:careers@shyamasaree.com" className="font-medium hover:text-[#D4AF37]">
                careers@shyamasaree.com
              </a>
            </div>
            <div className="hidden sm:block text-[#FFF8DC]/40">|</div>
            <div>
              <p className="text-[#FFF8DC]/60 mb-1">Phone</p>
              <a href="tel:+916260843969" className="font-medium hover:text-[#D4AF37]">
                +91 62608 43969
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
