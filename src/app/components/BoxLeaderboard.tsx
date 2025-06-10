import AnimatedSection from "@components/AnimatedSection";

export default function BoxLeaderboard() {
  return (
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
  );
} 