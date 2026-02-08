import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes CloudRails different from other agencies?",
    answer: "We're not a generic agency. CloudRails is an engineering-first consultancy with deep specialization in Ruby on Rails, Kubernetes, and DevOps. Our founder is a Golden Kubestronaut with multiple CNCF certifications. We bring senior-level expertise to every project, not junior developers learning on your dime.",
  },
  {
    question: "Do you work with startups or enterprises?",
    answer: "Both. We've helped early-stage startups build their initial Rails platforms and worked with enterprises on complex migrations and scaling challenges. Our approach adapts to your stage and needs, but the engineering quality remains consistently high.",
  },
  {
    question: "What's your typical engagement model?",
    answer: "We offer flexible engagement models: project-based for specific deliverables, retainer for ongoing support, or embedded team augmentation for longer initiatives. Most clients start with a discovery phase to define scope and approach.",
  },
  {
    question: "Can you help with an existing Rails application?",
    answer: "Absolutely. We specialize in Rails application audits, performance optimization, monolith-to-microservices migration, and modernization. We'll assess your current architecture and provide actionable recommendations.",
  },
  {
    question: "What about ongoing maintenance and support?",
    answer: "Yes, we offer SLA-based support packages for production systems. This includes monitoring, incident response, security updates, and proactive optimization. Many clients transition from project work to a support retainer.",
  },
  {
    question: "How do you handle communication and project management?",
    answer: "We integrate with your existing workflows—Slack, GitHub, Jira, or whatever tools you use. You'll get regular updates, async communication, and scheduled sync calls. Transparency and over-communication are our defaults.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border-border data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
