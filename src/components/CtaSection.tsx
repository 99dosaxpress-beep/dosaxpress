import React from 'react';
import Link from 'next/link';
import { PhoneIcon, ArrowRightIcon, LeafIcon } from './icons';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function CtaSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-r from-[#072315] via-[#0D3823] to-[#0A2617] text-white overflow-hidden">
      {/* Decorative Kolam Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none kolam-pattern" />
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Leaf Accent */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D97706]/20 text-[#F59E0B] mb-4 border border-[#F59E0B]/30">
          <LeafIcon className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-serif">
          Craving Authentic South Indian Food?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#F3F4F6]/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Enjoy freshly prepared Idli, Dosa, Vada &amp; Uttapam at 99 Dosa Xpress in Sarsuna, Kolkata.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-[#0D3823] bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] hover:brightness-105 shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <span>View Menu</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${restaurantInfo.phones.primary}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Call Now: {restaurantInfo.phones.display1}</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-[#FEF3C7]/70">
          Open daily for takeaway &amp; dining near Sarsuna 7A Bus Stand, Kolkata - 700061
        </p>

      </div>
    </section>
  );
}
