import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { CookieBanner } from "@/components/ui/CookieBanner";
import "./globals.css";

export const ensureStatic = "navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScaleBos — Scale past €100k/mo without operational chaos",
  description:
    "I install a done-for-you operating system so fitness, nutrition, and health coaches can run their entire business from one organized place.",
  metadataBase: new URL("https://scalebos.net"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="top" className={`${inter.variable} ${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
