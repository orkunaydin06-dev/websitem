// Sitedeki tüm metinler burada. Metin değiştirmek için yalnızca bu dosyaya dokunun.
// Kaynak: BRIEF.md §5. [DÜZENLE] notları Orkun'un sonradan değiştirebileceği varsayımlardır.

import type { Flag } from "./flags";

export const EMAIL = "orkunaydin06@gmail.com";
export const SUBSTACK_URL = "https://substack.com/@orkunnnn";

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/orkunaydin/" },
  { label: "Instagram", href: "https://www.instagram.com/orkunaydinx/" },
  { label: "Substack", href: SUBSTACK_URL },
  { label: "E-posta", href: `mailto:${EMAIL}` },
];

export const nav: { label: string; href: string; flag?: Flag }[] = [
  { label: "Hakkımda", href: "/hakkimda" },
  { label: "Birlikte Çalışalım", href: "/birlikte-calisalim" },
  { label: "Fikirler", href: "/fikirler" },
  { label: "Araç Kutusu", href: "/arac-kutusu", flag: "aracKutusu" },
];

export const cta = { label: "Tanışalım", href: "/tanisalim" };

// Görseller: public/photos/ altına konur. Dosya yoksa yer tutucu gösterilir.
export const photos = {
  portrait: { src: "/photos/portre.jpg", alt: "Orkun Aydın, Dublin sahilinde", position: "68% 40%" },
  about: { src: "/photos/hakkimda.jpg", alt: "Orkun Aydın gülümserken", position: "50% 30%" },
  working: { src: "/photos/calisirken.jpg", alt: "Orkun Aydın çalışırken" },
};

export const companies = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Coca-Cola", logo: "/logos/coca-cola.svg" },
  { name: "Unilever", logo: "/logos/unilever.svg" },
  { name: "L'Oréal", logo: "/logos/loreal.svg" },
  { name: "Hepsiburada", logo: "/logos/hepsiburada.svg" },
  { name: "Karaca", logo: "/logos/karaca.svg" },
];

export const marquee = ["Sorgula", "Yansıt", "Sahnele"];

export const newsletter = {
  title: "Kompozisyon",
  slogan: "Sorgula. Yansıt. Sahnele.",
  text: "Strateji, marka ve yaratıcılık üzerine düşünceler. Gelen kutunuza, gürültüsüz.",
  button: "Abone Ol",
  href: SUBSTACK_URL,
};

export const stats = [
  { value: "10+ yıl", label: "FMCG, perakende ve teknoloji" },
  { value: "9 ülke", label: "Gelir büyüme stratejisi" },
  { value: "€10M+", label: "Fiyatlandırma kaynaklı gelir katkısı" },
  { value: "$50M+", label: "Liderlik ettiğim lansmanlarda satış değeri" },
];

