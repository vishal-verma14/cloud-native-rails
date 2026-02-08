import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cloud, Container, Layers, Brain, Smartphone } from "lucide-react";

const primaryServices = [
  {
    icon: Code2,
    title: "Ruby on Rails Engineering",
    description: "Enterprise-grade Rails API development, monolith to microservices migration, and performance optimization. Battle-tested patterns for high-traffic applications.",
    href: "/rails",
    color: "ruby",
    features: ["API Architecture", "Performance Tuning", "Clean Architecture"],
  },
  {
    icon: Cloud,
    title: "DevOps & Platform Engineering",
    description: "CI/CD pipeline design, Infrastructure as Code, GitOps workflows, and cloud deployment automation. Production-ready infrastructure from day one.",
    href: "/devops",
    color: "primary",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "GitOps Workflows"],
  },
  {
    icon: Container,
    title: "Kubernetes Services",
    description: "Production Kubernetes clusters, autoscaling, zero-downtime deployments, and platform reliability engineering. CNCF certified expertise.",
    href: "/kubernetes",
    color: "accent",
    features: ["Cluster Architecture", "Autoscaling", "Zero-Downtime Deploys"],
  },
  {
    icon: Layers,
    title: "Architecture & Scaling",
    description: "System design for scale, database optimization, caching strategies, and event-driven architecture. Solutions that grow with your business.",
    href: "/architecture",
    color: "secondary",
    features: ["System Design", "Database Optimization", "Event-Driven Architecture"],
  },
];

const secondaryServices = [
  {
    icon: Brain,
    title: "AI Integration",
    description: "LLM integration, AI-powered features, and intelligent automation for Rails applications.",
    href: "/ai",
  },
  {
    icon: Smartphone,
    title: "React & Mobile",
    description: "Modern React frontends and Flutter mobile apps built on solid backend foundations.",
    href: "/contact",
  },
];

const colorClasses = {
  ruby: {
    icon: "bg-ruby/10 text-ruby group-hover:bg-ruby group-hover:text-ruby-foreground",
    border: "group-hover:border-ruby/50",
    glow: "group-hover:shadow-ruby/20",
  },
  primary: {
    icon: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
    border: "group-hover:border-primary/50",
    glow: "group-hover:shadow-primary/20",
  },
  accent: {
    icon: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
    border: "group-hover:border-accent/50",
    glow: "group-hover:shadow-accent/20",
  },
  secondary: {
    icon: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
    border: "group-hover:border-secondary/50",
    glow: "group-hover:shadow-secondary/20",
  },
};

export function ServicesOverview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Engineering-First Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in building scalable backend platforms and cloud-native infrastructure. 
            Not a generic agency—senior engineering expertise for complex challenges.
          </p>
        </div>

        {/* Primary Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {primaryServices.map((service) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <Link
                key={service.title}
                to={service.href}
                className={`group card-elevated p-8 transition-all duration-300 hover:shadow-xl ${colors.border} ${colors.glow}`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${colors.icon}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Secondary Services */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondaryServices.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group card-elevated p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
