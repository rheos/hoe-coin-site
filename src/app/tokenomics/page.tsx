import Link from "next/link";
import Image from "next/image";

export default function TokenomicsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] px-6 py-12 flex flex-col items-center">
      <Image src="/assets/hoe-logo.png" alt="$HOE logo" width={300} height={450} className="mx-auto mb-12" priority />
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Link
          href="/"
          className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
        >
          Home
        </Link>
        <Link
          href="/roadmap"
          className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
        >
          View Roadmap
        </Link>
      </div>
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
    </main>
  );
}
