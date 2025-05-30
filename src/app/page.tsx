import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] px-6 py-12 flex flex-col items-center">
      <Image src="/assets/hoe-logo.png" alt="$HOE logo" width={300} height={450} className="mx-auto mb-12" priority />

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

      {/* Box 3 — What&apos;s Next */}
      <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl shadow-lg p-10 max-w-3xl w-full text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What&apos;s Next?</h2>
        <p className="text-xl mb-6 leading-relaxed">
          $HOE isn&apos;t just a pump. It&apos;s the seed of something weird and maybe even useful.
        </p>
        <ul className="text-left text-lg space-y-3 max-w-md mx-auto leading-relaxed font-sans font-normal">
          <li>🌱 MemeDAO votes on future grants and chaos</li>
          <li>�� Airdrop contests + "Pimp My HOE" NFTs</li>
          <li>🛒 Merch store: aprons, enamel pins, tilled dreams</li>
          <li>🌾 There&apos;s more under the soil. You&apos;ll know when it&apos;s time to dig.</li>
        </ul>
      </div>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/tokenomics"
          className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
        >
          View Tokenomics
        </Link>
        <Link
          href="/roadmap"
          className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
        >
          View Roadmap
        </Link>
      </div>
    </main>
  );
}
