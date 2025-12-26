import { NavLink } from "./NavLink";

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-foreground">cynthia song</h1>
        <nav className="flex gap-8">
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, '#about')}
            className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            about
          </a>
          <a 
            href="#work" 
            onClick={(e) => handleScroll(e, '#work')}
            className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            work
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, '#projects')}
            className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
