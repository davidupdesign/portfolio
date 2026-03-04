"use client";

import { AtSign } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTA() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("davidupdesign@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="container-narrow mt-20 mb-16 text-center">
      <p className="text-white/40 text-md mb-4">
        Interested in working together?
      </p>
      <h2 className="text-white font-bold text-4xl mb-8">
        Let&apos;s Connect.
      </h2>

      <div className="flex items-center justify-center gap-3">
        {/* email */}
        <button
          onClick={handleCopy}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ padding: hovered ? "0.625rem 1.75rem" : "0.625rem 1.25rem" }}
          className="relative flex items-center gap-2 rounded-full border border-white/15 text-white/70 text-sm hover:text-white hover:border-white/30 transition-all duration-500 ease-in-out cursor-pointer"
        >
          <motion.div
            animate={{ x: hovered ? -8 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <AtSign className="w-4 h-4 shrink-0" />
          </motion.div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
            {copied ? (
  <motion.span
    key="copied"
    className="block text-green-400 whitespace-nowrap"
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
  >
    Copied!
  </motion.span>
) : hovered ? (
  <>
    <motion.span
      key="email"
      className="hidden md:block whitespace-nowrap"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      davidupdesign@gmail.com
    </motion.span>
    <motion.span
      key="email-mobile"
      className="block md:hidden"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      Email
    </motion.span>
  </>
) : (
  <motion.span
    key="default"
    className="block"
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
  >
    Email
  </motion.span>
)}
            </AnimatePresence>
          </div>
        </button>

        {/* linkedin */}

        <a
          href="https://www.linkedin.com/in/david-k21/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/70 text-sm hover:text-white hover:border-white/30 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
