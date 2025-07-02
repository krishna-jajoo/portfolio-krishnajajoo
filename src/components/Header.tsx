
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Portfolio</div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-primary/10">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
