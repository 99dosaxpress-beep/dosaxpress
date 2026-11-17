import React from 'react';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, LeafIcon, ExternalLinkIcon } from './icons';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 border-t border-[#D97706]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97706] to-[#B45309] flex items-center justify-center text-white font-extrabold shadow-md">
                <span>99</span>
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase">
                99 Dosa Xpress
              </span>
            </div>
            <p className="text-sm text-[#F59E0B] font-semibold">
              Authentic South Indian Food in Kolkata
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Serving freshly prepared Idli, crispy Dosa, golden Vada, and fluffy Uttapam made with traditional authentic South Indian recipes and pure ingredients.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-emerald-300">
                <LeafIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cuisine: {restaurantInfo.cuisine}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#D97706] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#F59E0B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-[#F59E0B] transition-colors">
                  Menu (42 Items)
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#F59E0B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#F59E0B] transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
              <li>
                <Link href="/menu?category=dosa" className="text-gray-400 hover:text-[#F59E0B] transition-colors">
                  Dosa Varieties (27)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#D97706] pl-2.5">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  {restaurantInfo.address.street},<br />
                  {restaurantInfo.address.landmark},<br />
                  {restaurantInfo.address.city} - {restaurantInfo.address.pincode}
                </address>
              </div>
              <div className="flex items-start gap-2.5">
                <PhoneIcon className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <div className="space-y-1">
                  <a
                    href={`tel:${restaurantInfo.phones.primary}`}
                    className="block text-white hover:text-[#F59E0B] transition-colors font-medium"
                  >
                    +91 {restaurantInfo.phones.display1}
                  </a>
                  <a
                    href={`tel:${restaurantInfo.phones.secondary}`}
                    className="block text-white hover:text-[#F59E0B] transition-colors font-medium"
                  >
                    +91 {restaurantInfo.phones.display2}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* South Kolkata Local Focus & Map Deep Link */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#D97706] pl-2.5">
              Location &amp; Hours
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Serving patrons from Sarsuna, Behala, Shakuntala Park, and throughout Kolkata. Freshly prepared to order.
            </p>
            <div className="pt-1">
             <a
  href="https://www.google.com/maps/search/?api=1&query=22.4798633%2C88.2952369"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-[#0D3823] border border-white/15 transition-all w-full justify-center"
>
                <span>Find on Google Maps</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
              </a>
            </div>
            <div className="text-[11px] text-gray-500 pt-1">
              Pure South Indian Veg Batters • Hot Sambar &amp; Fresh Chutneys
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>© 2026 99 Dosa Xpress. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              99dosaxpress.com
            </Link>
            <span>•</span>
            <Link href="/menu" className="hover:text-gray-300 transition-colors">
              Menu
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
