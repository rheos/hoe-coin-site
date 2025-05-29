export default function TokenomicsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] px-6 py-12 flex items-center justify-center">
      <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl shadow-lg p-10 max-w-3xl w-full text-center">
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

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
          >
            Home
          </a>
          <a
            href="/roadmap"
            className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
          >
            View Roadmap
          </a>
        </div>
      </div>
    </main>
  );
}
