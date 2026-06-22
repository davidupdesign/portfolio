import ScrollToHash from "@/components/ScrollToHash"
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  siNextdotjs, siTypescript,
  siTailwindcss, siFramer, siVercel,
  siStripe,
} from "simple-icons";

type TechIcon = { icon: { path: string; hex: string }; label: string };
type Project = {
  name: string; description: string; features: string[];
  image: string; tech: TechIcon[]; live: string; github: string;
};

const projects: Project[] = [
  {
    name: "EI",
    description: "Corporate website for an engineering company — venture studio, manufacturing, safety, architecture, and interior design under one brand.",
    features: ["Payload CMS with multilingual content", "Service pages with 3D visuals", "Blog, wiki, careers, and contact flows"],
    image: "/projects/ei-project.webp",
    tech: [
      { icon: siNextdotjs, label: "Next.js" }, { icon: siTypescript, label: "TypeScript" },
      { icon: siTailwindcss, label: "Tailwind CSS" }, { icon: siFramer, label: "Framer Motion" },
      { icon: siVercel, label: "Vercel" },
    ],
    live: "https://ei.ge",
    github: "https://github.com/davidupdesign/elite-infrastructure",
  },
  {
    name: "VParking",
    description: "Product site for a vertical carousel parking system — 16 cars in one footprint for commercial real estate.",
    features: ["Interactive model and spec showcase", "Investor-focused landing sections", "GSAP-driven scroll animations"],
    image: "/projects/vparking-project.webp",
    tech: [
      { icon: siNextdotjs, label: "Next.js" }, { icon: siTypescript, label: "TypeScript" },
      { icon: siTailwindcss, label: "Tailwind CSS" }, { icon: siFramer, label: "Motion" },
      { icon: siVercel, label: "Vercel" },
    ],
    live: "https://vparking.vercel.app",
    github: "https://github.com/davidupdesign/vparking",
  },
  {
    name: "Sine Fere",
    description: "Modern e-commerce clothing store with automated product catalog and metadata-to-product info system.",
    features: ["Automated product catalog system", "Automated metadata → Product info", "Responsive design with smooth animations"],
    image: "/projects/sinefere-project.webp",
    tech: [
      { icon: siNextdotjs, label: "Next.js" }, { icon: siTailwindcss, label: "Tailwind CSS" },
      { icon: siFramer, label: "Framer Motion" }, { icon: siStripe, label: "Stripe" },
      { icon: siVercel, label: "Vercel" },
    ],
    live: "https://clothing-store-neon.vercel.app",
    github: "https://github.com/davidupdesign/clothing-store",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-6">
      
      <ScrollToHash />
      {/* <Navbar /> */}

      <section className="container-narrow mt-10 pb-10">
        <h1 className="text-white font-semibold text-3xl mb-8 pl-0.5">Projects</h1>
        <div className="flex">
          <p className="text-white/90 text-lg max-w-100 font-bold uppercase leading-relaxed pb-2 mx-0.5">
            Every project is a <span className="text-[#2196F3]">problem solved</span> and a <span className="text-[#2196F3]">skill sharpened</span>.
          </p>
        </div>
        <p className="text-white/70 leading-relaxed mb-8 mx-0.5">
          Here is a collection of projects where clean code meets thoughtful design.
        </p>

        <div className="container-narrow py-6 mt-8 border-t border-white/10" />

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            // id used by ScrollToHash to scroll to this card
            <div key={project.name} id={project.name.toLowerCase().replace(" ", "-")}>
              <ProjectCard
                project={project}
                imageRight={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}