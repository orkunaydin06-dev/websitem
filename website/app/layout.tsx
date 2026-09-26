import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { nav, seo } from "@/content/site";
import { isEnabled } from "@/content/flags";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// latin-ext: ş ğ ı İ ç ö ü için gerekli
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: { default: seo.defaultTitle, template: seo.titleTemplate },
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.ogTitle,
    description: seo.description,
    type: "website",
    locale: "tr_TR",
    siteName: "Orkun Aydın",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const links = nav.filter((l) => isEnabled(l.flag)).map(({ label, href }) => ({ label, href }));
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-moss focus:px-4 focus:py-2 focus:text-paper"
        >
          İçeriğe geç
        </a>
        <Header links={links} />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
