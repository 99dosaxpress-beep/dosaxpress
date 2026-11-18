import React from 'react';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, ClockIcon, ExternalLinkIcon } from './icons';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function LocationSection() {
  return (
    <section id="contact" className="py-16 bg-white border-t border-[#ECE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D97706] uppercase">
            Locate Us in Kolkata
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3823] mt-2 mb-4 font-serif">
            Visit 99 Dosa Xpress
          </h2>
          <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Join us for hot and crispy South Indian favorites right on Sarsuna Main Road, conveniently located near the 7A Bus Stand.
          </p>
        </div>

        {/* Location & Map Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF6ED] rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D3823] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <MapPinIcon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">
                    Restaurant Address
                  </h3>
                  <address className="not-italic text-sm text-gray-700 leading-relaxed font-sans">
                    <strong className="text-gray-950 block">99 Dosa Xpress</strong>
                    {restaurantInfo.address.street},<br />
                    {restaurantInfo.address.landmark},<br />
                    {restaurantInfo.address.locality}, {restaurantInfo.address.city} - {restaurantInfo.address.pincode},<br />
                    {restaurantInfo.address.state}, {restaurantInfo.address.country}
                  </address>
                </div>
              </div>

              {/* Landmark Callout */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E2DAD0] text-xs sm:text-sm text-gray-700">
                <strong className="text-[#0D3823]">Landmark:</strong> Directly near <strong>Sarsuna 7A Bus Stand</strong>. Easily reachable from Behala, Shakuntala Park, and surrounding South Kolkata neighborhoods.
              </div>

              {/* Clickable Phone Numbers Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D3823] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <PhoneIcon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-gray-900 font-sans">
                    Contact &amp; Orders
                  </h3>
                  <p className="text-xs text-gray-600">
                    Tap to call for takeaway, bulk orders, or inquiries:
                  </p>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <a
                      href={`tel:${restaurantInfo.phones.primary}`}
                      className="text-base font-bold text-[#0D3823] hover:text-[#EA580C] hover:underline flex items-center gap-1.5"
                    >
                      <span>📞 +91 {restaurantInfo.phones.display1}</span>
                    </a>
                    <a
                      href={`tel:${restaurantInfo.phones.secondary}`}
                      className="text-base font-bold text-[#0D3823] hover:text-[#EA580C] hover:underline flex items-center gap-1.5"
                    >
                      <span>📞 +91 {restaurantInfo.phones.display2}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D3823] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <ClockIcon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 font-sans">
                    Fresh Daily Service
                  </h3>
                  <p className="text-sm text-gray-700">
                    Dine-in, takeaway, and quick pickup available. Hot, freshly made food on order.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-[#E5E0D5] mt-6 flex flex-col gap-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:${restaurantInfo.phones.primary}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] shadow-sm transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>Call {restaurantInfo.phones.display1}</span>
                </a>
                <a
                  href={`tel:${restaurantInfo.phones.secondary}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#0D3823] bg-white hover:bg-gray-50 border border-[#D97706]/40 shadow-xs transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>Call {restaurantInfo.phones.display2}</span>
                </a>
              </div>

              <a
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0D3823] hover:bg-[#072315] shadow-md transition-all"
              >
                <MapPinIcon className="w-4 h-4 text-[#F59E0B]" />
                <span>Get Directions on Google Maps</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-white/80" />
              </a>
            </div>

          </div>

          {/* Interactive Lightweight Map Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#E8E2D8] shadow-sm flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#E0D8CA] bg-[#E8E2D8]">
              {/* Lightweight Interactive Google Maps Embed (No API Key Required) */}
    
              <iframe
  title="99 Dosa Xpress Sarsuna Kolkata Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6!2d88.2952369!3d22.4798633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzM5LjUiTiA4OMKwMTcnNDIuOSJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full object-cover"
/>
              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-[#D97706]/30 max-w-xs pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-ping" />
                  <p className="text-xs font-bold text-gray-900">99 Dosa Xpress</p>
                </div>
                <p className="text-[11px] text-gray-600">
                  Near Sarsuna 7A Bus Stand, Kolkata - 700061
                </p>
                <a
                  href={restaurantInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#0D3823] hover:underline"
                >
                  <span>Open Full Screen Navigation</span>
                  <ExternalLinkIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <figure className="mt-10 mx-auto max-w-md overflow-hidden rounded-2xl border border-[#E8E2D8] bg-[#FAF6ED] p-2 shadow-sm">
          <Image
            src="/images/WhatsApp Image 2026-11-17 at 10.18.56 PM.jpeg"
            alt="99 Dosa Xpress store opening flyer with the landmark opposite Sarsuna High School, Kolkata 700061, and contact number 9732990100"
            width={1254}
            height={1254}
            sizes="(max-width: 768px) 100vw, 448px"
            className="w-full h-auto rounded-lg object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
