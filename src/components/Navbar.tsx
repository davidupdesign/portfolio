"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navLinks: { href: string; label: string }[] = [
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between mx-auto container-narrow px-6 py-5">
        {/* left - logo */}
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-widest hover:opacity-70 transition-opacity"
        >
          DK
        </Link>

        {/* right - nav links */}
        <ul className="flex items-center gap-8">
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
