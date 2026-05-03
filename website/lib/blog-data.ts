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
    slug: "buyume-zihniyeti-potansiyelinizin-sinirini-kim-koyor",
    title: "Büyüme Zihniyeti: Potansiyelinizin Sınırını Kim Koyuyor?",
    excerpt:
      "Carol Dweck'in onlarca yıllık araştırması tek bir şeyi kanıtlıyor: başarıyı belirleyen yetenek değil, yetenekler hakkındaki inançtır. Bu inanç hem kariyerinizi hem işinizi kökten değiştirebilir.",
    date: "10 Nisan 2026",
    readTime: 8,
    tags: ["büyüme", "kişisel gelişim", "strateji"],
    coverImage: "/images/blog-saas-cover.jpg",
    content: `
<p>Stanford Üniversitesi'nde psikoloji profesörü Carol Dweck yıllarca bir soruyu araştırdı: neden bazı insanlar başarısızlık karşısında daha da güçlenirken, diğerleri çöküyor?</p>

<p>Cevap şaşırtıcı derecede basitti: <strong>zihin setleri</strong>. Yeteneklerin sabit olduğuna inananlar (fixed mindset) ilk engelde duruyor. Yeteneklerin geliştirilebileceğine inananlar (growth mindset) ise engeli bir egzersiz olarak görüyor.</p>

<h2>Bu Sadece Motivasyon Kitabı Lafı Değil</h2>

<p>Büyüme zihniyeti kavramı yanlış anlaşılıyor. "Olumlu düşün, başarırsın" demek değil bu. Tam tersine, gerçekçi ve zorlu bir bakış açısı.</p>

<p>Büyüme zihniyetine sahip biri şunu söyler: "Henüz iyi değilim. Ama iyi olabilirim — doğru çabayı, doğru stratejiyle, doğru süre boyunca gösterirsem."</p>

<p>Bu fark küçük görünür ama sonuçları devasa. Google'da çalışırken gördüm bunu defalarca: en iyi pazarlamacılar hata yaptıklarında savunmaya geçmez. Hatadan sistematik bir şekilde öğrenirler.</p>

<blockquote>"Bir hatayı analiz etmeden geçmek, büyümenin en büyük düşmanıdır."</blockquote>

<h2>İşinize Nasıl Uygulanır?</h2>

<p>Büyüme zihniyeti bireysel bir beceri gibi görünse de, kurumsal kültürde de yaşar veya ölür. Şunu düşünün:</p>

<p>Ekibiniz başarısız bir kampanya sonrasında ne yapıyor? Suçlu arıyor mu, yoksa veri topluyor mu? Yöneticiler "bu işe yaramadı, neden?" diye soruyor mu, yoksa "bu işe yaramadı, bitti" mi diyor?</p>

<p>Büyüme odaklı bir kültür inşa etmek için üç pratik adım:</p>

<p><strong>1. Retrospektif rutini kur.</strong> Her kampanya, her proje, her çeyreğin ardından yapılandırılmış bir "ne öğrendik" seansı yap. Bu seans günah çıkarma toplantısı değil — öğrenme laboratuvarı.</p>

<p><strong>2. "Henüz" kelimesini kullan.</strong> "Bu konuyu bilmiyorum" değil, "Bu konuyu henüz bilmiyorum." Tek kelime. Büyük fark.</p>

<p><strong>3. Çabayı değil, stratejiyi ödüllendir.</strong> "Çok çalıştın, aferin" demek sabit zihniyeti besler. "Bu yaklaşım işe yaradı, neden işe yaradığını anlayalım" demek büyüme zihniyetini besler.</p>

<img src="/images/blog-saas-inline-1.jpg" alt="Büyüme ve öğrenme" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>Kariyer Gelişiminde Büyüme Zihniyeti</h2>

<p>Kariyerimde en önemli dönüm noktaları hep "bu konuda gerçekten iyi değilim" farkındalığından geldi. Bu itiraf zayıflık değil — büyümenin başlangıç noktası.</p>

<p>Uluslararası pazarlarda çalışmak bana şunu öğretti: farklı kültürler, farklı tüketici psikolojileri, farklı medya ortamları. Her yeni pazar bir büyüme zihniyeti egzersiziydi. "Türkiye'de işe yarayan burada çalışmaz" kabulüyle başlamak, her seferinde daha iyi stratejiler üretmemi sağladı.</p>

<h2>Sonuç: Sınırı Siz Koyuyorsunuz</h2>

<p>Potansiyelinizin sınırını başkaları değil, siz çiziyorsunuz. Ve iyi haber şu: o sınır sabit değil. Her gün, her deneyimle, her hatadan öğrenilenle biraz daha ileriye taşınıyor.</p>

<p>Büyüme zihniyeti bir varış noktası değil, bir yolculuk tarzı.</p>

<hr />

<p>Bu konuyu işinize veya ekibinize uygulamak için <a href="/#iletisim">benimle konuşabilirsiniz</a>.</p>
    `,
  },
  {
    slug: "pazarlama-stratejisi-dogru-insanin-dikkatini-kazanmak",
    title: "Pazarlama Stratejisi: Doğru İnsanın Dikkatini Kazanmanın Sanatı",
    excerpt:
      "Herkese ulaşmaya çalışmak, kimseye ulaşamamak demektir. Gerçek pazarlama stratejisi bir hedefleme meselesi değil — doğru insanla doğru zamanda doğru rezonansı kurma sanatıdır.",
    date: "20 Mart 2026",
    readTime: 10,
    tags: ["pazarlama", "strateji", "büyüme"],
    coverImage: "/images/blog-odak-cover.jpg",
    content: `
<p>Pazarlama kariyerimin başında bir direktörüm bana şunu söylemişti: "En iyi reklam, reklam gibi hissettirmeyen reklamdır." Yıllar sonra bu cümlenin ne kadar derin olduğunu anlıyorum.</p>

<p>Bugün dikkat, tarihin en kıt kaynağı. Ortalama bir kullanıcı günde 6-8 saat ekranla geçiriyor ve bu sürenin büyük çoğunluğunda bilinçli dikkatini hiçbir şeye vermiyor. Scroll ediyor, geçiyor, unutuyor.</p>

<p>Peki doğru dikkat nasıl kazanılır?</p>

<h2>Hedef Kitle Değil, İdeal Müşteri</h2>

<p>"25-45 yaş arası, orta-üst gelir grubundaki kentli tüketiciler" — bu bir hedef kitle tanımı değil, bir istatistik. Kimseyle rezonans kurmaz.</p>

<p>Güçlü bir pazarlama stratejisi şu soruyu sorar: <strong>Bu ürünü veya hizmeti hayatını değiştireceğine gerçekten inanan tek bir insan kim?</strong></p>

<p>O insanın sabah kalktığında ne düşündüğünü, akşam uyurken ne endişelendiğini, hangi kelimelerle konuştuğunu anlarsanız — mesajınız zaten yazılmış olur.</p>

<img src="/images/blog-odak-inline-1.jpg" alt="Pazarlama stratejisi" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>Konumlandırma: Zihinlerde Bir Köşe</h2>

<p>Al Ries ve Jack Trout'un klasiği "Positioning" bugün hâlâ geçerli. Marka savaşları piyasada değil, zihinlerde kazanılır.</p>

<p>Google'da Avrupa pazarlarında çalışırken gördüm: en başarılı kampanyalar en yüksek bütçeli olanlar değil, en net konumlandırılmış olanlardı. Kullanıcı tek bir şeyi hatırlıyor — o tek şeyi doğru seçmek tüm işin özü.</p>

<p>Etkili konumlandırma için üç bileşen:</p>

<p><strong>1. Kategori:</strong> Hangi zihin kategorisinde var olmak istiyorsunuz? (Lüks EV? Sağlıklı atıştırmalık? Uzaktan takım yönetimi?)</p>

<p><strong>2. Fark:</strong> O kategoride neden sizsiniz, rakibiniz değil?</p>

<p><strong>3. Kanıt:</strong> Bu farkı hangi somut veriler, referanslar veya deneyimler destekliyor?</p>

<blockquote>"Strateji neyi yapmayacağınıza karar vermektir." — Michael Porter</blockquote>

<h2>İçerik Stratejisi: Değer Önce, Satış Sonra</h2>

<p>En iyi pazarlama içeriği sorun çözer. Ürün satmaz — önce güven inşa eder, sonra satış kendiliğinden gelir.</p>

<p>Bu içeriği okuyorsanız, bunu zaten yaşıyorsunuzdur. Ben size "hizmetlerimi satın alın" demedim. Ama bu yazının sonunda, eğer pazarlama stratejinizle ilgili bir sorunuz varsa, bana ulaşmayı düşünebilirsiniz. İşte bu, içerik stratejisinin özü.</p>

<h2>Ölçme: Ne Ölçtüğünüzü Bilmeden Büyüyemezsiniz</h2>

<p>Büyük şirketlerde çalışmanın en büyük avantajı: veri kültürü. Her karar bir hipotez, her kampanya bir deney, her sonuç bir öğrenme.</p>

<p>Küçük işletmeler için de aynı disiplin mümkün. Hangi metriği optimize ediyorsunuz? Trafik mi, dönüşüm mü, müşteri yaşam boyu değeri mi? Bu soruya net cevap vermeden başlayan her strateji, fırtınada rotasız bir gemi gibidir.</p>

<hr />

<p>Pazarlama stratejinizi netleştirmek veya sıfırdan kurmak istiyorsanız <a href="/#iletisim">danışmanlık seansı ayarlayabiliriz</a>.</p>
    `,
  },
  {
    slug: "sanat-bana-strateji-ogretti",
    title: "Sanat Bana Strateji Öğretti",
    excerpt:
      "Bir tablonun kompozisyonu ile bir pazarlama kampanyasının yapısı arasında düşündüğünüzden çok daha fazla ortak nokta var. Yaratıcı düşünce ile stratejik zeka birbirinin rakibi değil — tamamlayıcısı.",
    date: "15 Şubat 2026",
    readTime: 7,
    tags: ["sanat", "felsefe", "strateji"],
    coverImage: "/images/blog-global-cover.jpg",
    content: `
<p>Müze gezmek benim için tatil değil, araştırma. Bir Rothko tablosunun önünde dururken sadece renkleri görmüyorum — duygusal rezonans mimarisini inceliyorum. Nasıl bu kadar az şeyle bu kadar çok şey anlatılabiliyor?</p>

<p>Bu soru pazarlamada da geçerli. Nasıl bu kadar az kelimeyle bu kadar derin bir bağ kurulabiliyor?</p>

<h2>Kompozisyon: Neyi Çıkardığınız Kadar Önemli</h2>

<p>Büyük sanatçıların ortak özelliği sadece neyi ekledikleri değil — neyi çıkardıklarıdır. Michelangelo mermerden heykelini çıkarmadığını, fazlalığı attığını söylerdi.</p>

<p>Stratejide de aynı ilke geçerli. En iyi strateji çoğu zaman en uzun strateji değil. Ne yapacağınıza değil, ne yapmayacağınıza karar vermek — bu ayrım büyük şirketleri küçüklerden, başarılı kampanyaları başarısızlardan ayırıyor.</p>

<p>Google'da öğrendiğim en değerli ders: büyük bütçeler sizi her şeyi yapma özgürlüğüne değil, en doğru şeyi yapma sorumluluğuna itiyor.</p>

<img src="/images/blog-global-inline-1.jpg" alt="Sanat ve strateji" class="w-full rounded-lg my-8 aspect-video object-cover" />

<h2>Estetik Zeka: Gözardı Edilen Rekabet Avantajı</h2>

<p>İş dünyası estetik zekayı hâlâ "yumuşak beceri" olarak görüyor. Yanlış. Estetik zeka şunu sorar: bu, doğru mu hissettiriyor? Bu soru kalite kontrol, kullanıcı deneyimi, marka tutarlılığı ve müşteri bağlılığı için kritik.</p>

<p>Müzik dinlemek bana ritim ve yapı öğretti. İyi bir şarkıda her enstrüman bir role sahip. Fazlası gürültü, eksiği boşluk. Aynısı bir kurumun iletişim stratejisi için de geçerli.</p>

<blockquote>"Estetik, yüzeyin altındaki derinliği görme kapasitesidir."</blockquote>

<h2>Felsefe: Neden Sorusu Her Şeyin Başlangıcı</h2>

<p>Felsefe okumak pratik görünmez. Ama benim için en pratik entelektüel egzersiz. Nietzsche'nin "neden" üzerine yazdıkları, Simon Sinek'in "Golden Circle" kavramından çok önce aynı şeyi söylüyordu: insanlar ne yaptığınıza değil, neden yaptığınıza inanır.</p>

<p>Marka stratejisi danışmanlığında ilk sorduğum soru hep aynı: "Bu şirketi neden kurduğunuzu, o ilk gün, size anlatın." Cevabın içinde strateji gizli. Pazarlamacı değil, arkeolog gibi çalışmak bazen.</p>

<h2>Yaratıcılık Bir Yetenek Değil, Bir Pratik</h2>

<p>Müze gezmek, müzik dinlemek, roman okumak — bunları zaman kaybı olarak görenlere katılmıyorum. Bu aktiviteler zihnin farklı kaslarını çalıştırıyor. O kaslar iş yerinde fark yaratıyor.</p>

<p>En iyi strateji toplantılarım çoğunlukla bir sanat müzesi sonrasına denk gelir. Tesadüf değil.</p>

<hr />

<p>Yaratıcı düşünce ile stratejik zekayı işinizde nasıl birleştireceğinizi konuşmak ister misiniz? <a href="/#iletisim">Yazın</a>.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count);
}
