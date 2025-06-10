import AnimatedSection from "@components/AnimatedSection";

export default function BoxFarming() {
  return (
    <AnimatedSection>
      <div className="box-container mb-12">
        <h2 className="heading-sub">Farming Season Is Coming</h2>
        <p className="text-xl leading-relaxed mb-4">
          Stake your $HOE. Tend your plot. Harvest the perks.
        </p>
        <ul className="text-left space-y-3 text-lg font-normal max-w-md mx-auto">
          <li>🪴 NFT plots = bigger yield</li>
          <li>🌾 Seasonal cycles: Cultivate. Harvest. Burn. Repeat.</li>
          <li>🎁 Earn &quot;Sadie Supporter&quot; NFTs and meme power</li>
        </ul>
        <p className="mt-4 text-sm italic text-[color:var(--foreground)]/70">
          Details sprouting soon.
        </p>
      </div>
    </AnimatedSection>
  );
} 