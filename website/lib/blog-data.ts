export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  coverImage: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sifirdan-saas-kurarken-ogrendiklerim",
    title: "Sıfırdan Bir SaaS Ürünü Kurarken Öğrendiklerim",
    excerpt:
      "İki yıl önce hiçbir şeyim yoktu. Bir fikrim, boş bir GitHub repo'su ve her geceyi kodlamaya harcamaya hazır bir tutkum vardı. Bugün, gerçek aboneleri olan, gerçek para kazanan bir ürüne sahibim — ama yol hiç de beklediğim gibi olmadı.",
    date: "15 Mart 2026",
    readTime: 12,
    tags: ["girişimcilik", "SaaS", "ürün"],
    coverImage: "/images/blog-saas-cover.jpg",
    content: `
<p>İki yıl önce hiçbir şeyim yoktu. Bir fikrim, boş bir GitHub repo'su ve her geceyi kodlamaya harcamaya hazır bir tutkum vardı. Bugün, gerçek aboneleri olan, gerçek para kazanan bir ürüne sahibim — ama yol hiç de beklediğim gibi olmadı.</p>

<p>Bu yazıda, Akış'ı sıfırdan kurarken yaptığım hataları, öğrendiğim dersleri ve bugün tekrar başlasaydım farklı yapacaklarımı paylaşıyorum. Motivasyon yazısı değil bu — gerçek, ham bir öğrenme günlüğü.</p>

<h2>1. Kullanıcıyla Konuşmadan Önce Kod Yazmak En Büyük Hatam Oldu</h2>

<p>İlk altı ay boyunca neredeyse tamamen kodladım. Harika bir API mimarisi, temiz bir codebase, kapsamlı bir test suite. Tüm bunlar var ama... kimse istemiyordu.</p>

<p>Gerçek bir müşteriyle ilk kez altıncı ayda konuştuğumda öğrendiğim şey şoktu: benim "çözdüğüm problem" aslında onları çok da rahatsız etmiyordu. Asıl problem başka bir yerdeydi. Altı ay boşa gitmiş değildi ama yeniden organize etmek için ciddi zaman harcadım.</p>

<p><strong>Öğrenilen ders:</strong> Kod yazmadan önce 20 potansiyel müşteriyle konuş. Çözdüğünü düşündüğün problemi onlara anlat. Ne söylediklerini değil, nasıl tepki verdiklerini gözlemle.</p>

<img src="/images/blog-saas-inline-1.jpg" alt="Kullanıcı araştırması notları" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>2. Fiyatlandırma Korkum Bana Pahalıya Patladı</h2>

<p>İlk başlattığımda aylık 9 dolar ücretlendirdim. "Başlangıç için düşük tutalım, sonra artırırız" diye düşündüm. Yanlış.</p>

<p>Ucuz fiyat iki şey söyler: "Bu ürün değerli değil" ve "Ciddi bir işletme değiliz." İlk 30 kullanıcımın büyük çoğunluğu fırsatçılardı — ücret artınca gittiler. Asıl hedef kitlem zaten 9 dolara değil, 49 dolara bakmıyordu bile.</p>

<p>Fiyatı 49 dolara çıkardığımda aylık gelir düştü ama churn da dramatik şekilde düştü. Daha az müşteri, daha fazla gelir, daha az destek yükü.</p>

<blockquote>"Fiyatın ne kadar yüksek olabileceğini değil, ne kadar düşük olmaması gerektiğini sorgula."</blockquote>

<h2>3. Solo Kurucu Olmak Hem Güç Hem Zayıflık</h2>

<p>Herkes bir co-founder bul der. Ben denemek istedim ama sonunda yalnız gittim. Pişman değilim — ama nedenleri anlamak önemli.</p>

<p>Yalnız kurucunun avantajları: hız, karar netliği, cap table basitliği, kendi vizyonunu uygulama özgürlüğü. Dezavantajları: yorgunluk, isolation, blind spot'lar ve zor günlerde seni zorlayacak kimsenin olmaması.</p>

<p>Ben bunu bir haftalık bir mailing list, bir indie hackers topluluğu ve bir grup Slack ile dengeliyorum. Topluluk bazen co-founder'dan daha değerli.</p>

<img src="/images/blog-saas-inline-2.jpg" alt="Çalışma alanı ve notlar" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>4. Pazarlama Yazmak, Kod Yazmak Kadar Zor</h2>

<p>Ürünü yaparken "iyi bir şey yaparsam insanlar bulur" diye düşündüm. Bu "Build it and they will come" yanılgısının Türkçe versiyonuydu.</p>

<p>Bugün haftamın en az üçte birini pazarlama içeriğine, topluluk katılımına ve SEO'ya harcıyorum. Ve bu harcama doğrudan büyümeye yansıyor. Teknik borçtan çok daha tehlikeli olan "pazarlama borcu" kavramını öğrendim.</p>

<p>En etkili kanalım şu an: Twitter/X üzerinde içerik ve bülten. Paid ads denedim, SEO denedim, Product Hunt launch yaptım — hepsinin belirli bir dönemde değeri var. Ama uzun vadede organik içerik ve topluluğu kazanıyor.</p>

<h2>5. Churn Seni Öldürmez — Ne Öğrendiğin Kurtarır</h2>

<p>Her churn acı verir. İlk büyük iptal geldiğinde — beni seven, harika feedback veren bir kullanıcıdan — neredeyse her şeyi bırakıyordum.</p>

<p>Sonra şunu yaptım: her iptal eden kullanıcıya kişisel bir e-posta attım. Neden ayrıldıklarını sordum. Cevap verenlerden öğrendiklerim ürünü kurtardı.</p>

<p>Churn bir istatistik değil. Her biri bir hikaye, bir öğrenme fırsatı. Bunu erken öğrenmek isterdim.</p>

<h2>Bugün Tekrar Başlasaydım Ne Yapardım?</h2>

<p>Önce topluluk kurar, sonra ürün yapardım. Bültenimi ürünü açmadan üç ay önce başlatırdım. Haftalık kullanıcı görüşmeleri için sabit zaman blokları ayarlardım. Ve ilk günden itibaren fiyatlamayı ciddiye alırdım.</p>

<p>Sıfırdan SaaS kurmak bir maraton. Ama doğru kasları geliştirirsen, en az efor en büyük ilerlemeyi sağlıyor.</p>

<hr />

<p>Sorularınız varsa <a href="mailto:merhaba@orkunaydin.com">bana yazın</a> ya da bültene abone olun — her Salı bu tür yazıları doğrudan gelen kutunuza gönderiyorum.</p>
    `,
  },
  {
    slug: "dikkat-ekonomisi-zamaninizi-geri-alin",
    title: "Dikkat Ekonomisi: Zamanınızı ve Odağınızı Geri Almak",
    excerpt:
      "Her sabah telefona uzandığınızda, o müdahale edilmemiş birkaç saatinizi zaten kaybetmişsinizdir. Dikkat ekonomisi, sizi gösteri için değil, itaat için inşa etti. İşte bu döngüyü kırmak için pratik bir çerçeve.",
    date: "20 Şubat 2026",
    readTime: 9,
    tags: ["verimlilik", "odak", "teknoloji"],
    coverImage: "/images/blog-odak-cover.jpg",
    content: `
<p>Her sabah telefona uzandığınızda, o müdahale edilmemiş birkaç saatinizi zaten kaybetmişsinizdir. Bu dramatik bir giriş değil — nörolojik bir gerçek. Uyku durumundan tam uyanıklığa geçişte beyin dopamin sistemine en hassas olduğu zamandadır ve siz tam bu anda en güçlü dikkat mühendislerinin tasarladığı bir ekrana bakıyorsunuzdur.</p>

<p>Bu yazı "sosyal medyayı bırak, kitap oku" türünden bir üretkenlik vaazı değil. Dikkat ekonomisini ve onun sizi nasıl kullandığını anladıktan sonra, bilinçli seçimler yapmanıza yardımcı olacak somut bir çerçeve.</p>

<h2>Dikkat Ekonomisi Nedir, Gerçekten?</h2>

<p>1970'lerde ekonomist Herbert Simon şunu yazdı: "Zengin bilgi, fakir dikkat yaratır." Bilgi bollaştıkça dikkat kıtlaşır ve kıt olan şey değer kazanır. Bu, dikkatinizin gerçek bir ekonomik ürün haline gelmesi demek.</p>

<p>Günümüzün büyük teknoloji şirketlerinin iş modeli basit: dikkatinizi toplayıp reklamcılara satmak. Bu modelde siz müşteri değil, ürünsünüz. Ve bu ürünün değeri, ne kadar uzun süre ekranda tutulabileceğinizle ölçülür.</p>

<img src="/images/blog-odak-inline-1.jpg" alt="Dikkat ve odak kavramı" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>Sürekli Parçalanmış Dikkat Ne Yapar?</h2>

<p>Araştırmalar açık: her kesintiden sonra tam konsantrasyona dönmek ortalama 23 dakika alıyor. Gün içinde ortalama 47 kez telefonu kontrol ediyorsak, matematiksel olarak derin çalışma için neredeyse sıfır zamanımız kalıyor.</p>

<p>Daha derin sorun ise şu: sürekli bildirim döngüsünde çalışan beyin, dikkat kasını köreltiyor. Uzun ve sıkıcı bir fikre odaklanma kapasitesi — ki bu, yaratıcılığın ve gerçek öğrenmenin temeli — zamanla eriyor.</p>

<blockquote>"Derin işin aksine sığ işi herkes yapabilir. Derin iş, rekabet edilemeyen bir avantajdır." — Cal Newport</blockquote>

<h2>Pratik Çerçeve: Üç Katmanlı Dikkat Hijyeni</h2>

<h3>Katman 1: Ortam Mimarisi</h3>

<p>Davranış değişikliği motivasyonla değil, çevresel tasarımla başlar. Motivasyona güvenmek, direnç kasını sürekli yorar. Çevreyi değiştirirseniz direnci harcamanıza gerek kalmaz.</p>

<p>Pratikte ne demek? Telefonunuzu yatak odasına götürmeyin. Bilgisayar masanızda telefon bulundurmayın. Sosyal medya uygulamalarını ana ekrandan kaldırın (silmeyin — başka sayfaya taşıyın). Bu küçük sürtünmeler, otomatik davranışı kırar.</p>

<h3>Katman 2: Zaman Bloklama</h3>

<p>Derin çalışma için "var olduğunda yapacağım" stratejisi işe yaramaz. Takvime girmeyen şey olmaz. Ben haftamı üç tür blokla yapılandırıyorum:</p>

<p><strong>Derin çalışma blokları (2-3 saat):</strong> Sabah 7-10 arası, hiç bildirim yok, tek bir proje, tam konsantrasyon. Bu bloklar kutsal; toplantı, Slack, e-posta yok.</p>

<p><strong>İletişim blokları (45 dakika):</strong> Öğle ve akşam üstü. Tüm e-postalar, Slack mesajları, yanıtlar bu bloklarda.</p>

<p><strong>Sığ çalışma blokları:</strong> Geri kalan her şey. Rutin görevler, admin işleri, araştırma.</p>

<h3>Katman 3: Dijital Kapanış Ritüeli</h3>

<p>En gözardı edilen ama belki de en önemli katman bu. Her iş günü sona erdiğinde bilinçli bir kapanış ritüeli yapmak iki şey sağlar: tamamlanmamış döngüleri kapatır (beyin bunları gece de işlemeye devam eder) ve "iş modundan" çıkışı netleştirir.</p>

<p>Benim ritüelim: yapılacaklar listesini gözden geçir, yarın için tek öncelik yaz, tarayıcı sekmelerini kapat, bilgisayarı kapat. Sonra 20 dakika yürüyüş — telefonsuz.</p>

<img src="/images/blog-odak-inline-2.jpg" alt="Sabah rutin çalışma alanı" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>Teknoloji Düşmanınız Değil</h2>

<p>Bu yazıyı okuyarak "teknoloji karşıtı" bir sonuca varmayın. Dikkat ekonomisine karşı savaşmıyoruz — onun kurallarını anlayıp kendi lehimize kullanıyoruz.</p>

<p>Benim için Twitter yaratıcı düşünce için bir laboratuvar. Podcasts uzun yürüyüşlerde beyin için gıda. YouTube teknik öğrenme için eşsiz. Mesele araçları reddetmek değil, onları biz mi kullanıyoruz yoksa onlar mı bizi kullanıyor, onu belirlemek.</p>

<h2>Bir Haftalık Deney</h2>

<p>Teorileri bir kenara bırakın. Şu hafta için tek bir şey deneyin: sabah ilk 60 dakikayı telefonunuza dokunmadan geçirin. Haberlere, sosyal medyaya, e-postaya bakmayın. Sadece 60 dakika.</p>

<p>Bu 60 dakikada ne yaptığınız önemli değil — çay iç, yürü, düşün, defter yaz. Sadece pasif tüketimden uzak durun.</p>

<p>Bir hafta sonra ne hissettiğinizi bana yazın. Tahminim şu: sabahlarınız farklı görünmeye başlayacak.</p>

<hr />

<p>Bu yazı benim haftanın her Salısı gönderdiğim <a href="#iletisim">Dijital Pusulam bülteninin</a> bir özetidir. Daha uzun versiyonu ve ek kaynaklar için abone olun.</p>
    `,
  },
  {
    slug: "turkiyeden-kuresel-dijital-is-kurmak",
    title: "Türkiye'den Küresel Bir Dijital İş Kurmak",
    excerpt:
      "İstanbul'dan San Francisco'ya ya da Berlin'e uçmak zorunda değilsiniz. Coğrafya artık kader değil. Ama bu serbestlik beraberinde kendine has zorluklar getiriyor — dil engeli, güven inşası, ödeme altyapısı ve kültürel nüanslar. İşte bunların üstesinden nasıl geldiğimi anlattım.",
    date: "10 Ocak 2026",
    readTime: 15,
    tags: ["uzaktan çalışma", "girişimcilik", "strateji"],
    coverImage: "/images/blog-global-cover.jpg",
    content: `
<p>İstanbul'dan San Francisco'ya ya da Berlin'e uçmak zorunda değilsiniz. Coğrafya artık kader değil. Bu cümleyi ilk duyduğumda inanmak istedim ama inanmakta zorlandım. 2022 yılında ilk uluslararası müşterime fatura gönderdiğimde — bir Alman girişimine, Türk lirası değil dolar ile — gerçekten inandım.</p>

<p>Bu yazı bir motivasyon konuşması değil. Türkiye'den küresel bir dijital iş kurarken yaşadığım gerçek zorluklara ve çözümlere dair somut bir rehber.</p>

<h2>Neden Küresel?</h2>

<p>Türkiye'de sadece yerel pazara hizmet etmenin cazip argümanları var: dili biliyorsunuz, kültürü biliyorsunuz, ağınız burada. Ama bazı yapısal gerçekler görmezden gelinemez:</p>

<p>Birincisi, Türk lirası değer kaybıyla birlikte TL cinsinden fiyatlandırılan bir iş sürekli yeniden fiyatlandırma stresi yaratıyor. Dolar ya da euro cinsinden gelir bu stresi ortadan kaldırıyor.</p>

<p>İkincisi, dijital ürünler için pazar büyüklüğü açısından küresel müşteri havuzu karşılaştırma yapılmayacak kadar büyük. Niche bir SaaS ürünü bile küresel pazarda yeterli müşteri bulabiliyor.</p>

<p>Üçüncüsü, küresel markalar Türkiye'den çok daha iyi nasıl kurulur sorusu, 2020'lerden itibaren yanıtlanmış durumda. Stripe, Wise, Lemon Squeezy ve benzeri araçlar bu yolu gerçekten kolaylaştırdı.</p>

<img src="/images/blog-global-inline-1.jpg" alt="İstanbul şehir manzarası" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>Zorluk 1: Dil ve İçerik</h2>

<p>İngilizce içerik üretmek çoğu Türk girişimcinin en büyük engellerinden biri. Ama burada gerçekçi olalım: mükemmel İngilizce gerekmez. "Yeterince iyi" İngilizce yeterli.</p>

<p>Benim yaklaşımım şu: Türkçe düşün, İngilizce yaz, sonra İngilizce konuşana gözden geçirt. Bu üç adım, düşünce kalitesini korurken dil engelini aşıyor.</p>

<p>Daha da pratik bir yol: içerik üretimini müşteri dilinde değil, problem dilinde yapın. "Dağıtık ekiplerde koordinasyon problemi" hem İstanbul'daki hem de Stockholm'deki bir yöneticinin aynı şekilde arama yaptığı bir kavram.</p>

<h2>Zorluk 2: Güven İnşası</h2>

<p>"Türkiye'den mi?" tepkisiyle karşılaştım mı? Evet. Bu tepkiyle başa çıkmanın yolu onu inkâr etmek değil — aksine coğrafyanın sizi nasıl daha değerli kıldığını anlatmak.</p>

<p>Türkiye, hem Doğu hem Batı perspektifine sahip, hem gelişmiş pazar hem de gelişen pazar dinamiklerini anlayan bir coğrafyada bulunuyor. Bu çift perspektif pek çok global müşteri için gerçek bir avantaj.</p>

<p>Güven inşasında en etkili bulduğum araçlar:</p>

<p><strong>Case study'ler:</strong> İlk müşterilerinizle kâr gözetmeden çalışın, sonuçlarını ölçün, yazıya dökün. Bir gerçek sonuç, on referanstan değerli.</p>

<p><strong>Açık iletişim:</strong> Nereden çalıştığınızı, hangi zaman diliminde olduğunuzu, nasıl ulaşılabileceğinizi net belirtin. Şeffaflık güven üretir.</p>

<p><strong>Sosyal kanıt:</strong> LinkedIn profiliniz, Twitter varlığınız ve müşteri yorumlarınız dijital imzanız. Bunlara yatırım yapın.</p>

<blockquote>"Nereden çalıştığınız değil, nasıl çalıştığınız önemli. Ama 'nasıl'ı kanıtlayana kadar 'nerede' sizi yargılar." — Kendi deneyimim</blockquote>

<h2>Zorluk 3: Ödeme Altyapısı</h2>

<p>Bu teknik ama kritik. Türkiye'den uluslararası ödeme almanın birkaç pratik yolu var:</p>

<p><strong>Stripe (Türk şirketi için):</strong> Türkiye'de Stripe kullanmak mümkün — ancak yabancı bir şirket kurmak (genellikle ABD veya Estonya) daha az sürtünme yaratıyor. Delaware LLC ya da Estonian e-Residency popüler seçenekler.</p>

<p><strong>Wise Business:</strong> Çok dövizli hesap, uluslararası transfer için mükemmel. Türk vergi numarası ile açılabiliyor.</p>

<p><strong>Lemon Squeezy / Paddle:</strong> SaaS için Merchant of Record hizmetleri. Siz KDV ve diğer vergi yükümlülükleriyle uğraşmıyorsunuz — onlar hallediyor.</p>

<img src="/images/blog-global-inline-2.jpg" alt="Dijital iş kurma araçları" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>Zorluk 4: Zaman Dilimi ve Senkronizasyon</h2>

<p>İstanbul UTC+3'tedir. ABD Doğu Kıyısı ile 7-8, Batı Kıyısı ile 10-11 saat fark var. Avrupa ile ise 1-2 saat fark — bu aslında çalışmak için ideal.</p>

<p>Ben Avrupa ağırlıklı müşterilerle çalışmayı tercih ediyorum kısmen bu yüzden. Asenkron iletişimi norm haline getirmek ve toplantıları minimize etmek ise uzak müşterilerin takdirini kazanıyor.</p>

<p>Pratik bir kural: her müşteri e-postasına 24 iş saati içinde yanıt garantisi verin. Bu, saat dilimi farkını sihirli şekilde önemsizleştirir.</p>

<h2>Başlamak İçin Çerçeve</h2>

<p>Küresel bir dijital iş kurmak istiyorsanız şu sırayı öneririm:</p>

<p>Önce niche'inizi belirleyin. "Dünyaya çalışacağım" değil — "uzaktan çalışma araçlarına danışmanlık yapan B2B SaaS şirketlerine çalışacağım" deyin. Niche ne kadar dar olursa bulunmak o kadar kolay olur.</p>

<p>Sonra küçük bir toplulukta görünür olun. Reddit, Indie Hackers, bir sektör Discord'u — nerede olursa olsun düzenli, değerli katkılar yapın. Müşterilerim büyük çoğunluğu bu topluluk katılımından geldi.</p>

<p>İlk müşteri için fiyatı düşürün — ama bedava vermeyin. İlk müşteri vakaya dönüşür ve vaka, ilerideki tüm müşteri kanallarını besler.</p>

<h2>Sonuç: Coğrafya Bir Engel Değil, Bir Hikaye</h2>

<p>İstanbul'dan çalıştığımı müşterilerime söylediğimde artık savunma pozisyonuna geçmiyorum. Aksine: iki kıtanın kesişiminde, Doğu ve Batı perspektiflerini bir arada getiren birinin bakış açısını sunuyorum.</p>

<p>Bu hikaye. Ve iyi hikayeler, iyi işler kurar.</p>

<hr />

<p>Küresel iş kurma sürecinizde takıldığınız somut bir nokta varsa <a href="mailto:merhaba@orkunaydin.com">bana yazın</a>. Mümkün olan her mesaja yanıt veriyorum.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count);
}
