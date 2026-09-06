import React from 'react';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import PopularDishes from '@/components/PopularDishes';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import LocationSection from '@/components/LocationSection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Restaurant Highlights */}
      <Highlights />

      {/* 3. Popular Menu Categories */}
      <PopularDishes />

      {/* 4. Interactive Full Menu (All 42 Items) */}
      <MenuSection showTitle={true} />

      {/* 5. About Restaurant (Sarsuna & Kolkata Story) */}
      <AboutSection />

      {/* 6. Why Choose Us (4 Pillars of Quality) */}
      <WhyChooseUs />

      {/* 7. Location & Clickable Contact */}
      <LocationSection />

      {/* 8. Call to Action Banner */}
      <CtaSection />
    </>
  );
}
