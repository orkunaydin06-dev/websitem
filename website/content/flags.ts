// Özellik bayrakları. Bir bölümü açmak için değeri true yapın.
export const flags = {
  aracKutusu: false, // /arac-kutusu sayfası ve menü linki
  muzik: false, // Fikirler'de "Müzik & Yaratıcılık" kategorisi
};

export type Flag = keyof typeof flags;

export function isEnabled(flag?: Flag) {
  return flag ? flags[flag] : true;
}
