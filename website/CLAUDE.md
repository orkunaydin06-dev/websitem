# CLAUDE.md — orkunaydin.com

@AGENTS.md

Orkun Aydın'ın kişisel sitesi. Konumlandırma: **Marka ve Büyüme Stratejisti** — *Markalaşmanın sanatı. Büyümenin mimarisi.*
Tek doğruluk kaynağı: repo kökündeki [`../BRIEF.md`](../BRIEF.md). Metinler oradaki haliyle nihaidir; yazım, noktalama ve Türkçe karakterleri birebir koru. `[DÜZENLE]` etiketli yerler Orkun'un sonradan değiştirebileceği varsayımlardır.

## Ton ve hitap
- Site yalnızca Türkçe. Kod, değişken ve dosya adları İngilizce.
- Hitap her yerde **"siz"**. Ton sıcak, kişisel ve entelektüel; kurumsal klişe ("çözüm ortağınız", "yenilikçi", "360°") yok.
- Tüm hizmetler **online**. "Yüz yüze" ifadesi hiçbir yerde geçmez.
- Fiyat gösterilmez: "Kapsam ve fiyat için yazın."
- Her sayfanın tek görevi ziyaretçiyi **Tanışalım**'a (`/tanisalim`) götürmek. Takvim/randevu entegrasyonu yok.

## Doğrulanamayan iddia yasağı
- BRIEF.md'de olmayan rakam, müşteri, sonuç, referans, okur sayısı veya yayın sıklığı **yazma**.
- Rol unvanları brief'teki gibi: Google'da **Account Strategist** (Account Manager değil).
- Emin olmadığın bir metin gerekiyorsa uydurma; `[DÜZENLE]` notuyla işaretle ve Orkun'a sor.
- Kaldırılmış eski öğeleri geri getirme: "Girişimci, Ürün Kurucusu, Yazar", SaaS/bootstrapping, "Dijital Pusulam", Twitter/GitHub linkleri, merhaba@orkunaydin.com, eski hizmet yapısı (bkz. BRIEF §6).

## İçerik nerede durur
Metin değişikliği yalnızca `content/` klasörüne dokunmalı, bileşenlere değil.
- `content/site.ts` — sayfa metinleri, hizmetler, zaman çizelgesi, rakamlar, linkler, SEO alanları
- `content/fikirler/*.mdx` — yazılar (frontmatter: başlık, tarih, kategori, özet)
- `content/flags.ts` — özellik bayrakları: `aracKutusu`, `muzik` (varsayılan `false`, tek değerle açılır)
- Fotoğraflar `public/photos/` (`portre.jpg`, `calisirken.jpg`, `sahne.jpg`), logolar `public/logos/*.svg`. (Brief'teki `assets/` yerine: Next.js statik dosyaları `public/` altından sunar.) Dosya yoksa placeholder / metin logosu göster; build asla kırılmasın.

> Geçiş notu: Faz 3'e kadar içerik hâlâ `lib/data.ts` ve `lib/blog-data.ts` içinde. Yeni metin eklerken hedef yapıya taşı.

## Tasarım
- Zemin `#F6F1E9` · metin `#1F1B16` · tek vurgu `#2F4A3A` (koyu yeşil) · ikincil yüzey `#EDE6DA`
- Başlık serif (Fraunces / Instrument Serif), metin Inter. Fontlar ş ğ ı İ ç ö ü'yü eksiksiz desteklemeli; `latin-ext` subset'ini yükle.
- Referans: kaleighmoore.com — editoryal, bol boşluk, büyük serif başlıklar. Karanlık mod yok.
- Mobilde hamburger menü; "Tanışalım" butonu her zaman görünür. Hero'da rakam yok; rakam satırı küçük ve sakin.

## Stack
Next.js 16 (App Router) · React 19 · Tailwind CSS v4 (`app/globals.css` içinde `@theme`) · TypeScript.
Hosting: **Vercel** (brief Cloudflare diyordu; Vercel'de kalma kararı Faz 0'da alındı). 301'ler `next.config.ts` → `redirects()`.
Form: Web3Forms (anahtar `NEXT_PUBLIC_WEB3FORMS_KEY`, honeypot alanı zorunlu). Analitik: Cloudflare Web Analytics (script olarak, Vercel'de de çalışır).

## Komutlar
Çalışma dizini `website/`.
- `npm run dev` — geliştirme sunucusu
- `npm run build` — her değişiklikten sonra build'in geçtiğini doğrula
- `npm run lint`

## Deploy akışı
1. Değişiklikler `main` dışında bir branch'te yapılır (redesign işi: `redesign`).
2. Branch push edilir → Vercel preview URL'si oluşur.
3. Orkun preview'ı onaylar.
4. Ancak onaydan sonra `main`'e merge edilir → canlı.
`main`'e doğrudan push veya onaysız merge yapma.

## Çalışma şekli
- BRIEF §8'deki fazları sırayla uygula; her faz sonunda dur, özetle, onay iste.
- API anahtarlarını asla koda veya markdown'a yazma; `.env.local` ve hosting ortam değişkenlerinde tut.
