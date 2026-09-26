"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Eski tek sayfalık sitenin çapaları (#iletisim vb.) sunucuya ulaşmaz; burada yönlendirilir.
const anchors: Record<string, string> = {
  "#iletisim": "/tanisalim",
  "#hakkimda": "/hakkimda",
  "#danismanlik": "/birlikte-calisalim#markalar",
  "#kocluk": "/birlikte-calisalim#bireyler",
  "#blog": "/fikirler",
};

export function LegacyAnchorRedirect() {
  const router = useRouter();
  useEffect(() => {
    const target = anchors[window.location.hash];
    if (target) router.replace(target);
  }, [router]);
  return null;
}
