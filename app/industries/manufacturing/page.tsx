import ManufacturingHero from "@/components/industries/manufacturing/ManufacturingHero";
import Roadblocks from "@/components/industries/manufacturing/Roadblocks";
import RecoveryApproach from "@/components/industries/manufacturing/RecoveryApproach";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Manufacturing Industry ERP | ERP Titans",
  description: "Specialized ERP recovery and implementation for manufacturers. We solve production planning chaos, inventory gaps, and supply chain disconnects.",
};

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ManufacturingHero />
      <Roadblocks />
      <RecoveryApproach />
      <CTA />
    </div>
  );
}
