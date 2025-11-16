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
    <section id="work" className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          my work ᕕ( ᐛ )ᕗ
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          passion projects & research
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 
                       text-sm md:text-base
                       ${
                         activeFilter === filter.id
                           ? "bg-primary text-primary-foreground shadow-apple-md scale-105"
                           : "bg-card text-foreground border border-border hover:scale-105 hover:shadow-apple-sm"
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
    </section>
  );
};

export default WorkSection;
