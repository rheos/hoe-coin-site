import AnimatedSection from "@components/AnimatedSection";

export default function BoxTokenomics() {
  return (
    <AnimatedSection>
      <div className="box-container mb-8">
        <h1 className="heading-main mb-4">Tokenomics</h1>
        <p className="text-xl mb-8">
          Total Supply: <strong className="text-2xl">6,900,000,000 $HOE</strong>
        </p>
        <ul className="space-y-4 text-xl leading-relaxed font-sans font-normal text-left mx-auto max-w-md">
          <li>🌾 40% — Liquidity &amp; Fair Launch</li>
          <li>🌱 20% — Community Treasury</li>
          <li>🎁 10% — Airdrops &amp; Giveaways</li>
          <li>👷 10% — Team (vested)</li>
          <li>🔥 10% — Burn / Meme Fund</li>
          <li>🪴 10% — Reserve / Future Initiatives</li>
        </ul>
      </div>
    </AnimatedSection>
  );
} 