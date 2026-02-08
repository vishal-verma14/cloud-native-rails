import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Zap, 
  Clock, 
  Shield, 
  GitBranch,
  Layers,
  Server,
  RefreshCw,
  CheckCircle2,
  BarChart3
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Rails API Architecture",
    description: "RESTful and GraphQL APIs with clean, versioned endpoints. Service-oriented design patterns for maintainability.",
  },
  {
    icon: Layers,
    title: "Monolith to Microservices",
    description: "Strategic decomposition of monolithic Rails apps into well-bounded microservices when scale demands it.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "N+1 query elimination, eager loading strategies, database indexing, and response time optimization.",
  },
  {
    icon: Clock,
    title: "Background Jobs & Async",
    description: "Sidekiq, Active Job, and async processing patterns for offloading heavy work and improving UX.",
  },
  {
    icon: Database,
    title: "Caching & Data Modeling",
    description: "Redis caching strategies, Russian doll caching, database schema design, and query optimization.",
  },
  {
    icon: Server,
    title: "Multi-tenant Architecture",
    description: "Subdomain-based, schema-based, or row-level multi-tenancy patterns for SaaS applications.",
  },
  {
    icon: Shield,
    title: "Security Best Practices",
    description: "OWASP compliance, authentication systems, authorization policies, and security audits.",
  },
  {
    icon: GitBranch,
    title: "API Versioning Strategy",
    description: "URL-based, header-based, or custom versioning with deprecation policies and migration paths.",
  },
  {
    icon: BarChart3,
    title: "High Traffic Scaling",
    description: "Horizontal scaling patterns, load balancing, database replication, and sharding strategies.",
  },
];

const technologies = [
  "Ruby on Rails 7+",
  "PostgreSQL",
  "Redis",
  "Sidekiq",
  "GraphQL",
  "REST APIs",
  "RSpec",
  "Minitest",
  "Hotwire/Turbo",
  "Stimulus",
  "Action Cable",
  "Active Storage",
];

const patterns = [
  { name: "Service Objects", description: "Encapsulated business logic" },
  { name: "Form Objects", description: "Complex validation handling" },
  { name: "Query Objects", description: "Reusable database queries" },
  { name: "Decorators", description: "View layer logic separation" },
  { name: "Policy Objects", description: "Authorization logic" },
  { name: "Value Objects", description: "Immutable domain concepts" },
];

export default function RailsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ruby/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ruby/10 border border-ruby/30 mb-6">
              <Code2 className="w-4 h-4 text-ruby" />
              <span className="text-sm font-medium text-ruby">Ruby on Rails Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Enterprise-Grade</span>
              <br />
              <span className="text-ruby">Rails Engineering</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              8+ years building scalable Ruby on Rails platforms. From startup MVPs to high-traffic 
              enterprise systems handling millions of requests. Clean architecture, battle-tested patterns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="ruby" size="xl" asChild>
                <Link to="/contact">
                  Start Your Rails Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Rails Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-ruby text-sm font-semibold uppercase tracking-wider">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Full-Stack Rails Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every aspect of Rails development covered—from initial architecture to production optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group card-elevated p-6 hover:border-ruby/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-ruby/10 text-ruby flex items-center justify-center mb-4 group-hover:bg-ruby group-hover:text-ruby-foreground transition-colors">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Architecture Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Architecture</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Clean Rails Architecture
              </h2>
              <p className="text-muted-foreground mb-8">
                We build Rails applications using proven architectural patterns that keep your codebase 
                maintainable as it grows. No spaghetti code—just clean, testable, well-organized systems.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {patterns.map((pattern) => (
                  <div key={pattern.name} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ruby flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{pattern.name}</p>
                      <p className="text-sm text-muted-foreground">{pattern.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ruby/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <h4 className="font-semibold text-foreground mb-4">Our Rails Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-ruby/10 text-ruby border border-ruby/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <RefreshCw className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">Test-Driven Development</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Every feature backed by comprehensive RSpec tests. 
                    95%+ coverage as standard. CI/CD integrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-ruby/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Senior Rails Engineering?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're building from scratch or optimizing an existing system, 
            let's discuss how we can help.
          </p>
          <Button variant="ruby" size="xl" asChild>
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
