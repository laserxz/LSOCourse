/**
 * Pre-generate all TTS audio files as static assets.
 *
 * Reads module content, checks .tts-cache/ for existing files,
 * generates any missing ones via ElevenLabs API,
 * then copies all audio to public/audio/module1/{sectionId}-{paraIndex}.mp3
 *
 * Usage: npx tsx scripts/prebuild-tts.ts
 */

import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { module1Sections } from "../src/data/module1/content";

// --- Config ---
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_MALE = process.env.ELEVENLABS_VOICE_MALE || "JBFqnCBsd6RMkjVDRZzb";
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_flash_v2_5";

const CACHE_DIR = path.join(process.cwd(), ".tts-cache");
const OUTPUT_DIR = path.join(process.cwd(), "public", "audio", "module1");

// --- Text processing (same as elevenlabs.ts) ---
const ONES = [
  "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen",
];
const TENS_WORDS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const DIGIT_NAMES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function numberToWords(n: number): string {
  if (n === 0) return "zero";
  if (n < 0) return "minus " + numberToWords(-n);
  let result = "";
  if (n >= 1_000_000) { result += numberToWords(Math.floor(n / 1_000_000)) + " million "; n %= 1_000_000; }
  if (n >= 1000) { result += numberToWords(Math.floor(n / 1000)) + " thousand "; n %= 1000; }
  if (n >= 100) { result += ONES[Math.floor(n / 100)] + " hundred"; n %= 100; if (n > 0) result += " and "; }
  if (n >= 20) { result += TENS_WORDS[Math.floor(n / 10)]; n %= 10; if (n > 0) result += "-"; }
  if (n > 0) result += ONES[n];
  return result.trim();
}

function expandDecimal(match: string): string {
  const [whole, frac] = match.split(".");
  if (!frac) return numberToWords(parseInt(whole));
  const fracWords = frac.split("").map((d) => DIGIT_NAMES[parseInt(d)] || d);
  return `${numberToWords(parseInt(whole))} point ${fracWords.join(" ")}`;
}

function expandNumbers(text: string): string {
  let result = text;
  result = result.replace(/(\d+)\s*[–—]\s*(\d+)/g, (_m, a, b) => `${numberToWords(parseInt(a))} to ${numberToWords(parseInt(b))}`);
  result = result.replace(/(\d+)\s*-\s*(\d+)/g, (_m, a, b) => `${numberToWords(parseInt(a))} to ${numberToWords(parseInt(b))}`);
  result = result.replace(/\b\d+\.\d+\b/g, (m) => expandDecimal(m));
  result = result.replace(/\b(\d+)\b/g, (_m, num) => numberToWords(parseInt(num)));
  result = result.replace(/%/g, " percent");
  return result;
}

const ABBREVIATIONS: [RegExp, string][] = [
  [/\bnm\b/g, "nanometres"], [/\bμm\b/g, "micrometres"], [/\bmm\b/g, "millimetres"],
  [/\bcm\b/g, "centimetres"], [/\bmW\b/g, "milliwatts"], [/\bkW\b/g, "kilowatts"],
  [/\bMW\b/g, "megawatts"], [/\bmJ\b/g, "millijoules"], [/\bW\/m²\b/g, "watts per square metre"],
  [/\bMPE\b/g, "M P E"], [/\bNOHD\b/g, "N O H D"], [/\bOD\b/g, "O D"],
  [/\bIEC\b/g, "I E C"], [/\bAS\/NZS\b/g, "A S N Z S"], [/\bUV\b/g, "U V"],
  [/\bIR\b/g, "I R"], [/\bCW\b/g, "C W"], [/\bLSO\b/g, "L S O"],
  [/\be\.g\./g, "for example"], [/\bi\.e\./g, "that is"],
];

function expandAbbreviations(text: string): string {
  let result = expandNumbers(text);
  for (const [pattern, replacement] of ABBREVIATIONS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function cacheKey(text: string): string {
  return crypto.createHash("sha256").update(text).digest("hex").slice(0, 16) + ".mp3";
}

async function generateSpeech(text: string): Promise<Buffer> {
  if (!ELEVENLABS_API_KEY) throw new Error("ELEVENLABS_API_KEY not set");
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_MALE}?output_format=mp3_44100_128`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "xi-api-key": ELEVENLABS_API_KEY },
    body: JSON.stringify({
      text: expandAbbreviations(text),
      model_id: MODEL_ID,
      language_code: "en",
      voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: 0.95 },
    }),
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`ElevenLabs API error (${res.status}): ${errorText}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

// --- Main ---
async function main() {
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Build list of all paragraphs with their static filenames
  const items: { key: string; text: string }[] = [];
  for (const section of module1Sections) {
    const allParas = [
      ...section.paragraphs,
      ...(section.keyTakeaway ? [section.keyTakeaway] : []),
    ];
    for (let i = 0; i < allParas.length; i++) {
      items.push({ key: `${section.id}-${i}`, text: allParas[i] });
    }
  }

  console.log(`Total paragraphs: ${items.length}`);

  let cached = 0;
  let generated = 0;
  let failed = 0;

  for (const item of items) {
    const outputPath = path.join(OUTPUT_DIR, `${item.key}.mp3`);
    const cacheFile = path.join(CACHE_DIR, cacheKey(item.text));

    // Check if static file already exists
    try {
      await fs.access(outputPath);
      console.log(`  [exists] ${item.key}.mp3`);
      cached++;
      continue;
    } catch {}

    // Check .tts-cache
    try {
      const data = await fs.readFile(cacheFile);
      await fs.writeFile(outputPath, data);
      console.log(`  [cache→static] ${item.key}.mp3`);
      cached++;
      continue;
    } catch {}

    // Generate via API
    try {
      console.log(`  [generating] ${item.key}.mp3 ...`);
      const audio = await generateSpeech(item.text);
      await fs.writeFile(outputPath, audio);
      await fs.writeFile(cacheFile, audio); // also save to cache
      generated++;
      console.log(`  [done] ${item.key}.mp3 (${Math.round(audio.length / 1024)}KB)`);
      // Small delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, 500));
    } catch (err) {
      console.error(`  [FAILED] ${item.key}.mp3: ${err}`);
      failed++;
    }
  }

  console.log(`\nDone: ${cached} cached, ${generated} generated, ${failed} failed`);
  console.log(`Static files in: ${OUTPUT_DIR}`);
}

main().catch(console.error);
