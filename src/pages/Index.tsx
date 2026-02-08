import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <TechStackSection />
      <CaseStudiesPreview />
      <FounderSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
