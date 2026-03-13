/**
 * ElevenLabs TTS with local filesystem cache.
 *
 * Hashes section text → generates mp3 once → caches to .tts-cache/.
 * Subsequent requests serve the cached file.
 */

import crypto from "crypto";
import fs from "fs/promises";
import path from "path";

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_MALE = process.env.ELEVENLABS_VOICE_MALE || "JBFqnCBsd6RMkjVDRZzb";
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_flash_v2_5";

const CACHE_DIR = path.join(process.cwd(), ".tts-cache");

// Abbreviation expansions for natural speech
const ABBREVIATIONS: [RegExp, string][] = [
  [/\bnm\b/g, "nanometres"],
  [/\bμm\b/g, "micrometres"],
  [/\bmm\b/g, "millimetres"],
  [/\bcm\b/g, "centimetres"],
  [/\bmW\b/g, "milliwatts"],
  [/\bkW\b/g, "kilowatts"],
  [/\bMW\b/g, "megawatts"],
  [/\bmJ\b/g, "millijoules"],
  [/\bW\/m²\b/g, "watts per square metre"],
  [/\bMPE\b/g, "M P E"],
  [/\bNOHD\b/g, "N O H D"],
  [/\bOD\b/g, "O D"],
  [/\bIEC\b/g, "I E C"],
  [/\bAS\/NZS\b/g, "A S N Z S"],
  [/\bUV\b/g, "U V"],
  [/\bIR\b/g, "I R"],
  [/\bCW\b/g, "C W"],
  [/\bLSO\b/g, "L S O"],
  [/\be\.g\./g, "for example"],
  [/\bi\.e\./g, "that is"],
];

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

  if (n >= 1_000_000) {
    result += numberToWords(Math.floor(n / 1_000_000)) + " million ";
    n %= 1_000_000;
  }
  if (n >= 1000) {
    result += numberToWords(Math.floor(n / 1000)) + " thousand ";
    n %= 1000;
  }
  if (n >= 100) {
    result += ONES[Math.floor(n / 100)] + " hundred";
    n %= 100;
    if (n > 0) result += " and ";
  }
  if (n >= 20) {
    result += TENS_WORDS[Math.floor(n / 10)];
    n %= 10;
    if (n > 0) result += "-";
  }
  if (n > 0) {
    result += ONES[n];
  }

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
  // En-dash and em-dash ranges: 570–590 → five hundred and seventy to five hundred and ninety
  result = result.replace(/(\d+)\s*[–—]\s*(\d+)/g, (_m: string, a: string, b: string) =>
    `${numberToWords(parseInt(a))} to ${numberToWords(parseInt(b))}`
  );
  // Hyphen ranges between numbers: 400-700 → four hundred to seven hundred
  result = result.replace(/(\d+)\s*-\s*(\d+)/g, (_m: string, a: string, b: string) =>
    `${numberToWords(parseInt(a))} to ${numberToWords(parseInt(b))}`
  );
  // Decimal numbers: 0.0035 → zero point zero zero three five
  result = result.replace(/\b\d+\.\d+\b/g, (m: string) => expandDecimal(m));
  // Standalone integers: 532 → five hundred and thirty-two
  result = result.replace(/\b(\d+)\b/g, (_m: string, num: string) => numberToWords(parseInt(num)));
  // Percent sign
  result = result.replace(/%/g, " percent");
  return result;
}

function expandAbbreviations(text: string): string {
  let result = expandNumbers(text);
  for (const [pattern, replacement] of ABBREVIATIONS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

/**
 * Get a stable cache filename for given text.
 */
function cacheKey(text: string): string {
  const hash = crypto
    .createHash("sha256")
    .update(text)
    .digest("hex")
    .slice(0, 16);
  return `${hash}.mp3`;
}

/**
 * Ensure cache directory exists.
 */
async function ensureCacheDir(): Promise<void> {
  await fs.mkdir(CACHE_DIR, { recursive: true });
}

/**
 * Return cached mp3 buffer if it exists, null otherwise.
 */
async function getCached(filename: string): Promise<Buffer | null> {
  try {
    const filePath = path.join(CACHE_DIR, filename);
    return await fs.readFile(filePath);
  } catch {
    return null;
  }
}

/**
 * Call ElevenLabs TTS API and return raw mp3 buffer.
 */
async function generateSpeech(text: string): Promise<Buffer> {
  if (!ELEVENLABS_API_KEY) {
    throw new Error("ELEVENLABS_API_KEY not configured");
  }

  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_MALE}?output_format=mp3_44100_128`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text: expandAbbreviations(text),
      model_id: MODEL_ID,
      language_code: "en",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        speed: 0.95,
      },
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`ElevenLabs API error (${res.status}): ${errorText}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * Get TTS audio buffer for section text.
 * Returns cached mp3 if available, otherwise generates and caches.
 */
export async function getTTSAudio(text: string): Promise<Buffer> {
  await ensureCacheDir();
  const filename = cacheKey(text);

  // Check cache
  const cached = await getCached(filename);
  if (cached) return cached;

  // Generate and cache
  const audio = await generateSpeech(text);
  await fs.writeFile(path.join(CACHE_DIR, filename), audio);
  return audio;
}
