import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeafIcon, ShieldCheckIcon, SparklesIcon, HeartIcon, PhoneIcon, ArrowRightIcon } from '@/components/icons';
import { restaurantInfo } from '@/data/restaurantInfo';
import CtaSection from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "About Us | Authentic South Indian Restaurant in Kolkata",
  description: "Learn about 99 Dosa Xpress, our journey of bringing authentic South Indian breakfast and meals to Sarsuna, Kolkata near 7A Bus Stand.",
  alternates: {
    canonical: "https://www.99dosaxpress.com/about/",
  },
  openGraph: {
    title: "About 99 Dosa Xpress — Authentic South Indian Food in Kolkata",
    description: "Bringing genuine South Indian flavours, stone-ground batters, and hot crispy dosas to Sarsuna, Kolkata.",
    url: "https://www.99dosaxpress.com/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF7]">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#0D3823] to-[#0A2617] text-white py-14 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none kolam-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            Our Heritage &amp; Commitment
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4 font-serif">
            About 99 Dosa Xpress
          </h1>
          <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-[#F3F4F6]/90 max-w-2xl mx-auto leading-relaxed">
            Crafting genuine South Indian culinary delights right in the heart of Sarsuna, Kolkata.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Story Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider">How We Began</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3823] font-serif">
                Bringing Real South Indian Flavours to Sarsuna
              </h2>
              <p>
                Kolkata is globally renowned as a city of passionate food lovers. While street food and regional delicacies abound, finding genuinely authentic, unadulterated South Indian food prepared with traditional methods has often been difficult.
              </p>
              <p>
                <strong>99 Dosa Xpress</strong> was founded on a simple yet unwavering belief: people in Sarsuna and South Kolkata deserve hot, freshly prepared, authentic South Indian delicacies without compromise on taste, hygiene, or affordability.
              </p>
              <p>
                Situated prominently on Sarsuna Main Road, right near the landmark Sarsuna 7A Bus Stand, we have become the go-to destination for locals craving crispy golden dosas, pillowy-soft idlis, and deeply comforting bowls of hot sambar.
              </p>
            </div>
            <div className="md:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/hero-dosa.jpg"
                alt="Fresh crispy dosa at 99 Dosa Xpress Kolkata"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Pillars of Kitchen */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EBE4D6] shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider">The 99 Dosa Xpress Standard</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0D3823] mt-1 font-serif">
                Four Pillars of Our Kitchen
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#ECE5D8] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D3823] text-[#FEF3C7] flex items-center justify-center shrink-0">
                  <LeafIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Naturally Fermented Batters</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our batters are ground fresh from quality urad dal and rice, fermented naturally under monitored temperatures to yield tender textures and classic aroma.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#ECE5D8] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D3823] text-[#FEF3C7] flex items-center justify-center shrink-0">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Fresh Chutneys &amp; Sambar</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    We grind our coconut chutney multiple times throughout the day and simmer our sambar with freshly crushed whole spices, drumsticks, and tamarind.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#ECE5D8] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D3823] text-[#FEF3C7] flex items-center justify-center shrink-0">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Quality Dairy &amp; Ghee</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    We use authentic dairy butter, rich desi ghee, and fresh cottage cheese (paneer) so each bite is flavorful and nourishing.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#ECE5D8] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D3823] text-[#FEF3C7] flex items-center justify-center shrink-0">
                  <HeartIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Warm Hospitality</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    We welcome every guest as family. Fast service, prompt packing for takeaway, and smiles with every order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Callout Banner */}
          <div className="bg-[#FAF6ED] rounded-3xl p-8 border border-[#E5DFD1] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-[#0D3823] font-serif mb-1">
                Visit Us at Sarsuna Main Road
              </h3>
              <p className="text-sm text-gray-600">
                Near Sarsuna 7A Bus Stand, Kolkata - 700061. Call ahead for quick takeaways!
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/menu"
                className="px-5 py-2.5 rounded-xl font-bold text-white bg-[#0D3823] hover:bg-[#072315] text-sm"
              >
                View Menu
              </Link>
              <a
                href={`tel:${restaurantInfo.phones.primary}`}
                className="px-5 py-2.5 rounded-xl font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] text-sm flex items-center gap-1.5"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <CtaSection />
    </div>
  );
}
