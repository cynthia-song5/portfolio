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
                 shadow-apple-md hover:shadow-apple-xl transition-all duration-700 
                 hover:-translate-y-4 scroll-scale-in"
    >
      {/* Image Section */}
      {project.image && (
        <div className="relative h-64 md:h-72 overflow-hidden">
          <div className={`absolute inset-0 ${project.color || 'bg-primary'} opacity-80 
                          group-hover:opacity-70 transition-opacity duration-700`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover mix-blend-overlay transform 
                       group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-6 right-6">
            <span className="bg-white/95 backdrop-blur-md text-xs font-bold px-4 py-2 
                           rounded-full text-foreground shadow-lg">
              {project.date}
            </span>
          </div>
        </div>
      )}

      <div className="p-8 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-foreground 
                       group-hover:text-primary transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-apple-gray-5 mb-6 leading-relaxed">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-indigo-1 text-indigo-4 rounded-full 
                         text-xs md:text-sm font-semibold border border-indigo-2
                         group-hover:bg-indigo-2 transition-all duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm md:text-base text-apple-gray-5 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
