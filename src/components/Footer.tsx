import { Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-6xl">🌸</div>
          
          <p className="text-center text-sm text-muted-foreground font-medium">
            a flower for stopping by ᵕ̈
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:cynthiasong2006@gmail.com"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full 
                       bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground 
                       transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/cynthia-song5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full 
                       bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground 
                       transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2025 cynthia song • crafted with curiosity & care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
