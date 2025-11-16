import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-foreground">cynthia song</h1>
        <nav className="flex gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">about</a>
          <a href="#experiences" className="text-foreground hover:text-primary transition-colors font-medium">experiences</a>
          <a href="#work" className="text-foreground hover:text-primary transition-colors font-medium">work</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
