import AnimatedSection from "@components/AnimatedSection";

export default function BoxCTA() {
  return (
    <AnimatedSection>
      <div className="bg-[color:var(--accent)] text-[color:var(--background)] rounded-xl shadow-xl p-8 w-full text-center mt-12 mb-16 max-w-xl mx-auto">
        <h2 className="heading-sub mb-4">$HOE is calling.</h2>
        <p className="text-xl mb-6 italic">Plant memes. Reap chaos. Build soil.</p>
        <a
          href="https://twitter.com/pimpyourhoe"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          Follow on X
        </a>
      </div>
    </AnimatedSection>
  );
} 