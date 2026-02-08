import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cloud, Container, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Golden Kubestronaut Certified",
  "8+ Years Rails Experience",
  "Enterprise-Ready Systems",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">Cloud-Native Engineering Consultancy</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Scale Your Platform with</span>
            <br />
            <span className="gradient-text">Rails + Kubernetes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Senior-level Ruby on Rails development, DevOps automation, and Kubernetes platform engineering. 
            Enterprise-ready backends that scale from startup to millions of users.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Tech Icons */}
          <div className="flex items-center justify-center gap-8 mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors">
              <Code2 className="w-8 h-8" />
              <span className="text-xs font-medium">Rails</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-accent transition-colors">
              <Container className="w-8 h-8" />
              <span className="text-xs font-medium">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-secondary transition-colors">
              <Cloud className="w-8 h-8" />
              <span className="text-xs font-medium">Cloud</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
