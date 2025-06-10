import Link from "next/link";
import AnimatedSection from "@components/AnimatedSection";

export default function PromotersPage() {
  return (
    <AnimatedSection>
      <div className="box-container mb-12">
        <h1 className="heading-main mb-6">📣 Promote $HOE — Earn Real Rewards</h1>
        <p className="text-xl leading-relaxed mb-4">
          We don’t pay upfront for promos — we reward based on <strong>results</strong>. $HOE is a mission-backed meme coin and we’re serious about rewarding the people who help spread the word <strong>and move the needle</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          If you’ve got real reach, real engagement, and a track record of converting followers into action — we want to work with you.
        </p>

        <h2 className="heading-sub">💰 Base Reward Structure</h2>
        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">Retweet (with impact)</p>
            <p className="text-base text-[color:var(--foreground)]">25,000 $HOE — Must stay live, relevant to campaign</p>
          </div>
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">Quote Tweet</p>
            <p className="text-base text-[color:var(--foreground)]">50,000 $HOE — Add personal take, meme, or support call</p>
          </div>
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">Custom Meme Post</p>
            <p className="text-base text-[color:var(--foreground)]">50,000–100,000 $HOE — Original content only, meme quality matters</p>
          </div>
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">Campaign Thread</p>
            <p className="text-base text-[color:var(--foreground)]">150,000 $HOE+ — At least 3 tweets, pinned or boosted</p>
          </div>
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">Telegram Blast</p>
            <p className="text-base text-[color:var(--foreground)]">50,000–150,000 $HOE — Must reach a real active group (not botted)</p>
          </div>
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">YouTube/TikTok/Shorts</p>
            <p className="text-base text-[color:var(--foreground)]">100,000–300,000 $HOE — Engagement-based bonus possible</p>
          </div>
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">X Space Co-Host</p>
            <p className="text-base text-[color:var(--foreground)]">150,000–500,000 $HOE — Depends on reach and retention</p>
          </div>
          <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl p-6 sm:p-8">
            <p className="text-xl font-bold text-[color:var(--accent)]">CEX/Influencer Referral</p>
            <p className="text-base text-[color:var(--foreground)]">500,000+ $HOE — Handled case-by-case with vesting</p>
          </div>
        </div>

        <h2 className="heading-sub">📈 Multiplier Bonuses</h2>
        <ul className="list-disc list-inside space-y-1 text-left text-lg mb-8">
          <li>🚀 <strong>High conversion</strong> (follower growth, TG joins, trading volume): ×1.5–2</li>
          <li>🔥 <strong>Top-tier engagement</strong> (100+ likes/retweets): +20%</li>
          <li>🧑‍🌾 <strong>Community impact</strong>: referrals, viral memes, retention</li>
          <li>⚠️ <strong>Low-effort content</strong> may be denied or reduced</li>
        </ul>

        <h2 className="heading-sub">⏳ Vesting & Early Dumper Clause</h2>
        <p className="text-lg leading-relaxed mb-6">
          Promoters receiving over 500,000 $HOE will have their tokens <strong>vested</strong> over 3–6 months with a short cliff.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Anyone who dumps >25% within the first 30 days without coordination, disengages, or promotes scams may forfeit the rest.
        </p>

        <h2 className="heading-sub">🧪 Tracking & Verification</h2>
        <ul className="list-disc list-inside space-y-1 text-left text-lg mb-8">
          <li>X API for engagement (retweets, quotes, impressions)</li>
          <li>Custom Telegram invite links</li>
          <li>UTM/referral tracking for site visits or wallet connects</li>
          <li>DEX volume analysis tied to post windows</li>
        </ul>

        <h2 className="heading-sub">🤝 Let’s Talk</h2>
        <p className="text-lg leading-relaxed">
          Think you’ve got what it takes to promote $HOE with impact? DM us on{' '}
          <Link className="underline text-blue-400" href="https://twitter.com/pimpyourhoe">@pimpyourhoe</Link>{' '}
          or reach out directly on Telegram at{' '}
          <Link className="underline text-blue-400" href="https://t.me/officialhoe">@officialhoe</Link>.
        </p>
        <p className="mt-4 text-sm italic text-[color:var(--foreground)]/70">
          We’ll evaluate based on <strong>real results</strong>, not just follower counts.
        </p>
      </div>
    </AnimatedSection>
  );
}
