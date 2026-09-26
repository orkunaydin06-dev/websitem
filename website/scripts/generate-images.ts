// Fikirler yazıları için görselleri fal.ai (Flux) ile üretir ve public/images/fikirler/ altına kaydeder.
// Kullanım: npm run generate-images            → eksik görselleri üretir
//           npm run generate-images -- --force  → hepsini yeniden üretir
//           npm run generate-images -- <slug>   → yalnızca o yazının görsellerini üretir
import { fal } from "@fal-ai/client";
import fs from "node:fs";
import path from "node:path";
import { config } from "dotenv";

config({ path: path.join(process.cwd(), ".env.local") });

if (!process.env.FAL_KEY) {
  console.error("FAL_KEY bulunamadı. .env.local dosyasına ekleyin.");
  process.exit(1);
}
fal.config({ credentials: process.env.FAL_KEY });

const MODEL = "fal-ai/flux/dev";
const OUT = path.join(process.cwd(), "public/images/fikirler");

// Ortak sanat yönetimi: sitenin krem-yosun paletiyle uyumlu editoryal natürmort.
const STYLE =
  "Editorial still-life photograph for a thoughtful strategy essay. Warm cream paper and linen tones (#F6F1E9, #EDE6DA), a single deep moss green accent (#2F4A3A), soft natural window light from the left, gentle shadows, shallow depth of field, subtle 35mm film grain, calm and minimal composition with generous negative space. No people, no hands, no text, no letters, no logos.";

type Job = { file: string; prompt: string; size: "landscape_16_9" | "landscape_4_3" };

const jobs: Job[] = [
  {
    file: "buyume-zihniyeti-potansiyelinizin-sinirini-kim-koyuyor.jpg",
    prompt:
      "A small olive sapling with fresh green leaves growing from a crack in a cream plaster wall, beside a pencil line drawn on the wall marking its height like a child's growth chart.",
    size: "landscape_16_9",
  },
  {
    file: "buyume-zihniyeti-potansiyelinizin-sinirini-kim-koyuyor-2.jpg",
    prompt:
      "An open notebook on a linen tablecloth with a hand-drawn ascending staircase sketch in graphite, a sharpened pencil and a moss green ceramic cup.",
    size: "landscape_16_9",
  },
  {
    file: "pazarlama-stratejisi-dogru-insanin-dikkatini-kazanmak.jpg",
    prompt:
      "Rows of identical matte cream ceramic spheres on a cream table; only a single one of them, slightly apart, is deep moss green and caught in a narrow beam of warm light. Every other sphere is cream.",
    size: "landscape_16_9",
  },
  {
    file: "pazarlama-stratejisi-dogru-insanin-dikkatini-kazanmak-2.jpg",
    prompt:
      "A brass tuning fork resting on thick cream paper next to a single sprig of dark green eucalyptus, quiet resonance, precise arrangement.",
    size: "landscape_16_9",
  },
  {
    file: "sanat-bana-strateji-ogretti.jpg",
    prompt:
      "Overhead flat lay on linen: a painter's wooden palette with moss green and cream oil paint, a clean brush, an architect's brass compass and a steel ruler arranged in a precise composition, art meeting structure. Objects only, nobody in frame.",
    size: "landscape_16_9",
  },
  {
    file: "sanat-bana-strateji-ogretti-2.jpg",
    prompt:
      "A minimalist abstract canvas with a single deep green color field leaning against a cream wall in a quiet gallery, soft daylight, Rothko-like calm.",
    size: "landscape_16_9",
  },
];

async function run(job: Job) {
  const target = path.join(OUT, job.file);
  const result = await fal.subscribe(MODEL, {
    input: {
      prompt: `${job.prompt} ${STYLE}`,
      image_size: job.size,
      num_inference_steps: 32,
      guidance_scale: 3.5,
      num_images: 1,
      enable_safety_checker: true,
    },
  });
  const url = (result.data as { images: { url: string }[] }).images[0].url;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`İndirilemedi: ${res.status}`);
  fs.writeFileSync(target, Buffer.from(await res.arrayBuffer()));
  console.log(`✓ ${job.file}`);
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const only = args.find((a) => !a.startsWith("--"));
  fs.mkdirSync(OUT, { recursive: true });

  const todo = jobs.filter(
    (j) => (!only || j.file.startsWith(only)) && (force || !fs.existsSync(path.join(OUT, j.file)))
  );
  if (todo.length === 0) return console.log("Üretilecek görsel yok.");
  console.log(`${todo.length} görsel üretiliyor (${MODEL})…`);
  await Promise.all(todo.map((j) => run(j).catch((e) => console.error(`✗ ${j.file}: ${e.message}`))));
}

main();
