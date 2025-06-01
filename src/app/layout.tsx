import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletConnectionProvider } from "../components/WalletProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: '$HOE — Get to Work',
  description: 'A meme coin for degens with dirt under their fingernails. Stack your HOE. Dig deep.',
  openGraph: {
    title: '$HOE — Get to Work',
    description: 'A meme coin for degens with dirt under their fingernails. Stack your HOE. Dig deep.',
    url: 'https://pimpyourhoe.com',
    type: 'website',
    siteName: 'Pimp Your HOE',
    locale: 'en_US',
    images: [
      {
        url: 'https://pimpyourhoe.com/images/hoe-og-preview.jpg',
        width: 1200,
        height: 630,
        alt: '$HOE — Get to Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pimpyourhoe',
    creator: '@pimpyourhoe',
    title: '$HOE — Get to Work',
    description: 'A meme coin for degens with dirt under their fingernails. Stack your HOE. Dig deep.',
    images: ['https://pimpyourhoe.com/images/hoe-og-preview.jpg'],
  },
  metadataBase: new URL('https://pimpyourhoe.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletConnectionProvider>
          {children}
        </WalletConnectionProvider>
      </body>
    </html>
  );
}
