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

  authors: [
    {
      name: "zFlash",
    },
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "⚡ zFlash — Raid Clan",
    description:
      "Official zFlash raid clan for The Strongest Battlegrounds.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "zFlash Raid Clan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "⚡ zFlash — Raid Clan",
    description:
      "Official zFlash raid clan for The Strongest Battlegrounds.",
    images: ["/opengraph-image.png"],
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