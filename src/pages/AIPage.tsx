import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Brain,
  Sparkles,
  MessageSquare,
  FileSearch,
  Wand2,
  Bot,
  Zap,
  Database,
  Code2,
  CheckCircle2
} from "lucide-react";

const useCases = [
  {
    icon: MessageSquare,
    title: "Conversational AI Features",
    description: "Add chat interfaces, customer support bots, and conversational agents to your Rails applications.",
  },
  {
    icon: FileSearch,
    title: "Document Q&A Systems",
    description: "Build RAG-powered knowledge bases that let users query your documentation and data naturally.",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description: "Automated content creation, summarization, and text transformation integrated into your workflows.",
  },
  {
    icon: Wand2,
    title: "AI-Powered Automation",
    description: "Intelligent workflow automation, data extraction, and decision support systems.",
  },
  {
    icon: Bot,
    title: "Internal Tooling",
    description: "AI assistants for your team—code review helpers, documentation generators, and productivity tools.",
  },
  {
    icon: Database,
    title: "Semantic Search",
    description: "Vector embeddings and similarity search for intelligent data retrieval and recommendations.",
  },
];

const integrations = [
  "OpenAI GPT-4",
  "Anthropic Claude",
  "Cohere",
  "Hugging Face",
  "LangChain",
  "Pinecone",
  "Weaviate",
  "pgvector",
  "Rails AI Gems",
  "Sidekiq AI Jobs",
];

const approach = [
  {
    step: "1",
    title: "Use Case Analysis",
    description: "Identify where AI can add real value to your product—not AI for AI's sake.",
  },
  {
    step: "2",
    title: "Architecture Design",
    description: "Design scalable, cost-effective AI pipelines integrated with your Rails backend.",
  },
  {
    step: "3",
    title: "Implementation",
    description: "Build production-ready AI features with proper error handling, caching, and monitoring.",
  },
  {
    step: "4",
    title: "Optimization",
    description: "Tune prompts, reduce latency, optimize costs, and improve output quality.",
  },
];

export default function AIPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
              <Brain className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">AI-Powered Applications</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">AI Integration</span>
              <br />
              <span className="gradient-text-secondary">for Rails Products</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Add LLM capabilities, intelligent automation, and AI-powered features to your Rails applications. 
              Practical AI that solves real problems—not demo-ware.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="xl" asChild>
                <Link to="/contact">
                  Explore AI Integration
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View AI Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              AI Features That Matter
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on AI applications that provide genuine value—not tech demos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group card-elevated p-6 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Approach */}
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                Our AI Integration Process
              </h2>
              
              <div className="space-y-6">
                {approach.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stack */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <h4 className="font-semibold text-foreground mb-6">AI Technology Stack</h4>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {integrations.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h5 className="font-semibold text-foreground">Rails Integration Expertise</h5>
                  <div className="space-y-2">
                    {[
                      "Background job processing for AI workloads",
                      "Streaming responses with Action Cable",
                      "Token usage tracking and cost management",
                      "Caching strategies for AI responses",
                      "Rate limiting and quota management",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Add AI to Your Product?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's explore how AI can enhance your Rails application—practical features that users love.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Discuss AI Integration
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
