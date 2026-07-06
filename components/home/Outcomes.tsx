"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PremiumDashboard from "./PremiumDashboard";

export default function Outcomes() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]" id="outcomes">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid xl:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Context */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
              What A Successful Recovery Looks Like
            </h2>
            <p className="text-xl text-[#475569] leading-relaxed mb-8">
              We don&apos;t measure success by technical milestones or software installed. We measure it by the tangible business outcomes that drive your growth.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#003D82] flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">100% Outcome Focused</h4>
                  <p className="text-[#64748B] text-sm">Every fix is tied to a business goal.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Analytics Dashboard */}
          <motion.div 
            className="w-full relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <PremiumDashboard />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
