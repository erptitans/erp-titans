import AboutIntro from "@/components/about/AboutIntro";
import Comparison from "@/components/about/Comparison";
import WhoWeServe from "@/components/about/WhoWeServe";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | ERP Recovery Specialists",
  description: "We fix failed ERP projects and help businesses scale again. ERP Titans specializes in recovery, optimization, and long-term business transformation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutIntro />
      <Comparison />
      <WhoWeServe />
      <AboutCTA />
    </div>
  );
}
