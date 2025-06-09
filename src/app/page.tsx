"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Animation Variants
const containerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const listVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Section Wrapper
function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Only import in browser (Phantom doesn't work server-side)
const WalletMultiButton = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => setClicked(false), 300); // 300ms scale up
      return () => clearTimeout(timeout);
    }
  }, [clicked]);

  return (
    <main className="scroll-smooth min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] px-6 py-12 flex flex-col items-center">

      {/* Wallet button */}
      <div
        className="
          w-full flex justify-end mb-6
          sm:fixed sm:top-6 sm:right-6 sm:w-auto sm:z-50 sm:p-2 sm:bg-[color:var(--background)] sm:rounded-lg sm:shadow-lg
        "
      >
        <WalletMultiButton />
      </div>

      {/* Logo */}
      <motion.div
        whileHover={{
            rotate: [0, -10, 10, -6, 6, -2, 2, 0],
            transition: { duration: 0.6, ease: "easeInOut", type: "tween" }
        }}
        animate={clicked ? { scale: 1.15, rotate: 3 } : { scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        className="mx-auto mb-12 cursor-pointer"
        onClick={() => setClicked(true)}
      >
        <Image
          src="/assets/hoe-logo.png"
          alt="$HOE logo"
          width={300}
          height={450}
          priority
        />
      </motion.div>

      {/* Box 1 — What is $HOE */}
      <AnimatedSection>
        <div className="box-container mb-10">
          <h1 className="heading-main mb-4">$HOE</h1>
          <p className="text-xl text-[color:var(--accent)] italic mb-6">Get to Work.</p>
          <p className="text-2xl leading-relaxed mb-6">
            $HOE is a meme coin for degenerates with dirt under their fingernails. Planted by Cultivate Labs, it sprouted from the compost heap of bear market despair — fertilized with memes, FOMO, and a bit of spite. Every trade helps fund real-world efforts to strengthen local food systems.
          </p>
          <p className="text-xl leading-relaxed font-sans font-normal">
            This isn&apos;t just another token. It&apos;s a shovel. A signal. A smirk. A filthy, fertile vehicle for attention &mdash; and, if we do it right, for real-world resilience.
          </p>
        </div>
      </AnimatedSection>

      {/* Box 2 — How to Get $HOE */}
      <AnimatedSection>
        <div className="box-container mb-10">
          <h2 className="heading-sub">How to Get $HOE</h2>
          <p className="text-xl mb-4">Launch set for June 21, 2025 on Solana. Liquidity will be seeded on Raydium.</p>
          <ol className="list-decimal text-left space-y-3 text-lg leading-relaxed font-sans font-normal max-w-md mx-auto pl-6 [&>li::marker]:text-[color:var(--accent)] [&>li::marker]:font-bold">
            <li>
              Install a Solana wallet like{" "}
              <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--accent)]">
                Phantom
              </a>
            </li>
            <li>Buy some SOL</li>
            <li>
              Go to{" "}
              <a href="https://jup.ag/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--accent)]">
                Jupiter
              </a>{" "}
              or{" "}
              <a href="https://birdeye.so/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--accent)]">
                Birdeye
              </a>{" "}
              to find the best trade route
            </li>
            <li>Search for <strong>$HOE</strong></li>
            <li>Swap SOL for HOE</li>
            <li>Get to work. You&apos;re a holder now.</li>
          </ol>
          <p className="mt-4 text-sm italic text-[color:var(--foreground)]/70">
            The contract address will be posted at launch. Don&apos;t get rugged by imposters. Once liquidity is live, $HOE will be tradable across Raydium, Jupiter, Phantom, and other Solana DEX platforms automatically.
          </p>
        </div>
      </AnimatedSection>

      {/* Box 3 — More Than Memes */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h2 className="heading-sub">More Than Memes</h2>
          <p className="text-xl leading-relaxed mb-6">
            $HOE isn&apos;t just a vibe. Every transaction fuels a grassroots movement focused on food, sovereignty, and survival &mdash; because real farmers don&apos;t wait for the system to fix itself.
          </p>
          <p className="text-lg italic text-[color:var(--foreground)]/80">
            We&apos;re planting memes. But something bigger is growing.
          </p>
        </div>
      </AnimatedSection>

      {/* Box 4 — What&apos;s Next */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h2 className="heading-sub">What&apos;s Next?</h2>
          <p className="text-xl mb-6 leading-relaxed">
            $HOE isn&apos;t just a pump &mdash; it&apos;s the seed of something weird, and maybe even useful.
          </p>
          <motion.ul
            className="text-left text-lg space-y-3 max-w-md mx-auto leading-relaxed font-sans font-normal"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.li variants={itemVariants}>🌱 MemeDAO votes on future grants and chaos</motion.li>
            <motion.li variants={itemVariants}>🎁 Airdrop contests + &quot;Pimp My HOE&quot; NFTs</motion.li>
            <motion.li variants={itemVariants}>🛒 Merch store: aprons, enamel pins, tilled dreams</motion.li>
            <motion.li variants={itemVariants}>🌾 There&apos;s more under the soil. You&apos;ll know when it&apos;s time to dig.</motion.li>
          </motion.ul>
        </div>
      </AnimatedSection>

      {/* Box 5 — Tokenomics */}
      <AnimatedSection>
        <div className="box-container mb-8">
          <h1 className="heading-main mb-4">Tokenomics</h1>
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

      {/* Box 6 — Farming Preview */}
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

      {/* Box 7 — Roadmap */}
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

      {/* Box 8 — FAQ */}
      <AnimatedSection>
        <div className="box-container mb-8">
          <h1 className="heading-main mb-6">FAQ</h1>
          <ul className="space-y-8 text-xl leading-relaxed font-sans font-normal text-left mx-auto max-w-prose">
            <li>
              <p className="font-semibold text-2xl mb-2">Q: What is $HOE?</p>
              <p>A: A meme coin with a mission: raise funds for local food system resilience while building a community of meme-loving degens and gardeners.</p>
            </li>
            <li>
              <p className="font-semibold text-2xl mb-2">Q: Is this real or just laughs?</p>
              <p>A: Both. The meme&apos;s real. The mission is serious. Every trade supports grassroots food system fixes.</p>
            </li>
            <li>
              <p className="font-semibold text-2xl mb-2">Q: How can I earn $HOE?</p>
              <p>A: Join contests, meme raids, stake $HOE, or grab a &ldquo;Sadie Supporter&rdquo; NFT to earn early rewards.</p>
            </li>
            <li>
              <p className="font-semibold text-2xl mb-2">Q: Is there an airdrop?</p>
              <p>A: Yep, community-based. Early meme action and engagement get rewarded&mdash;no VC bags here.</p>
            </li>
            <li>
              <p className="font-semibold text-2xl mb-2">Q: Will it go to $0?</p>
              <p>A: Maybe &mdash; but not before we plant a ton of memes and grow something real.</p>
            </li>
            <li>
              <p className="font-semibold text-2xl mb-2">Q: What&apos;s the deal with the name?</p>
              <p>A: It&apos;s a nod to the tools we use to grow food, and a wink at the crypto space&apos;s love of wordplay.</p>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      {/* Box 9 — Meme Wall */}
      <AnimatedSection>
        <div className="box-container mb-8">
          <h2 className="heading-sub mb-6">Meme Wall</h2>
          <p className="text-xl leading-relaxed mb-6 italic text-[color:var(--foreground)]/80">
            Shitposts. Cultivation. Glory.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/memes/hoe1.png', '/memes/hoe2.png', '/memes/hoe3.png'].map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, rotate: -1 }} transition={{ type: 'spring', stiffness: 150 }}>
                <Image
                  src={src}
                  alt={`meme-${i}`}
                  width={400}
                  height={400}
                  className="meme-img"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Box 10 — Leaderboard Tease */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h2 className="heading-sub">The Hoeconomy Keeps Score</h2>
          <p className="text-xl leading-relaxed">
            We&apos;re tracking the top hoes. Those who pay the most fees, spread the most memes, and dig the deepest will earn more than clout.
          </p>
          <p className="text-sm italic mt-2 text-[color:var(--foreground)]/70">
            Sadie sees you.
          </p>
        </div>
      </AnimatedSection>

      {/* Box 11 — CTA */}
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
    </main>
  );
}