import { Heart, Users, Award, Truck } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-[#FFF8DC]/80 max-w-3xl mx-auto">
            From Street Side to India-Wide - A Family Legacy Built on Trust, Quality & Customer Satisfaction
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6">A Family Legacy Built on Trust</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our story began in 1994 on the streets of Rewa, where our father started selling sarees with nothing but dedication
                and a dream. What he built through 30+ years of hard work and customer relationships became the foundation of
                Shyamasaree. His sons have carried forward this legacy, transforming the street-side business into an authorized
                wholesale dealer for India's most prestigious saree brands.
              </p>
              <p>
                Today, we partner with premium brands like Kayan Silks, Dhanlaxmi, Rekhraj Sarees, Varni, Vijay Laxmi,
                Chechani Sarees, and Ujala Fashion. Our approach is simple: curate trending, authentic products through
                detailed market analysis and decades of combined experience. Every saree in our collection is selected
                with the same care and eye for quality that our father taught us on those streets years ago.
              </p>
              <p>
                As we bring our business online, our core values remain unchanged - customer satisfaction above all,
                uncompromising quality, authentic products, and staying ahead of trends. Whether you're a retail customer
                looking for that perfect saree or a business seeking wholesale partnerships, you're part of our extended
                family.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#8B0000] to-[#D4AF37] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Journey in Numbers</h3>
            <div className="space-y-6">
              <div>
                <div className="text-5xl font-bold mb-2">30+</div>
                <p className="text-[#FFF8DC]">Years of Trust & Excellence</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <p className="text-[#FFF8DC]">Happy Customers</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-[#FFF8DC]">Unique Saree Designs</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20-40%</div>
                <p className="text-[#FFF8DC]">Average Savings vs Competitors</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#3E2723] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every saree is handpicked and quality-checked to ensure you receive only the finest products
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Authenticity</h3>
              <p className="text-gray-600">
                100% genuine products from authorized brand partners like Kayan Silks, Dhanlaxmi, and Rekhraj Sarees
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Customer Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency, honesty, and exceptional service
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-[#FFF8DC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-[#8B0000]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                Competitive wholesale pricing on premium brands that saves you 20-40% compared to retail stores
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Shyamasaree?</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-[#FFF8DC]">
            <p className="text-lg">
              With 30+ years of experience in the saree industry, we understand what makes a saree truly special.
              As an authorized wholesale dealer for India's top brands like Kayan Silks, Dhanlaxmi, Rekhraj Sarees,
              Varni, Vijay Laxmi, Chechani Sarees, and Ujala Fashion, we bring you access to premium collections
              at competitive wholesale prices.
            </p>
            <p className="text-lg">
              When you shop with Shyamasaree, you're not just buying a saree. You're getting authentic products
              from trusted brands, supporting traditional craftsmanship, and becoming part of a family that has
              been serving customers with dedication and integrity for over 30 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
