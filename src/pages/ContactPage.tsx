import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Calendar, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">Let's Talk</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a Rails, Kubernetes, or DevOps challenge? Let's discuss how we can help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                      <Input placeholder="Your name" className="bg-muted/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input type="email" placeholder="you@company.com" className="bg-muted/50" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                    <Input placeholder="Your company" className="bg-muted/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">How can we help?</label>
                    <Textarea placeholder="Tell us about your project..." rows={5} className="bg-muted/50" />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">Send Message</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="card-elevated p-6">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">hello@cloudrails.dev</p>
                </div>
                <div className="card-elevated p-6">
                  <Calendar className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Schedule a Call</h3>
                  <p className="text-muted-foreground mb-4">Book a 30-minute discovery call</p>
                  <Button variant="outline">Book Time</Button>
                </div>
                <div className="card-elevated p-6">
                  <MapPin className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">Remote-first, serving clients globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
