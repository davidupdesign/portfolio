import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Dot,
  ChevronRight,
  Brackets,
  Squircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  siNextdotjs,
  siTypescript,
  siPostgresql,
  siPrisma,
  siTailwindcss,
  siFramer,
  siResend,
  siVercel,
  siStripe,
  siReact,
  siVite,
  siJavascript,
} from "simple-icons";

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

const projects: Project[] = [
  {
    name: "Clivy",
    description:
      "Changelog and release notes platform. Create projects, write entries & publish to public timeline pages.",
    features: [
      "Full viewer and user side platform",
      "Account management system",
      "Many more core and interactive features",
    ],
    image: "/projects/clivy.webp",
    tech: [
      { icon: siNextdotjs, label: "Next.js" },
      { icon: siTypescript, label: "TypeScript" },
      { icon: siPostgresql, label: "PostgreSQL" },
      { icon: siPrisma, label: "Prisma" },
      { icon: siTailwindcss, label: "Tailwind CSS" },
      { icon: siFramer, label: "Framer Motion" },
      { icon: siResend, label: "Resend" },
      { icon: siVercel, label: "Vercel" },
    ],
    live: "https://clivy-one.vercel.app",
    github: "https://github.com/davidupdesign/clivy",
  },
  {
    name: "Sine Fere",
    description:
      "Modern e-commerce clothing store with automated product catalog and metadata-to-product info system.",
    features: [
      "Automated product catalog system",
      "Automated metadata → Product info",
      "Responsive design with smooth animations",
    ],
    image: "/projects/sinefere.webp",
    tech: [
      { icon: siNextdotjs, label: "Next.js" },
      { icon: siTailwindcss, label: "Tailwind CSS" },
      { icon: siFramer, label: "Framer Motion" },
      { icon: siStripe, label: "Stripe" },
      { icon: siVercel, label: "Vercel" },
    ],
    live: "https://clothing-store-neon.vercel.app",
    github: "https://github.com/davidupdesign/clothing-store",
  },
  {
    name: "SoundPro",
    description:
      "A modern, responsive product landing page demonstrating fundamental component architecture and responsive design patterns.",
    features: [
      "Modern, Simple, Responsive",
      "Reusable structure",
      "Easily adjusted to various projects",
    ],
    image: "/projects/soundpro.png",
    tech: [
      { icon: siReact, label: "React" },
      { icon: siVite, label: "Vite" },
      { icon: siTailwindcss, label: "Tailwind CSS" },
      { icon: siJavascript, label: "JavaScript" },
    ],
    live: "https://soundpro.vercel.app",
    github: "https://github.com/davidupdesign/landing-page/tree/main",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="container-narrow mt-10 pb-10">
        <h1 className="text-white font-semibold text-3xl mb-8 pl-0.5">
          Projects
        </h1>
        <div className="flex">

        <p className="text-white/90  text-lg max-w-100 font-bold uppercase leading-relaxed pb-2 mx-0.5">
          Every project is a <span className="text-[#2196F3]">problem solved</span> and a <span className="text-[#2196F3]">skill sharpened</span>.
        </p>
        </div>
        <p className="text-white/70 leading-relaxed mb-8 mx-0.5">
          Here is a collection of projects where clean code meets thoughtful
          design.
        </p>

        <div className="container-narrow py-6 mt-8 border-t border-white/10" />

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              imageRight={index % 2 === 0}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
