import React from 'react';
import type { Metadata } from 'next';
import LocationSection from '@/components/LocationSection';
import CtaSection from '@/components/CtaSection';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ExternalLinkIcon } from '@/components/icons';
import { restaurantInfo } from '@/data/restaurantInfo';

export const metadata: Metadata = {
  title: "Contact Us & Location | 99 Dosa Xpress Sarsuna Kolkata",
  description: "Contact 99 Dosa Xpress on Sarsuna Main Road near 7A Bus Stand, Kolkata. Call 9071321941 or 9732990100 for orders, directions, and inquiries.",
  alternates: {
    canonical: "https://www.99dosaxpress.com/contact/",
  },
  openGraph: {
    title: "Contact & Directions — 99 Dosa Xpress Kolkata",
    description: "Visit 99 Dosa Xpress in Sarsuna Kolkata. Click-to-call, WhatsApp orders, and Google Maps navigation.",
    url: "https://www.99dosaxpress.com/contact/",
  },
};

export default function ContactPage() {
  const encodedMessage = encodeURIComponent(restaurantInfo.whatsapp.message);
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp.number}?text=${encodedMessage}`;

  return (
    <div className="bg-[#FDFBF7]">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#0D3823] to-[#0A2617] text-white py-14 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none kolam-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            We are Here to Serve You
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4 font-serif">
            Contact &amp; Visit 99 Dosa Xpress
          </h1>
          <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-[#F3F4F6]/90 max-w-2xl mx-auto leading-relaxed">
            Stop by for crispy dosas near Sarsuna 7A Bus Stand or call ahead for quick food pickup and takeaway orders.
          </p>
        </div>
      </section>

      {/* Quick Direct Action Cards */}
      <section className="py-10 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Call Primary */}
            <a
              href={`tel:${restaurantInfo.phones.primary}`}
              className="bg-white rounded-2xl p-6 border border-[#E8E2D8] shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium">Primary Contact</span>
                <p className="font-bold text-gray-900 group-hover:text-[#EA580C] transition-colors text-sm sm:text-base">
                  +91 {restaurantInfo.phones.display1}
                </p>
              </div>
            </a>

            {/* Call Secondary */}
            <a
              href={`tel:${restaurantInfo.phones.secondary}`}
              className="bg-white rounded-2xl p-6 border border-[#E8E2D8] shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0D3823] text-[#FEF3C7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium">Alternate Line</span>
                <p className="font-bold text-gray-900 group-hover:text-[#0D3823] transition-colors text-sm sm:text-base">
                  +91 {restaurantInfo.phones.display2}
                </p>
              </div>
            </a>

            {/* WhatsApp Chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 border border-[#E8E2D8] shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium">WhatsApp Orders</span>
                <p className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors text-sm sm:text-base">
                  Chat Directly
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Main Location Section with Map */}
      <LocationSection />

      {/* Getting Here Guide */}
      <section className="py-12 bg-[#FAF6ED] border-t border-[#ECE5D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#0D3823] font-serif mb-4 text-center">
            How to Reach 99 Dosa Xpress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="p-5 bg-white rounded-2xl border border-[#E2DAD0]">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-[#D97706]" />
                <span>By Bus / Public Transport</span>
              </h3>
              <p className="leading-relaxed text-gray-600 text-xs sm:text-sm">
                Take any bus towards Sarsuna / Shakuntala Park and disembark at the <strong>Sarsuna 7A Bus Stand</strong>. We are situated within a few paces on Sarsuna Main Road.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#E2DAD0]">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <ExternalLinkIcon className="w-4 h-4 text-[#D97706]" />
                <span>By Auto / Two-Wheeler</span>
              </h3>
              <p className="leading-relaxed text-gray-600 text-xs sm:text-sm">
                Direct autos run from Behala Chowrasta and Shakuntala Park to Sarsuna 7A Bus Stand. Quick parking is available along the street for takeaway pickups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
