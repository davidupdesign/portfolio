"use client";

import { motion, AnimatePresence } from "framer-motion";

import { ChartNoAxesGantt, FileUser } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";
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

import FloatingLines from "./FloatingLines";
import { useAudio } from "@/context/AudioContext";

const techStack: { icon: SimpleIcon; label: string }[] = [
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siReact, label: "React" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siTailwindcss, label: "Tailwind" },
  { icon: siPrisma, label: "Prisma" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siGit, label: "Git" },
];

//pfp images
const pfpImages = ["/pfp/1-pfp.webp", "/pfp/2-pfp.webp", "/pfp/3-pfp.webp"];

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
  //traching shown image
  const [currentPfp, setCurrentPfp] = useState(0);

  const handlePfpClick = () =>
    setCurrentPfp((prev) => (prev + 1) % pfpImages.length);

  useEffect(() => {
    // if already on first image, do nothing
    if (currentPfp === 0) return;

    // after 5 sec, resetting back to first image
    const timer = setTimeout(() => setCurrentPfp(0), 5000);

    //clearing the timer if user clicks again before 5s is up
    return () => clearTimeout(timer);
  }, [currentPfp]);

  const { playing, togglePlay } = useAudio();

  const floatingLines = useMemo(
    () => (
      <FloatingLines
        linesGradient={["#000000", "#2196f3"]}
        animationSpeed={1}
        interactive
        bendRadius={4}
        bendStrength={-0.7}
        mouseDamping={0.05}
        parallax
        parallaxStrength={0.2}
      />
    ),
    [],
  );

  const [clock, setClock] = useState({ time: "", date: "" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClock({
        time: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        date: now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container-narrow pt-6">
      {/* banner */}

      <div className="w-full h-48 rounded-lg border border-white/10 mb-6 overflow-hidden relative">
        {floatingLines}

        {/* clock — top left */}
        <div className="absolute top-3 left-3 z-10 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-5 py-3">
          <p className="text-white font-semibold text-lg leading-none">
            {clock.time}
          </p>
          <p className="text-white/40 text-xs mt-1">{clock.date}</p>
        </div>

        {/* compact player — bottom right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 w-[220px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png"
            alt="Now Playing"
            className="w-9 h-9 rounded-md shrink-0 object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold truncate">
              Let it happen
            </p>
            <p className="text-white/40 text-xs truncate">Tame Impala</p>
          </div>
          <button onClick={togglePlay} className="shrink-0 cursor-pointer">
            {playing ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white/60 hover:fill-white transition-colors"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* profile */}
      <div className="flex gap-4 mb-4">
        <div
          onClick={handlePfpClick}
          className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 cursor-pointer hover:border-white/40 transition-colors duration-200"
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={currentPfp}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={pfpImages[currentPfp]}
                alt="David"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* name */}
        <div>
          <h1 className="text-white py-1 font-semibold text-2xl cursor-default group ">
            <span className="inline-flex items-center">
              Hey, I&apos;m{" "}
              <span className="ml-1 group-hover:text-[#2196F3] group-hover:font-bold transition-all duration-400 group-hover:ml-2">
                David{" "}
              </span>
              <ChartNoAxesGantt className="w-6 h-6 ml-2 text-[#2196f3] stroke-3" />
            </span>
          </h1>

          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-[#2196f3] animate-pulse" />
            <span className="text-white/80 text-sm">Available for Work</span>
          </div>
        </div>

        {/* resume */}
        <a
          href="https://davidk-resume.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto self-start hidden sm:block"
        >
          <div className="px-3 py-1 font-medium  rounded-lg border border-white/10  text-white/50  hover:text-[#2196F3] hover:border-white/15 hover:bg-white/5 transition-all duration-200">
            <p>Resume </p>
          </div>
        </a>
      </div>

      {/* bio */}
      <p className="text-white/70 text-lg leading-relaxed sm:mb-8 mb-2 mx-0.5 group">
        I&apos;m a{" "}
        <span className="group-hover:text-[#2196F3] transition-all duration-400">
          full-stack developer
        </span>{" "}
        specializing in building{" "}
        <span className="group-hover:text-[#2196F3] transition-all duration-400">
          clean, responsive interfaces
        </span>{" "}
        and crafting engaging user experiences with great attention to detail.
      </p>

      {/* mobile only resume */}
      <a
        href="YOUR_RESUME_URL"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 w-full text-center sm:hidden block"
      >
        <div className="px-4 py-2 font-medium rounded-lg border border-white/10 text-[#2196F3] bg-black/10 hover:text-[#2196F3] hover:border-white/15 hover:bg-white/5 transition-all duration-200">
          Resume
        </div>
      </a>

     {/* tech stack  label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 mb-5">
        {/* <span className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" /> */}
        <span className="text-white/50 text-sm">
          Tech Stack
        </span>
      </div>

      {/* tech stack */}
      <div className="grid grid-cols-4 gap-2">
        {techStack.map((item) => (
          <TechCard key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>

    </section>
  );
}
