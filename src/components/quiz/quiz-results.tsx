"use client";

interface QuizResultsProps {
  score: number;
  total: number;
  passed: boolean;
  passThreshold: number;
  onRetake: () => void;
}

export default function QuizResults({
  score,
  total,
  passed,
  passThreshold,
  onRetake,
}: QuizResultsProps) {
  return (
    <div className="text-center py-8">
      <div
        className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
          passed ? "bg-accent-green/10" : "bg-accent-red/10"
        }`}
      >
        <span
          className={`text-2xl font-medium ${
            passed ? "text-accent-green" : "text-accent-red"
          }`}
        >
          {score}/{total}
        </span>
      </div>

      <h3
        className={`text-lg font-medium mb-2 ${
          passed ? "text-accent-green" : "text-accent-red"
        }`}
      >
        {passed ? "Module Complete" : "Not Yet Passed"}
      </h3>

      <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
        {passed
          ? "You\u2019ve demonstrated understanding of laser physics and classification. Module 2 is now unlocked."
          : `You need ${passThreshold} out of ${total} correct answers to pass (80%). Review the content and try again. You\u2019ll get a different set of questions on your next attempt.`}
      </p>

      {!passed && (
        <button
          onClick={onRetake}
          className="px-5 py-2 rounded-lg text-sm font-medium bg-accent-blue text-white hover:bg-accent-blue/80 cursor-pointer transition-all"
        >
          Retake Quiz
        </button>
      )}
    </div>
  );
}
