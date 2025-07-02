
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-center">
            <span className="gradient-text text-5xl sm:text-6xl md:text-8xl block font-extrabold drop-shadow-lg mb-8 leading-normal py-2">Krishna Jajoo</span>
            <span className="text-foreground text-xl sm:text-2xl mt-6 block">Data Scientist & AI Engineer</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4 mt-8">
            Transforming complex data into actionable insights through machine learning, 
            statistical analysis, and cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            
            
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" onClick={() => window.open('https://github.com/krishna-jajoo', '_blank')}>
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" onClick={() => window.open('https://www.linkedin.com/in/krishna-jajoo-59a4951b4/', '_blank')}>
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all" onClick={() => scrollToSection('contact')}>
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-vibrant-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-vibrant-pink/20 rounded-full blur-xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-vibrant-blue/20 rounded-full blur-xl animate-float" style={{
        animationDelay: '4s'
      }}></div>
    </section>
  );
};

export default Hero;
