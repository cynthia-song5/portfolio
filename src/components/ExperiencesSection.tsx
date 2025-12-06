import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, MapPin, Briefcase } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  story: string;
  highlights: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: "onramp",
    title: "Innovation Analyst",
    company: "OnRamp",
    location: "Columbus, OH",
    period: "Sep 2025 - Present",
    type: "Part-time",
    description: "Working with researchers from a Fortune 500 company to determine applications of their research",
    story: "I'm bridging the gap between cutting-edge research and real-world applications. When researchers have breakthrough innovations but aren't sure how to bring them to market, that's where I come in.",
    highlights: [
      "Applied lean startup and design thinking to conduct strategic market validation for confidential AI innovations",
      "Defined optimal customer segments through primary research and competitive analysis",
      "Recommended go-to-market strategies across multiple use cases based on data-driven insights",
    ],
    skills: ["Market Analysis", "Design Thinking", "Strategy", "Research"],
  },
  {
    id: "awareability",
    title: "Software Development Intern",
    company: "AwareAbility Technologies",
    location: "Remote",
    period: "May 2025 - Aug 2025",
    type: "Internship",
    description: "Converting complex simulation workflows to Python & building interactive visualizations",
    story: "I walked into a world of physics simulations and legacy code. Scientists had brilliant work trapped in outdated systems—my mission was to liberate their data and make it accessible to everyone.",
    highlights: [
      "Converted legacy Geant4 and ROOT-based simulation workflows to modern Python architecture",
      "Automated post-simulation data analysis pipelines, reducing processing time by 80%",
      "Developed interactive visualizations for x-ray production efficiency analysis",
      "Built reusable frameworks adopted across multiple research projects",
    ],
    skills: ["Python", "Data Visualization", "Scientific Computing", "Automation"],
  },
  {
    id: "twocents",
    title: "Business Development Lead",
    company: "Twocents",
    location: "Columbus, OH",
    period: "Jan 2025 - Present",
    type: "Part-time",
    description: "Spearheading college expansion across 20 universities & developing strategic models",
    story: "Scaling a startup isn't just about enthusiasm—it's about strategy. I asked: how do we grow fast without growing reckless? Then I built the models to answer that question.",
    highlights: [
      "Led strategy and execution for Twocents' college launch across 20 universities",
      "Developed comprehensive CBA models that became the company-wide decision framework",
      "Created financial forecasting systems with 85%+ accuracy on pilot markets",
      "Established partnerships with university organizations and local businesses",
    ],
    skills: ["Strategic Planning", "Financial Modeling", "Excel", "Partnership Development"],
  },
  {
    id: "klossy",
    title: "Instructor Assistant",
    company: "Kode With Klossy",
    location: "Various Locations",
    period: "Mar 2025 - Aug 2025",
    type: "Seasonal",
    description: "Teaching web development & fostering tech inclusivity for 60+ students",
    story: "I remember being one of few girls in my first CS class, wondering if I belonged. This was my chance to be the mentor I wish I had—to show young women and non-binary students that they absolutely belong in tech.",
    highlights: [
      "Taught 60+ students HTML, CSS, JavaScript, and React fundamentals",
      "Developed adaptive curriculum materials for different learning styles",
      "Led Culture-of-Tech sessions on accessibility, ethics, and inclusion",
      "Mentored students through complete projects from idea to deployment",
    ],
    skills: ["Teaching", "JavaScript", "React", "Mentorship", "Curriculum Development"],
  },
  {
    id: "dlg",
    title: "Team Lead - AI Research",
    company: "Discovery Lab Global",
    location: "Remote",
    period: "May 2024 - Aug 2024",
    type: "Research",
    description: "Led research team analyzing AI decision-making and developed educational curriculum",
    story: "When ChatGPT exploded, everyone had opinions. But what does the research actually say? I led a team to find out—and then to make that knowledge accessible to everyone who wants to understand AI.",
    highlights: [
      "Led 5-person interdisciplinary team to publish technical paper on AI decision-making",
      "Identified key patterns in ChatGPT's reasoning strengths and limitations",
      "Designed AI Fundamentals curriculum adopted by partner organizations",
      "Built SmartPong project that teaches ML concepts through interactive gameplay",
    ],
    skills: ["Research Leadership", "Technical Writing", "AI/ML", "Curriculum Design"],
  },
];

const ExperiencesSection = () => {
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
    <section id="experiences" className="px-4 py-20 bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            my journey so far
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            every role taught me something new about building, leading, and creating impact
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md -translate-x-1/2 z-10" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    className="bg-card rounded-2xl border border-border shadow-apple-sm hover:shadow-apple-md
                               transition-all duration-300 overflow-hidden cursor-pointer group"
                    whileHover={{ y: -4 }}
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedId === exp.id ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {expandedId === exp.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-border space-y-6">
                              {/* Story */}
                              <div>
                                <p className="text-muted-foreground leading-relaxed italic text-sm border-l-2 border-primary/30 pl-4">
                                  "{exp.story}"
                                </p>
                              </div>

                              {/* Highlights */}
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <Briefcase className="w-4 h-4 text-primary" />
                                  <h4 className="font-semibold text-foreground">Key Contributions</h4>
                                </div>
                                <ul className="space-y-2">
                                  {exp.highlights.map((highlight, idx) => (
                                    <motion.li
                                      key={idx}
                                      className="flex items-start gap-3 text-sm"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                    >
                                      <span className="text-primary mt-1.5 text-xs">●</span>
                                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              {/* Skills */}
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