export const home = {
  eyebrow: "Marka ve Büyüme Stratejisti · Dublin",
  titleArt: "Markalaşmanın sanatı.",
  titleArchitecture: "Büyümenin mimarisi.",
  lead: "10 yıl boyunca Coca-Cola, Unilever ve L'Oréal'da büyüme stratejisi kurdum; bugün Google'da çalışıyorum. Bu deneyimi Türkiye'deki markalar ve kariyerini inşa eden profesyoneller için kullanıyorum.",
  primary: { label: "Tanışalım", href: "/tanisalim" },
  secondary: { label: "Hizmetleri İncele", href: "/birlikte-calisalim" },
  trust:
    "ODTÜ İşletme · Lund Üniversitesi, Uluslararası Pazarlama ve Marka Yönetimi Yüksek Lisansı (İsveç)",
  logosTitle: "Bugüne kadar çalıştığım şirketler",
  problem: {
    title: "Büyümek isteyen markaların iki açığı var.",
    gaps: [
      {
        label: "Açık 1",
        title: "Netlik",
        text: "Ne olduğunu ve kime konuştuğunu tam bilmeyen bir marka herkese seslenir, kimseye ulaşmaz. Mesaj dağılır, bütçe dağılır, ekip farklı yönlere çeker.",
      },
      {
        label: "Açık 2",
        title: "Sistem",
        text: "Büyüme tesadüf değildir. Fiyat, ürün portföyü, kanal ve mesaj birbirine bağlı tek bir yapıdır. Parçaları ayrı ayrı iyileştirmek, bütünü büyütmez.",
      },
    ],
    closing:
      "İki açık aynı yerden kapanır: sanatla kurulan bir marka, mimariyle kurulan bir büyüme.",
  },
  doors: {
    title: "Birlikte çalışmanın yolları",
    cards: [
      {
        title: "Markalar İçin",
        text: "Strateji seansından uçtan uca büyüme sprintine, ekibinize özel AI atölyesine kadar. Büyük markaların büyüme disiplinini, kendi ölçeğinize uyarlanmış haliyle.",
        link: { label: "Markalar için hizmetler", href: "/birlikte-calisalim#markalar" },
      },
      {
        title: "Bireyler İçin",
        text: "Kişisel markanızı ve kariyer yolunuzu netleştirin, AI'ı işinizin gerçek bir parçası yapın.",
        link: { label: "Bireyler için hizmetler", href: "/birlikte-calisalim#bireyler" },
      },
    ],
  },
  why: {
    title: "Strateji bir kompozisyondur.",
    paragraphs: [
      "Gündüzleri fiyatlandırma mimarileri, kategori stratejileri ve büyüme planları kurdum. Geceleri müzik ürettim, sahnede çaldım, sanat ve felsefe üzerine yazdım. Zamanla ikisinin aynı işi yaptığını fark ettim: dağınık parçalardan anlamlı bir bütün kurmak.",
      "İyi bir marka, iyi bir parça gibidir. Her unsurun bir yeri, bir ritmi ve bir amacı vardır. Benim işim, markanız için o kompozisyonu birlikte kurmak.",
    ],
    link: { label: "Hikâyemin tamamı", href: "/hakkimda" },
  },
  latest: { title: "Son fikirler", link: { label: "Tüm fikirler", href: "/fikirler" } },
  finalCta: {
    title: "Aklınızda bir marka, bir kariyer ya da bir fikir mi var?",
    text: "Kısa bir mesajla başlayalım.",
  },
};

export const about = {
  title: "Merhaba, ben Orkun.",
  intro:
    "Marka ve büyüme stratejistiyim. On yılı aşkın süredir markaların nasıl büyüdüğünü içeriden izliyor ve bu büyümeyi tasarlıyorum: raftaki fiyattan dokuz ülkelik gelir stratejisine, bir kategorinin konumlandırmasından yönetim kuruluna sunulan dönüşüm planlarına kadar.",
  sections: [
    {
      title: "Yolculuk",
      paragraphs: [
        "Kariyerime L'Oréal'da kilit hesap yönetimiyle başladım. Karaca Grubu'nda CEO'ya strateji danışmanlığı yaptım, McKinsey ve Simon-Kucher ile beş dönüşüm projesini koordine ettim, ardından grubun yeni markası Homend'in satış liderliğini üstlendim. Hepsiburada'da kategori geliştirdim. Unilever'de Lipton'ın kategori stratejisini kurdum. Coca-Cola İçecek'te dokuz ülkenin gelir büyüme stratejisini yönettim.",
        "Bugün Google Dublin'de Account Strategist olarak Türkiye pazarındaki markaların dijitalde ve AI destekli pazarlamada büyümesi üzerine çalışıyorum.",
      ],
    },
    {
      title: "Eğitim",
      paragraphs: [
        "ODTÜ'de işletme okudum. Ardından İsveç'te, QS sıralamasında dünyanın ilk 100 üniversitesi arasında yer alan Lund Üniversitesi'nde uluslararası pazarlama ve marka yönetimi üzerine yüksek lisans yaptım.",
      ],
    },
    {
      title: "Diğer yanım",
      paragraphs: [
        "İşin dışında müzik üretiyor, DJ'lik yapıyor, sanat ve felsefe üzerine yazıyorum. Bunları hobi olarak değil, düşünme biçimimin parçası olarak görüyorum. Bir kompozisyonu kurmakla bir markayı kurmak arasındaki benzerlik, bu sitenin de çıkış noktası.",
      ],
    },
  ],
  timelineTitle: "Kariyer",
  timeline: [
    { year: "2025–", company: "Google", role: "Account Strategist · Dublin" },
    { year: "2023–25", company: "Coca-Cola İçecek", role: "Grup Gelir Büyüme Yöneticisi · 9 ülke" },
    { year: "2022–23", company: "Unilever / Lipton", role: "Ticari Kategori & Müşteri Pazarlama Yöneticisi" },
    { year: "2021", company: "Hepsiburada", role: "Kategori Geliştirme Yöneticisi" },
    { year: "2019–21", company: "Karaca Grubu", role: "CEO Strateji Danışmanı & Satış Direktörü (Homend)" },
    { year: "2015–18", company: "L'Oréal", role: "Kilit Hesap Yöneticisi" },
  ],
  highlightsTitle: "Öne çıkanlar",
  highlights: [
    "Lipton'da kategori stratejisiyle +%20 büyüme ve +500 baz puan brüt marj artışı (2022)",
    "Fiyatlandırma aksiyonlarıyla €10M+ gelir katkısı",
    "Karaca'da üç lansmanda $50M+ satış değeri",
    "Coca-Cola İçecek'te 9 ülkede gelir büyüme stratejisi; Türkiye, Kazakistan, Irak ve Özbekistan'da RGM atölyeleri",
  ],
};

