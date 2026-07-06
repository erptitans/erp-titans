"use client";

import { motion } from "framer-motion";
import { Settings, Layers, Link2, ShieldCheck, BarChart4, Puzzle } from "lucide-react";

const challenges = [
  {
    icon: Settings,
    title: "Production Planning Chaos",
    description: "Your MRP/MPS isn't working, leading to missed deadlines and excess inventory. Teams rely on manual scheduling."
  },
  {
    icon: Layers,
    title: "Inventory Visibility Gaps",
    description: "Can't track raw materials, WIP, or finished goods accurately. Constant discrepancies and write-offs."
  },
  {
    icon: Link2,
    title: "Supply Chain Disconnects",
    description: "Supplier orders, receiving, and quality checks aren't integrated. Manual processes create delays."
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    description: "Traceability and quality control workflows aren't properly configured. Regulatory compliance is a nightmare."
  },
  {
    icon: BarChart4,
    title: "Reporting Blindness",
    description: "No real-time visibility into production metrics, costs, or performance. Decision-making is reactive."
  },
  {
    icon: Puzzle,
    title: "Customization Overload",
    description: "Previous implementation added too many custom modules that conflict with core Odoo functionality."
  }
];

export default function Roadblocks() {
  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="text-center max-w-[600px] max-w-full mx-auto mb-12">

          <h2 className="text-4xl lg:text-5xl font-bold text-[#003D82] leading-tight mb-4">
            Common Manufacturing<br />Roadblocks
          </h2>
          <p className="text-base text-[#64748B] font-medium">
            We solve the complex problems that drain your ROI and stall production.
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
