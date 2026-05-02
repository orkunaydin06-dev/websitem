import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orkun Aydın — Girişimci, Ürün Kurucusu, Yazar",
  description:
    "Dijital ürünler kuran, fikirler üreten ve Türkiye'den dünyaya uzanan bir girişimcinin köşesi.",
  keywords: [
    "Orkun Aydın",
    "girişimci",
    "ürün kurucusu",
    "SaaS",
    "bootstrapping",
    "Türkiye",
  ],
  openGraph: {
    title: "Orkun Aydın",
    description: "Girişimci, Ürün Kurucusu, Yazar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${outfit.variable} grain-overlay`}
    >
      <body className="min-h-screen bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
