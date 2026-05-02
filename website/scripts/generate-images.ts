import { fal } from "@fal-ai/client";
import fs from "fs";
import path from "path";
import { config } from "dotenv";

config({ path: path.join(process.cwd(), ".env.local") });

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error("FAL_KEY environment variable not set in .env.local");
  process.exit(1);
}

fal.config({ credentials: FAL_KEY });

const OUTPUT_DIR = path.join(process.cwd(), "public", "images");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

type FluxDevOutput = {
  images: Array<{ url: string; width: number; height: number; content_type: string }>;
  timings: Record<string, number>;
  seed: number;
  has_nsfw_concepts: boolean[];
  prompt: string;
};

const images: Array<{
  filename: string;
  prompt: string;
  size: "landscape_16_9" | "portrait_4_3" | "square_hd";
  steps?: number;
}> = [
  {
    filename: "hero-bg.jpg",
    prompt:
      "Dramatic twilight panorama of Istanbul skyline seen from a hilltop, the Bosphorus Bridge glowing in warm amber and copper light, minarets silhouetted against a deep indigo sky with scattered gold clouds. Cinematic editorial photography, long exposure light trails on the bridge, ultra-wide angle, rich warm tones, sophisticated and timeless atmosphere.",
    size: "landscape_16_9",
    steps: 30,
  },
  {
    filename: "about-portrait.jpg",
    prompt:
      "Professional editorial portrait of a young Turkish man in his late 20s, seated at a minimal modern desk with an open notebook and a MacBook. Warm, directional golden hour window light from the left. Shallow depth of field, bokeh background showing bookshelves. Thoughtful, confident expression. Editorial photography style, warm amber and charcoal tones, sophisticated and intellectual atmosphere.",
    size: "portrait_4_3",
    steps: 30,
  },
  {
    filename: "blog-saas-cover.jpg",
    prompt:
      "Abstract visualization of software architecture: glowing amber and gold wireframe nodes connected by luminous threads against a deep dark background. Circuit-like geometric patterns, data flows visualized as streams of light. Editorial tech photography style, warm gold accents on near-black background, sophisticated and modern. High detail, dramatic lighting.",
    size: "landscape_16_9",
    steps: 28,
  },
  {
    filename: "blog-saas-inline-1.jpg",
    prompt:
      "Close-up of handwritten notes on cream-colored paper, filled with diagrams, arrows, and user journey maps for a software product. A pencil and vintage ruler rest beside the notes. Warm overhead light, editorial photography, shallow depth of field, warm tones.",
    size: "landscape_16_9",
    steps: 25,
  },
  {
    filename: "blog-saas-inline-2.jpg",
    prompt:
      "Minimalist workspace at dusk: a laptop screen glowing amber in a dimly lit room, a ceramic mug of tea, an open notebook with a single handwritten insight. Dark ambient mood, warm accent lighting, editorial still life photography, sophisticated and contemplative.",
    size: "landscape_16_9",
    steps: 25,
  },
  {
    filename: "blog-odak-cover.jpg",
    prompt:
      "A single focused beam of warm golden light cutting through a dark room, illuminating an open book and a steaming cup of coffee on a dark wooden desk. Deep dramatic shadows, high contrast, minimalist composition. Editorial photography style, warm amber tones on deep black background, meditative and focused atmosphere.",
    size: "landscape_16_9",
    steps: 28,
  },
  {
    filename: "blog-odak-inline-1.jpg",
    prompt:
      "Conceptual photograph of an hourglass with golden sand, placed on a dark surface. Soft, dramatic side lighting creates long warm shadows. Background is blurred bookshelves. Minimalist editorial still life, warm amber tones, sharp focus on the hourglass, meditative atmosphere.",
    size: "landscape_16_9",
    steps: 25,
  },
  {
    filename: "blog-odak-inline-2.jpg",
    prompt:
      "Early morning workspace with a clear desk, warm sunrise light streaming through a window. A journal open to a blank page, a single pen, and a glass of water. Clean, minimal, focused. Editorial photography, warm golden tones, soft shadows, peaceful and productive atmosphere.",
    size: "landscape_16_9",
    steps: 25,
  },
  {
    filename: "blog-global-cover.jpg",
    prompt:
      "Breathtaking aerial view of Istanbul's Golden Horn at sunset, warm golden hour light painting the historic peninsula in amber and sienna. The Galata Tower visible, boats on the water leaving white trails. Editorial travel photography, cinematic wide angle, rich warm colors, historical grandeur meets modern city.",
    size: "landscape_16_9",
    steps: 30,
  },
  {
    filename: "blog-global-inline-1.jpg",
    prompt:
      "Vintage map of Istanbul and the Bosphorus waterway, partially unrolled on a dark mahogany table, with a compass, a fountain pen, and scattered architectural sketches. Warm candlelight effect, deep shadows, editorial flat lay photography, warm amber tones.",
    size: "landscape_16_9",
    steps: 25,
  },
  {
    filename: "blog-global-inline-2.jpg",
    prompt:
      "Multiple laptop screens and devices showing global maps, currency charts, and communication tools. Dark productivity setup, warm accent lighting, editorial tech photography. Multiple screens showing world maps and digital tools, sophisticated remote work aesthetic.",
    size: "landscape_16_9",
    steps: 25,
  },
];

async function downloadImage(url: string, filename: string): Promise<void> {
  console.log(`  Downloading: ${filename}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
  const buffer = await res.arrayBuffer();
  const outputPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(outputPath, Buffer.from(buffer));
  console.log(`  Saved: ${outputPath}`);
}

async function generateImage(item: (typeof images)[0]): Promise<void> {
  console.log(`\nGenerating: ${item.filename}`);
  console.log(`  Prompt: ${item.prompt.slice(0, 80)}...`);

  const result = await fal.subscribe("fal-ai/flux/dev", {
    input: {
      prompt: item.prompt,
      image_size: item.size,
      num_inference_steps: item.steps ?? 28,
      guidance_scale: 3.5,
      num_images: 1,
      enable_safety_checker: true,
    },
  });

  const output = result.data as FluxDevOutput;
  if (!output.images?.length) {
    throw new Error(`No images returned for ${item.filename}`);
  }

  await downloadImage(output.images[0].url, item.filename);
}

async function main() {
  console.log("Starting image generation...\n");
  console.log(`Generating ${images.length} images to: ${OUTPUT_DIR}\n`);

  const failed: string[] = [];

  for (const image of images) {
    try {
      await generateImage(image);
    } catch (err) {
      console.error(`  ERROR generating ${image.filename}:`, err);
      failed.push(image.filename);
    }
  }

  console.log("\n--- Generation Complete ---");
  console.log(`✓ Success: ${images.length - failed.length}/${images.length}`);
  if (failed.length > 0) {
    console.log(`✗ Failed: ${failed.join(", ")}`);
    process.exit(1);
  } else {
    console.log(
      "\nAll images saved to /public/images/ — commit them to the repo."
    );
  }
}

main();
