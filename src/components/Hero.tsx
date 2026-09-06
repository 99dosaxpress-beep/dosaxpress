import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, LeafIcon, SparklesIcon, ArrowRightIcon } from './icons';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0D3823] via-[#0E3E27] to-[#0A2617] text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none kolam-pattern" />
      
      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D97706]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7]/15 border border-[#F59E0B]/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#FEF3C7] tracking-wider uppercase">
                99 Dosa Xpress • Sarsuna, Kolkata
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none text-white font-serif">
              Authentic South Indian <br className="hidden sm:block" />
              <span className="text-[#F59E0B] drop-shadow-sm">Taste in Kolkata</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-[#F3F4F6]/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Freshly prepared Idli, Dosa, Vada &amp; Uttapam made with authentic South Indian flavours, traditional stone-ground batters, and piping hot sambar.
            </p>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm text-[#FEF3C7]/90 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <LeafIcon className="w-4 h-4 text-emerald-400" />
                100% Pure Veg Traditional Batter
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <SparklesIcon className="w-4 h-4 text-[#F59E0B]" />
                Near Sarsuna 7A Bus Stand
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-[#0D3823] bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] hover:brightness-105 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>Explore Menu</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${restaurantInfo.phones.primary}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] border border-[#EA580C] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call Now: {restaurantInfo.phones.display1}</span>
              </a>
            </div>

            {/* Subtle address badge for local SEO intent */}
            <div className="pt-2 text-xs sm:text-sm text-emerald-200/80">
              📍 Sarsuna Main Road, Near Sarsuna 7A Bus Stand, Kolkata - 700061
            </div>
          </div>

          {/* Right Column: Hero Visual Food Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#D97706]/40 via-[#FEF3C7]/20 to-[#0D3823]/60 shadow-2xl backdrop-blur-sm ring-1 ring-white/20">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0A2617]">
                  <Image
                    src="/images/hero-dosa.jpg"
                    alt="Authentic Mysore Masala Dosa served on banana leaf with sambar and chutneys at 99 Dosa Xpress Kolkata"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Price / Tag on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs sm:text-sm bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl text-white border border-white/20">
                    <span className="font-semibold text-[#FEF3C7]">Special Masala Dosa Platter</span>
                    <span className="font-bold text-[#F59E0B] text-base">Starting ₹60</span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Highlight Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-[#1F2937] p-3 sm:p-4 rounded-2xl shadow-2xl border border-[#E5E7EB] flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-black text-lg shadow-inner">
                  42+
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 leading-tight">Fresh South Indian Dishes</p>
                  <p className="text-[11px] text-gray-500">Dosa • Idli • Vada • Uttapam</p>
                </div>
              </div>

              {/* Verified Quality Badge */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-[#EA580C] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg tracking-wide flex items-center gap-1.5">
                <span>★ Made Fresh To Order</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
