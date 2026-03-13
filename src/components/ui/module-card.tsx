import Link from "next/link";
import { ModuleMeta } from "@/types";

export default function ModuleCard({ module }: { module: ModuleMeta }) {
  const content = (
    <div
      className={`group relative rounded-xl border p-5 transition-all ${
        module.locked
          ? "border-border-subtle bg-surface/30 opacity-50 cursor-not-allowed"
          : "border-border-subtle bg-surface hover:border-[rgba(255,255,255,0.25)] hover:bg-surface-elevated cursor-pointer"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`text-sm font-mono font-medium px-2 py-0.5 rounded ${
            module.locked
              ? "bg-[rgba(255,255,255,0.05)] text-text-tertiary"
              : "bg-accent-red/10 text-accent-red"
          }`}
        >
          {String(module.id).padStart(2, "0")}
        </span>
        {module.locked ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-text-tertiary"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ) : (
          <span className="text-xs text-accent-green font-medium uppercase tracking-wider">
            Available
          </span>
        )}
      </div>
      <h3 className="text-base font-medium text-foreground mb-1.5">
        {module.title}
      </h3>
      <p className="text-sm text-text-tertiary leading-relaxed mb-3">
        {module.subtitle}
      </p>
      <div className="flex items-center gap-3 text-xs text-text-tertiary">
        <span>{module.duration}</span>
        {module.quizQuestions > 0 && (
          <>
            <span className="text-border">&middot;</span>
            <span>{module.quizQuestions} quiz questions</span>
          </>
        )}
      </div>
    </div>
  );

  if (module.locked) {
    return content;
  }

  return (
    <Link href={`/module/${module.slug}`} className="block">
      {content}
    </Link>
  );
}
