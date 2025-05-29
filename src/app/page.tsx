export default function HomePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <img src="/assets/hoe-logo.png" alt="$HOE logo" className="mx-auto w-100 mb-8" />
        <h1 className="text-5xl font-bold mb-2 drop-shadow-[2px_2px_0_#1a1a1a]">$HOE</h1>
        <p className="text-xl text-[color:var(--accent)] italic mb-8">Get to Work.</p>

        <p className="text-2xl leading-relaxed mb-6 text-[color:var(--foreground)] font-sans font-normal drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
          $HOE is a meme coin for degenerates with dirt under their fingernails.
          Launched by Cultivate Labs, it's built to till the fields of crypto absurdity — and maybe fund something real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/tokenomics"
            className="inline-block bg-[color:var(--accent)] text-[color:var(--primary-text)] px-6 py-3 rounded-full text-lg font-semibold border border-[color:var(--accent)] hover:brightness-110 transition"
          >
            View Tokenomics
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
