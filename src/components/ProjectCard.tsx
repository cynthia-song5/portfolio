import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border 
                 shadow-apple-sm hover:shadow-apple-lg transition-all duration-500"
      whileHover={{ y: -8 }}
    >
      {/* Project Preview Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 overflow-hidden relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30" />
            <span className="text-4xl font-bold text-primary/30 z-10">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Hover overlay with arrow */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full 
                         text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {project.subtitle}
        </p>

        <div className="text-xs text-muted-foreground font-medium mb-4">
          {project.date}
        </div>

        {/* Story teaser */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 border-l-2 border-primary/20 pl-3 italic">
          "{project.story.slice(0, 120)}..."
        </p>

        {/* Skills preview */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="px-2 py-0.5 text-muted-foreground text-xs">
              +{project.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
