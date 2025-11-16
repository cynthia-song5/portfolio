import { useState } from "react";
import FolderAnimation from "@/components/FolderAnimation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ExperiencesSection from "@/components/ExperiencesSection";
import WorkSection from "@/components/WorkSection";

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
            <ExperiencesSection />
            <WorkSection />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
