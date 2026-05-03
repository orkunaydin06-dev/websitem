export type ConsultingService = {
  id: string;
  title: string;
  description: string;
  details: string[];
  cta: string;
};

export type CoachingService = {
  id: string;
  title: string;
  description: string;
  details: string[];
  cta: string;
};

export const consultingServices: ConsultingService[] = [
  {
    id: "revenue-growth",
    title: "Gelir Büyüme Yönetimi",
    description:
      "Fiyatlandırma stratejisi, promosyon optimizasyonu ve kanal yönetimiyle sürdürülebilir büyüme. 9 ülke operasyonunda uyguladığım sistematik RGM yaklaşımı.",
    details: [
      "Fiyatlandırma stratejisi ve P&L optimizasyonu",
      "Promosyon ROI analizi ve bütçe tahsisi",
      "Kanal ve kategori büyüme planlaması",
      "Rakip analizi ve pazar konumlandırma",
    ],
    cta: "Konuşalım",
  },
  {
    id: "marketing-strategy",
    title: "Pazarlama Stratejisi",
    description:
      "Doğru kitleye, doğru mesajla, doğru zamanda ulaşmak. L'Oréal, Unilever ve Google'da geliştirdiğim strateji çerçevesiyle markanızı büyütün.",
    details: [
      "Marka konumlandırma ve mesaj mimarisi",
      "Dijital pazarlama kanal stratejisi",
      "İçerik stratejisi ve otorite inşası",
      "Pazar segmentasyonu ve hedef kitle analizi",
    ],
    cta: "Strateji Görüşmesi",
  },
  {
    id: "commercial-excellence",
    title: "Ticari Mükemmellik",
    description:
      "Satış ekibi etkinliği, kategori yönetimi ve müşteri geliştirme. Karaca ve Hepsiburada'daki kurumsal dönüşüm deneyimimi işletmenize taşıyorum.",
    details: [
      "Satış ekibi yapılandırması ve KPI tasarımı",
      "Kategori yönetimi ve raf stratejisi",
      "Müşteri portföyü yönetimi",
      "Go-to-market stratejisi ve pazar girişi",
    ],
    cta: "Detayları Konuşalım",
  },
];

export const coachingServices: CoachingService[] = [
  {
    id: "career-acceleration",
    title: "Kariyer İvmelendirme",
    description:
      "FMCG, perakende ve teknoloji sektörlerinde üst düzey kariyer hedeflerinize giden yolu birlikte çizelim. METU → Lund MSc → L'Oréal → Coca-Cola → Google yolculuğumdan öğrendiklerimi paylaşıyorum.",
    details: [
      "Kariyer haritası ve hedef belirleme",
      "Uluslararası kariyer geçiş planlaması",
      "Müzakere ve promosyon stratejileri",
      "Güçlü CV ve LinkedIn profili oluşturma",
    ],
    cta: "Seansı Ayarla",
  },
  {
    id: "leadership-development",
    title: "Liderlik Gelişimi",
    description:
      "Takım yönetimi, stratejik düşünme ve üst düzey sunum becerileri. McKinsey ve Simon Kucher metodolojileriyle çalışma deneyimimi aktarıyorum.",
    details: [
      "Stratejik düşünme ve karar alma çerçeveleri",
      "Üst yönetimle iletişim ve etkileme",
      "Çok uluslu takım yönetimi",
      "Büyüme odaklı liderlik mindset'i",
    ],
    cta: "Keşif Görüşmesi",
  },
];
