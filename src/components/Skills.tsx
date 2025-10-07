import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "AI & Machine Learning",
    skills: [
      "Deep Learning",
      "NLP",
      "LangChain",
      "LangGraph",
      "Agents",
      "RAG",
      "Prompt Engineering",
      "LLMs Fine-tuning",
      "Hugging Face",
      "Transformers",
      "BERT",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    category: "Programming & Frameworks",
    skills: [
      "Python",
      "C++",
      "FastAPI",
      "Django",
      "React",
      "HTML",
      "CSS",
      "Data Structures",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "NLTK",
      "EDA",
      "Big Data Technologies",
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "AWS Deployment",
      "Docker",
      "Streamlit",
      "DigitalOcean",
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "n8n",
      "LiveKit",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Technical Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
