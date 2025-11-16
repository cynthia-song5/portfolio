import { Mail, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-center px-4 py-32 md:py-40 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight animate-fade-in">
        cynthia song
      </h1>

      <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap animate-fade-in">
        {["developer", "ai enthusiast", "designer"].map((role, index) => (
          <span
            key={role}
            className="px-6 py-3 rounded-full font-semibold
                       text-base md:text-lg bg-accent text-accent-foreground"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {role}
          </span>
        ))}
      </div>

      <p className="text-xl md:text-2xl font-semibold mb-12 text-muted-foreground max-w-3xl mx-auto animate-fade-in">
        there's nothing i love doing more than coding, designing, and working on
        solutions that improve the lives of others!
      </p>

      <p className="text-lg md:text-xl font-semibold mb-6 text-foreground">
        let's connect!
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
    </section>
  );
};

export default Hero;

