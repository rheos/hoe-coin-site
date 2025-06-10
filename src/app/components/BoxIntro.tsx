import AnimatedSection from "@components/AnimatedSection";

export default function BoxIntro() {
  return (
    <AnimatedSection>
      <div className="box-container mb-10">
        <h1 className="heading-main mb-4">$HOE</h1>
        <p className="text-xl text-[color:var(--accent)] italic mb-6">Get to Work.</p>
        <p className="text-2xl leading-relaxed mb-6">
          $HOE is a meme coin for degenerates with dirt under their fingernails. Sprouted from the compost heap of bear market despair - fertilized with memes, FOMO, and a bit of spite. Every trade helps fund real-world efforts to strengthen local food systems.
        </p>
        <p className="text-xl leading-relaxed font-sans font-normal">
          This isn&apos;t just another token. It&apos;s a shovel. A signal. A smirk. A filthy, fertile vehicle for attention - and, if we do it right, for real-world resilience.
        </p>
      </div>
    </AnimatedSection>
  );
}
