import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import MenuSection from '@/components/MenuSection';
import CtaSection from '@/components/CtaSection';
import { PhoneIcon } from '@/components/icons';
import { restaurantInfo } from '@/data/restaurantInfo';

export const metadata: Metadata = {
  title: "Full South Indian Menu & Prices | 99 Dosa Xpress Kolkata",
  description: "Browse the complete menu of 99 Dosa Xpress in Sarsuna Kolkata: 27 varieties of crispy Dosa, soft Idli, Medu Vada, and Uttapam. Affordable prices from ₹40.",
  alternates: {
    canonical: "https://www.99dosaxpress.com/menu/",
  },
  openGraph: {
    title: "99 Dosa Xpress Menu — Dosa, Idli, Vada & Uttapam in Kolkata",
    description: "Authentic South Indian menu with 42 delicious items. Plain, Masala, Butter, Ghee, Mysore, Schezwan & Special Dosas.",
    url: "https://www.99dosaxpress.com/menu/",
  },
};

export default function MenuPage() {
  return (
    <div className="bg-[#FDFBF7]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#0D3823] to-[#0A2617] text-white py-12 lg:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none kolam-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            99 Dosa Xpress • Sarsuna Kolkata
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4 font-serif">
            Our Complete South Indian Menu
          </h1>
          <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-[#F3F4F6]/90 max-w-2xl mx-auto leading-relaxed">
            Prepared fresh to order with pure ingredients, authentic South Indian spices, aromatic ghee, and homemade chutneys.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${restaurantInfo.phones.primary}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] shadow-md transition-all text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call to Order: {restaurantInfo.phones.display1}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Component with client search & category tabs */}
      <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading menu...</div>}>
        <MenuSection showTitle={false} />
      </Suspense>

      {/* Original Printed Menu Reference Section */}
      <section className="py-12 bg-white border-t border-[#ECE5D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold text-[#D97706] tracking-wider uppercase">Authentic Restaurant Menu Card</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D3823] mt-1 mb-6 font-serif">
            Physical Menu Card Reference
          </h2>
          <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF6ED]">
            <Image
              src="/images/menu-card.jpg"
              alt="99 Dosa Xpress official restaurant printed menu card showing all dishes and prices"
              width={600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Official menu card of 99 Dosa Xpress, Sarsuna Main Road, Near Sarsuna 7A Bus Stand, Kolkata. All prices inclusive.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection />
    </div>
  );
}
