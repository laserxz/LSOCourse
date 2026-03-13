import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { modules } from "@/data/modules";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      enrollment: {
        include: {
          moduleProgress: {
            orderBy: { moduleId: "asc" },
          },
        },
      },
    },
  });

  if (!user) redirect("/login");

  const enrollment = user.enrollment;
  const isEnrolled = enrollment && enrollment.status === "active";
  const completedModules = enrollment?.moduleProgress.filter((mp) => mp.completed).length || 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-foreground">
            Welcome back, {user.fullName}
          </h1>
          <p className="text-sm text-text-secondary mt-1">{user.email}</p>
        </div>

        {!isEnrolled ? (
          <div className="rounded-lg border border-accent-blue/30 bg-accent-blue/5 p-6 text-center">
            <h2 className="text-lg font-medium text-foreground mb-2">
              Ready to start your LSO training?
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              Module 1 is free to preview. Enrol to unlock all 11 modules and the final exam.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/module/laser-physics-classification"
                className="rounded-lg border border-border-subtle px-4 py-2 text-sm text-text-secondary hover:text-foreground transition-colors"
              >
                Preview Module 1
              </Link>
              <Link
                href="/enrol"
                className="rounded-lg bg-accent-blue px-4 py-2 text-sm font-medium text-white hover:bg-accent-blue/90 transition-colors"
              >
                Enrol — $400 AUD
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Progress summary */}
            <div className="rounded-lg border border-border-subtle bg-surface-elevated p-4 mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-text-secondary">Course progress</span>
                <span className="text-sm font-mono text-foreground">
                  {completedModules}/11 modules
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-border-subtle overflow-hidden">
                <div
                  className="h-full bg-accent-blue rounded-full transition-all"
                  style={{ width: `${(completedModules / 11) * 100}%` }}
                />
              </div>
              <p className="text-xs text-text-tertiary mt-2">
                Access expires: {new Date(enrollment.expiresAt).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>

            {/* Module grid */}
            <div className="space-y-3">
              {modules.map((mod) => {
                const progress = enrollment.moduleProgress.find(
                  (mp) => mp.moduleId === mod.id
                );
                const isUnlocked = !!progress;
                const isComplete = progress?.completed || false;

                return (
                  <div
                    key={mod.id}
                    className={`rounded-lg border p-4 flex items-center justify-between ${
                      isComplete
                        ? "border-green-500/30 bg-green-500/5"
                        : isUnlocked
                        ? "border-accent-blue/30 bg-accent-blue/5"
                        : "border-border-subtle bg-surface-elevated opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium ${
                          isComplete
                            ? "bg-green-500/20 text-green-400"
                            : isUnlocked
                            ? "bg-accent-blue/20 text-accent-blue"
                            : "bg-border-subtle text-text-tertiary"
                        }`}
                      >
                        {isComplete ? "✓" : mod.id}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {mod.title}
                        </p>
                        <p className="text-xs text-text-tertiary">{mod.duration}</p>
                      </div>
                    </div>
                    {isUnlocked && !isComplete && (
                      <Link
                        href={`/module/${mod.slug}`}
                        className="text-xs font-medium text-accent-blue hover:underline"
                      >
                        Continue
                      </Link>
                    )}
                    {isComplete && (
                      <Link
                        href={`/module/${mod.slug}`}
                        className="text-xs text-text-tertiary hover:text-text-secondary"
                      >
                        Review
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* Final exam card */}
              <div className={`rounded-lg border p-4 flex items-center justify-between ${
                completedModules === 11
                  ? "border-accent-red/30 bg-accent-red/5"
                  : "border-border-subtle bg-surface-elevated opacity-60"
              }`}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium bg-accent-red/20 text-accent-red">
                    E
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Final Examination</p>
                    <p className="text-xs text-text-tertiary">65 questions · 90 minutes · 75% to pass</p>
                  </div>
                </div>
                {completedModules === 11 ? (
                  <Link href="/exam" className="text-xs font-medium text-accent-red hover:underline">
                    Take exam
                  </Link>
                ) : (
                  <span className="text-xs text-text-tertiary">
                    Complete all modules
                  </span>
                )}
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
