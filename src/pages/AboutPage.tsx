import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Award, 
  Github, 
  Linkedin, 
  BookOpen,
  Target,
  Users,
  Zap,
  Heart,
  CheckCircle2
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Engineering Excellence",
    description: "We don't ship mediocre code. Every solution is built with production-grade quality, comprehensive testing, and long-term maintainability in mind.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We're not just vendors—we're partners in your success. We invest time understanding your business and align our work with your goals.",
  },
  {
    icon: Zap,
    title: "Pragmatic Solutions",
    description: "We choose the right tool for the job, not the trendy one. Simple solutions that work beat complex solutions that don't.",
  },
  {
    icon: Heart,
    title: "Knowledge Sharing",
    description: "We believe in making the industry better. Open source contributions, blog posts, and clear documentation are part of how we work.",
  },
];

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
  "Senior engineer across global product teams",
  "8+ years of production experience",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              <span className="text-foreground">Engineering-First</span>
              <br />
              <span className="gradient-text">Consultancy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              CloudRails is a specialized engineering consultancy focused on Ruby on Rails, 
              Kubernetes, and DevOps. We bring senior-level expertise to complex challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-elevated p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image/Avatar Section */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform -rotate-3" />
                  
                  <div className="relative bg-card border border-border rounded-3xl p-8 h-full flex flex-col justify-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white">
                      VV
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                      Vikas Verma
                    </h3>
                    <p className="text-primary text-center font-medium mb-6">
                      Founder & Principal Rails + Cloud Native Engineer
                    </p>
                    
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
              <div className="order-1 lg:order-2">
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

                <div className="space-y-3 mb-8">
                  {achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-muted/30 border border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Education:</span>{" "}
                    Birla Institute of Technology — Electrical and Electronics Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why CloudRails?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Senior engineers only—no junior handoff",
                "Deep Rails and Kubernetes specialization",
                "CNCF certified expertise",
                "Production-battle-tested patterns",
                "Clear communication, no BS",
                "Long-term partnership mindset",
                "Open source contributors",
                "Transparent pricing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to work with senior engineers who care about your success?
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
