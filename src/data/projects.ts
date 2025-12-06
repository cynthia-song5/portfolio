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
      "Joining AwareAbility, I walked into a world of physics simulations and legacy code. The scientists had brilliant work trapped in outdated systems. My mission: liberate their data and make it dance.",
    problem:
      "Researchers were spending more time wrestling with Geant4 and ROOT—tools from the 90s—than actually analyzing their results. Data was siloed, workflows were manual, and insights were buried in terminal outputs.",
    solution:
      "I rebuilt the entire pipeline in Python. From simulation configuration to final visualization, everything now flows through modern, maintainable code with beautiful interactive plots that reveal what the data is really saying.",
    achievements: [
      "Converted legacy Geant4/ROOT workflows to clean Python architecture",
      "Built automated pipelines that reduced analysis time from hours to minutes",
      "Created interactive Plotly visualizations that stakeholders actually understood",
      "Developed reusable simulation parameter optimization framework",
    ],
    impact:
      "Scientists now spend their time doing science, not debugging code. The visualizations I built are being used in presentations to potential partners and investors.",
    learnings:
      "Legacy code isn't just about technology—it's about understanding why decisions were made. I learned to respect the old while building the new, and that the best solutions often come from deeply understanding the problem domain.",
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
    story:
      "Twocents was ready to scale, but scaling a startup isn't just about enthusiasm—it's about strategy. When I joined as Business Development Lead, I asked: how do we grow fast without growing reckless?",
    problem:
      "College expansion is expensive and risky. Each university has different cultures, regulations, and student needs. How do you prioritize? How do you predict what works?",
    solution:
      "I built comprehensive financial models that turned uncertainty into actionable strategy. Cost-benefit analyses for each potential market, revenue forecasting that accounted for seasonality, and partnership frameworks that could scale.",
    achievements: [
      "Designed launch strategy for 20 universities across different regions",
      "Built Excel-based CBA models adopted as company-wide decision framework",
      "Established partnerships with university organizations and local businesses",
      "Created revenue forecasting system with 85%+ accuracy on pilot markets",
    ],
    impact:
      "The models I built don't just guide where we launch—they shape how we think about growth. Every strategic decision now has data behind it.",
    learnings:
      "Startups move fast, but sustainable growth requires thinking slow. I learned that the best business decisions come from balancing intuition with rigorous analysis, and that clear communication can turn complex models into company-wide alignment.",
    skills: [
      "Strategic Planning",
      "Financial Modeling",
      "Excel",
      "Partnership Development",
      "Project Management",
    ],
    category: ["leadership"],
    image: "/src/assets/projects/twocents.png",
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
      "I remember being one of few girls in my first CS class, wondering if I belonged. Kode With Klossy gave me the chance to be the mentor I wish I had—to show young women and non-binary students that they absolutely belong.",
    problem:
      "Tech has a diversity problem, and it starts early. Young people from underrepresented groups often lack role models, resources, and communities that make them feel welcome in technology.",
    solution:
      "More than just teaching code, I focused on building confidence. Every debugging session became a lesson in problem-solving mindset. Every project became proof that they could build real things.",
    achievements: [
      "Taught 60+ students HTML, CSS, JavaScript, and React fundamentals",
      "Developed adaptive curriculum materials for different learning styles",
      "Led Culture-of-Tech sessions on accessibility, ethics, and inclusion",
      "Mentored students through complete project builds from idea to deployment",
    ],
    impact:
      "Watching a student's face light up when their first website goes live—that's the impact. Some of my students are now applying to CS programs. Others discovered they love design. All of them know they can code.",
    learnings:
      "Teaching taught me to code. When you have to explain something to a beginner, you realize what you truly understand versus what you just memorized. I also learned that the best teachers aren't the ones with all the answers—they're the ones who help students find their own.",
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
      "I built Elevate—a platform that aggregates opportunities and matches them to student profiles. Dual interfaces serve both students seeking opportunities and organizations wanting to reach diverse talent pools.",
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
