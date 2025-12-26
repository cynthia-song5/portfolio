import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  story: string;
  achievements: string[];
  skills: string[];
}

const workExperiences: WorkExperience[] = [
  {
    id: "onramp",
    title: "Innovation Analyst",
    company: "OnRamp",
    period: "Sep 2025 - Present",
    description: "Working with researchers from a Fortune 500 company to determine applications of their research",
    story: "I joined OnRamp to bridge the gap between cutting-edge research and real-world applications. Working directly with Fortune 500 researchers, I help identify how their innovations can create value in the market.",
    achievements: [
      "Applied lean startup and design thinking to conduct strategic market validation for a confidential AI innovation",
      "Defined optimal customer segments and recommended go-to-market strategy across multiple use cases",
    ],
    skills: ["Market Research", "Design Thinking", "Strategic Analysis", "AI/ML"],
  },
  {
    id: "physionet",
    title: "AI Research Intern",
    company: "PhysioNet Challenge 2025",
    period: "May 2025 - Aug 2025",
    description: "Developed ML algorithms for Chagas disease detection from ECG data, ranking top 20 worldwide",
    story: "When I discovered the PhysioNet Challenge, I saw an opportunity to apply my ML skills to real medical problems. Chagas disease affects millions in Latin America, often going undetected until it's too late. Could we catch it earlier using just an ECG?",
    achievements: [
      "Improved baseline challenge score by 975% through feature engineering and model optimization",
      "Implemented hybrid feature selection combining statistical and ML-based approaches",
      "Achieved 18th place worldwide out of hundreds of international teams",
    ],
    skills: ["Python", "XGBoost", "Deep Learning", "Feature Engineering", "Medical Data Analysis"],
  },
  {
    id: "awareability",
    title: "Software Development Intern",
    company: "AwareAbility Technologies",
    period: "May 2025 - Aug 2025",
    description: "Converting complex simulation workflows to Python & building interactive visualizations",
    story: "At AwareAbility, I worked with legacy Geant4/ROOT workflows that were slowing down analysis. I focused on modernizing pipelines so scientists could spend less time on setup and more on interpreting results.",
    achievements: [
      "Converted Geant4/ROOT workflows into Python scripts with automated processing",
      "Developed reusable plotting functions and visualizations",
      "Reduced analysis time from hours to minutes",
    ],
    skills: ["Python", "Geant4", "ROOT", "Plotly", "Data Visualization", "Automation"],
  },
  {
    id: "twocents",
    title: "Business Development Lead",
    company: "Twocents",
    period: "Jan 2025 - Present",
    description: "Spearheading college expansion across 20 universities & developing strategic models",
    story: "Twocents was designed to improve the feedback loop between customers and businesses while keeping negative feedback private. I led the development and product strategy.",
    achievements: [
      "Designed launch strategy for 20 universities across different regions",
      "Built financial and cost-benefit analysis models adopted company-wide",
      "Created revenue forecasting system with 85%+ accuracy for pilot markets",
    ],
    skills: ["Strategic Planning", "Financial Modeling", "Excel", "Partnership Development"],
  },
  {
    id: "klossy",
    title: "Instructor Assistant",
    company: "Kode With Klossy",
    period: "Mar 2025 - Aug 2025",
    description: "Teaching web development & fostering tech inclusivity for 60+ students",
    story: "I remember being one of few girls in my computer science classes and felt like I didn't belong. Kode With Klossy gave me a community and the opportunity to give back through mentorship.",
    achievements: [
      "Taught 60+ students HTML, CSS, JavaScript, and React fundamentals",
      "Developed adaptive curriculum materials for different learning styles",
      "Led Culture-of-Tech sessions on accessibility, ethics, and inclusion",
    ],
    skills: ["HTML/CSS", "JavaScript", "Teaching", "Mentorship", "Curriculum Development"],
  },
  {
    id: "dlg",
    title: "Team Lead - AI Research",
    company: "Discovery Lab Global",
    period: "May 2024 - Aug 2024",
    description: "Led research team analyzing AI decision-making and developed educational curriculum",
    story: "When ChatGPT exploded, everyone had opinions. But what does the research actually say? I led a team to find out—and then to make that knowledge accessible to everyone.",
    achievements: [
      "Led 5-person interdisciplinary team to publish technical paper on AI decision-making",
      "Designed AI Fundamentals curriculum adopted by partner organizations",
      "Built SmartPong project that teaches ML concepts through interactive gameplay",
    ],
    skills: ["Research Leadership", "Technical Writing", "Curriculum Design", "AI/ML", "Team Management"],
  },
];

const WorkSection = () => {
  const [selectedWork, setSelectedWork] = useState<WorkExperience | null>(null);
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
    <section id="work" className="px-4 py-16 max-w-7xl mx-auto" ref={ref}>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          work ᕕ( ᐛ )ᕗ
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          professional experiences & leadership
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workExperiences.map((work, index) => (
          <motion.div
            key={work.id}
            onClick={() => setSelectedWork(work)}
            className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border 
                       shadow-apple-sm hover:shadow-apple-lg transition-all duration-500 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            {/* Company & Period */}
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {work.company}
              </span>
              <span className="text-xs text-muted-foreground">{work.period}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 tracking-tight text-foreground group-hover:text-primary transition-colors">
              {work.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {work.description}
            </p>

            {/* Story teaser */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 border-l-2 border-primary/20 pl-3 italic mb-4">
              "{work.story.slice(0, 100)}..."
            </p>

            {/* Skills preview */}
            <div className="flex flex-wrap gap-1.5">
              {work.skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                >
                  {skill}
                </span>
              ))}
              {work.skills.length > 3 && (
                <span className="px-2 py-0.5 text-muted-foreground text-xs">
                  +{work.skills.length - 3}
                </span>
              )}
            </div>

            {/* Click hint */}
            <div className="mt-4 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Click for details →
            </div>
          </motion.div>
        ))}
      </div>

      {/* Work Detail Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="bg-card rounded-2xl border border-border shadow-apple-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {selectedWork.company}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-3 text-foreground">
                      {selectedWork.title}
                    </h2>
                    <p className="text-muted-foreground mt-1">{selectedWork.period}</p>
                  </div>
                  <button
                    onClick={() => setSelectedWork(null)}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <span className="text-2xl">×</span>
                  </button>
                </div>

                {/* Story */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">My Story</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedWork.story}</p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedWork.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1 font-bold">▶</span>
                        <span className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Skills Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedWork.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;
