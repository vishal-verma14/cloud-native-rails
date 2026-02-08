import { TrendingUp, Users, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "8+",
    label: "Years Experience",
    description: "Building scalable Rails platforms",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime Delivered",
    description: "Across production systems",
  },
  {
    icon: Users,
    value: "50+",
    label: "Projects Shipped",
    description: "From startups to enterprises",
  },
  {
    icon: Shield,
    value: "5",
    label: "CNCF Certifications",
    description: "CKA, CKAD, KCNA, KCSA, Istio",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
