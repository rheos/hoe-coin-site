"use client";

import WalletHeader from "@components/WalletHeader";
import Logo from "@components/Logo";
import BoxIntro from "@components/BoxIntro";
import BoxHowToGet from "@components/BoxHowToGet";
import BoxMoreThanMemes from "@components/BoxMoreThanMemes";
import BoxWhatsNext from "@components/BoxWhatsNext";
import BoxTokenomics from "@components/BoxTokenomics";
import BoxFarming from "@components/BoxFarming";
import BoxRoadmap from "@components/BoxRoadmap";
import BoxFAQ from "@components/BoxFAQ";
import BoxMemeWall from "@components/BoxMemeWall";
import BoxLeaderboard from "@components/BoxLeaderboard";
import BoxCTA from "@components/BoxCTA";

export default function HomePage() {
  return (
    <main className="scroll-smooth min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] px-6 py-12 flex flex-col items-center">
      <WalletHeader />
      <Logo />
      <BoxIntro />
      <BoxHowToGet />
      <BoxMoreThanMemes />
      <BoxWhatsNext />
      <BoxTokenomics />
      <BoxFarming />
      <BoxRoadmap />
      <BoxFAQ />
      <BoxMemeWall />
      <BoxLeaderboard />
      <BoxCTA />
    </main>
  );
}
