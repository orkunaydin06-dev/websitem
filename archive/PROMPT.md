# Personal Website — Agent Prompt

## Mission

Build a high-quality, professional personal website inspired by **corey.co**. The reference site screenshots and a preferred design example are provided in the project files. Use them as structural and aesthetic reference, but apply an original design language — do not copy, re-imagine.

---

## Before You Start

1. Read `CLAUDE.md` (project system prompt, conventions, stack decisions)
2. Install and read the frontend design skill:
   ```bash
   npx claude-code-templates@latest --skill creative-design/frontend-design
   ```
3. Read the skill's `SKILL.md` before writing a single line of UI code

---

## Design Requirements

- **Avoid generic AI aesthetics** — no cookie-cutter layouts, no Lorem Ipsum vibes
- Smooth page transitions and scroll-triggered animations throughout
- Micro-interactions on buttons, links, hover states
- Fully responsive: mobile → tablet → desktop
- Strong typographic hierarchy, considered whitespace, cohesive color system
- Production-grade component quality — every detail matters

---

## Image Generation (Fal.ai — Flux Dev)

All visuals on the site — hero images, blog cover photos, inline blog images, section backgrounds — must be **AI-generated using the Fal.ai API with the Flux Dev model**.

- Fal.ai API key: `6f867b78-df14-4761-88fe-ba743ec878e4:d95819ef51d5930a38fb6a5c38ee1979`
- Model: `fal-ai/flux/dev`
- Images must be **on-topic, professional quality, and contextually relevant** to surrounding content
- Write a dedicated image generation utility/helper so it can be reused across pages and blog posts
- Generate images during the build/setup phase — do not use placeholder images

### Example Fal.ai call
```js
import * as fal from "@fal-ai/serverless-client";

fal.config({ credentials: "6f867b78-df14-4761-88fe-ba743ec878e4:d95819ef51d5930a38fb6a5c38ee1979" });

const result = await fal.subscribe("fal-ai/flux/dev", {
  input: {
    prompt: "Your detailed, professional image prompt here",
    image_size: "landscape_16_9",
    num_inference_steps: 28,
    guidance_scale: 3.5,
  },
});
// result.images[0].url
```

### ⚠️ Critical: Image Persistence for Vercel Deployment

Fal.ai returns **temporary URLs** that expire. These URLs will be broken on Vercel. You must handle image persistence properly:

**Strategy: Download & commit images to the repo**

1. After generating each image via Fal.ai, immediately download the binary and save it to `/public/images/` (e.g. `public/images/blog-post-1-cover.jpg`)
2. Reference images using local paths (`/images/blog-post-1-cover.jpg`) — never use raw Fal.ai URLs in the final source
3. Write a generation script (e.g. `scripts/generate-images.ts`) that:
   - Calls Fal.ai for each required image
   - Downloads the result with `fetch()` and saves to `/public/images/`
   - Logs the filename so it can be committed to git
4. Run this script once locally before pushing; the downloaded images are committed to the repo and served as static assets by Vercel

```ts
// scripts/generate-images.ts — example pattern
import fs from "fs";
import path from "path";

async function downloadImage(url: string, filename: string) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const outputPath = path.join(process.cwd(), "public/images", filename);
  fs.writeFileSync(outputPath, Buffer.from(buffer));
  console.log(`Saved: ${outputPath}`);
}

// After fal.subscribe(...):
await downloadImage(result.images[0].url, "hero-background.jpg");
```

5. Add `/public/images/` to `.gitignore` exclusions — make sure it is **NOT** ignored so images are committed
6. In `next.config.js`, no special `images.remotePatterns` needed since all images are local static files

---

## Vercel Deployment

The site will be deployed to **Vercel**. Configure the project accordingly from the start:

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All AI-generated images are downloaded locally, so no remote domains needed.
    // If any external image sources are added later, add them here.
    remotePatterns: [],
  },
  // Ensure static export works if needed, otherwise leave as default (server)
};

module.exports = nextConfig;
```

### vercel.json (create at project root)
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### Environment Variables
- Store the Fal.ai API key as an environment variable — do not hardcode it in committed source files
- Use `FAL_KEY` as the variable name
- Add to `.env.local` for local development:
  ```
  FAL_KEY=6f867b78-df14-4761-88fe-ba743ec878e4:d95819ef51d5930a38fb6a5c38ee1979
  ```
- Add `FAL_KEY` to Vercel environment variables (Settings → Environment Variables) — document this in `README.md`
- Reference it in code as `process.env.FAL_KEY`

### README.md
Include a deployment section explaining:
1. Clone repo and run `npm install`
2. Copy `.env.local.example` to `.env.local` and fill in `FAL_KEY`
3. Run `npm run generate-images` to generate and download all AI images
4. Commit the `/public/images/` directory
5. Push to GitHub → Vercel auto-deploys

---

## Site Structure

Build all of the following pages/sections:

| Section | Description |
|---|---|
| **Hero** | Name, tagline, CTA, social links |
| **About** | Bio, values, personality |
| **Projects** | Active + past projects with status badges |
| **Blog** | Post list + individual post pages (with AI-generated images) |
| **Speaking** | Past appearances, invite CTA |
| **Stuff I Like** | Filterable list: books, tools, podcasts, resources |
| **Contact** | Form + social links |

### Blog Requirements
- Rich, long-form content — not stub posts
- Each post has: cover image (Flux Dev), inline images, estimated read time, date, tags
- Blog list page with card layout
- Individual post page with full article layout
- At least 3 sample blog posts with real content

---

## Tech Stack

**Next.js + Tailwind CSS** (optimized for Vercel deployment). Unless `CLAUDE.md` specifies otherwise, use:
- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion for animations
- `@fal-ai/serverless-client` for image generation
- TypeScript throughout

---

## GitHub

**Do not push to GitHub yet.** A branch name will be provided separately. When the time comes, push all work to that branch — including the downloaded `/public/images/` directory so Vercel serves them correctly.

---

## Execution Order

1. Read `CLAUDE.md` and the frontend-design `SKILL.md`
2. Scaffold the Next.js project with Tailwind, Framer Motion, TypeScript
3. Create `vercel.json`, `.env.local.example`, and base `next.config.js`
4. Build design tokens (colors, typography, spacing)
5. Build layout and shared components
6. Build each page section
7. Write `scripts/generate-images.ts` — generate and download all images to `/public/images/`
8. Write blog content and integrate local images
9. Add animations and transitions
10. Test across breakpoints and verify all images load correctly
11. Write `README.md` with deployment instructions
12. Await GitHub branch instruction before pushing
