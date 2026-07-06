"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const genericPoints = [
  "We do ERP implementation",
  "We work for any industry",
  "We build custom solutions for everything",
  "Price is our only advantage",
];

const specialistPoints = [
  "We fix broken ERP implementations",
  "Specialized in Manufacturing & Distribution",
  "Match systems to business, not vice versa",
  "Expertise is our competitive edge",
];

export default function Comparison() {
  return (
    <section className="py-14 lg:py-16 bg-white relative">
      <div className="max-w-[1200px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
            How We&apos;re Different
          </h2>
          <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
            Specialists vs. Generic Implementers. There&apos;s a world of difference in the results.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Card: Generic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] rounded-[32px] p-6 md:p-8 border border-gray-200 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                <XCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#334155]">Generic Implementers</h3>
            </div>
            <ul className="space-y-4 flex-grow">
              {genericPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#64748B] text-base font-medium">
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card: Specialists */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[32px] p-6 md:p-8 border border-[#334155] shadow-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[#003D82]/20 transition-all duration-500 flex flex-col"
          >
            {/* Soft decorative background shape */}
            <div className="absolute -inset-24 bg-[#003D82]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex items-center gap-4 mb-6 pb-6 border-b border-[#334155]">
              <div className="w-12 h-12 rounded-full bg-[#003D82]/20 text-[#003D82] flex items-center justify-center shrink-0 border border-[#003D82]/30">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">ERP Titans</h3>
            </div>
            <ul className="relative z-10 space-y-4 flex-grow">
              {specialistPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#E2E8F0] text-base font-medium">
                  <CheckCircle2 size={20} className="text-[#003D82] mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
