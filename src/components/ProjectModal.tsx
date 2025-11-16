import { X } from "lucide-react";
import { Project } from "@/data/projects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto 
                   shadow-apple-xl animate-scale-in"
      >
        <div className="bg-primary p-8 md:p-12 text-primary-foreground relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full 
                       hover:bg-white/20 transition-colors duration-200"
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight pr-12">
            {project.title}
          </h2>
          <p className="text-base md:text-lg opacity-90">{project.subtitle}</p>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
              What I Did
            </h3>
            <ul className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">▶</span>
                  <span className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
              Impact & Results
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {project.impact}
            </p>
          </div>

          <div className="bg-accent rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
              Technologies & Skills Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-full 
                             text-xs md:text-sm font-semibold transition-transform duration-200 
                             hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
