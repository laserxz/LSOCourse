"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type PlayState = "idle" | "loading" | "playing" | "paused";

// Each player instance gets a unique ID so it can ignore its own solo events
let nextPlayerId = 0;

interface SectionPlayerProps {
  sectionId: string;
  paragraphs: string[];
  onActiveParagraph: (index: number | null) => void;
}

export default function SectionPlayer({
  sectionId,
  paragraphs,
  onActiveParagraph,
}: SectionPlayerProps) {
  const [state, setState] = useState<PlayState>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobUrlsRef = useRef<(string | null)[]>(paragraphs.map(() => null));
  const rafRef = useRef<number | null>(null);
  const stoppedRef = useRef(false);
  const playerIdRef = useRef<number>(-1);

  // Assign stable ID on mount
  useEffect(() => {
    playerIdRef.current = nextPlayerId++;
  }, []);

  const updateProgress = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress(audio.currentTime / audio.duration);
    }
    rafRef.current = requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    if (state === "playing") {
      rafRef.current = requestAnimationFrame(updateProgress);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state, updateProgress]);

  // Solo: stop this player when another player starts
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail !== playerIdRef.current) {
        stoppedRef.current = true;
        if (usingSpeechRef.current) {
          window.speechSynthesis.cancel();
          utteranceRef.current = null;
          usingSpeechRef.current = false;
        }
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.onended = null;
          audioRef.current.currentTime = 0;
        }
        setProgress(0);
        setCurrentIndex(0);
        setState("idle");
      }
    };
    window.addEventListener("tts-solo", handler);
    return () => window.removeEventListener("tts-solo", handler);
  }, []);

  // Sync highlight with current index
  useEffect(() => {
    if (state === "playing" || state === "paused" || state === "loading") {
      onActiveParagraph(currentIndex);
    } else {
      onActiveParagraph(null);
    }
  }, [currentIndex, state, onActiveParagraph]);

  // Track whether we're using browser speech fallback
  const usingSpeechRef = useRef(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speechProgressRef = useRef<number>(0);

  const fetchAudio = useCallback(
    async (index: number): Promise<string> => {
      const cached = blobUrlsRef.current[index];
      if (cached) return cached;

      // Try pre-generated static file first
      const staticUrl = `/audio/module1/${sectionId}-${index}.mp3`;
      const staticRes = await fetch(staticUrl, { method: "HEAD" });
      if (staticRes.ok) {
        blobUrlsRef.current[index] = staticUrl;
        return staticUrl;
      }

      // Fall back to API
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: paragraphs[index] }),
      });
      if (!res.ok) throw new Error("TTS request failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      blobUrlsRef.current[index] = url;
      return url;
    },
    [paragraphs, sectionId]
  );

  // Cancel any in-progress browser speech
  const cancelSpeech = useCallback(() => {
    if (usingSpeechRef.current) {
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
      usingSpeechRef.current = false;
    }
  }, []);

  // Play a paragraph using browser speech synthesis as fallback
  const playSpeechFallback = useCallback(
    (index: number) => {
      if (index >= paragraphs.length) {
        setState("idle");
        setCurrentIndex(0);
        setProgress(0);
        usingSpeechRef.current = false;
        return;
      }

      usingSpeechRef.current = true;
      const utterance = new SpeechSynthesisUtterance(paragraphs[index]);
      utteranceRef.current = utterance;

      // Try to pick a good English voice
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(
        (v) => v.lang.startsWith("en") && v.name.toLowerCase().includes("male")
      ) || voices.find((v) => v.lang.startsWith("en-GB"))
        || voices.find((v) => v.lang.startsWith("en"));
      if (preferred) utterance.voice = preferred;

      utterance.rate = 0.95;
      utterance.pitch = 1;

      // Approximate progress via boundary events
      const textLen = paragraphs[index].length;
      utterance.onboundary = (e) => {
        if (e.charIndex !== undefined) {
          speechProgressRef.current = e.charIndex / textLen;
          setProgress(speechProgressRef.current);
        }
      };

      utterance.onend = () => {
        if (!stoppedRef.current) {
          setProgress(0);
          playSpeechFallback(index + 1);
        }
      };

      utterance.onerror = () => {
        if (!stoppedRef.current) {
          setState("idle");
          usingSpeechRef.current = false;
        }
      };

      window.speechSynthesis.speak(utterance);
      setState("playing");
    },
    [paragraphs]
  );

  const playIndex = useCallback(
    async (index: number) => {
      if (index >= paragraphs.length) {
        setState("idle");
        setCurrentIndex(0);
        setProgress(0);
        return;
      }

      stoppedRef.current = false;
      cancelSpeech();
      setCurrentIndex(index);
      setState("loading");

      // Stop all other players
      window.dispatchEvent(new CustomEvent("tts-solo", { detail: playerIdRef.current }));

      try {
        const url = await fetchAudio(index);
        if (stoppedRef.current) return;

        if (!audioRef.current) {
          audioRef.current = new Audio();
        }

        // Pre-fetch next paragraph in background
        if (index + 1 < paragraphs.length) {
          fetchAudio(index + 1).catch(() => {});
        }

        const audio = audioRef.current;
        audio.onended = null;
        audio.src = url;

        audio.onended = () => {
          if (!stoppedRef.current) {
            playIndex(index + 1);
          }
        };

        await audio.play();
        usingSpeechRef.current = false;
        setState("playing");
      } catch (err) {
        console.error("ElevenLabs TTS failed, falling back to browser speech:", err);
        // Fall back to Web Speech API
        if (!stoppedRef.current && typeof window !== "undefined" && window.speechSynthesis) {
          playSpeechFallback(index);
        } else {
          setState("idle");
        }
      }
    },
    [paragraphs, fetchAudio, cancelSpeech, playSpeechFallback]
  );

  const play = useCallback(() => {
    if (state === "paused") {
      if (usingSpeechRef.current) {
        window.speechSynthesis.resume();
        setState("playing");
      } else if (audioRef.current) {
        audioRef.current.play();
        setState("playing");
      }
    } else {
      playIndex(currentIndex);
    }
  }, [state, currentIndex, playIndex]);

  const pause = useCallback(() => {
    if (usingSpeechRef.current) {
      window.speechSynthesis.pause();
    } else {
      audioRef.current?.pause();
    }
    setState("paused");
  }, []);

  const rewind = useCallback(() => {
    // Rewind only works for audio element, not speech synthesis
    if (!usingSpeechRef.current && audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 10
      );
    }
  }, []);

  const stop = useCallback(() => {
    stoppedRef.current = true;
    cancelSpeech();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current.currentTime = 0;
    }
    setProgress(0);
    setCurrentIndex(0);
    setState("idle");
  }, [cancelSpeech]);

  const skipBack = useCallback(() => {
    if (currentIndex > 0) {
      cancelSpeech();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null;
      }
      playIndex(currentIndex - 1);
    }
  }, [currentIndex, playIndex, cancelSpeech]);

  const skipForward = useCallback(() => {
    if (currentIndex < paragraphs.length - 1) {
      cancelSpeech();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null;
      }
      playIndex(currentIndex + 1);
    }
  }, [currentIndex, paragraphs.length, playIndex, cancelSpeech]);

  // Idle — prominent trigger button
  if (state === "idle") {
    return (
      <button
        onClick={() => playIndex(0)}
        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-accent-blue/15 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/25 hover:border-accent-blue/50 transition-colors"
        title="Read section aloud"
      >
        <SpeakerIcon />
        Read aloud
      </button>
    );
  }

  // Loading
  if (state === "loading") {
    return (
      <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue/70 border border-accent-blue/20">
        <LoadingIcon />
        Loading…
      </div>
    );
  }

  // Playing / paused — mini player
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-surface-raised border border-border-subtle px-2 py-1">
      {/* Skip back one paragraph */}
      <button
        onClick={skipBack}
        disabled={currentIndex === 0}
        className="p-1 text-text-tertiary hover:text-foreground transition-colors disabled:opacity-30"
        title="Previous paragraph"
      >
        <SkipBackIcon />
      </button>

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

      {/* Skip forward one paragraph */}
      <button
        onClick={skipForward}
        disabled={currentIndex >= paragraphs.length - 1}
        className="p-1 text-text-tertiary hover:text-foreground transition-colors disabled:opacity-30"
        title="Next paragraph"
      >
        <SkipForwardIcon />
      </button>

      {/* Stop */}
      <button
        onClick={stop}
        className="p-1 text-text-tertiary hover:text-foreground transition-colors"
        title="Stop"
      >
        <StopIcon />
      </button>

      {/* Para counter + progress */}
      <span className="text-[10px] text-text-tertiary ml-1 tabular-nums">
        {currentIndex + 1}/{paragraphs.length}
      </span>
      <div className="w-12 h-1 rounded-full bg-border-subtle ml-1 overflow-hidden">
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

function SkipBackIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="19 20 9 12 19 4 19 20" />
      <line x1="5" y1="19" x2="5" y2="5" />
    </svg>
  );
}

function SkipForwardIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" y1="5" x2="19" y2="19" />
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
