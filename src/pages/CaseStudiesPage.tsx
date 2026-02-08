import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users, Shield } from "lucide-react";

const caseStudies = [
  {
    id: "fintech-scaling",
    title: "FinTech Platform Scaling",
    client: "Series B FinTech Startup",
    category: "Rails + Kubernetes",
    challenge: "Monolithic Rails application struggling with Black Friday traffic spikes and slow deployments taking hours.",
    solution: "Containerized the Rails application, migrated to Kubernetes, implemented GitOps with ArgoCD, and optimized the database layer.",
    results: [
      { metric: "10x", label: "Throughput Increase" },
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "50%", label: "Infrastructure Cost Reduction" },
      { metric: "15 min", label: "Deployment Time (from 4 hours)" },
    ],
    technologies: ["Ruby on Rails", "Kubernetes", "PostgreSQL", "Redis", "ArgoCD", "Terraform"],
    color: "from-primary to-secondary",
  },
  {
    id: "ecommerce-devops",
    title: "E-commerce DevOps Transformation",
    client: "D2C E-commerce Brand",
    category: "DevOps + CI/CD",
    challenge: "Manual deployments causing downtime, no staging environment, and fear of releasing during peak hours.",
    solution: "Implemented complete CI/CD pipeline with GitHub Actions, created ephemeral staging environments, and established GitOps workflow.",
    results: [
      { metric: "20x", label: "Deployment Frequency" },
      { metric: "Zero", label: "Deployment Downtime" },
      { metric: "100%", label: "Rollback Capability" },
      { metric: "3 min", label: "Time to Production" },
    ],
    technologies: ["GitHub Actions", "Docker", "AWS ECS", "Terraform", "Datadog"],
    color: "from-secondary to-accent",
  },
  {
    id: "healthcare-security",
    title: "Healthcare SaaS Architecture",
    client: "Healthcare Technology Company",
    category: "Rails API + Security",
    challenge: "Legacy Rails application needed HIPAA compliance, SOC2 readiness, and comprehensive security audit.",
    solution: "Complete security architecture overhaul, implemented encryption at rest and in transit, added audit logging, and achieved compliance certifications.",
    results: [
      { metric: "HIPAA", label: "Compliance Achieved" },
      { metric: "SOC2", label: "Type II Ready" },
      { metric: "100%", label: "Test Coverage" },
      { metric: "A+", label: "Security Rating" },
    ],
    technologies: ["Ruby on Rails", "PostgreSQL", "HashiCorp Vault", "AWS KMS", "Audit Trail"],
    color: "from-accent to-primary",
  },
  {
    id: "saas-multitenancy",
    title: "Multi-Tenant SaaS Platform",
    client: "B2B SaaS Company",
    category: "Architecture + Scaling",
    challenge: "Needed to support enterprise customers with data isolation requirements while maintaining operational efficiency.",
    solution: "Designed schema-based multi-tenancy with tenant isolation, implemented per-tenant resource limits, and built admin tooling.",
    results: [
      { metric: "500+", label: "Tenants Supported" },
      { metric: "100%", label: "Data Isolation" },
      { metric: "5ms", label: "Tenant Switch Time" },
      { metric: "3x", label: "Revenue Growth" },
    ],
    technologies: ["Ruby on Rails", "PostgreSQL Schemas", "Redis", "Sidekiq", "React"],
    color: "from-ruby to-primary",
  },
];

export default function CaseStudiesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              <span className="text-foreground">Real Results,</span>
              <br />
              <span className="gradient-text">Real Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Deep dives into how we've helped companies scale their platforms, 
              optimize their infrastructure, and ship faster.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`card-elevated overflow-hidden ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left side - Content */}
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {study.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">
                        {study.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">{study.client}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground text-sm">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-muted-foreground text-sm">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Results */}
                    <div className="bg-muted/30 rounded-xl p-6 lg:p-8">
                      <h4 className="font-semibold text-foreground mb-6">Results</h4>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result) => (
                          <div key={result.label}>
                            <div className="text-3xl font-bold gradient-text mb-1">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: TrendingUp, value: "50+", label: "Projects Delivered" },
              { icon: Users, value: "30+", label: "Happy Clients" },
              { icon: Clock, value: "8+", label: "Years Experience" },
              { icon: Shield, value: "99.9%", label: "Uptime Record" },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your challenges and explore how we can help transform your platform.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
