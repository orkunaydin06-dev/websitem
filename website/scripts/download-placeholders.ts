import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.join(process.cwd(), "public", "images");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const placeholders: Array<{ filename: string; w: number; h: number; id: number }> = [
  { filename: "hero-bg.jpg", w: 1920, h: 1080, id: 1040 },
  { filename: "about-portrait.jpg", w: 800, h: 1000, id: 1060 },
  { filename: "blog-saas-cover.jpg", w: 1280, h: 720, id: 180 },
  { filename: "blog-saas-inline-1.jpg", w: 1280, h: 720, id: 137 },
  { filename: "blog-saas-inline-2.jpg", w: 1280, h: 720, id: 370 },
  { filename: "blog-odak-cover.jpg", w: 1280, h: 720, id: 250 },
  { filename: "blog-odak-inline-1.jpg", w: 1280, h: 720, id: 323 },
  { filename: "blog-odak-inline-2.jpg", w: 1280, h: 720, id: 442 },
  { filename: "blog-global-cover.jpg", w: 1280, h: 720, id: 501 },
  { filename: "blog-global-inline-1.jpg", w: 1280, h: 720, id: 617 },
  { filename: "blog-global-inline-2.jpg", w: 1280, h: 720, id: 600 },
];

async function downloadImage(
  url: string,
  filename: string
): Promise<void> {
  console.log(`Downloading placeholder: ${filename}...`);
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), Buffer.from(buffer));
  console.log(`  Saved: ${filename}`);
}

async function main() {
  console.log("Downloading placeholder images from picsum.photos...\n");

  for (const p of placeholders) {
    const outputPath = path.join(OUTPUT_DIR, p.filename);
    if (fs.existsSync(outputPath)) {
      console.log(`  Skipping (exists): ${p.filename}`);
      continue;
    }
    const url = `https://picsum.photos/id/${p.id}/${p.w}/${p.h}`;
    try {
      await downloadImage(url, p.filename);
    } catch (err) {
      console.error(`  FAILED: ${p.filename} — ${err}`);
    }
  }

  console.log(
    "\nPlaceholder images ready. Replace with AI-generated images using: npm run generate-images"
  );
}

main();
