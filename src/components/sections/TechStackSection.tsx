const techStack = {
  "Backend & Framework": [
    { name: "Ruby on Rails", category: "primary" },
    { name: "PostgreSQL", category: "primary" },
    { name: "Redis", category: "primary" },
    { name: "Sidekiq", category: "primary" },
    { name: "GraphQL", category: "secondary" },
    { name: "REST APIs", category: "secondary" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", category: "accent" },
    { name: "Kubernetes", category: "accent" },
    { name: "Terraform", category: "accent" },
    { name: "Helm", category: "secondary" },
    { name: "AWS", category: "secondary" },
    { name: "GCP", category: "secondary" },
  ],
  "CI/CD & Automation": [
    { name: "GitHub Actions", category: "primary" },
    { name: "GitLab CI", category: "primary" },
    { name: "ArgoCD", category: "accent" },
    { name: "Prometheus", category: "secondary" },
    { name: "Grafana", category: "secondary" },
    { name: "DataDog", category: "secondary" },
  ],
  "Frontend & Mobile": [
    { name: "React", category: "primary" },
    { name: "TypeScript", category: "primary" },
    { name: "Flutter", category: "accent" },
    { name: "Tailwind CSS", category: "secondary" },
    { name: "Next.js", category: "secondary" },
    { name: "React Native", category: "secondary" },
  ],
};

const categoryStyles = {
  primary: "badge-tech-primary",
  accent: "badge-tech-accent",
  secondary: "badge-tech",
};

export function TechStackSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Technology</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-proven technologies chosen for reliability, scalability, and developer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={categoryStyles[tech.category as keyof typeof categoryStyles]}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
