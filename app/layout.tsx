import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "⚡ zFlash — Raid Clan",
  description:
    "Official zFlash raid clan for The Strongest Battlegrounds.",
  keywords: [
    "zFlash",
    "The Strongest Battlegrounds",
    "TSB",
    "Raid Clan",
    "Roblox",
  ],
  authors: [{ name: "zFlash" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "⚡ zFlash — Raid Clan",
    description:
      "Official zFlash raid clan for The Strongest Battlegrounds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}