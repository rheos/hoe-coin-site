 "use client";

import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function WalletHeader() {
  return (
    <div
      className="
        w-full flex justify-end mb-6
        sm:fixed sm:top-6 sm:right-6 sm:w-auto sm:z-50 sm:p-2 sm:bg-[color:var(--background)] sm:rounded-lg sm:shadow-lg
      "
    >
      <WalletMultiButton />
    </div>
  );
}
