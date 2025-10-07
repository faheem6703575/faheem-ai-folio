import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Generative AI Engineer",
    company: "AUG AI",
    location: "Lahore",
    duration: "October 2024 - Present",
    description: "Working on full-scale AI featured applications including Agentic AI, Multiple Agents, and real estate construction cost estimation systems.",
    current: true,
  },
  {
    title: "Associate AI Engineer",
    company: "Agile Loop",
    location: "Islamabad",
    duration: "September 2024 - October 2024",
    description: "Worked on Browser Use - an automated browsing and data extraction application. Developed RAG applications using Agents and LangChain.",
  },
  {
    title: "AI Intern",
    company: "CorTechSols",
    location: "Islamabad",
    duration: "June 2024 - August 2024",
    description: "Responsible for gathering, cleaning, and analyzing datasets to train machine learning models. Contributed to Python back-end development, creating RESTful APIs and managing databases.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`glass-card p-6 transition-all duration-300 hover:scale-[1.02] ${
                exp.current ? "border-primary/50 glow-effect" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
