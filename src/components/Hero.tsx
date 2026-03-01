"use client";

import { ChartNoAxesGantt } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siPrisma,
  siPostgresql,
  siGit,
  siJavascript,
  type SimpleIcon,
} from "simple-icons";

const techStack: { icon: SimpleIcon; label: string }[] = [
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siReact, label: "React" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siPrisma, label: "Prisma" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siGit, label: "Git" },
];

function TechCard({ icon, label }: { icon: SimpleIcon; label: string }) {
  const [hovered, setHovered] = useState(false);

  const brandColor = `#${icon.hex}`;
  const isTooDark = icon.hex === "000000" || icon.hex === "010101";
  const iconColor = hovered ? (isTooDark ? "#ffffff" : brandColor) : "white";

  return (
    <div
      className="flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200 cursor-default"
      style={{
        backgroundColor: hovered
          ? "rgba(255,255,255,0.12)"
          : "rgba(255,255,255,0.05)",
        borderColor: hovered
          ? "rgba(255,255,255,0.25)"
          : "rgba(255,255,255,0.1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill={iconColor}
        className="w-6 h-6 transition-colors duration-200"
      >
        <path d={icon.path} />
      </svg>
      <span className="text-white/60 text-xs">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="container-narrow pt-24">
      <div className="w-full h-48 rounded-lg border border-white/10 mb-6" />

      {/* profile */}
      <div className="flex gap-4 mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
          <Image src="/pfp.JPG" alt="David" fill className="object-cover" />
        </div>

        {/* name */}
        <div>
          <h1 className="text-white py-1 font-semibold text-2xl">
            <span className="inline-flex items-center">
              Hey, I&apos;m David <ChartNoAxesGantt className="w-6 h-6 ml-2 text-[#2196f3] stroke-3" />
            </span>
          </h1>

          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-[#2196f3] animate-pulse" />
            <span className="text-white/80 text-sm">Available for Work</span>
          </div>
        </div>
      </div>

      {/* bio */}
      <p className="text-white/70 text-lg leading-relaxed mb-8 mx-0.5">
        I&apos;m a front-end developer specializing in building clean,
        responsive interfaces and crafting engaging user experiences with great
        attention to detail.
      </p>

      {/* tech stack */}
      <div className="grid grid-cols-4 gap-2">
        {techStack.map((item) => (
          <TechCard key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </section>
  );
}
