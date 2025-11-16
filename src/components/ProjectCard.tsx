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
      <div className="bg-primary p-6 md:p-8 text-primary-foreground">
        <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm md:text-base opacity-90">{project.subtitle}</p>
      </div>

      <div className="p-6 md:p-8">
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

        <div className="text-xs md:text-sm text-apple-gray-5 font-medium mb-3">
          {project.date}
        </div>

        <p className="text-sm md:text-base text-apple-gray-5 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
