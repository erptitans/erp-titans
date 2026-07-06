import Hero from "@/components/home/Hero";
import Challenges from "@/components/home/Challenges"; // Used for Symptoms section
import CostOfInaction from "@/components/home/CostOfInaction";
import RecoveryProcess from "@/components/home/RecoveryProcess";
import WhyERP from "@/components/home/WhyERP";
import Outcomes from "@/components/home/Outcomes";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <CostOfInaction />
      <RecoveryProcess />
      <WhyERP />
      <Outcomes />
      <CTA />
    </>
  );
}
