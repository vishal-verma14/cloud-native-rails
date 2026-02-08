import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code2, Cloud, Container, Layers, Brain, BookOpen, Users, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { name: "Rails Engineering", href: "/rails", icon: Code2, description: "Enterprise Ruby on Rails development" },
  { name: "DevOps & Platform", href: "/devops", icon: Cloud, description: "CI/CD and infrastructure automation" },
  { name: "Kubernetes Services", href: "/kubernetes", icon: Container, description: "Container orchestration at scale" },
  { name: "Architecture & Scaling", href: "/architecture", icon: Layers, description: "System design and optimization" },
  { name: "AI Integration", href: "/ai", icon: Brain, description: "LLM and AI-powered features" },
];

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "#", icon: Code2, hasDropdown: true },
  { name: "Case Studies", href: "/case-studies", icon: BookOpen },
  { name: "About", href: "/about", icon: Users },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-dark py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">CloudRails</span>
              <span className="text-xs text-muted-foreground leading-tight">Engineering</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        isServicesOpen && "rotate-180"
                      )} />
                    </button>

                    {/* Mega Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                        isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      )}
                    >
                      <div className="w-[500px] p-4 glass-dark rounded-xl border border-border shadow-xl">
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <service.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-medium text-foreground text-sm">{service.name}</div>
                                <div className="text-xs text-muted-foreground">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[80vh] mt-4" : "max-h-0"
          )}
        >
          <div className="glass-dark rounded-xl p-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-muted/50"
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        isServicesOpen && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "space-y-1 pl-4 overflow-hidden transition-all duration-300",
                      isServicesOpen ? "max-h-96" : "max-h-0"
                    )}>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50"
                        >
                          <service.icon className="w-4 h-4" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg",
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
