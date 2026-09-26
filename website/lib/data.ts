export type Service = {
  id: string;
  title: string;
  audience: string;
  description: string;
  details: string[];
  format: string;
};

export const brandServices: Service[] = [
  {
    id: "strateji-seansi",
    title: "Strateji Seansı",
    audience:
      "Önünde net bir büyüme sorusu olan markalar. Büyüyen işletmelerden kurumsal ekiplere kadar.",
    description:
      "Tek bir odaklı oturumda, en kritik sorunuza yönelik yazılı bir yol haritası.",
    details: [
      "Oturum öncesi kısa brif ve mevcut verilerin incelenmesi",
      "Online çalışma oturumu",
      "Oturum sonrası yazılı özet ve öncelikli aksiyon listesi",
      "İki hafta boyunca e-postayla takip soruları",
    ],
    format: "Online, 2–3 saat",
  },
  {
    id: "marka-buyume-sprinti",
    title: "Marka & Büyüme Sprinti",
    audience:
      "Markasını netleştirip büyümeyi sisteme bağlamak isteyen KOBİ'ler ve büyüyen markalar.",
    description:
      "Konumlandırmadan fiyata, kanaldan mesaja uzanan, uygulanabilir tek bir büyüme planı.",
    details: [
      "Pazar, rakip ve müşteri analizi",
      "Marka konumlandırması ve mesaj mimarisi",
      "Fiyatlandırma ve ürün portföyü stratejisi",
      "Kanal ve dijital pazarlama planı, 90 günlük aksiyon takvimi",
    ],
    format: "Online, 4–6 hafta, haftalık oturumlar",
  },
  {
    id: "ai-atolyesi",
    title: "AI & Dijital Dönüşüm Atölyesi",
    audience: "Pazarlama, satış ve ticari ekipler.",
    description:
      "Ekibiniz AI'ı merak konusu olmaktan çıkarıp gerçek iş akışlarına entegre eder.",
    details: [
      "Atölye öncesi ekip ihtiyaç analizi",
      "Pazarlama ve ticari süreçlere özel uygulamalı atölye",
      "Ekibinize özel prompt ve iş akışı kütüphanesi",
      "Atölye sonrası uygulama rehberi",
    ],
    format: "Online, yarım gün ya da tam gün",
  },
];

export const individualServices: Service[] = [
  {
    id: "kariyer-koclugu",
    title: "Kişisel Marka & Kariyer Koçluğu",
    audience:
      "FMCG, perakende ve teknolojide kariyerinin başındaki ya da yön değiştirmek isteyen profesyoneller.",
    description:
      "Kim olduğunuzu ve nereye gittiğinizi net anlatan bir kişisel marka ve kariyer haritası.",
    details: [
      "Kariyer haritası ve hedef belirleme",
      "Kişisel marka konumlandırması",
      "CV ve LinkedIn profilinin yeniden kurgulanması",
      "Mülakat ve uluslararası kariyer geçişi hazırlığı",
    ],
    format: "Online, 4 oturumluk program",
  },
  {
    id: "ai-okuryazarligi",
    title: "AI Okuryazarlığı Birebir",
    audience: "AI'ı günlük işinde gerçekten kullanmak isteyen profesyoneller.",
    description:
      "AI'ı rastgele denemekten çıkıp işinize oturan bir sistemle kullanırsınız.",
    details: [
      "Mevcut iş akışınızın analizi",
      "Etkili prompt yazmanın temelleri",
      "İşinize özel 3–5 AI iş akışının birlikte kurulması",
      "Doğru araç seçimi",
    ],
    format: "Online, 3 oturum",
  },
];
