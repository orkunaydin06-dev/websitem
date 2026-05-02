export type Project = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  status: "aktif" | "tamamlandı" | "arşiv";
  tags: string[];
  url?: string;
  year: number;
};

export type SpeakingEvent = {
  id: string;
  event: string;
  title: string;
  date: string;
  location: string;
  type: "konferans" | "podcast" | "panel" | "webinar";
  url?: string;
};

export type StuffItem = {
  id: string;
  name: string;
  description: string;
  category: "kitap" | "araç" | "podcast" | "kaynak";
  url?: string;
  author?: string;
};

export const projects: Project[] = [
  {
    id: "akis",
    name: "Akış",
    description: "Dağıtık ekipler için asenkron iş birliği aracı",
    longDescription:
      "Farklı zaman dilimlerinde çalışan ekiplerin birbirlerini asenkron takip edebildiği, günlük standupları ve sprint süreçlerini otomatikleştiren bir SaaS ürünü. Erken erişim sürecinde.",
    status: "aktif",
    tags: ["SaaS", "uzaktan çalışma", "verimlilik"],
    url: "https://akis.app",
    year: 2025,
  },
  {
    id: "dijital-pusulam",
    name: "Dijital Pusulam",
    description: "Türkiye'den dünyaya uzanan dijital girişimciler için haftalık bülten",
    longDescription:
      "Her Salı sabahı gelen; bootstrapping, ürün geliştirme ve uzaktan çalışma üzerine derinlemesine yazılar içeren Türkçe bülten. 3.200+ abonesi var.",
    status: "aktif",
    tags: ["içerik", "bülten", "topluluk"],
    url: "https://dijitalpusulam.com",
    year: 2024,
  },
  {
    id: "segmentify-contrib",
    name: "Segmentify Entegrasyon SDK'sı",
    description: "E-ticaret kişiselleştirme platformu için açık kaynak SDK",
    longDescription:
      "Bir müşteri projesi kapsamında geliştirdiğim, Segmentify'ın REST API'sini saran TypeScript istemci kütüphanesi. npm'de 40k+ haftalık indirme.",
    status: "tamamlandı",
    tags: ["açık kaynak", "SDK", "TypeScript"],
    url: "https://github.com/orkunaydin/segmentify-sdk",
    year: 2023,
  },
  {
    id: "freelance-otomasyon",
    name: "Serbest Çalışan Otomasyon Seti",
    description: "Fatura, teklif ve sözleşme süreçlerini otomatikleştiren Notion şablon sistemi",
    longDescription:
      "Serbest çalışan geliştiriciler ve tasarımcılar için Notion + Make.com entegrasyonu ile fatura gönderimi, proje takibi ve müşteri onboarding süreçlerini otomatikleştiren kapsamlı şablon paketi.",
    status: "arşiv",
    tags: ["otomasyon", "Notion", "serbest çalışma"],
    year: 2022,
  },
];

export const speakingEvents: SpeakingEvent[] = [
  {
    id: "starbucks-devcon-2025",
    event: "ProductCon İstanbul 2025",
    title: "Küçük Bir Ekiple Büyük Bir SaaS Kurmak",
    date: "Ekim 2025",
    location: "İstanbul, Türkiye",
    type: "konferans",
  },
  {
    id: "finnovate-2025",
    event: "Remote Work Summit",
    title: "Türkiye'den Küresel Pazara: Dil, Kültür ve Güven İnşası",
    date: "Mayıs 2025",
    location: "Online",
    type: "konferans",
  },
  {
    id: "girisimci-podcast",
    event: "Girişimci Hikayeleri Podcast",
    title: "Sıfırdan Bülten Kurmak: İlk 1000 Abonenin Hikayesi",
    date: "Şubat 2025",
    location: "Podcast",
    type: "podcast",
    url: "https://spotify.com",
  },
  {
    id: "indie-panel-2024",
    event: "Indie Founders Türkiye",
    title: "Bootstrapped SaaS'ta Pricing: Ne Öğrendim, Ne Yapardım",
    date: "Kasım 2024",
    location: "İstanbul, Türkiye",
    type: "panel",
  },
  {
    id: "webinar-odak-2024",
    event: "Uzaktan Çalışma Webinar Serisi",
    title: "Evde Çalışırken Odaklanma Sorununu Çözmek",
    date: "Temmuz 2024",
    location: "Online",
    type: "webinar",
  },
];

