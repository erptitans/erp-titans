import CannabisHero from "@/components/industries/cannabis/CannabisHero";
import CannabisChallenges from "@/components/industries/cannabis/CannabisChallenges";
import CannabisFoundation from "@/components/industries/cannabis/CannabisFoundation";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Cannabis Industry ERP | ERP Titans",
  description: "Specialized ERP recovery and implementation for cannabis producers. We solve regulatory compliance, seed-to-sale tracking, and inventory controls.",
};

export default function CannabisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CannabisHero />
      <CannabisChallenges />
      <CannabisFoundation />
      <CTA />
    </div>
  );
}
