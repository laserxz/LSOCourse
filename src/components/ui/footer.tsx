export default function Footer() {
  return (
    <footer className="border-t border-border-subtle mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-tertiary">
          <p>
            Aligned with AS/NZS IEC 60825.3:2022
          </p>
          <p>
            Contact:{" "}
            <a
              href="mailto:apps@zone.net.au"
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              apps@zone.net.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
