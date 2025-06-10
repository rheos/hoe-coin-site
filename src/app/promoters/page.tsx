import React from "react";
import Link from "next/link";
import AnimatedSection from "@components/AnimatedSection";
import Logo from "@components/Logo";

export const metadata = {
    title: "Promote $HOE — Earn by Growing the Movement",
    description: "No upfront deals. We reward real reach and genuine impact. If you're serious about helping $HOE grow, here's how we work.",
    openGraph: {
      title: "Promote $HOE",
      description: "Earn $HOE by actually moving the needle. No upfronts. Just real rewards for real work.",
      url: "https://pimpyourhoe.com/promoters",
      siteName: "$HOE",
      images: [
        {
          url: "https://pimpyourhoe.com/hoe-og-promoter.png", // Replace with actual hosted image
          width: 1200,
          height: 630,
          alt: "Promote $HOE",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Promote $HOE",
      description: "Get rewarded for real engagement. No bots. No fluff.",
      images: ["https://pimpyourhoe.com/hoe-og-promoter.png"], // Replace with actual image
    },
  };

  

export default function PromotersPage() {
  return (
    <>
      <div className="w-full flex justify-center">
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <Logo />
        </Link>
      </div>

      {/* Intro */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h1 className="heading-main mb-6">📣 Promote $HOE &mdash; Earn Real Rewards</h1>
          <p className="text-xl leading-relaxed mb-4">
            We don&apos;t pay upfront for promos &mdash; we reward based on <strong>results</strong>. $HOE is a mission-backed meme coin and we&apos;re serious about rewarding the people who help spread the word <strong>and move the needle</strong>.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-left">
            If you&apos;ve got real reach, real engagement, and a track record of converting followers into action &mdash; we want to work with you.
          </p>
        </div>
      </AnimatedSection>

      {/* Base Reward Structure */}
      <AnimatedSection>
        <h2 className="heading-sub text-center text-4xl sm:text-5xl mb-8">💰 Base Reward Structure</h2>
      </AnimatedSection>
      <div className="mb-12">
        <div className="grid grid-cols-1 gap-6 mb-0">
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">Retweet (with impact)</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">25,000 $HOE &mdash; Must stay live, relevant to campaign</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">Quote Tweet</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">50,000 $HOE &mdash; Add personal take, meme, or support call</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">Custom Meme Post</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">50,000&ndash;100,000 $HOE &mdash; Original content only, meme quality matters</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">Campaign Thread</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">150,000 $HOE+ &mdash; At least 3 tweets, pinned or boosted</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">Telegram Blast</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">50,000&ndash;150,000 $HOE &mdash; Must reach a real active group (not botted)</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">YouTube/TikTok/Shorts</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">100,000&ndash;300,000 $HOE &mdash; Engagement-based bonus possible</p>
            </div>
          </AnimatedSection>
          {/*
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">X Space Co-Host</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">150,000&ndash;500,000 $HOE &mdash; Depends on reach and retention</p>
            </div>
          </AnimatedSection>
          */}
          <AnimatedSection>
            <div className="bg-[color:var(--background)] border border-[color:var(--accent)] rounded-xl py-4 px-6 sm:py-6 sm:px-8 mb-4">
              <p className="text-xl sm:text-2xl font-bold text-[color:var(--accent)] mb-2 text-center">CEX/Influencer Referral</p>
              <p className="text-lg sm:text-xl text-[color:var(--foreground)] mt-2 text-center">500,000+ $HOE &mdash; Handled case-by-case with vesting</p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Multiplier Bonuses */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h2 className="heading-sub">📈 Multiplier Bonuses</h2>
          <ul className="list-disc list-inside space-y-1 text-left text-lg mb-8">
            <li>🚀 <strong>High conversion</strong> (follower growth, TG joins, trading volume): &times;1.5&ndash;2</li>
            <li>🔥 <strong>Top-tier engagement</strong> (100+ likes/retweets): +20%</li>
            <li>🧑‍🌾 <strong>Community impact</strong>: referrals, viral memes, retention</li>
            <li>⚠️ <strong>Low-effort content</strong> may be denied or reduced</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* Vesting & Early Dumper Clause */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h2 className="heading-sub text-center">⏳ Vesting &amp; Early Dumper Clause</h2>
          <div className="max-w-prose mx-auto text-left mt-4 mb-8">
            <p className="text-lg leading-relaxed mb-4">
              Promoters receiving over 500,000 $HOE will have their tokens <strong>vested</strong> over 3&ndash;6 months, with a short cliff &mdash; meaning nothing is unlocked immediately, and the first portion only becomes available after a brief initial delay.
            </p>
            <p className="text-lg leading-relaxed">
              Anyone who dumps &gt;25% within the first 30 days without coordination, disengages, or promotes scams may forfeit the rest.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Tracking & Verification */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h2 className="heading-sub">🧪 Tracking &amp; Verification</h2>
          <ul className="list-disc list-inside space-y-1 text-left text-lg mb-8">
            <li>X API for engagement (retweets, quotes, impressions)</li>
            <li>Custom Telegram invite links</li>
            <li>UTM/referral tracking for site visits or wallet connects</li>
            <li>DEX volume analysis tied to post windows</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* Let's Talk */}
      <AnimatedSection>
        <div className="box-container mb-12">
          <h2 className="heading-sub">🤝 Let&apos;s Talk</h2>
          <p className="text-lg leading-relaxed">
            Think you&apos;ve got what it takes to promote $HOE with impact? DM us on X{' '}
            <Link className="underline text-blue-400" href="https://x.com/pimpyourhoe">@pimpyourhoe</Link>{' '}
            or reach out directly on Telegram at{' '}
            <Link className="underline text-blue-400" href="https://t.me/officialhoe">@officialhoe</Link>.
          </p>
          <p className="mt-4 text-sm italic text-[color:var(--foreground)]/70">
            We&apos;ll evaluate based on <strong>real results</strong>, not just follower counts.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
