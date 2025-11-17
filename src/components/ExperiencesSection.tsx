import { useState } from "react";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: "onramp",
    title: "Innovation Analyst",
    company: "OnRamp",
    period: "Sep 2025 - Present",
    description: "Working with researchers from a Fortune 500 company to determine applications of their research",
    highlights: [
      "Applied lean startup and design thinking to conduct strategic market validation for a confidential AI innovation, defining optimal customer segments, and recommended the go-to-market strategy across multiple use cases",
    ],
  },
  {
    id: "awareability",
    title: "Software Development Intern",
    company: "AwareAbility Technologies",
    period: "May 2025 - Aug 2025",
    description: "Converting complex simulation workflows to Python & building interactive visualizations",
    highlights: [
      "Converted legacy Geant4 and ROOT-based simulation workflows to modern Python architecture",
      "Automated post-simulation data analysis pipelines",
      "Developed interactive visualizations for x-ray production efficiency analysis",
    ],
  },
  {
    id: "twocents",
    title: "Business Development Lead",
    company: "Twocents",
    period: "Jan 2025 - Present",
    description: "Spearheading college expansion across 20 universities & developing strategic models",
    highlights: [
      "Led strategy and execution for Twocents' college launch across 20 universities",
      "Developed comprehensive CBA models using Microsoft Excel",
      "Created financial forecasting systems to identify potential revenue streams",
    ],
  },
  {
    id: "klossy",
    title: "Instructor Assistant",
    company: "Kode With Klossy",
    period: "Mar 2025 - Aug 2025",
    description: "Teaching web development & fostering tech inclusivity for 60+ students",
    highlights: [
      "Taught website development to over 60 young women and non-binary individuals",
      "Mentored students through hands-on coding projects",
      "Facilitated Culture-of-Tech sessions focused on accessibility and inclusivity",
    ],
  },
  {
    id: "dlg",
    title: "Team Lead - AI Research",
    company: "Discovery Lab Global",
    period: "May 2024 - Aug 2024",
    description: "Led research team analyzing AI decision-making and developed educational curriculum",
    highlights: [
      "Led 5-person interdisciplinary team to author technical paper on ChatGPT",
      "Designed AI Fundamentals course curriculum for non-technical learners",
      "Developed hands-on SmartPong project to make AI concepts accessible",
    ],
  },
];

const ExperiencesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experiences" className="px-4 py-16 max-w-7xl mx-auto bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">experiences</h2>
        <p className="text-lg md:text-xl text-muted-foreground">professional work & leadership</p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-card rounded-2xl border border-border shadow-apple-sm hover:shadow-apple-md
                       transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="w-full p-6 md:p-8 text-left hover:bg-accent/50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
                </div>
              </div>
            </button>

            {expandedId === exp.id && (
              <div className="px-6 md:px-8 pb-6 md:pb-8 animate-accordion-down">
                <div className="pt-4 border-t border-border">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Key Highlights</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1 font-bold">▶</span>
                        <span className="text-muted-foreground leading-relaxed text-sm md:text-base">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
