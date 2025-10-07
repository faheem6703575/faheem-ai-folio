import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Faheem Akram</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Generative AI Engineer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializing in AI & Machine Learning with expertise in LangChain, Agents, and Full-Stack AI Applications
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/faheemakram" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a 
            href="mailto:faheem.akram.bscs@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/faheemakram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/faheemakram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
