import ServicesHero from "@/components/services/ServicesHero";
import ServicePillars from "@/components/services/ServicePillars";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ErpRescueProgram from "@/components/services/ErpRescueProgram";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Services | ERP Titans",
  description: "Comprehensive ERP Lifecycle Support for SMEs globally.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <ServicePillars />
      <WhyChooseUs />
      <ErpRescueProgram />
      <CTA />
    </div>
  );
}
