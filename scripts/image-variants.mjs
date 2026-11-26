/**
 * Makes the smaller WebP copies the Img component offers in its srcset.
 * Processed photography ships as `name.webp` (up to 1920 wide) plus `name-960.webp`;
 * this adds `name-480.webp` and `name-720.webp` next to every image that has a -960 copy,
 * so phones and small card slots don't download more pixels than they show.
 * Existing files are left alone. Run with `npm run images`.
 */
import { readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

export const WIDTHS = [480, 720];
const ROOT = join(process.cwd(), 'public/images');

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

let made = 0;
for (const file of walk(ROOT)) {
  if (!file.endsWith('-960.webp')) continue;
  const master = file.replace(/-960\.webp$/, '.webp');
  if (!existsSync(master)) continue;
  for (const w of WIDTHS) {
    const out = file.replace(/-960\.webp$/, `-${w}.webp`);
    if (existsSync(out)) continue;
    await sharp(master).resize({ width: w, withoutEnlargement: true }).webp({ quality: 76, effort: 6 }).toFile(out);
    made++;
  }
}
console.log(`Made ${made} image variant(s).`);
