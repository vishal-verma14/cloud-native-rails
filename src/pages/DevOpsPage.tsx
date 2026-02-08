import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Cloud,
  GitBranch,
  Terminal,
  Shield,
  Eye,
  DollarSign,
  RefreshCw,
  Settings,
  CheckCircle2,
  Server,
  AlertTriangle,
  Gauge
} from "lucide-react";

const capabilities = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Design",
    description: "Automated build, test, and deployment pipelines using GitHub Actions, GitLab CI, or your preferred platform.",
  },
  {
    icon: RefreshCw,
    title: "GitOps Workflows",
    description: "ArgoCD-powered GitOps for declarative infrastructure and application deployments with full audit trails.",
  },
  {
    icon: Terminal,
    title: "Containerization Strategy",
    description: "Docker best practices, multi-stage builds, image optimization, and registry management.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Terraform modules, Pulumi, or CloudFormation for reproducible, version-controlled infrastructure.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment Automation",
    description: "AWS, GCP, or Azure deployments with auto-scaling, load balancing, and multi-region strategies.",
  },
  {
    icon: Settings,
    title: "Environment Promotion",
    description: "Staging, production, and ephemeral environment workflows with proper secret management.",
  },
  {
    icon: Eye,
    title: "Observability Stack",
    description: "Prometheus, Grafana, and logging solutions for complete visibility into system health and performance.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Readiness",
    description: "Alerting rules, runbooks, on-call procedures, and post-mortem processes for production reliability.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Cloud cost analysis, right-sizing recommendations, and reserved capacity planning.",
  },
  {
    icon: Shield,
    title: "Security Scanning",
    description: "SAST, DAST, dependency scanning, and container vulnerability scanning in CI pipelines.",
  },
];

const tools = [
  { name: "Docker", category: "Container" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Terraform", category: "IaC" },
  { name: "Helm", category: "Package" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "GitLab CI", category: "CI/CD" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Dashboards" },
  { name: "Datadog", category: "APM" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
];

const methodology = [
  {
    step: "1",
    title: "Assessment",
    description: "Audit current infrastructure, identify gaps, and define target state architecture.",
  },
  {
    step: "2",
    title: "Design",
    description: "Create detailed architecture diagrams, runbooks, and implementation roadmap.",
  },
  {
    step: "3",
    title: "Implement",
    description: "Build infrastructure as code, configure CI/CD, and set up observability.",
  },
  {
    step: "4",
    title: "Validate",
    description: "Load testing, chaos engineering, and security validation before production.",
  },
  {
    step: "5",
    title: "Operate",
    description: "Handoff with documentation, training, and optional ongoing support.",
  },
];

export default function DevOpsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Cloud className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Platform Engineering</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">DevOps &</span>
              <br />
              <span className="gradient-text">Cloud Infrastructure</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Production-ready CI/CD pipelines, Infrastructure as Code, and cloud automation. 
              Deploy with confidence—from commit to production in minutes, not days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Optimize Your DevOps
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

      {/* Capabilities Grid */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              End-to-End DevOps Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From source control to production monitoring—complete platform engineering services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Tools Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Toolchain</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Production-Grade Tools
              </h2>
              <p className="text-muted-foreground mb-8">
                We work with industry-standard tools and can adapt to your existing stack. 
                Our goal is enabling your team, not creating vendor lock-in.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="px-4 py-2 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    <p className="font-medium text-foreground text-sm">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Methodology Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />
              
              <div className="space-y-6">
                {methodology.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0 relative z-10">
                      {step.step}
                    </div>
                    <div className="card-elevated p-4 flex-1">
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              DevOps Transformation Results
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "95%", label: "Faster Deployments", icon: Gauge },
              { value: "99.9%", label: "Uptime Achieved", icon: CheckCircle2 },
              { value: "60%", label: "Cost Reduction", icon: DollarSign },
              { value: "24/7", label: "Monitoring Coverage", icon: Eye },
            ].map((stat) => (
              <div key={stat.label} className="card-elevated p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
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
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your DevOps challenges and design a platform that scales with your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
