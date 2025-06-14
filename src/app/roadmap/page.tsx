import Link from "next/link";
import Image from "next/image";

export default function RoadmapPage() {
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
          href="/tokenomics"
          className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
        >
          View Tokenomics
        </Link>
      </div>
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
    </main>
  );
}
