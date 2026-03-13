import { NextRequest, NextResponse } from "next/server";
import { getTTSAudio } from "@/lib/elevenlabs";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Missing text" }, { status: 400 });
    }

    // Cap at 5000 chars to avoid abuse
    if (text.length > 5000) {
      return NextResponse.json({ error: "Text too long" }, { status: 400 });
    }

    const audio = await getTTSAudio(text);

    return new NextResponse(new Uint8Array(audio), {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audio.length.toString(),
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("TTS error:", err);
    return NextResponse.json(
      { error: "Failed to generate audio" },
      { status: 500 }
    );
  }
}
