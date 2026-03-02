import ChangelogWidget from "@/components/ChangelogWidget";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import PageTransition from "@/components/PageTransition";
import ProjectsSection from "@/components/ProjectsSection";
import WorkStyle from "@/components/WorkStyle";

export default function Home() {
  return (
    <main className="pt-10">
      <Hero />
      <ChangelogWidget />
      <ProjectsSection />
      <WorkStyle />
      <CTA />
      <Footer />
    </main>
  );
}
