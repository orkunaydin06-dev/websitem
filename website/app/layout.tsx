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
  title: {
    default: "Orkun Aydın — Marka ve Büyüme Stratejisti",
    template: "%s — Orkun Aydın",
  },
  description:
    "Coca-Cola, Unilever, L'Oréal ve Google deneyimiyle markalar için büyüme stratejisi; profesyoneller için kişisel marka, kariyer koçluğu ve AI eğitimi.",
  keywords: [
    "marka stratejisi",
    "büyüme stratejisi",
    "marka danışmanlığı",
    "kişisel marka",
    "kariyer koçluğu",
    "AI eğitimi",
    "Orkun Aydın",
  ],
  openGraph: {
    title: "Orkun Aydın — Markalaşmanın sanatı. Büyümenin mimarisi.",
    description:
      "Coca-Cola, Unilever, L'Oréal ve Google deneyimiyle markalar için büyüme stratejisi; profesyoneller için kişisel marka, kariyer koçluğu ve AI eğitimi.",
    type: "website",
    locale: "tr_TR",
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
