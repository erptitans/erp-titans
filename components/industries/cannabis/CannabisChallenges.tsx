"use client";

import { motion } from "framer-motion";
import { AlertCircle, Search, Box, LineChart, ShieldAlert, Trash2 } from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    title: "Compliance Reporting Errors",
    description: "Struggling with Health Canada & CRA reporting. Inaccurate data leads to audit risks."
  },
  {
    icon: Search,
    title: "Traceability Gaps",
    description: "Inability to track strains and batches accurately. Manual tracking is prone to errors."
  },
  {
    icon: Box,
    title: "Inventory Issues",
    description: "Lack of integrated tracking across cultivation, processing, and retail stages."
  },
  {
    icon: LineChart,
    title: "Financial Transparency",
    description: "Multi-location accounting and taxation complexities make P&L transparency difficult."
  },
  {
    icon: ShieldAlert,
    title: "Quality Control Hurdles",
    description: "QC and COA documentation are not integrated into production workflows."
  },
  {
    icon: Trash2,
    title: "Waste Tracking",
    description: "Difficulty in documenting waste and by-product reuse as required by mandates."
  }
];

export default function CannabisChallenges() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-[40px] md:text-[48px] font-[800] text-[#003D82] leading-[1.1] mb-6">
            Regulatory Roadblocks
          </h2>
          <p className="text-[18px] text-[#64748B] font-medium">
            We solve the compliance and operational issues that risk your license and stall growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-4 text-[#003D82]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-[16px] font-bold text-[#003D82] mb-2">
                  {challenge.title}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-snug font-medium">
                  {challenge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
