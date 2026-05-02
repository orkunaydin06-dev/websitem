# CLAUDE.md — Orkun Aydın Kişisel Website

## Proje Özeti
Next.js 16 + Tailwind CSS v4 + Framer Motion 12 ile geliştirilmiş kişisel website.

## Kurallar
- Tüm UI içerikleri Türkçe yazılacak; kod İngilizce kalacak
- Görseller `/public/images/` altına kaydedilecek, asla fal.ai URL'leri kaynak kodda kalmayacak
- GitHub push'u için kullanıcıdan branch adı bekleniyor — şu an push yapılmayacak
- `FAL_KEY` environment variable'ı `.env.local`'da tanımlı

## Tasarım Sistemi
- Arka plan: `#0C0B09` (sıcak siyaha yakın)
- Yüzey: `#161411`
- Metin: `#F2EDE3` (sıcak krem)
- Vurgu: `#C9A86C` (amber/bronz)
- Font display: Cormorant Garamond (serif, editorial)
- Font body: Outfit (geometric sans)

## Klasör Yapısı
```
app/           → Next.js App Router sayfaları
components/    → React bileşenleri
lib/           → Veri ve yardımcı fonksiyonlar
scripts/       → Görsel üretim scripti
public/images/ → Üretilmiş görseller (commit edilecek)
```

## Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion 12
- @fal-ai/client (görsel üretim scripti için)
- TypeScript
