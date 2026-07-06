"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Activity } from "lucide-react";

export default function RecoveryApproach() {
  const cards = [
    {
      title: "MRP Optimization",
      items: ["Capacity Planning", "Demand Forecasting", "Auto PO Generation"]
    },
    {
      title: "Traceability",
      items: ["Lot/Serial Tracking", "Multi-warehouse", "Real-time Visibility"]
    },
    {
      title: "Quality Control",
      items: ["Workflow Checkpoints", "Inspection Logs", "Audit Trails"]
    },
    {
      title: "Supply Chain",
      items: ["Supplier Portal", "JIT Inventory", "Automated Receiving"]
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100"
              >
                <h4 className="text-[16px] font-[800] text-[#003D82] mb-5">{card.title}</h4>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-[#64748B] font-medium">
                      <CheckCircle2 size={16} className="text-[#003D82] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg lg:ml-auto"
          >

            <h2 className="text-[40px] md:text-[48px] font-[800] text-[#003D82] leading-[1.1] mb-6">
              How We Fix Your<br />Manufacturing ERP
            </h2>
            <p className="text-[18px] text-[#64748B] font-medium leading-relaxed mb-10">
              Our approach is rooted in deep manufacturing expertise. We don&apos;t just fix software; we optimize your entire production workflow.
            </p>

            {/* Highlighted Card */}
            <div className="bg-white p-6 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-start gap-5">
              <div className="w-12 h-12 rounded-[12px] bg-[#003D82] text-white flex items-center justify-center shrink-0">
                <Activity size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#003D82] mb-2">
                  Zero Downtime Recovery
                </h4>
                <p className="text-[14px] text-[#64748B] font-medium leading-relaxed">
                  We implement fixes in phases, ensuring your production lines keep moving while we optimize the system.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
