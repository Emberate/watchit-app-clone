import { Search, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Hotstar
          </h1>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              TV
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Movies
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Sports
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Disney+
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Subscribe
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
