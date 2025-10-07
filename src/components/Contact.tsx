import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "faheem.akram.bscs@gmail.com",
    href: "mailto:faheem.akram.bscs@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-309-6703575",
    href: "tel:+923096703575",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/faheemakram",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/faheemakram",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <Card className="glass-card p-8 space-y-8">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="mr-2 h-5 w-5" />
                    {social.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Faheem Akram. Built with passion for AI & Innovation.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
