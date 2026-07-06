"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CannabisFoundation() {
  const capabilities = [
    "Transparency",
    "Traceability",
    "Visibility",
    "Auditability",
    "Accountability",
    "Compliance"
  ];

  const checklist = [
    "Lot & Serial Tracking",
    "Batch Genealogy",
    "Recall Readiness",
    "Automated Reporting"
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Capabilities & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* 6 compact capability cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, idx) => (
                <div 
                  key={idx} 
                  className="bg-white py-4 px-6 rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-center text-center hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <span className="text-[14px] font-[800] text-[#003D82]">{cap}</span>
                </div>
              ))}
            </div>

            {/* Highlighted Quote Card */}
            <div className="mt-4 bg-green-50/70 p-6 rounded-r-[16px] border-l-4 border-[#16A34A] shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
              <p className="text-[#16A34A] italic font-medium text-[15px] leading-relaxed">
                &quot;Any gaps in traceability expose you to audit risk. We ensure your ERP is the absolute source of truth for Health Canada.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right Side: Content & Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg lg:ml-auto lg:pt-4"
          >

            <h2 className="text-[40px] md:text-[48px] font-[800] text-[#003D82] leading-[1.1] mb-6">
              Seed-to-Sale Traceability
            </h2>
            <p className="text-[18px] text-[#64748B] font-medium leading-relaxed mb-10">
              Complete product lifecycle tracking isn&apos;t optional—it&apos;s a regulatory mandate. We build the foundation for your compliance.
            </p>

            {/* Checklist */}
            <ul className="space-y-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[16px] font-[800] text-[#003D82]">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-[#16A34A] border border-green-100">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
