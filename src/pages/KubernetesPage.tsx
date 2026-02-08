import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Container,
  Server,
  Shield,
  Gauge,
  RefreshCw,
  Lock,
  Network,
  Settings,
  CheckCircle2,
  Award,
  Layers
} from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Cluster Architecture",
    description: "Production-grade Kubernetes cluster design with proper node pools, networking, and resource management.",
  },
  {
    icon: Server,
    title: "Production Deployment Patterns",
    description: "Blue-green, canary, and rolling deployments with proper health checks and rollback procedures.",
  },
  {
    icon: Gauge,
    title: "Autoscaling",
    description: "Horizontal Pod Autoscaler, Vertical Pod Autoscaler, and cluster autoscaling for dynamic workloads.",
  },
  {
    icon: RefreshCw,
    title: "Zero-Downtime Deploys",
    description: "Graceful shutdown handling, readiness probes, and traffic draining for seamless updates.",
  },
  {
    icon: Settings,
    title: "Multi-Environment Clusters",
    description: "Namespace strategies, resource quotas, and network policies for dev/staging/production isolation.",
  },
  {
    icon: Lock,
    title: "Secrets Management",
    description: "External Secrets Operator, sealed secrets, or HashiCorp Vault integration for secure credential handling.",
  },
  {
    icon: Network,
    title: "Service Mesh Readiness",
    description: "Istio service mesh implementation for advanced traffic management, observability, and security.",
  },
  {
    icon: Shield,
    title: "Platform Reliability",
    description: "SLO/SLI definition, error budgets, and reliability engineering practices for production systems.",
  },
];

const certifications = [
  { name: "CKA", fullName: "Certified Kubernetes Administrator" },
  { name: "CKAD", fullName: "Certified Kubernetes Application Developer" },
  { name: "KCNA", fullName: "Kubernetes and Cloud Native Associate" },
  { name: "KCSA", fullName: "Kubernetes and Cloud Native Security Associate" },
  { name: "Istio", fullName: "Istio Certified Associate" },
];

const k8sStack = [
  "Kubernetes",
  "Helm",
  "ArgoCD",
  "Kustomize",
  "Prometheus",
  "Grafana",
  "Istio",
  "Cert-Manager",
  "External-DNS",
  "Ingress-NGINX",
  "Velero",
  "Karpenter",
];

export default function KubernetesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Container className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Golden Kubestronaut Certified</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Production</span>
              <br />
              <span className="gradient-text-secondary">Kubernetes Platform</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              CNCF-certified Kubernetes expertise. From cluster architecture to service mesh—production-ready 
              container orchestration that scales from startup to enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Build Your Platform
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Kubernetes Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-12 bg-accent/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold text-foreground">Golden Kubestronaut</p>
                <p className="text-sm text-muted-foreground">Top ranked in India, globally recognized</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent font-semibold text-sm"
                  title={cert.fullName}
                >
                  {cert.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Enterprise Kubernetes Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete Kubernetes platform engineering—from initial cluster setup to day-two operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group card-elevated p-6 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* K8s Stack */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Ecosystem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Cloud-Native Stack
              </h2>
              <p className="text-muted-foreground mb-8">
                We implement the complete CNCF landscape—from ingress controllers to service meshes. 
                Production-hardened configurations, not tutorial-level setups.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {k8sStack.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-accent/10 text-accent border border-accent/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <h4 className="font-semibold text-foreground mb-6">Platform Reliability Metrics</h4>
                
                <div className="space-y-6">
                  {[
                    { label: "Cluster Uptime", value: "99.99%" },
                    { label: "Deployment Success Rate", value: "99.5%" },
                    { label: "Mean Time to Recovery", value: "< 5 min" },
                    { label: "Security Compliance", value: "100%" },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{metric.label}</span>
                      <span className="font-bold text-accent">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Production Kubernetes?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get CNCF-certified expertise for your container platform. From greenfield clusters to complex migrations.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">
              Discuss Your Platform
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
