export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  description: string;
  story: string; // The narrative behind the project
  problem: string; // What problem were you solving?
  solution: string; // How did you approach it?
  achievements: string[];
  impact: string;
  learnings: string; // What did you learn?
  skills: string[];
  category: string[];
  image?: string;
  links?: { label: string; url: string }[];
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
    story:
      "This project started when I learned about the universal distress hand signal—a gesture created during the pandemic to silently signal for help. I wondered: what if technology could recognize this signal and automatically call for help? What if we could save lives when someone can't speak?",
    problem:
      "Victims of domestic violence, kidnapping, or other dangerous situations often can't verbally call for help. The universal distress signal exists, but it relies on someone seeing and recognizing it. What if no one's watching?",
    solution:
      "I built an AI system that watches. Using YOLOv8 for real-time gesture detection and facial emotion recognition to confirm distress, the system can automatically contact emergency services through Twilio when it detects someone signaling for help.",
    achievements: [
      "Trained YOLOv8 on personally labeled distress gesture data, achieving reliable real-time detection",
      "Integrated facial emotion recognition to reduce false positives by confirming fear/distress",
      "Built automatic 911 connection using Twilio API for immediate emergency response",
      "Created a full pipeline from detection to alert in under 3 seconds",
    ],
    impact:
      "This could be deployed in smart home devices, security cameras, or even phone apps—always watching, ready to call for help when someone can't.",
    learnings:
      "This project taught me that the most impactful technology solves problems people didn't even know could be solved. It also deepened my understanding of computer vision, real-time ML inference, and the importance of reducing false positives in critical systems.",
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
    story:
      "When I discovered the PhysioNet Challenge, I saw an opportunity to apply my ML skills to real medical problems. Chagas disease affects millions in Latin America, often going undetected until it's too late. Could we catch it earlier using just an ECG?",
    problem:
      "Chagas disease causes silent heart damage for decades before symptoms appear. By then, treatment options are limited. Early detection from routine ECGs could save countless lives—but humans can't reliably spot the subtle patterns.",
    solution:
      "I developed an XGBoost model with hybrid feature selection that analyzes 12-lead ECG data. The model looks for patterns invisible to the human eye, flagging potential Chagas disease for further testing.",
    achievements: [
      "Improved baseline challenge score by 975% through feature engineering and model optimization",
      "Implemented hybrid feature selection combining statistical and ML-based approaches",
      "Developed robust preprocessing pipeline for noisy real-world ECG data",
      "Achieved 18th place worldwide out of hundreds of international teams",
    ],
    impact:
      "This research contributes to a future where routine checkups could catch diseases decades earlier, transforming how we think about preventive medicine.",
    learnings:
      "Working with medical data taught me the weight of responsibility in healthcare AI. Every percentage point of accuracy represents real patients. I also learned the art of feature engineering—sometimes understanding the domain matters more than the fanciest algorithm.",
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
    story:
      "At AwareAbility, I worked with legacy Geant4/ROOT workflows that were slowing down analysis. I focused on modernizing pipelines so scientists could spend less time on setup and more on interpreting results.",
    problem:
      "Simulation workflows were slow and fragmented. Researchers spent hours converting outputs manually before they could analyze anything.",
    solution:
      "I rewrote the pipelines in Python, automated the data processing, and built interactive Plotly visualizations to make results more accessible and interpretable.",
    achievements: [
      "Converted Geant4/ROOT workflows into Python scripts with automated processing",
      "Developed reusable plotting functions and visualizations for technical & non-technical stakeholders to understand",
      "Reduced analysis time from hours to minutes",
      "Built a framework for simulation parameter optimization",
    ],
    impact:
      "The updates allowed researchers to analyze data faster and communicate findings more effectively to partners and investors.",
    learnings:
      "I gained experience with scientific computing, automation, and the challenge of translating complex workflows into maintainable code.",
    skills: [
      "Python",
      "Geant4",
      "ROOT",
      "Plotly",
      "Data Visualization",
      "Automation",
    ],
    category: ["develop", "research"],
  },
  {
    id: "twocents",
    title: "Twocents",
    subtitle: "Business development lead - strategic expansion & financial modeling",
    tags: ["leadership", "develop"],
    date: "Jan 2025 - present",
    description:
      "Building a private feedback platform connecting students and businesses with actionable insights.",
    story:
      "Twocents was designed to improve the feedback loop between customers and businesses while keeping negative feedback private. I led the development and product strategy.",
    problem:
      "Businesses struggle to get honest, actionable feedback from customers without risking reputational harm, while customers want a safe way to share insights.",
    solution:
      "I built comprehensive financial models that turned uncertainty into actionable strategy. Cost-benefit analyses for each potential market, revenue forecasting that accounted for seasonality, and partnership frameworks that could scale.",
    achievements: [
      "Designed launch strategy for 20 universities across different regions",
      "Built financial and cost-benefit analysis models adopted company-wide",
      "Established partnerships with student organizations and local businesses",
      "Created revenue forecasting system with 85%+ accuracy for pilot markets",
    ],
    impact:
      "My work helps guide Twocents’ expansion, ensuring strategic growth backed by data and sustainable partnerships.",
    learnings:
      "I learned how to translate data into actionable business strategy and the importance of balancing speed with structured planning in a startup environment.",
    skills: [
      "Strategic Planning",
      "Financial Modeling",
      "Excel",
      "Partnership Development",
      "Project Management",
    ],
    category: ["leadership"],
    image: "https://www.twocents.io/opengraph-image.png?db26bcde0973fa3b",
  },
  {
    id: "klossy",
    title: "Kode With Klossy",
    subtitle: "Instructor assistant - empowering diversity in tech",
    tags: ["leadership", "develop"],
    date: "march 2025 - aug 2025",
    description:
      "Teaching web development and fostering inclusive tech culture for underrepresented communities.",
    story:
      "I remember being one of few girls in my computer science classes and felt like I didn't belong. Kode With Klossy gave me a community, showed me how creativity can intersect with problem-solving, and gave me the opportunity to give back to the community through mentorship.",
    problem:
      "Tech has a diversity problem, and it starts early. Young people from underrepresented groups often lack role models, resources, and communities that make them feel welcome in technology.",
    solution:
      "More than just teaching code, I focused on building confidence. I made sure to meet students where they were at and push them, but not overwhelm them. I wanted each student to feel like they were a part of the larger community through interactive activities, personalized teaching, and open discussions.",
    achievements: [
      "Taught 60+ students HTML, CSS, JavaScript, and React fundamentals",
      "Developed adaptive curriculum materials for different learning styles",
      "Led Culture-of-Tech sessions on accessibility, ethics, and inclusion",
      "Mentored students through complete project builds from idea to deployment",
    ],
    impact:
      "Students gained confidence and developed websites they were proud of with only a week! They gained experience working with teams, and some even decided to change their majors to computer science after realizing it isn't so intimidating after all :).",
    learnings:
      "Teaching taught me to code. When you have to explain something to a beginner, you realize what you truly understand versus what you just memorized. I also learned how to adapt my teaching to challenge students of different skill levels without overwhelming them.",
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
    story:
      "As a high schooler, I spent hours every week searching for opportunities—research programs, competitions, internships. Information was scattered across dozens of websites. I thought: why isn't there one place for all of this?",
    problem:
      "Students, especially first-generation ones, often miss life-changing opportunities simply because they don't know they exist. Parents want to help but don't know where to look. The information asymmetry creates unfair advantages.",
    solution:
      "I built Elevate, a platform that aggregates opportunities and matches them to student profiles. Dual interfaces serve both students seeking opportunities and organizations wanting to reach diverse talent pools.",
    achievements: [
      "Designed and built full-stack platform with responsive UI",
      "Created dual-interface system for students and opportunity providers",
      "Implemented smart matching algorithm based on interests and eligibility",
      "Pitched to investor panel and won scholarship funding",
    ],
    impact:
      "Elevate democratizes access to opportunities. Students from any background can discover programs that could change their trajectory—without needing insider knowledge.",
    learnings:
      "Building for users taught me that my assumptions are usually wrong. The features I thought were important weren't; the ones I almost cut turned out to be essential. Talk to your users. Then talk to them again.",
    skills: [
      "Full-Stack Development",
      "UI/UX Design",
      "Responsive Design",
      "User Experience",
      "Product Development",
      "User Interviews",
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
    story:
      "When ChatGPT exploded, everyone had opinions. But what does the research actually say? I led a team to find out—and then to make that knowledge accessible to everyone.",
    problem:
      "AI is transforming decision-making everywhere, but most people don't understand how it works or what its limitations are. Misinformation spreads faster than education, creating unrealistic expectations and real harms.",
    solution:
      "Our team conducted rigorous research on ChatGPT's decision-making patterns, biases, and failure modes. Then we translated that research into an accessible curriculum—including a hands-on SmartPong game that teaches AI concepts through play.",
    achievements: [
      "Led 5-person interdisciplinary team to publish technical paper on AI decision-making",
      "Identified key patterns in ChatGPT's reasoning strengths and limitations",
      "Designed AI Fundamentals curriculum adopted by partner organizations",
      "Built SmartPong project that teaches ML concepts through interactive gameplay",
    ],
    impact:
      "Research without communication is incomplete. Our work helps people make informed decisions about when to trust AI—and when not to.",
    learnings:
      "Leading a research team taught me that the best insights come from diverse perspectives. Engineers, designers, and domain experts see different facets of the same problem. My job as a leader was to synthesize, not to have all the answers.",
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
