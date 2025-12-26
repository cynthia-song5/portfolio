import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  image?: string;
  skills: string[];
}

const personalProjects: Project[] = [
  {
    id: "distress-detection",
    title: "AI-Powered Universal Distress Signal Detection",
    subtitle: "Emergency response system using computer vision & facial recognition",
    period: "March 2024",
    description: "Built a real-time AI system that detects universal distress hand gestures and facial emotions to automatically call emergency services.",
    image: "https://moody-challenge.physionet.org/assets/img/ecg-ml.gif",
    skills: ["Python", "YOLOv8", "Computer Vision", "Machine Learning", "Twilio API"],
  },
  {
    id: "loop",
    title: "Loop",
    subtitle: "Community lending platform - frontend development",
    period: "Sep 2025 - Present",
    description: "Developed a platform connecting neighbors to borrow and lend items, with real-time matching and a credit-based reward system.",
    skills: ["React", "Material-UI", "Firebase", "Frontend Development", "Real-time Data"],
  },
  {
    id: "elevate",
    title: "Elevate Website",
    subtitle: "Full-stack platform connecting students with opportunities",
    period: "2024",
    description: "Built a responsive web platform that earned investor recognition and scholarship funding, helping students discover life-changing opportunities.",
    skills: ["Full-Stack Development", "UI/UX Design", "Responsive Design", "Product Development"],
  },
  {
    id: "business-builders",
    title: "Business Builders Website",
    subtitle: "Full-stack development & UI/UX design for bbosu.org",
    period: "2024",
    description: "Collaborated on full-stack development and UI/UX design, creating wireframes in Figma and implementing responsive features. Increased site and club engagement after redesigning, leading to a ~30% increase in recruitment.",
    skills: ["React", "Node.js", "Supabase", "Figma", "UI/UX Design", "Full-Stack Development"],
  },
  {
    id: "ev-charging",
    title: "EV Charging Station Data Analysis",
    subtitle: "Geospatial data analysis for EV infrastructure",
    period: "2024",
    description: "Worked with large EV infrastructure datasets, cleaning and analyzing geospatial and network data (lat/long, station types, charger levels) to support exploration and visualization.",
    skills: ["Data Analysis", "Geospatial Data", "Data Cleaning", "Python", "Data Visualization"],
  },
  {
    id: "awareability-iot",
    title: "IoT Sensor Simulation & Data Visualization",
    subtitle: "AwareAbility Technologies",
    period: "2024",
    description: "Developed IoT sensor simulation and data visualization tools to support accessibility technology research and development.",
    skills: ["IoT", "Data Visualization", "Simulation", "Python", "Sensor Data"],
  },
];

const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="px-4 py-16 max-w-7xl mx-auto bg-muted/30" ref={ref}>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          projects
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          passion projects & personal builds
        </p>
      </div>

      <div className="space-y-4">
        {personalProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-card rounded-2xl border border-border shadow-apple-sm hover:shadow-apple-md
                       transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <button
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              className="w-full text-left hover:bg-accent/50 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="md:w-48 md:h-36 w-full h-40 flex-shrink-0 bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30" />
                      <span className="text-4xl font-bold text-primary/30 z-10">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary font-semibold mb-2">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-medium text-muted-foreground">{project.period}</p>
                      <motion.span 
                        className="text-primary text-xl inline-block mt-2"
                        animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                      >
                        ▼
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div 
                  className="px-6 md:px-8 pb-6 md:pb-8"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <motion.span 
                          key={idx} 
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
