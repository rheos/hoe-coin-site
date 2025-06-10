import AnimatedSection from "@components/AnimatedSection";

export default function BoxHowToGet() {
  return (
    <AnimatedSection>
      <div className="box-container mb-10">
        <h2 className="heading-sub">How to Get $HOE</h2>
        <p className="text-xl mb-4">
          Launch set for June 21, 2025 on Solana. Liquidity will be seeded on
          Raydium.
        </p>
        <ol className="list-decimal text-left space-y-3 text-lg leading-relaxed font-sans font-normal max-w-md mx-auto pl-6 [&>li::marker]:text-[color:var(--accent)] [&>li::marker]:font-bold">
          <li>
            Install a Solana wallet like{' '}
            <a
              href="https://phantom.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[color:var(--accent)]"
            >
              Phantom
            </a>
          </li>
          <li>Buy some SOL</li>
          <li>
            Go to{' '}
            <a
              href="https://jup.ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[color:var(--accent)]"
            >
              Jupiter
            </a>{' '}
            or{' '}
            <a
              href="https://birdeye.so/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[color:var(--accent)]"
            >
              Birdeye
            </a>{' '}
            to find the best trade route
          </li>
          <li>Search for <strong>$HOE</strong></li>
          <li>Swap SOL for HOE</li>
          <li>Get to work. You&apos;re a holder now.</li>
        </ol>
        <p className="mt-4 text-sm italic text-[color:var(--foreground)]/70">
          The contract address will be posted at launch. Don&apos;t get rugged by
          imposters. Once liquidity is live, $HOE will be tradable across
          Raydium, Jupiter, Phantom, and other Solana DEX platforms automatically.
        </p>
      </div>
    </AnimatedSection>
  );
}
