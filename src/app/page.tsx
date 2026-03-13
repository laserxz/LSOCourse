import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ModuleCard from "@/components/ui/module-card";
import { modules } from "@/data/modules";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
          <div className="mb-2">
            <span className="text-sm font-medium text-accent-red uppercase tracking-wider">
              Professional Training
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-medium text-foreground mb-4 leading-tight">
            Entertainment Laser Safety Officer
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-6">
            Comprehensive LSO training aligned with AS/NZS IEC 60825.3:2022 for
            Australian and New Zealand entertainment laser operators, technicians,
            and venue managers.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-text-tertiary">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              11 modules
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              ~9.5 hours total
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              Final examination
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              Certificate of completion
            </div>
          </div>
        </section>

        {/* Module Grid */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-base font-medium text-text-secondary mb-4 uppercase tracking-wider">
            Course Modules
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>

          {/* Exam card */}
          <div className="mt-3 rounded-xl border border-border-subtle bg-surface/30 p-5 opacity-50">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[rgba(255,255,255,0.05)] text-text-tertiary">
                EXAM
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-text-tertiary"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="text-base font-medium text-foreground mb-1.5">
              Final Examination
            </h3>
            <p className="text-sm text-text-tertiary leading-relaxed mb-3">
              65 questions, 90 minutes, 75% pass threshold. Complete all modules to unlock.
            </p>
            <div className="flex items-center gap-3 text-sm text-text-tertiary">
              <span>90 min</span>
              <span className="text-border">&middot;</span>
              <span>3 attempts</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
