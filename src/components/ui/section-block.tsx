"use client";

import { useState, useCallback } from "react";
import { Section } from "@/types";
import { ParaImage } from "@/data/module1/images";
import SectionPlayer from "./section-player";
import ParaImageCard from "./para-image";

interface SectionBlockProps {
  section: Section;
  images?: Record<string, ParaImage>;
}

export default function SectionBlock({ section, images }: SectionBlockProps) {
  const [activePara, setActivePara] = useState<number | null>(null);

  const allParagraphs = [
    ...section.paragraphs,
    ...(section.keyTakeaway ? [section.keyTakeaway] : []),
  ];

  const handleActiveParagraph = useCallback((index: number | null) => {
    setActivePara(index);
  }, []);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-foreground">
          <span className="text-text-tertiary font-mono text-sm mr-2">
            {section.id}
          </span>
          {section.title}
        </h2>
        <SectionPlayer
          sectionId={section.id}
          paragraphs={allParagraphs}
          onActiveParagraph={handleActiveParagraph}
        />
      </div>

      <div className="space-y-4">
        {section.paragraphs.map((p, i) => {
          const isActive = activePara === i;
          const paraImage = images?.[`${section.id}-${i}`] || null;

          return (
            <div key={i} className="relative">
              <p
                className={`text-base leading-relaxed rounded-md transition-colors duration-300 ${
                  isActive
                    ? "text-foreground bg-accent-blue/10 -mx-3 px-3 py-2"
                    : "text-text-secondary"
                }`}
              >
                {p}
              </p>

              {/* Image floats in right margin next to active paragraph */}
              {isActive && paraImage && (
                <div className="hidden lg:block absolute left-[calc(100%+1.5rem)] top-0 w-64 xl:w-72">
                  <ParaImageCard image={paraImage} visible={true} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {section.keyTakeaway && (
        <div
          className={`mt-6 rounded-lg border px-4 py-3 transition-colors duration-300 ${
            activePara === section.paragraphs.length
              ? "border-accent-blue/40 bg-accent-blue/15"
              : "border-accent-blue/20 bg-accent-blue/5"
          }`}
        >
          <p className="text-sm font-medium text-accent-blue mb-1">
            Key takeaway
          </p>
          <p className="text-base text-text-secondary leading-relaxed">
            {section.keyTakeaway}
          </p>
        </div>
      )}
    </div>
  );
}
