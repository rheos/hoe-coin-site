"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <main className="scroll-smooth min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] px-6 py-12 flex flex-col items-center">
      <Image src="/assets/hoe-logo.png" alt="$HOE logo" width={300} height={450} className="mx-auto mb-12" priority />

      <AnimatedSection>
        {/* Box 1 — What is $HOE */}
        <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl shadow-lg p-10 max-w-3xl w-full text-center mb-10">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-[2px_2px_0_#1a1a1a]">$HOE</h1>
          <p className="text-xl text-[color:var(--accent)] italic mb-6">Get to Work.</p>
          <p className="text-2xl leading-relaxed mb-6">
            $HOE is a meme coin for degenerates with dirt under their fingernails. Planted by Cultivate Labs, it was grown in the compost heap of bear market despair — fertilized by memes, FOMO, and a little bit of hate.
          </p>
          <p className="text-xl leading-relaxed font-sans font-normal">
            This is not just another token. This is a shovel. A signal. A smirk. A filthy, fertile vehicle for attention — and if we do it right, for real-world resilience.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* Box 2 — How to Get $HOE */}
        <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl shadow-lg p-10 max-w-3xl w-full text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">How to Get $HOE</h2>
          <ol className="list-decimal text-left space-y-3 text-lg leading-relaxed font-sans font-normal max-w-md mx-auto pl-6 [&>li::marker]:text-[color:var(--accent)] [&>li::marker]:font-bold">
            <li>
              Install a Solana wallet like <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--accent)]">Phantom</a>
            </li>
            <li>Buy some SOL</li>
            <li>
              Go to <a href="https://jup.ag/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--accent)]">Jupiter</a> or <a href="https://birdeye.so/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--accent)]">Birdeye</a>
            </li>
            <li>Search for <strong>$HOE</strong></li>
            <li>Swap SOL for HOE</li>
            <li>Get to work. You&apos;re a holder now.</li>
          </ol>
          <p className="mt-4 text-sm italic text-[color:var(--foreground)]/70">
            Contract address will be posted at launch. Don&apos;t get rugged by imposters.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* Box 3 — What's Next */}
        <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl shadow-lg p-10 max-w-3xl w-full text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What&apos;s Next?</h2>
          <p className="text-xl mb-6 leading-relaxed">
            $HOE isn&apos;t just a pump. It&apos;s the seed of something weird and maybe even useful.
          </p>
          <ul className="text-left text-lg space-y-3 max-w-md mx-auto leading-relaxed font-sans font-normal">
            <li>🌱 MemeDAO votes on future grants and chaos</li>
            <li>🧤 Airdrop contests + &quot;Pimp My HOE&quot; NFTs</li>
            <li>🛒 Merch store: aprons, enamel pins, tilled dreams</li>
            <li>🌾 There&apos;s more under the soil. You&apos;ll know when it&apos;s time to dig.</li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* Box 4 — Tokenomics */}
        <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl shadow-lg p-10 max-w-3xl w-full text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-[2px_2px_0_#1a1a1a]">Tokenomics</h1>
          <p className="text-xl mb-8">
            Total Supply: <strong className="text-2xl">6,900,000,000 $HOE</strong>
          </p>
          <ul className="space-y-4 text-xl leading-relaxed font-sans font-normal text-left mx-auto max-w-md">
            <li>🌾 40% — Liquidity & Fair Launch</li>
            <li>🌱 20% — Community Treasury</li>
            <li>🎁 10% — Airdrops & Giveaways</li>
            <li>👷 10% — Team (vested)</li>
            <li>🔥 10% — Burn / Meme Fund</li>
            <li>🪴 10% — Reserve / Future Initiatives</li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* Box 5 — Roadmap */}
        <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl shadow-lg p-10 max-w-3xl w-full text-center mb-8">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-[2px_2px_0_#1a1a1a]">Roadmap</h1>
          <ol className="list-decimal text-left ml-6 space-y-6 text-xl leading-relaxed font-sans font-normal max-w-prose mx-auto">
            <li>
              <strong>Phase 1 — Meme Seeding:</strong> Logo, lore, and hype. Twitter memes, Telegram chaos, and Cultivate Labs launches $HOE into the dirt.
            </li>
            <li>
              <strong>Phase 2 — Token Launch:</strong> Fair launch, Uniswap listing, buy button live. Meme contests and airdrops begin.
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
    </main>
  );
}
