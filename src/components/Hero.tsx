import { Mail, Github } from "lucide-react";

const Hero = () => {
  const roles = [
    { title: "developer", color: "bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" },
    { title: "ai enthusiast", color: "bg-accent/30 text-accent-foreground hover:bg-accent-foreground hover:text-white" },
    { title: "designer", color: "bg-indigo-light text-indigo-dark hover:bg-indigo hover:text-white" },
  ];

  const scrollToWork = () => {
    document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="hero-section" className="text-center px-4 py-24 md:py-32 max-w-6xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-4 md:left-10 text-4xl md:text-6xl opacity-50 rotate-12 animate-pulse">
        ✨
      </div>
      <div className="absolute top-20 right-4 md:right-10 text-3xl md:text-5xl opacity-50 -rotate-12 animate-pulse">
        🎨
      </div>
      <div className="absolute bottom-40 left-8 md:left-20 text-3xl md:text-4xl opacity-50 rotate-45">
        ⚡
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black mb-8 text-foreground tracking-tighter uppercase">
        Cynthia Song
      </h1>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
        {roles.map((role, index) => (
          <button
            key={index}
            onClick={scrollToWork}
            className={`${role.color} text-primary-foreground px-6 py-2.5 md:px-8 md:py-3 rounded-full 
                       text-base md:text-lg font-semibold transition-all duration-300 
                       hover:scale-105 hover:-translate-y-1 cursor-pointer`}
          >
            {role.title}
          </button>
        ))}
      </div>

      <div className="mb-16">
        <p className="text-2xl md:text-4xl font-black mb-4 text-foreground uppercase tracking-tight">
          Innovating with <span className="text-primary italic" style={{ fontFamily: 'Georgia, serif' }}>Curiosity</span>
        </p>
        <p className="text-lg md:text-xl text-apple-gray-5 max-w-3xl mx-auto leading-relaxed">
          there's nothing i love doing more than{" "}
          <span className="font-bold text-foreground underline decoration-primary decoration-wavy">coding</span>,{" "}
          <span className="font-bold text-foreground underline decoration-primary decoration-wavy">designing</span>, and working on
          solutions that improve the lives of others
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-black mb-8 text-foreground uppercase tracking-tight">
          Currently Building ↓
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-3xl shadow-apple-md hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-1 border-2 border-border relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-6xl opacity-20">💻</div>
            <h4 className="text-base md:text-lg font-black mb-3 text-foreground uppercase tracking-tight relative z-10">
              Software Engineer @ AwareAbility
            </h4>
            <p className="text-sm text-apple-gray-5 leading-relaxed relative z-10">
              converting complex simulation workflows to Python & building interactive
              visualizations for x-ray production analysis
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-6 rounded-3xl shadow-apple-md hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-1 border-2 border-border relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-6xl opacity-20">📊</div>
            <h4 className="text-base md:text-lg font-black mb-3 text-foreground uppercase tracking-tight relative z-10">
              Business Dev Lead @ Twocents
            </h4>
            <p className="text-sm text-apple-gray-5 leading-relaxed relative z-10">
              spearheading college expansion across 20 universities & developing
              strategic CBA models for growth forecasting
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 p-6 rounded-3xl shadow-apple-md hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-1 border-2 border-border relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-6xl opacity-20">👩‍💻</div>
            <h4 className="text-base md:text-lg font-black mb-3 text-foreground uppercase tracking-tight relative z-10">
              Instructor @ Kode With Klossy
            </h4>
            <p className="text-sm text-apple-gray-5 leading-relaxed relative z-10">
              teaching web development & fostering tech inclusivity for 60+ young
              women and non-binary individuals
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg md:text-xl font-black mb-6 text-foreground uppercase tracking-tight">
          Let's Connect ↓
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:cynthiasong2006@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full 
                       font-black uppercase text-sm transition-all duration-300 hover:scale-110 hover:shadow-apple-lg hover:-rotate-2 tracking-wide"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://github.com/cynthia-song5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full 
                       font-black uppercase text-sm border-2 border-foreground transition-all duration-300 
                       hover:scale-110 hover:shadow-apple-md hover:rotate-2 tracking-wide"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
