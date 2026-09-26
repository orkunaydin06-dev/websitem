# orkunaydin.com — Yeniden Tasarım Brief'i

> **Claude Code için talimat:** Bu dosyayı baştan sona oku. Bölüm 8'deki fazları sırayla uygula. Her fazın sonunda dur, yaptıklarını özetle, bir sonraki faza geçmeden onay iste. Bu dosyadaki metinler nihai metindir. Yazım, noktalama ve Türkçe karakterleri birebir koru. `[DÜZENLE]` etiketli yerler Orkun'un sonradan değiştirebileceği varsayımlardır.

---

## 1. Özet ve temel kararlar

| Konu | Karar |
|---|---|
| Kim | Orkun Aydın, **Marka ve Büyüme Stratejisti** |
| Ana iddia | **Markalaşmanın sanatı. Büyümenin mimarisi.** |
| Fark | Büyük marka disiplini (Coca-Cola, Unilever, L'Oréal, Google) + yaratıcı/sanatçı bakış (müzik, sanat, felsefe) |
| Pazar | Türkiye |
| Dil | Yalnızca Türkçe |
| Hitap | **"Siz"**, ama sıcak, kişisel ve entelektüel bir tonla. Kurumsal klişe yok. |
| Kitle | (1) Marka stratejisi isteyen küçük ve büyüyen işletmeler, (2) strateji seansı isteyen büyük markalar, (3) kişisel marka ve kariyer desteği isteyen erken kariyer profesyoneller, (4) AI'ı işine katmak isteyen ekipler ve bireyler, (5) fikirlerini takip eden girişimciler ve okurlar |
| Birincil teklif | Danışmanlık (markalar). İkincil: koçluk ve AI eğitimi (bireyler). |
| Hizmet formatı | Tümü **online**. Yüz yüze ifadesi hiçbir yerde geçmez. |
| Fiyat | Sitede **gösterilmez**. "Kapsam ve fiyat için yazın." |
| Randevu | Takvim entegrasyonu **yok**. Tüm CTA'lar iletişim formuna gider. |
| İletişim adresi | orkunaydin06@gmail.com |
| Bülten | **Kompozisyon**, sloganı *Sorgula. Yansıt. Sahnele.* Substack üzerinden. |
| Başarı ölçütü | Ayda 4 tanışma talebi `[DÜZENLE]`. Her sayfanın tek görevi ziyaretçiyi "Tanışalım"a götürmek. |

---

## 2. Teknik bağlam

- **Framework:** Next.js (mevcut site). Önce repoyu incele, mevcut yapıyı (App Router / Pages Router, statik export mu, `@opennextjs/cloudflare` mı) tespit et ve ona sadık kal.
- **Kod:** GitHub. **Hosting:** Cloudflare.
- **Fotoğraflar:** Orkun proje klasörüne koyacak (`assets/photos/`). Beklenen dosyalar:
  - `portre.jpg`: hero ve Hakkımda
  - `calisirken.jpg`: Birlikte Çalışalım
  - `sahne.jpg`: ileride Müzik bölümü için (şimdilik kullanılmıyor)

  Dosya yoksa nötr bir placeholder koy, build kırılmasın.
- **Logolar:** `assets/logos/` altında SVG. Liste: Google, Coca-Cola, Unilever, L'Oréal, Hepsiburada, Karaca. Logolar tek renkli (koyu ton), eşit optik boyutta gösterilsin. Dosya yoksa geçici olarak metin logosu kullan.
- **İletişim formu:** Backend'siz bir form servisi kullan (öneri: **Web3Forms**, alternatif: Formspree). Mesajlar orkunaydin06@gmail.com adresine gitsin. Spam koruması için honeypot alanı ekle. Gerekli anahtar ortam değişkeni olarak tanımlansın, Orkun'a nereden alınacağını söyle.
- **Analitik:** Cloudflare Web Analytics (çerezsiz, banner gerekmez).
- **İçerik kodtan ayrı olsun:** Tüm sayfa metinleri, hizmetler, zaman çizelgesi, rakamlar ve linkler `content/` klasöründe, okunabilir dosyalarda dursun (örn. `content/site.ts` ya da sayfa başına `.md`/`.json`). Yazılar `content/fikirler/*.mdx` olsun. Amaç: Orkun bir metni değiştirmek istediğinde yalnızca bu klasöre dokunulsun, bileşenlere değil.
- **CLAUDE.md:** Faz 0 sonunda proje köküne kısa bir `CLAUDE.md` yaz: ton ve hitap kuralları ("siz", sıcak-entelektüel), içeriğin nerede durduğu, doğrulanamayan iddia yazma yasağı, deploy akışı (branch → Cloudflare preview → onay → main).
- **Özellik bayrakları:** `Araç Kutusu` ve `Müzik & Yaratıcılık` kodda hazır ama **gizli** olsun. Tek bir config değeriyle açılabilsin.

---

## 3. Tasarım yönü

**Referans:** https://www.kaleighmoore.com/. Sıcak, kişisel, editoryal. Bol boşluk, büyük serif başlıklar, sade bölümler, net CTA'lar.

- **Zemin:** sıcak krem, örn. `#F6F1E9`
- **Metin:** koyu, neredeyse siyah sıcak ton, örn. `#1F1B16`
- **Vurgu rengi (tek):** koyu yeşil `#2F4A3A` (alternatif: kiremit `#B5532E`) `[DÜZENLE]`
- **İkincil yüzey:** vurgu renginin çok açık tonu ya da `#EDE6DA`
- **Tipografi:**
  - Başlıklar: serif (öneri: *Fraunces* ya da *Instrument Serif*)
  - Metin: sans-serif (öneri: *Inter*)
  - **Şart:** Seçilen fontlar Türkçe karakterleri (ş, ğ, ı, İ, ç, ö, ü) eksiksiz desteklemeli. Test et.
- **Kaleigh'den alınacak öğeler:**
  - Kayan şerit (marquee): `Sorgula ⁂ Yansıt ⁂ Sahnele ⁂`
  - "Çalışmanın yolları" kart yapısı
  - Sade rakam satırı
  - Alıntı bloğu
- **Rakamlar:** Görünür ama **ön planda değil**. Küçük ve sakin bir satır. Hero'da rakam olmayacak.
- **Mobil:** Her bölüm telefonda kusursuz görünmeli. Menü hamburger olsun, "Tanışalım" butonu görünür kalsın.
- **Karanlık mod:** Gerekli değil.

---

## 4. Site haritası

**Üst menü:** Hakkımda · Birlikte Çalışalım · Fikirler · *(gizli: Araç Kutusu)* · **[Tanışalım]** (buton, sağda)

| Sayfa | Yol |
|---|---|
| Ana sayfa | `/` |
| Hakkımda | `/hakkimda` |
| Birlikte Çalışalım | `/birlikte-calisalim` (içinde `#markalar` ve `#bireyler`) |
| Fikirler | `/fikirler` (kategori filtresi: Strateji & Pazarlama · Sanat & Felsefe · *gizli: Müzik & Yaratıcılık*) |
| Yazı | `/fikirler/[slug]` |
| Tanışalım | `/tanisalim` (iletişim formu) |
| Araç Kutusu (gizli) | `/arac-kutusu` |

**Yönlendirmeler (301):**
- `/blog` → `/fikirler`
- `/blog/:slug` → `/fikirler/:slug`
- `/blog/buyume-zihniyeti-potansiyelinizin-sinirini-kim-koyor` → `/fikirler/buyume-zihniyeti-potansiyelinizin-sinirini-kim-koyuyor` (yazım hatası düzeltmesi)
- `/#iletisim` gibi eski çapaları mümkünse `/tanisalim`'a yönlendir.

---

## 5. Sayfa metinleri

### 5.1 Ana sayfa

**Üst etiket**
> Marka ve Büyüme Stratejisti · Dublin

**H1**
> Markalaşmanın sanatı.
> Büyümenin mimarisi.

**Alt metin**
> 10 yıl boyunca Coca-Cola, Unilever ve L'Oréal'da büyüme stratejisi kurdum; bugün Google'da çalışıyorum. Bu deneyimi Türkiye'deki markalar ve kariyerini inşa eden profesyoneller için kullanıyorum.

**Butonlar:** `Tanışalım` (birincil → /tanisalim) · `Hizmetleri İncele` (ikincil → /birlikte-calisalim)

**Güven satırı (küçük)**
> ODTÜ İşletme · Lund Üniversitesi, Uluslararası Pazarlama ve Marka Yönetimi Yüksek Lisansı (İsveç)

**Görsel:** `portre.jpg`

---

**Logo şeridi**
> Bugüne kadar çalıştığım şirketler

Google · Coca-Cola · Unilever · L'Oréal · Hepsiburada · Karaca

---

**Kayan şerit:** `Sorgula ⁂ Yansıt ⁂ Sahnele ⁂`

---

**Problem bölümü**

**H2**
> Büyümek isteyen markaların iki açığı var.

**Açık 1: Netlik**
> Ne olduğunu ve kime konuştuğunu tam bilmeyen bir marka herkese seslenir, kimseye ulaşmaz. Mesaj dağılır, bütçe dağılır, ekip farklı yönlere çeker.

**Açık 2: Sistem**
> Büyüme tesadüf değildir. Fiyat, ürün portföyü, kanal ve mesaj birbirine bağlı tek bir yapıdır. Parçaları ayrı ayrı iyileştirmek, bütünü büyütmez.

**Kapanış**
> İki açık aynı yerden kapanır: sanatla kurulan bir marka, mimariyle kurulan bir büyüme.

---

**İki kapı**

**H2**
> Birlikte çalışmanın yolları

**Kart 1: Markalar İçin**
> Strateji seansından uçtan uca büyüme sprintine, ekibinize özel AI atölyesine kadar. Büyük markaların büyüme disiplinini, kendi ölçeğinize uyarlanmış haliyle.

→ `Markalar için hizmetler` (/birlikte-calisalim#markalar)

**Kart 2: Bireyler İçin**
> Kişisel markanızı ve kariyer yolunuzu netleştirin, AI'ı işinizin gerçek bir parçası yapın.

→ `Bireyler için hizmetler` (/birlikte-calisalim#bireyler)

---

**Neden farklı bakıyorum**

**H2**
> Strateji bir kompozisyondur.

> Gündüzleri fiyatlandırma mimarileri, kategori stratejileri ve büyüme planları kurdum. Geceleri müzik ürettim, sahnede çaldım, sanat ve felsefe üzerine yazdım. Zamanla ikisinin aynı işi yaptığını fark ettim: dağınık parçalardan anlamlı bir bütün kurmak.
>
> İyi bir marka, iyi bir parça gibidir. Her unsurun bir yeri, bir ritmi ve bir amacı vardır. Benim işim, markanız için o kompozisyonu birlikte kurmak.

→ `Hikâyemin tamamı` (/hakkimda)

---

**Rakam satırı (sakin, küçük)**

- **10+ yıl** FMCG, perakende ve teknoloji
- **9 ülke** Gelir büyüme stratejisi
- **€10M+** Fiyatlandırma kaynaklı gelir katkısı
- **$50M+** Liderlik ettiğim lansmanlarda satış değeri

---

**Son fikirler**

**H2:** Son fikirler

Son 3 yazı kart olarak gösterilir: kategori etiketi, tarih, okuma süresi.

→ `Tüm fikirler` (/fikirler)

---

**Bülten bloğu**

**H2**
> Kompozisyon

**Slogan**
> Sorgula. Yansıt. Sahnele.

**Metin**
> Strateji, marka ve yaratıcılık üzerine düşünceler. Gelen kutunuza, gürültüsüz.

**Buton:** `Abone Ol` → https://substack.com/@orkunnnn

**Not:** Okur sayısı ya da sıklık iddiası **yazılmayacak**.

---

**Son CTA**

**H2**
> Aklınızda bir marka, bir kariyer ya da bir fikir mi var?

> Kısa bir mesajla başlayalım.

**Buton:** `Tanışalım`

---

### 5.2 Hakkımda

**H1**
> Merhaba, ben Orkun.

**Giriş**
> Marka ve büyüme stratejistiyim. On yılı aşkın süredir markaların nasıl büyüdüğünü içeriden izliyor ve bu büyümeyi tasarlıyorum: raftaki fiyattan dokuz ülkelik gelir stratejisine, bir kategorinin konumlandırmasından yönetim kuruluna sunulan dönüşüm planlarına kadar.

**Yolculuk**
> Kariyerime L'Oréal'da kilit hesap yönetimiyle başladım. Karaca Grubu'nda CEO'ya strateji danışmanlığı yaptım, McKinsey ve Simon-Kucher ile beş dönüşüm projesini koordine ettim, ardından grubun yeni markası Homend'in satış liderliğini üstlendim. Hepsiburada'da kategori geliştirdim. Unilever'de Lipton'ın kategori stratejisini kurdum. Coca-Cola İçecek'te dokuz ülkenin gelir büyüme stratejisini yönettim.
>
> Bugün Google Dublin'de Account Strategist olarak Türkiye pazarındaki markaların dijitalde ve AI destekli pazarlamada büyümesi üzerine çalışıyorum.

**Eğitim**
> ODTÜ'de işletme okudum. Ardından İsveç'te, QS sıralamasında dünyanın ilk 100 üniversitesi arasında yer alan Lund Üniversitesi'nde uluslararası pazarlama ve marka yönetimi üzerine yüksek lisans yaptım.

**Diğer yanım**
> İşin dışında müzik üretiyor, DJ'lik yapıyor, sanat ve felsefe üzerine yazıyorum. Bunları hobi olarak değil, düşünme biçimimin parçası olarak görüyorum. Bir kompozisyonu kurmakla bir markayı kurmak arasındaki benzerlik, bu sitenin de çıkış noktası.

**Kariyer zaman çizelgesi**

| Yıl | Kurum | Rol |
|---|---|---|
| 2025– | Google | Account Strategist · Dublin |
| 2023–25 | Coca-Cola İçecek | Grup Gelir Büyüme Yöneticisi · 9 ülke |
| 2022–23 | Unilever / Lipton | Ticari Kategori & Müşteri Pazarlama Yöneticisi |
| 2021 | Hepsiburada | Kategori Geliştirme Yöneticisi |
| 2019–21 | Karaca Grubu | CEO Strateji Danışmanı & Satış Direktörü (Homend) |
| 2015–18 | L'Oréal | Kilit Hesap Yöneticisi |

**Öne çıkanlar (sade liste)**

- Lipton'da kategori stratejisiyle +%20 büyüme ve +500 baz puan brüt marj artışı (2022)
- Fiyatlandırma aksiyonlarıyla €10M+ gelir katkısı
- Karaca'da üç lansmanda $50M+ satış değeri
- Coca-Cola İçecek'te 9 ülkede gelir büyüme stratejisi; Türkiye, Kazakistan, Irak ve Özbekistan'da RGM atölyeleri

**Görsel:** `portre.jpg`

**CTA:** `Tanışalım`

---

### 5.3 Birlikte Çalışalım

**H1**
> Birlikte çalışalım

**Giriş**
> Tüm çalışmalar online yürütülür. Kapsam ve fiyat, ihtiyacınızı dinledikten sonra netleşir. Kısa bir mesajla başlamanız yeterli.

Her hizmet kartında aynı alanlar bulunur: **Kimin için · Ne elde edersiniz · Neler dahil · Format · CTA (`Bu hizmet için yazın` → /tanisalim?konu=...)**

#### Markalar İçin (`#markalar`)

**1. Strateji Seansı**
- **Kimin için:** Önünde net bir büyüme sorusu olan markalar. Büyüyen işletmelerden kurumsal ekiplere kadar.
- **Ne elde edersiniz:** Tek bir odaklı oturumda, en kritik sorunuza yönelik yazılı bir yol haritası.
- **Neler dahil:**
  - Oturum öncesi kısa brif ve mevcut verilerin incelenmesi
  - Online çalışma oturumu
  - Oturum sonrası yazılı özet ve öncelikli aksiyon listesi
  - İki hafta boyunca e-postayla takip soruları
- **Format:** Online, 2–3 saat `[DÜZENLE]`

**2. Marka & Büyüme Sprinti**
- **Kimin için:** Markasını netleştirip büyümeyi sisteme bağlamak isteyen KOBİ'ler ve büyüyen markalar.
- **Ne elde edersiniz:** Konumlandırmadan fiyata, kanaldan mesaja uzanan, uygulanabilir tek bir büyüme planı.
- **Neler dahil:**
  - Pazar, rakip ve müşteri analizi
  - Marka konumlandırması ve mesaj mimarisi
  - Fiyatlandırma ve ürün portföyü stratejisi
  - Kanal ve dijital pazarlama planı, 90 günlük aksiyon takvimi
- **Format:** Online, 4–6 hafta, haftalık oturumlar `[DÜZENLE]`

**3. AI & Dijital Dönüşüm Atölyesi**
- **Kimin için:** Pazarlama, satış ve ticari ekipler.
- **Ne elde edersiniz:** Ekibiniz AI'ı merak konusu olmaktan çıkarıp gerçek iş akışlarına entegre eder.
- **Neler dahil:**
  - Atölye öncesi ekip ihtiyaç analizi
  - Pazarlama ve ticari süreçlere özel uygulamalı atölye
  - Ekibinize özel prompt ve iş akışı kütüphanesi
  - Atölye sonrası uygulama rehberi
- **Format:** Online, yarım gün ya da tam gün `[DÜZENLE]`

#### Bireyler İçin (`#bireyler`)

**4. Kişisel Marka & Kariyer Koçluğu**
- **Kimin için:** FMCG, perakende ve teknolojide kariyerinin başındaki ya da yön değiştirmek isteyen profesyoneller.
- **Ne elde edersiniz:** Kim olduğunuzu ve nereye gittiğinizi net anlatan bir kişisel marka ve kariyer haritası.
- **Neler dahil:**
  - Kariyer haritası ve hedef belirleme
  - Kişisel marka konumlandırması
  - CV ve LinkedIn profilinin yeniden kurgulanması
  - Mülakat ve uluslararası kariyer geçişi hazırlığı
- **Format:** Online, 4 oturumluk program `[DÜZENLE]`

**5. AI Okuryazarlığı Birebir**
- **Kimin için:** AI'ı günlük işinde gerçekten kullanmak isteyen profesyoneller.
- **Ne elde edersiniz:** AI'ı rastgele denemekten çıkıp işinize oturan bir sistemle kullanırsınız.
- **Neler dahil:**
  - Mevcut iş akışınızın analizi
  - Etkili prompt yazmanın temelleri
  - İşinize özel 3–5 AI iş akışının birlikte kurulması
  - Doğru araç seçimi
- **Format:** Online, 3 oturum `[DÜZENLE]`

**Sayfa sonu CTA**
> Hangi hizmetin size uygun olduğundan emin değil misiniz? Yazın, birlikte bakalım.

`Tanışalım`

**Görsel:** `calisirken.jpg` (sayfa girişinde ya da bölümler arasında)

---

### 5.4 Fikirler

**H1**
> Fikirler

**Giriş**
> Strateji, marka, sanat ve yaratıcılık üzerine uzun soluklu yazılar.

**Kategori filtresi:** Tümü · Strateji & Pazarlama · Sanat & Felsefe · *(gizli: Müzik & Yaratıcılık)*

**Mevcut yazılar (içerik aynen korunur, yalnızca kategori atanır):**

| Yazı | Kategori |
|---|---|
| Büyüme Zihniyeti: Potansiyelinizin Sınırını Kim Koyuyor? (10 Nisan 2026) | Strateji & Pazarlama |
| Pazarlama Stratejisi: Doğru İnsanın Dikkatini Kazanmanın Sanatı (20 Mart 2026) | Strateji & Pazarlama |
| Sanat Bana Strateji Öğretti (15 Şubat 2026) | Sanat & Felsefe |

**Substack kartı (Sanat & Felsefe filtresinde ve sayfa sonunda)**
> Sanat ve felsefe denemelerimin tamamı Substack'te.

→ `Substack'te oku` (https://substack.com/@orkunnnn)

**Bülten bloğu:** Ana sayfadaki "Kompozisyon" bloğunun aynısı.

**Yazı sayfası şablonu:**
- Kategori etiketi, tarih, okuma süresi
- Okunaklı metin genişliği (~680px)
- Yazı sonunda kısa yazar kutusu, altında bülten bloğu ve `Tanışalım` CTA'sı

---

### 5.5 Tanışalım

**H1**
> Tanışalım

**Metin**
> Markanız, kariyeriniz ya da aklınızdaki bir fikir üzerine konuşmak için yazın. Her mesajı okuyor ve en geç iki iş günü içinde dönüyorum. `[DÜZENLE]`

**Form alanları**
- Adınız
- E-posta
- Konu (seçmeli): `Markam için strateji` · `Kariyerim / kişisel markam için` · `AI eğitimi` · `Diğer`. URL'deki `?konu=` parametresi seçimi önceden doldursun.
- Mesajınız
- Buton: `Gönder`
- Başarılı gönderimde: "Mesajınız ulaştı. En kısa sürede dönüyorum."

**Form yanında**
> Doğrudan e-posta: orkunaydin06@gmail.com

LinkedIn ve Instagram linkleri.

---

### 5.6 Araç Kutusu (gizli, iskelet hazır)

**H1**
> Araç Kutusu

**Metin**
> Büyük markalarda kullandığım çerçevelerin hemen kullanılabilir halleri: şablonlar, kanvaslar ve rehberler.

Ürün kartı bileşeni hazır olsun (görsel, başlık, kısa açıklama, fiyat ya da "Ücretsiz", buton). Ödeme ileride Stripe ile bağlanacak, şimdilik entegrasyon **yapılmayacak**.

---

### 5.7 Footer

> **Orkun Aydın**
> Marka ve Büyüme Stratejisti. Dublin'den, Türkiye'deki markalar için.

**Linkler:** Hakkımda · Birlikte Çalışalım · Fikirler · Tanışalım

**Sosyal:**
- LinkedIn: https://www.linkedin.com/in/orkunaydin/
- Instagram: https://www.instagram.com/orkunaydinx/
- Substack: https://substack.com/@orkunnnn
- E-posta: orkunaydin06@gmail.com

> © 2026 Orkun Aydın

---

### 5.8 SEO ve meta

| Alan | Değer |
|---|---|
| Varsayılan başlık | Orkun Aydın — Marka ve Büyüme Stratejisti |
| Başlık şablonu | `%s — Orkun Aydın` |
| Açıklama | Coca-Cola, Unilever, L'Oréal ve Google deneyimiyle markalar için büyüme stratejisi; profesyoneller için kişisel marka, kariyer koçluğu ve AI eğitimi. |
| OG başlık | Orkun Aydın — Markalaşmanın sanatı. Büyümenin mimarisi. |
| OG görsel | Krem zemin, serif başlık, portre. 1200×630, statik olarak üret. |
| Anahtar kelimeler | marka stratejisi, büyüme stratejisi, marka danışmanlığı, kişisel marka, kariyer koçluğu, AI eğitimi, Orkun Aydın |
| Dil | `lang="tr"` |
| Diğer | sitemap.xml, robots.txt, canonical URL'ler, yazılar için Article schema, ana sayfa için Person schema |

---

## 6. Silinecek ve düzeltilecekler (mevcut siteden)

- [ ] "Girişimci, Ürün Kurucusu, Yazar" (tüm meta ve OG alanlarında)
- [ ] SaaS, bootstrapping ve benzeri anahtar kelimeler
- [ ] "İstanbul'dan dünyaya" ve "Ürünler kurar, fikirler üretir, kelimeler döker"
- [ ] "Dijital Pusulam" bülteni, "3.200+ okuyucu", "Her Salı" ve dijitalpusulam.com linki
- [ ] Twitter ve GitHub linkleri
- [ ] merhaba@orkunaydin.com (yerine orkunaydin06@gmail.com)
- [ ] "Account Manager" (yerine **Account Strategist**)
- [ ] "Liderlik Gelişimi" hizmeti
- [ ] "McKinsey ve Simon Kucher metodolojileriyle" ifadesi (yerine Hakkımda'daki doğru ifade)
- [ ] Eski blog açıklaması ("girişimcilik, ürün geliştirme, verimlilik...")
- [ ] Eski hizmet yapısı (Gelir Büyüme Yönetimi / Pazarlama Stratejisi / Ticari Mükemmellik / Kariyer İvmelendirme)

---

## 7. Sonraya kalanlar (bu projenin kapsamı dışında)

- Araç Kutusu ürünleri ve Stripe entegrasyonu
- Müzik & Yaratıcılık içerikleri (SoundCloud/Mixcloud gömme, galeri)
- LinkedIn tavsiyelerinden alıntı bölümü (bileşen hazır, gizli olabilir)
- Hizmet detay sayfaları ve SSS
- İngilizce versiyon

---

## 8. Uygulama fazları

**Faz 0: Keşif**
- Repoyu incele: framework, router tipi, içerik kaynağı (MDX / JSON / CMS), Cloudflare deploy yöntemi.
- Yeni bir branch aç: `redesign`.
- Bulguları ve varsa bu brief'le çelişen noktaları özetle. **Dur, onay iste.**

**Faz 1: Hızlı temizlik (canlıya alınabilir)**
- Bölüm 6'daki metin ve link düzeltmelerini mevcut tasarım üzerinde yap.
- Bu faz tek başına deploy edilebilir olsun, sitenin çelişkileri hemen kalksın.

**Faz 2: Tasarım sistemi**
- Renk ve tipografi token'ları, boşluk ölçeği.
- Temel bileşenler: Header (mobil menü + Tanışalım butonu), Footer, Button, Section, Card, ServiceCard, PostCard, LogoStrip, Marquee, StatRow, NewsletterBlock, ContactForm.
- Türkçe karakter testi yap.

**Faz 3: Sayfalar**
- Bölüm 5'teki metinlerle tüm sayfaları kur.
- Özellik bayraklarını (Araç Kutusu, Müzik) ekle.

**Faz 4: Entegrasyon ve SEO**
- İletişim formu (Web3Forms), Cloudflare Web Analytics.
- 301 yönlendirmeleri, meta, OG görseli, sitemap, schema.

**Faz 5: Kalite kontrol**
- Mobil ve masaüstü görsel kontrol.
- Tüm linkler ve yönlendirmeler.
- Form testi.
- Lighthouse: performans, erişilebilirlik ve SEO 90+.
- Türkçe karakterler, eksik görsel placeholder'ları.
- Preview URL'sini paylaş, Orkun onaylayınca `main`'e merge et.
