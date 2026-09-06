import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from './icons';

export default function PopularDishes() {
  const categories = [
    {
      id: 'dosa',
      name: 'Crispy Dosa',
      count: '27 Varieties',
      price: 'From ₹60',
      image: '/images/hero-dosa.jpg',
      description: 'Thin, crispy fermented crepes filled with spiced potato masala, cheese, paneer, Mysore butter, or Schezwan zest.',
    },
    {
      id: 'idli',
      name: 'Steamed Idli',
      count: '5 Varieties',
      price: 'From ₹40',
      image: '/images/idli.jpg',
      description: 'Fluffy, cloud-soft steamed rice cakes paired with steaming vegetable sambar and fresh coconut chutney.',
    },
    {
      id: 'vada',
      name: 'Crispy Vada',
      count: '3 Varieties',
      price: 'From ₹40',
      image: '/images/vada.jpg',
      description: 'Golden-brown crispy urad dal fritters served fresh, dipped in sambar, or chilled in seasoned creamy curd.',
    },
    {
      id: 'uttapam',
      name: 'Fluffy Uttapam',
      count: '7 Varieties',
      price: 'From ₹90',
      image: '/images/uttapam.jpg',
      description: 'Thick, savory South Indian pancakes generously studded with onions, ripe tomatoes, fresh paneer, and cheese.',
    },
  ];

  return (
    <section className="py-16 bg-[#FAF6ED] border-y border-[#ECE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D97706] uppercase">
            Signature Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3823] mt-2 mb-4 font-serif">
            Our Popular South Indian Dishes
          </h2>
          <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Every dish is prepared using time-honored South Indian fermentation techniques and served fresh in Sarsuna, Kolkata.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D5] flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={cat.image}
                  alt={`Authentic ${cat.name} at 99 Dosa Xpress Kolkata`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#0D3823]/90 text-[#FEF3C7] text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {cat.price}
                </div>
                <div className="absolute bottom-2 left-3 bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {cat.count}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1F2937] group-hover:text-[#0D3823] transition-colors mb-2 font-serif">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <Link
                  href={`/menu?category=${cat.id}`}
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-gray-100 text-sm font-semibold text-[#0D3823] group-hover:text-[#EA580C] transition-colors"
                >
                  <span>View Menu</span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF6ED] flex items-center justify-center group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-[#0D3823] hover:bg-[#072315] shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore Complete 42-Item Menu</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
