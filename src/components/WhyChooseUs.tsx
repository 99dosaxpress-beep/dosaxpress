import React from 'react';
import { SparklesIcon, FlameIcon, ShieldCheckIcon, StarIcon } from './icons';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Authentic South Indian Flavours",
      desc: "True-to-tradition recipes, stone-ground batter, and freshly tempered sambar & chutneys that recreate genuine South Indian dining right here in Kolkata.",
      icon: SparklesIcon,
      badge: "Traditional Recipe",
    },
    {
      title: "Freshly Prepared Food",
      desc: "Every order of crispy dosa, soft idli, or savory uttapam is freshly cooked upon request on hot cast-iron tawas—never pre-made or reheated.",
      icon: FlameIcon,
      badge: "Live Tawa",
    },
    {
      title: "Quality Ingredients",
      desc: "We use only pure ghee, fresh dairy butter, authentic spices, and farm-fresh vegetables for clean, wholesome, and nutritious meals.",
      icon: ShieldCheckIcon,
      badge: "Pure & Hygienic",
    },
    {
      title: "Affordable Prices",
      desc: "Enjoying premium, authentic South Indian cuisine should be accessible to everyone. Our complete menu is priced affordably starting from ₹40.",
      icon: StarIcon,
      badge: "Best Value",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF6ED] border-t border-[#ECE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D97706] uppercase">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3823] mt-2 mb-4 font-serif">
            Why Choose 99 Dosa Xpress
          </h2>
          <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Discover why locals in Sarsuna and across Kolkata trust us for their daily cravings of authentic, crispy South Indian food.
          </p>
        </div>

        {/* Benefits 4-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E8E2D8] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0D3823] text-[#FEF3C7] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#D97706] bg-[#FEF3C7] px-2.5 py-1 rounded-full">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#0D3823]">
                  <span>✓ 100% Customer Satisfaction</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
