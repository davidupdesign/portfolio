"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  url: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Clivy",
    description: "Changelog App",
    url: "https://clivy-one.vercel.app",
    image: "/projects/clivy.webp",
  },
  {
    name: "Sine Fere",
    description: "Ecom Clothing Store",
    url: "https://clothing-store-neon.vercel.app",
    image: "/projects/sinefere.webp",
  },
  {
    name: "SoundPro",
    description: "Product Landing Page",
    url: "https://soundpro.vercel.app",
    image: "/projects/soundpro.png",
  },
];

function ProjectRow({
  project,
  index,
  isAnyHovered,
  isHovered,
  onEnter,
  onLeave,
}: {
  project: Project;
  index: number;
  isAnyHovered: boolean;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      // relative so the floating image card is positioned relative to this row
      className="relative flex items-center justify-between py-9 border-b border-white/10 group"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-1/2 z-20 rounded-xl overflow-hidden shadow-2xl"
            style={{ width: 200, height: 90 }}
            initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 8, x: "-50%", scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* left — index + name */}
      <div className="flex items-center gap-4">
        <span
          className="text-xs font-mono transition-colors duration-300"
          style={{
            color:
              isAnyHovered && !isHovered
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.3)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="text-white font-semibold text-2xl transition-colors duration-300"
          style={{
            color:
              isAnyHovered && !isHovered
                ? "rgba(255,255,255,0.25)"
                : "rgba(255,255,255,1)",
          }}
        >
          {project.name}
        </span>
      </div>

      {/* right — description */}
      <span
        className="text-sm font-medium transition-colors duration-300"
        style={{
          color:
            isAnyHovered && !isHovered
              ? "rgba(255,255,255,0.15)"
              : "rgba(255,255,255,0.4)",
        }}
      >
        {project.description}
      </span>
    </Link>
  );
}

export default function ProjectsSection() {
  // track which row index is hovered. null = none.
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="container-narrow mt-16 mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 mb-5">
        <span className="text-white/50 text-sm">Projects</span>
      </div>

      {/* top border */}
      <div className="border-t border-white/10">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.name}
            project={project}
            index={index}
            isHovered={hoveredIndex === index}
            isAnyHovered={hoveredIndex !== null}
            onEnter={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
      <Link
        href="/projects"
        className="flex items-center gap-1 mt-3 text-white/40 text-xs hover:text-white/70 transition-colors w-fit ml-auto"
      >
        View Projects →
      </Link>
    </section>
  );
}
