// scripts/generateImageIndex.js
import fs from "fs";
import path from "path";

const imagesDir = path.resolve("public/images");
const outputJson = path.resolve("public/images/index.json");

function isImage(file) {
  const ext = file.toLowerCase();
  return (
    ext.endsWith(".jpg") ||
    ext.endsWith(".jpeg") ||
    ext.endsWith(".png") ||
    ext.endsWith(".gif") ||
    ext.endsWith(".webp") ||
    ext.endsWith(".svg")
  );
}

function generate() {
  if (!fs.existsSync(imagesDir)) {
    console.error("❌ Folder public/images not found!");
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir).filter(isImage);

  fs.writeFileSync(outputJson, JSON.stringify(files, null, 2));

  console.log("✅ index.json updated with", files.length, "images.");
}

generate();
