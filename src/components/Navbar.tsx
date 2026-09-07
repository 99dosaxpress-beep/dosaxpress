"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, MenuIcon, CloseIcon, LeafIcon } from "./icons";
import { restaurantInfo } from "@/data/restaurantInfo";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A2617]/95 backdrop-blur-md shadow-lg border-b border-[#D97706]/20 py-0"
          : "bg-[#0D3823] border-b border-[#D97706]/15 py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div>
              <Image
                src="/images/logo.png"
                alt="Dosa Xpress Logo"
                width={60}
                height={40}
                className="h-auto w-auto max-w-[60px] sm:max-w-[60px] object-contain "
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#F59E0B] bg-white/10"
                      : "text-white/90 hover:text-[#F59E0B] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${restaurantInfo.phones.primary}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${restaurantInfo.phones.primary}`}
              aria-label="Call restaurant directly"
              className="p-2 rounded-full bg-[#EA580C] text-white shadow-sm hover:bg-[#C2410C] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2617] border-b border-[#D97706]/30 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "text-[#F59E0B] bg-white/10 font-semibold"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${restaurantInfo.phones.primary}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] shadow-md"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Order / Call {restaurantInfo.phones.display1}</span>
            </a>
            <a
              href={`tel:${restaurantInfo.phones.secondary}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-center text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/15"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Alt: {restaurantInfo.phones.display2}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