export type Service = {
  id: string;
  title: string;
  audience: string;
  outcome: string;
  includes: string[];
  format: string; // [DÜZENLE]
  topic: ContactTopic;
};

export const contactTopics = [
  "Markam için strateji",
  "Kariyerim / kişisel markam için",
  "AI eğitimi",
  "Diğer",
] as const;
export type ContactTopic = (typeof contactTopics)[number];

export const work = {
  title: "Birlikte çalışalım",
  intro:
    "Tüm çalışmalar online yürütülür. Kapsam ve fiyat, ihtiyacınızı dinledikten sonra netleşir. Kısa bir mesajla başlamanız yeterli.",
  labels: {
    audience: "Kimin için",
    outcome: "Ne elde edersiniz",
    includes: "Neler dahil",
    format: "Format",
    cta: "Bu hizmet için yazın",
  },
  groups: [
    {
      id: "markalar",
      title: "Markalar İçin",
      services: [
        {
          id: "strateji-seansi",
          title: "Strateji Seansı",
          audience:
            "Önünde net bir büyüme sorusu olan markalar. Büyüyen işletmelerden kurumsal ekiplere kadar.",
          outcome:
            "Tek bir odaklı oturumda, en kritik sorunuza yönelik yazılı bir yol haritası.",
          includes: [
            "Oturum öncesi kısa brif ve mevcut verilerin incelenmesi",
            "Online çalışma oturumu",
            "Oturum sonrası yazılı özet ve öncelikli aksiyon listesi",
            "İki hafta boyunca e-postayla takip soruları",
          ],
          format: "Online, 2–3 saat",
          topic: "Markam için strateji",
        },
        {
          id: "marka-buyume-sprinti",
          title: "Marka & Büyüme Sprinti",
          audience:
            "Markasını netleştirip büyümeyi sisteme bağlamak isteyen KOBİ'ler ve büyüyen markalar.",
          outcome:
            "Konumlandırmadan fiyata, kanaldan mesaja uzanan, uygulanabilir tek bir büyüme planı.",
          includes: [
            "Pazar, rakip ve müşteri analizi",
            "Marka konumlandırması ve mesaj mimarisi",
            "Fiyatlandırma ve ürün portföyü stratejisi",
            "Kanal ve dijital pazarlama planı, 90 günlük aksiyon takvimi",
          ],
          format: "Online, 4–6 hafta, haftalık oturumlar",
          topic: "Markam için strateji",
        },
        {
          id: "ai-atolyesi",
          title: "AI & Dijital Dönüşüm Atölyesi",
          audience: "Pazarlama, satış ve ticari ekipler.",
          outcome:
            "Ekibiniz AI'ı merak konusu olmaktan çıkarıp gerçek iş akışlarına entegre eder.",
          includes: [
            "Atölye öncesi ekip ihtiyaç analizi",
            "Pazarlama ve ticari süreçlere özel uygulamalı atölye",
            "Ekibinize özel prompt ve iş akışı kütüphanesi",
            "Atölye sonrası uygulama rehberi",
          ],
          format: "Online, yarım gün ya da tam gün",
          topic: "AI eğitimi",
        },
      ] satisfies Service[],
    },
    {
      id: "bireyler",
      title: "Bireyler İçin",
      services: [
        {
          id: "kariyer-koclugu",
          title: "Kişisel Marka & Kariyer Koçluğu",
          audience:
            "FMCG, perakende ve teknolojide kariyerinin başındaki ya da yön değiştirmek isteyen profesyoneller.",
          outcome:
            "Kim olduğunuzu ve nereye gittiğinizi net anlatan bir kişisel marka ve kariyer haritası.",
          includes: [
            "Kariyer haritası ve hedef belirleme",
            "Kişisel marka konumlandırması",
            "CV ve LinkedIn profilinin yeniden kurgulanması",
            "Mülakat ve uluslararası kariyer geçişi hazırlığı",
          ],
          format: "Online, 4 oturumluk program",
          topic: "Kariyerim / kişisel markam için",
        },
        {
          id: "ai-okuryazarligi",
          title: "AI Okuryazarlığı Birebir",
          audience: "AI'ı günlük işinde gerçekten kullanmak isteyen profesyoneller.",
          outcome:
            "AI'ı rastgele denemekten çıkıp işinize oturan bir sistemle kullanırsınız.",
          includes: [
            "Mevcut iş akışınızın analizi",
            "Etkili prompt yazmanın temelleri",
            "İşinize özel 3–5 AI iş akışının birlikte kurulması",
            "Doğru araç seçimi",
          ],
          format: "Online, 3 oturum",
          topic: "AI eğitimi",
        },
      ] satisfies Service[],
    },
  ],
  closing: "Hangi hizmetin size uygun olduğundan emin değil misiniz? Yazın, birlikte bakalım.",
};

