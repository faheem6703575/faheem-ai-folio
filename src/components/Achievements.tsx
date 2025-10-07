import { Card } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "2nd Position - University FYP Showcase",
    description: "Won 2nd position in university-wide Final Year Project showcase at COMSATS University Islamabad",
    icon: Trophy,
  },
  {
    title: "3rd Position - Inter-University Competition",
    description: "Presented FYP at The University of Faisalabad and COMSATS University Wah Campus and gained 3rd position",
    icon: Award,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
