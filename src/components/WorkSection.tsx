import { useState, useEffect, useRef } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-fade-in, .scroll-scale-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const filters = [
    { id: "all", label: "all" },
    { id: "develop", label: "develop" },
    { id: "ai", label: "ai/ml" },
    { id: "leadership", label: "leadership" },
    { id: "research", label: "research" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <div ref={sectionRef} id="work-section" className="px-4 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16 scroll-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
          project playlist ᕕ( ᐛ )ᕗ
        </h2>
        <p className="text-xl md:text-2xl text-apple-gray-5 font-medium">
          passion projects & professional experiences 🎨
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-fade-in">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-8 py-3.5 rounded-full font-semibold transition-all duration-500 
                       text-base md:text-lg
                       ${
                         activeFilter === filter.id
                           ? "bg-primary text-primary-foreground shadow-apple-lg scale-105"
                           : "bg-card text-foreground border-2 border-border hover:scale-105 hover:shadow-apple-md hover:border-indigo-2"
                       }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredProjects.map((project, index) => (
          <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default WorkSection;
