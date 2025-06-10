import AnimatedSection from "@components/AnimatedSection";

export default function BoxRoadmap() {
  return (
    <AnimatedSection>
      <div className="box-container mb-8">
        <h1 className="heading-main mb-6">Roadmap</h1>
        <ol className="list-decimal text-left ml-6 space-y-6 text-xl leading-relaxed font-sans font-normal max-w-prose mx-auto">
          <li>
            <strong>Phase 1 — Meme Seeding:</strong> Logo, lore, and hype. Twitter memes, Telegram chaos, and Cultivate Labs launches $HOE into the dirt.
          </li>
          <li>
            <strong>Phase 2 — Token Launch:</strong> Fair launch, Raydium listing, buy button live. Meme contests and airdrops begin.
          </li>
          <li>
            <strong>Phase 3 — MemeDAO:</strong> Community votes on memes, grants, and HOE-related experiments. Strange new sprouts begin pushing through the soil.
          </li>
          <li>
            <strong>Phase 4 — TBD:</strong> The garden evolves. Something unexpected may grow next.
          </li>
        </ol>
      </div>
    </AnimatedSection>
  );
} 