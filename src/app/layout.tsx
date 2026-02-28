import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ColorBends from "@/components/ColorBends";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DK - Portfolio",
  description: "David K - Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 z-0">
          <ColorBends
            rotation={45}
            speed={0.2}
            colors={["#0d47a1", "#2196f3"]}
            transparent
            autoRotate={0}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0.6}
            parallax={0.3}
            noise={0.25}
          />
        </div>
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
