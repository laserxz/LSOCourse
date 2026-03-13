import { Section } from "@/types";

export default function SectionBlock({ section }: { section: Section }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-medium text-foreground mb-4">
        <span className="text-text-tertiary font-mono text-sm mr-2">
          {section.id}
        </span>
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-sm text-text-secondary leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      {section.keyTakeaway && (
        <div className="mt-6 rounded-lg border border-accent-blue/20 bg-accent-blue/5 px-4 py-3">
          <p className="text-xs font-medium text-accent-blue mb-1">
            Key takeaway
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            {section.keyTakeaway}
          </p>
        </div>
      )}
    </div>
  );
}
