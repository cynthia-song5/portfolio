import { Mail, Github } from "lucide-react";

const Hero = () => {
  const roles = [
    { title: "developer", color: "bg-primary hover:shadow-[0_8px_24px_rgba(0,122,255,0.3)]" },
    { title: "ai enthusiast", color: "bg-primary hover:shadow-[0_8px_24px_rgba(0,122,255,0.3)]" },
    { title: "designer", color: "bg-primary hover:shadow-[0_8px_24px_rgba(0,122,255,0.3)]" },
  ];

  const scrollToWork = () => {
    document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-center px-4 py-16 md:py-24 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
        cynthia song
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

      <p className="text-xl md:text-2xl mb-12 text-apple-gray-5 max-w-3xl mx-auto font-medium leading-relaxed">
        there's nothing i love doing more than coding, designing, and working on
        solutions that improve the lives of others!
      </p>

      <div className="mb-16">
        <h3 className="text-lg md:text-xl font-semibold mb-6 text-apple-gray-6">
          in a hurry? here's what i've been doing most recently:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
          <div className="bg-card p-6 rounded-2xl shadow-apple-md hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1 border border-border">
            <h4 className="text-base md:text-lg font-semibold mb-2 text-primary">
              interning as a software engineer @ AwareAbility Technologies
            </h4>
            <p className="text-sm text-apple-gray-5 leading-relaxed">
              converting complex simulation workflows to Python & building interactive
              visualizations for x-ray production analysis
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-apple-md hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1 border border-border">
            <h4 className="text-base md:text-lg font-semibold mb-2 text-primary">
              leading business development @ Twocents
            </h4>
            <p className="text-sm text-apple-gray-5 leading-relaxed">
              spearheading college expansion across 20 universities & developing
              strategic CBA models for growth forecasting
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-apple-md hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1 border border-border">
            <h4 className="text-base md:text-lg font-semibold mb-2 text-primary">
              mentoring the next generation @ Kode With Klossy
            </h4>
            <p className="text-sm text-apple-gray-5 leading-relaxed">
              teaching web development & fostering tech inclusivity for 60+ young
              women and non-binary individuals
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg md:text-xl font-semibold mb-6 text-apple-gray-6">
        reach out to me here!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:cynthiasong2006@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full 
                     font-semibold transition-all duration-300 hover:scale-105 hover:shadow-apple-lg"
        >
          <Mail size={20} />
          email me
        </a>
        <a
          href="https://github.com/cynthia-song5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full 
                     font-semibold border border-border transition-all duration-300 
                     hover:scale-105 hover:shadow-apple-md"
        >
          <Github size={20} />
          github
        </a>
      </div>
    </div>
  );
};

export default Hero;
