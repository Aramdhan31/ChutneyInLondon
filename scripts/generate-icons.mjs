import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const source = join("public", "355866353_1436703107143090_803681614561195118_n.jpg");

const targets = [
  { name: "apple-icon-57x57.png", size: 57 },
  { name: "apple-icon-60x60.png", size: 60 },
  { name: "apple-icon-72x72.png", size: 72 },
  { name: "apple-icon-76x76.png", size: 76 },
  { name: "apple-icon-114x114.png", size: 114 },
  { name: "apple-icon-120x120.png", size: 120 },
  { name: "apple-icon-144x144.png", size: 144 },
  { name: "apple-icon-152x152.png", size: 152 },
  { name: "apple-icon-180x180.png", size: 180 },
  { name: "android-icon-192x192.png", size: 192 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-96x96.png", size: 96 },
  { name: "favicon-16x16.png", size: 16 },
  { name: "ms-icon-144x144.png", size: 144 },
];

async function generateIcon({ name, size }) {
  const destination = join("public", name);
  await mkdir(dirname(destination), { recursive: true });

  await sharp(source)
    .resize(size, size, {
      fit: "cover",
      position: "attention",
      withoutEnlargement: false,
    })
    .png()
    .toFile(destination);
}

async function main() {
  try {
    await Promise.all(targets.map(generateIcon));
    // Provide a higher resolution social sharing image.
    await sharp(source)
      .resize(1200, 630, {
        fit: "cover",
        position: "attention",
        withoutEnlargement: false,
      })
      .jpeg({ quality: 90 })
      .toFile(join("public", "og-image.jpg"));
    console.log("Icons and Open Graph image generated successfully.");
  } catch (error) {
    console.error("Failed to generate icons:", error);
    process.exitCode = 1;
  }
}

main();

