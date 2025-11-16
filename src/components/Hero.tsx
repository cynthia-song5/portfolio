import { Mail, Github } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center text-center py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tight animate-fade-in">
          cynthia song
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={scrollToWork}
            className="px-8 py-4 bg-indigo-1 text-indigo-4 rounded-full font-semibold text-lg
                       hover:bg-indigo-2 transition-all duration-500 hover:scale-105 
                       hover:shadow-apple-lg border-2 border-indigo-2"
          >
            developer
          </button>
          <button
            onClick={scrollToWork}
            className="px-8 py-4 bg-indigo-1 text-indigo-4 rounded-full font-semibold text-lg
                       hover:bg-indigo-2 transition-all duration-500 hover:scale-105 
                       hover:shadow-apple-lg border-2 border-indigo-2"
          >
            ai enthusiast
          </button>
          <button
            onClick={scrollToWork}
            className="px-8 py-4 bg-indigo-1 text-indigo-4 rounded-full font-semibold text-lg
                       hover:bg-indigo-2 transition-all duration-500 hover:scale-105 
                       hover:shadow-apple-lg border-2 border-indigo-2"
          >
            designer
          </button>
        </div>

        <p className="text-2xl md:text-3xl font-medium mb-16 max-w-4xl mx-auto 
                      text-apple-gray-5 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
          there's nothing i love doing more than coding, designing, and working on solutions 
          that improve the lives of others!
        </p>

        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-4">
            in a hurry? here's what i've been doing most recently:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-card p-8 rounded-3xl shadow-apple-md hover:shadow-apple-xl 
                            transition-all duration-700 hover:-translate-y-3 border border-border 
                            text-left overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-1/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 text-indigo-4">
                  interning as a software engineer @ AwareAbility Technologies
                </h4>
                <p className="text-apple-gray-5 leading-relaxed text-base">
                  converting complex simulation workflows to Python & building interactive visualizations 
                  for x-ray production analysis
                </p>
              </div>
            </div>
            <div className="group bg-card p-8 rounded-3xl shadow-apple-md hover:shadow-apple-xl 
                            transition-all duration-700 hover:-translate-y-3 border border-border 
                            text-left overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-1/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 text-indigo-4">
                  leading business development @ Twocents
                </h4>
                <p className="text-apple-gray-5 leading-relaxed text-base">
                  spearheading college expansion across 20 universities & developing strategic 
                  CBA models for growth forecasting
                </p>
              </div>
            </div>
            <div className="group bg-card p-8 rounded-3xl shadow-apple-md hover:shadow-apple-xl 
                            transition-all duration-700 hover:-translate-y-3 border border-border 
                            text-left overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-1/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 text-indigo-4">
                  mentoring the next generation @ Kode With Klossy
                </h4>
                <p className="text-apple-gray-5 leading-relaxed text-base">
                  teaching web development & fostering tech inclusivity for 60+ young women 
                  and non-binary individuals
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold mb-8 text-indigo-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          reach out to me here!
        </p>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="mailto:cynthiasong2006@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground 
                       rounded-full font-semibold hover:bg-primary/90 transition-all duration-500 
                       hover:scale-105 hover:shadow-apple-lg text-lg"
          >
            <i className="fas fa-envelope"></i>
            email me
          </a>
          <a
            href="https://github.com/cynthia-song5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-card text-foreground 
                       rounded-full font-semibold hover:bg-accent transition-all duration-500 
                       hover:scale-105 hover:shadow-apple-lg border-2 border-border text-lg"
          >
            <i className="fab fa-github"></i>
            github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
