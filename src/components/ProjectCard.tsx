import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-3xl overflow-hidden border border-border 
                 shadow-apple-md hover:shadow-apple-xl transition-all duration-500 
                 hover:-translate-y-3 hover:rotate-1"
    >
      {/* Image Section */}
      {project.image && (
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div className={`absolute inset-0 ${project.color || 'bg-primary'} opacity-90`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-foreground">
              {project.date}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-apple-gray-5 mb-4">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full 
                         text-xs md:text-sm font-medium border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm md:text-base text-apple-gray-5 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
