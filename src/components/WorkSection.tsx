import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <div id="work-section" className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute -top-8 left-1/4 text-4xl opacity-30 rotate-12">⭐</div>
        <div className="absolute -top-4 right-1/4 text-3xl opacity-30 -rotate-12">✦</div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-4 text-foreground tracking-tighter uppercase">
          Project Playlist
        </h2>
        <p className="text-lg md:text-2xl text-apple-gray-5 font-medium">
          passion projects & professional experiences
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-3 rounded-full font-black uppercase transition-all duration-300 
                       text-xs md:text-sm tracking-wider border-2
                       ${
                         activeFilter === filter.id
                           ? "bg-foreground text-background border-foreground shadow-apple-md scale-105 rotate-1"
                           : "bg-background text-foreground border-border hover:scale-105 hover:shadow-apple-sm hover:-rotate-1"
                       }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
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
