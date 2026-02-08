import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "FinTech Platform Scaling",
    category: "Rails + Kubernetes",
    description: "Migrated a monolithic Rails application to Kubernetes, enabling 10x throughput and 99.99% uptime.",
    metrics: ["10x Throughput", "99.99% Uptime", "50% Cost Reduction"],
    color: "from-primary to-secondary",
  },
  {
    title: "E-commerce DevOps Transformation",
    category: "DevOps + CI/CD",
    description: "Implemented GitOps workflow with ArgoCD, reducing deployment time from days to minutes.",
    metrics: ["20x Faster Deploys", "Zero Downtime", "Full Automation"],
    color: "from-secondary to-accent",
  },
  {
    title: "Healthcare SaaS Architecture",
    category: "Rails API + Security",
    description: "Built HIPAA-compliant Rails backend with comprehensive security controls and audit logging.",
    metrics: ["HIPAA Compliant", "100% Test Coverage", "SOC2 Ready"],
    color: "from-accent to-primary",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Real Results, Real Impact
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={study.title}
              to="/case-studies"
              className="group card-elevated overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${study.color}`} />
              
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {study.category}
                </span>
                
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {study.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
