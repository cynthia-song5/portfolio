export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  description: string;
  achievements: string[];
  impact: string;
  skills: string[];
  category: string[];
}

export const projects: Project[] = [
  {
    id: "distress-detection",
    title: "AI-Powered Universal Distress Signal Detection",
    subtitle: "Emergency response system using computer vision & facial recognition",
    tags: ["ai/ml", "develop"],
    date: "march 2024",
    description:
      "Built a real-time AI system that detects universal distress hand gestures and facial emotions to automatically call emergency services.",
    achievements: [
      "Implemented YOLOv8 for real-time object detection to identify universal distress hand gestures on personally labeled data",
      "Integrated facial emotion recognition model to detect fear and confirm distress situations",
      "Automated emergency response by connecting to 911 services using Twilio's API",
      "Trained models using custom dataset from Roboflow with continuous accuracy improvements",
    ],
    impact:
      "Created a potentially life-saving application that could revolutionize emergency response by providing automatic distress detection in situations where victims cannot verbally call for help.",
    skills: [
      "Python",
      "YOLOv8",
      "Computer Vision",
      "Machine Learning",
      "Twilio API",
      "Roboflow",
      "TensorFlow",
    ],
    category: ["ai", "develop"],
  },
  {
    id: "biomedical-research",
    title: "PhysioNet Challenge 2025",
    subtitle: "Machine learning for Chagas disease detection from ECG data",
    tags: ["research", "ai/ml"],
    date: "may 2025 - aug 2025",
    description:
      "Developed cutting-edge ML algorithms for medical diagnosis, achieving top 20 worldwide ranking.",
    achievements: [
      "Developed open-source machine and deep learning algorithms to detect Chagas disease from 12-lead ECGs",
      "Utilized large-scale biomedical datasets for the prestigious PhysioNet Challenge 2025",
      "Improved challenge score (AUROC, AUPRC, Accuracy, F-measure) by 975% using an XGBoost model",
      "Implemented hybrid feature selection techniques for optimal model performance",
      "Achieved 18th place worldwide",
    ],
    impact:
      "Contributed to advancing medical AI diagnostics with potential to improve early detection of Chagas disease, affecting millions globally.",
    skills: [
      "Python",
      "XGBoost",
      "Deep Learning",
      "Feature Engineering",
      "Medical Data Analysis",
      "Scikit-learn",
    ],
    category: ["research", "ai"],
  },
  {
    id: "awareability",
    title: "AwareAbility Technologies",
    subtitle: "Software development intern - scientific computing & visualization",
    tags: ["develop", "research"],
    date: "may 2025 - aug 2025",
    description:
      "Modernized complex scientific simulation workflows and created interactive visualizations.",
    achievements: [
      "Converted legacy Geant4 and ROOT-based simulation workflows to modern Python architecture",
      "Automated post-simulation data analysis pipelines, significantly reducing manual processing time",
      "Developed interactive visualizations for x-ray production efficiency analysis",
      "Improved visualizations for easier stakeholder communication",
      "Optimized simulation parameter analysis for faster insights generation",
    ],
    impact:
      "Accelerated research workflows and improved data accessibility, enabling faster scientific discoveries in medical imaging technology.",
    skills: [
      "Python",
      "Geant4",
      "ROOT",
      "Data Visualization",
      "Scientific Computing",
      "Automation",
    ],
    category: ["develop", "research"],
  },
  {
    id: "twocents",
    title: "Twocents",
    subtitle: "Business development lead - strategic expansion & financial modeling",
    tags: ["leadership", "develop"],
    date: "january 2025 - present",
    description:
      "Leading strategic business expansion across 20 universities with data-driven financial modeling.",
    achievements: [
      "Led strategy and execution for Twocents' college launch across 20 universities for AU2025",
      "Coordinated partnerships with university services and stakeholders",
      "Developed comprehensive CBA (Cost-Benefit Analysis) models using Microsoft Excel",
      "Created financial forecasting systems to identify potential revenue streams",
    ],
    impact:
      "Drove strategic growth initiative that expanded company reach to thousands of college students, establishing foundation for sustainable revenue growth.",
    skills: [
      "Strategic Planning",
      "Financial Modeling",
      "Excel",
      "Partnership Development",
      "Project Management",
    ],
    category: ["leadership"],
  },
  {
    id: "klossy",
    title: "Kode With Klossy",
    subtitle: "Instructor assistant - empowering diversity in tech",
    tags: ["leadership", "develop"],
    date: "march 2025 - aug 2025",
    description:
      "Teaching web development and fostering inclusive tech culture for underrepresented communities.",
    achievements: [
      "Taught website development to over 60 young women and non-binary individuals",
      "Mentored students through hands-on coding projects and technical challenges",
      "Facilitated Culture-of-Tech sessions focused on accessibility and inclusivity",
      "Developed curriculum materials for diverse learning styles",
      "Created supportive learning environment for underrepresented groups in tech",
    ],
    impact:
      "Contributed to closing the gender gap in technology by empowering the next generation of diverse tech leaders.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "Teaching",
      "Mentorship",
      "Curriculum Development",
      "Diversity & Inclusion",
    ],
    category: ["leadership", "develop"],
  },
  {
    id: "elevate",
    title: "Elevate Website",
    subtitle: "Full-stack platform connecting students with opportunities",
    tags: ["develop"],
    date: "2024",
    description:
      "Built a responsive web platform that earned investor recognition and scholarship funding.",
    achievements: [
      "Developed and deployed responsive web platform connecting users with extracurricular opportunities",
      "Implemented comprehensive UI/UX verification features for seamless user experience",
      "Created dual-interface system serving both parents and businesses interested in increased exposure",
      "Presented to investor panel and received scholarship funding",
    ],
    impact:
      "Created platform with potential to transform how students discover and engage with extracurricular opportunities, increasing accessibility to opportunities that impact college admissions",
    skills: [
      "Full-Stack Development",
      "UI/UX Design",
      "Responsive Design",
      "User Experience",
      "Product Development",
      "User Interviews",
      "Communication",
    ],
    category: ["develop"],
  },
  {
    id: "discovery-lab",
    title: "Discovery Lab - Global (DLG)",
    subtitle: "Team lead - AI research & education development",
    tags: ["leadership", "research", "ai/ml"],
    date: "may 2024 - august 2024",
    description:
      "Led research team analyzing AI decision-making and developed educational curriculum.",
    achievements: [
      "Led 5-person interdisciplinary team to author technical paper on ChatGPT's role in decision-making",
      "Conducted comprehensive research on AI decision-making patterns and biases",
      "Designed AI Fundamentals course curriculum for non-technical learners",
      "Developed hands-on SmartPong project to make AI concepts accessible",
      "Created educational materials to support career growth in AI field",
    ],
    impact:
      "Advanced AI research understanding while making AI education more accessible to diverse audiences through innovative curriculum design.",
    skills: [
      "Research Leadership",
      "Technical Writing",
      "Curriculum Design",
      "AI/ML",
      "Team Management",
      "Educational Development",
    ],
    category: ["leadership", "research", "ai"],
  },
];
