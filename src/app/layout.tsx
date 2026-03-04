import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ColorBends from "@/components/ColorBends";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import AnimatedLayout from "@/components/AnimatedLayout";
import { AudioProvider } from "@/context/AudioContext";

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
  description: "David K - Full-stack Developer",
  icons: {
    icon: "/chart-no-axes-gantt.svg",
  },
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
        <div className="fixed inset-0 z-0 style={{ height: '100dvh' }}">
          <ColorBends
            rotation={45}
            speed={0.2}
            colors={["#0d47a1", "#2196f3"]}
            transparent
            autoRotate={0}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0.1}
            parallax={0.6}
            noise={0.25}
          />
        </div>

        {/* overlay */}
        <div
          className="fixed inset-0 z-1"
          style={{ height: '100dvh', background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
        />

        <AudioProvider>
          <div className="relative z-10 min-h-screen">
            <Navbar />

            <ThemeProvider>
              <AnimatedLayout>{children}</AnimatedLayout>
            </ThemeProvider>
          </div>
        </AudioProvider>
      </body>
    </html>
  );
}
