"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type PlayState = "idle" | "loading" | "playing" | "paused";

export default function ReadAloudButton({ text }: { text: string }) {
  const [state, setState] = useState<PlayState>("idle");
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobUrlRef = useRef<string | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress(audio.currentTime / audio.duration);
    }
    if (state === "playing") {
      rafRef.current = requestAnimationFrame(updateProgress);
    }
  }, [state]);

  useEffect(() => {
    if (state === "playing") {
      rafRef.current = requestAnimationFrame(updateProgress);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state, updateProgress]);

  const ensureAudio = useCallback(async (): Promise<HTMLAudioElement> => {
    if (!blobUrlRef.current) {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("TTS request failed");
      const blob = await res.blob();
      blobUrlRef.current = URL.createObjectURL(blob);
    }

    if (!audioRef.current) {
      const audio = new Audio();
      audio.addEventListener("ended", () => {
        setState("idle");
        setProgress(0);
      });
      audioRef.current = audio;
    }

    if (!audioRef.current.src || audioRef.current.src !== blobUrlRef.current) {
      audioRef.current.src = blobUrlRef.current;
    }

    return audioRef.current;
  }, [text]);

  const play = useCallback(async () => {
    setState("loading");
    try {
      const audio = await ensureAudio();
      await audio.play();
      setState("playing");
    } catch (err) {
      console.error("Read aloud error:", err);
      setState("idle");
    }
  }, [ensureAudio]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setState("paused");
  }, []);

  const rewind = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setProgress(0);
    setState("idle");
  }, []);

  // Idle state — just show the play button
  if (state === "idle") {
    return (
      <button
        onClick={play}
        className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-accent-blue transition-colors"
        title="Read section aloud"
      >
        <SpeakerIcon />
        Read aloud
      </button>
    );
  }

  // Loading state
  if (state === "loading") {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
        <LoadingIcon />
        Loading…
      </div>
    );
  }

  // Playing / paused — show mini player
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-surface-raised border border-border-subtle px-2 py-1">
      {/* Rewind 10s */}
      <button
        onClick={rewind}
        className="p-1 text-text-tertiary hover:text-foreground transition-colors"
        title="Rewind 10 seconds"
      >
        <RewindIcon />
      </button>

      {/* Play / Pause */}
      <button
        onClick={state === "playing" ? pause : play}
        className="p-1 text-accent-blue hover:text-accent-blue/80 transition-colors"
        title={state === "playing" ? "Pause" : "Resume"}
      >
        {state === "playing" ? <PauseIcon /> : <PlayIcon />}
      </button>

      {/* Stop */}
      <button
        onClick={stop}
        className="p-1 text-text-tertiary hover:text-foreground transition-colors"
        title="Stop"
      >
        <StopIcon />
      </button>

      {/* Progress bar */}
      <div className="w-16 h-1 rounded-full bg-border-subtle ml-1 overflow-hidden">
        <div
          className="h-full bg-accent-blue rounded-full transition-[width] duration-200"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}

function SpeakerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <rect x="6" y="6" width="12" height="12" rx="1" />
    </svg>
  );
}

function RewindIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  );
}

function LoadingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
