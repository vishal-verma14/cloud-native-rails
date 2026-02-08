import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vikas transformed our monolithic Rails app into a scalable, containerized platform. The migration was seamless, and we saw a 60% reduction in deployment time.",
    author: "Sarah Chen",
    role: "CTO",
    company: "FinTech Startup",
    result: "60% faster deployments",
  },
  {
    quote: "The Kubernetes infrastructure they built handles our Black Friday traffic without breaking a sweat. True senior-level engineering expertise.",
    author: "Marcus Rodriguez",
    role: "VP Engineering",
    company: "E-commerce Platform",
    result: "10x traffic handling",
  },
  {
    quote: "Finally, a consultancy that speaks our language. The Rails codebase they delivered is clean, well-tested, and a joy to maintain.",
    author: "Emily Watson",
    role: "Lead Developer",
    company: "Healthcare SaaS",
    result: "95% test coverage",
  },
  {
    quote: "Their DevOps expertise helped us achieve true CI/CD. We went from weekly deployments to multiple times per day with confidence.",
    author: "James Kim",
    role: "Engineering Manager",
    company: "Media Company",
    result: "20x deployment frequency",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            What Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative">
            <div className="card-elevated p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                {testimonials[currentIndex].result}
              </div>

              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
