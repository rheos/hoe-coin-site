'use client';
import Link from 'next/link';

const navItems = [
  { label: "🌱", title: "Intro", href: "#intro" },
  { label: "📦", title: "Get $HOE", href: "#howto" },
  { label: "🔥", title: "Tokenomics", href: "#tokenomics" },
  { label: "🧑‍🌾", title: "Farming", href: "#farming" },
  { label: "📜", title: "Roadmap", href: "#roadmap" },
  { label: "📢", title: "FAQ", href: "#faq" },
  { label: "🖼️", title: "Memes", href: "#memes" },
  { label: "📈", title: "Top HOEs", href: "#leaderboard" },
];

export default function HoeNav() {
  return (
    <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 space-y-3 z-50">
      {navItems.map(({ label, title, href }) => (
        <a
          key={href}
          href={href}
          className="block text-2xl hover:scale-125 hover:text-[color:var(--accent)] transition-transform tooltip"
          title={title}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