export const stuffILike: StuffItem[] = [
  {
    id: "deep-work",
    name: "Derin Çalışma",
    description:
      "Cal Newport'un dikkat ekonomisi çağında odaklanmanın değerini anlatan şaheseri. Her bilgi çalışanının okuması gereken bir kitap.",
    category: "kitap",
    author: "Cal Newport",
  },
  {
    id: "zero-to-one",
    name: "Sıfırdan Bire",
    description:
      "Peter Thiel'in girişimcilik ve monopoli üzerine alışılmışın dışındaki görüşlerini paylaştığı, fikirsel açıdan zorlayıcı bir kitap.",
    category: "kitap",
    author: "Peter Thiel",
  },
  {
    id: "antifragile",
    name: "Antifragile",
    description:
      "Nassim Taleb'in kaos, belirsizlik ve güçlenme üzerine yazdığı kitap. Hem iş hem de yaşam için dönüştürücü bir bakış açısı sunuyor.",
    category: "kitap",
    author: "Nassim Nicholas Taleb",
  },
  {
    id: "company-of-one",
    name: "Company of One",
    description:
      "Paul Jarvis'in büyüme takıntısına meydan okuduğu, 'yeterli' kavramını sorgulatan şaşırtıcı derecede özgürleştirici bir manifesto.",
    category: "kitap",
    author: "Paul Jarvis",
  },
  {
    id: "raycast",
    name: "Raycast",
    description:
      "Mac için launcher ve otomasyon aracı. Spotlight'ın çok ötesinde; script çalıştırma, snippet yönetimi, takvim entegrasyonu ile iş akışımın merkezi.",
    category: "araç",
    url: "https://raycast.com",
  },
  {
    id: "linear",
    name: "Linear",
    description:
      "Proje yönetimi için kullandığım tek araç. Jira'nın çirkinliğine ve yavaşlığına alternatif olarak zevkle kullanılabilen minimal bir tasarım.",
    category: "araç",
    url: "https://linear.app",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    description:
      "Bağlantılı düşünce notları için vazgeçilmez. Markdown tabanlı, yerel dosya sistemi kullanıyor; verilerimin sahibi benim.",
    category: "araç",
    url: "https://obsidian.md",
  },
  {
    id: "cal-newport-podcast",
    name: "Deep Questions Podcast",
    description:
      "Cal Newport'un dinleyicilerden gelen sorulara üretkenlik, minimalizm ve kariyer üzerine derin, iyi araştırılmış yanıtlar verdiği podcast.",
    category: "podcast",
    url: "https://calnewport.com/podcast",
    author: "Cal Newport",
  },
  {
    id: "indie-hackers",
    name: "Indie Hackers Podcast",
    description:
      "Bağımsız bootstrap kurucularının hikayelerini anlattığı motivasyon kaynağı. Özellikle erken dönem SaaS kurucularının röportajlarını seviyorum.",
    category: "podcast",
    url: "https://indiehackers.com/podcast",
  },
  {
    id: "every-newsletter",
    name: "Every",
    description:
      "AI, iş ve üretkenlik kesişiminde kaliteli yazılar yayınlayan bülten kolektifi. Packy McCormick'in 'Not Boring' yazıları özellikle değerli.",
    category: "kaynak",
    url: "https://every.to",
  },
  {
    id: "paul-graham-essays",
    name: "Paul Graham Denemeleri",
    description:
      "Girişimcilik, yazarlık ve fikirler üzerine on yıllardır taze kalan denemeler. Her okuyuşumda yeni bir şey görüyorum.",
    category: "kaynak",
    url: "https://paulgraham.com/articles.html",
    author: "Paul Graham",
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    description:
      "Hızlı diyagram ve wireframe için kullandığım en sevdiğim araç. Beyaz tahta hissi veriyor; şablonlar ve takım çalışması da mükemmel.",
    category: "araç",
    url: "https://excalidraw.com",
  },
];
