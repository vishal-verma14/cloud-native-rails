import { Award, Github, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const certifications = [
  { name: "CKA", fullName: "Certified Kubernetes Administrator" },
  { name: "CKAD", fullName: "Certified Kubernetes Application Developer" },
  { name: "KCNA", fullName: "Kubernetes and Cloud Native Associate" },
  { name: "KCSA", fullName: "Kubernetes and Cloud Native Security Associate" },
  { name: "Istio", fullName: "Istio Certified Associate" },
];

const achievements = [
  "Golden Kubestronaut — Top ranked in India",
  "Open source contributor to Rails ecosystem",
  "Author of widely-used Ruby gems",
  "Founding engineer at high-growth startup",
];

export function FounderSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar Section */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform -rotate-3" />
                
                {/* Main card */}
                <div className="relative bg-card border border-border rounded-3xl p-8 h-full flex flex-col justify-center">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white">
                    VV
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                    Vikas Verma
                  </h3>
                  <p className="text-primary text-center font-medium mb-6">
                    Founder & Principal Engineer
                  </p>
                  
                  {/* Certifications */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold"
                        title={cert.fullName}
                      >
                        {cert.name}
                      </div>
                    ))}
                  </div>
                  
                  {/* Social links */}
                  <div className="flex justify-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <BookOpen className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Meet the Founder
              </h2>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Vikas Verma is a <span className="text-accent font-medium">Golden Kubestronaut</span> ranked top in India and globally recognized for cloud-native engineering excellence. He brings 8+ years of experience building scalable Ruby on Rails platforms, designing production Kubernetes infrastructure, and implementing DevOps automation.
                </p>
                <p>
                  He has led platform architecture, CI/CD systems, and cloud-native deployments as a founding engineer at a startup and as a senior engineer across global product teams.
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-3 mb-8">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="p-4 rounded-xl bg-muted/30 border border-border mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Education:</span>{" "}
                  Birla Institute of Technology — Electrical and Electronics Engineering
                </p>
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
