import React from 'react';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.99dosaxpress.com/#restaurant",
    "name": restaurantInfo.name,
    "image": [
      "https://www.99dosaxpress.com/images/hero-dosa.jpg",
      "https://www.99dosaxpress.com/images/og-image.jpg"
    ],
    "url": restaurantInfo.canonicalUrl,
    "telephone": [
      `+91-${restaurantInfo.phones.primary}`,
      `+91-${restaurantInfo.phones.secondary}`
    ],
    "servesCuisine": [
      "South Indian",
      "Vegetarian",
      "Fast Food"
    ],
    "priceRange": "₹40 - ₹160",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${restaurantInfo.address.street}, ${restaurantInfo.address.landmark}`,
      "addressLocality": restaurantInfo.address.city,
      "addressRegion": restaurantInfo.address.state,
      "postalCode": restaurantInfo.address.pincode,
      "addressCountry": "IN"
    },
    "hasMenu": "https://www.99dosaxpress.com/menu",
    "hasMap": restaurantInfo.mapsUrl,
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `tel:${restaurantInfo.phones.primary}`,
        "inLanguage": "en",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Food Takeaway / Order"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
