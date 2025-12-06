import { X, ExternalLink, Lightbulb, Target, Rocket, BookOpen } from "lucide-react";
import { Project } from "@/data/projects";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-md flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto 
                     shadow-apple-xl border border-border"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Hero Header */}
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full 
                         bg-primary-foreground/10 hover:bg-primary-foreground/20 
                         transition-colors duration-200 backdrop-blur-sm"
            >
              <X size={20} className="text-primary-foreground" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-foreground/20 text-primary-foreground 
                               rounded-full text-xs font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-primary-foreground pr-12">
                {project.title}
              </h2>
              <p className="text-lg opacity-90 text-primary-foreground/90">{project.subtitle}</p>
              <p className="text-sm mt-4 text-primary-foreground/70 font-medium">{project.date}</p>
            </motion.div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            {/* My Why */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">my why</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {project.story}
              </p>
            </motion.section>

            {/* Problem & Solution */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-destructive/10 rounded-xl">
                    <Target className="w-5 h-5 text-destructive" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">the problem</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.problem}
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-foreground/10 rounded-xl">
                    <Rocket className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">the solution</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.solution}
                </p>
              </div>
            </motion.div>

            {/* What I Built */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">what i built</h3>
              <div className="space-y-4">
                {project.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed text-sm md:text-base pt-1">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Impact */}
            <motion.section
              className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                impact & results
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {project.impact}
              </p>
            </motion.section>

            {/* What I Learned */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">what i learned</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {project.learnings}
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section
              className="bg-card rounded-2xl p-6 md:p-8 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                technologies & skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full 
                               text-xs md:text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <motion.section
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background 
                               rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    {link.label}
                  </a>
                ))}
              </motion.section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
