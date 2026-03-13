"use client";

import { QuizQuestion } from "@/types";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedIndex: number | null;
  submitted: boolean;
  onSelect: (index: number) => void;
  onSubmit: () => void;
  onNext: () => void;
  isLast: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedIndex,
  submitted,
  onSelect,
  onSubmit,
  onNext,
  isLast,
}: QuestionCardProps) {
  const isCorrect = submitted && selectedIndex === question.correctIndex;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-text-tertiary font-mono">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < questionNumber - 1
                  ? "bg-accent-green"
                  : i === questionNumber - 1
                    ? "bg-accent-blue"
                    : "bg-[rgba(255,255,255,0.1)]"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-sm font-medium text-foreground mb-5 leading-relaxed">
        {question.question}
      </p>

      <div className="space-y-2 mb-5">
        {question.options.map((option, i) => {
          let borderColor = "border-border-subtle";
          let bg = "bg-transparent";
          let textColor = "text-text-secondary";

          if (submitted) {
            if (i === question.correctIndex) {
              borderColor = "border-accent-green/50";
              bg = "bg-accent-green/5";
              textColor = "text-accent-green";
            } else if (i === selectedIndex && !isCorrect) {
              borderColor = "border-accent-red/50";
              bg = "bg-accent-red/5";
              textColor = "text-accent-red";
            }
          } else if (i === selectedIndex) {
            borderColor = "border-accent-blue/50";
            bg = "bg-accent-blue/5";
            textColor = "text-foreground";
          }

          return (
            <button
              key={i}
              onClick={() => !submitted && onSelect(i)}
              disabled={submitted}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${borderColor} ${bg} ${textColor} ${
                !submitted ? "hover:border-[rgba(255,255,255,0.25)] hover:bg-surface-elevated cursor-pointer" : ""
              }`}
            >
              <span className="font-mono text-xs text-text-tertiary mr-2">
                {String.fromCharCode(65 + i)})
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {submitted && (
        <div
          className={`rounded-lg px-4 py-3 mb-5 text-sm leading-relaxed ${
            isCorrect
              ? "bg-accent-green/5 border border-accent-green/20 text-text-secondary"
              : "bg-accent-red/5 border border-accent-red/20 text-text-secondary"
          }`}
        >
          <p className={`text-xs font-medium mb-1 ${isCorrect ? "text-accent-green" : "text-accent-red"}`}>
            {isCorrect ? "Correct" : "Incorrect"}
          </p>
          {isCorrect ? question.feedbackCorrect : question.feedbackIncorrect}
        </div>
      )}

      {/* Action buttons */}
      {!submitted ? (
        <button
          onClick={onSubmit}
          disabled={selectedIndex === null}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedIndex !== null
              ? "bg-accent-blue text-white hover:bg-accent-blue/80 cursor-pointer"
              : "bg-[rgba(255,255,255,0.05)] text-text-tertiary cursor-not-allowed"
          }`}
        >
          Check Answer
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-5 py-2 rounded-lg text-sm font-medium bg-accent-blue text-white hover:bg-accent-blue/80 cursor-pointer transition-all"
        >
          {isLast ? "See Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}
