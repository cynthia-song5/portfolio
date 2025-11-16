import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border 
                 shadow-apple-md hover:shadow-apple-xl transition-all duration-500 
                 hover:-translate-y-2"
    >
      {/* Project Preview Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/30 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <span className="text-sm">{project.title}</span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground mb-4">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent text-accent-foreground rounded-full 
                         text-xs md:text-sm font-medium border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-xs md:text-sm text-muted-foreground font-medium mb-3">
          {project.date}
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
