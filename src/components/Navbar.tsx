"use client";

import GradualBlur from "./GradualBlur";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navLinks: { href: string; label: string }[] = [
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="flex items-center justify-between mx-auto container-narrow px-6 py-5">
      {/* layer 1 */}
<div
  className="absolute inset-0 -z-10 transition-opacity duration-500"
  style={{
    opacity: scrolled ? 1 : 0,
    backdropFilter: "blur(6px)",
    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 50%)",
    maskImage: "linear-gradient(to bottom, black 0%, transparent 50%)",
  }}
/>

{/* layer 2 */}
<div
  className="absolute inset-0 -z-10 transition-opacity duration-500"
  style={{
    opacity: scrolled ? 1 : 0,
    backdropFilter: "blur(3px)",
    WebkitMaskImage: "linear-gradient(to bottom, transparent 20%, black 40%, transparent 80%)",
    maskImage: "linear-gradient(to bottom, transparent 20%, black 40%, transparent 80%)",
  }}
/>

{/* layer 3 */}
<div
  className="absolute inset-0 -z-10 transition-opacity duration-500"
  style={{
    opacity: scrolled ? 1 : 0,
    backdropFilter: "blur(0.5px)",
    background: "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.1) 70%, transparent 100%)",
  }}
/>
        {/* left - logo */}
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-widest hover:opacity-70 transition-opacity pointer-events-auto"
        >
          DK
        </Link>

        {/* right - nav links */}
        <ul className="flex items-center gap-8 pointer-events-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200",
                  pathname === link.href
                    ? "text-white font-medium"
                    : "text-white/50 hover:text-white/90",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
