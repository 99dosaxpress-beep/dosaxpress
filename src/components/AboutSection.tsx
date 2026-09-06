import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LeafIcon, ShieldCheckIcon, HeartIcon, ArrowRightIcon } from './icons';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-t border-[#ECE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF6ED]">
                <Image
                  src="/images/idli.jpg"
                  alt="Traditional South Indian breakfast at 99 Dosa Xpress Sarsuna Kolkata"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/vada.jpg"
                  alt="Crisp medu vada with sambar at 99 Dosa Xpress Kolkata"
                  fill
                  sizes="300px"
                  className="object-cover object-center"
                />
              </div>

              {/* Heritage Badge */}
              <div className="absolute top-4 -left-4 bg-[#0D3823] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-[#D97706]/40">
                <HeartIcon className="w-5 h-5 text-[#F59E0B]" />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#FEF3C7]">Crafted With Care</p>
                  <p className="text-[10px] text-gray-300">Sarsuna, Kolkata</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D97706] uppercase">
                Our Story &amp; Passion
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D3823] mt-2 mb-4 font-serif">
                About 99 Dosa Xpress
              </h2>
              <div className="w-20 h-1 bg-[#D97706] rounded-full mb-6" />
            </div>

            <div className="prose text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Welcome to <strong>99 Dosa Xpress</strong>, where authentic South Indian culinary traditions meet the vibrant food culture of Kolkata. Conveniently located on Sarsuna Main Road near the well-known Sarsuna 7A Bus Stand, our kitchen is dedicated to serving hot, wholesome, and delightfully crisp South Indian favorites every day.
              </p>
              <p>
                We believe that great South Indian food begins with honest preparation. Our batters are naturally fermented using premium urad dal and aged rice, stone-ground to the ideal consistency. From our wafer-crisp <em>Paper Dosas</em> and aromatic <em>Desi Ghee Masala Dosas</em> to cloud-soft steamed <em>Idlis</em>, golden-fried <em>Medu Vadas</em>, and hearty <em>Uttapams</em>, every order is made fresh on the hot tawa.
              </p>
              <p>
                No South Indian meal is complete without the condiments. That is why our steaming vegetable sambar is simmered slowly with authentic spices, drumsticks, and tamarind, accompanied by our signature fresh coconut and piquant tomato-garlic chutneys prepared throughout the day.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF6ED] border border-[#ECE5D8]">
                <LeafIcon className="w-5 h-5 text-[#0D3823] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Natural Fermentation</h4>
                  <p className="text-xs text-gray-600">Zero artificial soda or preservatives in our batters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF6ED] border border-[#ECE5D8]">
                <ShieldCheckIcon className="w-5 h-5 text-[#0D3823] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Hygiene &amp; Cleanliness</h4>
                  <p className="text-xs text-gray-600">Strict hygiene protocols for wholesome family dining.</p>
                </div>
              </div>
            </div>

            {/* Read Menu CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0D3823] hover:bg-[#072315] shadow-sm transition-all text-sm"
              >
                <span>Read Full Story</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0D3823] bg-[#FAF6ED] hover:bg-[#ECE5D8] border border-[#D97706]/30 transition-all text-sm"
              >
                <span>Find Us in Sarsuna</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
