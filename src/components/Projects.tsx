import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, FileText, Home, Phone, Search, Users } from "lucide-react";

const projects = [
  {
    title: "Form Filling Agent",
    icon: FileText,
    description: "Multi-agent system with agent-to-agent pipeline for automated document and Excel filling with multi-language support.",
    tech: ["Multi Agents", "A2A Pipeline", "LLMs", "Translation APIs"],
  },
  {
    title: "Custom AI Agent",
    icon: Bot,
    description: "Inbound and outbound AI agent with LiveKit integration and call recording capabilities.",
    tech: ["LiveKit", "Call Recording", "Agent Development"],
  },
  {
    title: "Rover Dental Clinic",
    icon: Phone,
    description: "AI-powered dental clinic assistant with real-time TTS/STT, tool calling, and SMS integration.",
    tech: ["Agents", "LiveKit", "TTS/STT", "LangChain", "FastAPI"],
  },
  {
    title: "Real Estate Cost Estimate",
    icon: Home,
    description: "Construction cost estimation system using RAG and chatbot interface with Excel data processing.",
    tech: ["RAG", "ChatBot", "Excel Processing", "Prompt Engineering"],
  },
  {
    title: "Browser Use AI Automation",
    icon: Search,
    description: "Automated browsing and data extraction system powered by AI agents.",
    tech: ["Agents", "LangChain", "FastAPI"],
  },
  {
    title: "Human Values Identification",
    icon: Users,
    description: "NLP-based system for identifying human values behind arguments using contextual analysis.",
    tech: ["Python", "NLTK", "NLP", "Contextual Analysis"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold flex-1">{project.title}</h3>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-secondary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
