import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Yazım hatası düzeltmesi (eski slug)
      {
        source: "/blog/buyume-zihniyeti-potansiyelinizin-sinirini-kim-koyor",
        destination: "/fikirler/buyume-zihniyeti-potansiyelinizin-sinirini-kim-koyuyor",
        permanent: true,
      },
      { source: "/blog", destination: "/fikirler", permanent: true },
      { source: "/blog/:slug", destination: "/fikirler/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
