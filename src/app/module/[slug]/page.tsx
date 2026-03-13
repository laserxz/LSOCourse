import { notFound } from "next/navigation";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { modules } from "@/data/modules";
import { module1Sections } from "@/data/module1/content";
import { module1Quiz } from "@/data/module1/quiz";
import { module1Images, type ParaImage } from "@/data/module1/images";
import { module2Sections } from "@/data/module2/content";
import { module2Quiz } from "@/data/module2/quiz";
import { module2Images } from "@/data/module2/images";
import ModuleClient from "./module-client";

const moduleContentMap: Record<
  string,
  {
    sections: typeof module1Sections;
    quiz: typeof module1Quiz;
    images?: Record<string, ParaImage>;
  }
> = {
  "laser-physics-classification": {
    sections: module1Sections,
    quiz: module1Quiz,
    images: module1Images,
  },
  "the-standard": {
    sections: module2Sections,
    quiz: module2Quiz,
    images: module2Images,
  },
};

export async function generateStaticParams() {
  return modules
    .filter((m) => !m.locked)
    .map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);
  if (!module) return {};
  return {
    title: `Module ${module.id}: ${module.title} — LSO Course`,
    description: module.subtitle,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);

  if (!module || module.locked) {
    notFound();
  }

  const content = moduleContentMap[slug];
  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ModuleClient
          module={module}
          sections={content.sections}
          quiz={content.quiz}
          images={content.images}
        />
      </main>
      <Footer />
    </div>
  );
}
