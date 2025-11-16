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
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto 
                   shadow-apple-xl animate-scale-in"
      >
        <div className="bg-gradient-to-br from-primary to-indigo-4 p-10 md:p-16 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full 
                       bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110
                       backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight pr-16 relative z-10">
            {project.title}
          </h2>
          <p className="text-lg md:text-xl opacity-90 relative z-10">{project.subtitle}</p>
        </div>

        <div className="p-10 md:p-16 space-y-10">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              What I Did
            </h3>
            <ul className="space-y-4">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <span className="text-primary mt-1 font-bold text-lg group-hover:scale-110 
                                 transition-transform duration-300">▶</span>
                  <span className="text-apple-gray-5 leading-relaxed text-base md:text-lg">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Impact & Results
            </h3>
            <p className="text-apple-gray-5 leading-relaxed text-base md:text-lg">
              {project.impact}
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-1 to-accent rounded-3xl p-8 md:p-10 
                        border-2 border-indigo-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Technologies & Skills Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-primary text-primary-foreground rounded-full 
                             text-sm md:text-base font-semibold transition-all duration-300 
                             hover:scale-110 hover:shadow-apple-md cursor-default"
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
