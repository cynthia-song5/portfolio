import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-apple-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero-section")}
          className="text-xl font-black text-foreground hover:text-primary transition-colors tracking-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          CYNTHIA SONG
        </button>

        <div className="flex gap-6 items-center">
          <button
            onClick={() => scrollToSection("work-section")}
            className="text-sm font-bold uppercase text-foreground hover:text-primary transition-colors tracking-wide"
          >
            PROJECTS
          </button>
          <a
            href="mailto:cynthiasong2006@gmail.com"
            className="text-sm font-bold uppercase text-foreground hover:text-primary transition-colors tracking-wide"
          >
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
