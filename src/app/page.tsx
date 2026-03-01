import ChangelogWidget from "@/components/ChangelogWidget";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <ChangelogWidget />
      <ProjectsSection />
    </main>
  );
}
