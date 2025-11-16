import { useState } from "react";
import FolderAnimation from "@/components/FolderAnimation";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <FolderAnimation onOpen={() => setShowContent(true)} />}
      
      <div
        className={`transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {showContent && (
          <main className="min-h-screen">
            <Hero />
            <WorkSection />
          </main>
        )}
      </div>
    </>
  );
};

export default Index;
