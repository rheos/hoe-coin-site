import AnimatedSection from "@components/AnimatedSection";

export default function BoxFAQ() {
  return (
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
            <p>A: Join contests, meme raids, stake $HOE, or grab a &quot;Sadie Supporter&quot; NFT to earn early rewards.</p>
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
  );
} 