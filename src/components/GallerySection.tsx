import React from 'react';
import Image from 'next/image';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FDFBF7] border-t border-[#ECE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Image
              src="/images/WhatsApp Image 2026-11-17 at 10.18.56 PM (2).jpeg"
              alt="Customer ordering at the 99 Dosa Xpress counter in Sarsuna, Kolkata"
              width={1600}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              className="w-full h-auto rounded-lg object-cover shadow-xl"
            />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D97706] uppercase">
              From Our Neighborhood
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3823] font-serif">
              Local Flavours, Friendly Service
            </h2>
            <div className="w-20 h-1 bg-[#D97706] rounded-full" />
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Stop by our counter on Sarsuna Main Road to order freshly prepared South Indian favourites. We love serving our neighbours in Sarsuna and the surrounding Kolkata community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
