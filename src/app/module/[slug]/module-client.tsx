"use client";

import { ComponentType } from "react";
import { ModuleMeta, Section, QuizQuestion } from "@/types";
import { ParaImage } from "@/data/module1/images";
import SectionBlock from "@/components/ui/section-block";
import ProgressBar from "@/components/ui/progress-bar";
import Quiz from "@/components/quiz/quiz";
import Link from "next/link";

import ElectromagneticSpectrum from "@/components/visuals/electromagnetic-spectrum";
import OrdinaryVsLaser from "@/components/visuals/ordinary-vs-laser";
import ClassificationHazardScale from "@/components/visuals/classification-hazard-scale";
import ProjectorCrossSection from "@/components/visuals/projector-cross-section";
import BeamParameterCalculator from "@/components/visuals/beam-parameter-calculator";
import EyeAnatomy from "@/components/visuals/eye-anatomy";
import EyeVsSkinThresholds from "@/components/visuals/eye-vs-skin-thresholds";
import AversionResponseTimeline from "@/components/visuals/aversion-response-timeline";
import EntertainmentWavelengths from "@/components/visuals/entertainment-wavelengths";

const VISUAL_MAP: Record<string, ComponentType> = {
  "electromagnetic-spectrum": ElectromagneticSpectrum,
  "ordinary-vs-laser": OrdinaryVsLaser,
  "classification-hazard-scale": ClassificationHazardScale,
  "projector-cross-section": ProjectorCrossSection,
  "beam-parameter-calculator": BeamParameterCalculator,
  "eye-anatomy": EyeAnatomy,
  "eye-vs-skin-thresholds": EyeVsSkinThresholds,
  "aversion-response-timeline": AversionResponseTimeline,
  "entertainment-wavelengths": EntertainmentWavelengths,
};

interface ModuleClientProps {
  module: ModuleMeta;
  sections: Section[];
  quiz: QuizQuestion[];
  images?: Record<string, ParaImage>;
}

export default function ModuleClient({
  module,
  sections,
  quiz,
  images,
}: ModuleClientProps) {
  return (
    <>
      <ProgressBar />

      {/* Module header */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-text-tertiary hover:text-text-secondary transition-colors mb-4"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to modules
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-accent-red/10 text-accent-red">
            Module {module.id}
          </span>
          <span className="text-xs text-text-tertiary">{module.duration}</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-medium text-foreground mb-2">
          {module.title}
        </h1>
        <p className="text-sm text-text-secondary">{module.subtitle}</p>
      </div>

      {/* Content sections with visuals */}
      <div className="max-w-3xl mx-auto px-6 pb-12 overflow-visible">
        {sections.map((section) => {
          const VisualComponent = section.visualKey
            ? VISUAL_MAP[section.visualKey]
            : null;

          return (
            <div
              key={section.id}
              className="mb-12 pt-8 border-t border-border-subtle first:border-t-0 first:pt-0"
            >
              <SectionBlock section={section} images={images} />
              {VisualComponent && (
                <div className="mt-8">
                  <VisualComponent />
                </div>
              )}
            </div>
          );
        })}

        {/* Quiz */}
        <div className="pt-8 border-t border-border-subtle">
          <Quiz questions={quiz} passThreshold={8} drawCount={10} />
        </div>
      </div>
    </>
  );
}
