import React from 'react';
import { LeafIcon, SparklesIcon, FlameIcon, HeartIcon } from './icons';

export default function Highlights() {
  const features = [
    {
      title: "Fresh Ingredients",
      desc: "Fresh stone-ground batter, pure spices, fresh coconut, and handpicked vegetables every single day.",
      icon: LeafIcon,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      title: "Authentic South Indian Taste",
      desc: "Traditional South Indian cooking techniques for that classic crispy texture and fragrant aroma.",
      icon: SparklesIcon,
      color: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      title: "Made Fresh to Order",
      desc: "Every Dosa, Idli, and Uttapam is prepared live on the tawa and steamer right when you order it.",
      icon: FlameIcon,
      color: "text-orange-700 bg-orange-50 border-orange-200",
    },
    {
      title: "Good Food • Good Mood",
      desc: "Crafted with passion, warmth, and genuine South Indian hospitality to brighten your dining experience.",
      icon: HeartIcon,
      color: "text-rose-700 bg-rose-50 border-rose-200",
    },
  ];

  return (
    <section className="py-10 bg-[#FDFBF7] relative -mt-6 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#EBE3D5] flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border ${feature.color} shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h2 className="text-lg font-bold text-[#1F2937] mb-2 font-sans">
                  {feature.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
