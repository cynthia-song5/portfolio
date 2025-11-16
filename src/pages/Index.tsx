import { useState } from "react";
import FolderAnimation from "@/components/FolderAnimation";
import Header from "@/components/Header";
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
          <>
            <Header />
            <main className="min-h-screen pb-20">
              <Hero />
              <WorkSection />
            </main>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
