import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Profile</h3>
            <p className="text-muted-foreground leading-relaxed">
              A driven Computer Science graduate specializing in AI and Machine Learning with strong Python skills and over one year of experience. Currently working as a Generative AI Engineer, I'm experienced in applying machine learning algorithms to solve real-world problems and eager to contribute to innovative AI projects.
            </p>
          </Card>

          <Card className="glass-card p-6 space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Education</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground">COMSATS University Islamabad</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>2020 - 2024</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
