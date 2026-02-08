import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "Scaling Rails to 10M Requests Per Day", category: "Rails", date: "Jan 15, 2026", slug: "#" },
  { title: "GitOps with ArgoCD: A Complete Guide", category: "DevOps", date: "Jan 10, 2026", slug: "#" },
  { title: "Kubernetes Autoscaling Best Practices", category: "Kubernetes", date: "Jan 5, 2026", slug: "#" },
  { title: "Building AI Features in Rails Applications", category: "AI", date: "Dec 28, 2025", slug: "#" },
  { title: "Zero-Downtime Deployments with Kubernetes", category: "Kubernetes", date: "Dec 20, 2025", slug: "#" },
  { title: "Rails API Performance Optimization", category: "Rails", date: "Dec 15, 2025", slug: "#" },
];

export default function BlogPage() {
  return (
    <Layout>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">Engineering Insights</h1>
            <p className="text-xl text-muted-foreground">Technical deep-dives on Rails, Kubernetes, and DevOps.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {posts.map((post) => (
              <Link key={post.title} to={post.slug} className="group card-elevated p-6 flex items-center justify-between hover:border-primary/30 transition-all">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase">{post.category}</span>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mt-1">{post.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
