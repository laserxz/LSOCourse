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
import { module3Sections } from "@/data/module3/content";
import { module3Quiz } from "@/data/module3/quiz";
import { module3Images } from "@/data/module3/images";
import { module4Sections } from "@/data/module4/content";
import { module4Quiz } from "@/data/module4/quiz";
import { module4Images } from "@/data/module4/images";
import { module5Sections } from "@/data/module5/content";
import { module5Quiz } from "@/data/module5/quiz";
import { module5Images } from "@/data/module5/images";
import { module6Sections } from "@/data/module6/content";
import { module6Quiz } from "@/data/module6/quiz";
import { module6Images } from "@/data/module6/images";
import { module7Sections } from "@/data/module7/content";
import { module7Quiz } from "@/data/module7/quiz";
import { module7Images } from "@/data/module7/images";
import { module8Sections } from "@/data/module8/content";
import { module8Quiz } from "@/data/module8/quiz";
import { module8Images } from "@/data/module8/images";
import { module9Sections } from "@/data/module9/content";
import { module9Quiz } from "@/data/module9/quiz";
import { module9Images } from "@/data/module9/images";
import { module10Sections } from "@/data/module10/content";
import { module10Quiz } from "@/data/module10/quiz";
import { module10Images } from "@/data/module10/images";
import { module11Sections } from "@/data/module11/content";
import { module11Quiz } from "@/data/module11/quiz";
import { module11Images } from "@/data/module11/images";
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
  "mpe-zones-exclusion-distances": {
    sections: module3Sections,
    quiz: module3Quiz,
    images: module3Images,
  },
  "equipment-safety-engineering-controls": {
    sections: module4Sections,
    quiz: module4Quiz,
    images: module4Images,
  },
  "scan-fail-safeguards-exposure-assessment": {
    sections: module5Sections,
    quiz: module5Quiz,
    images: module5Images,
  },
  "risk-management": {
    sections: module6Sections,
    quiz: module6Quiz,
    images: module6Images,
  },
  "lso-responsibilities-show-operations": {
    sections: module7Sections,
    quiz: module7Quiz,
    images: module7Images,
  },
  "contingency-planning-incident-response": {
    sections: module8Sections,
    quiz: module8Quiz,
    images: module8Images,
  },
  "australian-regulatory-framework": {
    sections: module9Sections,
    quiz: module9Quiz,
    images: module9Images,
  },
  "new-zealand-regulatory-framework": {
    sections: module10Sections,
    quiz: module10Quiz,
    images: module10Images,
  },
  "special-considerations": {
    sections: module11Sections,
    quiz: module11Quiz,
    images: module11Images,
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
