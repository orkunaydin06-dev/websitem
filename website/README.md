# Orkun Aydın — Kişisel Website

Kişisel website projesi. Next.js 16 + Tailwind CSS v4 + Framer Motion ile geliştirilmiş, Vercel'e deploy edilmek üzere yapılandırılmıştır.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion 12**
- **TypeScript**
- **@fal-ai/client** — AI görsel üretimi

---

## Kurulum

```bash
# 1. Depoyu klonla
git clone https://github.com/orkunaydin/orkunaydin.com.git
cd orkunaydin.com

# 2. Bağımlılıkları yükle
npm install

# 3. Ortam değişkenlerini ayarla
cp .env.local.example .env.local
# .env.local dosyasını düzenleyip FAL_KEY'i gir

# 4. AI görsellerini üret ve indir
npm run generate-images

# 5. Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

---

## Ortam Değişkenleri

`.env.local` dosyasına aşağıdaki değişkeni ekle:

```
FAL_KEY=your_fal_ai_key_here
```

Fal.ai API anahtarını [fal.ai/dashboard](https://fal.ai/dashboard) adresinden edinebilirsin.

---

## Görsel Üretimi

Sitedeki tüm görseller Fal.ai API üzerinden Flux Dev modeli kullanılarak üretilir.

```bash
# AI görselleri üret ve /public/images/ dizinine kaydet
npm run generate-images
```

**Önemli:** Fal.ai geçici URL döndürür. Script görselleri otomatik olarak indirir ve `/public/images/` dizinine kaydeder. Bu dizinin `.gitignore`'da **olmadığından** emin ol — görsellerin repo'ya commit edilmesi gerekiyor.

Geliştirme sırasında placeholder görsel kullanmak istersen:

```bash
npx tsx scripts/download-placeholders.ts
```

---

## Vercel Deploy

### Adımlar

1. GitHub'a push et (branch adını kullanıcıdan öğren)
2. [vercel.com](https://vercel.com) üzerinde projeyi import et
3. **Settings → Environment Variables** bölümünden `FAL_KEY` değişkenini ekle
4. Deploy et

### Yapı

`vercel.json` dosyası zaten yapılandırılmıştır:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

> **Not:** Vercel build sırasında görsel üretme scriptini çalıştırmaz. `/public/images/` dizinini commit et, Vercel statik dosya olarak servis eder.

---

## Proje Yapısı

```
website/
├── app/
│   ├── layout.tsx          ← Kök layout (fontlar, metadata)
│   ├── page.tsx            ← Ana sayfa
│   ├── globals.css         ← Tasarım sistemi (Tailwind v4 @theme)
│   └── blog/
│       ├── page.tsx        ← Blog listesi
│       └── [slug]/
│           └── page.tsx    ← Blog yazı sayfası
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Speaking.tsx
│   │   ├── StuffILike.tsx
│   │   └── Contact.tsx
│   └── blog/
│       └── BlogCard.tsx
├── lib/
│   ├── data.ts             ← Projeler, konuşmalar, sevdiklerim
│   ├── blog-data.ts        ← Blog yazıları
│   └── motion.ts           ← Framer Motion yardımcıları
├── scripts/
│   ├── generate-images.ts  ← Fal.ai ile görsel üretimi
│   └── download-placeholders.ts ← Geliştirme için placeholder
└── public/
    └── images/             ← Üretilmiş görseller (commit edilmeli)
```

---

## İçerik Güncelleme

Tüm içerik `lib/` altındaki veri dosyalarında tutulur:

- **Projeler:** `lib/data.ts` → `projects` dizisi
- **Konuşmalar:** `lib/data.ts` → `speakingEvents` dizisi
- **Sevdiklerim:** `lib/data.ts` → `stuffILike` dizisi
- **Blog yazıları:** `lib/blog-data.ts` → `blogPosts` dizisi
