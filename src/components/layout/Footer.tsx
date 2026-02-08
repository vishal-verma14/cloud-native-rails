import { Link } from "react-router-dom";
import { Code2, Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const services = [
  { name: "Rails Engineering", href: "/rails" },
  { name: "DevOps & Platform", href: "/devops" },
  { name: "Kubernetes Services", href: "/kubernetes" },
  { name: "Architecture & Scaling", href: "/architecture" },
  { name: "AI Integration", href: "/ai" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const certifications = [
  "CKA", "CKAD", "KCNA", "KCSA", "Istio"
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">CloudRails</span>
                <span className="text-xs text-muted-foreground leading-tight">Engineering</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cloud-native engineering consultancy specializing in Ruby on Rails, Kubernetes, and DevOps automation. Enterprise-ready solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  hello@cloudrails.dev
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  Remote-first, Global
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">CNCF Certified</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CloudRails Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
