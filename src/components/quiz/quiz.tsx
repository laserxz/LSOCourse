"use client";

import { useState, useCallback } from "react";
import { QuizQuestion } from "@/types";
import QuestionCard from "./question-card";
import QuizResults from "./quiz-results";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface QuizProps {
  questions: QuizQuestion[];
  passThreshold: number;
  drawCount?: number;
}

function drawQuestions(bank: QuizQuestion[], count: number): QuizQuestion[] {
  const shuffled = shuffleArray(bank);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export default function Quiz({ questions, passThreshold, drawCount = 10 }: QuizProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    drawQuestions(questions, drawCount)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleSubmit = useCallback(() => {
    if (selectedIndex === null) return;
    setSubmitted(true);
    if (selectedIndex === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  }, [selectedIndex, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  }, [currentIndex, shuffledQuestions.length]);

  const handleRetake = useCallback(() => {
    setShuffledQuestions(drawQuestions(questions, drawCount));
    setCurrentIndex(0);
    setSelectedIndex(null);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  }, [questions]);

  const passed = score >= passThreshold;

  return (
    <div className="rounded-xl border border-border-subtle bg-surface p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 rounded bg-accent-amber/10 flex items-center justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent-amber"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <h2 className="text-base font-medium text-foreground">Module 1 Quiz</h2>
        <span className="text-xs text-text-tertiary ml-auto">
          {passThreshold}/{shuffledQuestions.length} to pass (80%)
        </span>
      </div>

      {finished ? (
        <QuizResults
          score={score}
          total={shuffledQuestions.length}
          passed={passed}
          passThreshold={passThreshold}
          onRetake={handleRetake}
        />
      ) : (
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={shuffledQuestions.length}
          selectedIndex={selectedIndex}
          submitted={submitted}
          onSelect={setSelectedIndex}
          onSubmit={handleSubmit}
          onNext={handleNext}
          isLast={currentIndex === shuffledQuestions.length - 1}
        />
      )}
    </div>
  );
}
