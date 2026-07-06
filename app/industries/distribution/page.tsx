import DistributionHero from "@/components/industries/distribution/DistributionHero";
import DistributionChallenges from "@/components/industries/distribution/DistributionChallenges";
import DistributionSolutions from "@/components/industries/distribution/DistributionSolutions";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Distribution Industry ERP | ERP Titans",
  description: "Specialized ERP recovery and implementation for distributors. We solve multi-warehouse chaos, order fulfillment delays, and logistics disconnects.",
};

export default function DistributionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DistributionHero />
      <DistributionChallenges />
      <DistributionSolutions />
      <CTA />
    </div>
  );
}
