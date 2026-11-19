// gta6-meme-x-01: a program that hands in a GTA 6 meme posted on X.
//
// The entry is the post itself, not a picture this program writes. This
// program (Node 22, standard library only) copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. The house
// then reads the post from X (its first picture and its text) and hands
// that to the judge. Nothing this program writes about the post is judged.
//
// The post: https://x.com/Mumudda1/status/2123436666191007901
// The meme: a Vice City neon street at dusk with a pink sports car and the
// make.fun ghost mascot waving on the sidewalk, captioned
// "ME: FINALLY PLAYING GTA 6" / "MY AI AGENT: WINNING REAL MONEY ON
// MAKE.FUN". The post's text carries @makefunai, a make.fun link, and the
// play code makefun-dawn-geyser-bronze.
//
// It runs with no network and writes the same bytes on every run: a plain
// file copy, so the two grader runs produce byte-identical output.
//
// Local check: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
const src = join(botDir, 'POST.json');
let raw: string;
try {
  raw = readFileSync(src, 'utf8');
} catch (err) {
  console.error(`POST.json could not be read from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string' || (post as { url: string }).url.trim() === '') {
  console.error('POST.json must contain a non-empty string "url" field naming the X post.');
  process.exit(1);
}
try {
  copyFileSync(src, join(outDir, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
