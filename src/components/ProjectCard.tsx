"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, Expand, ChevronUp, Maximize, Maximize2, Fullscreen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Squircle } from "lucide-react";

type TechIcon = { icon: { path: string; hex: string }; label: string };

type Project = {
  name: string;
  description: string;
  features: string[];
  image: string;
  tech: TechIcon[];
  live: string;
  github: string;
};

export default function ProjectCard({
  project,
  imageRight,
}: {
  project: Project;
  imageRight: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-xl border border-white/10 bg-white/5 overflow-hidden flex flex-col"
      transition={{ layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
    >
      <AnimatePresence mode="wait">
        {!expanded ? (
          // collapsed state
          <motion.div
            key="collapsed"
            layout="preserve-aspect"
            className="flex flex-col md:flex-row md:h-64"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {/* image with hover overlay */}
            <div
              className={`relative w-full md:w-1/2 h-60 md:h-full shrink-0 p-3 cursor-pointer ${imageRight ? "md:order-2" : "md:order-1"}`}
              onClick={() => setExpanded(true)}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover items-start"
                />

  {/* mobile expand overlay */}
  <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-2 rounded-md bg-black/60 backdrop-blur-xs md:hidden">
    <span className="text-white/70 text-xs">Tap to expand</span>
    <Expand className="w-4 h-4 text-[#2196F3] stroke-2" />
  </div>

                <AnimatePresence>
                  {imageHovered && (
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="text-white text-sm font-medium">
                        Click to expand
                      </span>
                      <Expand className="w-4 h-4 text-[#51abf4] stroke-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* content */}
            <div
              className={`flex flex-col justify-between p-5 w-full md:w-1/2 ${imageRight ? "md:order-1" : "md:order-2"}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-white font-semibold  text-2xl md:text-lg">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-sm py-1.5 md:text-xs px-2.5 md:py-1 rounded-md border border-white/15 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                    >
                      View Live{" "}
                      <ExternalLink className="w-4 h-4 md:w-3.5 md:h-3.5 text-[#2196F3] transition-colors duration-200 group-hover:animate-[pulse_1s_ease-in-out_infinite]" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Github className=" w-5 h-5 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-2 flex flex-col gap-0.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-white/35"
                    >
                      <span className="text-[#2196F3] shrink-0">
                        <Squircle className="w-3 h-5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                {project.tech.map(({ icon, label }) => {
                  const isTooDark =
                    icon.hex === "000000" || icon.hex === "010101";
                  const color = isTooDark ? "#ffffff" : `#${icon.hex}`;
                  return (
                    <div
                      key={label}
                      className="group relative flex items-center justify-center"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 transition-opacity duration-200 opacity-70 group-hover:opacity-100"
                        style={{ fill: color }}
                      >
                        <path d={icon.path} />
                      </svg>
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-xs bg-white/10 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : (
          // expanded
          <motion.div
            key="expanded"
            layout="preserve-aspect"
            className="flex flex-col"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            {/* scaled iframe */}
            <div
              className="relative w-full overflow-hidden rounded-t-xl bg-white"
              style={{ height: 360 }}
            >
              <div
                style={{
                  width: "200%",
                  height: "200%",
                  transform: "scale(0.5)",
                  transformOrigin: "top left",
                }}
              >
                <iframe
                  src={project.live}
                  className="w-full h-full border-0"
                  title={project.name}
                />
              </div>

              {/* collapse btn */}
              <button
                onClick={() => {
                  setExpanded(false);
                  setImageHovered(false);
                }}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white/70 text-xs hover:text-white transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center">
                  Collapse
                  <ChevronUp className="w-5 h-5 text-[#2196F3] stroke-2" />
                </span>
              </button>
            </div>

            {/* info below iframe */}
            <div className="flex flex-col md:flex-row md:items-start justify-between p-5 gap-4 border-t border-white/10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-white font-semibold text-lg">
                    {project.name}
                  </h2>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-xs px-2.5 py-1 rounded-md border border-white/15 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    View Live{" "}
                    <ExternalLink className="w-3.5 h-3.5 text-[#2196F3] transition-colors duration-200 group-hover:animate-[pulse_1s_ease-in-out_infinite]" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-white/50 text-xs leading-relaxed mb-2">
                  {project.description}
                </p>

                {/* features */}
                <ul className="flex flex-col gap-0.5 mb-8">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-white/35"
                    >
                      <span className="text-[#2196F3] shrink-0">
                        <Squircle className="w-3 h-5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* tech stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(({ icon, label }) => {
                    const isTooDark =
                      icon.hex === "000000" || icon.hex === "010101";
                    const color = isTooDark ? "#ffffff" : `#${icon.hex}`;
                    return (
                      <div
                        key={label}
                        className="group relative flex items-center justify-center"
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                          style={{ fill: color }}
                        >
                          <path d={icon.path} />
                        </svg>
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-xs bg-white/10 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