export type CategoryId = "strateji" | "sanat" | "muzik";
export const categories: { id: CategoryId; label: string; flag?: Flag }[] = [
  { id: "strateji", label: "Strateji & Pazarlama" },
  { id: "sanat", label: "Sanat & Felsefe" },
  { id: "muzik", label: "Müzik & Yaratıcılık", flag: "muzik" },
];

export const ideas = {
  title: "Fikirler",
  intro: "Strateji, marka, sanat ve yaratıcılık üzerine uzun soluklu yazılar.",
  all: "Tümü",
  substack: {
    text: "Sanat ve felsefe denemelerimin tamamı Substack'te.",
    link: { label: "Substack'te oku", href: SUBSTACK_URL },
  },
  readTime: (min: number) => `${min} dk okuma`,
  authorBox:
    "Orkun Aydın, marka ve büyüme stratejisti. Coca-Cola, Unilever, L'Oréal ve Google deneyimini Türkiye'deki markalar ve profesyoneller için kullanıyor.",
};

export const contact = {
  title: "Tanışalım",
  text: "Markanız, kariyeriniz ya da aklınızdaki bir fikir üzerine konuşmak için yazın. Her mesajı okuyor ve en geç iki iş günü içinde dönüyorum.", // [DÜZENLE]
  fields: {
    name: "Adınız",
    email: "E-posta",
    topic: "Konu",
    topicPlaceholder: "Bir konu seçin",
    message: "Mesajınız",
    submit: "Gönder",
    sending: "Gönderiliyor…",
  },
  success: "Mesajınız ulaştı. En kısa sürede dönüyorum.",
  error: "Mesajınız gönderilemedi. Lütfen doğrudan e-posta ile yazın:",
  direct: "Doğrudan e-posta:",
};

export const toolbox = {
  title: "Araç Kutusu",
  text: "Büyük markalarda kullandığım çerçevelerin hemen kullanılabilir halleri: şablonlar, kanvaslar ve rehberler.",
  products: [] as {
    title: string;
    description: string;
    image?: string;
    price: string; // "Ücretsiz" ya da fiyat
    href: string;
  }[],
};

export const footer = {
  name: "Orkun Aydın",
  tagline: "Marka ve Büyüme Stratejisti. Dublin'den, Türkiye'deki markalar için.",
  links: [
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "Birlikte Çalışalım", href: "/birlikte-calisalim" },
    { label: "Fikirler", href: "/fikirler" },
    { label: "Tanışalım", href: "/tanisalim" },
  ],
  copyright: "© 2026 Orkun Aydın",
};

export const seo = {
  siteUrl: "https://www.orkunaydin.com",
  defaultTitle: "Orkun Aydın — Marka ve Büyüme Stratejisti",
  titleTemplate: "%s — Orkun Aydın",
  description:
    "Coca-Cola, Unilever, L'Oréal ve Google deneyimiyle markalar için büyüme stratejisi; profesyoneller için kişisel marka, kariyer koçluğu ve AI eğitimi.",
  ogTitle: "Orkun Aydın — Markalaşmanın sanatı. Büyümenin mimarisi.",
  keywords: [
    "marka stratejisi",
    "büyüme stratejisi",
    "marka danışmanlığı",
    "kişisel marka",
    "kariyer koçluğu",
    "AI eğitimi",
    "Orkun Aydın",
  ],
};
