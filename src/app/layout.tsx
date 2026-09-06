import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.99dosaxpress.com"),
  title: {
    default: "99 Dosa Xpress | South Indian Restaurant in Sarsuna, Kolkata",
    template: "%s | 99 Dosa Xpress Kolkata",
  },
  description:
    "99 Dosa Xpress serves authentic South Indian food in Sarsuna, Kolkata including fresh Idli, Dosa, Vada and Uttapam. Visit us near Sarsuna 7A Bus Stand.",
  keywords: [
    "South Indian restaurant in Kolkata",
    "South Indian restaurant in Sarsuna",
    "Idli Dosa restaurant in Kolkata",
    "Dosa near Sarsuna",
    "Idli near Sarsuna",
    "Vada near Sarsuna",
    "Uttapam in Kolkata",
    "99 Dosa Xpress",
    "99 Dosa Xpress Kolkata",
    "Masala Dosa Sarsuna",
    "Medu Vada Kolkata"
  ],
  authors: [{ name: "99 Dosa Xpress" }],
  creator: "99 Dosa Xpress",
  publisher: "99 Dosa Xpress",
  alternates: {
    canonical: "https://www.99dosaxpress.com/",
  },
  openGraph: {
    title: "99 Dosa Xpress | South Indian Restaurant in Sarsuna, Kolkata",
    description:
      "Authentic South Indian food in Kolkata: Fresh crispy Dosa, steaming Idli, golden Medu Vada and fluffy Uttapam near Sarsuna 7A Bus Stand.",
    url: "https://www.99dosaxpress.com/",
    siteName: "99 Dosa Xpress",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "99 Dosa Xpress South Indian Restaurant in Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "99 Dosa Xpress | South Indian Restaurant in Sarsuna, Kolkata",
    description:
      "Freshly prepared Idli, Dosa, Vada & Uttapam made with authentic South Indian flavours in Sarsuna, Kolkata.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": "22.4842;88.2917",
    "ICBM": "22.4842, 88.2917",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#FDFBF7] text-gray-900 font-sans selection:bg-[#F59E0B] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
