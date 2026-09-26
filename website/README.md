# orkunaydin.com

Orkun Aydın — Marka ve Büyüme Stratejisti. Next.js 16 (App Router) + Tailwind CSS v4, Vercel'de barınıyor.

Tasarım ve metinlerin tek kaynağı: [`../BRIEF.md`](../BRIEF.md). Çalışma kuralları: [`CLAUDE.md`](CLAUDE.md).

## Yerelde çalıştırma

```bash
cd website
npm install
cp .env.local.example .env.local   # anahtarı doldurun
npm run dev                        # http://localhost:3000
```

## Ortam değişkenleri

| Değişken | Ne için | Nereden |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | İletişim formu, mesajlar orkunaydin06@gmail.com'a gelir | web3forms.com → e-posta adresini girin, anahtar gelen kutunuza gelir |

Vercel'de: **Project → Settings → Environment Variables** altına aynı adla ekleyin (Production + Preview).

## Deploy

1. Değişiklikler ayrı bir branch'te yapılır ve GitHub'a push edilir.
2. Vercel o branch için otomatik bir **preview URL'si** üretir.
3. Preview onaylanınca branch `main`'e merge edilir → Vercel canlıya alır.
