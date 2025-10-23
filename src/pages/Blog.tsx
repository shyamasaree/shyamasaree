import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { handleImageError } from '../utils/imageUtils';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Saree Knowledge Hub</h1>
          <p className="text-xl text-[#FFF8DC]/80 max-w-3xl mx-auto">
            Expert guides, styling tips, and everything you need to know about sarees - from our 15+ years of experience
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#8B0000] text-white shadow-lg scale-105'
                  : 'bg-white text-[#3E2723] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#8B0000] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-[#3E2723] mb-3 line-clamp-2 group-hover:text-[#8B0000] transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 text-xs bg-[#FFF8DC] text-[#3E2723] px-2 py-1 rounded"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-[#8B0000] font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Read Article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Sarees?</h2>
          <p className="text-[#FFF8DC]/90 mb-6">
            Our team with 15+ years of experience is here to help you choose the perfect saree
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#D4AF37] text-[#3E2723] px-8 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors"
            >
              Contact Our Experts
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#8B0000] transition-colors"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
