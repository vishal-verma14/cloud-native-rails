import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Layers,
  Database,
  Zap,
  BarChart3,
  Server,
  RefreshCw,
  Shield,
  Users,
  CheckCircle2
} from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "System Design",
    description: "Comprehensive architecture for complex applications—microservices, event-driven, or well-structured monoliths.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Schema design, indexing strategies, read replicas, and sharding patterns for high-performance data layers.",
  },
  {
    icon: BarChart3,
    title: "Performance Engineering",
    description: "Bottleneck analysis, query optimization, caching strategies, and load testing for demanding workloads.",
  },
  {
    icon: RefreshCw,
    title: "Event-Driven Design",
    description: "Message queues, event sourcing, CQRS patterns, and async processing for decoupled systems.",
  },
  {
    icon: Server,
    title: "API Design",
    description: "RESTful and GraphQL API architecture with proper versioning, documentation, and developer experience.",
  },
  {
    icon: Shield,
    title: "Security Architecture",
    description: "Authentication, authorization, data protection, and compliance-ready security patterns.",
  },
  {
    icon: Users,
    title: "Multi-Tenant Systems",
    description: "SaaS-ready architecture with tenant isolation, resource management, and customization capabilities.",
  },
  {
    icon: Zap,
    title: "Scaling Patterns",
    description: "Horizontal scaling, load balancing, CDN integration, and geo-distributed deployments.",
  },
];

const scalingLevels = [
  {
    level: "Startup",
    requests: "1K-10K/day",
    approach: "Optimized monolith with proper caching and database indexing.",
  },
  {
    level: "Growth",
    requests: "100K-1M/day",
    approach: "Background job optimization, read replicas, CDN, and strategic caching.",
  },
  {
    level: "Scale",
    requests: "10M+/day",
    approach: "Service decomposition, event-driven architecture, and horizontal scaling.",
  },
  {
    level: "Enterprise",
    requests: "100M+/day",
    approach: "Multi-region, sharded databases, service mesh, and advanced reliability engineering.",
  },
];

export default function ArchitecturePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">System Architecture</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Architecture</span>
              <br />
              <span className="gradient-text">& Scaling</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Design systems that scale with your business. From startup architecture to enterprise-grade 
              platforms handling millions of users—we've done it all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Architecture Review
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Architecture Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group card-elevated p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling Levels */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Scaling Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Right-Sized Architecture
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We design for your current stage while building foundations for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scalingLevels.map((level, index) => (
              <div
                key={level.level}
                className="card-elevated p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" 
                  style={{ opacity: 0.3 + (index * 0.2) }}
                />
                <h3 className="text-xl font-bold text-foreground mb-2">{level.level}</h3>
                <p className="text-accent font-mono text-sm mb-4">{level.requests}</p>
                <p className="text-muted-foreground text-sm">{level.approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What You Get
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Architecture Review</h4>
                {[
                  "Current state assessment",
                  "Bottleneck identification",
                  "Technical debt analysis",
                  "Security review",
                  "Scalability roadmap",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Deliverables</h4>
                {[
                  "Architecture diagrams (C4 model)",
                  "Technical recommendations",
                  "Implementation roadmap",
                  "Risk assessment",
                  "Cost projections",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Architecture Guidance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert architecture review and scaling strategy for your platform.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Schedule a Review
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
