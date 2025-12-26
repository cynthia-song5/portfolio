import { useState } from "react";
import FolderAnimation from "@/components/FolderAnimation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen">
      {!showContent && <FolderAnimation onOpen={() => setShowContent(true)} />}
      
      {showContent && (
        <div className="animate-fade-in">
          <Header />
          <div className="pt-16">
            <Hero />
            <AboutMe />
            <WorkSection />
            <ProjectsSection />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
