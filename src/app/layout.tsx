import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simon Loos | Vakmanschap geladen met trots",
  description: "Simon Loos hoort bij de top logistiek dienstverleners in Nederland. Met 1.200 vrachtwagens en 60 locaties ontzorgen wij uw logistiek.",
  keywords: ["Simon Loos", "logistiek", "transport", "warehousing", "Nederland", "vrachtwagens"],
  authors: [{ name: "Simon Loos" }],
  openGraph: {
    title: "Simon Loos | Vakmanschap geladen met trots",
    description: "Dé logistiek dienstverlener van Nederland sinds 1938. 1.200 vrachtwagens, 60 locaties.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-[#0a0a0a] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
