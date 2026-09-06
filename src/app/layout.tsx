import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#2b00c4",
};

export const metadata: Metadata = {
  title: "1Fi App | Shop & Pay Later using Mutual Funds",
  description: "Shop today, Pay later using Mutual funds with 0% No-Cost EMI on iPhones, Gold coins, EVs, and Laptops. No credit score required, backed by your investments.",
  keywords: ["1Fi", "1Fi Marketplace", "Mutual Fund EMI", "No Cost EMI", "Pay later using Mutual funds", "Shop 1Fi"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[#f4f5f8] font-sans antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}
